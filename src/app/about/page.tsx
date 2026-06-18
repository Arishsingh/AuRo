import { ChevronDown } from "lucide-react";

export default function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#ebebeb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          padding: "16px 24px 80px",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div style={{ position: "absolute", left: "18px", top: 0, bottom: 0, width: "1px", backgroundColor: "rgba(0,0,0,0.15)" }} />
        <div style={{ position: "absolute", right: "18px", top: 0, bottom: 0, width: "1px", backgroundColor: "rgba(0,0,0,0.15)" }} />

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <nav style={{ display: "flex", alignItems: "center", backgroundColor: "#1a1a1a", borderRadius: "999px", padding: "5px 6px", gap: "2px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 16px 4px 8px" }}>
              <span style={{ color: "white", fontWeight: 600, fontSize: "14px", letterSpacing: "-0.01em" }}>AuRo</span>
            </div>
            {["Customers", "Use Cases", "Pricing", "Log in"].map((item) => (
              <a key={item} href="#" style={{ color: "#9ca3af", fontSize: "13.5px", padding: "6px 14px", borderRadius: "999px", textDecoration: "none", whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: "3px" }}>
                {item}{item === "Use Cases" && <ChevronDown size={13} />}
              </a>
            ))}
            <button style={{ marginLeft: "2px", backgroundColor: "white", color: "#111", fontSize: "13.5px", fontWeight: 500, padding: "7px 18px", borderRadius: "999px", border: "1.5px solid #e5e7eb", cursor: "pointer", whiteSpace: "nowrap" }}>
              Try for free
            </button>
          </nav>
        </div>

        <div style={{ marginLeft: "20px", marginRight: "20px" }}>

          <div style={{ display: "flex", gap: "80px", alignItems: "flex-start", marginBottom: "56px" }}>
            <div style={{ flexShrink: 0, width: "160px", paddingTop: "6px" }}>
              <p style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.5, margin: 0 }}>
                AI Medical Companion<br />
                built for patients
              </p>
            </div>

            <div style={{ flex: 1, maxWidth: "680px" }}>
              <p style={{ fontSize: "1.75rem", fontWeight: 500, lineHeight: 1.35, color: "#111", margin: 0, letterSpacing: "-0.02em" }}>
                AuRo bridges the gap between doctors and patients. Upload your prescription, lab report, or discharge summary — and leave every consultation with complete clarity, confidence, and calm.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "12px", alignItems: "stretch" }}>

            <div
              style={{
                flex: 1,
                backgroundColor: "#1a1a1a",
                borderRadius: "16px",
                padding: "28px 28px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
              }}
            >
              <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "white", letterSpacing: "-0.04em", lineHeight: 1 }}>87%</div>
              <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: 1.6, margin: 0, maxWidth: "200px" }}>
                of patients felt <strong style={{ color: "#d1d5db" }}>significantly less anxious</strong> about their diagnosis after using AuRo
              </p>
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: "#1a1a1a",
                borderRadius: "16px",
                padding: "28px 28px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
              }}
            >
              <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "white", letterSpacing: "-0.04em", lineHeight: 1 }}>3×</div>
              <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: 1.6, margin: 0, maxWidth: "200px" }}>
                faster treatment adherence when patients <strong style={{ color: "#d1d5db" }}>truly understand</strong> their health journey and recovery plan
              </p>
            </div>

            <div
              style={{
                flex: 1,
                backgroundColor: "#1a1a1a",
                borderRadius: "16px",
                padding: "28px 28px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "260px",
                backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
                position: "relative",
              }}
            >
              <div style={{ fontSize: "3.5rem", fontWeight: 700, color: "white", letterSpacing: "-0.04em", lineHeight: 1 }}>0</div>
              <p style={{ fontSize: "12px", color: "#9ca3af", lineHeight: 1.6, margin: 0, maxWidth: "200px" }}>
                medical misunderstandings when AuRo <strong style={{ color: "#d1d5db" }}>translates your doctor's notes</strong> into plain, reassuring language
              </p>
              <div style={{ position: "absolute", bottom: "28px", right: "28px", width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: "16px" }}>↗</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <a
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13.5px",
                color: "#111",
                textDecoration: "none",
                border: "1px solid rgba(0,0,0,0.2)",
                borderRadius: "999px",
                padding: "8px 18px",
                fontWeight: 500,
              }}
            >
              Back to Home →
            </a>

            <a
              href="#"
              style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "1.1rem", fontWeight: 600, color: "#111", textDecoration: "none" }}
            >
              <span>↗</span> Try AuRo free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
