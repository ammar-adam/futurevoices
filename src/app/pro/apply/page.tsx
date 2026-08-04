import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ProApplyForm } from '@/components/marketing/pro-apply-form'
import { CheckCircle2 } from 'lucide-react'

export default function ProApplyPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#FBF8F1' }}>
      <Navbar />

      <main className="pt-28 pb-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

            {/* Left column — context */}
            <div className="lg:sticky lg:top-28">
              <Link href="/pro" className="text-sm font-semibold hover:underline mb-6 inline-block" style={{ color: '#1F6B5C' }}>
                ← Back to Pro
              </Link>
              <h1 className="font-display text-4xl font-semibold text-[#14172B] mb-4 leading-tight">
                Apply for 1:1 coaching
              </h1>
              <p className="text-gray-500 leading-relaxed mb-8">
                Tell us about the student, the goal, and the timeline. We review every application
                and reach out within 1–2 business days.
              </p>

              <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6 flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">What happens next</p>
                {[
                  'We review your application and confirm the right track',
                  'A team member reaches out to schedule a free 20-min intro call',
                  'If it\'s a fit, we book your first session and get started',
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-3">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white shrink-0 mt-0.5"
                      style={{ background: '#1F6B5C' }}
                    >
                      {i + 1}
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2 text-sm text-gray-500">
                {[
                  'No commitment until you decide to start',
                  'Packages of 4 sessions — extend if you need more',
                  'Scheduling fits around school and activities',
                ].map(note => (
                  <span key={note} className="flex items-center gap-2">
                    <CheckCircle2 size={13} style={{ color: '#1F6B5C' }} />
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column — form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <ProApplyForm />
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
