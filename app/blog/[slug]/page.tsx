import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { BlogPostingSchema, BreadcrumbSchema } from "../../components/seo/JsonLd";
import { ChevronRightIcon, ShieldIcon } from "../../components/icons/Icons";
import { getBlogPostBySlug } from "../../lib/strapi";

const SITE = "https://allyonoguru.com";

// Forced dynamic (no ISR): this route relies on notFound() to 404 for
// unknown slugs. Combining generateStaticParams + ISR caching with
// notFound() causes Next.js to cache the not-found render as a 200
// response — force-dynamic renders fresh on every request, which both
// fixes the 404 status and removes the old 60s staleness window.
export const dynamic = "force-dynamic";

async function getPost(slug: string) {
  try {
    return await getBlogPostBySlug(slug);
  } catch {
    return null;
  }
}

// Renders inline markdown: **[label](url)** | **bold** | [label](url)
function renderInline(text: string): React.ReactNode[] {
  const pattern = /\*\*\[([^\]]+)\]\(([^)]+)\)\*\*|\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));

    if (match[1] !== undefined) {
      // **[label](url)** — bold link
      parts.push(
        <strong key={key++}>
          <Link href={match[2]} style={{ color: "#f59e0b", textDecoration: "underline" }}>{match[1]}</Link>
        </strong>
      );
    } else if (match[3] !== undefined) {
      // **bold**
      parts.push(<strong key={key++} style={{ color: "#e2e8f0" }}>{match[3]}</strong>);
    } else {
      // [label](url)
      parts.push(
        <Link key={key++} href={match[5]} style={{ color: "#f59e0b", textDecoration: "underline" }}>{match[4]}</Link>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

// Renders a full post body: splits by blank lines, then detects headings,
// bullet lists, horizontal rules, and plain paragraphs.
function renderContent(content: string): React.ReactNode[] {
  return content.split("\n\n").filter(Boolean).map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} style={{ fontSize: "1.35rem", fontWeight: "700", color: "#f1f5f9", margin: "40px 0 14px", letterSpacing: "-0.02em" }}>
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} style={{ fontSize: "1.1rem", fontWeight: "700", color: "#e2e8f0", margin: "28px 0 10px" }}>
          {block.slice(4)}
        </h3>
      );
    }
    if (block.trim() === "---") {
      return <hr key={i} style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.08)", margin: "40px 0" }} />;
    }
    const lines = block.split("\n");
    if (lines.every(l => l.startsWith("- ") || l.startsWith("* "))) {
      return (
        <ul key={i} style={{ margin: "0 0 24px", paddingLeft: "20px" }}>
          {lines.map((line, j) => (
            <li key={j} style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", marginBottom: "6px" }}>
              {renderInline(line.slice(2))}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", marginBottom: "24px" }}>
        {renderInline(block)}
      </p>
    );
  });
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
    keywords: post.seo.keywords,
    alternates: { canonical: post.seo.canonicalURL ?? `${SITE}/blog/${post.slug}` },
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
            {renderContent(post.content)}

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
