'use client'
import { cn } from '@/lib/utils'
import { type ButtonHTMLAttributes, forwardRef, cloneElement, isValidElement, type ReactElement } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, asChild, ...props }, ref) => {
    const classes = cn(
      'group/btn relative inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold/60',
      {
        'bg-ink text-white shadow-[0_8px_24px_-8px_rgba(20,23,43,0.55)] hover:bg-ink-700 hover:shadow-[0_12px_30px_-8px_rgba(20,23,43,0.6)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]':
          variant === 'primary',
        'bg-gold text-white shadow-[0_8px_24px_-8px_rgba(182,140,45,0.65)] hover:bg-gold-600 hover:shadow-[0_12px_30px_-8px_rgba(182,140,45,0.7)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99]':
          variant === 'secondary',
        'bg-transparent hover:bg-ink/5 text-ink': variant === 'ghost',
        'border border-ink/20 bg-white/40 text-ink backdrop-blur hover:border-ink hover:bg-white': variant === 'outline',
        'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
      },
      {
        'text-sm px-4 py-2 gap-1.5': size === 'sm',
        'text-[0.95rem] px-6 py-3 gap-2': size === 'md',
        'text-base px-8 py-4 gap-2.5': size === 'lg',
      },
      className
    )

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement<{ className?: string }>, { className: classes })
    }

    return (
      <button ref={ref} disabled={disabled || loading} className={classes} {...props}>
        {loading && (
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
export { Button }
