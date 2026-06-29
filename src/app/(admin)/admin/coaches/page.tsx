import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'

const COACHES = [
  { id: 'coach-1', name: 'Nida Ahmed', email: 'nida@futurevoices.co', cohorts: 2, students: 14, status: 'active' },
]

export default function CoachesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-ink">Coaches</h1>
        <p className="text-ink-500 mt-1">Active coaches on the Future Voices platform.</p>
      </div>

      <Card>
        <CardHeader><h2 className="font-semibold text-ink">All coaches ({COACHES.length})</h2></CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/[0.06]">
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Coach</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Email</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Cohorts</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Students</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {COACHES.map(c => (
                <tr key={c.id} className="border-b border-ink/[0.04] last:border-0 hover:bg-cream-200/40 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={c.name} size="sm" />
                      <span className="font-medium text-ink">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-ink-500">{c.email}</td>
                  <td className="px-6 py-4 text-ink-500">{c.cohorts}</td>
                  <td className="px-6 py-4 text-ink-500">{c.students}</td>
                  <td className="px-6 py-4"><Badge variant="active">{c.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
