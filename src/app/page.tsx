import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#ebebeb",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "fixed",
          left: "calc(50% - 776px)",
          top: 0,
          bottom: 0,
          width: "1px",
          backgroundColor: "rgba(0,0,0,0.15)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      <div
        style={{
          position: "fixed",
          right: "calc(50% - 776px)",
          top: 0,
          bottom: 0,
          width: "1px",
          backgroundColor: "rgba(0,0,0,0.15)",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          padding: "16px 24px 80px",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#1a1a1a",
              borderRadius: "999px",
              padding: "5px 6px",
              gap: "2px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 16px 4px 8px",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: 600,
                  fontSize: "14px",
                  letterSpacing: "-0.01em",
                }}
              >
                AuRo
              </span>
            </div>

            {["Customers", "Use Cases", "Pricing", "Log in"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#9ca3af",
                  fontSize: "13.5px",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                {item}
                {item === "Use Cases" && <ChevronDown size={13} />}
              </a>
            ))}

            <button
              style={{
                marginLeft: "2px",
                backgroundColor: "white",
                color: "#111",
                fontSize: "13.5px",
                fontWeight: 500,
                padding: "7px 18px",
                borderRadius: "999px",
                border: "1.5px solid #e5e7eb",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Try for free
            </button>
          </nav>
        </div>

        <div
          style={{
            borderRadius: "14px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            marginLeft: "20px",
            marginRight: "20px",
            boxShadow: "0 40px 80px -10px rgba(255,255,255,0.8)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16 / 6.2",
            }}
          >
            <Image
              src="/hero.png"
              alt="AuRo hero"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "44px",
            marginLeft: "20px",
            marginRight: "20px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <div style={{ flex: 1, maxWidth: "540px" }}>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "#0d0d0d",
                margin: 0,
              }}
            >
              Your diagnosis, explained
              <br />
              so you leave with{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                clarity
              </em>
            </h1>

            <p
              style={{
                marginTop: "28px",
                fontSize: "13px",
                color: "#6b7280",
                letterSpacing: "0.01em",
              }}
            >
              Trusted by patients at leading hospitals such as
            </p>

            <div
              style={{
                marginTop: "14px",
                display: "flex",
                alignItems: "center",
                gap: "32px",
                flexWrap: "wrap",
              }}
            >
              <LogoMonzo />
              <LogoGuild />
              <LogoCleo />
              <LogoTrademe />
              <LogoParadigm />
            </div>
          </div>

          <div style={{ flexShrink: 0, width: "380px", paddingTop: "4px" }}>
            <p
              style={{
                fontSize: "13.5px",
                color: "#4b5563",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Upload your prescription, lab report, or discharge
              <br />
              summary — AuRo turns medical jargon into clarity.
            </p>

            <div style={{ marginTop: "14px", display: "flex", gap: "8px" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flex: 1,
                  minWidth: 0,
                  backgroundColor: "#f3f4f6",
                  border: "1px solid #e5e7eb",
                  fontSize: "13px",
                  padding: "10px 14px",
                  borderRadius: "10px",
                  outline: "none",
                  color: "#111",
                }}
              />
              <button
                style={{
                  backgroundColor: "#111",
                  color: "white",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "10px 18px",
                  borderRadius: "10px",
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Try for free
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          padding: "80px 44px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "80px",
            alignItems: "flex-start",
            marginBottom: "56px",
          }}
        >
          <div style={{ flexShrink: 0, width: "160px", paddingTop: "6px" }}>
            <p
              style={{
                fontSize: "12px",
                color: "#6b7280",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              AI Medical Companion
              <br />
              built for patients
            </p>
          </div>
          <div style={{ flex: 1, maxWidth: "680px" }}>
            <p
              style={{
                fontSize: "1.75rem",
                fontWeight: 500,
                lineHeight: 1.35,
                color: "#111",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              AuRo bridges the gap between doctors and patients. Upload your
              prescription, lab report, or discharge summary — and leave every
              consultation with complete clarity, confidence, and calm.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
          <div
            style={{
              flex: 1,
              backgroundColor: "#1a1a1a",
              borderRadius: "32px 32px 32px 8px",
              padding: "32px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
            }}
          >
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              87%
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              of patients felt significantly less anxious about their diagnosis
              after using AuRo
            </p>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: "#1a1a1a",
              borderRadius: "8px 32px 32px 32px",
              padding: "32px",
              height: "260px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
            }}
          >
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              3×
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              faster treatment adherence when patients truly understand their
              health journey
            </p>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: "#1a1a1a",
              borderRadius: "32px 8px 32px 32px",
              padding: "32px",
              height: "320px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "3.5rem",
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              0
            </div>
            <p
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              medical misunderstandings when AuRo translates your doctor's notes
              into plain language
            </p>
            <div
              style={{
                position: "absolute",
                bottom: "28px",
                right: "28px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "white", fontSize: "16px" }}>↗</span>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }}>
          <a
            href="#"
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
            Learn more about AuRo →
          </a>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          padding: "80px 120px 120px",
          position: "relative",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#9ca3af",
            margin: "0 0 28px",
            textTransform: "uppercase",
          }}
        >
          About
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "#111",
            maxWidth: "620px",
            margin: "0 auto 80px",
            letterSpacing: "-0.02em",
          }}
        >
          AuRo translates the complexity of medicine into calm, clear
          understanding — so every patient leaves their consultation with
          confidence, not confusion.
        </p>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          padding: "16px 120px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: 400,
            color: "#111",
            margin: "0 0 60px",
            letterSpacing: "-0.02em",
          }}
        >
          Services
        </h2>

        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.12)",
            paddingTop: "40px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "80px",
          }}
        >
          {[
            {
              title: "Document Analysis",
              body: "AuRo reads and understands any medical document — prescriptions, lab reports, discharge summaries, and imaging reports. We extract every meaningful detail so nothing is missed.",
            },
            {
              title: "Plain Language",
              body: "Complex medical terminology is translated into simple, calm, and reassuring language. Every diagnosis, medication, and instruction is explained clearly for patients and their families.",
            },
            {
              title: "AI Video",
              body: "A personalized AI-generated video walks the patient through their condition, treatment plan, and recovery journey. Visual explanations improve retention and reduce anxiety.",
            },
            {
              title: "Family Support",
              body: "AuRo helps caregivers and family members understand the patient's health journey — including warning signs, follow-up steps, and what to expect during recovery.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#111",
                  margin: "0 0 14px",
                }}
              >
                {title}
              </p>
              <p
                style={{
                  fontSize: "12.5px",
                  color: "#6b7280",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
              padding: "20px 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#111" }}>
              Features
            </div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>Starter</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>Basic</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>Pro</div>
            <div style={{ fontSize: "13px", color: "#6b7280" }}>Enterprise</div>
          </div>

          {[
            {
              feature: "Prescription Analysis",
              s: true,
              b: true,
              p: true,
              e: true,
            },
            {
              feature: "Lab Report Explanation",
              s: true,
              b: true,
              p: true,
              e: true,
            },
            {
              feature: "Discharge Summary",
              s: false,
              b: true,
              p: true,
              e: true,
            },
            {
              feature: "Imaging Report Support",
              s: false,
              b: false,
              p: true,
              e: true,
            },
            {
              feature: "AI Video Generation",
              s: false,
              b: false,
              p: true,
              e: true,
            },
            {
              feature: "Family Caregiver Mode",
              s: false,
              b: true,
              p: true,
              e: true,
            },
            {
              feature: "Multi-language Support",
              s: false,
              b: false,
              p: true,
              e: true,
            },
            {
              feature: "Warning Sign Alerts",
              s: true,
              b: true,
              p: true,
              e: true,
            },
            {
              feature: "Doctor Q&A Summary",
              s: false,
              b: false,
              p: false,
              e: true,
            },
            {
              feature: "EHR Integration",
              s: false,
              b: false,
              p: false,
              e: true,
            },
            {
              feature: "Priority Support",
              s: false,
              b: false,
              p: true,
              e: true,
            },
          ].map(({ feature, s, b, p, e }) => (
            <div
              key={feature}
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                padding: "14px 0",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "12.5px", color: "#374151" }}>
                {feature}
              </div>
              {[s, b, p, e].map((active, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "16px",
                    color: active ? "#111" : "#d1d5db",
                  }}
                >
                  {active ? "●" : "○"}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{ width: "100%", maxWidth: "1600px", padding: "40px 44px 80px" }}
      >
        <div style={{ display: "flex", gap: "60px", padding: "48px 12px" }}>
          <div
            style={{
              flexShrink: 0,
              width: "220px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#111",
                  margin: "0 0 12px",
                }}
              >
                Plans & Pricing
              </p>
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  backgroundColor: "#111",
                  marginBottom: "20px",
                }}
              />
              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                AuRo is built for every patient — from a single consultation to
                full enterprise healthcare integration. Choose the plan that
                fits your needs.
              </p>
            </div>
            <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>
              AuRo · 2025
            </p>
          </div>

          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "1.8rem",
                fontWeight: 500,
                color: "#111",
                lineHeight: 1.3,
                margin: "0 0 36px",
                letterSpacing: "-0.02em",
              }}
            >
              AI-powered medical clarity for patients, families, and healthcare
              providers worldwide
            </h2>

            <div style={{ display: "flex", gap: "12px", marginBottom: "36px" }}>
              <div
                style={{
                  flex: 1,
                  borderRadius: "14px",
                  backgroundColor: "#e0e0e0",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#6b7280",
                      margin: "0 0 10px",
                    }}
                  >
                    Starter
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 12px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Free
                  </p>
                  <p
                    style={{
                      fontSize: "11.5px",
                      color: "#6b7280",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Prescription & lab report analysis. Plain language
                    explanations.
                  </p>
                </div>
                <button
                  style={{
                    marginTop: "16px",
                    backgroundColor: "transparent",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "999px",
                    padding: "7px 16px",
                    fontSize: "12px",
                    color: "#374151",
                    cursor: "pointer",
                  }}
                >
                  Get started
                </button>
              </div>

              <div
                style={{
                  flex: 1,
                  borderRadius: "14px",
                  backgroundColor: "#c8c8c8",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#4b5563",
                      margin: "0 0 10px",
                    }}
                  >
                    Pro
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#111",
                      margin: "0 0 12px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    $9
                    <span style={{ fontSize: "13px", fontWeight: 400 }}>
                      {" "}
                      /mo
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "11.5px",
                      color: "#4b5563",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Everything in Starter + AI video, discharge summaries,
                    family mode.
                  </p>
                </div>
                <button
                  style={{
                    marginTop: "16px",
                    backgroundColor: "#111",
                    border: "none",
                    borderRadius: "999px",
                    padding: "7px 16px",
                    fontSize: "12px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Try Pro
                </button>
              </div>

              <div
                style={{
                  flex: 1,
                  borderRadius: "14px",
                  backgroundColor: "#1a1a1a",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "180px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#9ca3af",
                      margin: "0 0 10px",
                    }}
                  >
                    Enterprise
                  </p>
                  <p
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "white",
                      margin: "0 0 12px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    Custom
                  </p>
                  <p
                    style={{
                      fontSize: "11.5px",
                      color: "#9ca3af",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    EHR integration, multi-language, priority support, team
                    accounts.
                  </p>
                </div>
                <button
                  style={{
                    marginTop: "16px",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "999px",
                    padding: "7px 16px",
                    fontSize: "12px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Contact us
                </button>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(0,0,0,0.12)" }}>
              {[
                {
                  name: "Starter — Basic document analysis",
                  price: "Free forever",
                },
                {
                  name: "Pro — Full AI explanations + video",
                  price: "From $9 / month",
                },
                {
                  name: "Enterprise — EHR integration + teams",
                  price: "Custom pricing",
                },
              ].map(({ name, price }) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "#374151" }}>
                    {name}
                  </span>
                  <span style={{ fontSize: "13px", color: "#6b7280" }}>
                    {price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: "1600px", padding: "40px 120px 80px" }}>
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>

          <div style={{ flexShrink: 0, width: "200px", paddingTop: "4px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#111", margin: "0 0 8px" }}>FAQ</p>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 500, color: "#111", margin: 0, letterSpacing: "-0.02em", lineHeight: 1.2 }}>Frequently asked</h2>
          </div>

          <FAQAccordion />
        </div>
      </div>

      <div style={{ width: "100%", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 44px" }}>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "56px 0" }}>
            {[
              { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>), title: "Instant Analysis", desc: "Upload any medical document and receive a clear explanation in under 3 minutes." },
              { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>), title: "100% Private", desc: "Your health data is never stored or shared. AuRo processes and forgets." },
              { icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>), title: "Doctor-Aligned", desc: "AuRo explains — never diagnoses. Always aligned with your doctor's guidance." },
            ].map(({ icon, title, desc }, i) => (
              <div key={title} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 48px", borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none", color: "#111" }}>
                <div style={{ marginBottom: "16px", opacity: 0.7 }}>{icon}</div>
                <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#111", margin: "0 0 8px" }}>{title}</p>
                <p style={{ fontSize: "12.5px", color: "#6b7280", lineHeight: 1.7, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", padding: "36px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>AuRo is launching soon — be among the first to get access.</p>
            <a href="/waitlist" style={{ fontSize: "13.5px", fontWeight: 600, textDecoration: "none", letterSpacing: "-0.01em", backgroundColor: "#111", color: "white", padding: "10px 24px", borderRadius: "999px", display: "inline-block" }}>
              Join the waiting list
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          backgroundColor: "#1a1a1a",
          padding: "48px 0 48px",
        }}
      >
        <div
          style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 44px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              gap: "40px",
              paddingBottom: "48px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "white",
                  margin: "0 0 8px",
                  letterSpacing: "-0.02em",
                }}
              >
                AuRo
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Start seeing your health with clarity.
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "white",
                  margin: "0 0 16px",
                }}
              >
                Contact
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                We're here to help
                <br />
                hello@auro.health
                <br />
                <br />
                Monday to Friday
                <br />
                10am to 6pm IST
              </p>
            </div>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "white",
                  margin: "0 0 16px",
                }}
              >
                Help
              </p>
              {[
                "FAQ",
                "How AuRo works",
                "Privacy Policy",
                "Terms of Service",
              ].map((l) => (
                <p
                  key={l}
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    margin: "0 0 10px",
                    cursor: "pointer",
                  }}
                >
                  {l}
                </p>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "white",
                  margin: "0 0 16px",
                }}
              >
                Product
              </p>
              {[
                "For Patients",
                "For Caregivers",
                "For Hospitals",
                "Pricing",
              ].map((l) => (
                <p
                  key={l}
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    margin: "0 0 10px",
                    cursor: "pointer",
                  }}
                >
                  {l}
                </p>
              ))}
            </div>
          </div>

          <div
            style={{
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "11px", color: "#4b5563", margin: 0 }}>
              © 2025 AuRo. All rights reserved.
            </p>
            <p style={{ fontSize: "11px", color: "#4b5563", margin: 0 }}>
              Built with care for every patient.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "none" }}>
        <p
          style={{
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "#9ca3af",
            margin: "0 0 64px",
            textTransform: "uppercase",
          }}
        >
          How it works
        </p>

        <svg
          style={{
            position: "absolute",
            top: "140px",
            left: "120px",
            width: "calc(100% - 240px)",
            height: "700px",
            pointerEvents: "none",
          }}
          viewBox="0 0 900 700"
          preserveAspectRatio="none"
        >
          <path
            d="M 200 60 C 200 180, 700 180, 700 300"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 4"
          />
          <path
            d="M 700 300 C 700 420, 200 420, 200 540"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 4"
          />
          <path
            d="M 200 540 C 200 640, 700 640, 700 700"
            stroke="rgba(0,0,0,0.15)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 4"
          />
          <circle cx="200" cy="60" r="4" fill="#111" />
          <circle cx="700" cy="300" r="4" fill="#111" />
          <circle cx="200" cy="540" r="4" fill="#111" />
          <circle cx="700" cy="700" r="4" fill="#111" />
        </svg>

        <div style={{ display: "flex", flexDirection: "column", gap: "100px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "40px",
              maxWidth: "420px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 800,
                  color: "#c1a882",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                01
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#111",
                  margin: "0 0 10px",
                  lineHeight: 1.3,
                }}
              >
                Upload your documents
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Share your prescription, lab report, discharge summary, or
                doctor's notes — any medical document works.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ maxWidth: "420px" }}>
              <div
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 800,
                  color: "#c1a882",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                02
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#111",
                  margin: "0 0 10px",
                  lineHeight: 1.3,
                }}
              >
                AI reads and understands
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                AuRo's AI analyzes the medical content, identifies key
                conditions, medications, and what they mean for you.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: "420px" }}>
            <div
              style={{
                fontSize: "2.8rem",
                fontWeight: 800,
                color: "#c1a882",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: "12px",
              }}
            >
              03
            </div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 600,
                color: "#111",
                margin: "0 0 10px",
                lineHeight: 1.3,
              }}
            >
              Get a plain explanation
            </h3>
            <p
              style={{
                fontSize: "13.5px",
                color: "#6b7280",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Receive a calm, clear breakdown of your condition — what it means,
              how the treatment works, and what to expect during recovery.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ maxWidth: "420px" }}>
              <div
                style={{
                  fontSize: "2.8rem",
                  fontWeight: 800,
                  color: "#c1a882",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "12px",
                }}
              >
                04
              </div>
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  color: "#111",
                  margin: "0 0 10px",
                  lineHeight: 1.3,
                }}
              >
                Watch your AI video
              </h3>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "#6b7280",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                A personalized AI-generated video walks you through what's
                happening inside your body and what your recovery journey looks
                like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoMonzo() {
  return (
    <span style={{ fontWeight: 600, fontSize: "14px", color: "#111" }}>
      Apollo
    </span>
  );
}

function LogoGuild() {
  return (
    <span style={{ fontWeight: 600, fontSize: "14px", color: "#111" }}>
      Mayo Clinic
    </span>
  );
}

function LogoCleo() {
  return (
    <span style={{ fontWeight: 600, fontSize: "14px", color: "#111" }}>
      NHS
    </span>
  );
}

function LogoTrademe() {
  return (
    <span style={{ fontWeight: 600, fontSize: "14px", color: "#111" }}>
      Medanta
    </span>
  );
}

function LogoParadigm() {
  return (
    <span style={{ fontWeight: 600, fontSize: "14px", color: "#111" }}>
      Fortis
    </span>
  );
}
