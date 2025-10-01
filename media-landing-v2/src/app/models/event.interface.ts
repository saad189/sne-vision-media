// Core Event related interfaces matching Supabase schema (see migrations 20251001_create_table_events.sql & event_type)

export interface EventTypeInput {
  name: string;
  slug: string; // unique
  description?: string | null;
}

export interface EventType extends EventTypeInput {
  id: string; // uuid
  created_at: string;
  updated_at: string;
}

export interface EventInput {
  name: string;
  description?: string | null;
  location?: string | null;
  event_type_id: string; // fk to event_type.id
  starts_at?: string | null; // ISO string (timestamptz)
  ends_at?: string | null; // ISO string (timestamptz)
}

export interface Event extends EventInput {
  id: string;
  created_at: string;
  updated_at: string;
  event_type?: EventType; // when joined
}

// Retain previous lightweight tile interface for UI components
// EventTile interface removed: components now consume full Event objects directly.
