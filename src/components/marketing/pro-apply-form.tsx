'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const TRACKS = [
  { value: 'deca', label: 'DECA / Case Prep' },
  { value: 'mun', label: 'Model UN Prep' },
  { value: 'admissions', label: 'University Admissions Coaching' },
  { value: 'unsure', label: 'Not sure yet, I would like guidance' },
]

const EXPERIENCE_LEVELS = [
  { value: 'beginner', label: 'Beginner', sub: 'Little to no prior experience' },
  { value: 'some', label: 'Some experience', sub: 'I have done this before but want to improve' },
  { value: 'competitive', label: 'Competitive already', sub: 'I compete / apply actively and want an edge' },
]

const HEAR_ABOUT = [
  'Google / search',
  'Social media',
  'Referred by a friend or family member',
  'School or teacher',
  'Other',
]

export function ProApplyForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isMinor, setIsMinor] = useState<boolean | null>(null)
  const [track, setTrack] = useState('')
  const [experience, setExperience] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const trackLabel = TRACKS.find(t => t.value === track)?.label ?? ''
    const expLabel = EXPERIENCE_LEVELS.find(l => l.value === experience)?.label ?? ''
    const message = [
      `Grade / age: ${data.get('grade_age')}`,
      isMinor ? `Parent / guardian: ${data.get('parent_name')} (consent given)` : 'Student is 18 or older',
      `Target date: ${data.get('target_date')}`,
      `Experience level: ${expLabel}`,
      data.get('hear_about') ? `Heard about us via: ${data.get('hear_about')}` : null,
    ].filter(Boolean).join('\n')
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        kind: 'pro',
        name: isMinor ? data.get('parent_name') : data.get('student_name'),
        email: data.get('email'),
        phone: data.get('phone'),
        student: data.get('student_name'),
        program: `Competitive Prep: ${trackLabel}`,
        message,
      }),
    }).catch(() => null)
    if (res?.ok) setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="flex h-16 w-16 items-center justify-center rounded-full mx-auto mb-6" style={{ background: 'var(--color-cream-200)' }}>
          <CheckCircle2 size={32} style={{ color: 'var(--gold)' }} />
        </div>
        <h2 className="font-display text-3xl font-semibold text-[var(--ink)] mb-3">Application received</h2>
        <p className="text-ink-500 max-w-md mx-auto leading-relaxed">
          We will review what you sent and reply within one to two business days to set up the first session.
          If anything is urgent, email{' '}
          <a href="mailto:hello@futurevoices.co" className="font-medium text-[var(--gold)] underline">hello@futurevoices.co</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">

      {/* Student info */}
      <fieldset className="flex flex-col gap-5">
        <legend className="text-sm font-semibold text-[var(--ink)] mb-1">About the student</legend>

        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Student name <span className="text-red-400">*</span></span>
            <input
              required
              name="student_name"
              type="text"
              placeholder="First and last name"
              className="rounded-lg border border-ink/[0.12] bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-ink-500/70 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Grade / age <span className="text-red-400">*</span></span>
            <input
              required
              name="grade_age"
              type="text"
              placeholder="e.g. Grade 11 · 16 years old"
              className="rounded-lg border border-ink/[0.12] bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-ink-500/70 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
            />
          </label>
        </div>

        {/* Parent / guardian: shown if minor */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Is the student under 18?</span>
          <div className="flex gap-3">
            {[{ v: true, l: 'Yes' }, { v: false, l: 'No' }].map(({ v, l }) => (
              <button
                key={l}
                type="button"
                onClick={() => setIsMinor(v)}
                className={`flex-1 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
                  isMinor === v
                    ? 'border-[var(--gold)] bg-[var(--color-cream-200)] text-[var(--gold)]'
                    : 'border-ink/[0.12] bg-white text-ink-500 hover:border-ink/25'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {isMinor === true && (
          <div className="rounded-lg border border-ink/[0.12] bg-white p-5 flex flex-col gap-4">
            <p className="text-xs font-semibold text-ink-500/70 uppercase tracking-wider">Parent / guardian info</p>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-ink-500">Parent / guardian name <span className="text-red-400">*</span></span>
              <input
                required
                name="parent_name"
                type="text"
                placeholder="First and last name"
                className="rounded-lg border border-ink/[0.12] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-ink-500/70 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
              />
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input required type="checkbox" className="mt-0.5 h-4 w-4 rounded accent-[var(--gold)]" />
              <span className="text-sm text-ink-500 leading-relaxed">
                I am the parent or legal guardian of the student named above and consent to their participation in Future Voices Competitive Prep coaching sessions.
              </span>
            </label>
          </div>
        )}
      </fieldset>

      {/* Contact */}
      <fieldset className="flex flex-col gap-5">
        <legend className="text-sm font-semibold text-[var(--ink)] mb-1">Contact</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Email <span className="text-red-400">*</span></span>
            <input
              required
              name="email"
              type="email"
              placeholder="you@email.com"
              className="rounded-lg border border-ink/[0.12] bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-ink-500/70 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Phone <span className="text-ink-500/70 font-normal">(optional)</span></span>
            <input
              name="phone"
              type="tel"
              placeholder="+1 (416) 555-0100"
              className="rounded-lg border border-ink/[0.12] bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-ink-500/70 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
            />
          </label>
        </div>
      </fieldset>

      {/* Track */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-semibold text-[var(--ink)] mb-1">Which track? <span className="text-red-400">*</span></legend>
        <div className="grid sm:grid-cols-2 gap-3">
          {TRACKS.map(t => (
            <button
              key={t.value}
              type="button"
              onClick={() => setTrack(t.value)}
              className={`rounded-lg border px-4 py-3 text-sm font-medium text-left transition-all ${
                track === t.value
                  ? 'border-[var(--gold)] bg-[var(--color-cream-200)] text-[var(--gold)]'
                  : 'border-ink/[0.12] bg-white text-ink-500 hover:border-ink/25'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="track" value={track} required />
      </fieldset>

      {/* Target date */}
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Target date <span className="text-red-400">*</span></span>
        <span className="text-xs text-ink-500/70 -mt-0.5">Competition date, application deadline, or "no fixed date"</span>
        <input
          required
          name="target_date"
          type="text"
          placeholder="e.g. DECA provincials, March 14, 2027"
          className="rounded-lg border border-ink/[0.12] bg-white px-4 py-3 text-sm text-[var(--ink)] placeholder:text-ink-500/70 focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
        />
      </label>

      {/* Experience level */}
      <fieldset className="flex flex-col gap-3">
        <legend className="text-sm font-semibold text-[var(--ink)] mb-1">Current experience level <span className="text-red-400">*</span></legend>
        <div className="flex flex-col gap-2.5">
          {EXPERIENCE_LEVELS.map(l => (
            <button
              key={l.value}
              type="button"
              onClick={() => setExperience(l.value)}
              className={`rounded-lg border px-4 py-3 text-left transition-all ${
                experience === l.value
                  ? 'border-[var(--gold)] bg-[var(--color-cream-200)]'
                  : 'border-ink/[0.12] bg-white hover:border-ink/25'
              }`}
            >
              <p className={`text-sm font-medium ${experience === l.value ? 'text-[var(--gold)]' : 'text-[var(--ink)]'}`}>{l.label}</p>
              <p className="text-xs text-ink-500/70 mt-0.5">{l.sub}</p>
            </button>
          ))}
        </div>
        <input type="hidden" name="experience" value={experience} required />
      </fieldset>

      {/* How did you hear */}
      <label className="flex flex-col gap-1.5">
        <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider">How did you hear about us?</span>
        <select
          name="hear_about"
          className="rounded-lg border border-ink/[0.12] bg-white px-4 py-3 text-sm text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
        >
          <option value="">Select one</option>
          {HEAR_ABOUT.map(h => <option key={h} value={h}>{h}</option>)}
        </select>
      </label>

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto sm:self-start"
        style={{ background: 'var(--gold)', color: 'white' }}
        disabled={!track || !experience || isMinor === null}
      >
        Submit Application <ArrowRight size={18} />
      </Button>
    </form>
  )
}
