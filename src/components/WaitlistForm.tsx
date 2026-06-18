"use client";
import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok || res.status === 409) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Try again.");
      }
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <p style={{ fontSize: "13.5px", fontWeight: 600, color: "#111" }}>
        You&apos;re now on the waiting list!
      </p>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "6px" }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          style={{ fontSize: "13.5px", padding: "10px 18px", borderRadius: "999px", border: "1px solid rgba(0,0,0,0.15)", backgroundColor: "#f5f5f5", outline: "none", width: "220px", color: "#111" }}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{ fontSize: "13.5px", fontWeight: 600, letterSpacing: "-0.01em", backgroundColor: "#111", color: "white", padding: "10px 24px", borderRadius: "999px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}
        >
          {loading ? "Joining..." : "Try for free"}
        </button>
      </div>
      {error && <p style={{ fontSize: "12px", color: "#ef4444", margin: 0 }}>{error}</p>}
    </div>
  );
}
