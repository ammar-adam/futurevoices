import { cn } from '@/lib/utils'

const GRADIENTS = [
  ['#4F9BF7', '#7C5CFC'],
  ['#34B27B', '#7BD6A8'],
  ['#B68C2D', '#E3C98A'],
  ['#F7857A', '#FBB6AE'],
  ['#7C5CFC', '#B49BFF'],
  ['#4FB6C9', '#9BE0EA'],
]

function gradientFor(seed: string) {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0
  return GRADIENTS[h % GRADIENTS.length]
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

const SIZES = { sm: 'h-8 w-8 text-xs', md: 'h-10 w-10 text-sm', lg: 'h-12 w-12 text-base' }

interface AvatarProps {
  name: string
  size?: keyof typeof SIZES
  className?: string
}

export function Avatar({ name, size = 'md', className }: AvatarProps) {
  const [from, to] = gradientFor(name)
  return (
    <span
      className={cn('inline-flex items-center justify-center rounded-full font-bold text-white shrink-0', SIZES[size], className)}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {initials(name)}
    </span>
  )
}
