import { Card, CardContent } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { MOCK_CHILDREN, MOCK_ENROLLMENTS } from '@/lib/mock-data'
import { format } from 'date-fns'

export default function ChildrenPage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-semibold text-ink">My Children</h1>
          <p className="text-ink-500 mt-1">Manage your children's profiles and enrollments.</p>
        </div>
        <Button><Plus size={16} /> Add Child</Button>
      </div>

      <div className="flex flex-col gap-4">
        {MOCK_CHILDREN.map(child => {
          const enrollment = MOCK_ENROLLMENTS.find(e => e.child_id === child.id)
          return (
            <Card key={child.id}>
              <CardContent className="py-6">
                <div className="flex items-center gap-5">
                  <Avatar name={child.full_name} size="lg" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="font-semibold text-lg text-ink">{child.full_name}</h2>
                      {enrollment && <Badge variant={enrollment.status as 'pilot' | 'active'}>{enrollment.status}</Badge>}
                    </div>
                    <p className="text-sm text-ink-500">
                      Date of birth: {format(new Date(child.date_of_birth), 'MMMM d, yyyy')} · Age {child.age}
                    </p>
                    {enrollment?.cohort && (
                      <p className="text-sm text-ink-500 mt-1">
                        {enrollment.cohort.program?.name} · {enrollment.cohort.time_local} {enrollment.cohort.timezone}
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
