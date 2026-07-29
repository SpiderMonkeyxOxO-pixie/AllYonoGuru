/**
 * Adds a Win Rummy row to the promo-code content type (all slots empty —
 * "Not released yet" — until a real code exists).
 *
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/seed-promo-win-rummy.ts
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
  fs.readFileSync(path.join(__dirname, "..", "seed-data-promo-win-rummy.json"), "utf-8")
);

async function post(endpoint: string, body: unknown): Promise<{ data: { id: number } }> {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ data: body }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`POST /api/${endpoint} failed (${res.status}): ${text}`);
  }
  return res.json() as Promise<{ data: { id: number } }>;
}

async function main() {
  for (const entry of data.entries) {
    try {
      const result = await post("promo-codes", entry);
      console.log(`  ✓ ${entry.appName} (id=${result.data.id})`);
    } catch (err) {
      console.log(`  ✗ ${entry.appName}: ${(err as Error).message}`);
    }
  }
}

main().catch((err) => { console.error(err.message); process.exit(1); });
