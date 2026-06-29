import type { Metadata } from "next";
import LegalPageWrapper from "../components/layout/LegalPageWrapper";

export const metadata: Metadata = {
  title: "About AllYonoGuru — Independent Yono Game Apps Directory",
  description:
    "AllYonoGuru is an independent, privately owned directory of skill-based Android game apps. Not affiliated with SBI or YONO by SBI.",
  alternates: {
    canonical: "https://allyonoguru.com/about",
  },
  openGraph: {
    title: "About AllYonoGuru — Independent Yono Game Apps Directory",
    description:
      "Independent directory of skill-based Android game apps. Not affiliated with SBI or YONO by SBI.",
    url: "https://allyonoguru.com/about",
    images: [
      {
        url: "https://allyonoguru.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AllYonoGuru — Independent Yono Game Apps Directory",
      },
    ],
  },
};

const prose: React.CSSProperties = {
  fontSize: "15px",
  color: "#94a3b8",
  lineHeight: "1.8",
  marginBottom: "28px",
};

const h2Style: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#f1f5f9",
  letterSpacing: "-0.02em",
  marginBottom: "12px",
  marginTop: "40px",
};

export default function AboutPage() {
  return (
    <LegalPageWrapper
      title="About AllYonoGuru"
      slug="about"
      showDisclaimer
    >
      <p style={prose}>
        <strong style={{ color: "#f1f5f9" }}>AllYonoGuru.com</strong> is an independent
        online directory of skill-based Android game apps available in the Yono game
        network. We are not a game platform, marketplace, or operator — we list, describe,
        and link to apps so users can find and compare them in one place.
      </p>

      <h2 style={h2Style}>Who We Are</h2>
      <p style={prose}>
        AllYonoGuru is an independent, privately owned website. We have no affiliation, partnership, or
        business relationship with SBI, YONO by SBI, or any bank or financial institution.
      </p>

      <h2 style={h2Style}>What We Do</h2>
      <p style={prose}>
        We maintain an editorially independent directory of Android game apps. Each
        listing includes a description, technical specifications, and a link to the
        app&rsquo;s primary download source. We do not host, distribute, or modify any
        APK files. We do not operate any of the apps listed on this site.
      </p>

      <h2 style={h2Style}>Skill-Based Games</h2>
      <p style={prose}>
        All apps listed on AllYonoGuru are skill-based games. Indian courts have
        consistently held that games such as Rummy require skill, strategy, and knowledge
        and are therefore distinct from games of chance. Users are responsible for
        verifying applicable laws in their state of residence before downloading or
        playing any app.
      </p>

      <h2 style={h2Style}>Age Requirement</h2>
      <p style={prose}>
        AllYonoGuru is intended for users aged <strong style={{ color: "#f59e0b" }}>18 years and above</strong>.
        We do not knowingly provide content or links to users under the age of 18.
        Some apps may have their own age verification requirements.
      </p>

      <h2 style={h2Style}>State Restrictions</h2>
      <p style={prose}>
        Some apps listed on this directory may be restricted or unavailable in certain
        Indian states. Users are solely responsible for ensuring that their use of any
        listed app complies with the laws of their state of residence.
      </p>

      <h2 style={h2Style}>Contact</h2>
      <p style={prose}>
        For enquiries, corrections, or removal requests, please contact us at{" "}
        <a
          href="mailto:Allyonogurusupport@gmail.com"
          style={{ color: "#f59e0b", textDecoration: "none" }}
        >
          Allyonogurusupport@gmail.com
        </a>
        .
      </p>

      {/* Compliance note at bottom — Rule 2 requires disclaimer on about */}
      <div style={{
        marginTop: "48px",
        padding: "20px 24px",
        background: "rgba(245,158,11,0.04)",
        border: "1px solid rgba(245,158,11,0.12)",
        borderRadius: "12px",
        fontSize: "13px",
        color: "#64748b",
        lineHeight: "1.7",
      }}>
        <strong style={{ color: "#f59e0b", display: "block", marginBottom: "6px" }}>
          Important Notice
        </strong>
        Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI,
        or any bank. All apps listed are skill-based games intended for entertainment
        purposes. Play responsibly. <strong style={{ color: "#f59e0b" }}>18+</strong>.
        Some apps may be restricted in certain states.
      </div>
    </LegalPageWrapper>
  );
}
