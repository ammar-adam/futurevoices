export type UserRole = 'parent' | 'coach' | 'admin'

export interface Profile {
  id: string
  email: string
  full_name: string
  role: UserRole
  created_at: string
}

export interface Child {
  id: string
  parent_id: string
  full_name: string
  date_of_birth: string
  age: number
  created_at: string
}

export interface Program {
  id: string
  name: string
  slug: string
  description: string
  price_monthly: number | null  // null when the program is billed per session
  price_session?: number        // set when billing_model is 'session'
  billing_model: 'monthly' | 'session'
}

export interface Cohort {
  id: string
  program_id: string
  program?: Program
  timezone: string
  day_of_week: number // 0=Sun, 1=Mon...
  time_local: string // "17:00"
  starts_at: string // ISO date
  ends_at: string
  zoom_link?: string
  is_active: boolean
}

export interface Enrollment {
  id: string
  child_id: string
  child?: Child
  cohort_id: string
  cohort?: Cohort
  status: 'pilot' | 'active' | 'paused' | 'cancelled'
  pilot_started_at?: string
  pilot_ends_at?: string
  stripe_subscription_id?: string
  created_at: string
}

export interface ScheduledClass {
  id: string
  cohort_id: string
  cohort?: Cohort
  scheduled_at: string
  zoom_link?: string
  notes?: string
}

export interface Attendance {
  id: string
  class_id: string
  enrollment_id: string
  attended: boolean
}

export interface CoachNote {
  id: string
  class_id: string
  child_id: string
  child?: Child
  coach_id: string
  note: string
  created_at: string
}

export interface Consent {
  id: string
  child_id: string
  type: 'coppa' | 'media_release' | 'privacy'
  signed_at: string
  signed_by: string
}

export const PROGRAMS: Program[] = [
  {
    id: 'speaking-group',
    name: 'Group classes',
    slug: 'speaking-group',
    description: 'One class a week in a small group of students of similar age, working through the curriculum together. Everyone speaks in every session.',
    price_monthly: 120,
    billing_model: 'monthly',
  },
  {
    id: 'speaking-private',
    name: 'Private coaching',
    slug: 'speaking-private',
    description: 'The same curriculum taught one to one, for a student preparing for something specific or working faster than a class allows.',
    price_session: 50,
    price_monthly: null,
    billing_model: 'session',
  },
  {
    id: 'prep',
    name: 'Competitive prep',
    slug: 'prep',
    description: 'One to one coaching for students working towards a competition or an application deadline.',
    price_session: 45,
    price_monthly: null,
    billing_model: 'session',
  },
]
