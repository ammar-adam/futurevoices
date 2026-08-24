'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard, Users, Calendar, CreditCard,
  BookOpen, ClipboardList, UserCog, School, LogOut, Mic2, ArrowUpRight
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem { label: string; href: string; icon: React.ElementType }

const parentNav: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'My Children', href: '/children', icon: Users },
  { label: 'Schedule', href: '/schedule', icon: Calendar },
  { label: 'Billing', href: '/billing', icon: CreditCard },
]

const coachNav: NavItem[] = [
  { label: 'Dashboard', href: '/coach/dashboard', icon: LayoutDashboard },
  { label: 'My Classes', href: '/coach/classes', icon: BookOpen },
  { label: 'Coach Notes', href: '/coach/notes', icon: ClipboardList },
]

const adminNav: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Families', href: '/admin/families', icon: Users },
  { label: 'Cohorts', href: '/admin/cohorts', icon: School },
  { label: 'Coaches', href: '/admin/coaches', icon: UserCog },
]

const ROLE_LABEL = { parent: 'Parent Account', coach: 'Coach Account', admin: 'Admin Account' }

interface SidebarProps { role: 'parent' | 'coach' | 'admin'; userName: string }

export function Sidebar({ role, userName }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const nav = role === 'parent' ? parentNav : role === 'coach' ? coachNav : adminNav

  return (
    <aside className="hidden md:flex w-64 shrink-0 min-h-screen bg-ink flex-col sticky top-0 self-start h-screen">
      <div className="px-6 py-5 border-b border-white/[0.08]">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.08] text-gold">
            <Mic2 size={18} />
          </span>
          <span className="font-bold text-white text-base font-display tracking-tight">Future Voices</span>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-5 flex flex-col gap-1">
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/30">{ROLE_LABEL[role]}</p>
        {nav.map(({ label, href, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'group relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all',
                active ? 'bg-white/[0.08] text-white' : 'text-white/55 hover:text-white hover:bg-white/[0.04]'
              )}
            >
              {active && <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-r-full bg-gold" />}
              <Icon size={18} className={active ? 'text-gold' : ''} />
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-white/[0.08] flex flex-col gap-1">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/55 hover:text-white hover:bg-white/[0.04] transition-colors"
        >
          <ArrowUpRight size={18} />
          View site
        </Link>
        <button
          onClick={() => router.push('/login')}
          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-white/55 hover:text-white hover:bg-white/[0.04] transition-colors"
        >
          <LogOut size={18} />
          Sign Out
        </button>
        <div className="px-3 pt-2 mt-1 truncate">
          <p className="text-xs text-white/70 font-medium truncate">{userName}</p>
        </div>
      </div>
    </aside>
  )
}
