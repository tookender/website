import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "src/posts");

export type Author = {
  name: string;
  picture: string;
};

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string;
  time: string;
  coverImage: string;
  author: Author;
  description: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
