import Link from 'next/link'
import Image from 'next/image'
import { NIDA_BOOKING_URL, CONTACT_EMAIL, LOCATION } from '@/lib/links'
import { NewsletterForm } from '@/components/marketing/newsletter-form'

const COLUMNS = [
  {
    title: 'Programs',
    links: [
      { href: '/#programs', label: 'Group classes' },
      { href: '/#private', label: 'Private coaching' },
      { href: '/prep', label: 'Competitive prep' },
      { href: '/curriculum', label: 'Curriculum' },
    ],
  },
  {
    title: 'Get started',
    links: [
      { href: NIDA_BOOKING_URL, label: 'Book an intro call' },
      { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
    ],
  },
  {
    title: 'More',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/challenges', label: 'Ten speaking challenges' },
      { href: '/safeguarding', label: 'Safeguarding' },
      { href: '/privacy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8 sm:pt-16 sm:pb-10">
        <div className="grid gap-10 sm:grid-cols-2 md:gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
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

        <div className="mt-10 sm:mt-14 pt-8 sm:pt-10 border-t border-white/10 grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-16 items-start">
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Tips, stories, and news about new sessions. Sign up and get ten speaking challenges to
            try at home.
          </p>
          <NewsletterForm source="footer" tone="dark" />
        </div>

        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Future Voices</p>
        </div>
      </div>
    </footer>
  )
}
