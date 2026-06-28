import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { format, formatDistanceToNowStrict } from 'date-fns'
import Link from 'next/link'
import { Video, ArrowUpRight, Users, BookOpen, ClipboardList, CalendarDays } from 'lucide-react'
import { MOCK_CLASSES, MOCK_NOTES, MOCK_COACH } from '@/lib/mock-data'

// Illustrative roster for the coach's next class.
const ROSTER = ['Aisha Ahmed', 'Zain Ahmed', 'Mei Lin', 'Jacob Turner', 'Priya Kapoor', 'Olivia Reed']

const STATS = [
  { label: 'Classes this week', value: 3, icon: CalendarDays },
  { label: 'Active students', value: 14, icon: Users },
  { label: 'Cohorts', value: 2, icon: BookOpen },
  { label: 'Notes to write', value: 2, icon: ClipboardList },
]

export default function CoachDashboard() {
  const firstName = MOCK_COACH.full_name.split(' ')[0]
  const sorted = [...MOCK_CLASSES].sort((a, b) => +new Date(a.scheduled_at) - +new Date(b.scheduled_at))
  const next = sorted[0]

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <p className="text-sm text-ink-500/70 mb-1">{format(new Date(), 'EEEE, MMMM d')}</p>
        <h1 className="font-display text-3xl font-semibold text-ink">Good to see you, {firstName}.</h1>
        <p className="text-ink-500 mt-1">Your classes, your students, and notes at a glance.</p>
      </div>

      {/* stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STATS.map(({ label, value, icon: Icon }) => (
          <Card key={label}>
            <CardContent className="py-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold mb-3"><Icon size={18} /></span>
              <p className="text-2xl font-bold text-ink font-display">{value}</p>
              <p className="text-sm text-ink-500/70">{label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Next class roster */}
      {next && (
        <Card className="mb-8 overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-ink text-white px-6 py-5">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold"><Video size={22} /></span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold/80 mb-1">Your next class</p>
                <p className="font-semibold">{next.cohort?.program?.name}</p>
                <p className="text-sm text-white/60">
                  {format(new Date(next.scheduled_at), 'EEEE, MMM d · h:mm a')} · {formatDistanceToNowStrict(new Date(next.scheduled_at))} away
                </p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <Button variant="secondary" asChild>
                <a href={next.zoom_link} target="_blank" rel="noopener noreferrer">Start class <ArrowUpRight size={16} /></a>
              </Button>
              <Button variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white hover:text-ink" asChild>
                <Link href={`/coach/classes/${next.id}`}>Open roster</Link>
              </Button>
            </div>
          </div>
          <CardContent>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-500/70 mb-4">Roster · {ROSTER.length} students</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {ROSTER.map(name => (
                <div key={name} className="flex items-center gap-2.5">
                  <Avatar name={name} size="sm" />
                  <span className="text-sm text-ink font-medium">{name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming classes */}
        <Card>
          <CardHeader>
            <h2 className="font-semibold text-ink">Upcoming classes</h2>
          </CardHeader>
          <CardContent className="flex flex-col divide-y divide-ink/[0.05] -my-2">
            {sorted.map(cls => (
              <div key={cls.id} className="flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: cls.cohort?.program?.color }} />
                  <div>
                    <p className="font-medium text-sm text-ink">{cls.cohort?.program?.name}</p>
                    <p className="text-xs text-ink-500/70">{format(new Date(cls.scheduled_at), 'EEE, MMM d · h:mm a')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <a href={cls.zoom_link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-gold hover:underline">Zoom</a>
                  <Link href={`/coach/classes/${cls.id}`} className="text-xs text-ink-500 hover:text-ink hover:underline">Notes →</Link>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent notes */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-ink">Recent notes</h2>
              <Button size="sm" variant="ghost" asChild><Link href="/coach/notes">View all</Link></Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {MOCK_NOTES.map(n => (
              <div key={n.id} className="rounded-xl bg-cream-200/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar name={n.child?.full_name ?? '?'} size="sm" />
                  <p className="text-sm font-semibold text-ink">{n.child?.full_name}</p>
                  <span className="text-xs text-ink-500/60 ml-auto">{format(new Date(n.created_at), 'MMM d')}</span>
                </div>
                <p className="text-sm text-ink-500 leading-relaxed line-clamp-2">{n.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
