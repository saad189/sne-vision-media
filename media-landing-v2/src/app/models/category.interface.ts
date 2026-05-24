export interface Category {
  id: string; // uuid
  name: string;
  slug?: string; // generated in DB
  description?: string | null;
  created_at?: string;
  updated_at?: string;
}
