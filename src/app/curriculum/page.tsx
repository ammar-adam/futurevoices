import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Mic2 } from 'lucide-react'

const SESSIONS = [
  {
    number: '01',
    title: 'Get Seen, Get Comfortable',
    goal: 'Lower the stakes. Make being on camera and being heard feel normal and fun.',
    activities: [
      'Silly round-robin warm-up — everyone talks on camera, no rules',
      '30-second "show and tell" — bring one object you love and tell us why',
      'Each child picks their final-speech topic (their thread for all 6 weeks)',
    ],
    homework: 'Tell one person at home your topic and one reason you chose it.',
    highlight: false,
  },
  {
    number: '02',
    title: 'Build the Speech',
    goal: 'Give them a structure they can\'t get lost in.',
    activities: [
      '"Best part of my week" in exactly 3 sentences — trains beginning / middle / end',
      'The simple speech shape: Hook → Three Points → Big Finish',
      'Each child drafts their speech skeleton out loud — not writing, saying',
    ],
    homework: 'Finish your three points as bullet notes, not a full script.',
    highlight: false,
  },
  {
    number: '03',
    title: 'Voice & Body on Camera',
    goal: 'The mechanics — projection, pace, pauses, and looking at the lens.',
    activities: [
      'Volume game: whisper → normal → "back-of-the-room" voice',
      'Slow down, pause on purpose, look at the camera not the screen',
      'Each child reads their hook + first point applying one technique',
    ],
    homework: 'Practice your speech once standing up, out loud, to a wall or a pet.',
    highlight: false,
  },
  {
    number: '04',
    title: 'Nerves Are Normal',
    goal: 'Turn nerves from a stop sign into a green light. First full run-through.',
    activities: [
      '"Shake it out" — physical reset, then the calm-breath trick (in for 4, out for 4)',
      'Everyone gets nervous — even pros. The trick is knowing what to do with them',
      'First full run-through of the whole speech, start to finish',
    ],
    homework: 'Run your full speech once at home. Time it — aim for 2–3 minutes.',
    highlight: false,
  },
  {
    number: '05',
    title: 'Polish & Dress Rehearsal',
    goal: 'Refine, rehearse, and make Session 6 feel familiar so it isn\'t scary.',
    activities: [
      'Power-pose + one line of their speech, full energy',
      'Full dress rehearsal — each child performs as if parents were watching',
      'Walk through exactly how Session 6 works so there are zero surprises',
    ],
    homework: 'One final practice run. Then rest — you\'re ready.',
    highlight: false,
  },
  {
    number: '06',
    title: 'The Showcase',
    goal: 'Every child delivers. Every parent watches. Everyone leaves proud.',
    activities: [
      'Nida welcomes parents and sets the tone: this is a celebration',
      'Each child delivers their 2–3 minute speech to the full room — parents on, cameras on, applause after every one',
      'Nida names one specific strength for each child by name · "Future Voices Founding Speaker" recognition',
    ],
    homework: null,
    highlight: true,
  },
]

export default function CurriculumPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: '#FBF8F1' }}>
      <Navbar />

      <main className="pt-28 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Link href="/" className="text-sm text-[#B68C2D] font-semibold hover:underline mb-4 inline-block">← Back to home</Link>
            <h1 className="font-display text-5xl font-semibold text-[#14172B] mb-4">The 6-Session Curriculum</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every session is built backwards from one moment: the final showcase, where your child
              delivers their speech live to you. Everything before it is preparation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#B68C2D]" />60 minutes per session</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#B68C2D]" />Max 8 students</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#B68C2D]" />Every child speaks every week</span>
            </div>
          </div>

          {/* Non-negotiables */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
            <p className="text-xs font-semibold text-[#B68C2D] uppercase tracking-wider mb-3">Two non-negotiables every session</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B68C2D] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#14172B] text-sm">Every child speaks</p>
                  <p className="text-sm text-gray-600">With a cap of 8 and 60 minutes, there's time for all of them. No one hides.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B68C2D] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#14172B] text-sm">End on a win</p>
                  <p className="text-sm text-gray-600">Each session closes with something they did well, named out loud. They log off braver than they logged on.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sessions */}
          <div className="flex flex-col gap-6">
            {SESSIONS.map(s => (
              <div
                key={s.number}
                className={`rounded-2xl border overflow-hidden ${s.highlight ? 'border-[#B68C2D] shadow-lg' : 'border-gray-100 bg-white shadow-sm'}`}
                style={s.highlight ? { background: '#14172B' } : {}}
              >
                <div className={`px-6 py-5 border-b ${s.highlight ? 'border-white/10' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-4xl font-bold ${s.highlight ? 'text-[#B68C2D]/50' : 'text-gray-200'}`}>{s.number}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className={`text-xl font-bold ${s.highlight ? 'text-white' : 'text-[#14172B]'}`}>{s.title}</h2>
                        {s.highlight && <Mic2 size={18} className="text-[#B68C2D]" />}
                      </div>
                      <p className={`text-sm mt-0.5 ${s.highlight ? 'text-white/60' : 'text-gray-500'}`}>{s.goal}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <ul className="flex flex-col gap-2.5 mb-4">
                    {s.activities.map(a => (
                      <li key={a} className={`flex items-start gap-3 text-sm ${s.highlight ? 'text-white/70' : 'text-gray-600'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B68C2D] inline-block mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  {s.homework && (
                    <div className={`text-xs rounded-lg px-3 py-2 mt-3 ${s.highlight ? 'bg-white/5 text-white/50' : 'bg-gray-50 text-gray-500'}`}>
                      <span className="font-semibold">Homework:</span> {s.homework}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-[#14172B] mb-4">Ready to start?</h2>
            <p className="text-gray-600 mb-8">Free 2-week pilot. No credit card. No commitment.</p>
            <Button size="lg" asChild>
              <Link href="/signup">Start Free Pilot →</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
