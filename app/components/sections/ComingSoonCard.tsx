"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ClockIcon, ExternalLinkIcon } from "../icons/Icons";
import type { AppEntry } from "@/app/lib/types";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    done: false,
  };
}

const UNITS: { key: keyof Omit<TimeLeft, "done">; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hrs" },
  { key: "minutes", label: "Min" },
  { key: "seconds", label: "Sec" },
];

export default function ComingSoonCard({ app }: { app: AppEntry }) {
  const target = app.releaseDate ? new Date(app.releaseDate).getTime() : null;
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(target ? getTimeLeft(target) : null);

  useEffect(() => {
    if (!target) return;
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const releaseLabel = app.releaseDate
    ? new Date(app.releaseDate).toLocaleString("en-IN", {
        day: "numeric", month: "short", year: "numeric",
        hour: "numeric", minute: "2-digit", timeZone: "Asia/Kolkata",
      })
    : null;

  return (
    <article
      className="glass-card"
      style={{
        padding: "28px", display: "flex", flexDirection: "column", gap: "20px",
        border: "1px solid rgba(245,158,11,0.18)",
      }}
    >
      {/* Header: icon + name + badges */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
        <div style={{
          width: "60px", height: "60px", borderRadius: "14px", flexShrink: 0,
          overflow: "hidden", position: "relative",
        }}>
          <Image src={app.iconUrl} alt={`${app.name} icon`} fill sizes="60px" style={{ objectFit: "cover" }} />
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "5px",
              fontSize: "10px", fontWeight: "700", color: "#f59e0b",
              background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)",
              borderRadius: "4px", padding: "2px 7px", letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}>
              <ClockIcon size={10} />
              Coming Soon
            </span>
            <span style={{
              fontSize: "10px", color: "#64748b",
              background: "rgba(100,116,139,0.12)", border: "1px solid rgba(100,116,139,0.2)",
              borderRadius: "4px", padding: "2px 7px",
            }}>
              Scheduled
            </span>
          </div>
          <h3 style={{ fontSize: "17px", fontWeight: "700", color: "#f1f5f9", margin: 0, letterSpacing: "-0.02em" }}>
            {app.name}
          </h3>
        </div>
      </div>

      {/* Countdown */}
      {timeLeft && !timeLeft.done && (
        <div style={{ display: "flex", gap: "8px" }}>
          {UNITS.map((u) => (
            <div key={u.key} style={{
              flex: 1, textAlign: "center", background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)", borderRadius: "8px", padding: "8px 4px",
            }}>
              <div style={{ fontSize: "18px", fontWeight: "800", color: "#f59e0b", letterSpacing: "-0.02em" }}>
                {String(timeLeft[u.key]).padStart(2, "0")}
              </div>
              <div style={{ fontSize: "9.5px", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "2px" }}>
                {u.label}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Copy */}
      <div>
        <p style={{ fontSize: "13.5px", fontWeight: "600", color: "#cbd5e1", margin: "0 0 6px" }}>
          {app.name} is joining the Yono game network{releaseLabel ? ` on ${releaseLabel} IST` : ""}.
        </p>
        <p style={{ fontSize: "13px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
          {app.tagline}
        </p>
      </div>

      {/* CTA */}
      {app.launchUpdatesUrl && (
        <a
          href={app.launchUpdatesUrl}
          title={`Get launch updates for ${app.name}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "7px",
            background: "linear-gradient(135deg, #f59e0b, #fb923c)",
            color: "#020817", fontWeight: "700",
            fontSize: "13px", padding: "10px 18px",
            borderRadius: "9px", textDecoration: "none",
            boxShadow: "0 0 16px rgba(245,158,11,0.3)",
          }}
        >
          <ExternalLinkIcon size={13} />
          Get Launch Updates
        </a>
      )}

      <p style={{
        margin: 0, fontSize: "11px", color: "#475569", lineHeight: "1.6",
      }}>
        Category, promo codes, and safety details will be added once the app is available and can be independently reviewed.
      </p>
    </article>
  );
}
