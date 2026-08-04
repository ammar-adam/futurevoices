import { NextResponse } from 'next/server'
import { readDoc, USERS_DOC, LEADS_DOC, type PortalUser, type Lead } from '@/lib/db'

export async function GET(req: Request) {
  const key = new URL(req.url).searchParams.get('key')
  if (!key || key !== process.env.ADMIN_KEY) {
    return NextResponse.json({ error: 'Not authorised' }, { status: 401 })
  }
  const [users, leads] = await Promise.all([
    readDoc<PortalUser[]>(USERS_DOC, []),
    readDoc<Lead[]>(LEADS_DOC, []),
  ])
  // Strip password hashes from the export — a backup never needs them in the clear
  const safeUsers = users.map(({ password_hash: _ph, ...u }) => u)
  return new NextResponse(
    JSON.stringify({ exported_at: new Date().toISOString(), users: safeUsers, leads }, null, 2),
    {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="futurevoices-backup-${new Date().toISOString().slice(0, 10)}.json"`,
      },
    }
  )
}
