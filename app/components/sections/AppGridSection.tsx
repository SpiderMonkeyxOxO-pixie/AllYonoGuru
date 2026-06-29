"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { DownloadIcon, ExternalLinkIcon, ShieldIcon, ChevronDownIcon } from "../icons/Icons";
import SearchInput from "./SearchInput";
import type { AppEntry } from "@/app/lib/types";

// Hard rule: if primaryDomain !== "allyonoguru", CTA points to the sibling domain.
// Hard rule: never use win/earn/cash/bonus/jackpot/hack/withdrawal/profit.

interface AppGridSectionProps {
  apps: AppEntry[];
}

const SIBLING_DOMAINS: Record<string, string> = {
  allyonoindia:    "https://allyonoindia.com",
  allyonoofficial: "https://allyonoofficial.com",
  allyonoupdate:   "https://allyonoupdate.com",
};

// Apps published before `networkCategory` existed — inferred for filtering only.
const CATEGORY_FALLBACK: Record<string, NonNullable<AppEntry["networkCategory"]>> = {
  "rummy-guru":      "rummy",
  "teen-patti-guru": "teen-patti",
};

const CATEGORY_TABS: { id: "all" | NonNullable<AppEntry["networkCategory"]>; label: string }[] = [
  { id: "all",        label: "All Apps" },
  { id: "rummy",      label: "Rummy" },
  { id: "teen-patti", label: "Teen Patti & Arcade" },
  { id: "spin",       label: "Spin" },
  { id: "slots",      label: "Slots" },
];

type SortMode = "default" | "name" | "popular";

function getCategory(app: AppEntry) {
  return app.networkCategory ?? CATEGORY_FALLBACK[app.slug];
}

function getDownloadUrl(app: AppEntry): { url: string; isExternal: boolean } {
  if (app.primaryDomain === "allyonoguru") {
    return { url: `/${app.slug}#download`, isExternal: false };
  }
  const base = SIBLING_DOMAINS[app.primaryDomain] ?? "#";
  return { url: `${base}/${app.slug}`, isExternal: true };
}

export default function AppGridSection({ apps }: AppGridSectionProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORY_TABS[number]["id"]>("all");
  const [sortBy, setSortBy] = useState<SortMode>("default");

  const filteredApps = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matched = apps.filter((app) => {
      if (activeCategory !== "all" && getCategory(app) !== activeCategory) return false;
      if (!q) return true;
      return (
        app.name.toLowerCase().includes(q) ||
        app.tagline.toLowerCase().includes(q) ||
        app.targetKeyword.toLowerCase().includes(q)
      );
    });

    if (sortBy === "name") {
      return [...matched].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "popular") {
      return [...matched].sort((a, b) => b.searchVolume - a.searchVolume);
    }
    return matched;
  }, [apps, query, activeCategory, sortBy]);

  const isFiltered = query.trim() !== "" || activeCategory !== "all";

  function clearFilters() {
    setQuery("");
    setActiveCategory("all");
  }

  return (
    <section
      id="apps"
      aria-labelledby="apps-heading"
      className="bg-section-gradient section-pad"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <span style={{
            display: "inline-block", fontSize: "11px", fontWeight: "700",
            color: "#f59e0b", letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            Featured Guru Apps
          </span>
          <h2
            id="apps-heading"
            className="text-headline"
            style={{ color: "#f1f5f9", marginBottom: "12px" }}
          >
            Skill-Based Game Apps
          </h2>
          <p style={{ color: "#64748b", fontSize: "15px", maxWidth: "500px", margin: "0 auto" }}>
            All apps listed are free to download and play. Skill-based games for Android. 18+.
          </p>
        </motion.div>

        {/* Search + filter toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "28px" }}
        >
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
            <SearchInput
              value={query}
              onChange={setQuery}
              placeholder="Search by name, e.g. &quot;Rummy&quot;…"
              ariaLabel="Search apps"
            />

            <div style={{ position: "relative", flexShrink: 0 }}>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortMode)}
                aria-label="Sort apps"
                style={{
                  appearance: "none",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "11px 36px 11px 14px",
                  fontSize: "13.5px", fontWeight: "500",
                  color: "#cbd5e1",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                <option value="default">Sort: Featured</option>
                <option value="popular">Sort: Most Searched</option>
                <option value="name">Sort: Name (A–Z)</option>
              </select>
              <span
                aria-hidden="true"
                style={{
                  position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                  color: "#64748b", pointerEvents: "none", display: "flex",
                }}
              >
                <ChevronDownIcon size={14} />
              </span>
            </div>
          </div>

          {/* Category filter chips */}
          <div role="group" aria-label="Filter by category" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeCategory === tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: "7px 16px",
                  borderRadius: "8px",
                  border: activeCategory === tab.id ? "1px solid rgba(245,158,11,0.5)" : "1px solid rgba(148,163,184,0.15)",
                  background: activeCategory === tab.id ? "rgba(245,158,11,0.12)" : "transparent",
                  color: activeCategory === tab.id ? "#f59e0b" : "#64748b",
                  fontWeight: "600",
                  fontSize: "12.5px",
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
              >
                {tab.label}
              </button>
            ))}

            {isFiltered && (
              <button
                type="button"
                onClick={clearFilters}
                style={{
                  padding: "7px 14px",
                  borderRadius: "8px",
                  border: "1px solid rgba(148,163,184,0.15)",
                  background: "transparent",
                  color: "#94a3b8",
                  fontWeight: "500",
                  fontSize: "12.5px",
                  cursor: "pointer",
                  marginLeft: "auto",
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Results count */}
          {isFiltered && (
            <p style={{ fontSize: "12.5px", color: "#475569", marginTop: "14px", marginBottom: 0 }}>
              Showing {filteredApps.length} of {apps.length} apps
            </p>
          )}
        </motion.div>

        {/* Empty state */}
        {filteredApps.length === 0 && (
          <div style={{
            textAlign: "center", padding: "56px 24px",
            border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px",
            background: "rgba(255,255,255,0.02)",
          }}>
            <p style={{ color: "#94a3b8", fontSize: "15px", marginBottom: "16px" }}>
              No apps match &quot;{query}&quot;{activeCategory !== "all" ? " in this category" : ""}.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              style={{
                display: "inline-flex", alignItems: "center", gap: "7px",
                background: "rgba(245,158,11,0.1)",
                border: "1px solid rgba(245,158,11,0.25)",
                color: "#f59e0b", fontWeight: "600",
                fontSize: "13px", padding: "9px 18px",
                borderRadius: "9px", cursor: "pointer",
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* App cards grid */}
        <div className="game-grid">
          {filteredApps.map((app, i) => {
            const { url: dlUrl, isExternal } = getDownloadUrl(app);
            const isOwned = app.primaryDomain === "allyonoguru";

            return (
              <motion.article
                key={app.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(i, 8) * 0.06 }}
                className="glass-card card-hover"
                style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}
              >
                {/* Card header: icon + name */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  {/* Icon */}
                  <div style={{
                    width: "60px", height: "60px", borderRadius: "14px", flexShrink: 0,
                    overflow: "hidden", position: "relative",
                  }}>
                    <Image
                      src={app.iconUrl}
                      alt={`${app.name} icon`}
                      fill
                      sizes="60px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                      <h3 style={{
                        fontSize: "17px", fontWeight: "700",
                        color: "#f1f5f9", margin: 0, letterSpacing: "-0.02em",
                      }}>
                        {app.name}
                      </h3>
                      {!isOwned && (
                        <span style={{
                          fontSize: "10px", color: "#64748b",
                          background: "rgba(100,116,139,0.12)",
                          border: "1px solid rgba(100,116,139,0.2)",
                          borderRadius: "4px", padding: "2px 6px",
                        }}>
                          External
                        </span>
                      )}
                    </div>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      <span style={{ fontSize: "12px", color: "#64748b" }}>v{app.appVersion}</span>
                      <span style={{ fontSize: "12px", color: "#64748b" }}>{app.packageSize}</span>
                      <span style={{ fontSize: "12px", color: "#64748b" }}>Android {app.minAndroid}+</span>
                    </div>
                  </div>
                </div>

                {/* Tagline — 100–120 chars, compliant copy */}
                <p style={{
                  fontSize: "13.5px", color: "#94a3b8", lineHeight: "1.6",
                  margin: 0, flex: 1,
                }}>
                  {app.tagline}
                </p>

                {/* Keyword tag */}
                <div>
                  <span style={{
                    display: "inline-block",
                    fontSize: "11px", color: "#f59e0b",
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.15)",
                    borderRadius: "6px", padding: "3px 9px",
                    letterSpacing: "0.02em",
                  }}>
                    {app.targetKeyword}
                  </span>
                </div>

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {/* Primary CTA — if not owned, points to sibling with rel=nofollow */}
                  {isOwned ? (
                    <Link
                      href={dlUrl}
                      title={`Download ${app.name} APK`}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "7px",
                        background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                        color: "#020817", fontWeight: "700",
                        fontSize: "13px", padding: "10px 18px",
                        borderRadius: "9px", textDecoration: "none", flex: 1,
                        justifyContent: "center",
                        boxShadow: "0 0 16px rgba(245,158,11,0.3)",
                      }}
                    >
                      <DownloadIcon size={14} />
                      Download APK
                    </Link>
                  ) : (
                    <a
                      href={dlUrl}
                      title={`Download ${app.name} APK — ${app.primaryDomain}`}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "7px",
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.25)",
                        color: "#f59e0b", fontWeight: "600",
                        fontSize: "13px", padding: "10px 18px",
                        borderRadius: "9px", textDecoration: "none", flex: 1,
                        justifyContent: "center",
                      }}
                    >
                      <ExternalLinkIcon size={13} />
                      Download at {app.primaryDomain}
                    </a>
                  )}

                  {/* "Learn more" always points to our page */}
                  <Link
                    href={`/${app.slug}`}
                    title={`${app.name} — full details`}
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      gap: "6px",
                      background: "transparent",
                      border: "1px solid rgba(148,163,184,0.2)",
                      color: "#64748b", fontWeight: "500",
                      fontSize: "13px", padding: "10px 16px",
                      borderRadius: "9px", textDecoration: "none",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                  >
                    Details
                  </Link>
                </div>

                {/* Compliance note */}
                <p style={{
                  margin: 0, fontSize: "11px", color: "#475569",
                  display: "flex", alignItems: "center", gap: "5px",
                }}>
                  <ShieldIcon size={11} />
                  18+ · Skill-based game · {app.compliance?.stateRestrictionNote}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
