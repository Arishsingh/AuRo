import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WaitlistForm } from "@/components/WaitlistForm";

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
        fontFamily:
          "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px 20px",
            marginTop: "20px",
            marginBottom: "32px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="8" fill="#111" />
              <path
                d="M8 20L14 8L20 20M10.5 15.5H17.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span
              style={{
                fontWeight: 700,
                fontSize: "15px",
                color: "#111",
                letterSpacing: "-0.01em",
              }}
            >
              Aria
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {["Home", "Customers", "Use Cases", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: "#555",
                  fontSize: "14px",
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
          </div>

          <button
            style={{
              backgroundColor: "#111",
              color: "white",
              fontSize: "14px",
              fontWeight: 600,
              padding: "9px 22px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Try for free
          </button>
        </nav>

        <div style={{ textAlign: "center", padding: "20px 20px 36px" }}>
          <h1
            style={{
              fontSize: "clamp(1.2rem, 2.4vw, 2.2rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#0d0d0d",
              margin: "0 auto",
              whiteSpace: "nowrap",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif",
            }}
          >
            Your diagnosis, explained so you leave with clarity
          </h1>

          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#9ca3af",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "16px auto 0",
              textAlign: "center",
              fontFamily:
                "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            Aria turns complex medical language into clear, personalized
            explanations helping you understand your condition and next steps
            with confidence.
          </p>
        </div>

        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(0,0,0,0.1)",
            marginLeft: "20px",
            marginRight: "20px",
            backgroundColor: "#d9d9d9",
            minHeight: "40px",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "14   / 6",
            }}
          >
            <Image
              src="/hero.png"
              alt="AuRo hero"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Article section */}
      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          padding: "22px 44px 80px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "780px", paddingLeft: "100px" }}>
          <p
            style={{
              fontSize: "13.5px",
              color: "#4b5563",
              lineHeight: 1.85,
              margin: "0 0 24px",
            }}
          >
            In today's complex healthcare landscape, understanding your own
            medical records has never been more important — or more difficult.
            Doctors use dense terminology, lab reports are filled with
            abbreviations, and discharge summaries can feel like a foreign
            language. But the true value of Aria lies in its ability to bridge
            this gap, giving patients insights that drive smarter health
            decisions and a deeper understanding of their care.
          </p>
          <p
            style={{
              fontSize: "13.5px",
              color: "#4b5563",
              lineHeight: 1.85,
              margin: "0 0 40px",
            }}
          >
            Here's how Aria unlocks new possibilities for your health journey:
          </p>

          {[
            {
              num: "1.",
              title: "Real-Time Understanding",
              body: [
                "One of the most significant advantages of Aria is instant access to plain-language explanations. Instead of waiting for a follow-up appointment or searching unreliable sources online, you get up-to-the-minute clarity on your diagnosis, medications, and next steps. Real-time understanding helps you make confident decisions, ask better questions, and take an active role in your care.",
                "For example, patients leaving a cardiology consultation use Aria to understand what terms like 'ejection fraction' or 'atrial fibrillation' actually mean for their daily life — allowing for immediate, informed action.",
              ],
            },
            {
              num: "2.",
              title: "Personalized Explanations",
              body: [
                "Aria is designed to adapt to your situation. This means that as your documents change — new prescriptions, updated lab values, revised diagnoses — Aria's explanations evolve with you. Whether you're managing a chronic condition or navigating a one-time procedure, Aria tailors its output to your specific context.",
                "The personalization also extends to how information is delivered. You can combine insights from multiple documents — prescriptions, reports, and summaries — giving you a 360-degree view of your health.",
              ],
            },
            {
              num: "3.",
              title: "Confidence in Every Consultation",
              body: [
                "Unlike generic medical search engines that surface overwhelming or irrelevant results, Aria is grounded in your actual documents and operates with your wellbeing in mind. This significantly lowers anxiety, as you only receive explanations relevant to your specific situation. The clarity gained can then be reinvested into better conversations with your care team.",
                "Additionally, because Aria handles the interpretation layer, there's no need to rely on memory or hurried notes — you leave every appointment with complete understanding and calm.",
              ],
            },
          ].map(({ num, title, body }) => (
            <div key={num} style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#111",
                  margin: "0 0 12px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <span style={{ color: "#6b7280" }}>{num}</span> {title}
              </h2>
              {body.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "13.5px",
                    color: "#4b5563",
                    lineHeight: 1.85,
                    margin: "0 0 14px",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div
          style={{
            flexShrink: 0,
            width: "220px",
            position: "sticky",
            top: "40px",
            alignSelf: "flex-start",
            marginRight: "120px",
          }}
        >
          <p
            style={{
              fontSize: "11.5px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#111",
              margin: "0 0 24px",
            }}
          >
            In this article
          </p>
          {[
            "Real-Time Understanding",
            "Personalized Explanations",
            "Confidence in Every Consultation",
          ].map((title, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  color: "#111",
                  paddingTop: "1px",
                  flexShrink: 0,
                }}
              >
                {i + 1}.
              </span>
              <p
                style={{
                  fontSize: "13.5px",
                  color: "#111",
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {title}
              </p>
            </div>
          ))}


          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.1)",
              marginTop: "8px",
              paddingTop: "24px",
            }}
          >
            <p
              style={{
                fontSize: "11.5px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#111",
                margin: "0 0 12px",
              }}
            >
              Topics
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {[
                "Medical AI",
                "Patient Care",
                "Lab Reports",
                "Prescriptions",
                "Health Clarity",
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "11.5px",
                    color: "#4b5563",
                    backgroundColor: "rgba(0,0,0,0.06)",
                    borderRadius: "999px",
                    padding: "4px 10px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
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
            <div style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Starter</div>
            <div style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Basic</div>
            <div style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Pro</div>
            <div style={{ fontSize: "13px", color: "#6b7280", textAlign: "center" }}>Enterprise</div>
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
                    textAlign: "center",
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

      <div
        style={{
          width: "100%",
          maxWidth: "1600px",
          padding: "40px 120px 80px",
        }}
      >
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>
          <div style={{ flexShrink: 0, width: "200px", paddingTop: "4px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#111",
                margin: "0 0 8px",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 500,
                color: "#111",
                margin: 0,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Frequently asked
            </h2>
          </div>

          <FAQAccordion />
        </div>
      </div>

      <div style={{ width: "100%", borderTop: "1px solid rgba(0,0,0,0.08)" }}>
        <div
          style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 44px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              padding: "56px 0",
            }}
          >
            {[
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                title: "Instant Analysis",
                desc: "Upload any medical document and receive a clear explanation in under 3 minutes.",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                ),
                title: "100% Private",
                desc: "Your health data is never stored or shared. AuRo processes and forgets.",
              },
              {
                icon: (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
                title: "Doctor-Aligned",
                desc: "AuRo explains — never diagnoses. Always aligned with your doctor's guidance.",
              },
            ].map(({ icon, title, desc }, i) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 48px",
                  borderRight: i < 2 ? "1px solid rgba(0,0,0,0.08)" : "none",
                  color: "#111",
                }}
              >
                <div style={{ marginBottom: "16px", opacity: 0.7 }}>{icon}</div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#111",
                    margin: "0 0 8px",
                  }}
                >
                  {title}
                </p>
                <p
                  style={{
                    fontSize: "12.5px",
                    color: "#6b7280",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(0,0,0,0.08)",
              padding: "36px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
              AuRo is launching soon — be among the first to get access.
            </p>
            <WaitlistForm />
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
