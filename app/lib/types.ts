// KNOWN GAP (documented, not fixed — see YONO_SEO_POSITIONING_MASTER_SPEC.md
// §5/§6 and reconciliation/CROSS_DOMAIN_RECONCILIATION.md): three catalog
// entries in static-data.ts (dhangame, win-rummy, and yono-arcade) are
// hardcoded primaryDomain: "allyonoguru" even though the master spec
// assigns those entities to dedicated specialist domains — DhanGame.co,
// WinRummyIndia.com, and AllYonoArcade.com respectively. This type doesn't
// even include those three domains as valid PrimaryDomain values, so the
// existing SIBLING_URLS routing mechanism in AppDetailClient.tsx/[slug]/page.tsx
// (built for allyonoindia/allyonoofficial/allyonoupdate) cannot currently
// redirect them even if the data were corrected.
//
// This is NOT changed here. Per master spec §6/§32, redirecting a live,
// indexed, monetized entity page requires GSC/backlink evidence for both
// the source URL and confirmation that the receiving specialist domain has
// a page ready to receive that traffic — neither was available this
// session. Treat any future addition of a fourth entity to this catalog as
// a hard stop: do not default a new entity's primaryDomain to
// "allyonoguru" if a specialist domain is already assigned to it in the
// master spec's Entity Specialist & Modifier Ownership Rule (§5).
export type PrimaryDomain =
  | "allyonoguru"
  | "allyonoindia"
  | "allyonoofficial"
  | "allyonoupdate";

export interface SeoMeta {
  metaTitle: string;
  metaDescription: string;
  canonicalURL?: string;
  ogImage?: string;
  keywords?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ComplianceData {
  showDisclaimer: boolean;
  showAgeGate: boolean;
  stateRestrictionNote?: string;
}

export interface AppLink {
  label: string;
  url: string;
  isExternal: boolean;
}

export interface AppEntry {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  downloadUrl: string;
  appVersion: string;
  packageSize: string;
  minAndroid: string;
  iconUrl: string;
  screenshotUrls: string[];
  targetKeyword: string;
  secondaryKeyword: string;
  kd: number;
  searchVolume: number;
  primaryDomain: PrimaryDomain;
  navOrder: number;
  publishedAt: string | null;
  networkCategory?: "rummy" | "teen-patti" | "spin" | "slots";
  tag?: string;
  comingSoon?: boolean;
  releaseDate?: string | null;
  launchUpdatesUrl?: string | null;
  seo: SeoMeta;
  faq: FaqItem[];
  compliance: ComplianceData;
  links: AppLink[];
}

export interface CategoryEntry {
  id: number;
  slug: string;
  name: string;
  description: string;
  targetKeyword: string;
  secondaryKeyword: string;
  kd: number;
  searchVolume: number;
  primaryDomain: PrimaryDomain;
  navOrder: number;
  publishedAt: string | null;
  apps: AppEntry[];
  seo: SeoMeta;
  faq: FaqItem[];
  compliance: ComplianceData;
}

export interface BlogPostEntry {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  tag?: string;
  publishedAt: string | null;
  seo: SeoMeta;
}

export interface GlobalConfig {
  siteName: string;
  siteTagline: string;
  siteUrl: string;
  organizationName: string;
  organizationLegalName: string;
  contactEmail: string;
  disclaimer: string;
  ageRestriction: string;
  stateNote: string;
  navApps: AppEntry[];
  navCategories: CategoryEntry[];
}
