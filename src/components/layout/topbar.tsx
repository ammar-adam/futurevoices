'use client'
import { Bell, Search } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { format } from 'date-fns'

interface TopbarProps {
  userName: string
  roleLabel: string
}

export function Topbar({ userName, roleLabel }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-ink/[0.06] bg-cream/80 backdrop-blur-xl px-6 lg:px-8 h-16">
      <div className="hidden sm:flex items-center gap-2 text-sm text-ink-500/70 rounded-full bg-white/70 ring-1 ring-ink/[0.06] px-3.5 py-2 w-72 max-w-full">
        <Search size={15} />
        <span>Search students, classes&hellip;</span>
      </div>
      <p className="sm:hidden text-sm font-medium text-ink-500">{format(new Date(), 'EEE, MMM d')}</p>

      <div className="flex items-center gap-3">
        <span className="hidden sm:block text-sm text-ink-500/70">{format(new Date(), 'EEEE, MMMM d')}</span>
        <button className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/70 ring-1 ring-ink/[0.06] text-ink-500 hover:text-ink transition-colors">
          <Bell size={16} />
          <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-gold" />
        </button>
        <div className="flex items-center gap-2.5 pl-1">
          <Avatar name={userName} size="sm" />
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-ink">{userName}</p>
            <p className="text-[11px] text-ink-500/70">{roleLabel}</p>
          </div>
        </div>
      </div>
    </header>
  )
}
