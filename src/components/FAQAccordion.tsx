"use client";

import { useState } from "react";

const faqs = [
  { q: "Is AuRo a replacement for my doctor?", a: "No. AuRo is a translation layer — not a diagnostic tool. It helps you understand what your doctor has already told you, making their guidance clearer and easier to follow." },
  { q: "What documents can I upload?", a: "You can upload prescriptions, lab reports, discharge summaries, doctor's notes, imaging reports, and any other medical document. AuRo handles most common formats including PDF and images." },
  { q: "Is my health data safe?", a: "Yes. AuRo processes your documents in real time and never stores your health data. Your information is encrypted in transit and permanently deleted after your session ends." },
  { q: "How accurate is AuRo's explanation?", a: "AuRo is built on medical-grade AI trained on clinical literature. It achieves 94% accuracy in document understanding. All explanations are aligned with the treating physician's notes." },
  { q: "Can my family members use AuRo?", a: "Absolutely. AuRo is designed for patients and caregivers alike. Family members can upload documents on behalf of a patient and receive explanations in plain language." },
  { q: "When is AuRo launching?", a: "We're in the final stages of development. Join the waiting list to be notified the moment we launch — early access members get 3 months of Pro free." },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ flex: 1, fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {faqs.map(({ q, a }, i) => (
        <div
          key={q}
          style={{
            borderTop: i === 0 ? "1px solid rgba(0,0,0,0.1)" : "none",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
          }}
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "22px 0",
              display: "flex",
              alignItems: "center",
              gap: "32px",
              textAlign: "left",
            }}
          >
            <span style={{ flexShrink: 0, width: "24px", fontSize: "12px", color: "#9ca3af", fontVariantNumeric: "tabular-nums" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{ flex: 1, fontSize: "13.5px", fontWeight: 500, color: "#111", letterSpacing: "-0.01em" }}>{q}</span>
            <span
              style={{
                flexShrink: 0,
                fontSize: "18px",
                color: "#9ca3af",
                transition: "transform 0.2s ease",
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                display: "inline-block",
                lineHeight: 1,
              }}
            >
              +
            </span>
          </button>

          {open === i && (
            <div style={{ paddingLeft: "56px", paddingBottom: "22px" }}>
              <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.75, margin: 0 }}>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
