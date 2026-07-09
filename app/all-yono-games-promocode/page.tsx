import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { BreadcrumbSchema, FAQPageSchema } from "../components/seo/JsonLd";
import { ChevronRightIcon, ShieldIcon } from "../components/icons/Icons";
import { getPromoCodes } from "../lib/promo-codes";
import PromoCodesPageList from "../components/promo/PromoCodesPageList";

const SITE = "https://allyonoguru.com";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "All Yono Games Promo Code — Daily Codes for Every App",
  description:
    "Promo codes for every app in the Yono game network, updated across morning, afternoon, and evening slots. Tap to copy the current code for each app.",
  alternates: {
    canonical: `${SITE}/all-yono-games-promocode`,
  },
  openGraph: {
    title: "All Yono Games Promo Code — Daily Codes for Every App",
    description:
      "Promo codes for every app in the Yono game network, updated across morning, afternoon, and evening slots.",
    url: `${SITE}/all-yono-games-promocode`,
    images: [
      {
        url: `${SITE}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AllYonoGuru — All Yono Games Promo Code",
      },
    ],
  },
};

const FAQ = [
  {
    question: "How often do the promo codes update?",
    answer:
      "Codes are organised into three daily slots — morning, afternoon, and evening. An app's code can change between slots, so check back if the one you copied stops working.",
  },
  {
    question: "Why do some apps show \"Not released yet\"?",
    answer:
      "Not every app in the network has a code for every time slot. If an app shows \"Not released yet,\" check the other two time slots or check back later in the day.",
  },
  {
    question: "Do I need to create an account to use a promo code?",
    answer:
      "That depends on the individual app — check the app's own page or its in-app terms for how a code is applied and what, if anything, is required to redeem it.",
  },
];

export default async function PromoCodesPage() {
  const entries = await getPromoCodes();

  const breadcrumbs = [
    { name: "Home", item: SITE },
    { name: "All Yono Games Promo Code", item: `${SITE}/all-yono-games-promocode` },
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQPageSchema items={FAQ} />

      <Navbar />

      <main id="main-content" role="main" style={{ paddingTop: "68px" }}>
        <section className="bg-hero-gradient inner-hero" aria-label="All Yono Games Promo Code">
          <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.25 }} aria-hidden="true" />

          <div style={{ maxWidth: "760px", margin: "0 auto", position: "relative" }}>
            <nav aria-label="Breadcrumb" style={{ marginBottom: "28px" }}>
              <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                <li>
                  <a href="/" title="AllYonoGuru Home" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>
                    Home
                  </a>
                </li>
                <li aria-hidden="true"><ChevronRightIcon size={12} /></li>
                <li>
                  <span style={{ fontSize: "13px", color: "#94a3b8" }} aria-current="page">All Yono Games Promo Code</span>
                </li>
              </ol>
            </nav>

            <h1 style={{
              fontSize: "clamp(1.7rem, 4.5vw, 2.6rem)",
              fontWeight: "800", letterSpacing: "-0.03em",
              color: "#f1f5f9", marginBottom: "16px", lineHeight: "1.2",
            }}>
              All Yono Games Promo Code
            </h1>

            <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.7", marginBottom: "24px", maxWidth: "560px" }}>
              Tap Copy to grab the current code for any app in the Yono game network. Codes are
              organised into morning, afternoon, and evening slots and refresh through the day.
            </p>

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
            <PromoCodesPageList entries={entries} />

            <h2 style={{ fontSize: "1.35rem", fontWeight: "700", color: "#f1f5f9", margin: "40px 0 14px", letterSpacing: "-0.02em" }}>
              Frequently Asked Questions
            </h2>
            {FAQ.map((item) => (
              <div key={item.question} style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#e2e8f0", margin: "0 0 6px" }}>
                  {item.question}
                </h3>
                <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: "1.7", margin: 0 }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
