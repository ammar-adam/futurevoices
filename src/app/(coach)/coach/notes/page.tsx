import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar } from '@/components/ui/avatar'
import { MOCK_NOTES } from '@/lib/mock-data'
import { format } from 'date-fns'

export default function CoachNotesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-semibold text-ink">Coach Notes</h1>
        <p className="text-ink-500 mt-1">All notes you've written for your students.</p>
      </div>

      <Card>
        <CardHeader><h2 className="font-semibold text-ink">All notes ({MOCK_NOTES.length})</h2></CardHeader>
        <CardContent className="flex flex-col gap-5">
          {MOCK_NOTES.map(note => (
            <div key={note.id} className="rounded-xl bg-cream-200/50 p-5">
              <div className="flex items-center gap-3 mb-3">
                <Avatar name={note.child?.full_name ?? '?'} size="sm" />
                <div>
                  <p className="font-semibold text-ink text-sm">{note.child?.full_name}</p>
                  <p className="text-xs text-ink-500/70">{format(new Date(note.created_at), 'MMMM d, yyyy · h:mm a')}</p>
                </div>
              </div>
              <p className="text-sm text-ink-500 leading-relaxed">{note.note}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
