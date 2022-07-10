type Tag = "code" | "explanation" | "insight";
export interface Post {
  slug: string;
  isFeatured?: boolean;
  title: string;
  lead?: string;
  tag: Tag;
  coverImage: string;
  thumbnail?: string;
  ogImage: string;
  date: Date;
  content: string;
}
