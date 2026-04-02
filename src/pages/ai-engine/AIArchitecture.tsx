import Navbar from "@/components/Navbar";

export default function Page() {
  const scrollToSection2 = () => {
    const el = document.getElementById("section-2");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main style={{ minHeight: "100vh", background: "#fff", paddingTop: "68px" }}>
      <Navbar />

      {/* Hero section */}
      <div style={{ display: "flex", alignItems: "center", gap: "60px", padding: "80px 60px", minHeight: "calc(100vh - 68px)", flexWrap: "wrap" }}>
        {/* Left — content */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(2rem, 4vw, 3.4rem)", fontWeight: 900, color: "#000000", lineHeight: 1.15, marginBottom: "24px" }}>
            Precision &amp; Intelligence<br />
            <span style={{ fontWeight: 900 }}>Driven by AI</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", marginBottom: "40px", maxWidth: "480px" }}>
            From structured data analysis to predictive insights and outcome modeling, the platform enables real-time, precision-driven workflows—supporting accurate, data-backed decisions at every stage.
          </p>
          <button
            onClick={scrollToSection2}
            style={{ display: "inline-block", padding: "14px 40px", borderRadius: "100px", background: "#000000", color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", border: "none", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#222"; el.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#000000"; el.style.transform = "scale(1)"; }}
          >
            Get Started
          </button>
        </div>

        {/* Right — 27th image */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <img src="/27th image.png" alt="AI Engine" style={{ width: "100%", display: "block" }} />
        </div>
      </div>

      {/* Section 2 — Deep Precision Intelligence */}
      <div id="section-2" style={{ background: "#ffffff", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Content row */}
          <div style={{ display: "flex", gap: "80px", flexWrap: "wrap", marginBottom: "60px" }}>

            {/* Left — labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px", flexShrink: 0, minWidth: "220px" }}>
              <a href="#" style={{ display: "inline-block", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", alignSelf: "flex-start" }}>
                <span style={{ color: "#000000", fontWeight: 700 }}>Deep Precision Intelligence</span>
              </a>
              <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", fontWeight: 800, color: "#000", margin: 0, whiteSpace: "nowrap" }}>Precisely Match Strategies<br />to Outcomes</h2>
              <h3 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontWeight: 700, color: "#000", margin: 0 }}>Focused Intelligence<br />Framework</h3>
              <h3 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1rem, 1.4vw, 1.15rem)", fontWeight: 700, color: "#000", margin: 0 }}>Case-Based Insight<br />Modeling</h3>
            </div>

            {/* Right — descriptions */}
            <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "48px" }}>
              {/* spacer to align with badge */}
              <div style={{ height: "48px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>The platform enables highly targeted decision-making by analyzing specific, high-impact data points rather than relying on broad, generalized inputs. This approach uncovers deeper insights, identifies opportunities, and supports more effective strategy alignment that might otherwise be overlooked.</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>By focusing on relevant variables, contextual factors, and outcome-driven analysis, the system ensures precise matching between actions and desired results.</p>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>A curated and domain-specific data approach ensures that insights are aligned to the exact context, improving accuracy and relevance. By combining structured data with advanced analytics, the platform supports precise, data-backed decisions.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>Each scenario is evaluated using detailed profiles that consider historical data, contextual variables, and evolving conditions. This enables more informed decision-making by providing a comprehensive understanding of the situation and its potential outcomes.</p>
            </div>
          </div>

          {/* 28th image below content */}
          <img src="/28th image.png" alt="Deep Precision Intelligence" style={{ width: "75%", display: "block", margin: "0 auto" }} />
        </div>
      </div>
      {/* Section 3 — Introducing 4AT.AI */}
      <div style={{ background: "#f7f7f7", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "80px", flexWrap: "wrap", marginBottom: "60px" }}>
            {/* Left — labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", flexShrink: 0, minWidth: "220px" }}>
              <a href="#" style={{ display: "inline-block", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", alignSelf: "flex-start" }}>
                <span style={{ color: "#000000", fontWeight: 700 }}>Introducing 4AT.AI</span>
              </a>
              <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", fontWeight: 800, color: "#000", margin: 0 }}>Advanced Intelligence<br />for Outcome Prediction</h2>
            </div>
            {/* Right — descriptions */}
            <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ height: "48px" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>4AT.AI is an advanced intelligence platform designed to identify high-impact patterns, critical risk factors, and key performance drivers within complex business environments—enabling accurate and data-driven outcome predictions.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>By leveraging both granular (micro-level) and aggregated (macro-level) data, 4AT.AI models business scenarios within a structured analytical framework. This allows for deeper analysis of variables, relationships, and performance dynamics.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>Using advanced computational techniques, it pinpoints the most critical factors influencing outcomes—empowering decision-makers to focus on high-priority areas and execute targeted strategies with confidence.</p>
            </div>
          </div>
          <img src="/29th image.png" alt="Introducing 4AT.AI" style={{ width: "75%", display: "block", margin: "0 auto" }} />
        </div>
      </div>
      {/* Section 4 — Operational Workflow */}
      <div style={{ background: "#ffffff", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "80px", flexWrap: "wrap", marginBottom: "60px" }}>
            {/* Left — labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", flexShrink: 0, minWidth: "220px" }}>
              <a href="#" style={{ display: "inline-block", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", alignSelf: "flex-start" }}>
                <span style={{ color: "#000000", fontWeight: 700 }}>Operational Workflow</span>
              </a>
              <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", fontWeight: 800, color: "#000", margin: 0 }}>Validation at Speed<br />and Scale</h2>
            </div>
            {/* Right — descriptions */}
            <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ height: "48px" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>4AT.AI continuously integrates high-volume data streams with real-time business inputs and performance metrics, enhancing decision workflows dynamically.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>A comprehensive data ecosystem consolidates diverse datasets, models, and operational insights, creating a unified intelligence layer for accurate analysis and execution.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: 0 }}>AI models are continuously refined through expert feedback, adaptive learning, and iterative optimization, improving accuracy, relevance, and responsiveness across real-world scenarios.</p>
            </div>
          </div>
          <img src="/30th image.png" alt="Operational Workflow" style={{ width: "75%", display: "block", margin: "0 auto" }} />
        </div>
      </div>
      {/* Section 5 — Our Data Stack */}
      <div style={{ background: "#000000", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "80px", flexWrap: "wrap", marginBottom: "60px" }}>
            {/* Left — labels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", flexShrink: 0, minWidth: "220px" }}>
              <a href="#" style={{ display: "inline-block", padding: "13px 32px", borderRadius: "14px", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", alignSelf: "flex-start" }}>
                <span style={{ background: "linear-gradient(90deg, #4390CF, #AAD3F0, #C5E2F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700 }}>Our Data Stack</span>
              </a>
              <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", fontWeight: 800, color: "#ffffff", margin: 0 }}>Multi-Modal Data Stack<br />for Deep Precision Intelligence</h2>
            </div>
            {/* Right — description */}
            <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ height: "48px" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0 }}>4AT.AI's data stack is designed for deep, multi-dimensional intelligence by integrating multiple critical data layers—including financial data, operational metrics, market signals, behavioral insights, and external datasets. This approach enables comprehensive, multi-factor analysis and provides a unified view of complex business environments. By combining and harmonizing diverse data sources, the platform enhances the ability to identify key drivers, uncover opportunities, and align strategies with precision. This multi-layered intelligence framework also enables advanced simulation and predictive capabilities, supporting more accurate, data-driven decision-making.</p>
            </div>
          </div>
          <img src="/31th image.png" alt="Our Data Stack" style={{ width: "75%", display: "block", margin: "0 auto" }} />
        </div>
      </div>
      {/* 17th image background with content */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "600px" }}>
        <img src="/17th image.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", minHeight: "600px", padding: "80px 60px" }}>
          <div style={{ maxWidth: "520px" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#000000", lineHeight: 1.25, marginBottom: "20px" }}>Transform Your Operations Today</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", marginBottom: "32px" }}>Book a demo to explore how the platform can enhance your approach with AI-driven insights and tailored strategies, enabling more informed decisions, improved efficiency, and stronger outcomes.</p>
            <a href="/book-demo" style={{ display: "inline-block", padding: "14px 40px", borderRadius: "100px", background: "#000000", color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#222"; el.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#000000"; el.style.transform = "scale(1)"; }}
            >Contact Us</a>
          </div>
        </div>
      </div>
    </main>
  );
}
