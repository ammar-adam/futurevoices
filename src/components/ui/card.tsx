import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** adds a lift-on-hover interaction */
  interactive?: boolean
}

export function Card({ className, interactive, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-ink/[0.06] shadow-[var(--shadow-soft)]',
        interactive && 'transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 py-5 border-b border-ink/[0.06]', className)} {...props}>{children}</div>
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 py-5', className)} {...props}>{children}</div>
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('px-6 py-5 border-t border-ink/[0.06]', className)} {...props}>{children}</div>
}
