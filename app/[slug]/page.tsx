import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AppDetailClient from "./AppDetailClient";
import CategoryDetailClient from "./CategoryDetailClient";
import {
  BreadcrumbSchema,
  SoftwareAppSchema,
  FAQPageSchema,
  CategoryPageSchemas,
} from "../components/seo/JsonLd";
import { APPS_STATIC, CATEGORIES_STATIC, NETWORK_APPS } from "../lib/static-data";

// Hard rules enforced:
// • Self-canonical on every page (Rule 10).
// • If primaryDomain !== "allyonoguru" → canonical points to sibling (Rule 3).
// • BreadcrumbList: Home › Page (Rule 10).
// • App: SoftwareApplication + FAQPage + BreadcrumbList (Rule 9).
// • Category: CollectionPage + ItemList + BreadcrumbList (Rule 9).
// • No aggregateRating anywhere (Rule 8).
// • DRAFT categories: noindex robots meta (defense in depth over robots.txt).

const SITE = "https://allyonoguru.com";

const SIBLING_URLS: Record<string, string> = {
  allyonoindia:    "https://allyonoindia.com",
  allyonoofficial: "https://allyonoofficial.com",
  allyonoupdate:   "https://allyonoupdate.com",
};

// ── Static params ─────────────────────────────────────────────────────────────
// Generates routes for all apps + all categories (published or draft).
// Draft categories render with noindex; they're blocked by robots.txt too.

export function generateStaticParams() {
  const appParams  = APPS_STATIC.map((a) => ({ slug: a.slug }));
  const catParams  = CATEGORIES_STATIC.map((c) => ({ slug: c.slug }));
  return [...appParams, ...catParams];
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  // ── App ──
  const app = APPS_STATIC.find((a) => a.slug === slug);
  if (app) {
    const isOwned = app.primaryDomain === "allyonoguru";
    const canonical = isOwned
      ? `${SITE}/${app.slug}`
      : `${SIBLING_URLS[app.primaryDomain] ?? SITE}/${app.slug}`;

    return {
      title: app.seo.metaTitle,
      description: app.seo.metaDescription,
      keywords: `${app.targetKeyword}, ${app.secondaryKeyword}`,
      alternates: { canonical },
      openGraph: {
        title: app.seo.metaTitle,
        description: app.seo.metaDescription,
        url: `${SITE}/${app.slug}`,
        images: [
          {
            url: `${SITE}/og-image.png`,
            width: 1200,
            height: 630,
            alt: `${app.name} — AllYonoGuru`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: app.seo.metaTitle,
        description: app.seo.metaDescription,
        images: [`${SITE}/og-image.png`],
      },
    };
  }

  // ── Category ──
  const category = CATEGORIES_STATIC.find((c) => c.slug === slug);
  if (category) {
    const isDraft = !category.publishedAt;
    return {
      title: category.seo.metaTitle,
      description: category.seo.metaDescription,
      keywords: `${category.targetKeyword}, ${category.secondaryKeyword}`,
      // Draft categories: noindex + canonical to self
      ...(isDraft && {
        robots: { index: false, follow: false },
      }),
      alternates: {
        canonical: category.seo.canonicalURL ?? `${SITE}/${category.slug}`,
      },
      openGraph: {
        title: category.seo.metaTitle,
        description: category.seo.metaDescription,
        url: `${SITE}/${category.slug}`,
        images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
      },
    };
  }

  return {};
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // ── App page ──
  const app = APPS_STATIC.find((a) => a.slug === slug);
  if (app) {
    const breadcrumbs = [
      { name: "Home", item: SITE },
      { name: app.name, item: `${SITE}/${app.slug}` },
    ];

    return (
      <>
        {/* JSON-LD: SoftwareApplication + FAQPage + BreadcrumbList (Rule 9) */}
        <SoftwareAppSchema app={app} />
        {app.faq?.length > 0 && <FAQPageSchema items={app.faq} />}
        <BreadcrumbSchema items={breadcrumbs} />

        <Navbar />
        <main id="main-content" role="main">
          <AppDetailClient
            app={app}
            relatedApps={
              app.networkCategory
                ? NETWORK_APPS.filter((a) => a.category === app.networkCategory)
                : []
            }
          />
        </main>
        <Footer />
      </>
    );
  }

  // ── Category page ──
  const category = CATEGORIES_STATIC.find((c) => c.slug === slug);
  if (category) {
    const breadcrumbs = [
      { name: "Home", item: SITE },
      { name: category.name, item: `${SITE}/${category.slug}` },
    ];

    return (
      <>
        {/* JSON-LD: CollectionPage + ItemList + BreadcrumbList (Rule 9) */}
        <CategoryPageSchemas category={category} />
        {category.faq?.length > 0 && <FAQPageSchema items={category.faq} />}
        <BreadcrumbSchema items={breadcrumbs} />

        <Navbar />
        <main id="main-content" role="main">
          <CategoryDetailClient
            category={category}
            networkApps={
              slug === "yono-game-spin"
                ? NETWORK_APPS.filter((a) => a.category === "spin")
                : slug === "share-slots-yono"
                ? NETWORK_APPS.filter((a) => a.category === "slots")
                : []
            }
          />
        </main>
        <Footer />
      </>
    );
  }

  // 404 for any other slug
  notFound();
}
