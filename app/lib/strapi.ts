import type { AppEntry, CategoryEntry, GlobalConfig, BlogPostEntry } from "./types";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? "";

async function fetchAPI<T>(
  path: string,
  params: Record<string, string> = {}
): Promise<T> {
  const query = new URLSearchParams(params).toString();
  const url = `${STRAPI_URL}/api${path}${query ? `?${query}` : ""}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${res.status} ${url}`);
  }

  const json = await res.json();
  return json.data as T;
}

export async function getAllApps(): Promise<AppEntry[]> {
  return fetchAPI<AppEntry[]>("/apps", {
    "populate[seo]": "true",
    "populate[faq]": "true",
    "populate[compliance]": "true",
    "populate[links]": "true",
    "filters[publishedAt][$notNull]": "true",
    "sort": "navOrder:asc",
  });
}

export async function getAppBySlug(slug: string): Promise<AppEntry | null> {
  const results = await fetchAPI<AppEntry[]>("/apps", {
    "filters[slug][$eq]": slug,
    "populate[seo]": "true",
    "populate[faq]": "true",
    "populate[compliance]": "true",
    "populate[links]": "true",
  });
  return results[0] ?? null;
}

export async function getAllCategories(): Promise<CategoryEntry[]> {
  return fetchAPI<CategoryEntry[]>("/categories", {
    "populate[seo]": "true",
    "populate[faq]": "true",
    "populate[compliance]": "true",
    "populate[apps][populate]": "seo",
    "filters[publishedAt][$notNull]": "true",
    "sort": "navOrder:asc",
  });
}

export async function getCategoryBySlug(
  slug: string
): Promise<CategoryEntry | null> {
  const results = await fetchAPI<CategoryEntry[]>("/categories", {
    "filters[slug][$eq]": slug,
    "populate[seo]": "true",
    "populate[faq]": "true",
    "populate[compliance]": "true",
    "populate[apps][populate]": "*",
  });
  return results[0] ?? null;
}

// Strapi returns the coverImage media field as an object with a
// (usually relative) `url`. Flatten it to the absolute URL string
// that BlogPostEntry.coverImage expects.
function resolveCoverImage<T extends { coverImage?: unknown }>(post: T): T {
  const media = post.coverImage as { url?: string } | null | undefined;
  if (!media?.url) return { ...post, coverImage: undefined };
  const url = media.url.startsWith("http") ? media.url : `${STRAPI_URL}${media.url}`;
  return { ...post, coverImage: url };
}

export async function getAllBlogPosts(): Promise<BlogPostEntry[]> {
  const posts = await fetchAPI<BlogPostEntry[]>("/blog-posts", {
    "populate[seo]": "true",
    "populate[coverImage]": "true",
    "filters[publishedAt][$notNull]": "true",
    "sort": "publishedAt:desc",
  });
  return posts.map(resolveCoverImage);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostEntry | null> {
  const results = await fetchAPI<BlogPostEntry[]>("/blog-posts", {
    "filters[slug][$eq]": slug,
    "populate[seo]": "true",
    "populate[coverImage]": "true",
  });
  const post = results[0];
  return post ? resolveCoverImage(post) : null;
}

export async function getGlobalConfig(): Promise<GlobalConfig | null> {
  try {
    return await fetchAPI<GlobalConfig>("/global", {
      "populate[navApps]": "true",
      "populate[navCategories]": "true",
    });
  } catch {
    return null;
  }
}
