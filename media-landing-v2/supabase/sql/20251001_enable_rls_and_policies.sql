-- Migration: enable RLS and add baseline policies for new content tables
-- Depends on: tables already created (hero_slide, top_minds, event_type, events)
-- Adjust policies as needed.

-- +goose Up
-- 1. Enable Row Level Security
alter table public.hero_slide enable row level security;
alter table public.top_minds enable row level security;
alter table public.event_type enable row level security;
alter table public.events enable row level security;

-- 2. (Optional) Restrict direct writes by default: no insert/update/delete policies yet.
-- 3. Allow public (anon) read access to content-oriented tables.
create policy "Public read hero_slide" on public.hero_slide
for select using (true);

create policy "Public read top_minds" on public.top_minds
for select using (true);

create policy "Public read event_type" on public.event_type
for select using (true);

create policy "Public read events" on public.events
for select using (true);

-- 4. Authenticated editors: allow logged-in users to modify (adjust role logic as needed)
create policy "Auth insert hero_slide" on public.hero_slide
for insert with check (auth.role() = 'authenticated');
create policy "Auth update hero_slide" on public.hero_slide
for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Auth delete hero_slide" on public.hero_slide
for delete using (auth.role() = 'authenticated');

create policy "Auth insert top_minds" on public.top_minds
for insert with check (auth.role() = 'authenticated');
create policy "Auth update top_minds" on public.top_minds
for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Auth delete top_minds" on public.top_minds
for delete using (auth.role() = 'authenticated');

create policy "Auth insert event_type" on public.event_type
for insert with check (auth.role() = 'authenticated');
create policy "Auth update event_type" on public.event_type
for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Auth delete event_type" on public.event_type
for delete using (auth.role() = 'authenticated');

create policy "Auth insert events" on public.events
for insert with check (auth.role() = 'authenticated');
create policy "Auth update events" on public.events
for update using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
create policy "Auth delete events" on public.events
for delete using (auth.role() = 'authenticated');

-- +goose Down
-- Drop policies then disable RLS
-- Policies
 drop policy if exists "Public read hero_slide" on public.hero_slide;
 drop policy if exists "Public read top_minds" on public.top_minds;
 drop policy if exists "Public read event_type" on public.event_type;
 drop policy if exists "Public read events" on public.events;
 drop policy if exists "Auth insert hero_slide" on public.hero_slide;
 drop policy if exists "Auth update hero_slide" on public.hero_slide;
 drop policy if exists "Auth delete hero_slide" on public.hero_slide;
 drop policy if exists "Auth insert top_minds" on public.top_minds;
 drop policy if exists "Auth update top_minds" on public.top_minds;
 drop policy if exists "Auth delete top_minds" on public.top_minds;
 drop policy if exists "Auth insert event_type" on public.event_type;
 drop policy if exists "Auth update event_type" on public.event_type;
 drop policy if exists "Auth delete event_type" on public.event_type;
 drop policy if exists "Auth insert events" on public.events;
 drop policy if exists "Auth update events" on public.events;
 drop policy if exists "Auth delete events" on public.events;

-- Disable RLS
alter table public.hero_slide disable row level security;
alter table public.top_minds disable row level security;
alter table public.event_type disable row level security;
alter table public.events disable row level security;
