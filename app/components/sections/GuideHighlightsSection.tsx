"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPostEntry } from "../../lib/types";
import BlogPostCard from "./BlogPostCard";
import { ChevronRightIcon } from "../icons/Icons";

interface Props {
  posts: BlogPostEntry[];
}

// Additive homepage section only — does not touch the Hero's title, H1, or
// metadata, and does not remove any existing homepage section. Surfaces a
// sample of the site's genuine educational core (see app/lib/guide-taxonomy.ts)
// directly below the hero, ahead of the app directory grid.
export default function GuideHighlightsSection({ posts }: Props) {
  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="guide-highlights-heading"
      className="section-pad"
      style={{ background: "#020817" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "flex", alignItems: "flex-end", justifyContent: "space-between",
          flexWrap: "wrap", gap: "16px", marginBottom: "36px",
        }}>
          <div>
            <p style={{
              fontSize: "11px", fontWeight: "700", color: "#f59e0b",
              letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px",
            }}>
              Education
            </p>
            <h2
              id="guide-highlights-heading"
              className="text-headline"
              style={{ color: "#f1f5f9", marginBottom: "8px" }}
            >
              Guides — How These Games Actually Work
            </h2>
            <p style={{ color: "#64748b", fontSize: "14px", maxWidth: "480px", margin: 0 }}>
              Rules, scoring, strategy, and Android safety — independently written, not tied to any single app.
            </p>
          </div>

          <Link
            href="/guides"
            title="Browse all guides"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              color: "#f59e0b", fontSize: "13.5px", fontWeight: "600",
              textDecoration: "none", flexShrink: 0,
            }}
          >
            All Guides
            <ChevronRightIcon size={14} />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="blog-grid"
        >
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
