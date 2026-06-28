'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AuthShell } from '@/components/layout/auth-shell'

// Demo credentials
const DEMO_USERS: Record<string, { password: string; redirect: string }> = {
  'parent@demo.com': { password: 'demo', redirect: '/dashboard' },
  'coach@demo.com':  { password: 'demo', redirect: '/coach/dashboard' },
  'admin@demo.com':  { password: 'demo', redirect: '/admin/dashboard' },
}

const QUICK = [
  { label: 'Parent', email: 'parent@demo.com' },
  { label: 'Coach', email: 'coach@demo.com' },
  { label: 'Admin', email: 'admin@demo.com' },
]

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const user = DEMO_USERS[email.toLowerCase()]
    if (user && password === user.password) {
      router.push(user.redirect)
    } else {
      setError('Invalid credentials. Try parent@demo.com / demo')
      setLoading(false)
    }
  }

  return (
    <AuthShell>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-ink">Welcome back</h1>
        <p className="text-ink-500 mt-1.5">Sign in to your Future Voices account.</p>
      </div>

      <div className="rounded-2xl bg-white shadow-[var(--shadow-soft)] border border-ink/[0.06] p-7">
        {/* Demo quick-fill */}
        <div className="mb-6">
          <p className="text-xs font-semibold text-ink-500/70 mb-2">Demo accounts (password: <code className="text-gold">demo</code>)</p>
          <div className="flex gap-2">
            {QUICK.map(q => (
              <button
                key={q.email}
                type="button"
                onClick={() => { setEmail(q.email); setPassword('demo'); setError('') }}
                className="flex-1 rounded-lg border border-ink/[0.08] bg-cream-200/40 px-2 py-2 text-xs font-semibold text-ink hover:border-gold/50 hover:bg-gold/5 transition-colors"
              >
                {q.label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <Input label="Email" type="email" id="email" value={email}
            onChange={e => setEmail(e.target.value)} placeholder="parent@demo.com" required />
          <Input label="Password" type="password" id="password" value={password}
            onChange={e => setPassword(e.target.value)} placeholder="demo" required />
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">{error}</div>
          )}
          <Button type="submit" variant="secondary" loading={loading} className="w-full">Sign In</Button>
        </form>

        <p className="text-center text-sm text-ink-500 mt-6">
          New here?{' '}
          <Link href="/signup" className="text-gold font-semibold hover:underline">Start free pilot</Link>
        </p>
      </div>
    </AuthShell>
  )
}
