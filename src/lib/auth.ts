import { scryptSync, timingSafeEqual, randomBytes, createHmac } from 'crypto'
import { cookies } from 'next/headers'
import { getUserByEmail, type PortalUser } from './db'

const COOKIE = 'fv_session'
const SESSION_DAYS = 30

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const candidate = scryptSync(password, salt, 64)
  return timingSafeEqual(candidate, Buffer.from(hash, 'hex'))
}

function sign(payload: string): string {
  return createHmac('sha256', process.env.AUTH_SECRET!).update(payload).digest('base64url')
}

export function createSessionToken(email: string): string {
  const exp = Date.now() + SESSION_DAYS * 24 * 3600 * 1000
  const payload = `${Buffer.from(email).toString('base64url')}.${exp}`
  return `${payload}.${sign(payload)}`
}

export function verifySessionToken(token: string | undefined): string | null {
  if (!token) return null
  const parts = token.split('.')
  if (parts.length !== 3) return null
  const payload = `${parts[0]}.${parts[1]}`
  if (sign(payload) !== parts[2]) return null
  if (Number(parts[1]) < Date.now()) return null
  return Buffer.from(parts[0], 'base64url').toString('utf8')
}

export const sessionCookie = {
  name: COOKIE,
  options: {
    httpOnly: true,
    secure: true,
    sameSite: 'lax' as const,
    path: '/',
    maxAge: SESSION_DAYS * 24 * 3600,
  },
}

/** Server-side: current logged-in user, or null. */
export async function getCurrentUser(): Promise<PortalUser | null> {
  const jar = await cookies()
  const email = verifySessionToken(jar.get(COOKIE)?.value)
  if (!email) return null
  return getUserByEmail(email)
}
