import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type NewsMeta = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author?: string;
  image?: string;
  imageAlt?: string;
  draft?: boolean;
};

export type NewsPost = NewsMeta & { html: string };

const NEWS_DIR = path.join(process.cwd(), "content", "news");

function readFiles(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md"));
}

function toMeta(file: string): NewsMeta & { body: string } {
  const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? "Untitled"),
    date: String(data.date ?? ""),
    category: String(data.category ?? "News"),
    excerpt: String(data.excerpt ?? ""),
    author: data.author ? String(data.author) : undefined,
    image: data.image ? String(data.image) : undefined,
    imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
    draft: data.draft === true,
    body: content,
  };
}

/** All published posts, newest first. Drafts are never returned. */
export function getAllPosts(): NewsMeta[] {
  return readFiles()
    .map(toMeta)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ body, ...meta }) => meta);
}

export function getPost(slug: string): NewsPost | null {
  const file = `${slug}.md`;
  if (!readFiles().includes(file)) return null;
  const { body, ...meta } = toMeta(file);
  if (meta.draft) return null;
  return { ...meta, html: marked.parse(body, { async: false }) as string };
}

export function getCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((p) => p.category))).sort();
}

/** 17 March 2026 */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}
