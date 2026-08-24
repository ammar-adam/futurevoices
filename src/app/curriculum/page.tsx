import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { LEVELS, CLASS_SHAPE } from '@/types'
import { NIDA_BOOKING_URL, NEXT_COHORT } from '@/lib/links'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'What we teach | Future Voices',
  description:
    'The whole Future Voices curriculum, set out in the open. Students start wherever they are and work through it in order.',
}

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <section className="px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-5">Curriculum</p>
            <h1 className="font-display text-4xl sm:text-5xl leading-[1.08] font-medium text-ink mb-6">
              What we teach
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              This is the whole curriculum, set out in the open. Students start wherever they are
              and work through it in order, moving on when they are ready rather than when a
              schedule says they should.
            </p>
          </div>
        </section>

        {/* How every class works */}
        <section className="mt-16 px-6">
          <div className="max-w-3xl mx-auto bg-white border border-ink/[0.08] rounded-lg p-8 sm:p-10">
            <h2 className="font-display text-2xl font-medium text-ink mb-4">How a class runs</h2>
            <div className="text-[0.98rem] text-ink-500 leading-relaxed flex flex-col gap-4">
              {CLASS_SHAPE.map(p => <p key={p}>{p}</p>)}
            </div>
          </div>
        </section>

        {/* Level 1 detail */}
        <section className="mt-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="border-b border-ink/10 pb-6 mb-10">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-3">In order</p>
              <h2 className="font-display text-3xl sm:text-4xl font-medium text-ink mb-4">The six stages</h2>
              <p className="text-ink-500 leading-relaxed max-w-2xl">
                The curriculum moves through six stages in order, because each one relies on the one
                before it. Students move on when they are ready rather than on a fixed schedule.
              </p>
            </div>

            <ol className="flex flex-col">
              {LEVELS.map((l, i) => (
                <li
                  key={l.n}
                  className={`flex flex-col sm:flex-row gap-3 sm:gap-8 py-6 ${
                    i > 0 ? 'border-t border-ink/[0.08]' : 'pt-0'
                  }`}
                >
                  <p className="font-display text-2xl text-gold sm:w-24 shrink-0 sm:pt-0.5 leading-none">
                    {l.n}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-medium text-ink mb-2">{l.name}</h3>
                    <p className="text-[0.95rem] text-ink-500 leading-relaxed">{l.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="mt-20 px-6">
          <div className="max-w-4xl mx-auto bg-ink rounded-lg p-10 sm:p-12 text-center">
            <p className="text-white/80 leading-relaxed text-[1.05rem] mb-8">
              A new group is forming for ages {NEXT_COHORT.ages}, starting {NEXT_COHORT.starts},
              and the first class is free.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={NIDA_BOOKING_URL}>Book an intro call <ArrowRight size={17} /></a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
