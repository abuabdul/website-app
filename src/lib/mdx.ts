import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostFrontmatter } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
      const { data, content } = matter(raw);
      const frontmatter = data as BlogPostFrontmatter;
      const stats = readingTime(content);

      return {
        ...frontmatter,
        slug,
        readingTime: stats.text,
        wordCount: stats.words,
      } satisfies BlogPost;
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { frontmatter: BlogPostFrontmatter; content: string } {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as BlogPostFrontmatter, content };
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tagSet = new Set(posts.flatMap((p) => p.tags));
  return Array.from(tagSet).sort();
}

export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}
