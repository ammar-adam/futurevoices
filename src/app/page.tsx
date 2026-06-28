import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { HeroShowcase } from '@/components/marketing/hero-showcase'
import { PROGRAMS, SCHEDULE_SLOTS } from '@/types'
import { CheckCircle2, Mic2, Globe2, ShieldCheck, Star, Users, BookOpen, Award, ArrowRight, Quote } from 'lucide-react'

const POPULAR_SLUG = PROGRAMS[1]?.slug

const AVATARS = [
  { i: 'S', from: '#4F9BF7', to: '#7C5CFC' },
  { i: 'J', from: '#34B27B', to: '#7BD6A8' },
  { i: 'P', from: '#B68C2D', to: '#E3C98A' },
  { i: 'M', from: '#F7857A', to: '#FBB6AE' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip">
      <Navbar />

      {/* ===== Hero ===== */}
      <section className="relative pt-28 sm:pt-36 pb-20 px-5 overflow-hidden">
        <div className="glow" style={{ background: '#e3c98a', width: 480, height: 480, top: -120, left: -100, opacity: 0.4 }} />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          {/* copy */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2 bg-white/70 backdrop-blur ring-1 ring-ink/[0.07] text-ink-500 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 shadow-[var(--shadow-soft)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Free 2-week pilot · No credit card
              </span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="font-display text-[2.7rem] leading-[1.05] sm:text-6xl font-semibold text-ink mb-6">
                Your child has something to say.
                <span className="block italic text-gradient-gold">Let&rsquo;s help them say it.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg text-ink-500 max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed">
                Live, online public speaking for ages 6&ndash;18. In six weeks, your child goes from holding back
                to standing up &mdash; and delivers a speech live to you on the final day.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/signup">Start Free Pilot <ArrowRight size={18} /></Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/#how-it-works">See How It Works</Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2.5">
                  {AVATARS.map(a => (
                    <span
                      key={a.i}
                      className="flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-cream text-white text-xs font-bold"
                      style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                    >
                      {a.i}
                    </span>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#B68C2D" className="text-gold" />)}
                  </div>
                  <p className="text-xs text-ink-500 mt-0.5">Loved by parents in 8+ countries</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* visual */}
          <Reveal delay={120} className="hidden sm:block">
            <HeroShowcase />
          </Reveal>
        </div>
      </section>

      {/* ===== Trust bar ===== */}
      <section className="relative border-y border-ink/[0.07] bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-5 py-7 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-500 font-medium">
          {[
            'Every child speaks, every session',
            'Final showcase — live, to you',
            'Small groups, max 8',
            'Live on Zoom · Toronto-based',
            '30-day money-back guarantee',
          ].map(t => (
            <span key={t} className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-gold" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ===== The problem ===== */}
      <section className="py-24 px-5">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-4">The quiet kid</p>
            <h2 className="font-display text-3xl sm:text-[2.6rem] font-semibold text-ink mb-7 leading-tight">You&rsquo;ve seen it.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg text-ink-500 leading-relaxed">
              The clever idea they won&rsquo;t raise their hand to share. The mumble when a grown-up asks a question.
              The bright kid who shrinks the moment all eyes are on them.
            </p>
            <p className="text-lg text-ink-500 leading-relaxed mt-5">
              It&rsquo;s not a flaw &mdash; it&rsquo;s a skill they haven&rsquo;t been taught yet. Confident speaking is
              learnable. And the earlier a child learns it, the further it carries them.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Programs ===== */}
      <section id="programs" className="py-24 px-5 bg-white border-y border-ink/[0.05]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-3">Find their level</p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-4">Four tracks. One mission.</h2>
            <p className="text-lg text-ink-500">Every program runs in cohorts of up to 8 students, matched by age and timezone.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROGRAMS.map((p, idx) => {
              const popular = p.slug === POPULAR_SLUG
              return (
                <Reveal key={p.id} delay={idx * 70}>
                  <div
                    className={
                      'relative h-full rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ' +
                      (popular
                        ? 'bg-ink text-white shadow-[var(--shadow-lift)] ring-1 ring-gold/30'
                        : 'bg-cream border border-ink/[0.07] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]')
                    }
                  >
                    {popular && (
                      <span className="absolute top-4 right-4 rounded-full bg-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                        Most popular
                      </span>
                    )}
                    <div className="h-1.5" style={{ background: p.color }} />
                    <div className="p-6 flex flex-col h-[calc(100%-0.375rem)]">
                      <p className={'text-xs font-semibold uppercase tracking-wider mb-1 ' + (popular ? 'text-white/50' : 'text-ink-500/70')}>
                        Ages {p.age_min}&ndash;{p.age_max}
                      </p>
                      <h3 className={'font-display text-xl font-semibold mb-3 ' + (popular ? 'text-white' : 'text-ink')}>{p.name}</h3>
                      <p className={'text-sm mb-5 leading-relaxed flex-1 ' + (popular ? 'text-white/65' : 'text-ink-500')}>{p.description}</p>
                      <div className="flex items-baseline gap-1 mb-5">
                        <span className={'text-2xl font-bold ' + (popular ? 'text-white' : 'text-ink')}>${p.price_monthly}</span>
                        <span className={popular ? 'text-sm text-white/50' : 'text-sm text-ink-500/70'}>/month</span>
                      </div>
                      <Button size="sm" variant={popular ? 'secondary' : 'primary'} className="w-full" asChild>
                        <Link href={`/signup?track=${p.slug}`}>Start Free Pilot</Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section id="how-it-works" className="relative py-28 px-5 bg-ink overflow-hidden">
        <div className="glow" style={{ background: '#b68c2d', width: 420, height: 420, top: -100, right: -120, opacity: 0.22 }} />
        <div className="relative max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-3">The journey</p>
            <h2 className="font-display text-4xl font-semibold text-white mb-4">From holding back to standing up</h2>
            <p className="text-lg text-white/55">Four steps. Six weeks. One unforgettable final day.</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
            {[
              { n: '01', title: 'Sign up free', body: 'Create a parent account, add your child, and pick a track. No credit card needed for the pilot.' },
              { n: '02', title: 'Join your cohort', body: 'We place your child in a small group of up to 8 students at the right level and timezone.' },
              { n: '03', title: 'Speak every week', body: 'Weekly 60-minute Zoom sessions with an expert coach. Every child speaks every single time — no one hides.' },
              { n: '04', title: 'Take the stage', body: 'In the final session your child delivers their speech live — to you. Not a certificate. Proof.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80} className="relative flex flex-col gap-3">
                <span className="font-display text-5xl font-semibold text-gold/35">{s.n}</span>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <Link href="/curriculum" className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:gap-2.5 transition-all">
              See the full 6-session curriculum <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===== The Showcase ===== */}
      <section className="py-28 px-5">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-4">Session 6</p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-5 leading-tight">The program ends with a moment you&rsquo;ll remember.</h2>
            <p className="text-lg text-ink-500 leading-relaxed mb-4">
              In the final session, your child stands up and delivers their speech &mdash; to you. You&rsquo;ll watch the
              kid who used to look away hold the room.
            </p>
            <p className="text-lg text-ink-500 leading-relaxed">
              That&rsquo;s not a workbook or a certificate. That&rsquo;s the proof.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative rounded-2xl bg-ink p-8 shadow-[var(--shadow-lift)]">
              <div className="absolute -top-5 -left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-white shadow-[var(--shadow-glow)]">
                <Mic2 size={24} />
              </div>
              <p className="text-white/45 text-xs font-semibold uppercase tracking-wider mb-5 mt-2">What the showcase looks like</p>
              <ul className="flex flex-col gap-3.5">
                {[
                  'Nida welcomes parents and sets the tone: this is a celebration',
                  'Each child delivers their 2–3 minute speech — parents on, cameras on',
                  'Applause after every single one',
                  'Nida names one specific strength for each child, by name',
                  '“Future Voices Founding Speaker” recognition',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-white/75 text-sm leading-relaxed">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Meet Nida ===== */}
      <section className="py-24 px-5 bg-white border-y border-ink/[0.05]">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <Reveal className="flex justify-center sm:justify-start">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-gold/20 blur-2xl" />
                <div
                  className="relative w-52 h-52 rounded-[2rem] flex items-center justify-center text-white text-6xl font-display font-semibold shadow-[var(--shadow-lift)]"
                  style={{ background: 'linear-gradient(140deg, #14172B 0%, #3a3f63 45%, #B68C2D 120%)' }}
                >
                  N
                </div>
                <div className="absolute -bottom-3 -right-3 rounded-2xl bg-white px-3 py-2 shadow-[var(--shadow-lift)]">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">Founder &amp; Lead Coach</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-2">Meet your instructor</p>
              <h2 className="font-display text-3xl font-semibold text-ink mb-4">Nida</h2>
              <p className="text-ink-500 leading-relaxed mb-4">
                Nida built Future Voices because she believes every child already has something powerful to say &mdash;
                they just need someone to teach them how. Her approach is warm, structured, and relentlessly encouraging.
              </p>
              <p className="text-ink-500 leading-relaxed mb-6">
                Kids leave her sessions braver than they arrived &mdash; every single week.
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  { icon: Users, text: 'Small groups only — max 8 students per cohort' },
                  { icon: BookOpen, text: 'Every child speaks in every session, no exceptions' },
                  { icon: Award, text: 'One specific win named for every child, every week' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-ink-500">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gold/10 text-gold shrink-0">
                      <Icon size={15} />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Schedule ===== */}
      <section id="schedule" className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-3">Wherever you are</p>
            <h2 className="font-display text-4xl font-semibold text-ink mb-4">Classes in your timezone</h2>
            <p className="text-lg text-ink-500">We run cohorts across three regions every week.</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {SCHEDULE_SLOTS.map((region, i) => (
              <Reveal key={region.region} delay={i * 80}>
                <div className="h-full bg-white rounded-2xl border border-ink/[0.07] shadow-[var(--shadow-soft)] p-6 transition-all hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold/10 text-gold">
                      <Globe2 size={17} />
                    </span>
                    <h3 className="font-semibold text-ink">{region.region}</h3>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {region.slots.map(s => (
                      <li key={s} className="text-sm text-ink-500 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-24 px-5 bg-white border-y border-ink/[0.05]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold mb-3">Parent stories</p>
            <h2 className="font-display text-4xl font-semibold text-ink">Quiet kids. Loud results.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { quote: 'My 8-year-old used to hide behind me at parties. After one term she was presenting to her whole class.', name: 'Sarah M.', location: 'Toronto, CA', from: '#4F9BF7', to: '#7C5CFC' },
              { quote: 'The coach notes after every session are incredible. I know exactly what we are working on and why.', name: 'James T.', location: 'London, UK', from: '#34B27B', to: '#7BD6A8' },
              { quote: 'Worth every penny. My son made the school debate team in month two. The small cohort makes the difference.', name: 'Priya K.', location: 'Singapore', from: '#B68C2D', to: '#E3C98A' },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="h-full bg-cream rounded-2xl p-7 border border-ink/[0.05] flex flex-col">
                  <Quote size={26} className="text-gold/40 mb-4" />
                  <blockquote className="text-ink-500 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="flex items-center gap-3 mt-6 pt-5 border-t border-ink/[0.06]">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold" style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}>
                      {t.name[0]}
                    </span>
                    <div>
                      <p className="font-semibold text-ink text-sm">{t.name}</p>
                      <p className="text-xs text-ink-500/70">{t.location}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Trust / safety ===== */}
      <section className="py-24 px-5">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-10 text-center">
          {[
            { icon: ShieldCheck, title: 'COPPA & PIPEDA compliant', body: 'Parental consent required for all under-13 students. Your data is never sold.' },
            { icon: Mic2, title: 'Expert coaches only', body: 'Every coach is vetted, trained in our curriculum, and background-checked.' },
            { icon: CheckCircle2, title: '30-day money back', body: 'If your child does not love the first paid month, we refund — no questions asked.' },
          ].map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80} className="flex flex-col items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <Icon size={24} />
              </span>
              <h3 className="font-semibold text-ink">{title}</h3>
              <p className="text-sm text-ink-500 leading-relaxed">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className="px-5 pb-24">
        <div className="relative max-w-5xl mx-auto rounded-[2rem] bg-ink overflow-hidden px-8 py-16 sm:py-20 text-center shadow-[var(--shadow-lift)]">
          <div className="glow" style={{ background: '#b68c2d', width: 420, height: 420, top: -120, left: '50%', transform: 'translateX(-50%)', opacity: 0.3 }} />
          <Reveal className="relative">
            <h2 className="font-display text-3xl sm:text-[2.7rem] font-semibold text-white mb-5 leading-tight">
              Six weeks from now, your child<br className="hidden sm:block" /> could be standing tall.
            </h2>
            <p className="text-white/60 mb-9 text-lg max-w-xl mx-auto">Start with a free 2-week pilot. No credit card, no commitment.</p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/signup">Start Free Pilot <ArrowRight size={18} /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
