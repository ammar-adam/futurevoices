import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { PREP_BOOKING_URL } from '@/lib/links'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Competitive Prep | Future Voices',
  description:
    'Deadline-first 1:1 coaching for DECA, Model UN, and university admissions essays. Pay per session, no packages required.',
}

const PRICING = [
  { label: 'DECA / Case Prep', price: '$45', unit: 'per session' },
  { label: 'Model UN Prep', price: '$45', unit: 'per session' },
  { label: 'University Admissions Coaching', price: '$60', unit: 'per session', note: 'Essays and applications. Includes written feedback on drafts between sessions.' },
]

const PRINCIPLES = [
  {
    title: '1:1 only',
    body: 'No cohorts. Every session is entirely about you: your goal, your gaps, your competition or deadline.',
  },
  {
    title: 'Deadline-first',
    body: 'We work backward from your competition date or application deadline. Every session has a purpose.',
  },
  {
    title: 'Pay per session',
    body: 'Book one session at a time. No packages, no subscription, no commitment beyond the session.',
  },
]

const RECORD = [
  {
    track: 'Model UN',
    items: [
      { n: '3', label: 'Best Delegate gavels', note: 'including Oxford x Berkeley MUN' },
    ],
  },
  {
    track: 'DECA',
    items: [
      { n: '2', label: 'Regional Champion', note: 'award sweep' },
      { n: '2', label: 'Provincial Champion', note: 'two roleplay awards in Grade 11, roleplay and test in Grade 12' },
      { n: '2', label: 'ICDC qualifier' },
      { n: '1', label: 'ICDC finalist', note: 'test award, top 20 overall' },
    ],
  },
]

const OFFERS = [
  'Waterloo Computing and Financial Management',
  'Western Ivey AEO',
  'Queen’s Commerce',
  'Toronto St. George, Computer Science',
  'McGill Desautels',
  'USC Marshall',
  'UCSD Computer Science, Triton Scholar',
]

const MODULES = [
  {
    slug: 'deca',
    title: 'DECA and Case Prep',
    tag: 'Competition',
    body: 'Coaching on reading a case fast, building a defensible strategy, and presenting it with the command judges are looking for. Sessions are structured around your event type, whether that is Individual Series, Team Decision Making, or roleplay, and timed to your competition calendar.',
    outcomes: [
      'Read and break down a case in under 10 minutes',
      'Structure a clear, defensible strategy under pressure',
      'Present with composure in the judging room',
      'Field tough follow-up questions without losing confidence',
    ],
  },
  {
    slug: 'mun',
    title: 'Model UN',
    tag: 'Conference',
    body: 'Position papers, parliamentary procedure, bloc negotiation, and delivery, built around your specific conference and committee. We cover both the substance and how to stand out when you are one voice in a room of eighty delegates.',
    outcomes: [
      'Write a position paper that stakes a clear, researched argument',
      'Use parliamentary procedure strategically, not just correctly',
      'Negotiate effectively in unmoderated caucuses',
      'Deliver speeches that get noticed, not just heard',
    ],
  },
  {
    slug: 'admissions',
    title: 'University Admissions Coaching',
    tag: 'Admissions',
    body: 'One-to-one work on university applications and the essays that carry them. The goal is finding an authentic voice, not a polished, generic-sounding one. We work on your specific schools and prompts, never a template that could apply to anyone.',
    outcomes: [
      'Essays that sound like you, not like a counsellor wrote them',
      'A clear through-line across every part of the application',
      'Drafts read and marked up between sessions, not just during them',
      'A finished set of essays well before the deadline, not the night of it',
    ],
  },
]

export default function PrepPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar overHero />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end">
        <Image
          src="/images/prep-stage.jpg"
          alt="A speaker addressing a full auditorium"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative w-full max-w-6xl mx-auto px-6 pb-16 pt-40">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-5">
            Competitive Prep
          </p>
          <h1 className="font-display text-[2.4rem] sm:text-[3.2rem] leading-[1.08] font-medium text-white max-w-2xl mb-6">
            Built around your deadline.
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
            DECA, Model UN, and university application coaching for students working toward
            something specific. One-to-one, paid per session, built backward from the date
            that matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="secondary" asChild>
              <a href={PREP_BOOKING_URL}>Book an intro call <ArrowRight size={18} /></a>
            </Button>
            <Button size="lg" asChild className="border border-white/30 bg-white/5 text-white hover:bg-white/15 rounded-full px-8 backdrop-blur-sm">
              <Link href="/prep/apply">Send an application</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Principles ───────────────────────────── */}
      <section className="bg-white border-b border-ink/[0.08]">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className={`py-9 px-6 ${i > 0 ? 'sm:border-l border-ink/[0.08]' : ''}`}>
              <p className="font-display text-[1.35rem] font-medium text-ink mb-1.5">{p.title}</p>
              <p className="text-[0.88rem] text-ink-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Coach record ─────────────────────────── */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-b border-white/15 pb-5 mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-white">Your coach&rsquo;s record</h2>
            <p className="text-sm text-white/50">The same events you are preparing for.</p>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20">
            {/* Competition results */}
            <div className="flex flex-col gap-10">
              {RECORD.map(group => (
                <div key={group.track}>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-300 mb-5">
                    {group.track}
                  </p>
                  <ul className="flex flex-col">
                    {group.items.map(item => (
                      <li
                        key={item.label}
                        className="flex items-baseline gap-5 py-3.5 border-b border-white/10 last:border-0"
                      >
                        <span className="font-display text-3xl font-medium text-gold-300 w-12 shrink-0 tabular-nums">
                          {item.n}
                          <span className="text-lg">&times;</span>
                        </span>
                        <span>
                          <span className="text-white text-[1.02rem]">{item.label}</span>
                          {item.note && (
                            <span className="block text-sm text-white/45 mt-0.5 leading-relaxed">{item.note}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Admissions offers */}
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-gold-300 mb-5">
                University offers held
              </p>
              <ul className="flex flex-col">
                {OFFERS.map(o => (
                  <li key={o} className="text-white/80 text-[0.97rem] py-3 border-b border-white/10 last:border-0">
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 text-sm text-white/50">
            You will meet your coach on your intro call.
          </p>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-ink">Pricing</h2>
            <p className="text-sm text-ink-500">All prices in CAD.</p>
          </div>

          <div className="flex flex-col">
            {PRICING.map((p, i) => (
              <div
                key={p.label}
                className={`flex flex-wrap items-baseline justify-between gap-3 py-5 ${
                  i > 0 ? 'border-t border-ink/[0.08]' : ''
                }`}
              >
                <div className="max-w-md">
                  <p className="font-semibold text-ink">{p.label}</p>
                  {p.note && <p className="text-sm text-ink-500 mt-1 leading-relaxed">{p.note}</p>}
                </div>
                <p className="font-display text-2xl font-medium text-ink">
                  {p.price}
                  <span className="text-base text-ink-500"> {p.unit}</span>
                </p>
              </div>
            ))}
          </div>

          <p className="text-[0.95rem] text-ink-500 mt-8 leading-relaxed">
            Most students book three to five sessions before a competition or deadline. Book one
            at a time; there is no commitment beyond the session.
          </p>
        </div>
      </section>

      {/* ── Tracks ───────────────────────────────── */}
      <section id="tracks" className="bg-white border-y border-ink/[0.08] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-12">
            <h2 className="font-display text-3xl font-medium text-ink">Three tracks</h2>
          </div>

          <div className="flex flex-col gap-14">
            {MODULES.map(m => (
              <div key={m.slug} className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold mb-3">{m.tag}</p>
                  <h3 className="font-display text-2xl font-medium text-ink mb-4">{m.title}</h3>
                  <p className="text-[0.95rem] text-ink-500 leading-relaxed">{m.body}</p>
                </div>
                <ul className="flex flex-col border-t border-ink/[0.08]">
                  {m.outcomes.map(o => (
                    <li key={o} className="flex items-start gap-3 py-3.5 border-b border-ink/[0.08] text-[0.93rem] text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">Ready to start?</h2>
          <p className="text-white/60 leading-relaxed mb-9">
            Book an intro call, or send us the goal, the timeline, and where you are starting from,
            and we will be in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href={PREP_BOOKING_URL}>Book an intro call <ArrowRight size={17} /></a>
            </Button>
            <Button size="lg" asChild className="border border-white/25 bg-transparent text-white hover:bg-white/10 rounded-full px-8">
              <Link href="/prep/apply">Send an application</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
