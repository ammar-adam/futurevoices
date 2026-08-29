import { head, list, put } from '@vercel/blob'
import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'crypto'

// All documents are AES-256-GCM encrypted before hitting Blob storage,
// since Vercel Blob URLs are publicly fetchable.
function key(): Buffer {
  const secret = process.env.AUTH_SECRET
  if (!secret) throw new Error('AUTH_SECRET is not set')
  return createHash('sha256').update(secret).digest()
}

function encrypt(plain: string): string {
  const iv = randomBytes(12)
  const cipher = createCipheriv('aes-256-gcm', key(), iv)
  const enc = Buffer.concat([cipher.update(plain, 'utf8'), cipher.final()])
  return Buffer.concat([iv, cipher.getAuthTag(), enc]).toString('base64')
}

function decrypt(blob: string): string {
  const raw = Buffer.from(blob, 'base64')
  const iv = raw.subarray(0, 12)
  const tag = raw.subarray(12, 28)
  const enc = raw.subarray(28)
  const decipher = createDecipheriv('aes-256-gcm', key(), iv)
  decipher.setAuthTag(tag)
  return Buffer.concat([decipher.update(enc), decipher.final()]).toString('utf8')
}

/**
 * Every record is stored as its own blob under a deterministic key. Appending to
 * one shared JSON array would read-modify-write, so two submissions arriving
 * together would silently overwrite each other and lose a lead.
 */
async function putRecord(path: string, data: unknown): Promise<void> {
  await put(path, encrypt(JSON.stringify(data)), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  })
}

async function getRecord<T>(path: string): Promise<T | null> {
  try {
    const meta = await head(path)
    const res = await fetch(meta.url, { cache: 'no-store' })
    if (!res.ok) return null
    return JSON.parse(decrypt(await res.text())) as T
  } catch {
    return null
  }
}

async function listRecords<T>(prefix: string): Promise<T[]> {
  const out: T[] = []
  let cursor: string | undefined
  do {
    const page = await list({ prefix, cursor, limit: 1000 })
    const batch: (T | null)[] = await Promise.all(
      page.blobs.map(async (b): Promise<T | null> => {
        try {
          const res = await fetch(b.url, { cache: 'no-store' })
          if (!res.ok) return null
          return JSON.parse(decrypt(await res.text())) as T
        } catch {
          return null
        }
      })
    )
    for (const item of batch) {
      if (item !== null) out.push(item)
    }
    cursor = page.hasMore ? page.cursor : undefined
  } while (cursor)
  return out
}

// ── Document shapes ──────────────────────────────────────────

export interface PortalChild {
  name: string
  age: string
  program: string
}

export interface PortalUser {
  id: string
  email: string
  full_name: string
  password_hash: string
  created_at: string
  children: PortalChild[]
}

export interface Lead {
  id: string
  kind: 'intro-call' | 'pro' | 'signup' | 'newsletter'
  created_at: string
  name: string
  email: string
  phone?: string
  student?: string
  program?: string
  message?: string
}

const USERS_PREFIX = 'db/users/'
const LEADS_PREFIX = 'db/leads/'

/** Users are keyed by a hash of their email, so the key itself enforces uniqueness. */
function userPath(email: string): string {
  return `${USERS_PREFIX}${createHash('sha256').update(email).digest('hex')}.json`
}

export async function getUserByEmail(email: string): Promise<PortalUser | null> {
  return getRecord<PortalUser>(userPath(email))
}

export async function saveUser(user: PortalUser): Promise<void> {
  await putRecord(userPath(user.email), user)
}

export async function listUsers(): Promise<PortalUser[]> {
  return listRecords<PortalUser>(USERS_PREFIX)
}

export async function saveLead(lead: Lead): Promise<void> {
  await putRecord(`${LEADS_PREFIX}${lead.id}.json`, lead)
}

export async function listLeads(): Promise<Lead[]> {
  const leads = await listRecords<Lead>(LEADS_PREFIX)
  return leads.sort((a, b) => b.created_at.localeCompare(a.created_at))
}
