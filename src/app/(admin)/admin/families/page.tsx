import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MOCK_FAMILIES } from '@/lib/mock-data'

export default function FamiliesPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#14172B]">Families</h1>
        <p className="text-gray-500 mt-1">{MOCK_FAMILIES.length} families registered</p>
      </div>
      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100">
              <tr>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Parent</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Email</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Children</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Status</th>
                <th className="text-left px-6 py-3 text-gray-500 font-medium">Joined</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_FAMILIES.map(f => (
                <tr key={f.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-6 py-3 font-medium">{f.full_name}</td>
                  <td className="px-6 py-3 text-gray-600">{f.email}</td>
                  <td className="px-6 py-3 text-gray-600">{f.children}</td>
                  <td className="px-6 py-3">
                    <Badge variant={f.status as 'active' | 'pilot'}>{f.status}</Badge>
                  </td>
                  <td className="px-6 py-3 text-gray-500">
                    {new Date(f.joined).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
