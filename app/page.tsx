import type { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import GuideHighlightsSection from "./components/sections/GuideHighlightsSection";
import AppGridSection from "./components/sections/AppGridSection";
import CategoryTeaserSection from "./components/sections/CategoryTeaserSection";
import FAQSection from "./components/sections/FAQSection";
import NetworkShowcaseSection from "./components/sections/NetworkShowcaseSection";
import {
  WebSiteSchema,
  HomePageSchemas,
  FAQPageSchema,
} from "./components/seo/JsonLd";
import { APPS_STATIC, CATEGORIES_STATIC, NETWORK_APPS } from "./lib/static-data";
import { getAllApps } from "./lib/strapi";
import { getAllBlogPosts } from "./lib/blog";
import { getFeaturedGuidePosts } from "./lib/guide-taxonomy";
import type { AppEntry } from "./lib/types";

// ─── Hard rules enforced ──────────────────────────────────────────────────────
// • Homepage IS the "yono game all" hub (Rule 6 — no /yono-game-all page).
// • Self-canonical to https://allyonoguru.com (Rule 10).
// • JSON-LD: WebSite + CollectionPage + ItemList + FAQPage (Rule 9).
// • No aggregateRating (Rule 8).
// ─────────────────────────────────────────────────────────────────────────────

export const revalidate = 60;

// Strapi-first, static-fallback: if Strapi is unreachable or has no
// published apps yet, fall back to the bundled static catalog.
async function getPublishedApps(): Promise<AppEntry[]> {
  try {
    const apps = await getAllApps();
    if (apps.length > 0) return apps;
  } catch {
    // Strapi unavailable — fall through to static data.
  }
  return APPS_STATIC
    .filter((a) => a.publishedAt !== null)
    .sort((a, b) => a.navOrder - b.navOrder);
}

// Blog posts read from the local repository content (see app/lib/blog.ts) —
// if that read somehow fails, the homepage guide section simply omits
// itself rather than rendering broken cards.
async function getHomepageGuidePosts() {
  try {
    const posts = await getAllBlogPosts();
    return getFeaturedGuidePosts(posts, 4);
  } catch {
    return [];
  }
}

export const metadata: Metadata = {
  title: {
    absolute: "Yono Game All Apps Directory, Rummy & Teen Patti Guides | AllYonoGuru",
  },
  description:
    "Independent directory of Yono game all apps, plus rummy and Teen Patti rules guides and Rummy Guru / Teen Patti Guru identity checks. 18+.",
  keywords: "yono game all, yono game apps, rummy guru, teen patti guru, rummy rules, teen patti rules",
  alternates: {
    canonical: "https://allyonoguru.com",
  },
  openGraph: {
    title: "Yono Game All Apps Directory | AllYonoGuru",
    description:
      "Independent directory of Yono game all apps, with rummy and Teen Patti rules guides. 18+.",
    url: "https://allyonoguru.com",
    images: [
      {
        url: "https://allyonoguru.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AllYonoGuru — Yono Game All Android Apps Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yono Game All Apps Directory | AllYonoGuru",
    description:
      "Independent directory of Yono game all apps — Rummy Guru, Teen Patti Guru, and more. Free to download.",
    images: ["https://allyonoguru.com/og-image.png"],
  },
};

const HOMEPAGE_FAQ = [
  {
    question: "What is Yono Game All?",
    answer:
      "\"Yono Game All\" refers to the full collection of Android game apps in the Yono game network. AllYonoGuru is an independent directory that lists, describes, and links to these apps in one place.",
  },
  {
    question: "What apps are listed on AllYonoGuru?",
    answer:
      "AllYonoGuru lists Yono-network Android game apps, including Rummy Guru and Teen Patti Guru, alongside rummy and Teen Patti rules guides. Each app page shows its category and current download source.",
  },
  {
    question: "Are Yono game apps free to download?",
    answer:
      "Yes, all apps currently listed on AllYonoGuru are free to download and install on Android devices. There are no mandatory fees to access the app.",
  },
  {
    question: "Is AllYonoGuru affiliated with SBI or YONO by SBI?",
    answer:
      "No. AllYonoGuru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank. AllYonoGuru is an independent, privately owned third-party directory.",
  },
  {
    question: "Is online rummy or Teen Patti for money legal in India?",
    answer:
      "No. Since 1 May 2026, the Promotion and Regulation of Online Gaming Act, 2025 prohibits online money games in India, whether based on skill, chance, or both. Many apps listed here are real-money apps; listing an app is not approval or encouragement to play. Free games with no money or stakes are not online money games.",
  },
  {
    question: "What is the age requirement?",
    answer:
      "This site is for adults aged 18 and over. Real-money games carry financial risk, and online money games are prohibited in India under the Online Gaming Act, 2025.",
  },
];

export default async function HomePage() {
  const publishedApps = await getPublishedApps();
  const guidePosts = await getHomepageGuidePosts();

  return (
    <>
      {/* JSON-LD structured data — Rule 9 */}
      <WebSiteSchema />
      <HomePageSchemas apps={publishedApps} />
      <FAQPageSchema items={HOMEPAGE_FAQ} />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" role="main">
        {/* 1. Hero — "yono game all" hub, disclaimer in hero */}
        <HeroSection appCount={publishedApps.length} />

        {/*
          2. Guide highlights — additive section only (Phase 1 repositioning).
          Placed ahead of the app directory/promo content per
          YONO_SEO_POSITIONING_MASTER_SPEC.md §13 and the reconciliation
          doc's AllYonoGuru block: the homepage should not primarily lead
          with directory/download content. The Hero's own <title>, meta
          description, and H1 are intentionally left untouched here — the
          master spec's AllYonoGuru block lists "GSC review of the current
          homepage's rankings" as a data dependency specifically for that
          change, and that data was not obtainable this session (Ahrefs
          Site Explorer calls returned "API units limit reached" — see the
          Phase 1 report). Section reordering/addition below carries no
          equivalent ranking risk and is not gated the same way.
        */}
        <GuideHighlightsSection posts={guidePosts} />

        {/* 3. App grid — published apps only */}
        <AppGridSection apps={publishedApps} />

        {/* 4. Category teasers — DRAFT categories */}
        <CategoryTeaserSection categories={CATEGORIES_STATIC} />

        {/* 5. Full network logo showcase — all 57 Yono network apps */}
        <NetworkShowcaseSection apps={NETWORK_APPS} />

        {/* 6. FAQ — homepage FAQ targeting "yono game all" */}
        <FAQSection items={HOMEPAGE_FAQ} heading="Yono Game All — FAQs" />
      </main>

      {/* Footer — includes OrganizationSchema JSON-LD */}
      <Footer />
    </>
  );
}
