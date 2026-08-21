import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { PREP_BOOKING_URL } from '@/lib/links'
import { CheckCircle2, Trophy, GraduationCap, FileText, ArrowRight, Clock, Users } from 'lucide-react'

export const metadata = {
  title: 'Competitive Prep | Future Voices',
  description:
    'Deadline-first 1:1 coaching for DECA, Model UN, university essays, and interviews. Pay per session, no packages required.',
}

const PRICING = [
  { label: 'DECA / Case Prep', price: '$45 per session' },
  { label: 'Model UN Prep', price: '$45 per session' },
  { label: 'University Essay Coaching', price: '$60 per session', note: 'includes written feedback on drafts between sessions' },
  { label: 'Interview Prep', price: '$150 flat', note: 'for three mock-interview sessions' },
]

const MODULES = [
  {
    icon: Trophy,
    slug: 'deca',
    title: 'DECA / Competitive Case Prep',
    tag: 'Competition prep',
    body: '1:1 coaching on reading a case fast, building a winning strategy, and presenting it with the command judges are actually looking for. Sessions are structured around your specific event type, whether that is Individual Series, Team Decision Making, or roleplay, and timed to your competition calendar.',
    outcomes: [
      'Read and break down a case in under 10 minutes',
      'Structure a clear, defensible strategy under pressure',
      'Present with composure and command in the judging room',
      'Field tough follow-up questions without losing confidence',
    ],
  },
  {
    icon: GraduationCap,
    slug: 'mun',
    title: 'Model UN Prep',
    tag: 'Conference prep',
    body: 'Position papers, parliamentary procedure, bloc negotiation, and delivery, built around your specific conference and committee. We cover both the substance and how to stand out when you are one voice in a room of 80 delegates.',
    outcomes: [
      'Write a position paper that stakes a clear, researched argument',
      'Understand parliamentary procedure well enough to use it strategically',
      'Negotiate effectively in unmoderated caucuses',
      'Deliver speeches that get noticed, not just heard',
    ],
  },
  {
    icon: FileText,
    slug: 'essays',
    title: 'University Essay & Interview Prep',
    tag: 'Admissions',
    body: 'One-on-one work on supplemental essays and interview prep. The goal is finding an authentic voice, not a polished, generic-sounding one. We work on your specific schools and prompts, not a template that could apply to anyone.',
    outcomes: [
      'Essays that sound like you, not like a counsellor wrote them',
      'Clear, specific answers to common interview questions',
      'Preparation for unexpected follow-ups and curveball prompts',
      'Confidence walking into the room, knowing both what to say and how to say it',
    ],
  },
]

export default function PrepPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-20">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
              style={{ background: '#0d3d32', color: '#6ee7b7' }}
            >
              <Trophy size={12} />
              Competitive Prep
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-medium text-ink mb-6 leading-tight">
              Built around
              <span className="italic" style={{ color: '#1F6B5C' }}> your deadline.</span>
            </h1>
            <p className="text-lg text-ink-500 max-w-2xl mx-auto leading-relaxed mb-8">
              DECA, Model UN, and university application coaching for students working toward
              something specific. 1:1 only, pay per session, no packages required. Built backward
              from your competition or application date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild style={{ background: '#1F6B5C', color: 'white' }}>
                <a href={PREP_BOOKING_URL}>Book an intro call <ArrowRight size={18} /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/prep/apply">Send an application</Link>
              </Button>
            </div>
          </div>

          {/* How it's different */}
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Users, title: '1:1 only', body: 'No cohorts. Every session is entirely about you: your goal, your gaps, your competition or deadline.' },
              { icon: Clock, title: 'Deadline-first', body: 'We work backward from your competition date or application deadline. Every session has a purpose.' },
              { icon: CheckCircle2, title: 'Pay per session', body: 'Book one session at a time. No packages, no subscription, no commitment beyond the session.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-lg bg-white border border-ink/[0.08] p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-4" style={{ background: '#e8f5f0', color: '#1F6B5C' }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-ink mb-2">{title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-medium text-ink mb-3 text-center">Pricing</h2>
            <p className="text-ink-500 text-center mb-8 text-sm">All prices in CAD.</p>
            <div className="bg-white border border-ink/[0.08] rounded-lg overflow-hidden">
              {PRICING.map((p, i) => (
                <div
                  key={p.label}
                  className={`flex flex-wrap items-baseline justify-between gap-2 px-7 py-5 ${
                    i > 0 ? 'border-t border-ink/[0.08]' : ''
                  }`}
                >
                  <div>
                    <p className="font-semibold text-ink">{p.label}</p>
                    {p.note && <p className="text-sm text-ink-500 mt-0.5">{p.note}</p>}
                  </div>
                  <p className="font-display text-lg text-ink">{p.price}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-500 mt-5 text-center max-w-xl mx-auto">
              Most students book 3 to 5 sessions before a competition or deadline. Book one at a
              time; no commitment beyond the session.
            </p>
          </div>

          {/* Modules */}
          <div id="modules" className="flex flex-col gap-8 mb-20">
            <div className="text-center mb-4">
              <h2 className="font-display text-3xl font-medium text-ink mb-3">Three tracks</h2>
              <p className="text-ink-500">All 1:1, all built around you. Tell us which one fits when you apply.</p>
            </div>
            {MODULES.map((m, i) => {
              const Icon = m.icon
              return (
                <div
                  key={m.slug}
                  className={`rounded-lg overflow-hidden border ${i === 0 ? 'border-[#1F6B5C]/30' : 'border-ink/[0.08]'} bg-white`}
                >
                  {i === 0 && <div className="h-1" style={{ background: '#1F6B5C' }} />}
                  <div className="p-8 grid sm:grid-cols-[1fr_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0" style={{ background: '#e8f5f0', color: '#1F6B5C' }}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500/70">{m.tag}</span>
                          <h3 className="font-semibold text-ink text-lg leading-tight">{m.title}</h3>
                        </div>
                      </div>
                      <p className="text-ink-500 text-sm leading-relaxed">{m.body}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500/70 mb-3">What you leave with</p>
                      <ul className="flex flex-col gap-2.5">
                        {m.outcomes.map(o => (
                          <li key={o} className="flex items-start gap-2.5 text-sm text-ink-500">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0" style={{ color: '#1F6B5C' }} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Coach */}
          <div
            className="rounded-lg p-8 sm:p-12 text-center mb-16"
            style={{ background: 'linear-gradient(135deg, #0d3d32 0%, #1F6B5C 100%)' }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">Who you are working with</h2>
            <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg">
              Coaching is delivered 1:1 by a coach with national and international competition
              results and hands-on admissions experience. You will meet your coach on your intro call.
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-medium text-ink mb-4">Ready to start?</h2>
            <p className="text-ink-500 mb-8 max-w-md mx-auto">
              Book an intro call, or send us your goal, timeline, and current experience and we will
              be in touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild style={{ background: '#1F6B5C', color: 'white' }}>
                <a href={PREP_BOOKING_URL}>Book an intro call <ArrowRight size={18} /></a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/prep/apply">Send an application</Link>
              </Button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
