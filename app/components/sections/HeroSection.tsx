"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShieldIcon, DownloadIcon } from "../icons/Icons";

const DISCLAIMER =
  "Allyonoguru is not affiliated with, endorsed by, or connected to SBI, YONO by SBI, or any bank.";

interface HeroSectionProps {
  appCount: number;
}

export default function HeroSection({ appCount }: HeroSectionProps) {
  return (
    <section
      aria-label="Hero — Yono Game All directory"
      className="bg-hero-gradient hero-main"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Ambient grid */}
      <div className="bg-grid" style={{ position: "absolute", inset: 0, opacity: 0.4 }} aria-hidden="true" />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "-120px", left: "50%", transform: "translateX(-50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: "flex", justifyContent: "center", marginBottom: "28px" }}
        >
          <span className="status-verified">
            <span className="status-dot" />
            Independent Game Directory · India
          </span>
        </motion.div>

        {/* H1 — target keyword: "yono game all" */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-display"
          style={{ textAlign: "center", marginBottom: "20px", color: "#f1f5f9" }}
        >
          Yono Game All —{" "}
          <span className="gradient-text">Android Skill </span>
          <br aria-hidden="true" />
          Game Apps Directory
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          style={{
            textAlign: "center", fontSize: "clamp(1rem, 2.2vw, 1.2rem)",
            color: "#94a3b8", lineHeight: "1.7",
            maxWidth: "600px", margin: "0 auto 36px",
          }}
        >
          AllYonoGuru is an independent directory of skill-based Android game apps
          in the Yono game network. Find, compare, and download safely.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "48px" }}
        >
          <Link
            href="#apps"
            title="Browse all Yono game apps"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "linear-gradient(135deg, #f59e0b, #fb923c)",
              color: "#020817", fontWeight: "700",
              fontSize: "15px", padding: "13px 28px",
              borderRadius: "10px", textDecoration: "none",
              boxShadow: "0 0 28px rgba(245,158,11,0.4)",
              letterSpacing: "-0.01em",
            }}
          >
            <DownloadIcon size={16} />
            Browse Apps
          </Link>
          <Link
            href="/about"
            title="About AllYonoGuru"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: "transparent",
              border: "1px solid rgba(148,163,184,0.25)",
              color: "#94a3b8", fontWeight: "600",
              fontSize: "15px", padding: "13px 28px",
              borderRadius: "10px", textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
          >
            About
          </Link>
        </motion.div>

        {/* Disclaimer strip — required in hero (Hard Rule 2) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ maxWidth: "680px", margin: "0 auto" }}
        >
          <div className="disclaimer-strip">
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <ShieldIcon size={15} />
              <div>
                <p style={{ margin: "0 0 4px", fontSize: "12px", color: "#94a3b8", lineHeight: "1.6" }}>
                  {DISCLAIMER}
                </p>
                <p style={{ margin: 0, fontSize: "11.5px", color: "#64748b" }}>
                  <strong style={{ color: "#f59e0b" }}>18+</strong>
                  {" "}· Some apps may be restricted in certain states.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap",
            gap: "32px", marginTop: "48px",
          }}
        >
          {[
            { value: `${appCount}+`, label: "Listed Apps" },
            { value: "Free", label: "To Download" },
            { value: "18+", label: "Age Required" },
            { value: "Android", label: "Platform" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "clamp(1.4rem, 3vw, 1.9rem)",
                fontWeight: "800", letterSpacing: "-0.03em",
                background: "linear-gradient(135deg, #f59e0b, #fb923c)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px", letterSpacing: "0.02em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
