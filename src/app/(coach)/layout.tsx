import { Sidebar } from '@/components/layout/sidebar'
import { Topbar } from '@/components/layout/topbar'
import { MOCK_COACH } from '@/lib/mock-data'

export default function CoachLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar role="coach" userName={MOCK_COACH.full_name} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar userName={MOCK_COACH.full_name} roleLabel="Coach" />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
