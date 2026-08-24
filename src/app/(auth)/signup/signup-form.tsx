'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthShell } from '@/components/layout/auth-shell'
import { PROGRAMS } from '@/types'

export default function SignupForm() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [childName, setChildName] = useState('')
  const [childAge, setChildAge] = useState('')
  const [selectedProgram, setSelectedProgram] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) { setError('Please confirm parental consent to continue.'); return }
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullName,
        email,
        password,
        child_name: childName,
        child_age: childAge,
        program: PROGRAMS.find(p => p.id === selectedProgram)?.name ?? '',
      }),
    }).catch(() => null)
    if (res?.ok) {
      router.push('/dashboard')
      router.refresh()
    } else {
      const data = await res?.json().catch(() => null)
      setError(data?.error ?? 'Could not create your account. Please try again.')
      setLoading(false)
    }
  }

  return (
    <AuthShell>
      <div className="mb-7">
        <h1 className="font-display text-3xl font-medium text-ink">Create your account</h1>
        <p className="text-ink-500 mt-1.5">One account per family. You can add more children later.</p>
      </div>

      <div className="rounded-2xl bg-white shadow-[var(--shadow-soft)] border border-ink/[0.06] p-7">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Input label="Your full name" id="name" value={fullName} onChange={e => setFullName(e.target.value)} placeholder="Your full name" required />
          <Input label="Email" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          <Input label="Password" type="password" id="pw" value={password} onChange={e => setPassword(e.target.value)} placeholder="At least 8 characters" required />

          <div className="rule-fade my-1" />

          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Student's name" id="cname" value={childName} onChange={e => setChildName(e.target.value)} placeholder="First name is fine" required />
            <Input label="Student's age" id="cage" value={childAge} onChange={e => setChildAge(e.target.value)} placeholder="e.g. 9" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-ink">Program interest</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PROGRAMS.map(p => (
                <button key={p.id} type="button" onClick={() => setSelectedProgram(p.id)}
                  className={`text-left p-3 rounded-xl border text-sm transition-colors ${selectedProgram === p.id ? 'border-gold bg-gold/5' : 'border-ink/10 hover:border-ink/25'}`}>
                  <p className="font-semibold text-ink text-[0.85rem] leading-tight">{p.name}</p>
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-start gap-3 cursor-pointer p-4 bg-cream-200/50 rounded-xl">
            <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5 accent-[#9c7c50]" />
            <span className="text-sm text-ink-500">
              I am the parent or legal guardian of this student and accept the{' '}
              <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>.
            </span>
          </label>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>}
          <Button type="submit" loading={loading} className="w-full">Create Account</Button>
        </form>

        <p className="text-center text-sm text-ink-500 mt-6">
          Already have an account?{' '}
          <Link href="/login" className="text-gold font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </AuthShell>
  )
}
