import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogPostCard from "../components/sections/BlogPostCard";
import { BlogPageSchema, BreadcrumbSchema } from "../components/seo/JsonLd";
import { ChevronRightIcon, ShieldIcon } from "../components/icons/Icons";
import { getAllBlogPosts } from "../lib/strapi";

async function getBlogPosts() {
  try {
    return await getAllBlogPosts();
  } catch {
    return [];
  }
}

const SITE = "https://allyonoguru.com";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog — Guides, Game Tips & Updates | AllYonoGuru",
  description:
    "Independent guides and articles on Rummy, Teen Patti, and Android skill-based game apps from the AllYonoGuru editorial team.",
  alternates: {
    canonical: `${SITE}/blog`,
  },
  openGraph: {
    title: "Blog — Guides, Game Tips & Updates | AllYonoGuru",
    description:
      "Independent guides and articles on Rummy, Teen Patti, and Android skill-based game apps from the AllYonoGuru editorial team.",
    url: `${SITE}/blog`,
    images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Guides, Game Tips & Updates | AllYonoGuru",
    description:
      "Independent guides and articles on Rummy, Teen Patti, and Android skill-based game apps from the AllYonoGuru editorial team.",
    images: [`${SITE}/og-image.png`],
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const breadcrumbs = [
    { name: "Home", item: SITE },
    { name: "Blog", item: `${SITE}/blog` },
  ];

  return (
    <>
      <BlogPageSchema posts={posts} />
      <BreadcrumbSchema items={breadcrumbs} />

      <Navbar />

      <main id="main-content" role="main" style={{ paddingTop: "68px" }}>
        <section className="bg-hero-gradient inner-hero" aria-label="Blog overview">
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
                  <span style={{ fontSize: "13px", color: "#94a3b8" }} aria-current="page">Blog</span>
                </li>
              </ol>
            </nav>

            <h1 style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: "800", letterSpacing: "-0.03em",
              color: "#f1f5f9", marginBottom: "12px",
            }}>
              Blog
            </h1>

            <p style={{
              fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
              color: "#64748b", lineHeight: "1.65",
              maxWidth: "600px", marginBottom: "24px",
            }}>
              Independent guides, rules explainers, and safety tips for Rummy, Teen Patti, and other skill-based Android game apps.
            </p>

            {/* Disclaimer strip (Rule 2) */}
            <div className="disclaimer-strip">
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <ShieldIcon size={14} />
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: "11.5px", color: "#94a3b8", lineHeight: "1.6" }}>
                    Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.
                  </p>
                  <p style={{ margin: 0, fontSize: "11px", color: "#64748b" }}>
                    <strong style={{ color: "#f59e0b" }}>18+</strong>
                    {" "}· Some apps may be restricted in certain states.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="blog-list-heading" className="inner-section" style={{ background: "#0a0f1e" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2 id="blog-list-heading" style={{
              fontSize: "22px", fontWeight: "700",
              color: "#f1f5f9", marginBottom: "20px", letterSpacing: "-0.02em",
            }}>
              Latest Articles
            </h2>

            {posts.length === 0 ? (
              <p style={{ color: "#64748b", fontSize: "14px" }}>No articles published yet.</p>
            ) : (
              <div className="blog-grid">
                {posts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
