import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#FBF8F1' }}>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-[#B68C2D] font-semibold hover:underline mb-6 inline-block">← Back to home</Link>
          <h1 className="font-display text-4xl font-semibold text-[#14172B] mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: June 2026</p>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-8 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Enrollment & payment</h2>
              <p>By enrolling in a Future Voices program, you agree to pay the applicable monthly fee. Subscriptions are billed monthly and may be cancelled at any time. Cancellation takes effect at the end of the current billing period.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Free pilot</h2>
              <p>The free pilot runs for 2 weeks and requires no payment information upfront. At the end of the pilot period, you will be invited to continue with a paid subscription. If you choose not to continue, no action is required.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Refund policy</h2>
              <p>If your child is not satisfied with their first paid month, contact us within 30 days of the charge for a full refund — no questions asked. We stand behind the program.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Code of conduct</h2>
              <p>All students and parents are expected to treat coaches, fellow students, and the program with respect. Future Voices reserves the right to remove any participant whose conduct is disruptive or harmful to others, without refund.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Recording policy</h2>
              <p>Sessions are not recorded by default. If a session is recorded for any reason (e.g. for a student who missed a class), written consent from the parent will be obtained first. See our <Link href="/safeguarding" className="text-[#B68C2D] hover:underline">Safeguarding Policy</Link> for more.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Contact</h2>
              <p>Questions? Email us at <a href="mailto:hello@futurevoices.co" className="text-[#B68C2D] hover:underline">hello@futurevoices.co</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
