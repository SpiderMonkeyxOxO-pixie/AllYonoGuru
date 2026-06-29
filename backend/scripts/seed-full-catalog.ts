/**
 * One-time import — reads ../seed-data-apps.json (generated from the
 * frontend's static-data.ts) and creates matching App + Category entries
 * in Strapi.
 *
 * Usage (from backend/):
 *   npx ts-node scripts/seed-full-catalog.ts
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
  fs.readFileSync(path.join(__dirname, "..", "seed-data-apps.json"), "utf-8")
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
  console.log(`Importing ${data.apps.length} apps and ${data.categories.length} categories…\n`);

  for (const app of data.apps) {
    const { publishedAt, ...fields } = app;
    try {
      const result = await post("apps?status=published", fields);
      console.log(`  ✓ app: ${app.name} (id=${result.data.id})`);
    } catch (err) {
      console.log(`  ✗ app: ${app.name}: ${(err as Error).message}`);
    }
  }

  for (const cat of data.categories) {
    const { publishedAt, ...fields } = cat;
    try {
      const result = await post("categories", fields);
      console.log(`  ✓ category (DRAFT): ${cat.name} (id=${result.data.id})`);
    } catch (err) {
      console.log(`  ✗ category: ${cat.name}: ${(err as Error).message}`);
    }
  }

  console.log("\nFull catalog import complete.");
}

main().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
