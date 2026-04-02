import { useEffect, useRef, useState } from "react";

export default function MultiModalSection() {
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
      style={{
        background: "linear-gradient(135deg, #eef4fb 0%, #e8eef8 50%, #dde8f5 100%)",
        padding: "100px 48px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#50679A", lineHeight: 1.2, margin: 0 }}>
            Multi-Modal Precision Consulting Platform
          </h1>
        </div>

        {/* Image */}
        <div style={{ width: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(30,60,120,0.15)" }}>
          <img
            src="/2nd image.png"
            alt="Multi-Modal Precision Consulting Platform"
            style={{ width: "100%", display: "block" }}
          />
        </div>

      </div>
    </section>
  );
}
