import Navbar from "@/components/Navbar";
import { useState } from "react";

function AccordionCard({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ background: "linear-gradient(135deg, rgba(30,40,70,0.85) 0%, rgba(20,28,55,0.9) 100%)", border: "1px solid rgba(67,144,207,0.25)", borderRadius: "16px", overflow: "hidden", boxShadow: open ? "0 8px 32px rgba(67,144,207,0.15)" : "0 4px 16px rgba(0,0,0,0.3)", transition: "box-shadow 0.3s ease", backdropFilter: "blur(12px)" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}>
        <span style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", fontWeight: 700, color: "#ffffff" }}>{title}</span>
        <span style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: open ? "rgba(67,144,207,0.2)" : "rgba(255,255,255,0.08)", color: open ? "#AAD3F0" : "rgba(255,255,255,0.5)", fontSize: "1.2rem", fontWeight: 300, transition: "all 0.3s" }}>
          {open ? "−" : "+"}
        </span>
      </button>
      <div style={{ maxHeight: open ? "200px" : "0", opacity: open ? 1 : 0, overflow: "hidden", transition: "max-height 0.35s ease, opacity 0.3s ease" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 0.97rem)", lineHeight: 1.75, color: "rgba(255,255,255,0.6)", padding: "0 24px 20px", margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

const glassBtn: React.CSSProperties = {
  display: "inline-block", padding: "13px 32px", borderRadius: "14px",
  background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
  fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif",
  letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease",
};

const gradientText: React.CSSProperties = {
  background: "linear-gradient(90deg, #4390CF, #AAD3F0, #C5E2F7)",
  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
};

function GlassBtn({ label, mb = "24px" }: { label: string; mb?: string }) {
  return (
    <a href="#" style={{ ...glassBtn, marginBottom: mb }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.16)"; el.style.transform = "scale(1.05)"; el.style.borderColor = "rgba(245,200,66,0.5)"; }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.08)"; el.style.transform = "scale(1)"; el.style.borderColor = "rgba(255,255,255,0.2)"; }}
    >
      <span style={gradientText}>{label}</span>
    </a>
  );
}

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: `radial-gradient(circle at 75% 40%, #9397A8 0%, transparent 40%), linear-gradient(135deg, #0B0B0C 20%, #202028 60%, #3A3F45 100%)`, paddingTop: "68px" }}>
      <Navbar />

      {/* Section 1 */}
      <div style={{ display: "flex", alignItems: "center", gap: "60px", padding: "80px 60px", flexWrap: "wrap", minHeight: "calc(100vh - 68px)" }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, marginBottom: "24px" }}>
            The Future of<br />
            <span style={{ background: "linear-gradient(90deg, #f5c842, #ffa500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Intelligent Consulting</span>
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>
            Our AI-powered consulting approach delivers the collective expertise of industry leaders, financial specialists, and strategic advisors directly to the point of decision.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: "280px", position: "relative" }}>
          <img src="/7th image.png" alt="" style={{ position: "absolute", top: "-40px", left: "-40px", width: "100px", height: "100px", objectFit: "cover", borderRadius: "12px", zIndex: 2 }} />
          <img src="/7th image.png" alt="" style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "100px", height: "100px", objectFit: "cover", borderRadius: "12px", zIndex: 2 }} />
          <img src="/7th image.png" alt="" style={{ position: "absolute", bottom: "-40px", right: "-40px", width: "100px", height: "100px", objectFit: "cover", borderRadius: "12px", zIndex: 2 }} />
          <img src="/5th image.png" alt="Platform" style={{ width: "100%", display: "block", position: "relative", zIndex: 1 }} />
        </div>
      </div>

      {/* Section 2 */}
      <div style={{ display: "flex", alignItems: "center", gap: "60px", padding: "80px 60px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <img src="/6th image.png" alt="Our Platform" style={{ width: "100%", display: "block" }} />
        </div>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <GlassBtn label="Our Platform" />
          <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "24px" }}>
            Introducing 4AT.AI — A New Platform for Deep Precision Consulting
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>4AT.AI is on a mission to identify the most relevant insights from financial data, business systems, and market intelligence to enhance and optimize decision-making for modern enterprises.</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>Like an orchestra, 4AT.AI is powered by intelligent AI agents, each playing a critical role in improving business workflows, strengthening advisory processes, and driving measurable outcomes.</p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div style={{ display: "flex", alignItems: "center", gap: "60px", padding: "80px 60px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <GlassBtn label="Precision Consulting" mb="14px" />
          <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "24px" }}>Personalized Strategies Start with Your Business</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>Our precision consulting approach combines deep financial analysis, operational intelligence, and AI-driven insights to deliver highly tailored solutions.</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>4AT Consulting identifies the most relevant business drivers and continuously refines strategies based on real-time data, market dynamics, and industry benchmarks—ensuring every organization receives the most effective and outcome-driven guidance.</p>
          </div>
        </div>
        <div style={{ flex: "0 0 320px", maxWidth: "320px", minWidth: "200px" }}>
          <img src="/1st image.png" alt="Precision Consulting" style={{ width: "100%", display: "block", borderRadius: "20px", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }} />
        </div>
      </div>

      {/* Section 4 */}
      <div style={{ width: "100%", padding: "80px 60px" }}>
        <img src="/8th image.png" alt="Platform Visual" style={{ width: "100%", display: "block" }} />
      </div>

      {/* Section 5 */}
      <div style={{ background: `radial-gradient(circle at center bottom, rgba(120,180,255,0.25) 0%, rgba(120,180,255,0.12) 30%, rgba(120,180,255,0.05) 50%, transparent 70%), radial-gradient(circle at center, rgba(255,255,255,0.05), transparent 60%), #000000`, boxShadow: "0 0 120px rgba(255,255,255,0.08)", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", marginBottom: "60px" }}>
          <GlassBtn label="4AT Advisory" mb="14px" />
          <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "24px" }}>The Value of Intelligent Advisory</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>Technology is tomorrow's partner for today's business leaders.</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>Designed to ensure that insights derived from global markets, industry best practices, evolving regulations, and real-time business data continuously inform your next decision.</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.65)", margin: 0 }}>It brings together what is being learned across leading organizations, advanced analytics, and dynamic business environments—so every strategic move is guided by the most relevant and up-to-date intelligence.</p>
          </div>
        </div>
        <img src="/9th image.png" alt="" style={{ display: "block", maxWidth: "800px", width: "100%" }} />
      </div>

      {/* Section 6 — full section as glass card */}
      <div style={{ padding: "80px 60px" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "60px", boxShadow: "0 0 60px rgba(67,144,207,0.12), inset 0 1px 0 rgba(255,255,255,0.06)", display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Heading */}
          <div style={{ width: "100%", textAlign: "center", marginBottom: "8px" }}>
            <a href="#"
              style={{ display: "inline-block", padding: "18px 48px", borderRadius: "14px", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)", fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", fontWeight: 800, fontFamily: "'Exo 2', 'Inter', sans-serif", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.3s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.16)"; el.style.transform = "scale(1.05)"; el.style.borderColor = "rgba(245,200,66,0.5)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.08)"; el.style.transform = "scale(1)"; el.style.borderColor = "rgba(255,255,255,0.2)"; }}
            >
              <span style={gradientText}>Our Agentic Architecture</span>
            </a>
          </div>

          {/* Left */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <img src="/10th image.png" alt="Precision Agent" style={{ width: "100%", display: "block", borderRadius: "16px", marginBottom: "28px" }} />
            <GlassBtn label="Precision Agent" mb="14px" />
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "16px" }}>A Platform for Deep Precision</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>A precision-driven platform that dynamically connects financial intelligence, operational data, and market insights into a powerful decision-making workflow—enabling leaders to deliver highly targeted, outcome-driven strategies powered by AI.</p>
          </div>

          {/* Right */}
          <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Business Intelligence Interpretation", body: "Interpreting financial signals, operational patterns, and market dynamics to guide precise strategic actions tailored to each business context." },
              { title: "One Size Fits One", body: "Every strategy is uniquely designed—because no two businesses operate under the same conditions." },
              { title: "Research-Focused", body: "Continuously evolving through data, benchmarks, and emerging trends to ensure decisions are always informed by the latest intelligence." },
            ].map((item, i) => (
              <AccordionCard key={i} title={item.title} body={item.body} />
            ))}
          </div>

        </div>
      </div>

      {/* Section 7 — glass card with 11th image + accordion */}
      <div style={{ padding: "0 60px 80px" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "60px", boxShadow: "0 0 60px rgba(67,144,207,0.12), inset 0 1px 0 rgba(255,255,255,0.06)", display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Left — accordion */}
          <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Automated Operations", body: "A Foundation for Continuous Intelligence — An automated and secure ML/Ops and LLM/Ops platform designed to continuously update, refine, and optimize AI models and intelligent agents." },
              { title: "Secure Access Control", body: "Robust, enterprise-grade access management to ensure data security, compliance, and controlled system usage." },
              { title: "Monitoring Workflows for Accuracy", body: "Continuous monitoring and validation of workflows to maintain high levels of accuracy, reliability, and performance." },
            ].map((item, i) => (
              <AccordionCard key={i} title={item.title} body={item.body} />
            ))}
          </div>

          {/* Right — image + content */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <img src="/11th image.png" alt="Platform Scale" style={{ width: "100%", display: "block", borderRadius: "16px", marginBottom: "28px" }} />
            <GlassBtn label="A Platform That Can Scale" mb="14px" />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>A cloud-native SaaS platform built on robust, enterprise-grade infrastructure—powering web and mobile applications with high performance, reliability, and flexibility.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>Designed to seamlessly integrate AI models, third-party systems, and business tools, enabling unified capabilities across the entire ecosystem.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>Engineered to operate at global scale, ensuring consistent performance, real-time intelligence, and uninterrupted access—no matter the complexity or size of operations.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Section 8 — glass card with 12th image + accordion */}
      <div style={{ padding: "0 60px 80px" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "60px", boxShadow: "0 0 60px rgba(67,144,207,0.12), inset 0 1px 0 rgba(255,255,255,0.06)", display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Left — image + content */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <img src="/12th image.png" alt="Safe AI" style={{ width: "100%", display: "block", borderRadius: "16px", marginBottom: "28px" }} />
            <GlassBtn label="A Platform Powered by Safe AI" mb="14px" />
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>Our intelligent agents are designed to ensure regulatory compliance, data security, and responsible AI usage across every layer of the system.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>We continuously monitor for risk, bias, and ethical considerations, ensuring that every insight and recommendation meets the highest standards of trust and accountability.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>Guided by a principle of responsible intelligence, every decision is built to prioritize integrity, transparency, and long-term impact.</p>
            </div>
          </div>

          {/* Right — accordion */}
          <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              { title: "Data Privacy", body: "Our platform leverages advanced security frameworks, including blockchain and tokenization technologies, to protect, manage, and govern data access. Data is securely shared and utilized based on defined policies, permissions, and compliance standards, ensuring full control, transparency, and trust." },
              { title: "Technology Tuned for the Enterprise", body: "Purpose-built to align with real-world business environments—ensuring seamless integration with existing systems, workflows, and operational needs." },
              { title: "Ethics Agent", body: "A dedicated intelligence layer that continuously monitors for compliance, bias, and ethical considerations, ensuring responsible decision-making across all processes." },
            ].map((item, i) => (
              <AccordionCard key={i} title={item.title} body={item.body} />
            ))}
          </div>

        </div>
      </div>

      {/* Section 9 — 13th image full width */}
      <div style={{ padding: "0 60px 80px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <img src="/13th image.png" alt="" style={{ width: "100%", display: "block" }} />
        </div>
      </div>

      {/* Section 11 — AI Stack detailed */}
      <div style={{ padding: "0 60px 80px" }}>
        <div style={{ display: "flex", gap: "60px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Left — label + heading */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <GlassBtn label="Our AI Stack" mb="20px" />
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "0" }}>
              A Unified Intelligence Platform
            </h2>
          </div>

          {/* Right — paragraphs */}
          <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>The platform functions as an integrated intelligence system where multiple AI models and agents collaborate to support business operations and decision-making. Built on a unified data fabric, it consolidates and structures data from various sources, while an intelligent model router dynamically selects the most suitable model for each task to improve efficiency and reduce costs. With conversational interfaces and automated workflows, the system continuously learns from data and usage, enabling smarter insights and more effective outcomes over time.</p>
          </div>

        </div>
      </div>

      {/* Section 12 — 14th image */}
      <div style={{ padding: "0 60px 80px" }}>
        <img src="/14th image.png" alt="" style={{ width: "100%", display: "block" }} />
      </div>

      {/* Section 13 — 15th image right, content left */}
      <div style={{ padding: "0 60px 80px" }}>
        <div style={{ display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>

          {/* Left — content */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <GlassBtn label="Precision and Interpretability" mb="20px" />
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "24px" }}>
              Precision by Context
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.6)", margin: 0 }}>
              The platform combines high-quality data, domain expertise, and AI-driven intelligence to deliver clear, actionable insights tailored to each unique business context. By aligning analysis with specific organizational needs and real-time conditions, it enables highly precise and relevant decision-making. Every recommendation is designed to be transparent and interpretable, ensuring leaders not only receive the right insights but also understand the reasoning behind them.
            </p>
          </div>

          {/* Right — image */}
          <div style={{ flex: 1, minWidth: "260px" }}>
            <img src="/15th image.png" alt="Precision and Interpretability" style={{ width: "100%", display: "block" }} />
          </div>

        </div>
      </div>

      {/* Section 14 — Our Solutions */}
      <div style={{ background: "linear-gradient(to bottom, #F2F5F8, #E6EBF1)", padding: "100px 60px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
          <a href="#"
            style={{ display: "inline-block", marginBottom: "24px", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.1)"; el.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.06)"; el.style.transform = "scale(1)"; }}
          >
            <span style={{ color: "#000000", fontWeight: 700 }}>Our Solutions</span>
          </a>
          <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 800, color: "#1a2a4a", lineHeight: 1.25, marginBottom: "28px" }}>
            Precision Consulting Requires Collaboration
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(15,31,61,0.65)", marginBottom: "40px" }}>
            Organizations have been building expertise through experience, insights, and evolving strategies for decades. With the support of advanced technology, this knowledge can now be amplified, connected, and applied across teams and industries. The platform enables the sharing of insights, best practices, and data-driven learnings—so that knowledge gained in one organization can inform decisions in another, regardless of location. By connecting people, data, and intelligence, it creates a unified ecosystem where collaboration drives better outcomes. One network. One intelligence. One shared vision.
          </p>
          <a href="/solutions/ai-accounting"
            style={{ display: "inline-block", padding: "14px 40px", borderRadius: "100px", background: "#000000", color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#222"; el.style.transform = "scale(1.05)"; el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.4)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#000000"; el.style.transform = "scale(1)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)"; }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Section 15 — 16th image */}
      <div style={{ background: "linear-gradient(to bottom, #F2F5F8, #E6EBF1)", padding: "0 60px 80px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <img src="/16th image.png" alt="" style={{ width: "100%", display: "block" }} />
        </div>
      </div>

      {/* Section 17 — 17th image background with content */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src="/17th image.jpg" alt="" style={{ width: "100%", display: "block", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "flex-start", zIndex: 1 }}>
          <div style={{ textAlign: "left", padding: "40px 60px", maxWidth: "560px" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#000000", lineHeight: 1.25, marginBottom: "20px" }}>
              Become Part of the Network
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", marginBottom: "32px" }}>
              Progress begins with a single step. Join the network to collaborate, share insights, and contribute to a connected ecosystem focused on smarter decisions and better outcomes.
            </p>
            <a href="#"
              style={{ display: "inline-block", padding: "14px 40px", borderRadius: "100px", background: "#000000", color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.25)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#222"; el.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#000000"; el.style.transform = "scale(1)"; }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

    </main>
  );
}
