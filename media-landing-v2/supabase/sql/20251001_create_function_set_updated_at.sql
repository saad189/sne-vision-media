-- Migration: create helper function set_updated_at
-- Description: Adds uuid extension (if needed) and reusable updated_at trigger function.
-- NOTE: Supabase runs migrations in filename order. Ensure this file runs before tables needing the trigger.

-- +goose Up
create extension if not exists "uuid-ossp";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

-- +goose Down
-- Dropping the function is safe; tables depending on triggers must have their triggers dropped first if reversing fully.
drop function if exists public.set_updated_at();
