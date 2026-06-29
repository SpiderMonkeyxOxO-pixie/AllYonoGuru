/**
 * One-time import — reads ../../promo-code.txt (project root) and creates
 * matching entries in the promo-code content type.
 *
 * Usage (from backend/):
 *   npx ts-node scripts/seed-promo-codes.ts
 *
 * Requires STRAPI_SEED_TOKEN env var (Settings → API Tokens → Full Access token).
 * Re-running is safe to skip already-imported apps: rerun fails on the
 * `appName` unique constraint for entries that already exist, which is
 * reported per-row without stopping the rest of the import.
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

interface PromoCodeRow {
  appName: string;
  morningCode: string | null;
  afternoonCode: string | null;
  eveningCode: string | null;
}

function cleanCode(value?: string): string | null {
  const v = value?.trim();
  return !v || v === "-" ? null : v;
}

function parsePromoCodes(raw: string): PromoCodeRow[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [name, morning, afternoon, evening] = line.split("|").map((p) => p.trim());
      return {
        appName: name,
        morningCode: cleanCode(morning),
        afternoonCode: cleanCode(afternoon),
        eveningCode: cleanCode(evening),
      };
    })
    .filter((entry) => entry.appName);
}

async function post(endpoint: string, body: unknown): Promise<{ data: { id: number } }> {
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

  return res.json() as Promise<{ data: { id: number } }>;
}

async function main() {
  const raw = fs.readFileSync(path.join(__dirname, "..", "..", "promo-code.txt"), "utf-8");
  const entries = parsePromoCodes(raw);

  console.log(`Importing ${entries.length} promo code entries…\n`);

  for (const entry of entries) {
    try {
      const result = await post("promo-codes", entry);
      console.log(`  ✓ ${entry.appName} (id=${result.data.id})`);
    } catch (err) {
      console.log(`  ✗ ${entry.appName}: ${(err as Error).message}`);
    }
  }

  console.log("\nPromo code import complete.");
}

main().catch((err) => {
  console.error("Import failed:", err.message);
  process.exit(1);
});
