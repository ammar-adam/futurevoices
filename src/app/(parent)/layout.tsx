import { Sidebar } from '@/components/layout/sidebar'
import { Topbar } from '@/components/layout/topbar'
import { MOCK_PARENT } from '@/lib/mock-data'

export default function ParentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar role="parent" userName={MOCK_PARENT.full_name} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar userName={MOCK_PARENT.full_name} roleLabel="Parent" />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
