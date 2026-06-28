import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar } from '@/components/ui/avatar'
import { Users, GraduationCap, DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react'
import { MOCK_FAMILIES, MOCK_ADMIN } from '@/lib/mock-data'
import { format } from 'date-fns'

const STATS = [
  { label: 'Monthly revenue', value: '$1,640', delta: '+18%', icon: DollarSign, up: true },
  { label: 'Total families', value: '5', delta: '+2 this month', icon: Users, up: true },
  { label: 'Active students', value: '7', delta: '+3 this month', icon: GraduationCap, up: true },
  { label: 'Pilot → paid rate', value: '72%', delta: '+6 pts', icon: TrendingUp, up: true },
]

// Illustrative MRR trend (last 6 months).
const MRR = [
  { m: 'Jan', v: 420 },
  { m: 'Feb', v: 610 },
  { m: 'Mar', v: 780 },
  { m: 'Apr', v: 980 },
  { m: 'May', v: 1390 },
  { m: 'Jun', v: 1640 },
]
const MAX = Math.max(...MRR.map(d => d.v))

export default function AdminDashboard() {
  const firstName = MOCK_ADMIN.full_name.split(' ')[0]

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <p className="text-sm text-ink-500/70 mb-1">{format(new Date(), 'EEEE, MMMM d')}</p>
        <h1 className="font-display text-3xl font-semibold text-ink">Business overview</h1>
        <p className="text-ink-500 mt-1">Welcome back, {firstName}. Here&rsquo;s how Future Voices is growing.</p>
      </div>

      {/* stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {STATS.map(({ label, value, delta, icon: Icon }) => (
          <Card key={label} interactive>
            <CardContent className="py-5">
              <div className="flex items-center justify-between mb-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold"><Icon size={18} /></span>
                <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-600"><ArrowUpRight size={13} />{delta}</span>
              </div>
              <p className="text-2xl font-bold text-ink font-display">{value}</p>
              <p className="text-sm text-ink-500/70">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 mb-6">
        {/* revenue chart */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-ink">Monthly recurring revenue</h2>
              <Badge variant="gold">Last 6 months</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between gap-3 h-44">
              {MRR.map((d, i) => (
                <div key={d.m} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                  <span className="text-[11px] font-semibold text-ink-500">${(d.v / 1000).toFixed(1)}k</span>
                  <div
                    className={'w-full rounded-t-lg transition-all ' + (i === MRR.length - 1 ? 'bg-gold' : 'bg-ink/15')}
                    style={{ height: `${(d.v / MAX) * 100}%` }}
                  />
                  <span className="text-xs text-ink-500/70">{d.m}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* cohort fill */}
        <Card>
          <CardHeader><h2 className="font-semibold text-ink">Cohort capacity</h2></CardHeader>
          <CardContent className="flex flex-col gap-5">
            {[
              { name: 'Little Voices · Tue 5PM ET', filled: 6, cap: 8, color: '#4F9BF7' },
              { name: 'Rising Speakers · Wed 6PM ET', filled: 8, cap: 8, color: '#7C5CFC' },
              { name: 'Champion Speakers · Sat 11AM', filled: 3, cap: 8, color: '#34B27B' },
            ].map(c => (
              <div key={c.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-sm font-medium text-ink">{c.name}</p>
                  <span className="text-xs font-semibold text-ink-500">{c.filled}/{c.cap}</span>
                </div>
                <div className="h-2 rounded-full bg-ink/[0.07] overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(c.filled / c.cap) * 100}%`, background: c.color }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* recent signups */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-ink">Recent signups</h2>
            <a href="/admin/families" className="text-xs font-semibold text-gold hover:underline">View all families</a>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-ink/[0.06]">
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Family</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium hidden sm:table-cell">Email</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Children</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium">Status</th>
                <th className="text-left px-6 py-3 text-ink-500/70 font-medium hidden sm:table-cell">Joined</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_FAMILIES.map(f => (
                <tr key={f.id} className="border-b border-ink/[0.04] last:border-0 hover:bg-cream-200/40 transition-colors">
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={f.full_name} size="sm" />
                      <span className="font-medium text-ink">{f.full_name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-3 text-ink-500 hidden sm:table-cell">{f.email}</td>
                  <td className="px-6 py-3 text-ink-500">{f.children}</td>
                  <td className="px-6 py-3"><Badge variant={f.status as 'active' | 'pilot'}>{f.status}</Badge></td>
                  <td className="px-6 py-3 text-ink-500/70 hidden sm:table-cell">
                    {new Date(f.joined).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
