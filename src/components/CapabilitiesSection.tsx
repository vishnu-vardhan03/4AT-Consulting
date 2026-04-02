import { useState, useEffect, useRef } from "react";
import { Plus, Minus } from "lucide-react";

const items = [
  {
    title: "Reducing Strategic Failures",
    body: "Synthesizes data from financials, operations, and market context to prioritize the most effective strategies for leadership decisions.",
  },
  {
    title: "Anticipating Risks Earlier",
    body: "Identifies emerging risks and disruptions in advance, enabling proactive mitigation and stronger resilience.",
  },
  {
    title: "Minimizing Operational Inefficiencies",
    body: "Optimizes processes and resource allocation to reduce waste and improve overall performance.",
  },
  {
    title: "Improving Decision Sequencing",
    body: "Guides organizations on when and how to act—ensuring the right decisions are executed at the right time.",
  },
  {
    title: "Supporting Leaders Navigating Complexity",
    body: "Empowers executives with clarity, structured insights, and intelligent recommendations in high-stakes environments.",
  },
];

export default function CapabilitiesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
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
        padding: "100px 48px 0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)", fontWeight: 800, background: "linear-gradient(90deg, #6C8FD6 0%, #2E3A59 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.25, marginBottom: "20px" }}>
            Intelligent Decisioning at the Point of<br />
            <span style={{ background: "linear-gradient(90deg, #f5c842, #ffa500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Business Solutions</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.25vw, 1.05rem)", lineHeight: 1.85, color: "rgba(15,31,61,0.65)", margin: "0 0 20px" }}>
            Our AI-enabled consulting approach is embedded within core business workflows and strategic frameworks. We enable real-time decision-making across financial planning, risk management, compliance, and transformation initiatives.
          </p>
          <h3 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", fontWeight: 700, color: "#000", margin: 0, lineHeight: 1.3, textAlign: "left" }}>
            4AT Consulting will enable:
          </h3>
        </div>

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
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.2rem)", fontWeight: 700, color: "#000" }}>
                    {item.title}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isOpen ? "rgba(108,143,214,0.15)" : "rgba(108,143,214,0.08)",
                      color: "#6C8FD6",
                      transition: "background 0.3s",
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.35s ease, opacity 0.3s ease",
                  }}
                >
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)", lineHeight: 1.75, color: "#000", padding: "0 28px 24px" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px", paddingTop: "32px", borderTop: "1px solid rgba(108,143,214,0.2)" }}>
          <h3 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)", fontWeight: 700, color: "#000", lineHeight: 1.6, margin: 0 }}>
            Precision Consulting maximizes business outcomes—<br />
            for every organization, across every industry.
          </h3>
        </div>
      </div>

      <div style={{ width: "100vw", lineHeight: 0, marginTop: "80px", marginLeft: "calc(-48px)", position: "relative" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
          <path d="M0,40 C360,80 720,0 1080,50 C1260,68 1380,28 1440,40 L1440,80 L0,80 Z" fill="#04060F" />
        </svg>
      </div>
    </section>
  );
}
