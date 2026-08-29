import { NextResponse } from 'next/server'
import { saveLead, type Lead } from '@/lib/db'
import { randomUUID } from 'crypto'

/**
 * Newsletter signups. When a real MailerLite endpoint is supplied the client
 * posts there instead; until then every signup is stored alongside enquiries so
 * they appear on the admin page and nothing is lost.
 */
export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const email = body?.email
  const source = body?.source

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }

  const lead: Lead = {
    id: randomUUID(),
    kind: 'newsletter',
    created_at: new Date().toISOString(),
    name: 'Newsletter signup',
    email: email.trim().slice(0, 200),
    message: `Signed up from ${typeof source === 'string' ? source.slice(0, 60) : 'unknown'}`,
  }

  try {
    await saveLead(lead)
  } catch {
    return NextResponse.json({ error: 'Could not save your email.' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
