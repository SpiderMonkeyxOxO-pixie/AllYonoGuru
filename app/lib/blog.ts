import fs from "fs";
import path from "path";
import type { BlogPostEntry } from "./types";
import { getBlogPostBySlug as getStrapiBlogPostBySlug } from "./strapi";

// Phase 3 Strapi-to-repository migration (see
// phase3/ALLYONOGURU_STRAPI_TO_REPOSITORY_MIGRATION.md): the 27 blog posts
// with a confirmed local source now live as one JSON file per post in
// content/blog/, read from disk the same way app/lib/promo-codes.ts already
// reads promo-code.txt — no Strapi call, no network request, no dependency
// on the Guru Strapi backend being reachable.
//
// One live post, all-rummy-games-list-android, has NO recovered source
// content anywhere in this repository or its seed-data files (see the
// migration report's "content parity" and "missing source" sections) — its
// body was never rewritten from a guess. It is deliberately NOT present in
// content/blog/ and is served via a narrow, explicit Strapi fallback below
// so the live URL does not break. This is the only remaining Strapi
// dependency for blog content; removing it requires recovering that post's
// actual authored content first.
const CONTENT_DIR = path.join(process.cwd(), "content/blog");

let cache: BlogPostEntry[] | null = null;

function loadLocalPosts(): BlogPostEntry[] {
  if (cache) return cache;

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".json"));
  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const record = JSON.parse(raw);
      return record;
    })
    // Stable order: alphabetical by slug. No genuine publishedAt exists
    // locally for these posts (see migration report) so there is no
    // date-based order to preserve from the old Strapi-backed sort.
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((record, index): BlogPostEntry => ({
      id: index + 1,
      slug: record.slug,
      title: record.title,
      excerpt: record.excerpt,
      content: record.content,
      coverImage: record.coverImage ?? undefined,
      author: record.author,
      tag: record.tag ?? undefined,
      publishedAt: record.publishedAt ?? null,
      seo: record.seo,
    }));

  cache = posts;
  return posts;
}

export async function getAllBlogPosts(): Promise<BlogPostEntry[]> {
  const localPosts = loadLocalPosts();

  // Best-effort: include the one unmigrated post if the Strapi backend
  // happens to be reachable. If it isn't, the other 27 posts still render
  // — the index degrades gracefully instead of failing outright.
  try {
    const remaining = await getStrapiBlogPostBySlug("all-rummy-games-list-android");
    if (remaining && !localPosts.some((p) => p.slug === remaining.slug)) {
      return [...localPosts, remaining];
    }
  } catch {
    // Strapi unavailable — the 27 locally-migrated posts are unaffected.
  }

  return localPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostEntry | null> {
  const localPosts = loadLocalPosts();
  const local = localPosts.find((p) => p.slug === slug);
  if (local) return local;

  // Narrow fallback, scoped to the single known content gap — not a
  // blanket "any unknown slug tries Strapi" behavior.
  if (slug === "all-rummy-games-list-android") {
    try {
      return await getStrapiBlogPostBySlug(slug);
    } catch {
      return null;
    }
  }

  return null;
}
