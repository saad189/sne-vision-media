-- Migration: create table event_type
-- Depends on: 20251001_create_function_set_updated_at.sql

-- +goose Up
create table if not exists public.event_type (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text not null,
  description text,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint event_type_slug_unique unique (slug)
);

create unique index if not exists idx_event_type_slug on public.event_type (lower(slug));
create index if not exists idx_event_type_name on public.event_type (lower(name));

drop trigger if exists trg_event_type_updated_at on public.event_type;
create trigger trg_event_type_updated_at
before update on public.event_type
for each row
execute procedure public.set_updated_at();

-- +goose Down
drop trigger if exists trg_event_type_updated_at on public.event_type;
drop table if exists public.event_type;