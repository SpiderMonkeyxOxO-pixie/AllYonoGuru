/**
 * One-time import — reads ../seed-data-new-posts.json and creates
 * Blog Post entries in Strapi as DRAFTS (not published).
 * Review and publish each one from Strapi Admin → Content Manager → Blog Post.
 *
 * Usage (from backend/):
 *   STRAPI_SEED_TOKEN=<token> npx ts-node scripts/seed-new-posts.ts
 *
 * Requires STRAPI_SEED_TOKEN env var (Settings → API Tokens → Full Access token).
 * Requires STRAPI_URL env var (defaults to http://localhost:1338).
 */

import fs from "fs";
import path from "path";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1338";
const TOKEN = process.env.STRAPI_SEED_TOKEN ?? "";

if (!TOKEN) {
  console.error(
    "Error: set STRAPI_SEED_TOKEN to a Strapi API token with full access.\n" +
    "  Admin Panel → Settings → API Tokens → Create Full Access token"
  );
  process.exit(1);
}

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "seed-data-new-posts.json"), "utf-8")
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
  console.log(`Importing ${data.posts.length} draft blog posts to ${STRAPI_URL}…\n`);

  for (const post_ of data.posts) {
    try {
      const result = await post("blog-posts?status=draft", post_);
      console.log(`  ✓ ${post_.title} (id=${result.data.id}) [DRAFT]`);
    } catch (err) {
      console.log(`  ✗ ${post_.title}: ${(err as Error).message}`);
    }
  }

  console.log("\nImport complete. All entries are DRAFTS — review and publish from Strapi Admin.");
}

main().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
