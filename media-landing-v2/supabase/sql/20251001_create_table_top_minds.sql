-- Migration: create table top_minds
-- Depends on: 20251001_create_function_set_updated_at.sql

-- +goose Up
create table if not exists public.top_minds (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  title text,
  field text,
  quote text,
  quote_date date,
  profile_image_url text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists idx_top_minds_name on public.top_minds (lower(name));
create index if not exists idx_top_minds_field on public.top_minds (lower(field));

drop trigger if exists trg_top_minds_updated_at on public.top_minds;
create trigger trg_top_minds_updated_at
before update on public.top_minds
for each row
execute procedure public.set_updated_at();

-- +goose Down
drop trigger if exists trg_top_minds_updated_at on public.top_minds;
drop table if exists public.top_minds;