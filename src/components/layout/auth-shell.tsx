import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const POINTS = [
  'Six levels, eight weeks each',
  'Live classes capped at eight students',
  'Every student speaks, every session',
]

/**
 * Split-screen auth layout: an ink brand panel on the left (hidden on small
 * screens) and the form (children) on the right over a cream surface.
 */
export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-cream">
      {/* Brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-ink text-white p-12">
        <Link href="/" className="relative inline-block">
          <Image src="/brand/fv-wordmark-white.png" alt="Future Voices" width={150} height={55} />
        </Link>

        <div className="relative max-w-md">
          <h2 className="font-display text-4xl font-medium leading-tight mb-6">
            A school for young communicators.
          </h2>
          <ul className="flex flex-col gap-3">
            {POINTS.map(p => (
              <li key={p} className="flex items-center gap-3 text-white/75">
                <CheckCircle2 size={18} className="text-gold-300 shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>

        <p className="relative text-xs text-white/40">
          © {new Date().getFullYear()} Future Voices · Toronto built, taught live worldwide
        </p>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
