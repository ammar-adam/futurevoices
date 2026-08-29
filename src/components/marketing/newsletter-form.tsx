'use client'
import { useState } from 'react'
import { NEWSLETTER_ENDPOINT } from '@/lib/links'

type Tone = 'light' | 'dark'

interface Props {
  source: string
  buttonLabel?: string
  tone?: Tone
  className?: string
}

/**
 * Shared newsletter signup. Posts to the MailerLite endpoint once one is
 * supplied; until then it falls back to /api/newsletter so signups are stored
 * where a person will see them.
 */
export function NewsletterForm({ source, buttonLabel = 'Sign me up', tone = 'light', className = '' }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle')
  const [onDone, setDone] = useState(false)

  const endpointReady = NEWSLETTER_ENDPOINT.startsWith('http')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')

    const res = endpointReady
      ? await fetch(NEWSLETTER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }).catch(() => null)
      : await fetch('/api/newsletter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source }),
        }).catch(() => null)

    if (res?.ok) {
      setDone(true)
    } else {
      setStatus('error')
    }
  }

  const dark = tone === 'dark'

  if (onDone) {
    return (
      <p className={`text-sm leading-relaxed ${dark ? 'text-white/70' : 'text-ink-500'} ${className}`}>
        Welcome. Check your inbox for your ten challenges, and look in your promotions tab if it is
        not there in a few minutes.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2.5">
        <label className="sr-only" htmlFor={`nl-${source}`}>Your email</label>
        <input
          id={`nl-${source}`}
          required
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          className={
            dark
              ? 'flex-1 rounded-lg border border-white/20 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/45 transition-colors'
              : 'flex-1 rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-500/60 focus:outline-none focus:border-ink/40 transition-colors'
          }
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className={
            dark
              ? 'rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white hover:bg-gold-600 transition-colors disabled:opacity-60 whitespace-nowrap'
              : 'rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white hover:bg-ink-700 transition-colors disabled:opacity-60 whitespace-nowrap'
          }
        >
          {status === 'sending' ? 'Sending' : buttonLabel}
        </button>
      </div>
      {status === 'error' && (
        <p className={`text-sm ${dark ? 'text-red-300' : 'text-red-600'}`}>
          Something went wrong. Please try again, or email hello@futurevoices.co.
        </p>
      )}
      <p className={`text-xs ${dark ? 'text-white/40' : 'text-ink-500/70'}`}>
        No spam. Unsubscribe any time.
      </p>
    </form>
  )
}
