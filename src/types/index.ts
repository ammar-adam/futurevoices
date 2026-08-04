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
  age_min: number
  age_max: number
  price_monthly: number | null  // null = "Contact us for pricing"
  billing_model: 'monthly' | 'package'
  package_sessions?: number     // only when billing_model is 'package'
  capacity: number
  duration_weeks: number
  color: string
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
    name: 'Public Speaking — Group',
    slug: 'speaking-group',
    description: 'Live group coaching for kids and adults building confident public speaking. Starts with a free 4-week pilot, continues as an ongoing cohort.',
    age_min: 6,
    age_max: 99,
    price_monthly: null,
    billing_model: 'monthly',
    capacity: 8,
    duration_weeks: 4,
    color: '#4F9BF7',
  },
  {
    id: 'speaking-private',
    name: 'Public Speaking — 1:1',
    slug: 'speaking-private',
    description: 'Private, individual public speaking coaching. Same core curriculum as the group program, one-on-one pacing.',
    age_min: 6,
    age_max: 99,
    price_monthly: null,
    billing_model: 'monthly',
    capacity: 1,
    duration_weeks: 4,
    color: '#7C5CFC',
  },
  {
    id: 'fv-pro',
    name: 'Future Voices Pro',
    slug: 'pro',
    description: 'DECA, Model UN, and university essay/interview coaching. 1:1 only, built around your deadline, not an open-ended subscription.',
    age_min: 13,
    age_max: 19,
    price_monthly: null,
    billing_model: 'package',
    package_sessions: 4,
    capacity: 1,
    duration_weeks: 4,
    color: '#1F6B5C',
  },
]

export const SCHEDULE_SLOTS = [
  { region: 'Americas', slots: ['Tue 5:00 PM ET', 'Wed 6:00 PM ET', 'Thu 7:30 PM ET'] },
  { region: 'Europe / MEA', slots: ['Mon 4:30 PM GMT', 'Tue 5:30 PM GMT', 'Sat 11:00 AM GMT'] },
  { region: 'Asia-Pacific', slots: ['Sat 10:00 AM SGT', 'Sat 4:00 PM SGT', 'Sun 4:00 PM SGT'] },
]
