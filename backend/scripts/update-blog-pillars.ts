/**
 * One-time update — re-reads ../seed-data-blog-pillars.json and applies
 * the latest content (now with internal links, canonicalURL, keywords)
 * onto the existing draft entries created by seed-blog-pillars.ts.
 *
 * Usage (from backend/):
 *   npx ts-node scripts/update-blog-pillars.ts
 *
 * Requires STRAPI_SEED_TOKEN env var (Settings → API Tokens → Full Access token).
 */

import fs from "fs";
import path from "path";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";
const TOKEN = process.env.STRAPI_SEED_TOKEN ?? "";

if (!TOKEN) {
  console.error(
    "Error: set STRAPI_SEED_TOKEN to a Strapi API token with full access.\n" +
    "  Admin Panel → Settings → API Tokens → Create Full Access token"
  );
  process.exit(1);
}

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "seed-data-blog-pillars.json"), "utf-8")
);

interface FindResponse {
  data: { documentId: string; slug: string }[];
}

async function findBySlug(slug: string) {
  const url = `${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${encodeURIComponent(slug)}&status=draft`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GET ${url} failed (${res.status}): ${text}`);
  }
  const json = (await res.json()) as FindResponse;
  return json.data[0] ?? null;
}

async function update(documentId: string, body: unknown) {
  const res = await fetch(`${STRAPI_URL}/api/blog-posts/${documentId}?status=draft`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ data: body }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PUT failed (${res.status}): ${text}`);
  }

  return res.json();
}

async function main() {
  console.log(`Updating ${data.posts.length} blog posts with internal links + SEO fields…\n`);

  for (const post of data.posts) {
    const { slug, ...fields } = post;
    try {
      const existing = await findBySlug(slug);
      if (!existing) {
        console.log(`  ✗ ${slug}: not found (did you run seed-blog-pillars.ts first?)`);
        continue;
      }
      await update(existing.documentId, fields);
      console.log(`  ✓ ${slug} updated`);
    } catch (err) {
      console.log(`  ✗ ${slug}: ${(err as Error).message}`);
    }
  }

  console.log("\nUpdate complete. Still drafts — review and publish from Strapi Admin.");
}

main().catch((err) => {
  console.error("Update failed:", err.message);
  process.exit(1);
});
