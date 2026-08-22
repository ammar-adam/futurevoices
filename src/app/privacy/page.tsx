import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#FBF8F1' }}>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-[#B68C2D] font-semibold hover:underline mb-6 inline-block">← Back to home</Link>
          <h1 className="font-display text-4xl font-semibold text-[#14172B] mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: June 2026</p>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-8 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">What we collect</h2>
              <ul className="flex flex-col gap-2">
                {[
                  'Parent name, email address, and password (for account access)',
                  "Student's first name and age (to place them in the right cohort)",
                  'Session attendance records and coach notes (shared only with the parent)',
                  'Performance recordings, where you have given written consent',
                  'A phone number, if you join your cohort’s WhatsApp group',
                  'Anything you choose to tell us in an enquiry or application form',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B68C2D] inline-block mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">How we use it</h2>
              <p>We use your information solely to deliver the Future Voices program: to schedule classes, send session recaps, and stay in touch about your child&rsquo;s progress. We do not sell, rent, or share your personal data with any third party for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Children's privacy (COPPA & PIPEDA)</h2>
              <p>We take children's privacy seriously. We collect the minimum information necessary to run the program. For children under 13, we require verified parental consent before collecting any personal information. We comply with the Children's Online Privacy Protection Act (COPPA) and Canada's Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Data retention</h2>
              <p>We retain account data for as long as your account is active. You may request deletion of your account and all associated data at any time by emailing us.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Your rights</h2>
              <p>You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at <a href="mailto:hello@futurevoices.co" className="text-[#B68C2D] hover:underline">hello@futurevoices.co</a>.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
