import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/marketing/contact-form'
import { LEVELS, CLASS_SHAPE } from '@/types'
import { NIDA_BOOKING_URL, CONTACT_EMAIL, NEXT_COHORT } from '@/lib/links'
import { ArrowRight, ChevronDown } from 'lucide-react'

const STATS = [
  'Small groups, so that every student is on their feet in every single class',
  'The same coach teaching every session, from the first class to the last one',
  'A curriculum that builds in order rather than a series of one-off workshops',
]

const PRIVATE_CARDS = [
  {
    name: 'Private coaching',
    price: '$50 a session',
    priceNote: 'or four sessions for $180',
    body: 'The same curriculum taught one to one. This suits a child who would find a group too much to begin with, one who is preparing for something specific, or one who wants to work faster than a class allows.',
  },
  {
    name: 'Competitive prep, for teens',
    price: 'From $45 a session',
    priceNote: 'booked one at a time',
    body: 'One to one coaching for students working towards a competition or an application deadline. Sessions are booked one at a time, with no packages and no minimum.',
    points: [
      'DECA and case competitions, $45 a session',
      'Model UN, $45 a session',
      'University application essays, $60 a session',
    ],
    cta: { label: 'More on competitive prep', href: '/prep' },
  },
]

const FAQ = [
  {
    q: 'My child is shy. Is this right for them?',
    a: 'Usually yes, and it is the most common reason families get in touch. Classes are built so that a quiet student speaks early and in small ways, long before anything feels like a performance. Shy children often make the most visible progress, simply because the distance between where they start and where they end up is the greatest.',
  },
  {
    q: 'How are classes taught?',
    a: 'Students meet once a week in a small group, and the same coach teaches every session. Nobody is handed between instructors partway through, and nobody has to explain themselves to someone new.',
  },
  {
    q: 'Who teaches?',
    a: 'Group and private speaking classes are taught by a public speaker and educator who has been coaching children in speaking for years. Competitive prep is taught by a coach with national and international competition results. You will meet whoever would be teaching your child on the intro call, before committing to anything.',
  },
  {
    q: 'What does it cost?',
    a: 'Group classes are $120 a month. Private coaching is $50 a session, or $180 for four sessions. Competitive prep is $45 a session for DECA and Model UN, and $60 a session for university application essays. There is no registration fee and you can stop at the end of any month.',
  },
  {
    q: 'Are there discounts?',
    a: 'Two. A second child from the same family gets 20 per cent off, and if you refer a family who enrols, you get $25 off your next month.',
  },
  {
    q: 'How much work is there outside class?',
    a: 'Usually ten or fifteen minutes of practice between sessions, though students tend to spend longer than that when they are working on a talk they care about.',
  },
  {
    q: 'What does my child need?',
    a: 'Somewhere they can speak out loud without feeling overheard by the whole house, and a willingness to be slightly uncomfortable for the first couple of sessions.',
  },
  {
    q: 'What if we miss a class?',
    a: 'Let us know and we will send a short note on what was covered and what to practise, so your child is not lost the following week.',
  },
  {
    q: 'What ages do you teach?',
    a: `The group forming at the moment is for ages ${NEXT_COHORT.ages}. If your child falls outside that, get in touch anyway and we will tell you honestly whether we can help now or whether it is worth waiting for a group that fits them better.`,
  },
  {
    q: 'How do we start?',
    a: 'Book an intro call. We will ask about your child, you can ask us whatever you want to know, and if it seems like a good fit they can join the next group. If it does not, we will say so.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip bg-cream">
      <Navbar overHero />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end">
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
            Public speaking, taught properly.
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
            Future Voices is a small school for kids and teens who want to get better at speaking.
            Students meet weekly in a small group, they speak in every class, and they work through
            a curriculum that starts with getting comfortable being heard and goes as far as
            speaking well under real pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="secondary" asChild>
              <a href={NIDA_BOOKING_URL}>Book an intro call <ArrowRight size={18} /></a>
            </Button>
            <Button size="lg" asChild className="border border-white/30 bg-white/5 text-white hover:bg-white/15 rounded-full px-8 backdrop-blur-sm">
              <Link href="/curriculum">See what we teach</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="bg-white border-b border-ink/[0.08]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3">
          {STATS.map((line, i) => (
            <div key={line} className={`py-9 px-6 ${i > 0 ? 'md:border-l border-ink/[0.08]' : ''}`}>
              <p className="font-display text-[1.35rem] font-medium text-ink leading-snug">{line}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Approach ─────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-5">Our approach</p>
          <h2 className="font-display text-3xl sm:text-[2.6rem] leading-tight font-medium text-ink mb-6">
            Most kids barely ever practise speaking.
          </h2>
          <div className="text-lg text-ink-500 leading-relaxed flex flex-col gap-5">
            <p>
              A presentation once a term, a few sentences read off a page, and that is usually the
              whole of it. It is nowhere near enough practice for anyone to get comfortable standing
              in front of a room, which is why so many capable students dread it well into adulthood.
            </p>
            <p>
              Our classes are built around the opposite habit. Each week covers one specific skill,
              every student gets up and uses it while the class is still going, and each of them
              hears what worked and what to change before they try it again. Confidence comes out of
              that repetition rather than out of encouragement, and it tends to show up faster than
              parents expect.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Path ─────────────────────────────── */}
      <section id="path" className="bg-white border-y border-ink/[0.08] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-4">The path</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-5">What students learn</h2>
            <p className="text-ink-500 leading-relaxed">
              The curriculum moves through six stages in order, because each one relies on the one
              before it. There is no point working on persuading an audience before a student is
              comfortable being looked at by one. Students move on when they are ready rather than
              on a fixed schedule.
            </p>
          </div>

          <ol className="flex flex-col border-t border-ink/[0.08]">
            {LEVELS.map(l => (
              <li key={l.n} className="border-b border-ink/[0.08]">
                <details className="group">
                  <summary className="flex items-center gap-5 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-3xl sm:text-4xl text-gold/40 leading-none w-10 shrink-0 tabular-nums group-hover:text-gold transition-colors">
                      {l.n}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-medium text-ink leading-tight flex-1">
                      {l.name}
                    </h3>
                    <ChevronDown
                      size={20}
                      className="text-ink-500 shrink-0 transition-transform duration-200 group-open:rotate-180"
                    />
                  </summary>
                  <p className="text-[0.97rem] text-ink-500 leading-relaxed pb-6 pl-[3.75rem] max-w-2xl">
                    {l.line}
                  </p>
                </details>
              </li>
            ))}
          </ol>

          <div className="mt-14 border-t border-ink/[0.08] pt-8">
            <Button asChild>
              <Link href="/curriculum">Read the curriculum in detail <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Group coaching ───────────────────────── */}
      <section id="programs" className="py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-ink">Group classes</h2>
            <p className="text-sm text-ink-500">
              Every family starts with an intro call. All prices in CAD.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20 items-start">
            <div>
              <p className="font-display text-[4.5rem] sm:text-[6rem] leading-[0.85] font-medium text-ink tabular-nums">
                $120
              </p>
              <p className="text-lg text-ink-500 mt-3">a month</p>
              <div className="w-12 h-px bg-gold mt-8" />
            </div>

            <div>
              <p className="text-[1.05rem] text-ink-500 leading-relaxed">
                One class a week in a small group of students of similar age, working through the
                curriculum together. Everyone speaks in every session, and you can stop at the end
                of any month.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <a href={NIDA_BOOKING_URL}>Book an intro call <ArrowRight size={16} /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Private coaching ─────────────────────── */}
      <section id="private" className="pb-20 sm:pb-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-medium text-ink">One to one</h2>
            <p className="text-sm text-ink-500">Booked by the session. All prices in CAD.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRIVATE_CARDS.map(p => (
              <div
                key={p.name}
                className="bg-white rounded-lg p-8 flex flex-col border border-ink/[0.08] shadow-[var(--shadow-soft)]"
              >
                <h3 className="font-display text-[1.55rem] font-medium text-ink mb-2">{p.name}</h3>
                <p className="text-ink font-semibold">
                  {p.price}
                  <span className="text-ink-500 font-normal text-sm"> · {p.priceNote}</span>
                </p>
                <p className="text-[0.95rem] text-ink-500 leading-relaxed mt-3 mb-6">{p.body}</p>
                {p.points && (
                  <ul className="mt-auto flex flex-col gap-2 border-t border-ink/[0.08] pt-5">
                    {p.points.map(pt => (
                      <li key={pt} className="text-sm text-ink flex items-start gap-2.5">
                        <span className="h-1 w-1 rounded-full bg-gold mt-2 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
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
      <section id="level-one" className="relative bg-ink py-20 sm:py-28 scroll-mt-20 overflow-hidden">
        <div className="glow" style={{ background: '#9c7c50', width: 520, height: 520, top: -200, right: -160, opacity: 0.14 }} />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-4">Inside a session</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white">
              What a class looks like
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {CLASS_SHAPE.map((para, i) => (
              <div key={i}>
                <p className="font-display text-5xl sm:text-6xl text-gold-300/35 leading-none mb-5 tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div className="w-8 h-px bg-gold-300/40 mb-5" />
                <p className="text-[0.95rem] text-white/65 leading-relaxed">{para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Competitive Prep teaser ──────────────── */}
      <section className="relative py-24 sm:py-32">
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
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-4">Competitive prep</p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">
              For teens working towards a specific date
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              DECA provincials, a Model UN conference, or a university application due in six weeks.
              Competitive prep is private coaching built backwards from the date that matters, taught
              by a coach with national and international competition results in these events.
              Sessions run from $45 to $60 and are booked one at a time.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/prep">More on competitive prep <ArrowRight size={17} /></Link>
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
              Start with a conversation
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Every family starts with a short call before anything else happens. Tell us about your
              child and what you are hoping will change, and we will point you towards the right
              option or tell you plainly if we are not the right people for them.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={NIDA_BOOKING_URL}>Book an intro call <ArrowRight size={17} /></a>
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
