"use client";

import Image from "next/image";
import { DownloadIcon } from "../icons/Icons";
import type { NetworkApp } from "../../lib/static-data";

interface Props {
  app: NetworkApp;
}

export default function NetworkGameCard({ app }: Props) {
  return (
    <article
      className="glass-card"
      style={{
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
    >
      {/* Logo + name row */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "14px",
            overflow: "hidden",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Image
            src={app.logo}
            alt={`${app.name} app icon`}
            fill
            sizes="64px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#f1f5f9",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {app.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: "13px",
          color: "#94a3b8",
          lineHeight: "1.6",
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
        }}
      >
        {app.description}
      </p>

      {/* Download button */}
      <a
        href={app.downloadUrl}
        title={`Download ${app.name} APK`}
        rel="nofollow noopener noreferrer"
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "7px",
          width: "100%",
          background: "linear-gradient(135deg, #f59e0b, #fb923c)",
          color: "#020817",
          fontWeight: "700",
          fontSize: "13px",
          padding: "10px 16px",
          borderRadius: "9px",
          textDecoration: "none",
          boxSizing: "border-box",
        }}
      >
        <DownloadIcon size={14} />
        Download APK
      </a>

      {/* Compliance note */}
      <p
        style={{
          margin: 0,
          fontSize: "11px",
          color: "#475569",
          lineHeight: "1.5",
        }}
      >
        18+ · Skill-based game · Some apps may be restricted.
      </p>
    </article>
  );
}
