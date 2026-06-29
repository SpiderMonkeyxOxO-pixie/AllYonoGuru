import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { BlogPostingSchema, BreadcrumbSchema } from "../../components/seo/JsonLd";
import { ChevronRightIcon, ShieldIcon } from "../../components/icons/Icons";
import { BLOG_POSTS_STATIC } from "../../lib/static-data";
import { getBlogPostBySlug } from "../../lib/strapi";

const SITE = "https://allyonoguru.com";

export const revalidate = 60;

export function generateStaticParams() {
  return BLOG_POSTS_STATIC.map((p) => ({ slug: p.slug }));
}

// Strapi-first, static-fallback: matches the listing page's behavior.
async function getPost(slug: string) {
  try {
    const post = await getBlogPostBySlug(slug);
    if (post) return post;
  } catch {
    // Strapi unavailable — fall through to static data.
  }
  return BLOG_POSTS_STATIC.find((p) => p.slug === slug) ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    alternates: { canonical: `${SITE}/blog/${post.slug}` },
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      url: `${SITE}/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.coverImage ?? `${SITE}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.coverImage ?? `${SITE}/og-image.png`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })
    : null;

  const breadcrumbs = [
    { name: "Home", item: SITE },
    { name: "Blog", item: `${SITE}/blog` },
    { name: post.title, item: `${SITE}/blog/${post.slug}` },
  ];

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <BlogPostingSchema post={post} />
      <BreadcrumbSchema items={breadcrumbs} />

      <Navbar />

      <main id="main-content" role="main" style={{ paddingTop: "68px" }}>
        <section className="bg-hero-gradient inner-hero" aria-label={`${post.title} — article`}>
          <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25 }} aria-hidden="true" />

          <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "28px" }}>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <li>
                  <Link href="/" title="AllYonoGuru Home" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRightIcon size={12} /></li>
                <li>
                  <Link href="/blog" title="Blog" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true"><ChevronRightIcon size={12} /></li>
                <li>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }} aria-current="page">{post.title}</span>
                </li>
              </ol>
            </nav>

            {post.tag && (
              <span style={{
                display: "inline-block", fontSize: "11px", fontWeight: "700",
                color: "#f59e0b", background: "rgba(245,158,11,0.08)",
                border: "1px solid rgba(245,158,11,0.15)",
                borderRadius: "6px", padding: "4px 10px",
                marginBottom: "16px", letterSpacing: "0.03em",
              }}>
                {post.tag}
              </span>
            )}

            <h1 style={{
              fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)",
              fontWeight: "800", letterSpacing: "-0.03em",
              color: "#f1f5f9", marginBottom: "16px", lineHeight: "1.2",
            }}>
              {post.title}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#64748b", marginBottom: "24px" }}>
              <span>{post.author}</span>
              {date && <span>· {date}</span>}
            </div>

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

        <section className="inner-section" style={{ background: "#0a0f1e" }}>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            {paragraphs.map((para, i) => (
              <p key={i} style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", marginBottom: "24px" }}>
                {para}
              </p>
            ))}

            <Link
              href="/blog"
              title="Back to Blog"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13.5px", color: "#f59e0b", textDecoration: "none", marginTop: "8px" }}
            >
              ← Back to Blog
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
