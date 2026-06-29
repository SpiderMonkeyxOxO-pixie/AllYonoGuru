"use client";

import { useState } from "react";
import { SearchIcon, XIcon } from "../icons/Icons";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
}

export default function SearchInput({ value, onChange, placeholder = "Search apps…", ariaLabel }: Props) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ position: "relative", flex: 1, minWidth: "220px" }}>
      <span
        aria-hidden="true"
        style={{
          position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)",
          color: focused ? "#f59e0b" : "#64748b", display: "flex", pointerEvents: "none",
        }}
      >
        <SearchIcon size={16} />
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        aria-label={ariaLabel ?? placeholder}
        style={{
          width: "100%",
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${focused ? "rgba(245,158,11,0.4)" : "rgba(255,255,255,0.08)"}`,
          borderRadius: "10px",
          padding: value ? "11px 40px 11px 40px" : "11px 14px 11px 40px",
          fontSize: "14px",
          color: "#f1f5f9",
          outline: "none",
          transition: "border-color 0.2s",
        }}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          style={{
            position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
            background: "transparent", border: "none", color: "#64748b", cursor: "pointer",
            display: "flex", padding: "4px", borderRadius: "6px",
          }}
        >
          <XIcon size={14} />
        </button>
      )}
    </div>
  );
}
