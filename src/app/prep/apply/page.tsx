import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ProApplyForm } from '@/components/marketing/pro-apply-form'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Apply for Competitive Prep | Future Voices',
  description:
    'Tell us about the student, the goal, and the deadline. We reply within one to two business days.',
}

export default function PrepApplyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

            {/* Left column, context */}
            <div className="lg:sticky lg:top-28">
              <Link href="/prep" className="text-sm font-semibold hover:underline mb-6 inline-block" style={{ color: 'var(--gold)' }}>
                ← Back to Competitive Prep
              </Link>
              <h1 className="font-display text-4xl font-medium text-ink mb-4 leading-tight">
                Apply for 1:1 coaching
              </h1>
              <p className="text-ink-500 leading-relaxed mb-8">
                Tell us about the student, the goal, and the timeline. We review every application
                and reach out within one to two business days.
              </p>

              <div className="rounded-lg bg-white border border-ink/[0.08] p-6 flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-500/70">What happens next</p>
                {[
                  'We review your application and confirm the right track',
                  'We reach out to schedule an intro call',
                  'If it is a fit, we book your first session and get started',
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white shrink-0 mt-0.5"
                      style={{ background: 'var(--ink)' }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink-500 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2 text-sm text-ink-500">
                {[
                  'No commitment until you decide to start',
                  'Sessions are booked one at a time, no packages required',
                  'Scheduling fits around school and activities',
                ].map(note => (
                  <span key={note} className="flex items-center gap-2">
                    <CheckCircle2 size={13} style={{ color: 'var(--gold)' }} />
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column, form */}
            <div className="bg-white rounded-lg border border-ink/[0.08] p-8">
              <ProApplyForm />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
