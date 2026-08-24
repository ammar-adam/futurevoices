-- Future Voices · Supabase Schema
-- Run this in your Supabase SQL Editor

-- ─── Extensions ──────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Profiles (extends auth.users) ───────────────────────────
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text not null,
  full_name   text not null,
  role        text not null check (role in ('parent', 'coach', 'admin')) default 'parent',
  created_at  timestamptz not null default now()
);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    coalesce(new.raw_user_meta_data->>'role', 'parent')
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─── Programs ─────────────────────────────────────────────────
create table if not exists public.programs (
  id               text primary key,
  name             text not null,
  slug             text not null,
  description      text,
  age_min          int not null,
  age_max          int not null,
  price_monthly    int,            -- null = contact for pricing
  billing_model    text not null check (billing_model in ('monthly','package')) default 'monthly',
  package_sessions int,            -- set when billing_model = 'package'
  capacity         int not null default 8,
  duration_weeks   int not null default 4,
  color            text not null default '#14172B',
  is_active        boolean not null default true
);

-- Seed programs
insert into public.programs (id, name, slug, description, age_min, age_max, price_monthly, billing_model, package_sessions, capacity, duration_weeks, color, is_active) values
  ('speaking-group',   'Public Speaking — Group', 'speaking-group',
   'Live group coaching for kids and adults building confident public speaking. Starts with a free 4-week pilot.',
   6, 99, null, 'monthly', null, 8, 4, '#4F9BF7', true),
  ('speaking-private', 'Public Speaking — 1:1',   'speaking-private',
   'Private, individual public speaking coaching. Same core curriculum as the group program, one-on-one pacing.',
   6, 99, null, 'monthly', null, 1, 4, '#7C5CFC', true),
  ('fv-pro',           'Future Voices Pro',        'pro',
   'DECA, Model UN, and university essay/interview coaching. 1:1 only, built around your deadline.',
   13, 19, null, 'package', 4,  1, 4, '#1F6B5C', true)
on conflict (id) do nothing;

-- ─── Children ─────────────────────────────────────────────────
create table if not exists public.children (
  id            uuid primary key default uuid_generate_v4(),
  parent_id     uuid not null references public.profiles(id) on delete cascade,
  full_name     text not null,
  date_of_birth date not null,
  created_at    timestamptz not null default now()
);

-- ─── Cohorts ──────────────────────────────────────────────────
create table if not exists public.cohorts (
  id           uuid primary key default uuid_generate_v4(),
  program_id   text not null references public.programs(id),
  coach_id     uuid references public.profiles(id),
  timezone     text not null,
  day_of_week  int not null check (day_of_week between 0 and 6),
  time_local   text not null, -- "17:00"
  starts_at    date not null,
  ends_at      date not null,
  zoom_link    text,
  is_active    boolean not null default true,
  created_at   timestamptz not null default now()
);

-- ─── Enrollments ──────────────────────────────────────────────
create table if not exists public.enrollments (
  id                      uuid primary key default uuid_generate_v4(),
  child_id                uuid not null references public.children(id) on delete cascade,
  cohort_id               uuid not null references public.cohorts(id),
  status                  text not null check (status in ('pilot','active','paused','cancelled')) default 'pilot',
  pilot_started_at        timestamptz,
  pilot_ends_at           timestamptz,
  stripe_subscription_id  text,
  created_at              timestamptz not null default now(),
  unique (child_id, cohort_id)
);

-- ─── Scheduled Classes ────────────────────────────────────────
create table if not exists public.scheduled_classes (
  id            uuid primary key default uuid_generate_v4(),
  cohort_id     uuid not null references public.cohorts(id) on delete cascade,
  scheduled_at  timestamptz not null,
  zoom_link     text,
  notes         text,
  created_at    timestamptz not null default now()
);

-- ─── Attendance ───────────────────────────────────────────────
create table if not exists public.attendance (
  id             uuid primary key default uuid_generate_v4(),
  class_id       uuid not null references public.scheduled_classes(id) on delete cascade,
  enrollment_id  uuid not null references public.enrollments(id) on delete cascade,
  attended       boolean not null default false,
  unique (class_id, enrollment_id)
);

-- ─── Coach Notes ──────────────────────────────────────────────
create table if not exists public.coach_notes (
  id          uuid primary key default uuid_generate_v4(),
  class_id    uuid not null references public.scheduled_classes(id) on delete cascade,
  child_id    uuid not null references public.children(id) on delete cascade,
  coach_id    uuid not null references public.profiles(id),
  note        text not null,
  created_at  timestamptz not null default now(),
  unique (class_id, child_id)
);

-- ─── Consents ─────────────────────────────────────────────────
create table if not exists public.consents (
  id          uuid primary key default uuid_generate_v4(),
  child_id    uuid not null references public.children(id) on delete cascade,
  type        text not null check (type in ('coppa','media_release','privacy')),
  signed_at   timestamptz not null default now(),
  signed_by   uuid not null references public.profiles(id)
);

-- ─── Row-Level Security ───────────────────────────────────────
alter table public.profiles         enable row level security;
alter table public.children         enable row level security;
alter table public.cohorts          enable row level security;
alter table public.enrollments      enable row level security;
alter table public.scheduled_classes enable row level security;
alter table public.attendance       enable row level security;
alter table public.coach_notes      enable row level security;
alter table public.consents         enable row level security;

-- Profiles: users see their own; admins see all
create policy "profiles_self" on public.profiles for all using (auth.uid() = id);
create policy "profiles_admin" on public.profiles for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- Children: parents see their own children; coaches + admins see all
create policy "children_parent" on public.children for all using (parent_id = auth.uid());
create policy "children_coach_admin" on public.children for select using (
  exists (select 1 from public.profiles where id = auth.uid() and role in ('coach','admin'))
);

-- Cohorts: readable by all authenticated; writable by admin only
create policy "cohorts_read" on public.cohorts for select using (auth.uid() is not null);
create policy "cohorts_admin" on public.cohorts for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);

-- Enrollments: parents see their children's; coaches/admins see all
create policy "enrollments_parent" on public.enrollments for all using (
  exists (select 1 from public.children where id = child_id and parent_id = auth.uid())
);
create policy "enrollments_coach_admin" on public.enrollments for select using (
  exists (select 1 from public.profiles where id = auth.uid() and role in ('coach','admin'))
);

-- Scheduled classes: readable by all authenticated
create policy "classes_read" on public.scheduled_classes for select using (auth.uid() is not null);
create policy "classes_admin" on public.scheduled_classes for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role in ('coach','admin'))
);

-- Attendance: coaches and admins can write; parents can read their children's
create policy "attendance_coach" on public.attendance for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role in ('coach','admin'))
);

-- Coach notes: coaches write; parents read their children's
create policy "notes_coach_write" on public.coach_notes for all using (
  exists (select 1 from public.profiles where id = auth.uid() and role in ('coach','admin'))
);
create policy "notes_parent_read" on public.coach_notes for select using (
  exists (
    select 1 from public.children c
    join public.enrollments e on e.child_id = c.id
    where c.id = child_id and c.parent_id = auth.uid()
  )
);

-- Consents: parents manage their own
create policy "consents_parent" on public.consents for all using (signed_by = auth.uid());
create policy "consents_admin" on public.consents for select using (
  exists (select 1 from public.profiles where id = auth.uid() and role = 'admin')
);
