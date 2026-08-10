import type { MetadataRoute } from "next";
import { APPS_STATIC, CATEGORIES_STATIC } from "@/app/lib/static-data";
import { getAllApps } from "@/app/lib/strapi";
import { getAllBlogPosts } from "@/app/lib/blog";
import type { AppEntry, BlogPostEntry } from "@/app/lib/types";

const BASE = "https://allyonoguru.com";

// Strapi-first, static-fallback: if Strapi is unreachable or has no
// published apps yet, fall back to the bundled static catalog.
async function getPublishedApps(): Promise<AppEntry[]> {
  try {
    const apps = await getAllApps();
    if (apps.length > 0) return apps;
  } catch {
    // Strapi unavailable — fall through to static data.
  }
  return APPS_STATIC.filter((a) => a.publishedAt !== null);
}

// Reads from repository content (see app/lib/blog.ts) — no fake fallback
// content belongs in a sitemap, so an unexpected read failure still
// resolves to an empty list rather than throwing.
async function getPublishedBlogPosts(): Promise<BlogPostEntry[]> {
  try {
    return await getAllBlogPosts();
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/blog`,           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.6 },
    { url: `${BASE}/all-yono-games-promocode`, lastModified: new Date(), changeFrequency: "daily", priority: 0.7 },
    { url: `${BASE}/about`,          lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/disclaimer`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE}/contact`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
  ];

  // DRAFT categories (publishedAt null) are intentionally excluded.
  // Coming-soon apps have no reviewable content yet — excluded until release.
  const publishedApps = await getPublishedApps();
  const appPages: MetadataRoute.Sitemap = publishedApps
    .filter((app) => !app.comingSoon)
    .map((app) => ({
      url: `${BASE}/${app.slug}`,
      lastModified: new Date(app.publishedAt!),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  // Most migrated posts have no genuine publishedAt (none was recoverable
  // from the available local source — see
  // phase3/ALLYONOGURU_STRAPI_TO_REPOSITORY_MIGRATION.md). Per the
  // portfolio's data-integrity rule, omit lastModified rather than
  // fabricate one via new Date(null) (which would silently report every
  // post as modified on 1970-01-01).
  const publishedBlogPosts = await getPublishedBlogPosts();
  const blogPages: MetadataRoute.Sitemap = publishedBlogPosts
    .map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      ...(post.publishedAt ? { lastModified: new Date(post.publishedAt) } : {}),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  // Categories are still static-data-driven (not yet migrated to Strapi);
  // only include ones that are actually published (non-draft).
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES_STATIC
    .filter((cat) => cat.publishedAt !== null)
    .map((cat) => ({
      url: `${BASE}/${cat.slug}`,
      lastModified: new Date(cat.publishedAt!),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));

  return [...staticPages, ...appPages, ...blogPages, ...categoryPages];
}
