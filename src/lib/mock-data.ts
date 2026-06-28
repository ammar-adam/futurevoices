import { type Profile, type Child, type Enrollment, type ScheduledClass, type CoachNote, type Cohort, PROGRAMS } from '@/types'

export const MOCK_PARENT: Profile = {
  id: 'parent-1',
  email: 'nida@futurevoices.co',
  full_name: 'Nida Ahmed',
  role: 'parent',
  created_at: '2026-05-01T00:00:00Z',
}

export const MOCK_COACH: Profile = {
  id: 'coach-1',
  email: 'coach@futurevoices.co',
  full_name: 'Nida Ahmed',
  role: 'coach',
  created_at: '2026-05-01T00:00:00Z',
}

export const MOCK_ADMIN: Profile = {
  id: 'admin-1',
  email: 'admin@futurevoices.co',
  full_name: 'Farhan Ahmed',
  role: 'admin',
  created_at: '2026-05-01T00:00:00Z',
}

export const MOCK_COHORTS: Cohort[] = [
  {
    id: 'cohort-1',
    program_id: 'little-voices',
    program: PROGRAMS[0],
    timezone: 'ET',
    day_of_week: 2,
    time_local: '5:00 PM',
    starts_at: '2026-07-01',
    ends_at: '2026-09-23',
    zoom_link: 'https://zoom.us/j/demo',
    is_active: true,
  },
  {
    id: 'cohort-2',
    program_id: 'rising-speakers',
    program: PROGRAMS[1],
    timezone: 'ET',
    day_of_week: 3,
    time_local: '6:00 PM',
    starts_at: '2026-07-02',
    ends_at: '2026-09-24',
    zoom_link: 'https://zoom.us/j/demo2',
    is_active: true,
  },
]

export const MOCK_CHILDREN: Child[] = [
  { id: 'child-1', parent_id: 'parent-1', full_name: 'Aisha Ahmed', date_of_birth: '2016-03-12', age: 10, created_at: '2026-05-01T00:00:00Z' },
  { id: 'child-2', parent_id: 'parent-1', full_name: 'Zain Ahmed',  date_of_birth: '2013-07-22', age: 12, created_at: '2026-05-01T00:00:00Z' },
]

export const MOCK_ENROLLMENTS: Enrollment[] = [
  {
    id: 'enroll-1',
    child_id: 'child-1',
    child: MOCK_CHILDREN[0],
    cohort_id: 'cohort-1',
    cohort: MOCK_COHORTS[0],
    status: 'pilot',
    pilot_started_at: '2026-06-24T00:00:00Z',
    pilot_ends_at: '2026-07-08T00:00:00Z',
    created_at: '2026-06-24T00:00:00Z',
  },
  {
    id: 'enroll-2',
    child_id: 'child-2',
    child: MOCK_CHILDREN[1],
    cohort_id: 'cohort-2',
    cohort: MOCK_COHORTS[1],
    status: 'active',
    created_at: '2026-05-15T00:00:00Z',
  },
]

export const MOCK_CLASSES: ScheduledClass[] = [
  { id: 'class-1', cohort_id: 'cohort-1', cohort: MOCK_COHORTS[0], scheduled_at: '2026-07-01T21:00:00Z', zoom_link: 'https://zoom.us/j/demo' },
  { id: 'class-2', cohort_id: 'cohort-2', cohort: MOCK_COHORTS[1], scheduled_at: '2026-07-02T22:00:00Z', zoom_link: 'https://zoom.us/j/demo2' },
  { id: 'class-3', cohort_id: 'cohort-1', cohort: MOCK_COHORTS[0], scheduled_at: '2026-07-08T21:00:00Z', zoom_link: 'https://zoom.us/j/demo' },
]

export const MOCK_NOTES: CoachNote[] = [
  {
    id: 'note-1',
    class_id: 'class-1',
    child_id: 'child-1',
    child: MOCK_CHILDREN[0],
    coach_id: 'coach-1',
    note: "Aisha did a fantastic job with her opening hook today. She remembered to make eye contact and her voice projection has improved noticeably. For practice this week: work on slowing down during key points for emphasis.",
    created_at: '2026-06-17T22:30:00Z',
  },
  {
    id: 'note-2',
    class_id: 'class-2',
    child_id: 'child-2',
    child: MOCK_CHILDREN[1],
    coach_id: 'coach-1',
    note: "Zain delivered a strong rebuttal in today's debate exercise — his logic was clear and he stayed composed under pressure. Next focus: vary vocal tone to keep the audience engaged during longer arguments.",
    created_at: '2026-06-18T23:00:00Z',
  },
]

export const MOCK_FAMILIES = [
  { id: 'parent-1', full_name: 'Nida Ahmed',    email: 'nida@futurevoices.co',  children: 2, status: 'active',  joined: '2026-05-01' },
  { id: 'parent-2', full_name: 'Sarah Mitchell', email: 'sarah.m@gmail.com',     children: 1, status: 'pilot',   joined: '2026-06-10' },
  { id: 'parent-3', full_name: 'James Thompson', email: 'j.thompson@outlook.com',children: 1, status: 'active',  joined: '2026-05-20' },
  { id: 'parent-4', full_name: 'Priya Kapoor',   email: 'priya.k@gmail.com',     children: 2, status: 'pilot',   joined: '2026-06-18' },
  { id: 'parent-5', full_name: 'Omar Hassan',    email: 'o.hassan@gmail.com',    children: 1, status: 'active',  joined: '2026-06-01' },
]
