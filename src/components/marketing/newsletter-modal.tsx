'use client'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { NewsletterForm } from './newsletter-form'

const COOKIE = 'fv_newsletter_dismissed'

function alreadyDismissed(): boolean {
  if (typeof document === 'undefined') return true
  return document.cookie.split('; ').some(c => c.startsWith(`${COOKIE}=`))
}

/** Session cookie, so it clears when the browser session ends. */
function markDismissed() {
  document.cookie = `${COOKIE}=1; path=/; SameSite=Lax`
}

export function NewsletterModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (alreadyDismissed()) return
    const timer = setTimeout(() => setOpen(true), 12000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function close() {
    markDismissed()
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-heading"
    >
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md bg-cream rounded-lg shadow-[var(--shadow-lift)] p-7 sm:p-9">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-ink-500 hover:text-ink transition-colors"
        >
          <X size={20} />
        </button>

        <h2 id="newsletter-heading" className="font-display text-2xl font-medium text-ink mb-3 pr-6">
          Be the first to hear from Future Voices
        </h2>
        <p className="text-[0.95rem] text-ink-500 leading-relaxed mb-6">
          Tips, stories, and news about new sessions, sent to your inbox. Sign up now and we will
          also send you ten speaking challenges to try at home, free.
        </p>

        <NewsletterForm source="popup" />
      </div>
    </div>
  )
}
