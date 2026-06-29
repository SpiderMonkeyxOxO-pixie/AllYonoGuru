"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SearchInput from "./SearchInput";
import { type NetworkApp } from "../../lib/static-data";

type Tab = "all" | "rummy" | "teen-patti" | "spin" | "slots";

const TABS: { id: Tab; label: string }[] = [
  { id: "all",        label: "All Apps" },
  { id: "rummy",      label: "Rummy" },
  { id: "teen-patti", label: "Teen Patti & Arcade" },
  { id: "spin",       label: "Spin" },
  { id: "slots",      label: "Slots" },
];

export default function NetworkShowcaseSection({ apps }: { apps: NetworkApp[] }) {
  const [active, setActive] = useState<Tab>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const byCategory = active === "all" ? apps : apps.filter((a) => a.category === active);
    const q = query.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((a) => a.name.toLowerCase().includes(q));
  }, [apps, active, query]);

  return (
    <section
      aria-label="Yono network apps showcase"
      className="section-network"
      style={{ background: "rgba(15,23,42,0.6)" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "36px" }}
        >
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#f59e0b", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>
            Directory
          </p>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "800", color: "#f1f5f9", letterSpacing: "-0.03em", margin: "0 0 12px" }}>
            Yono Network Apps
          </h2>
          <p style={{ fontSize: "14px", color: "#64748b", maxWidth: "480px", margin: "0 auto" }}>
            {apps.length} skill-based Android game apps in the Yono network. Independent listing — 18+.
          </p>
        </motion.div>

        {/* Search */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div style={{ width: "100%", maxWidth: "360px" }}>
            <SearchInput value={query} onChange={setQuery} placeholder="Search network apps…" ariaLabel="Search network apps" />
          </div>
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Filter apps by category"
          style={{ display: "flex", justifyContent: "center", gap: "8px", flexWrap: "wrap", marginBottom: "36px" }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={active === tab.id}
              onClick={() => setActive(tab.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "8px",
                border: active === tab.id ? "1px solid rgba(245,158,11,0.5)" : "1px solid rgba(148,163,184,0.15)",
                background: active === tab.id ? "rgba(245,158,11,0.12)" : "transparent",
                color: active === tab.id ? "#f59e0b" : "#64748b",
                fontWeight: "600",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.18s",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {visible.length === 0 && (
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "14px", padding: "32px 0" }}>
            No network apps match &quot;{query}&quot;.
          </p>
        )}

        {/* Logo grid */}
        <motion.div
          key={active + query}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            gap: "16px",
          }}
        >
          {visible.map((app) => (
            <div
              key={app.logo}
              title={app.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "8px",
                padding: "12px 8px",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(255,255,255,0.02)",
                transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(245,158,11,0.25)";
                el.style.background = "rgba(245,158,11,0.04)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "rgba(255,255,255,0.05)";
                el.style.background = "rgba(255,255,255,0.02)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ position: "relative", width: "72px", height: "72px", borderRadius: "16px", overflow: "hidden", flexShrink: 0 }}>
                <Image
                  src={app.logo}
                  alt={`${app.name} app icon`}
                  fill
                  sizes="72px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span style={{
                fontSize: "11px",
                color: "#94a3b8",
                fontWeight: "600",
                textAlign: "center",
                lineHeight: "1.3",
                wordBreak: "break-word",
              }}>
                {app.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom note */}
        <p style={{ textAlign: "center", fontSize: "12px", color: "#334155", marginTop: "40px" }}>
          AllYonoGuru is an independent directory. Not affiliated with SBI or YONO by SBI. 18+ only.
        </p>
      </div>
    </section>
  );
}
