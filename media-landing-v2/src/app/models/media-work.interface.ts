export type MediaWorkType = 'projects' | 'use-cases';
export type MediaWorkStatus = 'not_started' | 'in_progress' | 'complete';

export interface MediaWork {
  id: string; // UUID from Supabase
  name: string; // not null
  title?: string | null;
  description?: string | null;
  manuscriptUrl?: string | null;
  /** Ephemeral signed URL (frontend convenience) generated from manuscriptUrl storage path */
  manuscriptSignedUrl?: string | null;
  youtubeUrl?: string | null;
  githubUrl?: string | null;
  imageUrl?: string | null;
  /** Ephemeral signed URL (frontend convenience) generated from imageUrl storage path */
  imageSignedUrl?: string | null;
  type: MediaWorkType;
  // New categorization + workflow fields
  status?: MediaWorkStatus; // defaults to not_started in DB
  categoryId?: string | null; // FK to categories.id
  categoryName?: string | null; // joined convenience field (categories.name)
  ownerId?: string | null; // user id of creator (FK to auth.users.id)
  created_at?: string; // ISO timestamp
  updated_at?: string; // ISO timestamp
}
