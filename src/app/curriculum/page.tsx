import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { STAGES, CLASS_SHAPE } from '@/lib/content'
import { BOOKING_URL, NEXT_GROUP } from '@/lib/links'
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

      <main className="pt-36 pb-24">
        <section className="px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-[2.6rem] sm:text-[3.2rem] leading-[1.08] font-medium text-ink mb-7">
              What we teach
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              This is the whole curriculum, set out in the open. Students start wherever they are
              and work through it in order, moving on when they are ready rather than when a
              schedule says they should.
            </p>
          </div>
        </section>

        <section className="mt-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-ink mb-7">How a class runs</h2>
            <div className="text-[1.02rem] text-ink-500 leading-relaxed flex flex-col gap-5">
              {CLASS_SHAPE.map(p => <p key={p}>{p}</p>)}
            </div>
          </div>
        </section>

        <section className="mt-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-ink mb-10 pb-5 border-b border-ink/10">
              The six stages
            </h2>
            <div className="flex flex-col">
              {STAGES.map((s, i) => (
                <div key={s.name} className={`py-8 ${i > 0 ? 'border-t border-ink/[0.08]' : 'pt-0'}`}>
                  <h3 className="font-display text-2xl font-medium text-ink mb-3">{s.name}</h3>
                  <p className="text-[0.98rem] text-ink-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 px-6">
          <div className="max-w-3xl mx-auto bg-ink rounded-lg p-10 sm:p-12">
            <p className="text-white/80 leading-relaxed text-[1.05rem] mb-8">
              A new group is forming for ages {NEXT_GROUP.ages}, starting {NEXT_GROUP.starts}, and
              the first class is free.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={BOOKING_URL}>Book an intro call <ArrowRight size={17} /></a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
