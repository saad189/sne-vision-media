-- Migration: admin allow-list (public.admins) + public.is_admin()
--
-- ============================================================================
-- RUN ORDER (Supabase dashboard -> SQL Editor). Every file is safe to re-run.
--
--   1. 20261120_01_create_admins_and_is_admin.sql        (this file)
--   2. Insert the first admin row (statement below).
--   3. 20261120_02_admin_only_write_policies.sql
--   4. 20261120_03_PROPOSED_media_works_categories_storage_policies.sql
--      ONLY after comparing it with the live policies (see its header).
--   5. Deploy the Angular build whose admin guard calls rpc('is_admin').
--
-- WARNING: insert the admin row (step 2) BEFORE running step 3. Step 3 replaces
-- the "any authenticated user can write" policies with admin-only ones; without
-- a row in public.admins the existing admin loses write access immediately.
-- (Step 3 refuses to run while public.admins is empty, as a safety net.)
--
-- Step 2, the first admin. Find the user id under Authentication -> Users:
--
--   insert into public.admins (user_id)
--   values ('00000000-0000-0000-0000-000000000000')  -- <- the admin's auth.users.id
--   on conflict (user_id) do nothing;
--
-- Admins are managed only from the SQL Editor / service role: there are
-- deliberately no client-side write policies on public.admins.
-- ============================================================================

begin;

create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  created_at timestamptz not null default now()
);

comment on table public.admins is 'Admin allow-list. Rows are added by hand from the SQL Editor; no client write access.';

-- RLS on with no policies: anon/authenticated can neither read nor write it.
alter table public.admins enable row level security;
revoke all on table public.admins from anon, authenticated;

-- security definer so it can read public.admins despite RLS; empty search_path
-- so every reference is schema-qualified and cannot be hijacked.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admins a where a.user_id = (select auth.uid())
  );
$$;

comment on function public.is_admin() is 'True when the calling user is in public.admins. Used by RLS policies and the admin route guard.';

revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

commit;
