import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/marketing/contact-form'
import { LEVELS, LEVEL_ONE_WEEKS } from '@/types'
import { NIDA_BOOKING_URL, CONTACT_EMAIL, NEXT_COHORT } from '@/lib/links'
import { ArrowRight, ChevronDown } from 'lucide-react'

const STATS = [
  ['Classes of eight', 'Small enough that nobody can hide at the back.'],
  ['Six levels', 'From the first nervous introduction to a full keynote.'],
  ['Eight weeks a level', 'Each one ending in a live showcase for parents.'],
  ['Every single class', 'Every student is on their feet and speaking.'],
]

const GROUP_POINTS = [
  'One level runs eight weeks',
  'Weekly 60-minute live class, capped at eight students',
  'Every performance recorded, first class to last',
  'Live showcase for parents at the end of each level',
  'Cancel any month',
]

const PRIVATE_CARDS = [
  {
    name: 'Private 1:1 Coaching',
    ages: 'Ages 6+',
    price: '$50/session',
    priceNote: 'or four sessions for $180',
    body: 'The same level curriculum, taught one-on-one. Suited to shy starters, students preparing for a specific moment, or kids who want to move faster.',
    points: [
      'Personal pacing through the levels',
      'Flexible scheduling',
      'Session recaps for parents',
    ],
  },
  {
    name: 'Competitive Prep',
    ages: 'Ages 13 to 19',
    price: 'From $45/session',
    priceNote: 'pay per session, no packages',
    body: 'Deadline-first coaching for DECA, Model UN, and university applications. Built backward from your competition or application date.',
    points: [
      'DECA and Model UN: $45/session',
      'University admissions coaching: $60/session',
      'Drafts read and marked up between sessions',
    ],
    cta: { label: 'Explore Competitive Prep', href: '/prep' },
  },
]

const FAQ = [
  {
    q: 'My child is shy. Is this right for them?',
    a: 'Especially for them. Classes are structured so the quietest student speaks early, in low-stakes ways, well before anything feels like a performance. Confidence is built through repetition, not pep talks, and Level 1 is designed for exactly this child.',
  },
  {
    q: 'How do the levels work?',
    a: 'Students progress through six levels, from Confidence to Mastery. Each level is an eight-week cycle: one live 60-minute class per week, a specific skill focus, and a final performance in week 8 delivered to the cohort and parents. Completing the performance completes the level, and each completed level earns a certificate.',
  },
  {
    q: 'How does the free first class work?',
    a: 'The first session of a new cohort is an open house. Your child attends the full class free, with no payment details required. If it is a fit, you enroll for the month at the end of the session or within the following two days to hold the seat.',
  },
  {
    q: 'How much does it cost?',
    a: 'Group coaching is $120 per month for a weekly live class. Private 1:1 coaching is $50 per session, or four sessions for $180. Competitive Prep for teens is $45 per session for DECA and Model UN, and $60 per session for university admissions coaching. All prices are in CAD. There are no registration fees, and you can stop any month.',
  },
  {
    q: 'Are there any discounts?',
    a: 'Two. Siblings get 20% off a second enrollment, and any family that refers a family who enrolls receives a $25 credit toward their next month.',
  },
  {
    q: 'What is the weekly time commitment?',
    a: 'One 60-minute live class, plus roughly 10 to 15 minutes of practice between sessions.',
  },
  {
    q: 'Who teaches the classes?',
    a: 'Our founder teaches every group cohort and every private speaking session herself. The Competitive Prep track is taught one-on-one by a coach with national and international competition results. You will meet your coach on your intro call.',
  },
  {
    q: 'Can adults enroll?',
    a: 'Yes. Adults are placed in their own cohort and follow the same level path. Book an intro call and we will find the right fit.',
  },
  {
    q: 'How do you keep parents updated?',
    a: 'After every class you receive a short written recap: what was covered, what your child worked on, and what to practise before the next session. You are never guessing what is happening in the room.',
  },
  {
    q: 'What happens if we miss a class?',
    a: 'You receive a written recap of what was covered and what to practice, so no one falls behind.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a free 15-minute intro call below. We talk about your child, answer your questions, and if it is a fit, your child joins the next cohort. The next cohort is Level 1, ages 9 to 13, starting Saturday, September 12.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip bg-cream">
      <Navbar overHero />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-end">
        <Image
          src="/images/hero-class.jpg"
          alt="A student presenting to her class while a classmate raises a hand"
          fill
          priority
          className="object-cover object-[65%_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative w-full max-w-6xl mx-auto px-6 pb-16 pt-44">
          <h1 className="font-display text-[2.6rem] sm:text-[3.6rem] leading-[1.07] font-medium text-white max-w-3xl mb-6">
            Confidence is a skill.
            <span className="block">We teach it, week by week.</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
            Future Voices is a school for young communicators. Students work through six levels,
            starting with the fear of speaking and finishing able to hold a room.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="secondary" asChild>
              <a href={NIDA_BOOKING_URL}>Book a free intro call <ArrowRight size={18} /></a>
            </Button>
            <Button size="lg" asChild className="border border-white/30 bg-white/5 text-white hover:bg-white/15 rounded-full px-8 backdrop-blur-sm">
              <Link href="/#path">See the path</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Cohort banner ────────────────────────── */}
      <section className="bg-ink-700 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-300">Next cohort</span>
          <span className="text-sm text-white/85">
            {NEXT_COHORT.level} · {NEXT_COHORT.ages} · {NEXT_COHORT.starts} · {NEXT_COHORT.seats}
          </span>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="bg-white border-b border-ink/[0.08]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map(([label, line], i) => (
            <div key={label} className={`py-9 px-6 ${i > 0 ? 'lg:border-l border-ink/[0.08]' : ''}`}>
              <p className="font-display text-[1.35rem] font-medium text-ink mb-1.5">{label}</p>
              <p className="text-[0.88rem] text-ink-500 leading-relaxed">{line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Approach ─────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-5">Our approach</p>
          <h2 className="font-display text-3xl sm:text-[2.6rem] leading-tight font-medium text-ink mb-6">
            Nobody becomes a confident speaker by being told to be confident.
          </h2>
          <div className="text-lg text-ink-500 leading-relaxed flex flex-col gap-5">
            <p>
              Confidence comes from evidence. A child who has stood up and spoken dozens of times
              knows they can do it, because they already have. Everything we teach is built to
              produce that evidence as quickly as possible.
            </p>
            <p>
              So every class runs the same loop. Learn one skill. Get on your feet and use it.
              Hear precisely what worked and what to change. Go again. Nobody watches from the
              back, and nobody waits a week for their turn.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Path ─────────────────────────────── */}
      <section id="path" className="bg-white border-y border-ink/[0.08] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-4">The path</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-5">One path. Six levels.</h2>
            <p className="text-ink-500 leading-relaxed">
              Students don&rsquo;t take a class at Future Voices. They climb a path. Each level is an
              eight-week cycle with one live class per week, and ends with a recorded final
              performance in front of the cohort and parents. You complete a level by performing,
              not by attending.
            </p>
          </div>

          <ol className="relative border-l border-ink/15 ml-5 sm:ml-6">
            {LEVELS.map(l => (
              <li key={l.n} className="relative pl-8 sm:pl-10 pb-9 last:pb-0">
                <span className="absolute -left-5 sm:-left-6 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-ink text-cream font-display text-lg">
                  {l.n}
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-ink mb-1.5">{l.name}</h3>
                <p className="text-[0.95rem] text-ink-500 leading-relaxed max-w-2xl">{l.line}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-ink/[0.08] pt-8 flex flex-wrap items-center justify-between gap-6">
            <p className="text-[0.95rem] text-ink-500 leading-relaxed max-w-xl">
              Finish a level and your child earns a certificate. Then you play their first
              recording next to their last, and see the difference for yourself.
            </p>
            <Button asChild>
              <Link href="/curriculum">Read the full curriculum <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Group coaching ───────────────────────── */}
      <section id="programs" className="py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-ink">Group coaching</h2>
            <p className="text-sm text-ink-500">All prices in CAD.</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
                Ages 6+, grouped by age
              </p>
              <p className="font-display text-4xl font-medium text-ink mb-1">$120<span className="text-2xl text-ink-500"> / month</span></p>
              <p className="text-[1.02rem] text-ink-500 leading-relaxed mt-5">
                The heart of the school. A weekly live class, capped at eight students, working
                through the level path together. Every student speaks in every session, and each
                level ends with a showcase you are invited to watch.
              </p>
              <div className="mt-7">
                <Button asChild>
                  <a href={NIDA_BOOKING_URL}>Book a free intro call <ArrowRight size={16} /></a>
                </Button>
              </div>
            </div>

            <ul className="flex flex-col border-t border-ink/[0.08]">
              {GROUP_POINTS.map(pt => (
                <li key={pt} className="flex items-start gap-3 py-4 border-b border-ink/[0.08] text-[0.95rem] text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Private coaching ─────────────────────── */}
      <section id="private" className="pb-20 sm:pb-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-ink">Private coaching</h2>
            <p className="text-sm text-ink-500">One-to-one, billed per session.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRIVATE_CARDS.map(p => (
              <div
                key={p.name}
                className="bg-white rounded-lg p-8 flex flex-col border border-ink/[0.08] shadow-[var(--shadow-soft)]"
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold mb-3">{p.ages}</p>
                <h3 className="font-display text-[1.55rem] font-medium text-ink mb-2">{p.name}</h3>
                <p className="text-ink font-semibold">
                  {p.price}
                  <span className="text-ink-500 font-normal text-sm"> · {p.priceNote}</span>
                </p>
                <p className="text-[0.95rem] text-ink-500 leading-relaxed mt-3 mb-6">{p.body}</p>
                <ul className="mt-auto flex flex-col gap-2 border-t border-ink/[0.08] pt-5">
                  {p.points.map(pt => (
                    <li key={pt} className="text-sm text-ink flex items-start gap-2.5">
                      <span className="h-1 w-1 rounded-full bg-gold mt-2 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {p.cta && (
                  <Link
                    href={p.cta.href}
                    className="mt-5 text-sm font-semibold text-ink underline underline-offset-4 decoration-gold hover:decoration-ink"
                  >
                    {p.cta.label} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Level 1 preview ──────────────────────── */}
      <section id="level-one" className="bg-white border-y border-ink/[0.08] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-4">Where everyone starts</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-4">
              Level 1: Confidence. The first eight weeks.
            </h2>
            <p className="text-ink-500 leading-relaxed">
              Here is exactly what a new student&rsquo;s first level looks like.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10">
            {LEVEL_ONE_WEEKS.map(w => (
              <div key={w.n} className="bg-white p-6">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold mb-2">Week {w.n}</p>
                <h3 className="font-semibold text-ink mb-2 leading-snug">{w.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{w.short}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Competitive Prep teaser ──────────────── */}
      <section className="relative py-24 sm:py-32 mt-20 sm:mt-24">
        <Image
          src="/images/prep-stage.jpg"
          alt="A speaker addressing a full auditorium"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-4">Competitive Prep</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">
              For teens with a date on the calendar.
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              DECA provincials. A Model UN conference. A university application. Competitive Prep is
              private, deadline-first coaching that works backward from the day it matters.
              Sessions are $45 to $60, booked one at a time, no packages required.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/prep">Explore Competitive Prep <ArrowRight size={17} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section id="faq" className="py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.35fr_0.65fr] gap-12">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-4">FAQ</p>
            <h2 className="font-display text-3xl font-medium text-ink mb-4">Common questions</h2>
            <p className="text-sm text-ink-500 leading-relaxed">
              Anything else? Write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink font-medium underline underline-offset-4 decoration-gold">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            {FAQ.map(f => (
              <details key={f.q} className="group border-b border-ink/10 last:border-0">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-ink text-[0.95rem] leading-snug">{f.q}</span>
                  <ChevronDown size={18} className="text-ink-500 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="text-sm text-ink-500 leading-relaxed pb-5 max-w-xl">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Admissions ───────────────────────────── */}
      <section id="contact" className="bg-ink py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.42fr_0.58fr] gap-12">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-4">Admissions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">
              Start with a conversation.
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Every family begins with a free 15-minute call with our founder. Tell us about your child and
              what you are hoping for, and we will point you to the right program, or tell you
              honestly if we are not the right fit.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={NIDA_BOOKING_URL}>Book a free intro call <ArrowRight size={17} /></a>
            </Button>
            <p className="text-sm text-white/50 mt-4">
              Prefer email? Write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/80 underline underline-offset-4">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Or send us the details here
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
