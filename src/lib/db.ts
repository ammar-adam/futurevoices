import { head, put } from '@vercel/blob'
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

export async function readDoc<T>(name: string, fallback: T): Promise<T> {
  try {
    const meta = await head(`db/${name}`)
    const res = await fetch(meta.url, { cache: 'no-store' })
    if (!res.ok) return fallback
    return JSON.parse(decrypt(await res.text())) as T
  } catch {
    return fallback
  }
}

export async function writeDoc(name: string, data: unknown): Promise<void> {
  await put(`db/${name}`, encrypt(JSON.stringify(data)), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  })
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
  kind: 'intro-call' | 'pro' | 'signup'
  created_at: string
  name: string
  email: string
  phone?: string
  student?: string
  program?: string
  message?: string
}

export const USERS_DOC = 'users.json'
export const LEADS_DOC = 'leads.json'
