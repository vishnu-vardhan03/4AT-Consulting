import { useState } from "react";
import Navbar from "@/components/Navbar";

const paraStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)",
  lineHeight: 1.85,
  color: "rgba(0,0,0,0.75)",
  margin: 0,
};

export default function Page() {
  const [expanded, setExpanded] = useState(false);

  return (
    <main style={{ minHeight: "100vh", background: "#000", paddingTop: "68px" }}>
      <Navbar />

      {/* Hero — 32th image as background */}
      <div style={{ position: "relative", minHeight: "calc(100vh - 68px)", overflow: "hidden" }}>
        <img src="/32th image.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 68px)", padding: "80px 60px", textAlign: "center" }}>
          <div style={{ maxWidth: "720px" }}>
            <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#000000", lineHeight: 1.2, marginBottom: "24px" }}>
              Technology Expands Access to Better Outcomes
            </h1>
            <p style={{ ...paraStyle, color: "rgba(0,0,0,0.75)" }}>
              The scale and complexity of modern challenges are growing faster than the capacity of traditional systems to manage them. Technology plays a critical role in bridging this gap—enabling broader access, faster insights, and more efficient solutions. By leveraging intelligent systems, organizations can extend their reach, improve responsiveness, and deliver impactful outcomes where they are needed most.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 — Innovating the Future */}
      <div style={{ background: "#ffffff", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "80px", flexWrap: "wrap", marginBottom: "60px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "32px", flexShrink: 0, minWidth: "220px" }}>
              <a href="#" style={{ display: "inline-block", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", alignSelf: "flex-start" }}>
                <span style={{ color: "#000000", fontWeight: 700 }}>Innovating the Future of Intelligent Operations</span>
              </a>
              <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.1rem, 1.6vw, 1.3rem)", fontWeight: 800, color: "#000", margin: 0 }}>Precision Platforms Drive<br />Better Outcomes</h2>
            </div>
            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ height: "48px" }} />
              <p style={paraStyle}>Modern platforms enable precision by integrating four essential pillars: targeted data inputs, collective intelligence, real-time decision support, and streamlined workflows. By combining focused data, global insights, context-aware recommendations, and reduced administrative overhead, organizations can operate with greater accuracy, efficiency, and impact.</p>
            </div>
          </div>
          <img src="/33th image.png" alt="Innovating the Future" style={{ width: "100%", display: "block" }} />
        </div>
      </div>

      {/* Our Story — 34th image background */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src="/34th image.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, padding: "100px 60px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", background: "#ffffff", borderRadius: "24px", padding: "40px", boxShadow: "0 8px 48px rgba(0,0,0,0.18)", display: "flex", gap: "40px", alignItems: "stretch", flexWrap: "wrap" }}>

            {/* Left — 35th image */}
            <div style={{ flex: "0 0 280px", minWidth: "220px" }}>
              <img src="/35th image.png" alt="Our Story" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "16px" }} />
            </div>

            {/* Right — content */}
            <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 900, color: "#000000", lineHeight: 1.2, margin: 0 }}>Our Story</h2>

              {/* Always visible — first paragraph */}
              <p style={paraStyle}>Finance, accounting, and HR have always been the pillars of every successful business. Yet for decades, these critical functions were weighed down by manual paperwork, repetitive reconciliations, and lengthy audits. Progress was made, but true efficiency always felt just out of reach.</p>

              {/* Expandable content */}
              <div style={{ overflow: "hidden", maxHeight: expanded ? "1000px" : "0", transition: "max-height 0.5s ease", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "Today, the landscape is changing. Artificial Intelligence has transformed the way we work—shifting business from repetition to intelligence. What once took weeks can now be done in minutes, with greater accuracy, sharper insights, and smarter processes. Teams are no longer stuck in the cycle of routine—they're free to focus on strategy, innovation, and growth.",
                  "At 4AT Consulting, we've spent years guiding organizations through complex financial landscapes, optimizing processes, and unlocking opportunities for growth. Our commitment to precision, integrity, and innovation has always defined us. But as the future demanded more, we reimagined how business could truly evolve.",
                  "That vision gave rise to 4AT.AI.",
                  "More than automation, 4AT.AI brings intelligent AI agents that adapt to your business, automate routine tasks, strengthen compliance, and deliver actionable insights—all while enhancing human expertise. Every agent is designed to understand your context, operate with security, and continuously learn to meet your evolving needs.",
                  "Together, 4AT Consulting and 4AT.AI form a powerful alliance: deep consulting expertise combined with AI-driven intelligence. The result? Smarter decisions, faster processes, and a roadmap to sustainable growth.",
                  "At 4AT.AI, we believe in a future where AI is not just a tool but a trusted partner. A future where people are empowered, businesses thrive, and work is redefined.",
                ].map((para, i) => (
                  <p key={i} style={paraStyle}>{para}</p>
                ))}
                <p style={{ ...paraStyle, fontWeight: 700 }}>4AT.AI: Redefining the way the world works.</p>
              </div>

              {/* Read More / Read Less button */}
              <button
                onClick={() => setExpanded(!expanded)}
                style={{ alignSelf: "flex-start", padding: "12px 32px", borderRadius: "100px", background: "#000000", color: "#ffffff", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", border: "none", cursor: "pointer", transition: "all 0.3s ease", marginTop: "4px" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#222"; el.style.transform = "scale(1.05)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#000"; el.style.transform = "scale(1)"; }}
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Meet Our Leaders section — 26th image background */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src="/26th image.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, padding: "100px 60px", display: "flex", flexDirection: "column", alignItems: "center" }}>

          <div style={{ textAlign: "center", maxWidth: "800px", marginBottom: "60px" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "20px", background: "linear-gradient(90deg, #4390CF, #AAD3F0, #C5E2F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Meet Our Leaders &amp; Core Team</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.8)", margin: 0 }}>At 4AT.AI, our people are our greatest strength. Our leadership and core team bring together decades of expertise in Accounting, Audit, Assurance, Advisory, Legal, and Technology. With global experience and a shared vision for innovation, they drive 4AT's mission of delivering trusted, technology-enabled solutions that transform the future of finance.</p>
          </div>

          <div style={{ border: "1px solid rgba(255,255,255,0.25)", borderRadius: "24px", padding: "40px", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", background: "rgba(255,255,255,0.05)", width: "100%", maxWidth: "1100px", display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* Row 1 — 4 members */}
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { name: "Ravi Krovvidi", title: "Founder & Visionary Leader", img: "/40th image.png", pos: "50% 15%" },
                { name: "Aruna", title: "Co-Founder & Assurance Leader", img: "/37th image.jpg", pos: "top center" },
                { name: "Shashank", title: "Associate Partner", img: "/38th image.jpg", pos: "top center" },
                { name: "Vinita Anand Shastry", title: "Associate Partner", img: "/36th image.jpg", pos: "50% 15%" },
              ].map((member, i) => (
                <div key={i} style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", padding: "36px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", flex: "1 1 200px", maxWidth: "240px" }}>
                  <div style={{ width: "110px", height: "110px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.4)", flexShrink: 0 }}>
                    {member.img
                      ? <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: member.pos }} />
                      : <div style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" style={{ width: 42, height: 42, stroke: "rgba(255,255,255,0.7)", fill: "none", strokeWidth: 1.4 }}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
                    }
                  </div>
                  <p style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: 0, textAlign: "center" }}>{member.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", margin: 0, textAlign: "center", lineHeight: 1.4 }}>{member.title}</p>
                </div>
              ))}
            </div>

            {/* Row 2 — 2 members centered */}
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              {[
                { name: "Vandita Kondapaneni", title: "Manager, Client Services (Audit & Assurance)", img: "/41th image.png", pos: "top center" },
                { name: "Vivek Varshith Velichala", title: "Manager, Client Services (Accounting & SOX)", img: "/42th image.png", pos: "top center" },
                { name: "Bhavana Chiriki", title: "People & Operations Leader", img: "/39th image.jpg", pos: "50% 15%" },
              ].map((member, i) => (
                <div key={i} style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "20px", padding: "36px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", flex: "0 0 240px", maxWidth: "240px" }}>
                  <div style={{ width: "110px", height: "110px", borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(255,255,255,0.4)", flexShrink: 0 }}>
                    {member.img
                      ? <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: member.pos }} />
                      : <div style={{ width: "100%", height: "100%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg viewBox="0 0 24 24" style={{ width: 42, height: 42, stroke: "rgba(255,255,255,0.7)", fill: "none", strokeWidth: 1.4 }}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div>
                    }
                  </div>
                  <p style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: 0, textAlign: "center" }}>{member.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", margin: 0, textAlign: "center", lineHeight: 1.4 }}>{member.title}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      {/* Mission & Vision section */}
      <div style={{ background: "#000000", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "40px", flexWrap: "wrap" }}>

          {/* Mission Card */}
          <div style={{ flex: 1, minWidth: "280px", background: "#111111", borderRadius: "20px", padding: "48px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, marginBottom: "24px" }}>Our Mission</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0 }}>At 4AT.AI, our mission is to empower organizations to transform Accounting, Audit, Assurance, and Advisory through intelligent AI agents. We aim to automate routine tasks, strengthen compliance, and deliver actionable insights, enabling businesses to make smarter decisions, innovate faster, and achieve sustainable growth.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0 }}>We are committed to creating AI that works alongside people, enhancing their skills, supporting their growth, and driving meaningful impact across enterprises.</p>
            </div>
          </div>

          {/* Vision Card */}
          <div style={{ flex: 1, minWidth: "280px", background: "#111111", borderRadius: "20px", padding: "48px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.2, marginBottom: "24px" }}>Our Vision</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0 }}>At 4AT.AI, our vision is to redefine the future of Accounting, Audit, Assurance, and Advisory through intelligent AI. We aim to empower businesses with intelligent agents that enhance accuracy, strengthen compliance, and unlock strategic value — transforming how organizations operate, make decisions, and grow.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.7)", margin: 0 }}>We envision a world where AI is a trusted partner, seamlessly integrating into finance and advisory workflows to drive efficiency, insight, and innovation, while putting people first.</p>
            </div>
          </div>

        </div>
      </div>
      {/* 17th image background with content */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "600px" }}>
        <img src="/17th image.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", minHeight: "600px", padding: "80px 60px" }}>
          <div style={{ maxWidth: "520px" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#000000", lineHeight: 1.25, marginBottom: "20px" }}>Join Us on Our Journey</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", marginBottom: "32px" }}>We are building the future of intelligent, data-driven solutions—and your expertise can help shape what comes next. Be part of a vision focused on precision, innovation, and meaningful impact. We look forward to connecting with you.</p>
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
