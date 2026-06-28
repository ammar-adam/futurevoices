'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Mic2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '/#programs', label: 'Programs' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/#schedule', label: 'Schedule' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/85 backdrop-blur-xl border-b border-ink/[0.07] shadow-[0_4px_24px_-12px_rgba(20,23,43,0.25)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-gold shadow-[0_6px_16px_-6px_rgba(20,23,43,0.6)] transition-transform group-hover:-translate-y-0.5">
            <Mic2 size={18} />
          </span>
          <span className="text-lg font-bold text-ink tracking-tight font-display">Future Voices</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-500 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/login" className="text-sm font-medium text-ink-500 hover:text-ink transition-colors">
            Sign In
          </Link>
          <Button size="sm" variant="secondary" asChild>
            <Link href="/signup">Start Free Pilot</Link>
          </Button>
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-ink/[0.07] px-5 py-5 flex flex-col gap-4">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-ink">
              {l.label}
            </Link>
          ))}
          <Link href="/login" onClick={() => setOpen(false)} className="text-sm font-medium text-ink">Sign In</Link>
          <Button size="sm" variant="secondary" asChild>
            <Link href="/signup">Start Free Pilot</Link>
          </Button>
        </div>
      )}
    </nav>
  )
}
