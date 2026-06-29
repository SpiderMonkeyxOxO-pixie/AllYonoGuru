import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BreadcrumbSchema } from "../seo/JsonLd";
import { ChevronRightIcon, ShieldIcon } from "../icons/Icons";

const SITE = "https://allyonoguru.com";

const DISCLAIMER =
  "Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.";

interface Props {
  title: string;
  slug: string;
  lastUpdated?: string;
  children: React.ReactNode;
  showDisclaimer?: boolean;
}

export default function LegalPageWrapper({
  title,
  slug,
  lastUpdated,
  children,
  showDisclaimer = false,
}: Props) {
  const breadcrumbs = [
    { name: "Home", item: SITE },
    { name: title, item: `${SITE}/${slug}` },
  ];

  return (
    <>
      {/* BreadcrumbList JSON-LD — Rule 10 */}
      <BreadcrumbSchema items={breadcrumbs} />

      <Navbar />

      <main id="main-content" role="main" style={{ paddingTop: "68px" }}>

        {/* Page header */}
        <section
          className="legal-header"
          style={{
            background: "linear-gradient(180deg, #0a0f1e 0%, #020817 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>

            {/* Breadcrumb — visible */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: "20px" }}>
              <ol style={{
                listStyle: "none", margin: 0, padding: 0,
                display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap",
              }}>
                <li>
                  <Link
                    href="/"
                    title="AllYonoGuru Home"
                    style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" style={{ color: "#334155" }}>
                  <ChevronRightIcon size={12} />
                </li>
                <li>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }} aria-current="page">
                    {title}
                  </span>
                </li>
              </ol>
            </nav>

            <h1 style={{
              fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
              fontWeight: "800", letterSpacing: "-0.03em",
              color: "#f1f5f9", marginBottom: lastUpdated ? "12px" : "0",
            }}>
              {title}
            </h1>

            {lastUpdated && (
              <p style={{ fontSize: "13px", color: "#475569", margin: "0" }}>
                Last updated: {lastUpdated}
              </p>
            )}

            {/* Disclaimer strip — required on About page (Rule 2) */}
            {showDisclaimer && (
              <div className="disclaimer-strip" style={{ marginTop: "24px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <ShieldIcon size={14} />
                  <div>
                    <p style={{ margin: "0 0 3px", fontSize: "11.5px", color: "#94a3b8", lineHeight: "1.6" }}>
                      {DISCLAIMER}
                    </p>
                    <p style={{ margin: 0, fontSize: "11px", color: "#64748b" }}>
                      <strong style={{ color: "#f59e0b" }}>18+</strong>
                      {" "}· Some apps may be restricted in certain states.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Page content */}
        <section className="legal-body" style={{ background: "#020817" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            {children}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
