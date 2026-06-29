/**
 * One-time import — reads ../seed-data-blog-pillars.json and creates
 * matching Blog Post entries in Strapi as DRAFTS (not published).
 * Review and publish each one from Strapi Admin → Content Manager → Blog Post.
 *
 * Usage (from backend/):
 *   npx ts-node scripts/seed-blog-pillars.ts
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

interface StrapiEntryResponse {
  data: { id: number };
}

async function post(endpoint: string, body: unknown): Promise<StrapiEntryResponse> {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ data: body }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /api/${endpoint} failed (${res.status}): ${text}`);
  }

  return res.json() as Promise<StrapiEntryResponse>;
}

async function main() {
  console.log(`Importing ${data.posts.length} draft blog posts…\n`);

  for (const post_ of data.posts) {
    try {
      const result = await post("blog-posts", post_);
      console.log(`  ✓ ${post_.title} (id=${result.data.id}) [DRAFT]`);
    } catch (err) {
      console.log(`  ✗ ${post_.title}: ${(err as Error).message}`);
    }
  }

  console.log("\nBlog pillar import complete. All entries are DRAFTS — review and publish from Strapi Admin.");
}

main().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
