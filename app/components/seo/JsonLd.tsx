import type { FaqItem, AppEntry, CategoryEntry, BlogPostEntry } from "@/app/lib/types";

const SITE_URL = "https://allyonoguru.com";

export const ORG_ID = `${SITE_URL}/#organization`;

// The one Organization entity for the site. Everything else references it by
// @id instead of re-declaring a publisher, so engines see a single entity.
export const ORG_SCHEMA = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "AllYonoGuru.com",
    legalName: "AllYonoGuru.com",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    description:
      "AllYonoGuru.com is an independent directory and reference site for Yono-network Android game apps, including Rummy Guru and Teen Patti Guru. Not affiliated with SBI or YONO by SBI.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "Allyonogurusupport@gmail.com",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    foundingDate: "2025",
    areaServed: { "@type": "Country", name: "India" },
    inLanguage: "en-IN",
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "AllYonoGuru.com",
    url: SITE_URL,
    description:
      "Independent directory and reference guides for Yono-network Android game apps — Rummy Guru, Teen Patti Guru, and more.",
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HomePageSchemasProps {
  apps: AppEntry[];
}

export function HomePageSchemas({ apps }: HomePageSchemasProps) {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Yono Game All — Android Game Apps Directory",
    url: SITE_URL,
    description:
      "The complete AllYonoGuru directory of Yono-network Android game apps, with rules and safety guides.",
    inLanguage: "en-IN",
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Yono Game All Apps",
    url: SITE_URL,
    itemListElement: apps.map((app, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: app.name,
      url: `${SITE_URL}/${app.slug}`,
      description: app.tagline,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
    </>
  );
}

export function FAQPageSchema({ items }: { items: FaqItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  item: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareAppSchema({ app }: { app: AppEntry }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    url: `${SITE_URL}/${app.slug}`,
    description: app.description,
    operatingSystem: "Android",
    applicationCategory: "GameApplication",
    softwareVersion: app.appVersion,
    fileSize: app.packageSize,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPageSchema({ posts }: { posts: BlogPostEntry[] }) {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AllYonoGuru Blog",
    url: `${SITE_URL}/blog`,
    description: "Editorial guides from AllYonoGuru: card-game rules, strategy, app identity and Android safety.",
    inLanguage: "en-IN",
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AllYonoGuru Blog Posts",
    url: `${SITE_URL}/blog`,
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  );
}

export function GuidesPageSchema({ posts }: { posts: BlogPostEntry[] }) {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AllYonoGuru Guides — Rules, Strategy, Safety & Comparison Education",
    url: `${SITE_URL}/guides`,
    description:
      "Generic educational guides from AllYonoGuru: rules and mechanics, strategy, APK and Android safety, and neutral comparison methodology.",
    inLanguage: "en-IN",
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AllYonoGuru Guides",
    url: `${SITE_URL}/guides`,
    itemListElement: posts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    </>
  );
}

export function BlogPostingSchema({ post }: { post: BlogPostEntry }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt ?? post.publishedAt ?? undefined,
    image: post.coverImage
      ? (post.coverImage.startsWith("http") ? post.coverImage : `${SITE_URL}${post.coverImage}`)
      : undefined,
    author: { "@type": "Organization", "@id": ORG_ID, name: "AllYonoGuru.com" },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CategoryPageSchemas({ category }: { category: CategoryEntry }) {
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    url: `${SITE_URL}/${category.slug}`,
    description: category.description,
    inLanguage: "en-IN",
  };

  const itemList =
    category.apps.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: `${category.name} — App List`,
          url: `${SITE_URL}/${category.slug}`,
          itemListElement: category.apps.map((app, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: app.name,
            url: `${SITE_URL}/${app.slug}`,
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }}
      />
      {itemList && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
        />
      )}
    </>
  );
}
