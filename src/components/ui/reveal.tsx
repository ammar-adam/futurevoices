'use client'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** delay in ms before the reveal transition starts */
  delay?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

/**
 * Fades + lifts its children into view the first time they enter the viewport.
 * Zero-dependency, IntersectionObserver based. Respects prefers-reduced-motion
 * via the .reveal CSS rules in globals.css.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as as 'div'
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
