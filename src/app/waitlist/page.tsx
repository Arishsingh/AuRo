export default function Waitlist() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#ebebeb",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "520px", padding: "0 24px" }}>

        <a href="/" style={{ fontSize: "13px", color: "#6b7280", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "48px" }}>
          ← Back
        </a>

        <h1 style={{ fontSize: "2.8rem", fontWeight: 700, color: "#111", margin: "0 0 12px", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
          Join the<br />
          <em style={{ fontStyle: "italic", fontFamily: "Georgia, serif", fontWeight: 400 }}>waiting list</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", lineHeight: 1.7, margin: "0 0 40px" }}>
          AuRo is launching soon. Be among the first to experience medical clarity — for patients, caregivers, and healthcare providers.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <input
            type="email"
            placeholder="Your email address"
            style={{ width: "100%", backgroundColor: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", fontSize: "14px", padding: "14px 16px", borderRadius: "10px", outline: "none", color: "#111", boxSizing: "border-box" }}
          />
          <select
            style={{ width: "100%", backgroundColor: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)", fontSize: "14px", padding: "14px 16px", borderRadius: "10px", outline: "none", color: "#6b7280", appearance: "none", boxSizing: "border-box" }}
          >
            <option value="">I am a...</option>
            <option value="patient">Patient</option>
            <option value="caregiver">Caregiver / Family member</option>
            <option value="provider">Healthcare provider</option>
            <option value="hospital">Hospital / Clinic</option>
          </select>
          <button
            style={{ width: "100%", backgroundColor: "#111", color: "white", fontSize: "14px", fontWeight: 600, padding: "14px 20px", borderRadius: "10px", border: "none", cursor: "pointer", letterSpacing: "-0.01em", marginTop: "4px" }}
          >
            Request early access →
          </button>
        </div>

        <p style={{ fontSize: "11.5px", color: "#9ca3af", margin: "16px 0 0", textAlign: "center" }}>
          No spam. We'll only reach out when AuRo is ready for you.
        </p>

      </div>
    </div>
  );
}
