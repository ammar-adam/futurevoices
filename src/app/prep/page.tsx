import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { PREP_BOOKING_URL } from '@/lib/links'
import { ArrowRight, Gavel, Trophy, GraduationCap } from 'lucide-react'

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
    icon: Gavel,
    items: [
      { n: '3×', label: 'Best Delegate' },
      { n: '', label: 'Including Oxford x Berkeley MUN' },
    ],
  },
  {
    track: 'DECA',
    icon: Trophy,
    items: [
      { n: '2×', label: 'Regional Champion' },
      { n: '2×', label: 'Provincial Champion and ICDC Qualifier' },
      { n: '', label: 'ICDC Finalist, Top 10 Test' },
    ],
  },
]

const OFFERS = [
  { school: 'Waterloo', program: 'Computing & Financial Management', logo: '/logos/waterloo.png' },
  { school: 'Western', program: 'Ivey AEO', logo: '/logos/western.jpg' },
  { school: 'Queen’s', program: 'Commerce', logo: '/logos/queens.png' },
  { school: 'Toronto', program: 'St. George, Computer Science', logo: '/logos/toronto.png' },
  { school: 'McGill', program: 'Desautels', logo: '/logos/mcgill.png' },
  { school: 'USC', program: 'Marshall', logo: '/logos/usc.png' },
  { school: 'UCSD', program: 'Computer Science, Triton Scholar', logo: '/logos/ucsd.png' },
  { school: 'King’s College London', program: 'Computer Science', logo: '/logos/kcl.png' },
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

          {/* Competition results */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {RECORD.map(group => {
              const Icon = group.icon
              return (
                <div key={group.track}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/40 text-gold-300 shrink-0">
                      <Icon size={17} />
                    </span>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
                      {group.track}
                    </p>
                  </div>
                  <ul className="flex flex-col">
                    {group.items.map(item => (
                      <li
                        key={item.label}
                        className="flex items-baseline gap-4 py-3.5 border-b border-white/10 last:border-0"
                      >
                        <span className="font-display text-xl font-medium text-gold-300 w-8 shrink-0">
                          {item.n}
                        </span>
                        <span className={item.n ? 'text-white text-[1.05rem]' : 'text-white/50 text-[0.95rem]'}>
                          {item.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Admissions offers, set as a crest wall */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-300/40 text-gold-300 shrink-0">
                <GraduationCap size={17} />
              </span>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-300">
                University offers held
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {OFFERS.map(o => (
                <div
                  key={o.school}
                  className="bg-white rounded-lg px-4 py-6 text-center flex flex-col items-center justify-start gap-3"
                >
                  <div className="h-16 flex items-center justify-center">
                    <Image
                      src={o.logo}
                      alt={`${o.school} crest`}
                      width={120}
                      height={120}
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-display text-[1.15rem] leading-tight text-ink">{o.school}</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.12em] text-ink-500 leading-relaxed mt-1">
                      {o.program}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/50">
              <span className="font-display text-xl text-gold-300 mr-2">18</span>
              university offers in total. A selection is shown above.
            </p>
          </div>
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
