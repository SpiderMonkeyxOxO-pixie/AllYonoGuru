"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldIcon } from "../icons/Icons";
import RunningBanner from "./RunningBanner";

// ─── Hard rules enforced here ─────────────────────────────────────────────────
// • Exact disclaimer: "Allyonoguru is not affiliated with, endorsed by, or
//   connected to SBI, YONO by SBI, or any bank."
// • 18+ badge mandatory.
// • "Some apps may be restricted in certain states."
// • NO links to allyonoindia / allyonoofficial / allyonoupdate.
// • Internal app links only.
// • Organization JSON-LD rendered here.
// ─────────────────────────────────────────────────────────────────────────────

const DISCLAIMER =
  "Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.";

const FOOTER_LINKS = [
  {
    heading: "Guru Apps",
    links: [
      { label: "Rummy Guru",       href: "/rummy-guru" },
      { label: "Teen Patti Guru",  href: "/teen-patti-guru" },
    ],
  },
  {
    heading: "Yono Games",
    links: [
      { label: "Yono Game Spin",   href: "/yono-game-spin" },
      { label: "Share Slots Yono", href: "/share-slots-yono" },
    ],
  },
  {
    heading: "Info",
    links: [
      { label: "Blog",             href: "/blog" },
      { label: "About",            href: "/about" },
      { label: "Disclaimer",       href: "/disclaimer" },
      { label: "Privacy Policy",   href: "/privacy-policy" },
      { label: "Contact",          href: "/contact" },
    ],
  },
];

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AllYonoGuru.com",
  legalName: "AllYonoGuru.com",
  url: "https://allyonoguru.com",
  logo: {
    "@type": "ImageObject",
    url: "https://allyonoguru.com/logo.png",
    width: 512,
    height: 512,
  },
  description:
    "AllYonoGuru.com is an independent directory of Android skill-based game apps in the Yono game network. Not affiliated with SBI or YONO by SBI.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "Allyonogurusupport@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  foundingDate: "2025",
  areaServed: { "@type": "Country", name: "India" },
  inLanguage: "en-IN",
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
    <footer
      role="contentinfo"
      style={{
        background: "#0a0f1e",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "56px 24px 32px",
      }}
    >
      {/* Organization JSON-LD — sitewide, lives in footer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* ── Top: brand col + nav grid ── */}
        <div className="footer-top-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <Link
              href="/"
              title="AllYonoGuru.com — Home"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}
            >
              <Image src="/logo.png" alt="AllYonoGuru" width={40} height={40} style={{ width: "40px", height: "40px" }} />
              <span style={{
                fontSize: "11px", fontWeight: "500",
                color: "#64748b",
              }}>.com</span>
            </Link>

            <p style={{
              fontSize: "13px", color: "#64748b", lineHeight: "1.6",
              maxWidth: "260px", marginBottom: "20px",
            }}>
              Independent directory of Android skill-based game apps in the Yono game network.
            </p>

            {/* Disclaimer strip */}
            <div className="disclaimer-strip" style={{ maxWidth: "300px", marginBottom: "16px" }}>
              <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <ShieldIcon size={14} />
                <p style={{ margin: 0, fontSize: "11.5px", color: "#94a3b8", lineHeight: "1.6" }}>
                  {DISCLAIMER}
                </p>
              </div>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{
                display: "inline-flex", alignItems: "center",
                fontSize: "11px", fontWeight: "700",
                color: "#f59e0b",
                background: "rgba(245,158,11,0.10)",
                border: "1px solid rgba(245,158,11,0.25)",
                borderRadius: "6px", padding: "4px 10px",
                letterSpacing: "0.04em",
              }}>
                18+
              </span>
              <span style={{
                display: "inline-flex", alignItems: "center",
                fontSize: "11px", color: "#64748b",
                background: "rgba(100,116,139,0.08)",
                border: "1px solid rgba(100,116,139,0.15)",
                borderRadius: "6px", padding: "4px 10px",
              }}>
                Some apps may be restricted in certain states.
              </span>
            </div>
          </div>

          {/* Nav grid */}
          <nav aria-label="Footer navigation">
            <div className="footer-nav-grid">
              {FOOTER_LINKS.map((col) => (
                <div key={col.heading}>
                  <h3 style={{
                    fontSize: "11px", fontWeight: "700",
                    color: "#f59e0b", letterSpacing: "0.08em",
                    textTransform: "uppercase", marginBottom: "14px",
                  }}>
                    {col.heading}
                  </h3>
                  <ul role="list" style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          title={link.label}
                          style={{
                            fontSize: "13.5px", color: "#64748b",
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#cbd5e1";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                          }}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* ── Divider ── */}
        <div style={{
          height: "1px",
          background: "rgba(255,255,255,0.06)",
          margin: "40px 0 24px",
        }} />

        {/* ── Bottom bar ── */}
        <div style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "#475569", margin: 0 }}>
            © {year} AllYonoGuru.com. All rights reserved.
          </p>
          <p style={{ fontSize: "11.5px", color: "#334155", margin: 0, maxWidth: "520px", textAlign: "right" }}>
            For entertainment and information only. Skill-based games involve risk. Play responsibly.
          </p>
        </div>
      </div>
    </footer>
    <RunningBanner />
    </>
  );
}
