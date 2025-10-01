// Top minds (thought leaders quotes etc.)
export interface TopMindInput {
  name: string;
  title?: string | null;
  field?: string | null;
  quote?: string | null;
  quote_date?: string | null; // ISO date (date)
  profile_image_url?: string | null; // storage path
}

export interface TopMind extends TopMindInput {
  id: string;
  created_at: string;
  updated_at: string;
  profile_image_signed_url?: string | null; // transient signed URL
}
