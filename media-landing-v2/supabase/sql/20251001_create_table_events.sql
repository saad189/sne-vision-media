-- Migration: create table events
-- Depends on: 20251001_create_table_event_type.sql

-- +goose Up
create table if not exists public.events (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  location text,
  event_type_id uuid not null references public.event_type(id) on delete restrict,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint events_time_check check (
    ends_at is null
    or starts_at is null
    or ends_at >= starts_at
  )
);

create index if not exists idx_events_name on public.events (lower(name));
create index if not exists idx_events_event_type_id on public.events (event_type_id);
create index if not exists idx_events_starts_at on public.events (starts_at);

drop trigger if exists trg_events_updated_at on public.events;
create trigger trg_events_updated_at
before update on public.events
for each row
execute procedure public.set_updated_at();

-- +goose Down
drop trigger if exists trg_events_updated_at on public.events;
drop table if exists public.events;