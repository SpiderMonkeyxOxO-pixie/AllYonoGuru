/**
 * Strips " | AllYonoGuru.com" (and variants) from seo.metaTitle on all
 * blog posts and apps in Strapi.
 * Usage (from backend/):
 *   STRAPI_URL=http://localhost:1338 STRAPI_SEED_TOKEN=<token> npx ts-node scripts/fix-meta-titles.ts
 */

const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1338";
const TOKEN = process.env.STRAPI_SEED_TOKEN ?? "";

if (!TOKEN) {
  console.error("Error: set STRAPI_SEED_TOKEN to a Full Access API token.");
  process.exit(1);
}

const SUFFIXES = [
  " | AllYonoGuru.com",
  "| AllYonoGuru.com",
  " | AllYonoGuru",
  "| AllYonoGuru",
  " - AllYonoGuru.com",
  "- AllYonoGuru.com",
];

function stripSuffix(title: string): string {
  for (const s of SUFFIXES) {
    if (title.endsWith(s)) return title.slice(0, -s.length).trim();
  }
  return title;
}

async function fetchAll(endpoint: string): Promise<any[]> {
  const url = `${STRAPI_URL}/api/${endpoint}?populate[seo]=true&pagination[pageSize]=200`;
  const res = await fetch(url, { headers: { Authorization: `Bearer ${TOKEN}` } });
  if (!res.ok) throw new Error(`GET ${url} failed: ${res.status}`);
  const json = await res.json();
  return json.data ?? [];
}

async function updateSeo(endpoint: string, documentId: string, seo: any): Promise<void> {
  const url = `${STRAPI_URL}/api/${endpoint}/${documentId}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ data: { seo } }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`PUT ${url} failed (${res.status}): ${text}`);
  }
}

async function fixEndpoint(endpoint: string, label: string): Promise<void> {
  console.log(`\n--- ${label} ---`);
  const entries = await fetchAll(endpoint);

  for (const entry of entries) {
    const seo = entry.seo;
    if (!seo?.metaTitle) {
      console.log(`  skip (no metaTitle): ${entry.title ?? entry.slug}`);
      continue;
    }

    const original = seo.metaTitle as string;
    const cleaned = stripSuffix(original);

    if (cleaned === original) {
      console.log(`  ok  "${original}"`);
      continue;
    }

    try {
      await updateSeo(endpoint, entry.documentId, { ...seo, metaTitle: cleaned });
      console.log(`  ✓   "${original}"`);
      console.log(`    → "${cleaned}"`);
    } catch (err) {
      console.log(`  ✗   ${original}: ${(err as Error).message}`);
    }
  }
}

async function main() {
  console.log(`Fixing meta titles on ${STRAPI_URL}…`);
  await fixEndpoint("blog-posts", "Blog Posts");
  await fixEndpoint("apps", "Apps");
  console.log("\nDone.");
}

main().catch((err) => { console.error(err.message); process.exit(1); });
