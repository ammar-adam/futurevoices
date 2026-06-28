import Link from 'next/link'
import { Mic2 } from 'lucide-react'

const COLUMNS = [
  {
    title: 'Program',
    links: [
      { href: '/#programs', label: 'Programs' },
      { href: '/curriculum', label: 'Curriculum' },
      { href: '/#how-it-works', label: 'How It Works' },
      { href: '/#schedule', label: 'Schedule' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { href: '/signup', label: 'Start Free Pilot' },
      { href: '/login', label: 'Parent Sign In' },
      { href: '/#programs', label: 'Pricing' },
    ],
  },
  {
    title: 'Trust & Safety',
    links: [
      { href: '/safeguarding', label: 'Safeguarding' },
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative bg-ink text-white overflow-hidden">
      <div className="glow" style={{ background: '#b68c2d', width: 380, height: 380, bottom: -180, left: -120, opacity: 0.18 }} />
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-gold">
                <Mic2 size={18} />
              </span>
              <span className="text-lg font-bold tracking-tight font-display">Future Voices</span>
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Live, online public speaking for ages 6–18. We turn quiet kids into confident speakers — in six weeks.
            </p>
            <p className="mt-5 text-sm text-white/40">Toronto, Canada · Live on Zoom worldwide</p>
          </div>

          {COLUMNS.map(col => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold/80 mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Future Voices. All rights reserved.</p>
          <p className="text-xs text-white/40">Made with care for young speakers everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
