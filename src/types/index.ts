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
  price_monthly: number | null  // null when the program is billed per session
  price_session?: number        // set when billing_model is 'session'
  billing_model: 'monthly' | 'session'
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
    name: 'Group classes',
    slug: 'speaking-group',
    description: 'One class a week in a small group of students of similar age, working through the curriculum together. Everyone speaks in every session.',
    age_min: 6,
    age_max: 99,
    price_monthly: 120,
    billing_model: 'monthly',
    capacity: 8,
    duration_weeks: 8,
    color: '#4F9BF7',
  },
  {
    id: 'speaking-private',
    name: 'Private coaching',
    slug: 'speaking-private',
    description: 'The same curriculum taught one to one, for a student preparing for something specific or working faster than a class allows.',
    age_min: 6,
    age_max: 99,
    price_session: 50,
    price_monthly: null,
    billing_model: 'session',
    capacity: 1,
    duration_weeks: 8,
    color: '#7C5CFC',
  },
  {
    id: 'prep',
    name: 'Competitive prep',
    slug: 'prep',
    description: 'One to one coaching for students working towards a competition or an application deadline.',
    age_min: 13,
    age_max: 19,
    price_session: 45,
    price_monthly: null,
    billing_model: 'session',
    capacity: 1,
    duration_weeks: 8,
    color: '#1F6B5C',
  },
]

/** The six stages. Used by the homepage and the curriculum page. */
export const LEVELS = [
  {
    n: 1,
    name: 'Confidence',
    line: 'This is where almost everyone starts. Students learn what nerves physically are and why they are not evidence of being bad at this, and they work on the mechanics of standing up, staying still, knowing where to look, and speaking loudly enough to be heard comfortably. Everyone speaks in the first session, because putting it off only makes it harder.',
  },
  {
    n: 2,
    name: 'Clarity',
    line: 'Most people are hard to follow because they started talking before they knew what they wanted to say. This stage is about organising a thought before opening your mouth, saying the important part first, cutting the filler that creeps in when you are nervous, and being able to explain something complicated to someone who knows nothing about it.',
  },
  {
    n: 3,
    name: 'Storytelling',
    line: 'Students work on why some talks stay with an audience and most do not. That covers openings that make people look up, choosing the details that carry weight and leaving out the ones that do not, timing, and humour, which is mostly a question of rhythm and can be practised like anything else.',
  },
  {
    n: 4,
    name: 'Persuasion',
    line: 'This stage covers building an argument that holds together, anticipating what an audience already believes, using evidence without burying people in it, and finishing with a clear idea of what you want listeners to do or think differently about.',
  },
  {
    n: 5,
    name: 'Performance',
    line: 'The physical side of speaking. Students work on using their voice deliberately, varying pace, letting a pause do the work instead of filling it, and holding the attention of a room that is distracted or unconvinced. Recovering from a mistake mid-sentence is rehearsed here on purpose rather than left to chance.',
  },
  {
    n: 6,
    name: 'Mastery',
    line: 'Speaking with little or no preparation, handling questions nobody warned you about, and performing in interviews, debates, and other situations where enough is riding on it that the nerves come back. This is the stage where students stop preparing for classes and start preparing for real occasions.',
  },
]

/** The shape of a class. Used on the homepage and the curriculum page. */
export const CLASS_SHAPE = [
  'Every class follows the same shape. It opens with teaching, one skill at a time and with examples, and then everyone speaks. Depending on where the group is, that might be thirty seconds on the spot, a short prepared piece, or a full talk once students have been building towards one.',
  'Feedback happens immediately and it is specific. Rather than telling a student they did well, we tell them which sentence lost the room and what to do differently, and then they go again, because hearing a note and applying it are two different skills.',
  'By the end of a stretch of work, every student has written and delivered a talk of their own on a subject they chose because they actually care about it.',
]
