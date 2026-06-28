import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ShieldCheck } from 'lucide-react'

export default function SafeguardingPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#FBF8F1' }}>
      <Navbar />
      <main className="pt-28 pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-[#B68C2D] font-semibold hover:underline mb-6 inline-block">← Back to home</Link>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck size={28} className="text-[#B68C2D]" />
            <h1 className="font-display text-4xl font-semibold text-[#14172B]">Safeguarding Policy</h1>
          </div>
          <p className="text-sm text-gray-500 mb-10">Last updated: June 2026</p>

          <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-8 text-sm text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Our commitment</h2>
              <p>Future Voices is committed to creating a safe, respectful, and encouraging environment for every child. The welfare of children in our programs is our highest priority.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Coach vetting</h2>
              <ul className="flex flex-col gap-2">
                {[
                  'All coaches are interviewed and trained in the Future Voices curriculum before teaching',
                  'Coaches are required to complete a safeguarding awareness training',
                  'Background checks are conducted for all coaches who work with under-18s',
                  'No coach is ever alone in a 1-on-1 session with a child without a parent present or on the call',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B68C2D] inline-block mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Recording policy</h2>
              <p>Sessions are not recorded by default. Recordings are only made with explicit written consent from the parent. No recording or screenshot of any student will ever be shared publicly without parental consent. Consent for the final showcase (Session 6) is collected separately before that session.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Online safety</h2>
              <ul className="flex flex-col gap-2">
                {[
                  'All sessions are held on Zoom with waiting rooms enabled',
                  'Zoom links are not shared publicly — they are sent only to enrolled families',
                  'Children are not asked to share personal information in sessions',
                  'Chat is moderated by the coach',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B68C2D] inline-block mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-[#14172B] mb-3">Reporting a concern</h2>
              <p>If you have a concern about a child's welfare or about anything that happened in a Future Voices session, please contact us immediately at <a href="mailto:hello@futurevoices.co" className="text-[#B68C2D] hover:underline">hello@futurevoices.co</a>. All concerns are taken seriously and will be responded to promptly.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
