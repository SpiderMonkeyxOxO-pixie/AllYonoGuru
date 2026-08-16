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
    // No lastModified: this route has no genuine, stable source-content
    // modification date of its own (it's a generated hub grouping already-
    // published blog posts by app/lib/guide-taxonomy.ts, not a stored
    // content record with its own timestamp). Per master spec data-
    // integrity rules, omit rather than fabricate a date via new Date() —
    // that would report the current build time as a content change on
    // every build, which is exactly the pattern the spec prohibits
    // elsewhere (AllYonoUpdate.com's sitemap `lastmod` issue, §14).
    { url: `${BASE}/guides`,         changeFrequency: "weekly",  priority: 0.8 },
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
  //
  // all-rummy-games-list-android is excluded here even though
  // getAllBlogPosts() sometimes includes it (its own narrow, best-effort
  // Strapi fallback in app/lib/blog.ts) — that inclusion is conditional on
  // Strapi being reachable at request time, which would make this one URL
  // flicker in and out of the sitemap. It gets its own fixed entry below
  // instead, so the sitemap is deterministic regardless of Strapi's
  // momentary availability.
  const publishedBlogPosts = await getPublishedBlogPosts();
  const blogPages: MetadataRoute.Sitemap = publishedBlogPosts
    .filter((post) => post.slug !== "all-rummy-games-list-android")
    .map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      ...(post.publishedAt ? { lastModified: new Date(post.publishedAt) } : {}),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  // Deferred article (see phase3/ALLYONOGURU_STRAPI_TO_REPOSITORY_MIGRATION.md
  // "Addendum"): all-rummy-games-list-android has no recoverable source
  // content anywhere and was deliberately not migrated into content/blog/
  // — it stays live via a narrow, isolated Strapi fallback in
  // app/lib/blog.ts, per an explicit owner decision. The live URL remains
  // canonical and indexable, so it must not disappear from the sitemap
  // just because its content source is temporarily Strapi. Hardcoded here
  // (not fetched from Strapi) so sitemap generation itself stays fully
  // Strapi-independent. The date is genuine, not invented — read directly
  // from this post's own live production JSON-LD datePublished.
  const deferredBlogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE}/blog/all-rummy-games-list-android`,
      lastModified: new Date("2026-07-01T11:27:02.213Z"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

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

  return [...staticPages, ...appPages, ...blogPages, ...deferredBlogPages, ...categoryPages];
}
