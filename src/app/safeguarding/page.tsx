import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { ShieldCheck } from 'lucide-react'

const SECTIONS: { title: string; body?: string; points?: string[] }[] = [
  {
    title: 'Our commitment',
    body: 'Future Voices exists to help children find their voice, and that is only possible in an environment that is safe, respectful and predictable. The welfare of the children in our programs comes before everything else, including the program itself.',
  },
  {
    title: 'Who teaches',
    points: [
      'Every speaking session is taught by our founder, who is the school’s sole coach for group and private classes. There are no rotating instructors and no subcontractors.',
      'A police record check (vulnerable sector) is maintained and available for parents to view on request.',
      'Coaching follows a written code of conduct: professional language, no favouritism, no criticism of a child in front of the group.',
    ],
  },
  {
    title: 'How online sessions are run',
    points: [
      'All sessions run on Zoom with a waiting room enabled; only registered students are admitted.',
      'Group sessions always include multiple families; a parent or guardian is welcome to sit in on any session, any time, without notice.',
      'For private 1:1 sessions with a student under 18, a parent or guardian must be at home and reachable for the duration of the session, and may observe at any point.',
      'Cameras stay on for students during sessions so the coach can see the room; if a family has a privacy concern, we agree on an alternative together before the first session.',
    ],
  },
  {
    title: 'Recording policy',
    points: [
      'Student performances are recorded through each level. This is a core part of the program: it is how a family sees a child’s first talk beside their most recent one.',
      'We ask for written parental consent before recording anything, and explain exactly what will be captured and why. A student can take part without being recorded if you prefer.',
      'A recording is shared privately with that student’s own family and is not shared with other families.',
      'Recordings are never used for marketing without separate, explicit written consent, and consent can be withdrawn at any time.',
    ],
  },
  {
    title: 'Communication boundaries',
    points: [
      'All communication about a student goes through the parent or guardian. The coach does not message students under 18 directly.',
      'We do not connect with students on personal social media.',
      'Scheduling, feedback and recaps are sent to the parent’s email address on file.',
    ],
  },
  {
    title: 'Data and privacy',
    points: [
      'We collect only what we need to run the program: parent contact details, the student’s first name and age, session notes, and performance recordings you have consented to.',
      'Account data is stored encrypted. We do not sell or share personal information with third parties.',
      'You can request a copy or deletion of your family’s data at any time by emailing hello@futurevoices.co.',
    ],
  },
  {
    title: 'Raising a concern',
    body: 'If anything about a session ever concerns you, something said or something seen, email hello@futurevoices.co and it will be treated seriously, confidentially and quickly. If we ever observe signs that a child may be at risk, we will document the concern and report it to the appropriate local child protection authorities, as required by Ontario law.',
  },
]

export default function SafeguardingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      <Navbar />
      <main className="pt-28 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-gold font-semibold hover:underline mb-6 inline-block">← Back to home</Link>
          <div className="flex items-center gap-3 mb-2">
            <ShieldCheck size={28} className="text-gold" />
            <h1 className="font-display text-4xl font-medium text-ink">Safeguarding Policy</h1>
          </div>
          <p className="text-sm text-ink-500 mb-10">Last updated: August 2026</p>

          <div className="bg-white rounded-lg border border-ink/[0.08] p-8 sm:p-10 flex flex-col gap-9 text-[0.95rem] text-ink-500 leading-relaxed">
            {SECTIONS.map(s => (
              <section key={s.title}>
                <h2 className="font-display text-xl font-medium text-ink mb-3">{s.title}</h2>
                {s.body && <p>{s.body}</p>}
                {s.points && (
                  <ul className="flex flex-col gap-2.5">
                    {s.points.map(p => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block mt-2 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
