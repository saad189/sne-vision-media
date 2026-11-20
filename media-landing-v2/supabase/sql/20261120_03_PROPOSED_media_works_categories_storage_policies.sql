-- ============================================================================
-- PROPOSED - REVIEW BEFORE RUNNING. NOT A DROP-IN MIGRATION.
--
-- media_works, categories and the storage buckets VisionMediaBucket and
-- VisionMediaPrivateBucket were created by hand in the dashboard. Their live
-- policies are not in this repo, and this file was written WITHOUT SIGHT of
-- them. Compare with the live policies before running anything here:
--
--   select schemaname, tablename, policyname, cmd, roles, qual, with_check
--   from pg_policies
--   where (schemaname = 'public' and tablename in ('media_works', 'categories'))
--      or (schemaname = 'storage' and tablename = 'objects')
--   order by schemaname, tablename, policyname;
--
-- RLS policies are permissive and OR-ed together: any existing policy that
-- lets every authenticated user write will STILL let them write after this
-- file runs. Drop those by name (drop policy "<name>" on <table>;) as part of
-- applying this. Run only after 20261120_01 + an admin row exist.
--
-- What it proposes: public read where the public site needs it, admin-only
-- insert/update/delete everywhere. Column names (inferred from
-- media-work.service.ts / category.service.ts) are not referenced, so the
-- policies do not depend on them.
--
-- DECISION FOR THE USER - private manuscripts are effectively public:
--   The public site (MediaWorkService.addSignedUrls) calls createSignedUrl on
--   VisionMediaPrivateBucket as an ANONYMOUS visitor. Creating a signed URL
--   requires SELECT on storage.objects for that role, so the bucket needs an
--   anon SELECT policy for manuscript links to keep working. With it, anyone
--   holding the anon key can sign/download any manuscript, i.e. the bucket is
--   private in name only. Section 3b below KEEPS that behaviour so nothing
--   breaks. If manuscripts should really be private, delete policy
--   "svm_private_anon_read" and serve manuscripts some other way (e.g. an Edge
--   Function that signs URLs for allowed works only).
--
-- Also noticed (code owned by another change, not fixed here):
--   media-work-form.component.ts uploads manuscripts AND images to
--   VisionMediaBucket (the PUBLIC bucket), while MediaWorkService signs
--   manuscript links against VisionMediaPrivateBucket. New manuscripts may be
--   landing in the public bucket and their links failing to sign.
--
-- Safe to re-run (every policy is dropped before it is created).
-- ============================================================================

begin;

-- ---------------------------------------------------------------------------
-- 1. media_works: public read, admin writes
-- ---------------------------------------------------------------------------
alter table public.media_works enable row level security;

drop policy if exists "Public read media_works" on public.media_works;
drop policy if exists "Admin insert media_works" on public.media_works;
drop policy if exists "Admin update media_works" on public.media_works;
drop policy if exists "Admin delete media_works" on public.media_works;
create policy "Public read media_works" on public.media_works
  for select to anon, authenticated using (true);
create policy "Admin insert media_works" on public.media_works
  for insert to authenticated with check ((select public.is_admin()));
create policy "Admin update media_works" on public.media_works
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admin delete media_works" on public.media_works
  for delete to authenticated using ((select public.is_admin()));

-- ---------------------------------------------------------------------------
-- 2. categories: public read, admin writes
-- ---------------------------------------------------------------------------
alter table public.categories enable row level security;

drop policy if exists "Public read categories" on public.categories;
drop policy if exists "Admin insert categories" on public.categories;
drop policy if exists "Admin update categories" on public.categories;
drop policy if exists "Admin delete categories" on public.categories;
create policy "Public read categories" on public.categories
  for select to anon, authenticated using (true);
create policy "Admin insert categories" on public.categories
  for insert to authenticated with check ((select public.is_admin()));
create policy "Admin update categories" on public.categories
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "Admin delete categories" on public.categories
  for delete to authenticated using ((select public.is_admin()));

-- ---------------------------------------------------------------------------
-- 3a. storage: VisionMediaBucket (public images)
--     Public URLs need no policy, but hero-slide.service.ts / top-minds.service.ts
--     call createSignedUrl on this bucket as anon, which needs SELECT.
-- ---------------------------------------------------------------------------
drop policy if exists "svm_public_read" on storage.objects;
drop policy if exists "svm_public_admin_insert" on storage.objects;
drop policy if exists "svm_public_admin_update" on storage.objects;
drop policy if exists "svm_public_admin_delete" on storage.objects;
create policy "svm_public_read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'VisionMediaBucket');
create policy "svm_public_admin_insert" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'VisionMediaBucket' and (select public.is_admin()));
create policy "svm_public_admin_update" on storage.objects
  for update to authenticated
  using (bucket_id = 'VisionMediaBucket' and (select public.is_admin()))
  with check (bucket_id = 'VisionMediaBucket' and (select public.is_admin()));
create policy "svm_public_admin_delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'VisionMediaBucket' and (select public.is_admin()));

-- ---------------------------------------------------------------------------
-- 3b. storage: VisionMediaPrivateBucket (manuscripts) - see DECISION in header
-- ---------------------------------------------------------------------------
drop policy if exists "svm_private_anon_read" on storage.objects;
drop policy if exists "svm_private_admin_read" on storage.objects;
drop policy if exists "svm_private_admin_insert" on storage.objects;
drop policy if exists "svm_private_admin_update" on storage.objects;
drop policy if exists "svm_private_admin_delete" on storage.objects;
-- Keeps today's behaviour (anonymous visitors can sign manuscript URLs).
-- Delete this one policy to make the bucket genuinely private.
create policy "svm_private_anon_read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'VisionMediaPrivateBucket');
-- Redundant while svm_private_anon_read exists; keeps admin read access if it is removed.
create policy "svm_private_admin_read" on storage.objects
  for select to authenticated
  using (bucket_id = 'VisionMediaPrivateBucket' and (select public.is_admin()));
create policy "svm_private_admin_insert" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'VisionMediaPrivateBucket' and (select public.is_admin()));
create policy "svm_private_admin_update" on storage.objects
  for update to authenticated
  using (bucket_id = 'VisionMediaPrivateBucket' and (select public.is_admin()))
  with check (bucket_id = 'VisionMediaPrivateBucket' and (select public.is_admin()));
create policy "svm_private_admin_delete" on storage.objects
  for delete to authenticated
  using (bucket_id = 'VisionMediaPrivateBucket' and (select public.is_admin()));

commit;
