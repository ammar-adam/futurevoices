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
    line: 'Every student begins here. They learn what nerves actually are and why feeling them is normal rather than disqualifying, then build the physical foundations of speaking well: standing with purpose, holding still, knowing where to look, and projecting enough to fill a room comfortably. Everyone speaks in the very first session, because confidence starts the moment a student begins.',
  },
  {
    n: 2,
    name: 'Clarity',
    line: 'Clear speakers think before they speak. Students learn to shape an idea before opening their mouth, lead with what matters most, strip out the filler that creeps in under pressure, and explain something complicated to someone who knows nothing about it. It is the skill that makes every presentation afterwards easier.',
  },
  {
    n: 3,
    name: 'Storytelling',
    line: 'Some talks stay with an audience long after they end, and there are reasons why. Students work on openings that make a room look up, choosing the details that carry weight, shaping a story that holds attention, and using timing and humour with intent. These are the tools that turn information into something worth listening to.',
  },
  {
    n: 4,
    name: 'Persuasion',
    line: 'Speaking to inform is one thing, and speaking to move people is another. Students learn to build an argument that holds together, anticipate what an audience already believes, use evidence without overwhelming anyone, and close with a clear sense of what they want their listeners to do or reconsider.',
  },
  {
    n: 5,
    name: 'Performance',
    line: 'This stage develops the physical craft of speaking. Students learn to use their voice deliberately, vary pace for effect, let a pause carry weight instead of rushing to fill it, and hold a room that is distracted or unconvinced. Recovering from a stumble mid-sentence is rehearsed on purpose, so it becomes routine rather than alarming.',
  },
  {
    n: 6,
    name: 'Mastery',
    line: 'The finishing stage prepares students for the moments that count: speaking with little or no preparation, handling questions nobody warned them about, and performing in interviews, debates, and other settings where enough is riding on it that the nerves return. By this point students are no longer preparing for class, they are preparing for the real thing.',
  },
]

/** The shape of a class. Used on the homepage and the curriculum page. */
export const CLASS_SHAPE = [
  'Every class follows a rhythm students come to know well. It opens with teaching, one skill at a time and grounded in examples, and then everyone speaks. Depending on where the group is, that might be thirty seconds on the spot, a short prepared piece, or a full talk they have been building towards.',
  'Feedback comes straight away, and it is specific. Rather than a general well done, students hear exactly which sentence lost the room and what to try instead, then go again immediately, because hearing a note and applying it are two different skills.',
  'By the end of a stretch of work, every student has written and delivered a talk of their own, on a subject they chose because they genuinely care about it.',
]
