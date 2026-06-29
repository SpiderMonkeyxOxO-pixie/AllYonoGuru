import type { Metadata } from "next";
import LegalPageWrapper from "../components/layout/LegalPageWrapper";

export const metadata: Metadata = {
  title: "Contact — AllYonoGuru.com",
  description:
    "Contact AllYonoGuru — for enquiries, app listing requests, corrections, or removal requests. Independent, privately owned directory.",
  alternates: {
    canonical: "https://allyonoguru.com/contact",
  },
  openGraph: {
    title: "Contact — AllYonoGuru.com",
    description: "Contact AllYonoGuru for enquiries, corrections, or removal requests.",
    url: "https://allyonoguru.com/contact",
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

const contactCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "14px",
  padding: "24px 28px",
  marginBottom: "16px",
};

export default function ContactPage() {
  return (
    <LegalPageWrapper
      title="Contact Us"
      slug="contact"
    >
      <p style={prose}>
        For questions, corrections, listing requests, or removal requests, please reach
        out using the information below. We aim to respond within{" "}
        <strong style={{ color: "#cbd5e1" }}>3–5 business days</strong>.
      </p>

      {/* Email card */}
      <div style={contactCard}>
        <p style={{ fontSize: "11px", fontWeight: "700", color: "#f59e0b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
          General Enquiries
        </p>
        <a
          href="mailto:Allyonogurusupport@gmail.com"
          style={{ fontSize: "17px", fontWeight: "600", color: "#f1f5f9", textDecoration: "none" }}
        >
          Allyonogurusupport@gmail.com
        </a>
        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "6px", marginBottom: 0 }}>
          App listings · general questions · feedback
        </p>
      </div>

      <div style={contactCard}>
        <p style={{ fontSize: "11px", fontWeight: "700", color: "#f59e0b", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
          Data &amp; Privacy Requests
        </p>
        <a
          href="mailto:Allyonogurusupport@gmail.com"
          style={{ fontSize: "17px", fontWeight: "600", color: "#f1f5f9", textDecoration: "none" }}
        >
          Allyonogurusupport@gmail.com
        </a>
        <p style={{ fontSize: "13px", color: "#64748b", marginTop: "6px", marginBottom: 0 }}>
          Data access · deletion requests · privacy concerns
        </p>
      </div>

      <h2 style={h2Style}>What to Include</h2>
      <p style={prose}>
        To help us respond efficiently, please include:
      </p>
      <ul style={{ ...prose, paddingLeft: "24px", marginTop: "-16px" }}>
        <li style={{ marginBottom: "8px" }}>The page or app listing you are writing about (URL if possible)</li>
        <li style={{ marginBottom: "8px" }}>A clear description of your enquiry or issue</li>
        <li>Your contact email for our reply</li>
      </ul>

      <h2 style={h2Style}>App Listing Requests</h2>
      <p style={prose}>
        If you would like an Android skill-based game app to be considered for listing
        on AllYonoGuru, please email us with the app name, APK download link, and a
        brief description. We review all submissions but cannot guarantee inclusion.
        All listed apps must be skill-based Android games and must comply with our
        editorial standards.
      </p>

      <h2 style={h2Style}>Removal Requests</h2>
      <p style={prose}>
        If you are a rights holder and believe content on AllYonoGuru infringes your
        rights, or if you wish to have a listing removed, please email us with full
        details. We will review and respond within 5 business days.
      </p>

      <h2 style={h2Style}>Company Details</h2>
      <div style={{
        ...contactCard,
        marginTop: "8px",
        borderColor: "rgba(245,158,11,0.12)",
        background: "rgba(245,158,11,0.03)",
      }}>
        <p style={{ fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", margin: 0 }}>
          <strong style={{ color: "#f1f5f9" }}>AllYonoGuru.com</strong><br />
          Privately owned · India<br />
          <a
            href="mailto:Allyonogurusupport@gmail.com"
            style={{ color: "#f59e0b", textDecoration: "none" }}
          >
            Allyonogurusupport@gmail.com
          </a><br />
          <span style={{ fontSize: "12px", color: "#475569" }}>
            AllYonoGuru is not affiliated with SBI or YONO by SBI.
          </span>
        </p>
      </div>
    </LegalPageWrapper>
  );
}
