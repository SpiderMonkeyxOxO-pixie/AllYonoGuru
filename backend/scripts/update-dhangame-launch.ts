/**
 * Transitions DhanGame from "coming soon" to launched: real downloadUrl,
 * full rummy description/FAQ/SEO, comingSoon: false, networkCategory,
 * appVersion/packageSize/minAndroid, navOrder 0 (first).
 *
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/update-dhangame-launch.ts
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
  fs.readFileSync(path.join(__dirname, "..", "seed-data-app-dhangame.json"), "utf-8")
);
const app = data.apps[0];

interface AppRow { documentId: string }

async function findBySlug(slug: string): Promise<AppRow | null> {
  const res = await fetch(`${STRAPI_URL}/api/apps?filters[slug][$eq]=${encodeURIComponent(slug)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) throw new Error(`GET failed (${res.status})`);
  const json = (await res.json()) as { data: AppRow[] };
  return json.data?.[0] ?? null;
}

async function main() {
  const existing = await findBySlug("dhangame");
  if (!existing) {
    console.error("dhangame not found in Strapi — run seed-new-app-dhangame.ts first.");
    process.exit(1);
  }

  const res = await fetch(`${STRAPI_URL}/api/apps/${existing.documentId}?status=published`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ data: app }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PUT failed (${res.status}): ${text}`);
  }

  console.log("  ✓ DhanGame updated — comingSoon: false, real downloadUrl set, navOrder 0.");
}

main().catch((err) => { console.error(err.message); process.exit(1); });
