/**
 * Seeds seed-data-posts-v3.json into Strapi as DRAFTS.
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/seed-posts-v3.ts
 */
import fs from "fs";
import path from "path";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1338";
const TOKEN = process.env.STRAPI_SEED_TOKEN ?? "";

if (!TOKEN) {
  console.error("Error: set STRAPI_SEED_TOKEN to a Full Access API token.");
  process.exit(1);
}

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "seed-data-posts-v3.json"), "utf-8")
);

interface StrapiEntryResponse { data: { id: number } }

async function post(endpoint: string, body: unknown): Promise<StrapiEntryResponse> {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
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
  console.log("\nDone. Review and publish from Strapi Admin → Content Manager → Blog Post.");
}

main().catch((err) => { console.error(err.message); process.exit(1); });
