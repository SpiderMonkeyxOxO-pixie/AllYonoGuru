"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        background: "#020817",
      }}
    >
      <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#f59e0b", marginBottom: "12px", letterSpacing: "-0.02em" }}>
        Something went wrong
      </h1>
      <p style={{ color: "#94a3b8", maxWidth: "440px", marginBottom: "28px", lineHeight: "1.6", fontSize: "14.5px" }}>
        An unexpected error occurred while loading this page. You can try again, or head back to the homepage.
      </p>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
        <button
          type="button"
          onClick={() => reset()}
          style={{
            background: "linear-gradient(135deg, #f59e0b, #fb923c)",
            color: "#020817", fontWeight: "700", fontSize: "14px",
            padding: "11px 24px", borderRadius: "9px", border: "none",
            cursor: "pointer", fontFamily: "inherit",
          }}
        >
          Try again
        </button>
        <Link
          href="/"
          title="Back to AllYonoGuru Home"
          style={{
            display: "inline-flex", alignItems: "center",
            background: "transparent",
            border: "1px solid rgba(148,163,184,0.25)",
            color: "#94a3b8", fontWeight: "600", fontSize: "14px",
            padding: "11px 24px", borderRadius: "9px", textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
