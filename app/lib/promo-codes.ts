import fs from "fs";
import path from "path";
import { APPS_STATIC } from "./static-data";
import type { PromoCardData } from "./promo-types";

// Server-only module (uses `fs`) — call only from Server Components (see app/layout.tsx).
// Edit `promo-code.txt` at the project root to update codes; no code changes needed here.

function cleanCode(value?: string): string | null {
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

export function getPromoCodes(): PromoCardData[] {
  let raw = "";
  try {
    raw = fs.readFileSync(path.join(process.cwd(), "promo-code.txt"), "utf-8");
  } catch {
    return [];
  }

  const logoBySlug = new Map<string, { slug: string; logo: string }>();
  for (const app of APPS_STATIC) {
    logoBySlug.set(app.name.toLowerCase(), { slug: app.slug, logo: app.iconUrl });
  }

  return parsePromoCodes(raw).map((entry) => {
    const match = logoBySlug.get(entry.name.toLowerCase());
    return { ...entry, slug: match?.slug ?? null, logo: match?.logo ?? null };
  });
}
