"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldIcon, ChevronRightIcon } from "../components/icons/Icons";
import FAQSection from "../components/sections/FAQSection";
import NetworkGameCard from "../components/sections/NetworkGameCard";
import SearchInput from "../components/sections/SearchInput";
import type { CategoryEntry } from "../lib/types";
import type { NetworkApp } from "../lib/static-data";

const DISCLAIMER =
  "Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.";

interface Props {
  category: CategoryEntry;
  networkApps: NetworkApp[];
}

export default function CategoryDetailClient({ category, networkApps }: Props) {
  const [query, setQuery] = useState("");

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return networkApps;
    return networkApps.filter(
      (app) => app.name.toLowerCase().includes(q) || app.description.toLowerCase().includes(q)
    );
  }, [networkApps, query]);

  return (
    <div style={{ paddingTop: "68px" }}>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${category.name} — category overview`}
        className="bg-hero-gradient inner-hero"
      >
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25 }} aria-hidden="true" />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "28px" }}>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "6px" }}>
              <li>
                <Link href="/" title="AllYonoGuru Home" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRightIcon size={12} /></li>
              <li>
                <span style={{ fontSize: "13px", color: "#94a3b8" }} aria-current="page">
                  {category.name}
                </span>
              </li>
            </ol>
          </nav>

          {/* Category name */}
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "24px" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h1 style={{
                fontSize: "clamp(1.8rem, 5vw, 3rem)",
                fontWeight: "800", letterSpacing: "-0.03em",
                color: "#f1f5f9",
                marginBottom: "12px",
              }}>
                {category.name}
              </h1>

              <p style={{
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                color: "#64748b", lineHeight: "1.65",
                maxWidth: "600px", marginBottom: "24px",
              }}>
                {category.description}
              </p>

              {/* Keyword + volume */}
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <span style={{
                  fontSize: "12px", color: "#f59e0b",
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.15)",
                  borderRadius: "6px", padding: "4px 10px",
                }}>
                  {category.targetKeyword}
                </span>
                <span style={{
                  fontSize: "12px", color: "#64748b",
                  background: "rgba(100,116,139,0.08)",
                  border: "1px solid rgba(100,116,139,0.15)",
                  borderRadius: "6px", padding: "4px 10px",
                }}>
                  ~{category.searchVolume.toLocaleString()} searches/mo
                </span>
              </div>
            </div>
          </div>

          {/* Disclaimer strip (Rule 2) */}
          <div className="disclaimer-strip">
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <ShieldIcon size={14} />
              <div>
                <p style={{ margin: "0 0 3px", fontSize: "11.5px", color: "#94a3b8", lineHeight: "1.6" }}>
                  {DISCLAIMER}
                </p>
                <p style={{ margin: 0, fontSize: "11px", color: "#64748b" }}>
                  <strong style={{ color: "#f59e0b" }}>18+</strong>
                  {" "}· {category.compliance?.stateRestrictionNote ?? "Some apps may be restricted in certain states."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── App listing ────────────────────────────────────────────────── */}
      <section aria-labelledby="cat-apps-heading" className="inner-section" style={{ background: "#0a0f1e" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 id="cat-apps-heading" style={{
            fontSize: "22px", fontWeight: "700",
            color: "#f1f5f9", marginBottom: "20px", letterSpacing: "-0.02em",
          }}>
            Apps in {category.name}
          </h2>

          {networkApps.length > 4 && (
            <div style={{ maxWidth: "360px", marginBottom: "28px" }}>
              <SearchInput value={query} onChange={setQuery} placeholder={`Search ${category.name}…`} />
            </div>
          )}

          {filteredApps.length === 0 ? (
            <p style={{ color: "#64748b", fontSize: "14px" }}>
              No apps match &quot;{query}&quot;.
            </p>
          ) : (
            <div className="game-grid">
              {filteredApps.map((app) => (
                <motion.div
                  key={app.logo}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <NetworkGameCard app={app} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      {category.faq && category.faq.length > 0 && (
        <FAQSection items={category.faq} heading={`${category.name} — FAQs`} />
      )}
    </div>
  );
}
