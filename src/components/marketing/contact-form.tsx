'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        kind: 'intro-call',
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        student: data.get('student'),
        program: data.get('program'),
        message: data.get('message'),
      }),
    }).catch(() => null)
    setStatus(res?.ok ? 'done' : 'error')
  }

  if (status === 'done') {
    return (
      <div className="text-center py-12">
        <CheckCircle2 size={44} className="text-white/90 mx-auto mb-5" />
        <h3 className="font-display text-2xl font-medium text-white mb-2">Thank you, we have it.</h3>
        <p className="text-white/60 max-w-md mx-auto leading-relaxed">
          We read every note personally and will reply within a day to set up a time to talk.
        </p>
      </div>
    )
  }

  const field =
    'w-full rounded-lg border border-white/15 bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-white/40 transition-colors'

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 text-left">
      <input required name="name" placeholder="Your name" className={field} />
      <input required name="email" type="email" placeholder="Email" className={field} />
      <input name="phone" type="tel" placeholder="Phone (optional)" className={field} />
      <input name="student" placeholder="Student's name and age" className={field} />
      <select name="program" defaultValue="" className={`${field} sm:col-span-2 [&>option]:text-ink`}>
        <option value="" disabled>What are you interested in?</option>
        <option>Group classes</option>
        <option>Private coaching</option>
        <option>Competitive prep</option>
        <option>Not sure yet</option>
      </select>
      <textarea
        name="message"
        rows={3}
        placeholder="Anything you want us to know: goals, worries, timing."
        className={`${field} sm:col-span-2 resize-none`}
      />
      <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-4 mt-1">
        <Button size="lg" variant="secondary" type="submit" loading={status === 'sending'}>
          Request an intro call <ArrowRight size={17} />
        </Button>
        {status === 'error' && (
          <p className="text-sm text-red-300">
            Something went wrong. Email us at{' '}
            <a href="mailto:hello@futurevoices.co" className="underline">hello@futurevoices.co</a>
          </p>
        )}
      </div>
    </form>
  )
}
