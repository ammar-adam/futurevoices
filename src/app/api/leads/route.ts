import { NextResponse } from 'next/server'
import { saveLead, type Lead } from '@/lib/db'
import { randomUUID } from 'crypto'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const { name, email, phone, student, program, message, kind } = body ?? {}
  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 })
  }

  const lead: Lead = {
    id: randomUUID(),
    kind: kind === 'pro' ? 'pro' : 'intro-call',
    created_at: new Date().toISOString(),
    name: String(name).trim().slice(0, 200),
    email: String(email).trim().slice(0, 200),
    phone: phone ? String(phone).trim().slice(0, 50) : undefined,
    student: student ? String(student).trim().slice(0, 200) : undefined,
    program: program ? String(program).trim().slice(0, 200) : undefined,
    message: message ? String(message).trim().slice(0, 2000) : undefined,
  }

  try {
    await saveLead(lead)
  } catch {
    return NextResponse.json({ error: 'Could not save your enquiry.' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
