import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/marketing/contact-form'
import { ArrowRight, ChevronDown } from 'lucide-react'

const STATS = [
  ['Max 8', 'students per cohort'],
  ['60 min', 'live session, weekly'],
  ['Week 4', 'showcase for parents'],
  ['Toronto', 'taught live worldwide'],
]

const PROGRAMS = [
  {
    name: 'Group Coaching',
    ages: 'Ages 6+',
    price: '$149/month',
    priceNote: 'after your free first month',
    body: 'A weekly cohort of at most eight students. Everyone speaks in every session — participation is the curriculum, not an option.',
    points: ['Weekly 60-minute live class', 'Structured speaking drills', 'Peer audience every week'],
  },
  {
    name: 'Private 1:1',
    ages: 'Ages 6+',
    price: 'From $65/session',
    priceNote: 'free first month applies',
    body: 'The full curriculum, taught one-on-one. Suited to students who need a gentler start or want to move faster.',
    points: ['Personalised pacing', 'Session recaps for parents', 'Flexible scheduling'],
  },
  {
    name: 'Future Voices Pro',
    ages: 'Ages 13–19',
    price: 'Package pricing',
    priceNote: 'quoted on application',
    body: 'Competitive preparation for secondary students: DECA, Model UN, and university admissions essays and interviews.',
    points: ['1:1 only', 'Built around your deadline', 'Package-based engagements'],
  },
]

const WEEKS = [
  { n: '1', title: 'Finding your voice', body: 'Understanding nerves, posture and breathing — and a first short talk, delivered on day one.' },
  { n: '2', title: 'Crafting your message', body: 'Structuring an idea: strong openings, one clear point, an ending people remember.' },
  { n: '3', title: 'Speaking with power', body: 'Pacing, pausing and eye contact — and recovering when your mind goes blank.' },
  { n: '4', title: 'The final presentation', body: 'A prepared talk delivered live to the cohort and to parents. You see the progress yourself.' },
]

const FAQ = [
  {
    q: 'My child is shy — is this right for them?',
    a: 'Especially for them. Sessions are structured so the quietest student speaks early, in low-stakes ways, well before anything feels like a performance. Confidence is built through repetition, not pep talks.',
  },
  {
    q: 'How does the free first month work?',
    a: 'The first four-week cycle is free, with no payment details required. After the Week 4 showcase, you decide whether to continue into the ongoing paid program.',
  },
  {
    q: 'What does it cost after the free month?',
    a: 'Group coaching is $149 CAD per month for weekly live sessions. Private 1:1 starts at $65 CAD per session. Pro engagements are quoted as a package once we understand the deadline and scope. There are no registration fees and you can stop any month.',
  },
  {
    q: 'What is the weekly time commitment?',
    a: 'One 60-minute live session on Zoom, plus roughly 10–15 minutes of independent practice between sessions.',
  },
  {
    q: 'Can adults enrol?',
    a: 'Yes. Group and private coaching are open to all ages; adult participants are placed in their own cohort.',
  },
  {
    q: 'What happens if we miss a session?',
    a: 'You receive a written recap of what was covered and what to practise, so no one falls behind.',
  },
  {
    q: 'How do we get started?',
    a: 'Request an intro call below. We speak for fifteen minutes about your child, and if the fit is right, they join the next available cohort.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip bg-cream">
      <Navbar overHero />

      {/* ── Hero — full-bleed image ─────────────── */}
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
        <div className="relative w-full max-w-6xl mx-auto px-6 pb-20 pt-44">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-5">
            Public speaking coaching · Live online
          </p>
          <h1 className="font-display text-[2.6rem] sm:text-[3.6rem] leading-[1.07] font-medium text-white max-w-3xl mb-6">
            Confidence is a skill.
            <span className="block">We teach it, week by week.</span>
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-xl mb-9">
            Future Voices coaches children, teens and adults to speak clearly and stand
            tall — in small live cohorts, taught by one dedicated coach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#contact">Book an intro call <ArrowRight size={18} /></Link>
            </Button>
            <Button size="lg" asChild className="border border-white/30 bg-white/5 text-white hover:bg-white/15 rounded-full px-8 backdrop-blur-sm">
              <Link href="/curriculum">View the curriculum</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stat strip ───────────────────────────── */}
      <section className="bg-white border-b border-ink/[0.08]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4">
          {STATS.map(([big, small], i) => (
            <div key={big} className={`py-8 px-2 text-center ${i > 0 ? 'lg:border-l border-ink/[0.08]' : ''}`}>
              <p className="font-display text-3xl font-medium text-ink">{big}</p>
              <p className="text-[0.8rem] text-ink-500 mt-1">{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Intro statement ──────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-5">Our approach</p>
          <h2 className="font-display text-3xl sm:text-[2.6rem] leading-tight font-medium text-ink mb-6">
            Nobody becomes a confident speaker by being told to be confident.
          </h2>
          <p className="text-lg text-ink-500 leading-relaxed">
            They become one by speaking — often, in a room where it is safe to get it wrong.
            Every Future Voices program is built on that principle: small groups, live coaching,
            and a real audience from the very first session.
          </p>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────── */}
      <section id="programs" className="pb-20 sm:pb-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-10 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-ink">Programs</h2>
            <p className="text-sm text-ink-500">All prices in CAD. Every program starts with a free four-week cycle.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PROGRAMS.map(p => (
              <div key={p.name} className="bg-white border border-ink/[0.08] rounded-lg p-8 flex flex-col shadow-[var(--shadow-soft)]">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold mb-3">{p.ages}</p>
                <h3 className="font-display text-[1.55rem] font-medium text-ink mb-2">{p.name}</h3>
                <p className="text-ink font-semibold">{p.price}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Four weeks + image ───────────────────── */}
      <section id="how-it-works" className="bg-white border-y border-ink/[0.08] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-4">The first month</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-10">
              Four weeks, one visible result.
            </h2>
            <div className="flex flex-col">
              {WEEKS.map((w, i) => (
                <div key={w.n} className={`flex gap-6 py-6 ${i > 0 ? 'border-t border-ink/[0.08]' : 'pt-0'}`}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-cream text-sm font-semibold shrink-0">
                    {w.n}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink mb-1">{w.title}</h3>
                    <p className="text-sm text-ink-500 leading-relaxed">{w.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-ink mt-4">
              The first four-week cycle is free — no payment details required.
            </p>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="/images/girl-laptop.jpg"
              alt="A young student with headphones attending a live online class"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ── Coach ────────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.4fr_0.6fr] gap-12">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-4">Leadership</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink">
              One coach.<br />Every session.
            </h2>
          </div>
          <div className="text-ink-500 leading-relaxed flex flex-col gap-5 text-[1.02rem]">
            <p>
              Future Voices is led and taught by Nida. There is no rotating roster of instructors
              and no pre-recorded content: she teaches every cohort and every private session
              herself, and knows exactly where each student started and how far they have come.
            </p>
            <p>
              That is a deliberate constraint. It keeps the program small, the standard consistent,
              and the relationship between coach, student and parent direct.
            </p>
            <div className="pt-2">
              <Button asChild>
                <Link href="/#contact">Speak with Nida <ArrowRight size={16} /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pro band ─────────────────────────────── */}
      <section className="relative py-24 sm:py-32">
        <Image
          src="/images/pro-podium.jpg"
          alt="A secondary student speaking from a podium"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-4">Future Voices Pro</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">
              For teens with a date on the calendar.
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              DECA provincials. A Model UN conference. University interviews. Pro is private,
              deadline-first coaching that works backwards from the day it matters.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/pro">Explore Pro <ArrowRight size={17} /></Link>
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
              <a href="mailto:hello@futurevoices.co" className="text-ink font-medium underline underline-offset-4 decoration-gold">
                hello@futurevoices.co
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

      {/* ── Contact ──────────────────────────────── */}
      <section id="contact" className="bg-ink py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.4fr_0.6fr] gap-12">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-4">Admissions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">
              Start with a conversation.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Tell us about your child and what you are hoping for. We respond within one
              business day to arrange a fifteen-minute intro call.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  )
}
