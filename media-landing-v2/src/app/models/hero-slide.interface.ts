// Hero slide (generic hero slide repository)
export interface HeroSlideInput {
  name: string;
  description?: string | null;
  image_url: string; // stored path or full path cleaned later
}

export interface HeroSlideItem extends HeroSlideInput {
  id: string;
  created_at: string;
  updated_at: string;
  image_signed_url?: string | null; // transient field produced client-side
}
