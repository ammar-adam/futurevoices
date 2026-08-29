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

  /**
   * Opens on whichever comes first: the visitor scrolling past the hero, which
   * is the clearest signal they are actually reading, or a short fallback timer
   * for anyone who stays put.
   */
  useEffect(() => {
    if (alreadyDismissed()) return

    let done = false
    const fire = () => {
      if (done) return
      done = true
      setOpen(true)
    }

    const timer = setTimeout(fire, 6000)
    const onScroll = () => {
      // Floor guards the degenerate case where innerHeight reads 0, which would
      // otherwise collapse the threshold and fire on the first pixel of scroll.
      const threshold = Math.max(320, window.innerHeight * 0.6)
      if (window.scrollY > threshold) fire()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
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
