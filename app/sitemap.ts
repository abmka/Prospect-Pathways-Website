import type { MetadataRoute } from "next";
import { getAllPosts } from "../lib/news";
import { site } from "../site.config";

const STATIC: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/our-team", priority: 0.7, changeFrequency: "monthly" },
  { path: "/our-mission", priority: 0.6, changeFrequency: "yearly" },
  { path: "/our-vision", priority: 0.6, changeFrequency: "yearly" },
  { path: "/our-values", priority: 0.6, changeFrequency: "yearly" },
  { path: "/what-we-do", priority: 0.9, changeFrequency: "monthly" },
  { path: "/supported-accommodation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/for-landlords", priority: 0.9, changeFrequency: "monthly" },
  { path: "/news", priority: 0.7, changeFrequency: "weekly" },
  { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
  { path: "/contact-us", priority: 0.8, changeFrequency: "yearly" },
  { path: "/make-a-referral", priority: 0.9, changeFrequency: "yearly" },
  { path: "/landlord-enquiry", priority: 0.8, changeFrequency: "yearly" },
  { path: "/languages", priority: 0.6, changeFrequency: "yearly" },
  { path: "/accessibility", priority: 0.4, changeFrequency: "yearly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/safeguarding", priority: 0.4, changeFrequency: "yearly" },
  { path: "/complaints", priority: 0.4, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = STATIC.map((s) => ({
    url: `${site.url}${s.path}`,
    lastModified: now,
    changeFrequency: s.changeFrequency,
    priority: s.priority,
  }));
  const posts = getAllPosts().map((p) => ({
    url: `${site.url}/news/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
