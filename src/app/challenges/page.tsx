import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { NewsletterForm } from '@/components/marketing/newsletter-form'
import { NIDA_BOOKING_URL } from '@/lib/links'

export const metadata = {
  title: 'Ten speaking challenges to try at home | Future Voices',
  description:
    'Ten of the challenges we use with Future Voices students. Each one takes a minute and needs nothing but a willing child.',
}

export default function ChallengesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl leading-[1.08] font-medium text-ink mb-7">
            Ten speaking challenges to try at home
          </h1>

          <div className="text-lg text-ink-500 leading-relaxed flex flex-col gap-5 mb-10">
            <p>
              These are ten of the challenges we use with Future Voices students. Each one takes a
              minute, needs nothing but a willing child, and works far better than telling a kid to
              be more confident.
            </p>
            <p>Print them, stick them on the fridge, and do one at dinner.</p>
          </div>

          <div className="bg-white border border-ink/[0.08] rounded-lg p-7 sm:p-8">
            <NewsletterForm source="challenges-page" buttonLabel="Send it to me" />
            <p className="text-xs text-ink-500/70 mt-4 leading-relaxed">
              You will also get occasional tips, stories, and news about new sessions.
            </p>
          </div>

          <p className="text-[0.95rem] text-ink-500 leading-relaxed mt-12">
            Future Voices runs live online public speaking classes for kids and teens. If you want
            to know more,{' '}
            <a
              href={NIDA_BOOKING_URL}
              className="text-ink font-medium underline underline-offset-4 decoration-gold hover:decoration-ink"
            >
              book a free intro call
            </a>
            .
          </p>

          <p className="mt-8">
            <Link href="/" className="text-sm text-gold font-semibold hover:underline">
              ← Back to home
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
