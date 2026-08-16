import type { BlogPostEntry } from "./types";

// Frontend-only taxonomy layer for the /guides hub.
//
// Strapi's blog-post `tag` field is not a usable taxonomy today — nearly
// every post (published or draft) carries the same generic "Guides" value,
// with a handful of exceptions ("Legal", "Safety", "Game Guides"). Rather
// than requiring a CMS schema change (which this session has no Strapi
// write access to make — see .env.local, STRAPI_API_TOKEN is unset), guide
// membership is expressed here as a static slug allowlist maintained
// alongside the taxonomy definition.
//
// Inclusion criteria (per YONO_SEO_POSITIONING_MASTER_SPEC.md §13 —
// AllYonoGuru.com Education Boundary Rule): a post is included only if it
// teaches a generic, non-brand-specific, non-Teen-Patti-specific mechanic,
// strategy, safety concept, or comparison methodology. A post is EXCLUDED
// from this hub (but left live at its existing URL — no redirect/noindex)
// when it is:
//   - Teen-Patti-specific rules/hand-ranking/variant content (belongs to
//     AllYonoPatti.com per master spec §12/§13 — migration candidate, not
//     executed here; GSC/backlink review required first per §32).
//   - An entity-authority page for a brand with an assigned specialist
//     domain (DhanGame.co, WinRummyIndia.com, AllYonoArcade.com).
//   - Reward/bonus-mechanics content (AllYonoReward.com territory).
//   - Promo-code redemption content (generic-Yono promo ownership is
//     explicitly UNRESOLVED per master spec §8.3 — not assigned here).
//   - Dated freshness/news content (AllYonoUpdate.com territory).
//   - Directory/complete-list content (YonoLink.co territory).
//   - Third-party app "what to check before downloading" posts that read
//     as commercial evaluation rather than generic education — left
//     unclassified (DATA REQUIRED) rather than force-fit into a category.

export interface GuideCategory {
  slug: string;
  label: string;
  description: string;
  postSlugs: string[];
}

export const GUIDE_CATEGORIES: GuideCategory[] = [
  {
    slug: "rules-and-mechanics",
    label: "Rules & Mechanics",
    description:
      "How the underlying game mechanics actually work — valid sequences, joker rules, and how each table format scores.",
    postSlugs: [
      "rummy-sequence-rules-pure-sequence-explained",
      "joker-in-rummy-how-jokers-work",
      "pool-rummy-rules-points-pool-deals",
      "rummy-points-calculation",
    ],
  },
  {
    slug: "strategy-and-scoring",
    label: "Strategy & Scoring",
    description:
      "Decision-making for actual play — when to drop, what to discard, and where beginners typically lose points.",
    postSlugs: [
      "rummy-discard-strategy",
      "when-to-drop-in-rummy",
      "rummy-tips-for-beginners",
    ],
  },
  {
    slug: "apk-and-android-safety",
    label: "APK & Android Safety",
    description:
      "What to check before installing any Android app — permissions, source verification, and general install hygiene.",
    postSlugs: [
      "understanding-android-app-permissions-before-you-install",
    ],
  },
  {
    slug: "neutral-comparisons",
    label: "Neutral Comparisons",
    description:
      "Criteria-based comparison frameworks — how to evaluate formats and apps yourself, not a ranked verdict.",
    postSlugs: [
      "rummy-vs-teen-patti-differences",
      "how-to-compare-rummy-apps-features-that-matter",
    ],
  },
  {
    slug: "legal-literacy",
    label: "Legal & Skill-vs-Chance Literacy",
    description:
      "How Indian courts have approached skill-based card games — sourced and hedged, not presented as settled everywhere.",
    postSlugs: [
      "online-gaming-laws-in-india-what-players-should-know",
    ],
  },
];

export const GUIDE_POST_SLUGS: ReadonlySet<string> = new Set(
  GUIDE_CATEGORIES.flatMap((c) => c.postSlugs)
);

export interface GuideCategoryWithPosts {
  slug: string;
  label: string;
  description: string;
  posts: BlogPostEntry[];
}

// Groups already-published posts by guide category. A slug in
// GUIDE_CATEGORIES that isn't currently live (e.g. still in Strapi draft)
// is silently omitted rather than rendered as a broken card.
export function groupPostsByGuideCategory(
  allPosts: BlogPostEntry[]
): GuideCategoryWithPosts[] {
  const bySlug = new Map(allPosts.map((p) => [p.slug, p]));

  return GUIDE_CATEGORIES.map((category) => ({
    slug: category.slug,
    label: category.label,
    description: category.description,
    posts: category.postSlugs
      .map((slug) => bySlug.get(slug))
      .filter((p): p is BlogPostEntry => Boolean(p)),
  })).filter((category) => category.posts.length > 0);
}

export function getFeaturedGuidePosts(
  allPosts: BlogPostEntry[],
  limit = 4
): BlogPostEntry[] {
  return allPosts.filter((p) => GUIDE_POST_SLUGS.has(p.slug)).slice(0, limit);
}
