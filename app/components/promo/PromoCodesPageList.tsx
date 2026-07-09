"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "../icons/Icons";
import type { PromoCardData, PromoTimeSlot } from "../../lib/promo-types";

const SLOTS: { id: PromoTimeSlot; label: string }[] = [
  { id: "morning",   label: "Morning" },
  { id: "afternoon", label: "Afternoon" },
  { id: "evening",   label: "Evening" },
];

function isUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

export default function PromoCodesPageList({ entries }: { entries: PromoCardData[] }) {
  const [slot, setSlot] = useState<PromoTimeSlot>("morning");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [brokenLogos, setBrokenLogos] = useState<Set<string>>(new Set());

  async function handleCopy(code: string, key: string) {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Clipboard API unavailable — code is still visible to copy manually.
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey((cur) => (cur === key ? null : cur)), 1600);
  }

  const releasedCount = entries.filter((e) => e[slot]).length;

  return (
    <div className="glass-card" style={{ overflow: "hidden" }}>
      {/* Time slot tabs */}
      <div style={{ padding: "22px 22px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div role="tablist" aria-label="Promo time of day" style={{ display: "flex", gap: "8px" }}>
          {SLOTS.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={slot === s.id}
              onClick={() => setSlot(s.id)}
              style={{
                flex: 1, padding: "10px 0", borderRadius: "9px", fontFamily: "inherit",
                border: slot === s.id ? "1px solid rgba(245,158,11,0.5)" : "1px solid rgba(148,163,184,0.15)",
                background: slot === s.id ? "#f59e0b" : "transparent",
                color: slot === s.id ? "#020817" : "#94a3b8",
                fontWeight: 700, fontSize: "13.5px", cursor: "pointer",
                transition: "background 0.15s, color 0.15s, border-color 0.15s",
              }}
            >
              {s.label}
            </button>
          ))}
        </div>

        <p style={{ margin: "14px 0 0", fontSize: "12.5px", color: "#475569" }}>
          {releasedCount} of {entries.length} apps have a {slot} code right now.
        </p>
      </div>

      {/* List */}
      <div style={{ padding: "6px 22px 20px" }}>
        {entries.map((entry) => {
          const code = entry[slot];
          const key = `${entry.name}-${slot}`;
          const copied = copiedKey === key;

          return (
            <div
              key={entry.name}
              style={{
                display: "flex", alignItems: "center", gap: "14px",
                padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Logo */}
              <div style={{
                width: "44px", height: "44px", borderRadius: "10px", flexShrink: 0,
                overflow: "hidden", position: "relative", background: "rgba(255,255,255,0.04)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {entry.logo && !brokenLogos.has(entry.name) ? (
                  <Image
                    src={entry.logo}
                    alt={`${entry.name} logo`}
                    fill
                    sizes="44px"
                    style={{ objectFit: "cover" }}
                    onError={() => setBrokenLogos((prev) => new Set(prev).add(entry.name))}
                  />
                ) : (
                  <span aria-hidden="true" style={{ fontSize: "19px" }}>🎮</span>
                )}
              </div>

              {/* Name + code */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 700, color: "#f1f5f9" }}>
                  {entry.slug ? (
                    <Link href={`/${entry.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {entry.name}
                    </Link>
                  ) : (
                    entry.name
                  )}
                </p>

                {code ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {isUrl(code) ? (
                      <a
                        href={code}
                        title={code}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        style={{
                          flex: 1, minWidth: 0, fontSize: "12.5px", color: "#f59e0b",
                          background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)",
                          borderRadius: "6px", padding: "6px 10px", textDecoration: "none",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                          display: "block",
                        }}
                      >
                        {code}
                      </a>
                    ) : (
                      <code
                        title={code}
                        style={{
                          flex: 1, minWidth: 0, fontSize: "12.5px", color: "#f59e0b",
                          background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.18)",
                          borderRadius: "6px", padding: "6px 10px",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                        }}
                      >
                        {code}
                      </code>
                    )}
                    <button
                      type="button"
                      onClick={() => handleCopy(code, key)}
                      style={{
                        flexShrink: 0, display: "flex", alignItems: "center", gap: "5px",
                        fontSize: "12px", fontWeight: 700, fontFamily: "inherit",
                        color: copied ? "#34d399" : "#020817",
                        background: copied ? "rgba(52,211,153,0.12)" : "#f59e0b",
                        border: copied ? "1px solid rgba(52,211,153,0.4)" : "none",
                        borderRadius: "7px", padding: "6px 12px", cursor: "pointer",
                      }}
                    >
                      {copied && <CheckIcon size={11} />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                ) : (
                  <span style={{ fontSize: "12px", color: "#475569" }}>Not released yet</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
