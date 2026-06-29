import type { Metadata } from "next";
import LegalPageWrapper from "../components/layout/LegalPageWrapper";

export const metadata: Metadata = {
  title: "Disclaimer — AllYonoGuru.com",
  description:
    "AllYonoGuru disclaimer: not affiliated with SBI or YONO by SBI. Independent game app directory. 18+. Some apps may be restricted in certain states.",
  alternates: {
    canonical: "https://allyonoguru.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer — AllYonoGuru.com",
    description:
      "AllYonoGuru disclaimer: not affiliated with SBI or YONO by SBI. Independent game app directory. 18+.",
    url: "https://allyonoguru.com/disclaimer",
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

export default function DisclaimerPage() {
  return (
    <LegalPageWrapper
      title="Disclaimer"
      slug="disclaimer"
      lastUpdated="June 2026"
      showDisclaimer
    >
      {/* Primary disclaimer — exact required text (Rule 2) */}
      <div style={{
        padding: "24px 28px",
        background: "rgba(245,158,11,0.06)",
        border: "1px solid rgba(245,158,11,0.2)",
        borderRadius: "14px",
        marginBottom: "40px",
      }}>
        <p style={{
          fontSize: "16px", fontWeight: "600",
          color: "#f1f5f9", lineHeight: "1.7",
          margin: "0 0 12px",
        }}>
          Allyonoguru is not affiliated with, endorsed by, or connected to SBI,
          YONO by SBI, or any bank.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "12px", fontWeight: "700", color: "#f59e0b",
            background: "rgba(245,158,11,0.10)",
            border: "1px solid rgba(245,158,11,0.25)",
            borderRadius: "6px", padding: "4px 12px",
          }}>
            18+
          </span>
          <span style={{
            fontSize: "12px", color: "#64748b",
            background: "rgba(100,116,139,0.08)",
            border: "1px solid rgba(100,116,139,0.15)",
            borderRadius: "6px", padding: "4px 12px",
          }}>
            Some apps may be restricted in certain states.
          </span>
        </div>
      </div>

      <h2 style={h2Style}>No Affiliation with SBI or YONO</h2>
      <p style={prose}>
        AllYonoGuru.com is an independent third-party directory. The names &ldquo;YONO&rdquo;,
        &ldquo;SBI&rdquo;, and related marks are the property of their respective owners.
        AllYonoGuru is not a product of, sponsored by, or in any way connected to the
        State Bank of India or its YONO platform.
      </p>

      <h2 style={h2Style}>Directory Purpose Only</h2>
      <p style={prose}>
        AllYonoGuru provides information about Android skill-based game apps for
        informational and reference purposes only. We do not operate, host, distribute,
        or modify any of the apps listed. By using this directory, you acknowledge that
        AllYonoGuru is not responsible for the content, availability, or conduct of any
        third-party app.
      </p>

      <h2 style={h2Style}>Skill-Based Games</h2>
      <p style={prose}>
        All apps featured on AllYonoGuru are skill-based Android games. These games involve
        strategy, reasoning, and expertise and are distinct from games of chance. However,
        all forms of game play carry inherent risk. Users should play responsibly and within
        their personal limits.
      </p>

      <h2 style={h2Style}>Age Restriction</h2>
      <p style={prose}>
        This website and the apps listed are intended for users who are{" "}
        <strong style={{ color: "#f59e0b" }}>18 years of age or older</strong>. Access
        by minors is not permitted. If you are under 18, please leave this site immediately.
      </p>

      <h2 style={h2Style}>State Restrictions</h2>
      <p style={prose}>
        Certain skill-based game apps may be prohibited, restricted, or regulated in specific
        Indian states. It is your sole responsibility to understand and comply with the laws
        applicable in your state of residence before downloading or using any app listed on
        this site. AllYonoGuru accepts no liability for any violation of local laws.
      </p>

      <h2 style={h2Style}>No Financial Advice</h2>
      <p style={prose}>
        Nothing on AllYonoGuru constitutes financial, legal, or investment advice.
        The directory is for informational purposes only.
      </p>

      <h2 style={h2Style}>External Links</h2>
      <p style={prose}>
        This site contains links to third-party websites and app download pages. These
        links are provided for convenience only. AllYonoGuru has no control over
        third-party content and is not responsible for the accuracy, safety, or legality
        of any external site.
      </p>

      <h2 style={h2Style}>Changes to This Disclaimer</h2>
      <p style={prose}>
        AllYonoGuru reserves the right to update this disclaimer at any time. Continued
        use of the site following any update constitutes acceptance of the revised terms.
      </p>
    </LegalPageWrapper>
  );
}
