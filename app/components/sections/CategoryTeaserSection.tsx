"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GridIcon } from "../icons/Icons";
import type { CategoryEntry } from "@/app/lib/types";

interface CategoryTeaserSectionProps {
  categories: CategoryEntry[];
}

export default function CategoryTeaserSection({ categories }: CategoryTeaserSectionProps) {
  if (categories.length === 0) return null;

  return (
    <section
      aria-labelledby="categories-heading"
      className="section-pad"
      style={{ background: "#020817" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span style={{
            display: "inline-block", fontSize: "11px", fontWeight: "700",
            color: "#f59e0b", letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Yono Game Categories
          </span>
          <h2
            id="categories-heading"
            className="text-headline"
            style={{ color: "#f1f5f9", marginBottom: "12px" }}
          >
            Browse by Game Type
          </h2>
          <p style={{ color: "#64748b", fontSize: "15px", maxWidth: "460px", margin: "0 auto" }}>
            Category directories are being built. Each will feature 3–5 verified apps before going live.
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="game-grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/${cat.slug}`}
                title={cat.name}
                style={{ textDecoration: "none", display: "block" }}
              >
                <article
                  className="glass-card"
                  style={{
                    padding: "28px",
                    borderColor: "rgba(100,116,139,0.15)",
                    transition: "border-color 0.25s, transform 0.25s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,158,11,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(100,116,139,0.15)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Icon */}
                  <div style={{ display: "flex", marginBottom: "16px" }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "12px",
                      background: "rgba(100,116,139,0.08)",
                      border: "1px solid rgba(100,116,139,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#64748b",
                    }}>
                      <GridIcon size={22} />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 style={{
                    fontSize: "16px", fontWeight: "700",
                    color: "#94a3b8", marginBottom: "8px",
                    letterSpacing: "-0.02em",
                  }}>
                    {cat.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: "13px", color: "#475569",
                    lineHeight: "1.6", marginBottom: "16px",
                  }}>
                    {cat.description.length > 100
                      ? cat.description.slice(0, 100) + "…"
                      : cat.description}
                  </p>

                  {/* Target keyword */}
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{
                      fontSize: "11px", color: "#64748b",
                      background: "rgba(100,116,139,0.08)",
                      border: "1px solid rgba(100,116,139,0.15)",
                      borderRadius: "5px", padding: "2px 8px",
                    }}>
                      {cat.targetKeyword}
                    </span>
                    <span style={{
                      fontSize: "11px", color: "#475569",
                      background: "rgba(100,116,139,0.05)",
                      border: "1px solid rgba(100,116,139,0.10)",
                      borderRadius: "5px", padding: "2px 8px",
                    }}>
                      {cat.searchVolume.toLocaleString()} searches/mo
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
