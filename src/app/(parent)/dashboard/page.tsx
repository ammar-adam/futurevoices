import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Calendar, BookOpen, Plus, Video, ArrowUpRight, Mic2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { format, formatDistanceToNowStrict } from 'date-fns'
import { MOCK_CHILDREN, MOCK_ENROLLMENTS, MOCK_CLASSES, MOCK_NOTES, MOCK_PARENT } from '@/lib/mock-data'

// Illustrative progress through the 6-session arc, per child.
const SESSION_PROGRESS: Record<string, number> = { 'child-1': 2, 'child-2': 4 }
const TOTAL_SESSIONS = 6

export default function ParentDashboard() {
  const firstName = MOCK_PARENT.full_name.split(' ')[0]
  const nextClass = [...MOCK_CLASSES].sort((a, b) => +new Date(a.scheduled_at) - +new Date(b.scheduled_at))[0]

  return (
    <div className="p-6 lg:p-8 max-w-6xl mx-auto">
      {/* Greeting */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-sm text-ink-500/70 mb-1">{format(new Date(), 'EEEE, MMMM d')}</p>
          <h1 className="font-display text-3xl font-semibold text-ink">Welcome back, {firstName}.</h1>
          <p className="text-ink-500 mt-1">Here&rsquo;s how your young speakers are doing.</p>
        </div>
        <Button asChild>
          <Link href="/children"><Plus size={16} /> Add Child</Link>
        </Button>
      </div>

      {/* Next class banner */}
      {nextClass && (
        <div className="relative overflow-hidden rounded-2xl bg-ink text-white p-6 mb-8 shadow-[var(--shadow-lift)]">
          <div className="glow" style={{ background: '#b68c2d', width: 280, height: 280, top: -120, right: -60, opacity: 0.25 }} />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold">
                <Video size={22} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold/80 mb-1">Next live class</p>
                <p className="font-semibold">{nextClass.cohort?.program?.name}</p>
                <p className="text-sm text-white/60">
                  {format(new Date(nextClass.scheduled_at), 'EEEE, MMM d · h:mm a')} ·{' '}
                  {formatDistanceToNowStrict(new Date(nextClass.scheduled_at))} away
                </p>
              </div>
            </div>
            <Button variant="secondary" asChild>
              <a href={nextClass.zoom_link} target="_blank" rel="noopener noreferrer">Join on Zoom <ArrowUpRight size={16} /></a>
            </Button>
          </div>
        </div>
      )}

      {/* Children + journey */}
      <h2 className="text-sm font-semibold uppercase tracking-wider text-ink-500/70 mb-4">Your children</h2>
      <div className="grid lg:grid-cols-2 gap-5 mb-10">
        {MOCK_CHILDREN.map(child => {
          const enrollment = MOCK_ENROLLMENTS.find(e => e.child_id === child.id)
          const current = SESSION_PROGRESS[child.id] ?? 0
          const pct = Math.round((current / TOTAL_SESSIONS) * 100)
          return (
            <Card key={child.id} interactive className="overflow-hidden">
              <CardContent className="py-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <Avatar name={child.full_name} size="lg" />
                    <div>
                      <h3 className="font-semibold text-ink text-lg">{child.full_name}</h3>
                      <p className="text-sm text-ink-500/70">Age {child.age}</p>
                    </div>
                  </div>
                  {enrollment && (
                    <Badge variant={enrollment.status as 'pilot' | 'active'}>{enrollment.status}</Badge>
                  )}
                </div>

                {enrollment?.cohort ? (
                  <>
                    <div className="flex items-center gap-2 mb-4 text-sm">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: enrollment.cohort.program?.color }} />
                      <span className="font-medium text-ink">{enrollment.cohort.program?.name}</span>
                      <span className="text-ink-500/60">· {enrollment.cohort.time_local} {enrollment.cohort.timezone}</span>
                    </div>

                    {/* Journey to the showcase */}
                    <div className="rounded-xl bg-cream-200/60 p-4">
                      <div className="flex items-center justify-between mb-2.5">
                        <p className="text-xs font-semibold text-ink-500 flex items-center gap-1.5">
                          <Mic2 size={13} className="text-gold" /> Journey to the showcase
                        </p>
                        <span className="text-xs font-semibold text-gold">Session {current} of {TOTAL_SESSIONS}</span>
                      </div>
                      <div className="flex gap-1.5">
                        {Array.from({ length: TOTAL_SESSIONS }).map((_, i) => (
                          <span
                            key={i}
                            className={
                              'h-1.5 flex-1 rounded-full ' +
                              (i < current ? 'bg-gold' : i === current ? 'bg-gold/40' : 'bg-ink/10')
                            }
                          />
                        ))}
                      </div>
                      <p className="text-xs text-ink-500/70 mt-2.5">
                        {current >= TOTAL_SESSIONS
                          ? 'Showcase complete — what a finish! 🎉'
                          : `${TOTAL_SESSIONS - current} sessions until the final showcase (${pct}% there)`}
                      </p>
                    </div>

                    {enrollment.status === 'pilot' && enrollment.pilot_ends_at && (
                      <p className="text-xs text-amber-600 font-medium mt-3 flex items-center gap-1.5">
                        <Sparkles size={12} /> Free pilot ends {format(new Date(enrollment.pilot_ends_at), 'MMM d')}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="rounded-xl bg-cream-200/60 p-4 text-sm text-ink-500">Not yet enrolled in a cohort.</div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Upcoming classes */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold"><Calendar size={16} /></span>
              <h2 className="font-semibold text-ink">Upcoming classes</h2>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col divide-y divide-ink/[0.05] -my-2">
            {MOCK_CLASSES.map(cls => (
              <div key={cls.id} className="flex items-center justify-between py-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: cls.cohort?.program?.color }} />
                  <div>
                    <p className="font-medium text-sm text-ink">{cls.cohort?.program?.name}</p>
                    <p className="text-xs text-ink-500/70">{format(new Date(cls.scheduled_at), 'EEE, MMM d · h:mm a')}</p>
                  </div>
                </div>
                <a href={cls.zoom_link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:gap-1.5 transition-all">
                  Join <ArrowUpRight size={13} />
                </a>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent coach notes */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10 text-gold"><BookOpen size={16} /></span>
              <h2 className="font-semibold text-ink">Recent coach notes</h2>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {MOCK_NOTES.map(note => (
              <div key={note.id} className="rounded-xl bg-cream-200/50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Avatar name={note.child?.full_name ?? '?'} size="sm" />
                  <p className="text-sm font-semibold text-ink">{note.child?.full_name}</p>
                  <span className="text-xs text-ink-500/60 ml-auto">{format(new Date(note.created_at), 'MMM d')}</span>
                </div>
                <p className="text-sm text-ink-500 leading-relaxed line-clamp-3">{note.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
