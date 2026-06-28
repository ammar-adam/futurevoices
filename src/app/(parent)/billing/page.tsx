import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CreditCard } from 'lucide-react'
import { MOCK_ENROLLMENTS } from '@/lib/mock-data'
import { format } from 'date-fns'

export default function BillingPage() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#14172B]">Billing</h1>
        <p className="text-gray-500 mt-1">Your current enrollments and subscription status.</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-[#B68C2D]" />
            <h2 className="font-bold text-[#14172B]">Active Enrollments</h2>
          </div>
        </CardHeader>
        <CardContent>
          {MOCK_ENROLLMENTS.map(e => (
            <div key={e.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: e.cohort?.program?.color }} />
                <div>
                  <p className="font-medium text-sm">{e.child?.full_name}</p>
                  <p className="text-xs text-gray-500">{e.cohort?.program?.name}</p>
                  {e.status === 'pilot' && e.pilot_ends_at && (
                    <p className="text-xs text-amber-600 font-medium mt-0.5">
                      Free pilot · ends {format(new Date(e.pilot_ends_at), 'MMM d')}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-bold text-[#14172B]">${e.cohort?.program?.price_monthly}/mo</span>
                <Badge variant={e.status as 'pilot' | 'active'}>{e.status}</Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-sm text-amber-800">
          <strong>30-day refund policy:</strong> If you're not satisfied with your first paid month, contact us within 30 days — no questions asked.
        </p>
      </div>
    </div>
  )
}
