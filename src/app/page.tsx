import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { ContactForm } from '@/components/marketing/contact-form'
import { STAGES, CLASS_SHAPE } from '@/lib/content'
import { BOOKING_URL, CONTACT_EMAIL, NEXT_GROUP } from '@/lib/links'
import { ArrowRight, ChevronDown } from 'lucide-react'

const SUMMARY = [
  'Small groups, so every student speaks every week',
  'The same coach every session, from start to finish',
  'A curriculum that builds in order rather than a series of one-off workshops',
]

const PROGRAMS = [
  {
    name: 'Group classes',
    price: '$120 a month',
    body: 'One class a week in a small group of students of similar age, working through the curriculum together. Everyone speaks in every session. The first class is free so your child can try it before you pay for anything, and you can stop at the end of any month.',
  },
  {
    name: 'Private coaching',
    price: '$50 a session, or four sessions for $180',
    body: 'The same curriculum taught one to one. This suits a child who would find a group too much to begin with, one who is preparing for something specific, or one who wants to work faster than a class allows.',
  },
  {
    name: 'Competitive prep, for teens',
    price: 'From $45 a session',
    body: 'One to one coaching for students working towards a competition or an application deadline. DECA and case competitions, $45 a session. Model UN, $45 a session. University application essays, $60 a session, which includes written feedback on drafts between sessions. Sessions are booked one at a time, with no packages and no minimum.',
    link: { href: '/prep', label: 'More on competitive prep' },
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
    q: 'How does the free first class work?',
    a: 'Your child sits in on a full class at no cost, with no payment details taken and nothing to cancel. If it suits them, you enrol afterwards, and if it does not, that is a perfectly good outcome and we would rather find out that way than have a child in a class they do not want to be in.',
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
    a: `The group forming at the moment is for ages ${NEXT_GROUP.ages}. If your child falls outside that, get in touch anyway and we will tell you honestly whether we can help now or whether it is worth waiting for a group that fits them better.`,
  },
  {
    q: 'How do we start?',
    a: 'Book a free intro call. We will ask about your child, you can ask us whatever you want to know, and if it seems like a good fit they can join the next group. If it does not, we will say so.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="pt-36 sm:pt-44 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-[2.6rem] sm:text-[3.4rem] leading-[1.08] font-medium text-ink mb-7">
            Public speaking, taught properly.
          </h1>
          <p className="text-lg text-ink-500 leading-relaxed mb-9">
            Future Voices is a small school for kids and teens who want to get better at speaking.
            Students meet weekly in a small group, they speak in every class, and they work through
            a curriculum that starts with getting comfortable being heard and goes as far as
            speaking well under real pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <a href={BOOKING_URL}>Book an intro call <ArrowRight size={18} /></a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/curriculum">See what we teach</Link>
            </Button>
          </div>
          <p className="text-sm text-ink-500 mt-7">
            A new group is forming for ages {NEXT_GROUP.ages}, starting {NEXT_GROUP.starts}. The
            first class is free.
          </p>
        </div>
      </section>

      {/* ── Summary ──────────────────────────────── */}
      <section className="bg-white border-y border-ink/[0.08]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3">
          {SUMMARY.map((line, i) => (
            <p
              key={line}
              className={`py-8 px-6 text-[0.97rem] text-ink leading-relaxed ${
                i > 0 ? 'md:border-l border-ink/[0.08]' : ''
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* ── Approach ─────────────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-7">
            Most kids barely ever practise speaking.
          </h2>
          <div className="text-[1.05rem] text-ink-500 leading-relaxed flex flex-col gap-5">
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

      {/* ── What students learn ──────────────────── */}
      <section id="path" className="bg-white border-y border-ink/[0.08] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-6">
            What students learn
          </h2>
          <p className="text-[1.05rem] text-ink-500 leading-relaxed mb-12">
            The curriculum moves through six stages in order, because each one relies on the one
            before it. There is no point working on persuading an audience before a student is
            comfortable being looked at by one. Students move on when they are ready rather than on
            a fixed schedule.
          </p>

          <div className="flex flex-col">
            {STAGES.map((s, i) => (
              <div key={s.name} className={`py-7 ${i > 0 ? 'border-t border-ink/[0.08]' : 'pt-0'}`}>
                <h3 className="font-display text-2xl font-medium text-ink mb-3">{s.name}</h3>
                <p className="text-[0.98rem] text-ink-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <Link
            href="/curriculum"
            className="inline-block mt-10 text-sm font-semibold text-ink underline underline-offset-4 decoration-gold hover:decoration-ink"
          >
            Read the curriculum in detail
          </Link>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────── */}
      <section id="programs" className="py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="border-b border-ink/10 pb-5 mb-10">
            <h2 className="font-display text-3xl font-medium text-ink mb-2">Programs</h2>
            <p className="text-sm text-ink-500">
              Every family starts with a free intro call. All prices in CAD.
            </p>
          </div>

          <div className="flex flex-col">
            {PROGRAMS.map((p, i) => (
              <div key={p.name} className={`py-8 ${i > 0 ? 'border-t border-ink/[0.08]' : 'pt-0'}`}>
                <h3 className="font-display text-2xl font-medium text-ink mb-1">{p.name}</h3>
                <p className="text-ink font-semibold mb-3">{p.price}</p>
                <p className="text-[0.98rem] text-ink-500 leading-relaxed">{p.body}</p>
                {p.link && (
                  <Link
                    href={p.link.href}
                    className="inline-block mt-4 text-sm font-semibold text-ink underline underline-offset-4 decoration-gold hover:decoration-ink"
                  >
                    {p.link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What a class looks like ──────────────── */}
      <section className="bg-white border-y border-ink/[0.08] py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-7">
            What a class looks like
          </h2>
          <div className="text-[1.05rem] text-ink-500 leading-relaxed flex flex-col gap-5">
            {CLASS_SHAPE.map(p => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* ── Competitive prep ─────────────────────── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-7">
            For teens working towards a specific date
          </h2>
          <p className="text-[1.05rem] text-ink-500 leading-relaxed">
            DECA provincials, a Model UN conference, or a university application due in six weeks.
            Competitive prep is private coaching built backwards from the date that matters, taught
            by a coach with national and international competition results in these events. Sessions
            run from $45 to $60 and are booked one at a time.
          </p>
          <Link
            href="/prep"
            className="inline-block mt-6 text-sm font-semibold text-ink underline underline-offset-4 decoration-gold hover:decoration-ink"
          >
            More on competitive prep
          </Link>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────── */}
      <section id="faq" className="bg-white border-y border-ink/[0.08] py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-10">
            Questions
          </h2>
          <div className="flex flex-col">
            {FAQ.map(f => (
              <details key={f.q} className="group border-b border-ink/10 last:border-0">
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold text-ink text-[0.97rem] leading-snug">{f.q}</span>
                  <ChevronDown size={18} className="text-ink-500 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="text-[0.95rem] text-ink-500 leading-relaxed pb-5">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Start a conversation ─────────────────── */}
      <section id="contact" className="bg-ink py-20 sm:py-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-6">
            Start with a conversation
          </h2>
          <p className="text-white/65 leading-relaxed text-[1.05rem] mb-9 max-w-2xl">
            Every family starts with a short call before anything else happens. Tell us about your
            child and what you are hoping will change, and we will point you towards the right
            option or tell you plainly if we are not the right people for them.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href={BOOKING_URL}>Book an intro call <ArrowRight size={17} /></a>
          </Button>
          <p className="text-sm text-white/50 mt-4">
            Or email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/80 underline underline-offset-4">
              {CONTACT_EMAIL}
            </a>
          </p>

          <div className="mt-14 pt-10 border-t border-white/15">
            <p className="text-white text-[1.02rem] mb-6">
              Or send us the details and we will get back to you
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
