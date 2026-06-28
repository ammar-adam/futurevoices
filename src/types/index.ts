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
  price_monthly: number
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
    id: 'little-voices',
    name: 'Little Voices',
    slug: 'little',
    description: 'Foundational public speaking for young learners. Build confidence, learn to tell stories, and find your voice.',
    age_min: 6,
    age_max: 9,
    price_monthly: 79,
    capacity: 8,
    duration_weeks: 12,
    color: '#4F9BF7',
  },
  {
    id: 'rising-speakers',
    name: 'Rising Speakers',
    slug: 'rising',
    description: 'Speech architecture and storytelling for pre-teens. Structure ideas, persuade audiences, perform with confidence.',
    age_min: 10,
    age_max: 13,
    price_monthly: 109,
    capacity: 8,
    duration_weeks: 12,
    color: '#7C5CFC',
  },
  {
    id: 'champion-speakers',
    name: 'Champion Speakers',
    slug: 'champion',
    description: 'Rhetoric, debate, and delivery mastery for teens. Compete, lead, and communicate at the highest level.',
    age_min: 14,
    age_max: 18,
    price_monthly: 109,
    capacity: 8,
    duration_weeks: 12,
    color: '#B68C2D',
  },
  {
    id: 'elite-1on1',
    name: 'Elite 1-on-1',
    slug: 'elite',
    description: 'Private coaching tailored to your child\'s exact goals. Competition prep, school speeches, interviews, or general excellence.',
    age_min: 6,
    age_max: 18,
    price_monthly: 149,
    capacity: 1,
    duration_weeks: 12,
    color: '#14172B',
  },
]

export const SCHEDULE_SLOTS = [
  { region: 'Americas', slots: ['Tue 5:00 PM ET', 'Wed 6:00 PM ET', 'Thu 7:30 PM ET'] },
  { region: 'Europe / MEA', slots: ['Mon 4:30 PM GMT', 'Tue 5:30 PM GMT', 'Sat 11:00 AM GMT'] },
  { region: 'Asia-Pacific', slots: ['Sat 10:00 AM SGT', 'Sat 4:00 PM SGT', 'Sun 4:00 PM SGT'] },
]
