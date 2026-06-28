'use client'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { Save, CheckCircle2 } from 'lucide-react'
import { MOCK_CLASSES, MOCK_CHILDREN } from '@/lib/mock-data'

export default function ClassDetailPage() {
  const params = useParams()
  const classId = params.id as string
  const cls = MOCK_CLASSES.find(c => c.id === classId) ?? MOCK_CLASSES[0]

  const [attendance, setAttendance] = useState<Record<string, boolean>>(
    Object.fromEntries(MOCK_CHILDREN.map(c => [c.id, true]))
  )
  const [notes, setNotes] = useState<Record<string, string>>({
    'child-1': "Aisha did a fantastic job with her opening hook today. Eye contact and voice projection both improving.",
    'child-2': "",
  })
  const [saved, setSaved] = useState(false)

  function save() {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#14172B]">{cls.cohort?.program?.name}</h1>
        <p className="text-gray-500 mt-1">{format(new Date(cls.scheduled_at), 'EEEE, MMMM d · h:mm a')}</p>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        {MOCK_CHILDREN.map(child => (
          <Card key={child.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#14172B]">{child.full_name}</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={attendance[child.id] ?? false}
                    onChange={e => setAttendance(prev => ({ ...prev, [child.id]: e.target.checked }))}
                  />
                  <span className="text-sm text-gray-600">Attended</span>
                </label>
              </div>
            </CardHeader>
            <CardContent>
              <label className="text-sm font-medium text-[#14172B] block mb-2">
                Coach Note <span className="text-gray-400 font-normal">(sent to parent after class)</span>
              </label>
              <textarea
                value={notes[child.id] ?? ''}
                onChange={e => setNotes(prev => ({ ...prev, [child.id]: e.target.value }))}
                rows={4}
                placeholder={`What did ${child.full_name} work on today? What was a highlight? What should they practice?`}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#B68C2D] resize-none"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <Button onClick={save} className="w-full">
        {saved
          ? <><CheckCircle2 size={16} /> Saved!</>
          : <><Save size={16} /> Save Attendance & Notes</>
        }
      </Button>
    </div>
  )
}
