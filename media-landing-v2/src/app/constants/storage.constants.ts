// Supabase Storage buckets. Images are public; manuscripts are private and need signed URLs.
export const IMAGES_BUCKET = 'VisionMediaBucket';
export const MANUSCRIPTS_BUCKET = 'VisionMediaPrivateBucket';

export const SIGNED_URL_TTL_SECONDS = 60 * 10;

export const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
export const MAX_MANUSCRIPT_BYTES = 15 * 1024 * 1024;
