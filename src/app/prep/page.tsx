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
    title: 'DECA and case competitions, $45 a session',
    body: 'Reading a case quickly and working out what judges are actually scoring, building a structure that holds up under time pressure, and presenting it with enough authority that the judges’ questions do not knock you off course. Most students book a handful of sessions in the weeks leading up to a competition.',
  },
  {
    title: 'Model UN, $45 a session',
    body: 'Writing position papers and researching a country’s real position rather than the one you would prefer it had, using rules of procedure to your advantage instead of being tripped up by them, negotiating in unmoderated caucus, building a bloc, and getting your language into the final resolution.',
  },
  {
    title: 'University application essays, $60 a session',
    body: 'Finding the material actually worth writing about, which is the part most students skip, then drafting it, cutting it, and cutting it again. These sessions cost more because drafts are read and marked up between them.',
  },
]

export default function PrepPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-36 pb-24">
        <section className="px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-[2.6rem] sm:text-[3.2rem] leading-[1.08] font-medium text-ink mb-7">
              Competitive prep
            </h1>
            <p className="text-lg text-ink-500 leading-relaxed">
              Private coaching for teenagers working towards a specific competition or deadline.
              Sessions are planned backwards from the date and booked one at a time, so students
              take as many or as few as they need.
            </p>
          </div>
        </section>

        <section className="mt-16 px-6">
          <div className="max-w-3xl mx-auto flex flex-col">
            {TRACKS.map((t, i) => (
              <div key={t.title} className={`py-8 ${i > 0 ? 'border-t border-ink/[0.08]' : 'pt-0'}`}>
                <h2 className="font-display text-2xl font-medium text-ink mb-3">{t.title}</h2>
                <p className="text-[0.98rem] text-ink-500 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 px-6">
          <div className="max-w-3xl mx-auto border-t border-ink/[0.08] pt-10">
            <h2 className="font-display text-2xl font-medium text-ink mb-3">Who teaches this</h2>
            <p className="text-[0.98rem] text-ink-500 leading-relaxed">
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
        </section>
      </main>

      <Footer />
    </div>
  )
}
