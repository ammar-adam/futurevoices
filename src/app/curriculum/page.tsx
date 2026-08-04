import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Mic2, Trophy, FileText, GraduationCap } from 'lucide-react'

const PILOT_WEEKS = [
  {
    number: 'Week 1',
    title: 'Finding Your Voice',
    goal: 'Get comfortable being heard. Work through first-session nerves together.',
    activities: [
      'Introductions on camera — everyone speaks in the first 10 minutes, no exceptions',
      'The nervousness exercise: name what you feel, then do it anyway',
      'Each student picks their final-presentation topic — their through-line for all 4 weeks',
    ],
    homework: 'Tell someone at home your topic and one reason you chose it.',
    highlight: false,
  },
  {
    number: 'Week 2',
    title: 'Crafting Your Message',
    goal: 'Turn a raw idea into a speech that has a shape and a point.',
    activities: [
      'The three-part structure: Hook → Three Points → Finish strong',
      '"Best thing that happened this week" in exactly 3 sentences — trains beginning, middle, end',
      'Each student builds their speech skeleton out loud — speaking it, not writing it',
    ],
    homework: 'Write down your three points as bullet notes — not a full script, just the bones.',
    highlight: false,
  },
  {
    number: 'Week 3',
    title: 'Speaking with Power',
    goal: 'The mechanics: voice, body, pace, and how to use a camera.',
    activities: [
      'Volume game: whisper → conversational → "back of the room" voice, then back down',
      'Slow down, pause on purpose, look at the lens — not the screen',
      'Each student delivers their hook and first point using one technique they just practised',
    ],
    homework: 'Run your full speech once standing up, out loud. Time it — aim for 2–3 minutes.',
    highlight: false,
  },
  {
    number: 'Week 4',
    title: 'Final Presentation',
    goal: 'Deliver. Get feedback. Leave with proof you can do this.',
    activities: [
      'Full presentations: each student delivers their complete speech live to the group',
      'Applause after every single one — no exceptions',
      'Nida names one specific strength per student, out loud, in front of the group',
    ],
    homework: null,
    highlight: true,
  },
]

const PRO_MODULES = [
  {
    icon: Trophy,
    title: 'DECA / Competitive Case Prep',
    body: '1:1 coaching on reading a case fast, building a winning strategy, and presenting it with the command judges are actually looking for. Built around your specific event and competition calendar.',
  },
  {
    icon: GraduationCap,
    title: 'Model UN Prep',
    body: 'Position papers, parliamentary procedure, negotiation, and delivery — built around your specific conference and committee. We cover both the substance and how to stand out in the room.',
  },
  {
    icon: FileText,
    title: 'University Essay & Interview Prep',
    body: 'One-on-one work on supplemental essays and interview prep. The focus is finding an authentic voice, not a polished-sounding generic one. Your story, told in a way that lands.',
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
            <h1 className="font-display text-5xl font-semibold text-[#14172B] mb-4">The 4-Week Pilot Curriculum</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Every week is built backwards from one moment: Week 4, when every student stands up
              and delivers their speech live. Everything before it is preparation.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#B68C2D]" />60 minutes per session</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#B68C2D]" />Max 8 students (group) or 1:1</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#B68C2D]" />Everyone speaks, every week</span>
            </div>
          </div>

          {/* Non-negotiables */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-10">
            <p className="text-xs font-semibold text-[#B68C2D] uppercase tracking-wider mb-3">Two non-negotiables, every single session</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B68C2D] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#14172B] text-sm">Everyone speaks</p>
                  <p className="text-sm text-gray-600">With a cap of 8 and 60 minutes, there is time for all of them. No one hides.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-[#B68C2D] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-[#14172B] text-sm">Every session ends on a win</p>
                  <p className="text-sm text-gray-600">A specific strength named out loud for every student. They log off with more confidence than they logged on with.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weeks */}
          <div className="flex flex-col gap-6">
            {PILOT_WEEKS.map(w => (
              <div
                key={w.number}
                className={`rounded-2xl border overflow-hidden ${w.highlight ? 'border-[#B68C2D] shadow-lg' : 'border-gray-100 bg-white shadow-sm'}`}
                style={w.highlight ? { background: '#14172B' } : {}}
              >
                <div className={`px-6 py-5 border-b ${w.highlight ? 'border-white/10' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold uppercase tracking-widest ${w.highlight ? 'text-[#B68C2D]' : 'text-[#B68C2D]/60'}`}>{w.number}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className={`text-xl font-bold ${w.highlight ? 'text-white' : 'text-[#14172B]'}`}>{w.title}</h2>
                        {w.highlight && <Mic2 size={18} className="text-[#B68C2D]" />}
                      </div>
                      <p className={`text-sm mt-0.5 ${w.highlight ? 'text-white/60' : 'text-gray-500'}`}>{w.goal}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-5">
                  <ul className="flex flex-col gap-2.5 mb-4">
                    {w.activities.map(a => (
                      <li key={a} className={`flex items-start gap-3 text-sm ${w.highlight ? 'text-white/70' : 'text-gray-600'}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B68C2D] inline-block mt-1.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  {w.homework && (
                    <div className={`text-xs rounded-lg px-3 py-2 mt-3 ${w.highlight ? 'bg-white/5 text-white/50' : 'bg-gray-50 text-gray-500'}`}>
                      <span className="font-semibold">Between sessions:</span> {w.homework}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-14 mb-20">
            <h2 className="text-2xl font-bold text-[#14172B] mb-3">Ready to start?</h2>
            <p className="text-gray-500 mb-7 text-sm">Free 4-week pilot. See the results before you commit.</p>
            <Button size="lg" asChild>
              <Link href="/#contact">Book an Intro Call →</Link>
            </Button>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 pt-16">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4" style={{ background: '#0d3d32', color: '#6ee7b7' }}>
                <Trophy size={12} />
                For students with a specific goal
              </span>
              <h2 className="font-display text-3xl font-semibold text-[#14172B] mb-3">Future Voices Pro</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                DECA, Model UN, and university application coaching. 1:1 only, built around your deadline.
                Different format, different intake — <Link href="/pro" className="text-[#1F6B5C] font-semibold hover:underline">learn more</Link> or{' '}
                <Link href="/pro/apply" className="text-[#1F6B5C] font-semibold hover:underline">apply directly</Link>.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {PRO_MODULES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl mb-4" style={{ background: '#e8f5f0', color: '#1F6B5C' }}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[#14172B] mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
