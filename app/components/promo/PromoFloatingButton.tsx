"use client";

import { motion } from "framer-motion";

export default function PromoFloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label="Open promo codes"
      title="Promo Codes"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.7, duration: 0.45, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: "fixed",
        bottom: "18px",
        right: "16px",
        zIndex: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "7px",
        minHeight: "48px",
        background: "linear-gradient(135deg, #f59e0b, #fb923c)",
        color: "#020817",
        fontWeight: 700,
        fontSize: "13px",
        fontFamily: "inherit",
        padding: "12px 18px",
        borderRadius: "100px",
        border: "none",
        cursor: "pointer",
        whiteSpace: "nowrap",
        boxShadow: "0 8px 28px rgba(245,158,11,0.45), 0 0 0 1px rgba(245,158,11,0.15)",
      }}
    >
      <span className="promo-fab-short">Promo</span>
      <span className="promo-fab-full">Promo Codes</span>
    </motion.button>
  );
}
