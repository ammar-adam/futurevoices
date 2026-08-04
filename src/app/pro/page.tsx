import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Trophy, GraduationCap, FileText, ArrowRight, Clock, Users } from 'lucide-react'

const MODULES = [
  {
    icon: Trophy,
    slug: 'deca',
    title: 'DECA / Competitive Case Prep',
    tag: 'Competition prep',
    body: '1:1 coaching on reading a case fast, building a winning strategy, and presenting it with the command judges are actually looking for. Sessions are structured around your specific event type — whether that\'s Individual Series, Team Decision Making, or roleplay — and timed to your competition calendar.',
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
    body: 'Position papers, parliamentary procedure, bloc negotiation, and delivery — built around your specific conference and committee. We cover both the substance and how to stand out when you\'re one voice in a room of 80 delegates.',
    outcomes: [
      'Write a position paper that stakes a clear, researched argument',
      'Understand parliamentary procedure well enough to use it strategically',
      'Negotiate effectively in unmoderated caucuses',
      'Deliver speeches that get noticed — not just heard',
    ],
  },
  {
    icon: FileText,
    slug: 'essays',
    title: 'University Essay & Interview Prep',
    tag: 'Admissions',
    body: 'One-on-one work on supplemental essays and interview prep. The goal is finding an authentic voice — not a polished, generic-sounding one. We work on your specific schools and prompts, not a template that could apply to anyone.',
    outcomes: [
      'Essays that sound like you, not like a college counsellor wrote them',
      'Clear, specific answers to common interview questions',
      'Preparation for unexpected follow-ups and curveball prompts',
      'Confidence walking into the room — not just knowing what to say, but how to say it',
    ],
  },
]

export default function ProPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#FBF8F1' }}>
      <Navbar />

      <main className="pt-28 pb-24 px-4">
        <div className="max-w-5xl mx-auto">

          {/* Hero */}
          <div className="text-center mb-20">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold mb-6"
              style={{ background: '#0d3d32', color: '#6ee7b7' }}
            >
              <Trophy size={12} />
              Future Voices Pro
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-semibold text-[#14172B] mb-6 leading-tight">
              Built around<br className="hidden sm:block" />
              <span className="italic" style={{ color: '#1F6B5C' }}> your deadline.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-8">
              DECA, Model UN, and university application coaching for students working toward
              something specific. 1:1 only — not a cohort, not a subscription. Coaching that starts
              from your goal and works backwards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild style={{ background: '#1F6B5C', color: 'white' }}>
                <Link href="/pro/apply">Apply for 1:1 Coaching <ArrowRight size={18} /></Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#modules">See What We Cover</Link>
              </Button>
            </div>
          </div>

          {/* How it's different */}
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Users, title: '1:1 only', body: 'No cohorts. Every session is entirely about you — your goal, your gaps, your competition or deadline.' },
              { icon: Clock, title: 'Deadline-first', body: 'We work backwards from your competition date or application deadline. Every session has a purpose.' },
              { icon: CheckCircle2, title: 'Package-based', body: 'Four sessions to start. Extend if you need more. No open-ended subscription, no month-to-month lock-in.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl mx-auto mb-4" style={{ background: '#e8f5f0', color: '#1F6B5C' }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-semibold text-[#14172B] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Modules */}
          <div id="modules" className="flex flex-col gap-8 mb-20">
            <div className="text-center mb-4">
              <h2 className="font-display text-3xl font-semibold text-[#14172B] mb-3">Three tracks</h2>
              <p className="text-gray-500">All 1:1, all built around you. Tell us which one fits when you apply.</p>
            </div>
            {MODULES.map((m, i) => {
              const Icon = m.icon
              return (
                <div
                  key={m.slug}
                  className={`rounded-2xl overflow-hidden border ${i === 0 ? 'border-[#1F6B5C]/30' : 'border-gray-100'} bg-white shadow-sm`}
                >
                  {i === 0 && <div className="h-1" style={{ background: '#1F6B5C' }} />}
                  <div className="p-8 grid sm:grid-cols-[1fr_1fr] gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl shrink-0" style={{ background: '#e8f5f0', color: '#1F6B5C' }}>
                          <Icon size={20} />
                        </div>
                        <div>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">{m.tag}</span>
                          <h3 className="font-semibold text-[#14172B] text-lg leading-tight">{m.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm leading-relaxed">{m.body}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">What you leave with</p>
                      <ul className="flex flex-col gap-2.5">
                        {m.outcomes.map(o => (
                          <li key={o} className="flex items-start gap-2.5 text-sm text-gray-600">
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

          {/* Coach credibility */}
          <div
            className="rounded-2xl p-8 sm:p-12 text-center mb-16"
            style={{ background: 'linear-gradient(135deg, #0d3d32 0%, #1F6B5C 100%)' }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-4">Who you&rsquo;re working with</h2>
            <p className="text-white/65 max-w-xl mx-auto leading-relaxed text-lg">
              Coached by team members with real competition results and hands-on admissions coaching
              experience, in a 1:1 format built around your deadline — not a generic curriculum.
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-[#14172B] mb-4">Ready to apply?</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Tell us your goal, your timeline, and your current experience. We&rsquo;ll be in touch to set up your first session.
            </p>
            <Button size="lg" asChild style={{ background: '#1F6B5C', color: 'white' }}>
              <Link href="/pro/apply">Apply for 1:1 Coaching <ArrowRight size={18} /></Link>
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
