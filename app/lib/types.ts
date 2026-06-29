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
