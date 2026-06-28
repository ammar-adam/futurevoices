import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MOCK_COHORTS } from '@/lib/mock-data'
import { DAY_NAMES } from '@/lib/utils'
import { format } from 'date-fns'

export default function CohortsPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#14172B]">Cohorts</h1>
        <p className="text-gray-500 mt-1">{MOCK_COHORTS.length} cohorts configured</p>
      </div>
      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Program</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Schedule</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Dates</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_COHORTS.map(c => (
                <tr key={c.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: c.program?.color }} />
                      <span className="font-medium">{c.program?.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-gray-600">{DAY_NAMES[c.day_of_week]}s · {c.time_local} {c.timezone}</td>
                  <td className="px-6 py-3 text-gray-600 text-xs">
                    {format(new Date(c.starts_at), 'MMM d')} – {format(new Date(c.ends_at), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-3">
                    <Badge variant={c.is_active ? 'active' : 'cancelled'}>{c.is_active ? 'Active' : 'Inactive'}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
