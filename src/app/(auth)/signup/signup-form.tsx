'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthShell } from '@/components/layout/auth-shell'
import { PROGRAMS } from '@/types'

type Step = 'account' | 'child' | 'done'

export default function SignupForm() {
  const router = useRouter()
  const params = useSearchParams()
  const trackSlug = params.get('track')
  const preselected = PROGRAMS.find(p => p.slug === trackSlug)

  const [step, setStep] = useState<Step>('account')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [childName, setChildName] = useState('')
  const [childDob, setChildDob] = useState('')
  const [selectedProgram, setSelectedProgram] = useState(preselected?.id ?? '')
  const [coppa, setCoppa] = useState(false)
  const [privacy, setPrivacy] = useState(false)
  const [error, setError] = useState('')

  function handleAccount(e: React.FormEvent) {
    e.preventDefault()
    setStep('child')
  }

  function handleChild(e: React.FormEvent) {
    e.preventDefault()
    if (!coppa || !privacy) { setError('Please accept both consent items.'); return }
    setStep('done')
    setTimeout(() => router.push('/dashboard'), 2000)
  }

  if (step === 'done') {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-cream">
        <div className="text-center">
          <div className="relative mx-auto mb-5 w-fit">
            <div className="absolute inset-0 rounded-full bg-emerald-400/30 blur-xl" />
            <CheckCircle2 size={72} className="relative text-emerald-500 mx-auto" />
          </div>
          <h2 className="font-display text-3xl font-semibold text-ink mb-2">You&apos;re in!</h2>
          <p className="text-ink-500">Taking you to your dashboard&hellip;</p>
        </div>
      </div>
    )
  }

  return (
    <AuthShell>
      <div className="mb-7">
        <div className="flex gap-2 mb-5">
          {(['account', 'child'] as const).map((s, i) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${step === s || (step === 'child' && i === 0) ? 'bg-gold' : 'bg-ink/10'}`}
            />
          ))}
        </div>
        <h1 className="font-display text-3xl font-semibold text-ink">
          {step === 'account' ? 'Create your account' : 'Add your child'}
        </h1>
        <p className="text-ink-500 mt-1.5">
          {step === 'account' ? 'Free 2-week pilot · No credit card needed' : "We'll find the right cohort for them."}
        </p>
      </div>

      <div className="rounded-2xl bg-white shadow-[var(--shadow-soft)] border border-ink/[0.06] p-7">
        {step === 'account' && (
          <form onSubmit={handleAccount} className="flex flex-col gap-5">
            <Input label="Your full name" id="name" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Farhan Ahmed" required />
            <Input label="Email" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
            <Input label="Password" type="password" id="pw" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
            <Button type="submit" variant="secondary" className="w-full">Continue →</Button>
          </form>
        )}

        {step === 'child' && (
          <form onSubmit={handleChild} className="flex flex-col gap-5">
            <Input label="Child's full name" id="cname" value={childName} onChange={e => setChildName(e.target.value)} placeholder="Aisha Ahmed" required />
            <Input label="Date of birth" type="date" id="dob" value={childDob} onChange={e => setChildDob(e.target.value)} required />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-ink">Program interest</label>
              <div className="grid grid-cols-2 gap-2">
                {PROGRAMS.map(p => (
                  <button key={p.id} type="button" onClick={() => setSelectedProgram(p.id)}
                    className={`text-left p-3 rounded-xl border text-sm transition-colors ${selectedProgram === p.id ? 'border-gold bg-gold/5' : 'border-ink/10 hover:border-ink/25'}`}>
                    <p className="font-semibold text-ink">{p.name}</p>
                    <p className="text-ink-500/70 text-xs">Ages {p.age_min}–{p.age_max}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 p-4 bg-cream-200/50 rounded-xl">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={coppa} onChange={e => setCoppa(e.target.checked)} className="mt-0.5 accent-[#B68C2D]" />
                <span className="text-sm text-ink-500">I confirm I am the parent/legal guardian and consent to data collection under COPPA / PIPEDA.</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" checked={privacy} onChange={e => setPrivacy(e.target.checked)} className="mt-0.5 accent-[#B68C2D]" />
                <span className="text-sm text-ink-500">I accept the <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.</span>
              </label>
            </div>

            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>}
            <Button type="submit" variant="secondary" className="w-full">Join Free Pilot →</Button>
          </form>
        )}

        <p className="text-center text-sm text-ink-500 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-gold font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </AuthShell>
  )
}
