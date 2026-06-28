import Link from 'next/link'
import { Mic2, CheckCircle2, Star } from 'lucide-react'

const POINTS = [
  'Free 2-week pilot — no credit card',
  'Small cohorts, max 8 students',
  'Every child speaks, every session',
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
        <div className="glow" style={{ background: '#b68c2d', width: 420, height: 420, top: -120, left: -100, opacity: 0.3 }} />
        <div className="glow" style={{ background: '#7C5CFC', width: 300, height: 300, bottom: -80, right: -60, opacity: 0.2 }} />

        <Link href="/" className="relative flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-gold"><Mic2 size={18} /></span>
          <span className="text-lg font-bold tracking-tight font-display">Future Voices</span>
        </Link>

        <div className="relative max-w-md">
          <h2 className="font-display text-4xl font-semibold leading-tight mb-6">
            Your child has something to say.
            <span className="block italic text-gradient-gold">Let&rsquo;s help them say it.</span>
          </h2>
          <ul className="flex flex-col gap-3 mb-10">
            {POINTS.map(p => (
              <li key={p} className="flex items-center gap-3 text-white/75">
                <CheckCircle2 size={18} className="text-gold shrink-0" /> {p}
              </li>
            ))}
          </ul>
          <div className="rounded-2xl bg-white/[0.06] ring-1 ring-white/10 p-5">
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#B68C2D" className="text-gold" />)}
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              &ldquo;My 8-year-old used to hide behind me at parties. After one term she was presenting to her whole class.&rdquo;
            </p>
            <p className="text-xs text-white/50 mt-2">— Sarah M., Toronto</p>
          </div>
        </div>

        <p className="relative text-xs text-white/40">© {new Date().getFullYear()} Future Voices · Live on Zoom worldwide</p>
      </div>

      {/* Form side */}
      <div className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
