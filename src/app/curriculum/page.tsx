import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { LEVELS, LEVEL_ONE_WEEKS } from '@/types'
import { NIDA_BOOKING_URL, NEXT_COHORT } from '@/lib/links'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Curriculum | Future Voices',
  description:
    'Six levels, eight weeks each, one live class per week, and a real performance at the end of every level. The entire Future Voices curriculum, in the open.',
}

export default function CurriculumPage() {
  const laterLevels = LEVELS.filter(l => l.n > 1)

  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-5">Curriculum</p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.08] font-medium text-ink mb-6">
              The path from first words to mastery.
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              Six levels. Eight weeks each. One live class per week, and a real performance at the
              end of every level. This is the entire Future Voices curriculum, in the open.
            </p>
          </div>
        </section>

        {/* How every class works */}
        <section className="mt-16 px-6">
          <div className="max-w-3xl mx-auto bg-white border border-ink/[0.08] rounded-lg p-8 sm:p-10">
            <h2 className="font-display text-2xl font-medium text-ink mb-4">How every class works</h2>
            <p className="text-[0.98rem] text-ink-500 leading-relaxed">
              Every session, at every level, runs the same loop: learn one thing, perform it on the
              spot, receive specific feedback, and do it again. Every student speaks in every class.
              Performances are recorded throughout the level, with your consent, so you can play
              your child&rsquo;s first talk beside their most recent one and watch the change happen.
            </p>
          </div>
        </section>

        {/* Level 1 detail */}
        <section className="mt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border-b border-ink/10 pb-6 mb-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-3">Level 1</p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-4">Confidence</h2>
              <p className="text-ink-500 leading-relaxed max-w-2xl">
                Level 1 takes a student from &ldquo;I hate speaking&rdquo; to delivering a prepared talk in
                front of an audience. Here is every week.
              </p>
            </div>

            <ol className="flex flex-col">
              {LEVEL_ONE_WEEKS.map((w, i) => (
                <li
                  key={w.n}
                  className={`flex flex-col sm:flex-row gap-3 sm:gap-8 py-6 ${
                    i > 0 ? 'border-t border-ink/[0.08]' : 'pt-0'
                  }`}
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold sm:w-24 shrink-0 sm:pt-1.5">
                    Week {w.n}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink mb-2">{w.title}</h3>
                    <p className="text-[0.95rem] text-ink-500 leading-relaxed">{w.full}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Levels 2 to 6 */}
        <section className="mt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border-b border-ink/10 pb-6 mb-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-3">What comes next</p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink">The road ahead</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {laterLevels.map(l => (
                <div key={l.n} className="bg-white border border-ink/[0.08] rounded-lg p-7">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-display text-2xl text-gold">{l.n}</span>
                    <h3 className="font-display text-xl font-medium text-ink">{l.name}</h3>
                  </div>
                  <p className="text-[0.93rem] text-ink-500 leading-relaxed">{LEVEL_BLURBS[l.n]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-20 px-6">
          <div className="max-w-4xl mx-auto bg-ink rounded-lg p-10 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
              The next Level 1 cohort starts Saturday, September 12.
            </h2>
            <p className="text-white/60 mb-8">
              {NEXT_COHORT.ages}. {NEXT_COHORT.seats}.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={NIDA_BOOKING_URL}>Book a free intro call <ArrowRight size={17} /></a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const LEVEL_BLURBS: Record<number, string> = {
  2: 'Organizing ideas, eliminating filler, concise communication, explaining complex things simply. The student who can speak learns to be understood.',
  3: 'Narrative structure, emotion, memorable openings, examples, and humor. Talks that stay with an audience.',
  4: 'Argument, rhetoric, audience psychology, and calls to action. Speaking that moves people to act.',
  5: 'Stage presence, vocal dynamics, physicality, and handling difficult audiences under pressure.',
  6: 'Keynote speeches, impromptu speaking, debate, and interviews. The finishing level: high-stakes speaking, handled with composure.',
}
