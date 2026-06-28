import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'pilot' | 'active' | 'cancelled' | 'gold'
}

export function Badge({ className, variant = 'default', children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide',
        {
          'bg-ink/[0.06] text-ink-500': variant === 'default',
          'bg-emerald-100 text-emerald-700': variant === 'success' || variant === 'active',
          'bg-amber-100 text-amber-700': variant === 'warning' || variant === 'pilot',
          'bg-red-100 text-red-700': variant === 'danger' || variant === 'cancelled',
          'bg-gold/12 text-gold-600 ring-1 ring-gold/20': variant === 'gold',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
