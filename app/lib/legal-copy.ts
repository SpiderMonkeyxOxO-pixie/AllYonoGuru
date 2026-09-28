// Keeps CMS-sourced copy consistent with the current law.
//
// App and category records still come from Strapi, and some of them carry
// wording written before the Promotion and Regulation of Online Gaming Act,
// 2025 took effect on 1 May 2026 ("skill-based game", "some states may
// restrict access", a FAQ answering that rummy is legal as a skill game).
// The bundled catalog in static-data.ts has been corrected; this applies the
// same corrections to whatever Strapi returns, so an old or newly edited CMS
// record cannot put the outdated claims back on the page.

export const LEGAL_NOTE = "Online money games are prohibited in India under the Online Gaming Act, 2025.";

const RUMMY_LEGAL_FAQ = {
  question: "Is online rummy for money legal in India?",
  answer:
    "No. Since 1 May 2026, the Promotion and Regulation of Online Gaming Act, 2025 prohibits online money games in India, whether based on skill, chance, or both. Courts have historically described rummy as a game of skill, but that no longer makes online rummy for money permitted. Rummy played for free, with no money or stakes, is not an online money game.",
};

function fixString(s: string): string {
  if (!/skill|states may|certain states|restricted\./i.test(s)) return s;
  return s
    .replace(/\s*\|\s*Some states may restrict access(?: to (?:this app|these apps))?\./gi, ` · ${LEGAL_NOTE}`)
    .replace(/Some states may restrict access(?: to (?:this app|these apps))?\./gi, LEGAL_NOTE)
    .replace(/\bSkill[- ]based game(?=\s*[·.|]|$)/g, "Third-party app")
    .replace(/Some apps may be restricted in certain states\./gi, LEGAL_NOTE)
    .replace(/Some apps may be restricted\./gi, "Online money games are prohibited in India.")
    // "Skill-based Rummy on Android" -> "Rummy on Android"
    .replace(/(^|[.!?]\s+|["“(]\s*)Skill[- ]based\s+(\w)/g, (_m, pre: string, c: string) => pre + c.toUpperCase())
    .replace(/\bskill[- ]based\s+/gi, "")
    // "slot-style skill game apps" -> "slot-style game apps"
    .replace(/\b[Ss]kill (?=[Gg]ame)/g, "")
    .replace(/^\s+/, "");
}

function isRummyLegalFaq(v: Record<string, unknown>): boolean {
  return typeof v.question === "string" && /classified as a skill/i.test(v.question);
}

export function fixLegalCopy<T>(value: T): T {
  if (typeof value === "string") return fixString(value) as T;
  if (Array.isArray(value)) return value.map((v) => fixLegalCopy(v)) as T;
  if (value && typeof value === "object") {
    const obj = value as Record<string, unknown>;
    if (isRummyLegalFaq(obj)) return { ...obj, ...RUMMY_LEGAL_FAQ } as T;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) {
      // URLs and identifiers are never rewritten.
      out[k] = /url|slug|href|domain/i.test(k) ? v : fixLegalCopy(v);
    }
    return out as T;
  }
  return value;
}
