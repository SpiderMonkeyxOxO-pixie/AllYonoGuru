/**
 * Updates Yono 777's downloadUrl to the new affiliate link and moves it to
 * the #2 spot (navOrder 1, right after Win Rummy), shifting DhanGame, Max
 * Rummy, Yono Rummy and Yono Games down by one to make room.
 *
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/update-yono777-reorder.ts
 */

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1338";
const TOKEN = process.env.STRAPI_SEED_TOKEN ?? "";

if (!TOKEN) {
  console.error("Error: set STRAPI_SEED_TOKEN to a Full Access API token.");
  process.exit(1);
}

// Win Rummy (navOrder 0) is untouched. Yono 777 takes #2; everyone
// previously between #2 and #5 shifts down by one.
const UPDATES: Record<string, Record<string, unknown>> = {
  "yono-777": { navOrder: 1, downloadUrl: "https://yononewgames.vip/?code=SCHFQRY8DAS" },
  "dhangame": { navOrder: 2 },
  "max-rummy": { navOrder: 3 },
  "yono-rummy": { navOrder: 4 },
  "yono-games": { navOrder: 5 },
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
  for (const [slug, data] of Object.entries(UPDATES)) {
    try {
      const app = await findBySlug(slug);
      if (!app) { console.log(`  ✗ ${slug}: not found`); continue; }
      await updateApp(app.documentId, data);
      console.log(`  ✓ ${slug} → ${JSON.stringify(data)}`);
    } catch (err) {
      console.log(`  ✗ ${slug}: ${(err as Error).message}`);
    }
  }
}

main().catch((err) => { console.error(err.message); process.exit(1); });
