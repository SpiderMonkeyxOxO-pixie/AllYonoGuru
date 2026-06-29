"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "../icons/Icons";
import type { FaqItem } from "@/app/lib/types";

interface FAQSectionProps {
  items: FaqItem[];
  heading?: string;
}

export default function FAQSection({
  items,
  heading = "Frequently Asked Questions",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-section-gradient"
      style={{ padding: "80px 24px" }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: "center", marginBottom: "48px" }}
        >
          <span style={{
            display: "inline-block", fontSize: "11px", fontWeight: "700",
            color: "#f59e0b", letterSpacing: "0.1em", textTransform: "uppercase",
            marginBottom: "12px",
          }}>
            FAQ
          </span>
          <h2 id="faq-heading" className="text-headline" style={{ color: "#f1f5f9" }}>
            {heading}
          </h2>
        </motion.div>

        {/* Accordion list */}
        <dl style={{ margin: 0, padding: 0 }}>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  marginBottom: 0,
                }}
              >
                <dt>
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    style={{
                      width: "100%", textAlign: "left",
                      background: "none", border: "none",
                      color: isOpen ? "#f59e0b" : "#e2e8f0",
                      fontSize: "15px", fontWeight: isOpen ? "600" : "500",
                      padding: "20px 0",
                      cursor: "pointer", fontFamily: "inherit",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: "12px",
                      transition: "color 0.2s",
                    }}
                  >
                    <span>{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      style={{ flexShrink: 0, color: isOpen ? "#f59e0b" : "#64748b" }}
                    >
                      <ChevronDownIcon size={18} />
                    </motion.span>
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      key="answer"
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ overflow: "hidden", margin: 0 }}
                    >
                      <p style={{
                        fontSize: "14.5px", color: "#94a3b8",
                        lineHeight: "1.7", padding: "0 0 20px",
                        margin: 0,
                      }}>
                        {item.answer}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
