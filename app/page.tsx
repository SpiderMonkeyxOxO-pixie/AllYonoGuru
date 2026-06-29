import type { Metadata } from "next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
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

// ─── Hard rules enforced ──────────────────────────────────────────────────────
// • Homepage IS the "yono game all" hub (Rule 6 — no /yono-game-all page).
// • Self-canonical to https://allyonoguru.com (Rule 10).
// • JSON-LD: WebSite + CollectionPage + ItemList + FAQPage (Rule 9).
// • No aggregateRating (Rule 8).
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "Yono Game All — Skill Game Apps Directory | AllYonoGuru",
  },
  description:
    "AllYonoGuru is an independent directory of Yono game all apps — skill-based Android card games including Rummy Guru and Teen Patti Guru. Free to download. 18+.",
  keywords: "yono game all, yono game apps, rummy guru apk, teen patti guru apk, yono game spin, android skill games india",
  alternates: {
    canonical: "https://allyonoguru.com",
  },
  openGraph: {
    title: "Yono Game All — Android Skill Game Apps Directory | AllYonoGuru",
    description:
      "Independent directory of Yono game all apps — Rummy Guru, Teen Patti Guru, and more skill-based Android games. Free to download. 18+.",
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
    title: "Yono Game All — Android Skill Game Apps Directory | AllYonoGuru",
    description:
      "Independent directory of Yono game all apps — Rummy Guru, Teen Patti Guru, and more. Free to download.",
    images: ["https://allyonoguru.com/og-image.png"],
  },
};

const HOMEPAGE_FAQ = [
  {
    question: "What is Yono Game All?",
    answer:
      "\"Yono Game All\" refers to the full collection of skill-based Android game apps in the Yono game network. AllYonoGuru is an independent directory that lists, describes, and links to these apps in one place.",
  },
  {
    question: "What apps are listed on AllYonoGuru?",
    answer:
      "AllYonoGuru currently lists Rummy Guru and Teen Patti Guru — both free-to-download Android card games. New apps are added as they are verified by our editorial team.",
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
    question: "Are these games skill-based?",
    answer:
      "Yes. All apps listed on AllYonoGuru are skill-based games. Indian courts have consistently held that games like Rummy require skill, strategy, and knowledge — they are not games of chance.",
  },
  {
    question: "What is the age requirement?",
    answer:
      "Users must be 18 years or older to download and use the apps listed on AllYonoGuru. Additionally, some apps may not be available in certain states — please check your local regulations.",
  },
];

export default function HomePage() {
  const publishedApps = APPS_STATIC.filter((a) => a.publishedAt !== null);

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

        {/* 2. App grid — published apps only */}
        <AppGridSection apps={publishedApps} />

        {/* 3. Category teasers — DRAFT categories */}
        <CategoryTeaserSection categories={CATEGORIES_STATIC} />

        {/* 4. Full network logo showcase — all 57 Yono network apps */}
        <NetworkShowcaseSection apps={NETWORK_APPS} />

        {/* 5. FAQ — homepage FAQ targeting "yono game all" */}
        <FAQSection items={HOMEPAGE_FAQ} heading="Yono Game All — FAQs" />
      </main>

      {/* Footer — includes OrganizationSchema JSON-LD */}
      <Footer />
    </>
  );
}
