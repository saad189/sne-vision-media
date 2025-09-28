export type MediaWorkType = 'projects' | 'use-cases';

export interface MediaWork {
  id: string; // UUID from Supabase
  name: string; // not null
  title?: string | null;
  description?: string | null;
  manuscriptUrl?: string | null;
  youtubeUrl?: string | null;
  githubUrl?: string | null;
  imageUrl?: string | null;
  type: MediaWorkType;
  created_at?: string; // ISO timestamp
  updated_at?: string; // ISO timestamp
}
