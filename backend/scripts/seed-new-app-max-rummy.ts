/**
 * Seeds seed-data-app-max-rummy.json into Strapi as a published App.
 * Requires the `tag` field to already exist on the App content type
 * (schema.json change deployed + Strapi restarted) before running.
 *
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/seed-new-app-max-rummy.ts
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
  fs.readFileSync(path.join(__dirname, "..", "seed-data-app-max-rummy.json"), "utf-8")
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
  for (const app of data.apps) {
    try {
      const result = await post("apps?status=published", app);
      console.log(`  ✓ app: ${app.name} (id=${result.data.id}) [PUBLISHED]`);
    } catch (err) {
      console.log(`  ✗ app: ${app.name}: ${(err as Error).message}`);
    }
  }
  console.log("\nDone. Remember to update downloadUrl in Strapi Admin once you have the real link.");
}

main().catch((err) => { console.error(err.message); process.exit(1); });
