import { useState } from "react";

const accordionItems = [
  {
    title: "Genetic Interpretation",
    body: "Interprets complex data patterns to generate precise, actionable insights tailored to context.",
    defaultOpen: true,
  },
  {
    title: "One Size Fits One",
    body: "Personalized intelligence systems designed uniquely for each user or organization.",
    defaultOpen: false,
  },
  {
    title: "Research Focused",
    body: "Continuously evolving with data-driven research and adaptive learning models.",
    defaultOpen: false,
  },
];

function PrecisionAccordion({ title, body, defaultOpen }: { title: string; body: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "22px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
          fontWeight: 700,
          color: open ? "#5EEAD4" : "#ffffff",
          borderBottom: open ? "2px solid #5EEAD4" : "2px solid transparent",
          paddingBottom: "3px",
          transition: "color 0.3s, border-color 0.3s",
          textShadow: open ? "0 0 12px rgba(94,234,212,0.4)" : "none",
        }}>
          {title}
        </span>
        <span style={{
          flexShrink: 0,
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: open ? "rgba(94,234,212,0.15)" : "rgba(255,255,255,0.06)",
          border: open ? "1px solid rgba(94,234,212,0.5)" : "1px solid rgba(255,255,255,0.12)",
          color: open ? "#5EEAD4" : "rgba(255,255,255,0.5)",
          fontSize: "1.4rem",
          fontWeight: 300,
          transition: "all 0.3s",
          boxShadow: open ? "0 0 12px rgba(94,234,212,0.3)" : "none",
        }}>
          {open ? "−" : "+"}
        </span>
      </button>
      <div style={{
        maxHeight: open ? "200px" : "0",
        opacity: open ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease, opacity 0.3s ease",
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
          lineHeight: 1.85,
          color: "#A0A0A0",
          margin: "0 0 22px",
        }}>
          {body}
        </p>
      </div>
    </div>
  );
}

export default function PrecisionPlatformSection() {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <section style={{
      position: "relative",
      background: "linear-gradient(135deg, #050505 0%, #1a1f1c 50%, #2a2f2b 100%)",
      padding: "100px 60px",
      overflow: "hidden",
    }}>

      {/* Radial glow blob */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 20% 30%, rgba(0,255,200,0.15), transparent 40%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <style>{`
        @keyframes glowPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
      `}</style>

      {/* Content grid */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "45% 55%",
        gap: "40px",
        alignItems: "start",
        position: "relative",
        zIndex: 1,
      }}
        className="precision-grid"
      >

        {/* LEFT — strict glass card */}
        <div>
          {/* THE GLASS CARD */}
          <div
            className="glass-card"
            onMouseEnter={() => setCardHovered(true)}
            onMouseLeave={() => setCardHovered(false)}
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "24px",
              boxShadow: cardHovered
                ? "0 0 60px rgba(0,255,200,0.18), inset 0 0 20px rgba(255,255,255,0.02), 0 -5px 0 rgba(0,255,200,0.1)"
                : "0 0 40px rgba(0,255,200,0.08), inset 0 0 20px rgba(255,255,255,0.02)",
              transform: cardHovered ? "translateY(-5px)" : "translateY(0)",
              transition: "all 0.35s ease",
              marginBottom: "36px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Inner glow behind image */}
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              height: "60%",
              background: "radial-gradient(circle, rgba(0,255,200,0.4), transparent 60%)",
              filter: "blur(30px)",
              pointerEvents: "none",
              animation: "glowPulse 4s ease-in-out infinite",
              zIndex: 0,
            }} />
            <img
              src="/10th image.png"
              alt="Precision Platform"
              style={{
                width: "100%",
                display: "block",
                borderRadius: "14px",
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>

          {/* Heading below card */}
          <h2 style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(2rem, 3.2vw, 3rem)",
            fontWeight: 900,
            color: "#ffffff",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}>
            A Platform for Deep{" "}
            <span style={{
              background: "linear-gradient(90deg, #5EEAD4, #22D3EE, #67E8F9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 900,
              filter: "brightness(1.2)",
            }}>
              PRECISION
            </span>
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.9rem, 1.2vw, 1.02rem)",
            lineHeight: 1.85,
            color: "#A0A0A0",
            margin: 0,
          }}>
            A precision platform that dynamically connects intelligence, real-world insights, and decision systems into a powerful workflow, enabling professionals to deliver highly accurate outcomes driven by AI.
          </p>
        </div>

        {/* RIGHT — accordion */}
        <div style={{ paddingTop: "8px" }}>
          {accordionItems.map((item, i) => (
            <PrecisionAccordion key={i} title={item.title} body={item.body} defaultOpen={item.defaultOpen} />
          ))}
        </div>

      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .precision-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

    </section>
  );
}
