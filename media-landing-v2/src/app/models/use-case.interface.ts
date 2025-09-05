export interface UseCaseItem {
  id: string;
  title: string;
  summary: string;
  category: string; // one of categories
  image?: string; // optional image path
  status?: string; // e.g. Research in Progress
}
