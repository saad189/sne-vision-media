-- Migration: create table hero_slide
-- Depends on: 20251001_create_function_set_updated_at.sql

-- +goose Up
create table if not exists public.hero_slide (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  image_url text not null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_image_list_name on public.hero_slide (lower(name));

drop trigger if exists trg_image_list_updated_at on public.hero_slide;
create trigger trg_image_list_updated_at
before update on public.hero_slide
for each row
execute procedure public.set_updated_at();

-- +goose Down
-- Drop trigger first, then table
drop trigger if exists trg_image_list_updated_at on public.hero_slide;
drop table if exists public.hero_slide;