"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DownloadIcon, ShieldIcon, ExternalLinkIcon, InfoIcon, ChevronRightIcon } from "../components/icons/Icons";
import FAQSection from "../components/sections/FAQSection";
import NetworkGameCard from "../components/sections/NetworkGameCard";
import type { AppEntry } from "../lib/types";
import type { NetworkApp } from "../lib/static-data";

// Hard rules enforced:
// • No win/winning/earn/earning/real money/cash/bonus/jackpot/hack/withdrawal/profit.
// • If primaryDomain !== "allyonoguru" → download CTA points to sibling.
// • Disclaimer + 18+ + state note on every app page.
// • No aggregateRating schema (handled in parent page.tsx).

const SIBLING_URLS: Record<string, string> = {
  allyonoindia:    "https://allyonoindia.com",
  allyonoofficial: "https://allyonoofficial.com",
  allyonoupdate:   "https://allyonoupdate.com",
};

const DISCLAIMER =
  "Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.";

interface Props {
  app: AppEntry;
  relatedApps: NetworkApp[];
}

export default function AppDetailClient({ app, relatedApps }: Props) {
  const isOwned = app.primaryDomain === "allyonoguru";
  const siblingUrl = isOwned ? null : SIBLING_URLS[app.primaryDomain];
  const downloadUrl = isOwned
    ? `#download`
    : `${siblingUrl}/${app.slug}`;

  return (
    <div style={{ paddingTop: "68px" }}>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${app.name} — overview`}
        className="bg-hero-gradient inner-hero"
      >
        <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.3 }} aria-hidden="true" />

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

          {/* Breadcrumb — visible */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "28px" }}>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
              <li>
                <Link href="/" title="AllYonoGuru Home" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRightIcon size={12} /></li>
              <li>
                <span style={{ fontSize: "13px", color: "#94a3b8" }} aria-current="page">
                  {app.name}
                </span>
              </li>
            </ol>
          </nav>

          {/* App header */}
          <div style={{ display: "flex", gap: "24px", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "32px" }}>

            {/* Name + meta */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                {/* Ownership notice for sibling-owned terms */}
                {!isOwned && siblingUrl && (
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: "6px",
                    fontSize: "11px", color: "#94a3b8",
                    background: "rgba(148,163,184,0.08)",
                    border: "1px solid rgba(148,163,184,0.15)",
                    borderRadius: "6px", padding: "4px 10px", marginBottom: "10px",
                  }}>
                    <InfoIcon size={12} />
                    This term is primarily listed on <a href={siblingUrl} rel="nofollow noopener noreferrer" target="_blank" style={{ color: "#f59e0b", textDecoration: "none" }}>{app.primaryDomain}.com</a>
                  </div>
                )}

                <h1 style={{
                  fontSize: "clamp(1.8rem, 5vw, 3rem)",
                  fontWeight: "800", letterSpacing: "-0.03em",
                  color: "#f1f5f9", marginBottom: "8px",
                }}>
                  {app.name}
                </h1>

                {/* Meta badges */}
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "16px" }}>
                  {[
                    { label: `v${app.appVersion}` },
                    { label: app.packageSize },
                    { label: `Android ${app.minAndroid}+` },
                    { label: "Free" },
                  ].map((b) => (
                    <span key={b.label} style={{
                      fontSize: "12px", color: "#64748b",
                      background: "rgba(100,116,139,0.10)",
                      border: "1px solid rgba(100,116,139,0.15)",
                      borderRadius: "6px", padding: "3px 9px",
                    }}>
                      {b.label}
                    </span>
                  ))}
                  <span style={{
                    fontSize: "12px", fontWeight: "700", color: "#f59e0b",
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.2)",
                    borderRadius: "6px", padding: "3px 9px",
                  }}>
                    18+
                  </span>
                </div>

                {/* Tagline — 100–120 chars */}
                <p style={{
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  color: "#94a3b8", lineHeight: "1.65",
                  maxWidth: "640px", marginBottom: "24px",
                }}>
                  {app.tagline}
                </p>

                {/* Download CTA */}
                <div id="download" className="cta-row">
                  {isOwned ? (
                    <motion.a
                      href={app.downloadUrl}
                      title={`Download ${app.name} APK — Free`}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                        color: "#020817", fontWeight: "700",
                        fontSize: "15px", padding: "13px 28px",
                        borderRadius: "10px", textDecoration: "none",
                        boxShadow: "0 0 28px rgba(245,158,11,0.4)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      <DownloadIcon size={16} />
                      Download {app.name} APK
                    </motion.a>
                  ) : (
                    <motion.a
                      href={downloadUrl}
                      title={`Download ${app.name} — ${app.primaryDomain}.com`}
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        background: "rgba(245,158,11,0.08)",
                        border: "1px solid rgba(245,158,11,0.3)",
                        color: "#f59e0b", fontWeight: "700",
                        fontSize: "15px", padding: "13px 28px",
                        borderRadius: "10px", textDecoration: "none",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      <ExternalLinkIcon size={15} />
                      Download at {app.primaryDomain}.com
                    </motion.a>
                  )}

                  <Link
                    href="/"
                    title="Back to all Yono game apps"
                    style={{
                      display: "inline-flex", alignItems: "center",
                      background: "transparent",
                      border: "1px solid rgba(148,163,184,0.2)",
                      color: "#64748b", fontWeight: "500",
                      fontSize: "15px", padding: "13px 22px",
                      borderRadius: "10px", textDecoration: "none",
                    }}
                  >
                    All Apps
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Disclaimer strip — required on every app page (Rule 2) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="disclaimer-strip">
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <ShieldIcon size={14} />
                <div>
                  <p style={{ margin: "0 0 3px", fontSize: "11.5px", color: "#94a3b8", lineHeight: "1.6" }}>
                    {DISCLAIMER}
                  </p>
                  <p style={{ margin: 0, fontSize: "11px", color: "#64748b" }}>
                    <strong style={{ color: "#f59e0b" }}>18+</strong>
                    {" "}· {app.compliance?.stateRestrictionNote ?? "Some apps may be restricted in certain states."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────────────────────── */}
      <section
        aria-label="App details"
        className="inner-section"
        style={{ background: "#0a0f1e" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div className="app-detail-grid">

            {/* Left — description + specs */}
            <div>
              {/* About */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: "48px" }}
              >
                <h2 style={{
                  fontSize: "20px", fontWeight: "700",
                  color: "#f1f5f9", marginBottom: "16px", letterSpacing: "-0.02em",
                }}>
                  About {app.name}
                </h2>
                {app.description.split("\n\n").map((para, i) => (
                  <p key={i} style={{
                    fontSize: "15px", color: "#94a3b8",
                    lineHeight: "1.75",
                    margin: i === 0 ? "0 0 16px" : "0",
                  }}>
                    {para}
                  </p>
                ))}
              </motion.div>

              {/* Technical specs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 style={{
                  fontSize: "20px", fontWeight: "700",
                  color: "#f1f5f9", marginBottom: "16px", letterSpacing: "-0.02em",
                }}>
                  Technical Details
                </h2>
                <dl className="specs-dl" style={{ margin: 0, padding: 0 }}>
                  {[
                    { label: "App Name",         value: app.name },
                    { label: "Version",           value: app.appVersion },
                    { label: "Size",              value: app.packageSize },
                    { label: "Requires Android",  value: `${app.minAndroid} or higher` },
                    { label: "Platform",          value: "Android" },
                    { label: "Price",             value: "Free" },
                  ].map(({ label, value }) => (
                    <div
                      key={label}
                      style={{
                        padding: "14px 18px",
                        background: "rgba(255,255,255,0.02)",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <dt style={{ fontSize: "11px", color: "#475569", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "4px" }}>
                        {label}
                      </dt>
                      <dd style={{ fontSize: "14px", color: "#cbd5e1", margin: 0, fontWeight: "500" }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </div>

            {/* Right — sticky download card */}
            <motion.aside
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              aria-label="Download card"
              className="sidebar-sticky"
              style={{ position: "sticky", top: "88px" }}
            >
              <div className="glass-card" style={{ padding: "28px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#f1f5f9", marginBottom: "4px", letterSpacing: "-0.02em" }}>
                  {app.name}
                </h3>
                <p style={{ fontSize: "12px", color: "#64748b", marginBottom: "20px" }}>
                  {app.packageSize} · Android {app.minAndroid}+ · Free
                </p>

                {isOwned ? (
                  <a
                    href={app.downloadUrl}
                    title={`Download ${app.name} APK`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: "8px", width: "100%",
                      background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                      color: "#020817", fontWeight: "700",
                      fontSize: "14px", padding: "13px",
                      borderRadius: "10px", textDecoration: "none",
                      boxShadow: "0 0 24px rgba(245,158,11,0.35)",
                      marginBottom: "12px",
                    }}
                  >
                    <DownloadIcon size={15} />
                    Download APK
                  </a>
                ) : (
                  <a
                    href={downloadUrl}
                    title={`Download at ${app.primaryDomain}.com`}
                    rel="nofollow noopener noreferrer"
                    target="_blank"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      gap: "8px", width: "100%",
                      background: "rgba(245,158,11,0.08)",
                      border: "1px solid rgba(245,158,11,0.25)",
                      color: "#f59e0b", fontWeight: "700",
                      fontSize: "14px", padding: "13px",
                      borderRadius: "10px", textDecoration: "none",
                      marginBottom: "12px",
                    }}
                  >
                    <ExternalLinkIcon size={14} />
                    Download at {app.primaryDomain}.com
                  </a>
                )}

                {/* Compliance inside card */}
                <div style={{
                  background: "rgba(245,158,11,0.04)",
                  border: "1px solid rgba(245,158,11,0.10)",
                  borderRadius: "8px", padding: "10px 12px",
                }}>
                  <p style={{ margin: 0, fontSize: "11px", color: "#64748b", lineHeight: "1.6" }}>
                    <strong style={{ color: "#f59e0b" }}>18+</strong>{" "}
                    Skill-based game. Not affiliated with SBI or YONO by SBI.
                    {app.compliance?.stateRestrictionNote && (
                      <> {app.compliance.stateRestrictionNote}</>
                    )}
                  </p>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── More Games ───────────────────────────────────────────────────── */}
      {relatedApps.length > 0 && (
        <section
          aria-labelledby="related-apps-heading"
          className="inner-section"
          style={{ background: "rgba(10,15,30,0.8)" }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h2
              id="related-apps-heading"
              style={{
                fontSize: "22px", fontWeight: "700",
                color: "#f1f5f9", marginBottom: "32px", letterSpacing: "-0.02em",
              }}
            >
              More {app.name} Games
            </h2>

            <div className="game-grid">
              {relatedApps.map((relApp) => (
                <motion.div
                  key={relApp.logo}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <NetworkGameCard app={relApp} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      {app.faq && app.faq.length > 0 && (
        <FAQSection
          items={app.faq}
          heading={`${app.name} — FAQs`}
        />
      )}
    </div>
  );
}
