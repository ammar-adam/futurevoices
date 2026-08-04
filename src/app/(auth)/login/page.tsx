'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthShell } from '@/components/layout/auth-shell'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).catch(() => null)
    if (res?.ok) {
      router.push('/dashboard')
      router.refresh()
    } else {
      const data = await res?.json().catch(() => null)
      setError(data?.error ?? 'Could not sign in. Please try again.')
      setLoading(false)
    }
  }

  return (
    <AuthShell>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-medium text-ink">Parent portal</h1>
        <p className="text-ink-500 mt-1.5">Sign in to your Future Voices account.</p>
      </div>

      <div className="rounded-2xl bg-white shadow-[var(--shadow-soft)] border border-ink/[0.06] p-7">
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <Input label="Email" type="email" id="email" value={email}
            onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          <Input label="Password" type="password" id="password" value={password}
            onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>
          )}
          <Button type="submit" loading={loading} className="w-full">Sign In</Button>
        </form>

        <p className="text-center text-sm text-ink-500 mt-6">
          New to Future Voices?{' '}
          <Link href="/signup" className="text-gold font-semibold hover:underline">Create an account</Link>
        </p>
      </div>
    </AuthShell>
  )
}
