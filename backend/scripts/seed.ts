/**
 * Seed script — imports seed-data.json into a running Strapi 5 instance.
 *
 * Usage (from backend/):
 *   npx strapi develop   # start Strapi first (or use an existing instance)
 *   npx ts-node scripts/seed.ts
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
  fs.readFileSync(path.join(__dirname, "..", "seed-data.json"), "utf-8")
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

async function put(endpoint: string, body: unknown) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ data: body }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PUT /api/${endpoint} failed (${res.status}): ${text}`);
  }

  return res.json();
}

async function main() {
  console.log("Seeding AllYonoGuru Strapi backend…\n");

  // --- Apps (publish immediately) ---
  const appIds: Record<string, number> = {};
  for (const app of data.apps) {
    const { publishedAt, ...fields } = app;
    console.log(`  Creating app: ${app.name}`);
    const result = await post("apps?status=published", fields);
    appIds[app.slug] = result.data.id;
    console.log(`    ✓ id=${result.data.id}`);
  }

  // --- Categories (keep DRAFT — do NOT pass status=published) ---
  for (const cat of data.categories) {
    const { publishedAt, ...fields } = cat;
    console.log(`  Creating category (DRAFT): ${cat.name}`);
    const result = await post("categories", fields);
    console.log(`    ✓ id=${result.data.id} [DRAFT]`);
  }

  // --- Global single type ---
  console.log("  Upserting global config…");
  await put("global", data.global);
  console.log("    ✓ Global config saved.");

  console.log("\nSeed complete.");
}

main().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
