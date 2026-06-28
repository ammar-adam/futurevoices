import { Mic2, Hand, Sparkles } from 'lucide-react'

const KIDS = [
  { initials: 'AY', from: '#4F9BF7', to: '#7C5CFC', speaking: false },
  { initials: 'ZA', from: '#B68C2D', to: '#E3C98A', speaking: true },
  { initials: 'Mei', from: '#34B27B', to: '#7BD6A8', speaking: false },
  { initials: 'JT', from: '#F7857A', to: '#FBB6AE', speaking: false },
  { initials: 'PK', from: '#7C5CFC', to: '#B49BFF', speaking: false },
  { initials: 'Liv', from: '#4FB6C9', to: '#9BE0EA', speaking: false },
]

/**
 * A crafted, dependency-free hero composition: a mock "live class" card with a
 * Zoom-style grid of young speakers, plus floating accents that communicate the
 * product — every child on camera, one speaking, applause incoming.
 */
export function HeroShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      {/* glow behind */}
      <div className="glow" style={{ background: '#b68c2d', width: 320, height: 320, top: 40, right: -40 }} />
      <div className="glow" style={{ background: '#7C5CFC', width: 260, height: 260, bottom: -20, left: -50, opacity: 0.25 }} />

      {/* Main class card */}
      <div className="relative rounded-[28px] bg-ink p-5 shadow-[0_40px_80px_-30px_rgba(20,23,43,0.65)] ring-1 ring-white/10">
        {/* top bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-gold">
              <Mic2 size={14} />
            </span>
            <span className="text-sm font-semibold text-white font-display">Rising Speakers · Live</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-ring" />
            Live
          </span>
        </div>

        {/* grid of kids */}
        <div className="grid grid-cols-3 gap-2.5">
          {KIDS.map(k => (
            <div
              key={k.initials}
              className={
                'relative aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center ' +
                (k.speaking ? 'ring-2 ring-gold' : 'ring-1 ring-white/10')
              }
              style={{ background: `linear-gradient(135deg, ${k.from}, ${k.to})` }}
            >
              <span className="text-white font-bold text-sm drop-shadow">{k.initials}</span>
              {k.speaking && (
                /* tiny equalizer to mark the active speaker */
                <div className="absolute bottom-1.5 right-1.5 flex items-end gap-0.5 h-3">
                  {[0, 1, 2].map(i => (
                    <span
                      key={i}
                      className="w-[3px] rounded-full bg-white"
                      style={{
                        height: '100%',
                        transformOrigin: 'bottom',
                        animation: `equalize 0.9s ease-in-out ${i * 0.15}s infinite`,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* caption strip */}
        <div className="mt-4 flex items-center justify-between rounded-xl bg-white/[0.06] px-3 py-2.5">
          <p className="text-xs text-white/70">
            <span className="font-semibold text-white">Zain</span> is delivering his speech
          </p>
          <span className="text-[10px] font-semibold text-gold">6 of 6 on camera</span>
        </div>
      </div>

      {/* Floating: raised hand */}
      <div className="absolute -left-6 top-24 animate-float-slow">
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-[var(--shadow-lift)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/12 text-gold">
            <Hand size={16} />
          </span>
          <div>
            <p className="text-xs font-bold text-ink leading-none">Aaliyah</p>
            <p className="text-[10px] text-ink-500 mt-0.5">wants to go next</p>
          </div>
        </div>
      </div>

      {/* Floating: coach praise */}
      <div className="absolute -right-4 bottom-10 animate-float-slower">
        <div className="flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-[var(--shadow-lift)]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <Sparkles size={16} />
          </span>
          <div>
            <p className="text-xs font-bold text-ink leading-none">Great eye contact!</p>
            <p className="text-[10px] text-ink-500 mt-0.5">— Coach Nida</p>
          </div>
        </div>
      </div>
    </div>
  )
}
