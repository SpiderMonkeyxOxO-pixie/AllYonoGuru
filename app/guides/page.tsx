import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogPostCard from "../components/sections/BlogPostCard";
import { GuidesPageSchema, BreadcrumbSchema } from "../components/seo/JsonLd";
import { ChevronRightIcon, ShieldIcon } from "../components/icons/Icons";
import { getAllBlogPosts } from "../lib/blog";
import { groupPostsByGuideCategory } from "../lib/guide-taxonomy";

// New, additive route — does not alter any existing URL, title, meta
// description, or H1 anywhere else on the site. Pulls from the same
// repository blog content as /blog (see app/lib/blog.ts); adds no new
// content of its own, only curation/grouping of what is already published
// (see app/lib/guide-taxonomy.ts for the inclusion rule and its
// master-spec citation).

async function getBlogPosts() {
  try {
    return await getAllBlogPosts();
  } catch {
    return [];
  }
}

const SITE = "https://allyonoguru.com";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Yono Game Guides — Rules, Strategy & Safety Education | AllYonoGuru",
  description:
    "Generic, independently written guides on Rummy and card-game rules, scoring, drop/discard strategy, Android APK safety, and how to compare apps — organized by topic.",
  alternates: {
    canonical: `${SITE}/guides`,
  },
  openGraph: {
    title: "Yono Game Guides — Rules, Strategy & Safety Education | AllYonoGuru",
    description:
      "Independently written guides on card-game rules, strategy, Android APK safety, and neutral comparison methodology — organized by topic.",
    url: `${SITE}/guides`,
    images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yono Game Guides — Rules, Strategy & Safety Education | AllYonoGuru",
    description:
      "Independently written guides on card-game rules, strategy, Android APK safety, and neutral comparison methodology.",
    images: [`${SITE}/og-image.png`],
  },
};

export default async function GuidesPage() {
  const posts = await getBlogPosts();
  const categories = groupPostsByGuideCategory(posts);
  const allGuidePosts = categories.flatMap((c) => c.posts);

  const breadcrumbs = [
    { name: "Home", item: SITE },
    { name: "Guides", item: `${SITE}/guides` },
  ];

  return (
    <>
      <GuidesPageSchema posts={allGuidePosts} />
      <BreadcrumbSchema items={breadcrumbs} />

      <Navbar />

      <main id="main-content" role="main" style={{ paddingTop: "68px" }}>
        <section className="bg-hero-gradient inner-hero" aria-label="Guides overview">
          <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25 }} aria-hidden="true" />

          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "28px" }}>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "6px" }}>
                <li>
                  <Link href="/" title="AllYonoGuru Home" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRightIcon size={12} /></li>
                <li>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }} aria-current="page">Guides</span>
                </li>
              </ol>
            </nav>

            <p style={{
              fontSize: "11px", fontWeight: "700", color: "#f59e0b",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px",
            }}>
              Education
            </p>

            <h1 style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: "800", letterSpacing: "-0.03em",
              color: "#f1f5f9", marginBottom: "12px",
            }}>
              Yono Game Guides
            </h1>

            <p style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "#64748b", lineHeight: "1.65",
              maxWidth: "640px", marginBottom: "24px",
            }}>
              Generic, independently written explainers on how these games actually work — rules and
              mechanics, strategy and scoring, Android app safety, and how to compare apps using your
              own criteria. Not tied to any single app, and not a ranked &quot;best of&quot; list.
            </p>

            <div className="disclaimer-strip">
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <ShieldIcon size={14} />
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: "11.5px", color: "#94a3b8", lineHeight: "1.6" }}>
                    Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.
                  </p>
                  <p style={{ margin: 0, fontSize: "11px", color: "#64748b" }}>
                    <strong style={{ color: "#f59e0b" }}>18+</strong>
                    {" "}· Online money games are prohibited in India under the Online Gaming Act, 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {categories.length === 0 ? (
          <section className="inner-section" style={{ background: "#0a0f1e" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
              <p style={{ color: "#64748b", fontSize: "14px" }}>No guides published yet.</p>
            </div>
          </section>
        ) : (
          categories.map((category, idx) => (
            <section
              key={category.slug}
              id={category.slug}
              aria-labelledby={`${category.slug}-heading`}
              className="inner-section"
              style={{ background: idx % 2 === 0 ? "#0a0f1e" : "rgba(10,15,30,0.8)" }}
            >
              <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <h2 id={`${category.slug}-heading`} style={{
                  fontSize: "22px", fontWeight: "700",
                  color: "#f1f5f9", marginBottom: "8px", letterSpacing: "-0.02em",
                }}>
                  {category.label}
                </h2>
                <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "24px", maxWidth: "640px" }}>
                  {category.description}
                </p>

                <div className="blog-grid">
                  {category.posts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            </section>
          ))
        )}

        <section className="inner-section" style={{ background: "#020817" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "13px", color: "#475569" }}>
              Looking for a specific app&apos;s download page instead? See the{" "}
              <Link href="/#apps" style={{ color: "#f59e0b", textDecoration: "none" }}>
                full app directory
              </Link>{" "}
              or the complete{" "}
              <Link href="/blog" style={{ color: "#f59e0b", textDecoration: "none" }}>
                blog archive
              </Link>.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
