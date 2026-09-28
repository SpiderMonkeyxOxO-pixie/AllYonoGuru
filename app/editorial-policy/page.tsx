import type { Metadata } from "next";
import Link from "next/link";
import LegalPageWrapper from "../components/layout/LegalPageWrapper";

export const metadata: Metadata = {
  title: "Editorial Policy — AllYonoGuru.com",
  description:
    "How AllYonoGuru researches app identity, versions and rules content, which sources it accepts, how referral links are handled, and how errors are corrected.",
  alternates: { canonical: "https://allyonoguru.com/editorial-policy" },
  openGraph: {
    title: "Editorial Policy — AllYonoGuru.com",
    description: "Sources, verification rules, referral-link handling and corrections at AllYonoGuru.",
    url: "https://allyonoguru.com/editorial-policy",
  },
};

const prose: React.CSSProperties = { fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", marginBottom: "20px" };
const h2Style: React.CSSProperties = {
  fontSize: "20px", fontWeight: "700", color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: "12px", marginTop: "40px",
};
const listStyle: React.CSSProperties = { margin: "0 0 20px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" };
const liStyle: React.CSSProperties = { fontSize: "15px", color: "#94a3b8", lineHeight: "1.7" };
const link: React.CSSProperties = { color: "#f59e0b" };

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={listStyle}>
      {items.map((item, i) => <li key={i} style={liStyle}>{item}</li>)}
    </ul>
  );
}

export default function EditorialPolicyPage() {
  return (
    <LegalPageWrapper title="Editorial Policy" slug="editorial-policy" lastUpdated="September 28, 2026">
      <p style={prose}>
        This page explains how AllYonoGuru decides what to publish, what counts as evidence, and how mistakes are corrected.
        It applies to every app page and guide on the site.
      </p>

      <h2 style={h2Style}>What We Cover</h2>
      <List items={[
        "Card-game rules and mechanics: rummy, Teen Patti and their variants. These guides are general and not tied to any app.",
        "App identity: which app a name such as Rummy Guru or Teen Patti Guru refers to, who publishes it, and where its files come from.",
        "Android safety: APK sources, install warnings and app permissions.",
      ]} />

      <h2 style={h2Style}>Evidence We Accept</h2>
      <List items={[
        "For app identity, versions and developers: the app's own website, terms and privacy policy, Google Play listings, and the package details of the file itself, each recorded with the date checked.",
        "For legal statements: named statutes, rules and official notices, such as the Promotion and Regulation of Online Gaming Act, 2025 published by MeitY.",
        "For game rules: the standard rules of the game, with variations called out where apps or regions differ.",
      ]} />
      <p style={prose}>
        We do not treat an app&apos;s marketing claims, agent messages, Telegram posts, or screenshots shared by users as proof.
        Where sources conflict, we say so and show both, rather than picking one.
      </p>

      <h2 style={h2Style}>Dates and Updates</h2>
      <p style={prose}>
        Guides show when they were published or last updated. Download links and version numbers in this app category change
        often; app pages are updated when a new link or version is confirmed.
      </p>

      <h2 style={h2Style}>Referral Links and Independence</h2>
      <p style={prose}>
        Some download links are referral links, and AllYonoGuru may earn a commission when they are used. They are marked
        as sponsored in the page code and disclosed next to download buttons. AllYonoGuru does not operate any listed app,
        and a referral arrangement does not change what a guide says about an app. See the{" "}
        <Link href="/about" style={link}>About</Link> page.
      </p>

      <h2 style={h2Style}>Legal and Financial Content</h2>
      <p style={prose}>
        Nothing on this site is legal, tax, or financial advice. Online money games are prohibited in India under the Online
        Gaming Act, 2025. Read our <Link href="/disclaimer" style={link}>Disclaimer</Link> and{" "}
        <Link href="/responsible-gaming" style={link}>Responsible Gaming</Link> pages.
      </p>

      <h2 style={h2Style}>Corrections</h2>
      <p style={prose}>
        If you spot an error, use the <Link href="/contact" style={link}>contact page</Link> with the page link and what is
        wrong. Confirmed errors are fixed on the page and its update date is changed.
      </p>
    </LegalPageWrapper>
  );
}
