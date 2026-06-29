import type { MetadataRoute } from "next";
import { APPS_STATIC, BLOG_POSTS_STATIC } from "@/app/lib/static-data";

const BASE = "https://allyonoguru.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/blog`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE}/about`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/disclaimer`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/contact`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  // Only include PUBLISHED apps (publishedAt non-null).
  // DRAFT categories (publishedAt null) are intentionally excluded.
  const appPages: MetadataRoute.Sitemap = APPS_STATIC
    .filter((app) => app.publishedAt !== null)
    .map((app) => ({
      url: `${BASE}/${app.slug}`,
      lastModified: new Date(app.publishedAt!),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS_STATIC
    .filter((post) => post.publishedAt !== null)
    .map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt!),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...staticPages, ...appPages, ...blogPages];
}
