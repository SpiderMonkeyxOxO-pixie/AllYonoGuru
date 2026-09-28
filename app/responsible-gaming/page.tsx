import type { Metadata } from "next";
import Link from "next/link";
import LegalPageWrapper from "../components/layout/LegalPageWrapper";

export const metadata: Metadata = {
  title: "Responsible Gaming and Helplines in India — AllYonoGuru.com",
  description:
    "18+ only. The risks of real-money gaming, warning signs, practical steps, and free Indian helplines: Tele-MANAS 14416 and the Cyber Crime Helpline 1930.",
  alternates: { canonical: "https://allyonoguru.com/responsible-gaming" },
  openGraph: {
    title: "Responsible Gaming and Helplines in India — AllYonoGuru.com",
    description: "Risks, warning signs, practical steps and free Indian helplines. 18+ only.",
    url: "https://allyonoguru.com/responsible-gaming",
  },
};

const prose: React.CSSProperties = { fontSize: "15px", color: "#94a3b8", lineHeight: "1.8", marginBottom: "20px" };
const h2Style: React.CSSProperties = {
  fontSize: "20px", fontWeight: "700", color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: "12px", marginTop: "40px",
};
const listStyle: React.CSSProperties = { margin: "0 0 20px", paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" };
const liStyle: React.CSSProperties = { fontSize: "15px", color: "#94a3b8", lineHeight: "1.7" };
const cell: React.CSSProperties = { padding: "10px 12px", borderTop: "1px solid rgba(255,255,255,0.06)", color: "#94a3b8", fontSize: "14px", verticalAlign: "top" };
const link: React.CSSProperties = { color: "#f59e0b" };

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={listStyle}>
      {items.map((item, i) => <li key={i} style={liStyle}>{item}</li>)}
    </ul>
  );
}

export default function ResponsibleGamingPage() {
  return (
    <LegalPageWrapper title="Responsible Gaming" slug="responsible-gaming" lastUpdated="September 28, 2026">
      <div style={{ padding: "20px 24px", background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)", borderRadius: "14px", marginBottom: "32px" }}>
        <p style={{ ...prose, color: "#f1f5f9", margin: 0 }}>
          <strong style={{ color: "#f59e0b" }}>18+ only.</strong> Many apps listed on AllYonoGuru are real-money games.
          Online money games are prohibited in India under the Promotion and Regulation of Online Gaming Act, 2025, in force
          since 1 May 2026. Read our <Link href="/blog/online-gaming-laws-in-india-what-players-should-know" style={link}>legal guide</Link> before using any app.
        </p>
      </div>

      <h2 style={h2Style}>The Risks Are Real</h2>
      <p style={prose}>
        Real-money games are designed so that, over time, most players lose more than they win. Bonuses usually come with
        conditions before any money can be withdrawn. Treat any money put into these apps as money you can afford to lose completely.
      </p>

      <h2 style={h2Style}>Warning Signs</h2>
      <List items={[
        "Playing to win back money you have already lost.",
        "Spending more money or time than you planned, or hiding it from family.",
        "Borrowing money, or using money meant for rent, bills, or fees, to play.",
        "Feeling anxious, irritable, or low when you are not playing.",
        "Losing sleep, or falling behind at work or studies because of gaming.",
      ]} />

      <h2 style={h2Style}>Practical Steps</h2>
      <List items={[
        "Set a fixed budget and time limit before you start, and stop when you reach either one.",
        "Never chase losses.",
        "Use your phone's Digital Wellbeing or Screen Time settings to set app timers.",
        "Uninstall the app if you find it hard to stop, and ask someone you trust to help you stay accountable.",
        "Never share your OTP, UPI PIN, or password with anyone claiming to be support, and ignore offers to recover lost money.",
      ]} />

      <h2 style={h2Style}>Free Helplines in India</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
        <thead>
          <tr>
            <th style={{ ...cell, color: "#e2e8f0", textAlign: "left" }}>Helpline</th>
            <th style={{ ...cell, color: "#e2e8f0", textAlign: "left" }}>What it is for</th>
            <th style={{ ...cell, color: "#e2e8f0", textAlign: "left" }}>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ ...cell, color: "#f1f5f9", fontWeight: 700 }}>Tele-MANAS</td>
            <td style={cell}>Free, confidential 24x7 mental health support from the Ministry of Health and Family Welfare, in English and 20 regional languages</td>
            <td style={cell}>Call <strong>14416</strong> or <strong>1-800-891-4416</strong> · <a href="https://telemanas.mohfw.gov.in/" target="_blank" rel="noopener" style={link}>telemanas.mohfw.gov.in</a></td>
          </tr>
          <tr>
            <td style={{ ...cell, color: "#f1f5f9", fontWeight: 700 }}>National Cyber Crime Helpline</td>
            <td style={cell}>Report online financial fraud, fake apps, or scams, ideally within the first hour so funds can be frozen</td>
            <td style={cell}>Call <strong>1930</strong> · <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener" style={link}>cybercrime.gov.in</a></td>
          </tr>
        </tbody>
      </table>
      <p style={prose}>In an emergency, call <strong>112</strong>.</p>
    </LegalPageWrapper>
  );
}
