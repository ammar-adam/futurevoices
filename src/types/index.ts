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
    name: 'Group Coaching',
    slug: 'speaking-group',
    description: 'A weekly 60-minute live class, capped at eight students, working through the six-level path together. Every student speaks in every session.',
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
    name: 'Private 1:1 Coaching',
    slug: 'speaking-private',
    description: 'The same level curriculum, taught one-on-one. Suited to shy starters, students preparing for a specific moment, or kids who want to move faster.',
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
    name: 'Competitive Prep',
    slug: 'prep',
    description: 'Deadline-first 1:1 coaching for DECA, Model UN, and university applications. Pay per session, built backward from your competition or application date.',
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

/** The six-level path. Used by the homepage and the curriculum page. */
export const LEVELS = [
  { n: 1, name: 'Confidence', line: 'Overcoming fear, voice, posture, and eye contact. Standing up and being heard.' },
  { n: 2, name: 'Clarity', line: 'Organizing ideas, cutting filler words, and explaining complicated things simply.' },
  { n: 3, name: 'Storytelling', line: 'Narrative, emotion, memorable openings, and humor. Speeches people remember.' },
  { n: 4, name: 'Persuasion', line: 'Argument, rhetoric, reading an audience, and calls to action. Speaking to change minds.' },
  { n: 5, name: 'Performance', line: 'Stage presence, vocal dynamics, physicality, and handling difficult rooms.' },
  { n: 6, name: 'Mastery', line: 'Keynotes, impromptu speaking, debate, and interviews. High-stakes speaking, handled.' },
]

/** Level 1 week-by-week. Short form on the homepage, full detail on /curriculum. */
export const LEVEL_ONE_WEEKS = [
  {
    n: 1,
    title: 'First Words',
    short: 'What nerves actually are, and a recorded 30-second introduction on day one.',
    full: 'Why speaking feels scary and what nerves actually are. Every student delivers a 30-second introduction on day one, recorded. This becomes the "before" tape.',
  },
  {
    n: 2,
    title: 'The Body Speaks First',
    short: 'Posture, stillness, and eye contact, so the body stops giving the nerves away.',
    full: 'Posture, stillness, eye contact. Students deliver the same two lines three different ways and feel the difference.',
  },
  {
    n: 3,
    title: 'The Voice',
    short: 'Volume, pace, and learning to use a pause instead of fearing it.',
    full: 'Volume, pace, and the pause. Learning that silence is a tool, not a failure.',
  },
  {
    n: 4,
    title: 'Shape of a Talk',
    short: 'An opening, one clear point, and an ending that lands.',
    full: 'An opening, one clear point, an ending. Every student builds a one-minute talk on that skeleton.',
  },
  {
    n: 5,
    title: 'Handling the Wobble',
    short: 'What to do when your mind goes blank. We rehearse the recovery on purpose.',
    full: 'What to do when your mind goes blank. Recovery is practiced deliberately, not just discussed.',
  },
  {
    n: 6,
    title: 'Making It Yours',
    short: 'Each student chooses a topic they genuinely care about and drafts their talk.',
    full: 'Each student picks their final performance topic, something they genuinely care about, and drafts it with coaching.',
  },
  {
    n: 7,
    title: 'Dress Rehearsal',
    short: 'Full run-throughs, with every student coached by the room as well as the coach.',
    full: 'Full run-throughs with structured peer feedback: two things done well, one thing to try.',
  },
  {
    n: 8,
    title: 'The Showcase',
    short: 'The talk, delivered live to the cohort and to you. Certificates presented.',
    full: 'Each student delivers their talk live to the cohort and parents, recorded. Certificates presented, and families watch week 1 beside week 8.',
  },
]
