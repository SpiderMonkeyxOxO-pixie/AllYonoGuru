import Link from "next/link";
import Image from "next/image";
import type { BlogPostEntry } from "../../lib/types";

interface Props {
  post: BlogPostEntry;
}

export default function BlogPostCard({ post }: Props) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })
    : null;

  return (
    <Link href={`/blog/${post.slug}`} title={post.title} style={{ textDecoration: "none", display: "block" }}>
      <article className="glass-card" style={{ overflow: "hidden", height: "100%" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", background: "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(2,8,23,0.4))" }}>
          {post.coverImage ? (
            <Image src={post.coverImage} alt={post.title} fill sizes="(max-width: 640px) 100vw, 50vw" style={{ objectFit: "cover" }} />
          ) : (
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#f59e0b", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                {post.tag ?? "AllYonoGuru"}
              </span>
            </div>
          )}
        </div>

        <div className="blog-card-body">
          {post.tag && (
            <span className="blog-card-tag" style={{
              display: "inline-block", fontWeight: "700",
              color: "#f59e0b", background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.15)",
              borderRadius: "6px",
              letterSpacing: "0.03em",
            }}>
              {post.tag}
            </span>
          )}

          <h3 className="blog-card-title" style={{
            fontWeight: "700",
            color: "#f1f5f9",
            letterSpacing: "-0.02em", lineHeight: "1.35",
          }}>
            {post.title}
          </h3>

          <p className="blog-card-excerpt" style={{
            color: "#94a3b8",
            lineHeight: "1.5",
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            {post.excerpt}
          </p>

          <div className="blog-card-meta" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#475569" }}>
            <span>{post.author}</span>
            {date && <span>· {date}</span>}
          </div>
        </div>
      </article>
    </Link>
  );
}
