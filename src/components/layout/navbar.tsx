'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NIDA_BOOKING_URL } from '@/lib/links'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '/#path', label: 'The Path' },
  { href: '/curriculum', label: 'Curriculum' },
  { href: '/prep', label: 'Competitive Prep' },
  { href: '/#faq', label: 'FAQ' },
]

export function Navbar({ overHero = false }: { overHero?: boolean }) {
  const [open, setOpen] = useState(false)
  const [scrolledState, setScrolled] = useState(false)
  // On pages without a dark hero, always render the "scrolled" (dark-on-light) style
  const scrolled = overHero ? scrolledState : true

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
          ? 'bg-cream/90 backdrop-blur-xl border-b border-ink/10'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[4.5rem]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/fv-monogram-black.png"
            alt="Future Voices"
            width={34}
            height={34}
            priority
            className={cn('transition-all duration-300', !scrolled && !open && 'invert')}
          />
          <span className={cn(
            'font-display text-[1.05rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-300',
            scrolled || open ? 'text-ink' : 'text-white'
          )}>
            Future Voices
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm font-medium transition-colors',
                scrolled ? 'text-ink-500 hover:text-ink' : 'text-white/75 hover:text-white'
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button size="sm" variant={scrolled ? 'primary' : 'secondary'} asChild>
            <a href={NIDA_BOOKING_URL}>Book an Intro Call</a>
          </Button>
        </div>

        <button
          className={cn('md:hidden transition-colors', scrolled || open ? 'text-ink' : 'text-white')}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-ink/10 px-5 py-5 flex flex-col gap-4">
          {LINKS.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-ink">
              {l.label}
            </Link>
          ))}
          <Button size="sm" asChild>
            <a href={NIDA_BOOKING_URL} onClick={() => setOpen(false)}>Book an Intro Call</a>
          </Button>
        </div>
      )}
    </nav>
  )
}
