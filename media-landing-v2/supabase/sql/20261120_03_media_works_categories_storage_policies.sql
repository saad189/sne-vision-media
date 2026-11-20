-- Migration: admin-only writes on media_works, categories and both storage buckets
-- Depends on: 20261120_01 + at least one row in public.admins.
-- Safe to re-run. Applied to the live project as written.
--
-- media_works, categories and the buckets were created by hand in the dashboard,
-- so this file first drops the hand-made policies by their live names.
--
-- Manuscripts (VisionMediaPrivateBucket): anonymous visitors may read, because the
-- public site signs manuscript URLs as an anonymous visitor
-- (MediaWorkService.addSignedUrls). Decided by the owner: visitors can open
-- manuscripts. To make them private, drop policy "svm_private_anon_read" and
-- serve manuscripts another way.

begin;

-- ---------------------------------------------------------------------------
-- 1. media_works: public read, admin writes
-- ---------------------------------------------------------------------------
alter table public.media_works enable row level security;

-- hand-made policies (any authenticated user / row owner could write)
drop policy if exists "Authenticated delete media works" on public.media_works;
drop policy if exists "Authenticated insert media works" on public.media_works;
drop policy if exists "Authenticated update media works" on public.media_works;
drop policy if exists "Delete own media works" on public.media_works;
drop policy if exists "Insert own media works" on public.media_works;
drop policy if exists "Update own media works" on public.media_works;
drop policy if exists "Public read media works" on public.media_works;

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

-- hand-made policies
drop policy if exists "Allow modify categories" on public.categories;
drop policy if exists "Allow read categories" on public.categories;

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
--     Public URLs need no policy. hero-slide.service.ts / top-minds.service.ts
--     call createSignedUrl as anon on paths under images/, which needs SELECT there.
--     Admins get SELECT on the whole bucket for upload previews.
-- ---------------------------------------------------------------------------
-- hand-made policies
drop policy if exists "VisionMediaBucket Auth Delete" on storage.objects;
drop policy if exists "VisionMediaBucket Auth Insert" on storage.objects;
drop policy if exists "VisionMediaBucket Auth Select" on storage.objects;
drop policy if exists "VisionMediaBucket Auth Update" on storage.objects;
drop policy if exists "Give anon users access to JPG images in folder 12jhfwm_0" on storage.objects;

drop policy if exists "svm_public_read" on storage.objects;
drop policy if exists "svm_public_read_images" on storage.objects;
drop policy if exists "svm_public_admin_read" on storage.objects;
drop policy if exists "svm_public_admin_insert" on storage.objects;
drop policy if exists "svm_public_admin_update" on storage.objects;
drop policy if exists "svm_public_admin_delete" on storage.objects;
create policy "svm_public_read_images" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'VisionMediaBucket' and lower((storage.foldername(name))[1]) = 'images');
create policy "svm_public_admin_read" on storage.objects
  for select to authenticated
  using (bucket_id = 'VisionMediaBucket' and (select public.is_admin()));
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
-- 3b. storage: VisionMediaPrivateBucket (manuscripts)
--     The bucket had no policies at all before this file.
-- ---------------------------------------------------------------------------
drop policy if exists "svm_private_anon_read" on storage.objects;
drop policy if exists "svm_private_admin_read" on storage.objects;
drop policy if exists "svm_private_admin_insert" on storage.objects;
drop policy if exists "svm_private_admin_update" on storage.objects;
drop policy if exists "svm_private_admin_delete" on storage.objects;
create policy "svm_private_anon_read" on storage.objects
  for select to anon, authenticated
  using (bucket_id = 'VisionMediaPrivateBucket');
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

-- ---------------------------------------------------------------------------
-- 4. Supabase security advisor: pin the trigger function's search_path
-- ---------------------------------------------------------------------------
alter function public.set_updated_at() set search_path = '';

commit;
