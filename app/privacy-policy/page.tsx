import type { Metadata } from "next";
import LegalPageWrapper from "../components/layout/LegalPageWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — AllYonoGuru.com",
  description:
    "AllYonoGuru privacy policy: how we handle data, cookies, and your rights. Independent, privately owned game app directory.",
  alternates: {
    canonical: "https://allyonoguru.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — AllYonoGuru.com",
    description: "How AllYonoGuru handles your data. Independent, privately owned game directory.",
    url: "https://allyonoguru.com/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <LegalPageWrapper
      title="Privacy Policy"
      slug="privacy-policy"
      lastUpdated="June 2026"
    >
      <p style={prose}>
        This Privacy Policy explains how the owner of{" "}
        <strong style={{ color: "#f1f5f9" }}>AllYonoGuru.com</strong>{" "}
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;AllYonoGuru&rdquo;) collects, uses,
        and protects information when you visit{" "}
        <strong style={{ color: "#f1f5f9" }}>allyonoguru.com</strong>.
      </p>

      <h2 style={h2Style}>Information We Collect</h2>
      <p style={prose}>
        AllYonoGuru is a static directory. We do not require registration or login.
        We do not collect names, phone numbers, or financial data. The only information
        we may receive is:
      </p>
      <ul style={{ ...prose, paddingLeft: "24px", marginTop: "-16px" }}>
        <li style={{ marginBottom: "8px" }}>
          <strong style={{ color: "#cbd5e1" }}>Server logs:</strong> Standard web server
          logs including IP address, browser type, pages visited, and timestamp. These are
          used for security and performance monitoring only and are deleted after 30 days.
        </li>
        <li style={{ marginBottom: "8px" }}>
          <strong style={{ color: "#cbd5e1" }}>Contact form submissions:</strong> If you
          contact us via email, we retain your email address and message to respond to
          your enquiry.
        </li>
        <li>
          <strong style={{ color: "#cbd5e1" }}>Analytics:</strong> We may use Google
          Analytics 4 to understand aggregate traffic patterns. This service sets cookies
          and collects anonymised usage data. See Google&rsquo;s privacy policy for
          details.
        </li>
      </ul>

      <h2 style={h2Style}>Cookies</h2>
      <p style={prose}>
        We use only technically necessary cookies and, if you accept, Google Analytics
        cookies. On your first visit, a cookie banner lets you accept or decline analytics
        cookies — Google Analytics is only loaded if you accept. We do not use advertising
        or tracking cookies. You may change your choice at any time by clearing your
        browser&rsquo;s local storage for this site, or disable cookies entirely in your
        browser settings.
      </p>

      <h2 style={h2Style}>How We Use Information</h2>
      <p style={prose}>
        Information collected is used solely to operate and improve this website, respond
        to enquiries, and maintain security. We do not sell, rent, or share personal data
        with third parties for marketing purposes.
      </p>

      <h2 style={h2Style}>Third-Party Links</h2>
      <p style={prose}>
        AllYonoGuru contains links to third-party app download pages and external sites.
        We are not responsible for the privacy practices of those sites. We recommend
        reviewing the privacy policy of any third-party site before providing personal
        information.
      </p>

      <h2 style={h2Style}>Data Retention</h2>
      <p style={prose}>
        Server logs are retained for up to 30 days. Contact enquiry emails are retained
        for up to 12 months and then deleted. Analytics data is retained as per
        Google&rsquo;s standard retention periods.
      </p>

      <h2 style={h2Style}>Your Rights</h2>
      <p style={prose}>
        You have the right to request access to, correction of, or deletion of any
        personal data we hold about you. To make a request, contact us at{" "}
        <a
          href="mailto:Allyonogurusupport@gmail.com"
          style={{ color: "#f59e0b", textDecoration: "none" }}
        >
          Allyonogurusupport@gmail.com
        </a>
        . We will respond within 30 days.
      </p>

      <h2 style={h2Style}>Children&rsquo;s Privacy</h2>
      <p style={prose}>
        AllYonoGuru is intended for users aged <strong style={{ color: "#f59e0b" }}>18 and above</strong>.
        We do not knowingly collect data from anyone under the age of 18. If you believe
        we have inadvertently collected data from a minor, contact us immediately and we
        will delete it.
      </p>

      <h2 style={h2Style}>Changes to This Policy</h2>
      <p style={prose}>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date
        at the top of this page reflects the most recent revision. Continued use of the
        site after an update constitutes acceptance of the revised policy.
      </p>

      <h2 style={h2Style}>Contact</h2>
      <p style={prose}>
        For privacy-related enquiries or data deletion requests, contact:{" "}
        <a
          href="mailto:Allyonogurusupport@gmail.com"
          style={{ color: "#f59e0b", textDecoration: "none" }}
        >
          Allyonogurusupport@gmail.com
        </a>
        <br />
        AllYonoGuru.com — privately owned, India.
      </p>
    </LegalPageWrapper>
  );
}
