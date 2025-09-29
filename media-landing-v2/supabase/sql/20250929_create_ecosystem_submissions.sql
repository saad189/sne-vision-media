-- Supabase-safe, idempotent SQL for ecosystem_submissions table.
-- Paste directly into Supabase SQL Editor. Re-running is safe.

-- Ensure pgcrypto for gen_random_uuid()
create extension if not exists "pgcrypto";

-- 1. Table (idempotent)
create table if not exists public.ecosystem_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null check (position('@' in email) > 1),
  phone text,
  designation text,
  message text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Updated_at trigger function (create or replace is safe)
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- 3. Trigger (drop + create for idempotency)
drop trigger if exists trg_ecosystem_submissions_updated on public.ecosystem_submissions;
create trigger trg_ecosystem_submissions_updated
before update on public.ecosystem_submissions
for each row execute function public.set_updated_at();

-- 4. Indexes
create index if not exists idx_ecosystem_submissions_created_at on public.ecosystem_submissions (created_at desc);
create index if not exists idx_ecosystem_submissions_email on public.ecosystem_submissions (email);

-- 5. Row Level Security
alter table public.ecosystem_submissions enable row level security;

-- 6. Policies (drop first; CREATE POLICY does not support IF NOT EXISTS)
drop policy if exists "Allow anonymous inserts" on public.ecosystem_submissions;
create policy "Allow anonymous inserts" on public.ecosystem_submissions
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Allow select for authenticated" on public.ecosystem_submissions;
create policy "Allow select for authenticated" on public.ecosystem_submissions
  for select
  to authenticated
  using (true);

-- (Deliberately no update/delete policies: only service_role can modify/delete.)

-- 7. Comments
comment on table public.ecosystem_submissions is 'Contact form submissions from ecosystem page.';
comment on column public.ecosystem_submissions.designation is 'User''s current role or title';
