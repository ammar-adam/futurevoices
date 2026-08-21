import { NextResponse } from 'next/server'
import { getUserByEmail, saveUser, saveLead, type PortalUser, type Lead } from '@/lib/db'
import { hashPassword, createSessionToken, sessionCookie } from '@/lib/auth'
import { randomUUID } from 'crypto'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const { full_name, email, password, child_name, child_age, program } = body ?? {}

  if (!full_name || !email || !password || !child_name) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
  }
  if (String(password).length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  const normEmail = String(email).trim().toLowerCase()
  if (await getUserByEmail(normEmail)) {
    return NextResponse.json({ error: 'An account with this email already exists. Try signing in.' }, { status: 409 })
  }

  const user: PortalUser = {
    id: randomUUID(),
    email: normEmail,
    full_name: String(full_name).trim(),
    password_hash: hashPassword(String(password)),
    created_at: new Date().toISOString(),
    children: [{
      name: String(child_name).trim(),
      age: String(child_age ?? '').trim(),
      program: String(program ?? '').trim(),
    }],
  }
  await saveUser(user)

  const lead: Lead = {
    id: randomUUID(),
    kind: 'signup',
    created_at: user.created_at,
    name: user.full_name,
    email: user.email,
    student: user.children[0].name,
    program: user.children[0].program,
    message: `New portal signup. Student age: ${user.children[0].age || 'n/a'}`,
  }
  await saveLead(lead)

  const res = NextResponse.json({ ok: true })
  res.cookies.set(sessionCookie.name, createSessionToken(normEmail), sessionCookie.options)
  return res
}
