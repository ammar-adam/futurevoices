import { NextResponse } from 'next/server'
import { readDoc, USERS_DOC, type PortalUser } from '@/lib/db'
import { verifyPassword, createSessionToken, sessionCookie } from '@/lib/auth'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const { email, password } = body ?? {}
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
  }

  const normEmail = String(email).trim().toLowerCase()
  const users = await readDoc<PortalUser[]>(USERS_DOC, [])
  const user = users.find(u => u.email === normEmail)
  if (!user || !verifyPassword(String(password), user.password_hash)) {
    return NextResponse.json({ error: 'Incorrect email or password.' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(sessionCookie.name, createSessionToken(normEmail), sessionCookie.options)
  return res
}
