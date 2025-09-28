export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string; // reused categories set (subset)
  badges: string[]; // e.g. ['YouTube','GitHub']
  status?: string; // optional stage / progress
}
