import Link from 'next/link'
import Image from 'next/image'
import { BOOKING_URL, CONTACT_EMAIL, LOCATION } from '@/lib/links'

const COLUMNS = [
  {
    title: 'Programs',
    links: [
      { href: '/#programs', label: 'Group classes' },
      { href: '/#programs', label: 'Private coaching' },
      { href: '/prep', label: 'Competitive prep' },
      { href: '/curriculum', label: 'Curriculum' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { href: BOOKING_URL, label: 'Book an intro call' },
      { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
    ],
  },
  {
    title: 'Trust and safety',
    links: [
      { href: '/safeguarding', label: 'Safeguarding' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
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
              A small school for young speakers, based in {LOCATION}.
            </p>
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
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Future Voices</p>
        </div>
      </div>
    </footer>
  )
}
