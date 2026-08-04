import Link from 'next/link'
import Image from 'next/image'

const COLUMNS = [
  {
    title: 'Program',
    links: [
      { href: '/#programs', label: 'Group Coaching' },
      { href: '/#programs', label: 'Private 1:1' },
      { href: '/pro', label: 'Future Voices Pro' },
      { href: '/curriculum', label: 'Curriculum' },
    ],
  },
  {
    title: 'Get Started',
    links: [
      { href: '/#contact', label: 'Book an Intro Call' },
      { href: 'mailto:hello@futurevoices.co', label: 'hello@futurevoices.co' },
      { href: '/login', label: 'Parent Portal' },
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
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image src="/brand/fv-wordmark-white.png" alt="Future Voices" width={190} height={70} />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              Live, online public speaking coaching for kids, teens, and adults.
            </p>
            <p className="mt-5 text-sm text-white/40">Toronto, Canada · Live on Zoom worldwide</p>
          </div>

          {COLUMNS.map(col => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/45 mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(l => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-white/65 hover:text-white transition-colors">
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
          <p className="text-xs text-white/40">Toronto-built, taught live worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
