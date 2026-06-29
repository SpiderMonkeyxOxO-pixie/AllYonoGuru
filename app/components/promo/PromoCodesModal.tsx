"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { XIcon, CheckIcon } from "../icons/Icons";
import type { PromoCardData, PromoTimeSlot } from "../../lib/promo-types";

const SLOTS: { id: PromoTimeSlot; label: string }[] = [
  { id: "morning",   label: "Morning" },
  { id: "afternoon", label: "Afternoon" },
  { id: "evening",   label: "Evening" },
];

function isUrl(value: string): boolean {
  return /^https?:\/\//i.test(value);
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  entries: PromoCardData[];
}

export default function PromoCodesModal({ isOpen, onClose, entries }: Props) {
  const [slot, setSlot] = useState<PromoTimeSlot>("morning");
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [brokenLogos, setBrokenLogos] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (isOpen) setSlot("morning");
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

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
    <AnimatePresence>
      {isOpen && (
          <motion.div
            key="promo-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed", inset: 0, zIndex: 1100,
              background: "rgba(0,0,0,0.65)", backdropFilter: "blur(2px)",
              display: "flex", alignItems: "center", justifyContent: "center",
              padding: "16px",
            }}
          >
          <motion.div
            key="promo-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="promo-codes-heading"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              width: "min(560px, 92vw)", maxHeight: "85vh",
              background: "#0a0f1e",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "18px",
              boxShadow: "0 24px 60px rgba(0,0,0,0.55)",
              display: "flex", flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{ padding: "22px 22px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
                <div>
                  <h2 id="promo-codes-heading" style={{ margin: 0, fontSize: "19px", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em" }}>
                    Promo Codes
                  </h2>
                  <p style={{ margin: "4px 0 0", fontSize: "12.5px", color: "#64748b" }}>
                    Tap Copy to grab a code before it resets.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close promo codes"
                  style={{
                    background: "rgba(255,255,255,0.06)", border: "none", borderRadius: "8px",
                    padding: "7px", color: "#94a3b8", cursor: "pointer", display: "flex", flexShrink: 0,
                  }}
                >
                  <XIcon size={16} />
                </button>
              </div>

              {/* Time slot tabs */}
              <div role="tablist" aria-label="Promo time of day" style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                {SLOTS.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={slot === s.id}
                    onClick={() => setSlot(s.id)}
                    style={{
                      flex: 1, padding: "9px 0", borderRadius: "9px", fontFamily: "inherit",
                      border: slot === s.id ? "1px solid rgba(245,158,11,0.5)" : "1px solid rgba(148,163,184,0.15)",
                      background: slot === s.id ? "#f59e0b" : "transparent",
                      color: slot === s.id ? "#020817" : "#94a3b8",
                      fontWeight: 700, fontSize: "13px", cursor: "pointer",
                      transition: "background 0.15s, color 0.15s, border-color 0.15s",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <p style={{ margin: "12px 0 0", fontSize: "11.5px", color: "#475569" }}>
                {releasedCount} of {entries.length} apps have a {slot} code right now.
              </p>
            </div>

            {/* List */}
            <div style={{ overflowY: "auto", padding: "6px 22px 20px", flex: 1 }}>
              {entries.map((entry) => {
                const code = entry[slot];
                const key = `${entry.name}-${slot}`;
                const copied = copiedKey === key;

                return (
                  <div
                    key={entry.name}
                    style={{
                      display: "flex", alignItems: "center", gap: "14px",
                      padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Logo */}
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "10px", flexShrink: 0,
                      overflow: "hidden", position: "relative", background: "rgba(255,255,255,0.04)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {entry.logo && !brokenLogos.has(entry.name) ? (
                        <Image
                          src={entry.logo}
                          alt={`${entry.name} logo`}
                          fill
                          sizes="42px"
                          style={{ objectFit: "cover" }}
                          onError={() => setBrokenLogos((prev) => new Set(prev).add(entry.name))}
                        />
                      ) : (
                        <span aria-hidden="true" style={{ fontSize: "18px" }}>🎮</span>
                      )}
                    </div>

                    {/* Name + code */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: "0 0 6px", fontSize: "13.5px", fontWeight: 700, color: "#f1f5f9" }}>
                        {entry.slug ? (
                          <Link href={`/${entry.slug}`} onClick={onClose} style={{ color: "inherit", textDecoration: "none" }}>
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
          </motion.div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}
