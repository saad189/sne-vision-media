-- Migration: admin-only writes on content tables + locked-down ecosystem_submissions
-- Depends on: 20261120_01_create_admins_and_is_admin.sql AND at least one row in public.admins.
-- Safe to re-run. Public read policies from 20251001_enable_rls_and_policies.sql are kept.

begin;

-- Safety net: never apply admin-only policies while nobody is an admin.
do $$
begin
  if not exists (select 1 from public.admins) then
    raise exception 'public.admins is empty. Insert the first admin row (see 20261120_01 header) before running this file.';
  end if;
end
$$;

-- ---------------------------------------------------------------------------
-- 1. Content tables: replace "any authenticated user" writes with admin-only.
-- ---------------------------------------------------------------------------

-- hero_slide
drop policy if exists "Auth insert hero_slide" on public.hero_slide;
drop policy if exists "Auth update hero_slide" on public.hero_slide;
drop policy if exists "Auth delete hero_slide" on public.hero_slide;
drop policy if exists "Admin insert hero_slide" on public.hero_slide;
drop policy if exists "Admin update hero_slide" on public.hero_slide;
drop policy if exists "Admin delete hero_slide" on public.hero_slide;
create policy "Admin insert hero_slide" on public.hero_slide
  for insert to authenticated with check ((select public.is_admin()));
create policy "Admin update hero_slide" on public.hero_slide
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admin delete hero_slide" on public.hero_slide
  for delete to authenticated using ((select public.is_admin()));

-- top_minds
drop policy if exists "Auth insert top_minds" on public.top_minds;
drop policy if exists "Auth update top_minds" on public.top_minds;
drop policy if exists "Auth delete top_minds" on public.top_minds;
drop policy if exists "Admin insert top_minds" on public.top_minds;
drop policy if exists "Admin update top_minds" on public.top_minds;
drop policy if exists "Admin delete top_minds" on public.top_minds;
create policy "Admin insert top_minds" on public.top_minds
  for insert to authenticated with check ((select public.is_admin()));
create policy "Admin update top_minds" on public.top_minds
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admin delete top_minds" on public.top_minds
  for delete to authenticated using ((select public.is_admin()));

-- event_type
drop policy if exists "Auth insert event_type" on public.event_type;
drop policy if exists "Auth update event_type" on public.event_type;
drop policy if exists "Auth delete event_type" on public.event_type;
drop policy if exists "Admin insert event_type" on public.event_type;
drop policy if exists "Admin update event_type" on public.event_type;
drop policy if exists "Admin delete event_type" on public.event_type;
create policy "Admin insert event_type" on public.event_type
  for insert to authenticated with check ((select public.is_admin()));
create policy "Admin update event_type" on public.event_type
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admin delete event_type" on public.event_type
  for delete to authenticated using ((select public.is_admin()));

-- events
drop policy if exists "Auth insert events" on public.events;
drop policy if exists "Auth update events" on public.events;
drop policy if exists "Auth delete events" on public.events;
drop policy if exists "Admin insert events" on public.events;
drop policy if exists "Admin update events" on public.events;
drop policy if exists "Admin delete events" on public.events;
create policy "Admin insert events" on public.events
  for insert to authenticated with check ((select public.is_admin()));
create policy "Admin update events" on public.events
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admin delete events" on public.events
  for delete to authenticated using ((select public.is_admin()));

-- ---------------------------------------------------------------------------
-- 2. ecosystem_submissions (names, emails, phone numbers from the contact form)
--    Anonymous insert stays. Read and delete become admin-only.
-- ---------------------------------------------------------------------------
drop policy if exists "Allow select for authenticated" on public.ecosystem_submissions;
drop policy if exists "Admin select ecosystem_submissions" on public.ecosystem_submissions;
drop policy if exists "Admin delete ecosystem_submissions" on public.ecosystem_submissions;
create policy "Admin select ecosystem_submissions" on public.ecosystem_submissions
  for select to authenticated using ((select public.is_admin()));
create policy "Admin delete ecosystem_submissions" on public.ecosystem_submissions
  for delete to authenticated using ((select public.is_admin()));

-- ---------------------------------------------------------------------------
-- 3. Length limits on the public contact form.
--    NOT VALID: enforced for new/updated rows only, so existing rows cannot
--    block this migration. To also check old rows later (fails if any are too long):
--      alter table public.ecosystem_submissions validate constraint ecosystem_submissions_name_len;
--    (and likewise for the other four)
-- ---------------------------------------------------------------------------
alter table public.ecosystem_submissions drop constraint if exists ecosystem_submissions_name_len;
alter table public.ecosystem_submissions add constraint ecosystem_submissions_name_len
  check (char_length(name) <= 120) not valid;

alter table public.ecosystem_submissions drop constraint if exists ecosystem_submissions_email_len;
alter table public.ecosystem_submissions add constraint ecosystem_submissions_email_len
  check (char_length(email) <= 254) not valid;

alter table public.ecosystem_submissions drop constraint if exists ecosystem_submissions_phone_len;
alter table public.ecosystem_submissions add constraint ecosystem_submissions_phone_len
  check (char_length(phone) <= 40) not valid;

alter table public.ecosystem_submissions drop constraint if exists ecosystem_submissions_designation_len;
alter table public.ecosystem_submissions add constraint ecosystem_submissions_designation_len
  check (char_length(designation) <= 120) not valid;

alter table public.ecosystem_submissions drop constraint if exists ecosystem_submissions_message_len;
alter table public.ecosystem_submissions add constraint ecosystem_submissions_message_len
  check (char_length(message) <= 5000) not valid;

commit;
