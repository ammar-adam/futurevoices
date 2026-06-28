import { Sidebar } from '@/components/layout/sidebar'
import { Topbar } from '@/components/layout/topbar'
import { MOCK_ADMIN } from '@/lib/mock-data'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-cream">
      <Sidebar role="admin" userName={MOCK_ADMIN.full_name} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar userName={MOCK_ADMIN.full_name} roleLabel="Admin" />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
