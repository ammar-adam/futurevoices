import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { PREP_BOOKING_URL } from '@/lib/links'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Competitive prep | Future Voices',
  description:
    'Private coaching for teenagers working towards a specific competition or deadline. Sessions are planned backwards from the date and booked one at a time.',
}

const TRACKS = [
  {
    title: 'DECA and case competitions',
    price: '$45 a session',
    body: 'Reading a case quickly and working out what judges are actually scoring, building a structure that holds up under time pressure, and presenting it with enough authority that the judges’ questions do not knock you off course. Most students book a handful of sessions in the weeks leading up to a competition.',
  },
  {
    title: 'Model UN',
    price: '$45 a session',
    body: 'Writing position papers and researching a country’s real position rather than the one you would prefer it had, using rules of procedure to your advantage instead of being tripped up by them, negotiating in unmoderated caucus, building a bloc, and getting your language into the final resolution.',
  },
  {
    title: 'University application essays',
    price: '$60 a session',
    body: 'Finding the material actually worth writing about, which is the part most students skip, then drafting it, cutting it, and cutting it again. These sessions cost more because drafts are read and marked up between them.',
  },
]

export default function PrepPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-clip bg-cream">
      <Navbar overHero />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative bg-ink min-h-[58vh] flex items-end">
        <div className="glow" style={{ background: '#9c7c50', width: 460, height: 460, top: -140, right: -120, opacity: 0.16 }} />
        <div className="relative w-full max-w-6xl mx-auto px-6 pb-16 pt-40">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold-300 mb-5">
            Competitive prep
          </p>
          <h1 className="font-display text-[2.4rem] sm:text-[3.2rem] leading-[1.08] font-medium text-white max-w-2xl mb-6">
            Coaching built backwards from the date.
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
            Private coaching for teenagers working towards a specific competition or deadline.
            Sessions are planned backwards from the date and booked one at a time, so students take
            as many or as few as they need.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href={PREP_BOOKING_URL}>Book an intro call <ArrowRight size={18} /></a>
          </Button>
        </div>
      </section>

      <main className="py-20 sm:py-24">
        {/* Tracks */}
        <section className="px-6">
          <div className="max-w-6xl mx-auto">
            <div className="border-b border-ink/10 pb-5 mb-10 flex flex-wrap items-baseline justify-between gap-4">
              <h2 className="font-display text-3xl font-medium text-ink">What we coach</h2>
              <p className="text-sm text-ink-500">All prices in CAD.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TRACKS.map(t => (
                <div
                  key={t.title}
                  className="bg-white rounded-lg p-8 flex flex-col border border-ink/[0.08] shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-display text-[1.4rem] leading-tight font-medium text-ink mb-2">
                    {t.title}
                  </h3>
                  <p className="text-ink font-semibold">{t.price}</p>
                  <p className="text-[0.95rem] text-ink-500 leading-relaxed mt-4">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who teaches */}
        <section className="mt-20 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.38fr_0.62fr] gap-12">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold mb-4">
                Your coach
              </p>
              <h2 className="font-display text-3xl font-medium text-ink">Who teaches this</h2>
            </div>
            <div>
              <p className="text-[1.02rem] text-ink-500 leading-relaxed">
                Coaching is one to one, from a coach with national and international competition
                results in these events and direct experience of the application process. You will
                meet them on the intro call.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href={PREP_BOOKING_URL}>Book an intro call <ArrowRight size={17} /></a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
