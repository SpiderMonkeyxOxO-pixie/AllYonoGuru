import fs from "fs";
import path from "path";
import { APPS_STATIC } from "./static-data";
import { getAllPromoCodes } from "./strapi";
import type { PromoCardData } from "./promo-types";

// Server-only module (uses `fs`) — call only from Server Components (see app/layout.tsx).
// Strapi-first: edit codes daily in Strapi Admin → Content Manager → Promo Code.
// Falls back to `promo-code.txt` at the project root if Strapi is unreachable
// or has no entries yet.

function cleanCode(value?: string | null): string | null {
  const v = value?.trim();
  return !v || v === "-" ? null : v;
}

export function parsePromoCodes(raw: string): Omit<PromoCardData, "slug" | "logo">[] {
  return raw
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const [name, morning, afternoon, evening] = line.split("|").map((p) => p.trim());
      return { name, morning: cleanCode(morning), afternoon: cleanCode(afternoon), evening: cleanCode(evening) };
    })
    .filter((entry) => entry.name);
}

// Strips everything but letters/digits so "OK Rummy", "OkRummy", and
// " Yono-Vip " all normalize the same way — promo code app names are typed by
// hand in Strapi and drift from the catalog's exact spacing/casing/hyphens.
function normalize(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// A handful of promo code entries use a singular/plural variant that doesn't
// otherwise normalize to a catalog match (e.g. "Jaiho slots" vs. the app
// "Jaiho Slot"). Mapped here instead of renaming the app entries.
const NAME_ALIASES: Record<string, string> = {
  "789jackpots": "789 Jackpot",
  "jaihoslots": "Jaiho Slot",
  "slotsspin": "Slot Spin",
};

function withLogos(entries: Omit<PromoCardData, "slug" | "logo">[]): PromoCardData[] {
  const logoByName = new Map<string, { slug: string; logo: string }>();
  for (const app of APPS_STATIC) {
    logoByName.set(normalize(app.name), { slug: app.slug, logo: app.iconUrl });
  }

  return entries.map((entry) => {
    const key = normalize(entry.name);
    const alias = NAME_ALIASES[key];
    const match = logoByName.get(key) ?? (alias ? logoByName.get(normalize(alias)) : undefined);
    return { ...entry, slug: match?.slug ?? null, logo: match?.logo ?? null };
  });
}

function getStaticPromoCodes(): Omit<PromoCardData, "slug" | "logo">[] {
  let raw = "";
  try {
    raw = fs.readFileSync(path.join(process.cwd(), "promo-code.txt"), "utf-8");
  } catch {
    return [];
  }
  return parsePromoCodes(raw);
}

export async function getPromoCodes(): Promise<PromoCardData[]> {
  try {
    const entries = await getAllPromoCodes();
    if (entries.length > 0) {
      return withLogos(
        entries.map((entry) => ({
          name: entry.appName,
          morning: cleanCode(entry.morningCode),
          afternoon: cleanCode(entry.afternoonCode),
          evening: cleanCode(entry.eveningCode),
        }))
      );
    }
  } catch {
    // Strapi unavailable — fall through to the static file.
  }
  return withLogos(getStaticPromoCodes());
}
