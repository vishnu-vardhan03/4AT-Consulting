import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    title: "Understand Your Business Clearly",
    body: "Translate complex financial, operational, and strategic data into clear, actionable insights.",
  },
  {
    title: "Be Prepared for Every Decision Moment",
    body: "Enter every meeting, audit, or strategic discussion with data-backed confidence.",
  },
  {
    title: "Own Your Data with 'Business Casebook'",
    body: "Centralize your financials, reports, and strategic insights into a single intelligent system of record.",
  },
  {
    title: "Support Organizational Health & Performance",
    body: "Continuously monitor business health, efficiency, and growth with real-time intelligence.",
  },
  {
    title: "Real-Time, Context-Aware Insights",
    body: "Get tailored recommendations based on your unique business environment, industry, and goals.",
  },
];

export default function StrategicSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="final-capabilities-section"
      style={{
        background: "linear-gradient(135deg, #eef4fb 0%, #e8eef8 50%, #dde8f5 100%)",
        padding: "100px 48px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

        {/* Section header — centered above columns */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#50679A", lineHeight: 1.2, marginBottom: "16px" }}>
            A Strategic Companion for Businesses and Leaders
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.25rem)", lineHeight: 1.8, color: "rgba(15,31,61,0.6)", margin: 0, fontWeight: 400 }}>
            Our platform empowers organizations to take greater control of their business journey—with clarity, confidence, and intelligent support at every step.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* LEFT — image */}
          <div style={{ flex: "0 0 420px", maxWidth: "420px", width: "100%" }}>
            <img
              src="/1st image.png"
              alt="Strategic Companion"
              style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 60px rgba(30,60,120,0.15)", display: "block" }}
            />
          </div>

          {/* RIGHT — content + accordion */}
          <div style={{ flex: 1, minWidth: "280px" }}>

            {/* Accordion */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    style={{
                      borderRadius: "12px",
                      border: isOpen ? "1px solid rgba(108,143,214,0.5)" : "1px solid rgba(108,143,214,0.18)",
                      background: isOpen ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.55)",
                      boxShadow: isOpen ? "0 4px 24px rgba(108,143,214,0.12)" : "none",
                      transition: "all 0.3s ease",
                      overflow: "hidden",
                    }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 22px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                    >
                      <span style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1rem, 1.4vw, 1.1rem)", fontWeight: 700, color: "#000" }}>
                        {item.title}
                      </span>
                      <span style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: isOpen ? "rgba(108,143,214,0.15)" : "rgba(108,143,214,0.08)", color: "#6C8FD6", transition: "background 0.3s" }}>
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <div style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0, overflow: "hidden", transition: "max-height 0.35s ease, opacity 0.3s ease" }}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.1vw, 1rem)", lineHeight: 1.75, color: "#000", padding: "0 22px 18px" }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom tagline */}
            <div style={{ marginTop: "40px", paddingTop: "28px", borderTop: "1px solid rgba(108,143,214,0.2)" }}>
              <h3 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: 700, color: "#000", lineHeight: 1.6, margin: 0 }}>
                Because better clarity leads to better decisions—<br />
                <span style={{ fontWeight: 400, color: "rgba(30,50,90,0.65)" }}>and better decisions drive better outcomes.</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
