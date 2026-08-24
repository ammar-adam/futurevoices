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
          <p className="text-sm text-gray-500 mb-10">Last updated: August 2026</p>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-8 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Enrollment and payment</h2>
              <p>Group coaching is billed monthly at the rate listed in our Programs section, in Canadian dollars. Private 1:1 coaching and Competitive Prep are billed per session. Monthly enrollment may be cancelled at any time, and cancellation takes effect at the end of the current billing period.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Starting and stopping</h2>
              <p>Every family starts with an intro call before enrolling, so you can ask questions and we can confirm the right option for your child. Monthly enrolment may be cancelled at any time, and cancellation takes effect at the end of the current billing period.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Code of conduct</h2>
              <p>All students and parents are expected to treat the coach, fellow students, and the program with respect. Future Voices reserves the right to remove any participant whose conduct is disruptive or harmful to others.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Safeguarding</h2>
              <p>How we keep sessions safe for children, including who teaches, who may observe, and how we handle a concern, is set out in our <Link href="/safeguarding" className="text-[#B68C2D] hover:underline">Safeguarding Policy</Link>.</p>
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
