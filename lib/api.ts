import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { Post } from "types/post";
import { sortByKeys } from "./sortByKeys";

const postsDirectory = join(process.cwd(), "_posts");
const pagesDirectory = join(process.cwd(), "_pages");

export function getPostSlugs() {
  const postsDirContent = fs.readdirSync(postsDirectory, {
    withFileTypes: true,
  });
  return postsDirContent
    .filter((item) => item.isFile())
    .map((file) => file.name)
    .map((fileName) => fileName.replace(/\.mdx?$/, ""));
}

type PostKeys = keyof Post;

export function getPostBySlug(slug: string, fields: PostKeys[]): Post {
  const fullPath = join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (!fields.length) {
    return {
      ...data,
      slug,
    } as Post;
  } else {
    let dataFieldsTempObj = fields.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: data[curr] ?? null,
        slug,
      }),
      {} as Post
    );

    if (fields.includes("content")) {
      dataFieldsTempObj = { ...dataFieldsTempObj, content };
    }

    return dataFieldsTempObj;
  }
}

type PostSortType = "isFeatured" | "date";

export function getAllPosts({
  fields,
  sortedBy,
}: {
  fields?: PostKeys[];
  sortedBy?: PostSortType[];
} = {}): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields ?? []));
  if (sortedBy) {
    sortByKeys(posts, sortedBy);
  }
  return posts;
}

export function getMainPageContent() {
  const fullPath = join(pagesDirectory, `main-page.mdx`);
  const mainPageContentFile = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(mainPageContentFile);
  return { data, content };
}
