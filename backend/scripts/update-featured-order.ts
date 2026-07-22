/**
 * Updates navOrder on existing apps to match the requested featured ranking
 * (DhanGame is pinned first separately via comingSoon, so it isn't in this
 * list), and fixes DhanGame's launch-time copy to a precise 8:00 AM IST
 * instead of the earlier 8-9 AM range. Looks up each app by slug at runtime
 * rather than hardcoding IDs.
 *
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/update-featured-order.ts
 */

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1338";
const TOKEN = process.env.STRAPI_SEED_TOKEN ?? "";

if (!TOKEN) {
  console.error("Error: set STRAPI_SEED_TOKEN to a Full Access API token.");
  process.exit(1);
}

// 2. Max Rummy, 3. Yono Rummy, 4. Yono Games, 5. Yono 777, 6. Yono Arcade
// (DhanGame is #1, pinned separately). Rummy Guru / Teen Patti Guru moved
// out of the way to 7/8, keeping their prior relative order.
const NAV_ORDER: Record<string, number> = {
  "max-rummy": 1,
  "yono-rummy": 2,
  "yono-games": 3,
  "yono-777": 4,
  "yono-arcade": 5,
  "rummy-guru": 6,
  "teen-patti-guru": 7,
};

const DHANGAME_TEXT = {
  tagline: "DhanGame is scheduled to join the Yono game network at 8:00 AM IST on 23 July 2026. Category, formats, and safety details will be added once it is available for review.",
  description: "DhanGame is an upcoming addition to the AllYonoGuru directory, expected to launch at 8:00 AM IST on 23 July 2026. As with every app in this directory, DhanGame's category, table formats, and safety information will only be published once the app is available and can be independently reviewed — nothing here is confirmed until then.",
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
  for (const [slug, navOrder] of Object.entries(NAV_ORDER)) {
    try {
      const app = await findBySlug(slug);
      if (!app) { console.log(`  ✗ ${slug}: not found`); continue; }
      await updateApp(app.documentId, { navOrder });
      console.log(`  ✓ ${slug} → navOrder ${navOrder}`);
    } catch (err) {
      console.log(`  ✗ ${slug}: ${(err as Error).message}`);
    }
  }

  try {
    const dhan = await findBySlug("dhangame");
    if (!dhan) {
      console.log("  ✗ dhangame: not found — run seed-new-app-dhangame.ts first");
    } else {
      await updateApp(dhan.documentId, DHANGAME_TEXT);
      console.log("  ✓ dhangame → updated launch-time wording to 8:00 AM IST");
    }
  } catch (err) {
    console.log(`  ✗ dhangame text update: ${(err as Error).message}`);
  }
}

main().catch((err) => { console.error(err.message); process.exit(1); });
