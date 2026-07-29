/**
 * Transitions Win Rummy from "coming soon" to launched (real downloadUrl,
 * full rummy description/FAQ/SEO, comingSoon: false, tag "NEW", navOrder 0),
 * and shifts every other ranked app's navOrder down by one so Win Rummy
 * takes the #1 spot.
 *
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/update-win-rummy-launch.ts
 */
import fs from "fs";
import path from "path";

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1338";
const TOKEN = process.env.STRAPI_SEED_TOKEN ?? "";

if (!TOKEN) {
  console.error("Error: set STRAPI_SEED_TOKEN to a Full Access API token.");
  process.exit(1);
}

const winRummyData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "seed-data-app-win-rummy.json"), "utf-8")
).apps[0];

// Win Rummy takes navOrder 0; everyone else shifts down by one.
const NAV_ORDER_SHIFT: Record<string, number> = {
  "dhangame": 1,
  "max-rummy": 2,
  "yono-rummy": 3,
  "yono-games": 4,
  "yono-777": 5,
  "yono-arcade": 6,
  "rummy-guru": 7,
  "teen-patti-guru": 8,
};

interface AppRow { documentId: string }

async function findBySlug(slug: string): Promise<AppRow | null> {
  const res = await fetch(`${STRAPI_URL}/api/apps?filters[slug][$eq]=${encodeURIComponent(slug)}`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) throw new Error(`GET failed (${res.status})`);
  const json = (await res.json()) as { data: AppRow[] };
  return json.data?.[0] ?? null;
}

async function updateApp(documentId: string, data: Record<string, unknown>): Promise<void> {
  const res = await fetch(`${STRAPI_URL}/api/apps/${documentId}?status=published`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ data }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PUT failed (${res.status}): ${text}`);
  }
}

async function main() {
  const winRummy = await findBySlug("win-rummy");
  if (!winRummy) {
    console.error("win-rummy not found in Strapi — run seed-new-app-win-rummy.ts first.");
    process.exit(1);
  }
  await updateApp(winRummy.documentId, winRummyData);
  console.log("  ✓ Win Rummy launched — comingSoon: false, real downloadUrl, tag NEW, navOrder 0.");

  for (const [slug, navOrder] of Object.entries(NAV_ORDER_SHIFT)) {
    try {
      const app = await findBySlug(slug);
      if (!app) { console.log(`  ✗ ${slug}: not found`); continue; }
      await updateApp(app.documentId, { navOrder });
      console.log(`  ✓ ${slug} → navOrder ${navOrder}`);
    } catch (err) {
      console.log(`  ✗ ${slug}: ${(err as Error).message}`);
    }
  }
}

main().catch((err) => { console.error(err.message); process.exit(1); });
