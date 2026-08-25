import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { PREP_BOOKING_URL } from '@/lib/links'
import { ArrowRight, Gavel, Trophy, GraduationCap } from 'lucide-react'

export const metadata = {
  title: 'Competitive prep | Future Voices',
  description:
    'Private coaching for teenagers working towards a specific competition or deadline. Sessions are planned backwards from the date and booked one at a time.',
}

const PRICING = [
  { label: 'DECA and case competitions', price: '$45', unit: 'a session' },
  { label: 'Model UN', price: '$45', unit: 'a session' },
  { label: 'University application essays', price: '$60', unit: 'a session', note: 'These sessions cost more because drafts are read and marked up between them.' },
]

const PRINCIPLES = [
  {
    title: 'Taught one to one',
    body: 'There is no group to keep pace with, so the whole session goes on whatever this particular student needs work on before their date.',
  },
  {
    title: 'Planned backwards from the date',
    body: 'We start from the competition or the deadline and work backwards, which means each session has a job to do rather than being general practice.',
  },
  {
    title: 'Booked one session at a time',
    body: 'Students take as many or as few sessions as they need, and there are no packages to commit to and no minimum number to buy.',
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
    title: 'DECA and case competitions, $45 a session',
    tag: 'Competition',
    body: 'Reading a case quickly and working out what judges are actually scoring, building a structure that holds up under time pressure, and presenting it with enough authority that the judges’ questions do not knock you off course. Most students book a handful of sessions in the weeks leading up to a competition.',
    outcomes: [
      'Reading a case quickly and working out what is actually being scored',
      'Building a strategy that holds together while the clock is running',
      'Presenting with enough composure to hold the judging room',
      'Handling follow-up questions without losing your footing',
    ],
  },
  {
    slug: 'mun',
    title: 'Model UN, $45 a session',
    tag: 'Conference',
    body: 'Writing position papers and researching a country’s real position rather than the one you would prefer it had, using rules of procedure to your advantage instead of being tripped up by them, negotiating in unmoderated caucus, building a bloc, and getting your language into the final resolution.',
    outcomes: [
      'Writing a position paper that stakes out a clear, researched argument',
      'Using the rules of procedure to your advantage during a session',
      'Negotiating once the committee moves into unmoderated caucus',
      'Delivering speeches that the room actually remembers afterwards',
    ],
  },
  {
    slug: 'admissions',
    title: 'University application essays, $60 a session',
    tag: 'Admissions',
    body: 'Finding the material actually worth writing about, which is the part most students skip, then drafting it, cutting it, and cutting it again. These sessions cost more because drafts are read and marked up between them.',
    outcomes: [
      'Essays that sound like the student who actually wrote them',
      'A clear through-line running across every part of the application',
      'Drafts that get read and marked up in between the sessions',
      'A finished set of essays with time to spare before the deadline',
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
            Competitive prep
          </p>
          <h1 className="font-display text-[2.4rem] sm:text-[3.2rem] leading-[1.08] font-medium text-white max-w-2xl mb-6">
            Coaching built backwards from the date.
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
            Private coaching for teenagers working towards a specific competition or deadline.
            Sessions are planned backwards from the date and booked one at a time, so students
            take as many or as few as they need.
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
            <p className="text-sm text-white/50">
              Earned in the same events your child would be preparing for.
            </p>
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

            {/* Student outcomes */}
            <div className="mt-10 rounded-lg border border-white/15 p-7 sm:p-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-gold-300 mb-3">
                Students supported
              </p>
              <div className="flex flex-col gap-5 max-w-3xl">
                <div>
                  <p className="text-white text-[1.02rem] mb-1.5">Admissions</p>
                  <p className="text-white/60 leading-relaxed">
                    Four applicants were worked with on their admissions essays during this
                    year&rsquo;s cycle, and between them they held offers from Western Ivey AEO,
                    Queen&rsquo;s Commerce, and Waterloo Computing and Financial Management.
                  </p>
                </div>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-white text-[1.02rem] mb-1.5">DECA and Model UN</p>
                  <p className="text-white/60 leading-relaxed">
                    Competitors who were coached ahead of conferences and case events have gone on
                    to take provincial awards of their own.
                  </p>
                </div>
              </div>
            </div>
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
            <h2 className="font-display text-3xl font-medium text-ink">What we coach</h2>
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
          <h2 className="font-display text-3xl sm:text-4xl font-medium text-white mb-5">Who teaches this</h2>
          <p className="text-white/60 leading-relaxed mb-9">
            Coaching is one to one, from a coach with national and international competition results
            in these events and direct experience of the application process. You will meet them on
            the intro call.
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
