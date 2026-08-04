import { readDoc, LEADS_DOC, USERS_DOC, type Lead, type PortalUser } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function AdminLeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>
}) {
  const { key } = await searchParams
  if (!key || key !== process.env.ADMIN_KEY) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <p className="text-ink-500 text-sm">Not authorised.</p>
      </div>
    )
  }

  const [leads, users] = await Promise.all([
    readDoc<Lead[]>(LEADS_DOC, []),
    readDoc<PortalUser[]>(USERS_DOC, []),
  ])
  leads.sort((a, b) => b.created_at.localeCompare(a.created_at))

  return (
    <div className="min-h-screen bg-cream">
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
          <h1 className="font-display text-3xl font-medium text-ink">Leads &amp; signups</h1>
          <a
            href={`/api/admin/export?key=${key}`}
            className="text-sm font-semibold text-gold hover:underline"
          >
            Download backup (JSON)
          </a>
        </div>
        <p className="text-sm text-ink-500 mb-10">
          {leads.length} lead{leads.length === 1 ? '' : 's'} · {users.length} portal account{users.length === 1 ? '' : 's'}
        </p>

        <div className="flex flex-col gap-4">
          {leads.length === 0 && <p className="text-ink-500 text-sm">Nothing yet. Share the site!</p>}
          {leads.map(l => (
            <div key={l.id} className="bg-white border border-ink/10 rounded-xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <p className="font-semibold text-ink">
                  {l.name}{' '}
                  <span className="ml-2 text-[0.65rem] font-semibold uppercase tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                    {l.kind}
                  </span>
                </p>
                <p className="text-xs text-ink-500">{new Date(l.created_at).toLocaleString('en-CA')}</p>
              </div>
              <p className="text-sm text-ink-500">
                <a href={`mailto:${l.email}`} className="text-ink underline underline-offset-2">{l.email}</a>
                {l.phone && <> · {l.phone}</>}
              </p>
              {(l.student || l.program) && (
                <p className="text-sm text-ink-500 mt-1">
                  {l.student && <>Student: <span className="text-ink">{l.student}</span></>}
                  {l.student && l.program && ' · '}
                  {l.program && <>Program: <span className="text-ink">{l.program}</span></>}
                </p>
              )}
              {l.message && <p className="text-sm text-ink-500 mt-3 leading-relaxed border-l-2 border-gold/40 pl-3">{l.message}</p>}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
