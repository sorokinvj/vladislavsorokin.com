export interface Post {
  slug: string;
  isFeatured?: boolean;
  title: string;
  lead?: string;
  coverImage: string;
  thumbnail?: string;
  ogImage: string;
  date: Date;
  content: string;
}
