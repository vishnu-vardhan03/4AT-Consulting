import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", paddingTop: "68px" }}>
      <Navbar />

      {/* Hero section with 18th image as background */}
      <div style={{ position: "relative", minHeight: "calc(100vh - 68px)", overflow: "hidden" }}>
        <img
          src="/18th image.jpg"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        />

        {/* Content on the left */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", minHeight: "calc(100vh - 68px)", padding: "80px 60px" }}>
          <div style={{ maxWidth: "520px" }}>
            <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 900, color: "#000000", lineHeight: 1.2, marginBottom: "24px" }}>
              A New Partner for Professionals
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", marginBottom: "40px" }}>
              Professionals need a reliable partner. The platform provides access to global expertise, industry insights, and real-time data to support well-informed decisions at the point of action. By combining external intelligence with organization-specific context, it enables the creation of strategies that are precise, relevant, and effective. The goal is to empower professionals to deliver the best possible outcomes with confidence and clarity.
            </p>
            <a
              href="/solutions/ai-accounting"
              style={{ display: "inline-block", padding: "14px 40px", borderRadius: "100px", background: "#000000", color: "#ffffff", fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#222"; el.style.transform = "scale(1.05)"; el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.5)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#000000"; el.style.transform = "scale(1)"; el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.4)"; }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      {/* New section — white bg, 19th image left, content right */}
      <div style={{ background: "#ffffff", padding: "100px 60px", display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <img src="/19th image.png" alt="" style={{ width: "100%", display: "block" }} />
        </div>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <a
            href="#"
            style={{ display: "inline-block", marginBottom: "24px", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.1)"; el.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.06)"; el.style.transform = "scale(1)"; }}
          >
            <span style={{ color: "#000000", fontWeight: 700 }}>Our Solutions</span>
          </a>
          <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 800, color: "#000000", lineHeight: 1.25, marginBottom: "24px" }}>
            Unifying Precise Information
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", margin: 0 }}>
            The goal is to enable effective decision-making by bringing together the most relevant combination of global insights and local context. By integrating diverse data sources into a unified intelligence layer, the platform supports the development of accurate, well-informed strategies tailored to each specific situation.
          </p>
        </div>
      </div>
      {/* 20th image as background with white card overlay */}
      <div style={{ position: "relative", minHeight: "600px", overflow: "hidden" }}>
        <img
          src="/20th image.png"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end", minHeight: "600px", padding: "80px 60px" }}>
          <div style={{ background: "#ffffff", borderRadius: "20px", padding: "48px", maxWidth: "480px", width: "45%", minWidth: "280px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)", marginRight: "5%" }}>
            <a
              href="#"
              style={{ display: "inline-block", marginBottom: "20px", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.1)"; el.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.06)"; el.style.transform = "scale(1)"; }}
            >
              <span style={{ color: "#000000", fontWeight: 700 }}>For Professionals</span>
            </a>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.4rem, 2.2vw, 2rem)", fontWeight: 800, color: "#000000", lineHeight: 1.25, marginBottom: "20px" }}>
              Precision in Every Decision
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", margin: 0 }}>
              Precision in every decision comes from combining new data, evolving insights, emerging opportunities, and practical experience with the unique context of each situation. By integrating these elements, the platform enables more accurate, informed, and confident decision-making.
            </p>
          </div>
        </div>
      </div>
      {/* 3-column section — no cards */}
      <div style={{ background: "#f7f7f7", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "48px", alignItems: "stretch" }}>
          {[
            { heading: "Cumulative Insights", text: "Each interaction builds on the previous one, creating a continuously evolving understanding of the system or organization. By accessing detailed, real-time data on historical performance, context, and outcomes, the platform enables more informed, precise, and context-aware decision-making tailored to specific needs.", img: "/21th image.png", alt: "Cumulative Insights" },
            { heading: "Seamless Workflow Integration", text: "The platform integrates smoothly into existing workflows, reducing administrative overhead and manual effort. By automating routine tasks and streamlining processes, it enables professionals to focus more on high-value activities and deliver more precise, effective outcomes.", img: "/22th image.png", alt: "Seamless Workflow Integration" },
            { heading: "Personalized Plans", text: "The solution enables the development of strategies tailored to each unique context by leveraging relevant data, historical insights, and evolving conditions. This ensures that every plan is specific, adaptive, and aligned with the individual requirements and objectives of the situation.", img: "/23th image.png", alt: "Personalized Plans" },
          ].map((col, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <h3 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", fontWeight: 800, color: "#000000", lineHeight: 1.25, margin: 0 }}>{col.heading}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.8, color: "rgba(0,0,0,0.7)", margin: 0, flex: 1 }}>{col.text}</p>
              <img src={col.img} alt={col.alt} style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "14px", display: "block" }} />
            </div>
          ))}
        </div>
      </div>
      {/* For Organizations section */}
      <div style={{ background: "#E8EEF3", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <a href="#" style={{ display: "inline-block", marginBottom: "20px", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.1)"; el.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.06)"; el.style.transform = "scale(1)"; }}
            ><span style={{ color: "#000000", fontWeight: 700 }}>For Organizations</span></a>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#000000", lineHeight: 1.2, margin: "0 auto 24px", maxWidth: "800px" }}>Every stakeholder plays a role in improving outcomes.</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.3vw, 1.1rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.7)", margin: "0 auto", maxWidth: "700px" }}>High-performing teams create systems that free up time, enabling individuals to operate at their highest potential. When platforms integrate seamlessly with existing systems, they provide comprehensive insights and enable more informed, coordinated decision-making. Operational and system experts play a critical role in making this possible, ensuring efficiency, reliability, and continuous improvement.</p>
          </div>
          <img src="/24th image.png" alt="For Organizations" style={{ width: "100%", display: "block" }} />
        </div>
      </div>
      {/* Solution features section */}
      <div style={{ background: "#ffffff", padding: "100px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "60px", maxWidth: "1200px", margin: "0 auto" }}>
          {[
            {
              heading: "Strategic Advisory",
              text: "We align your business goals with actionable roadmaps. By understanding your core challenges, 4AT Consulting delivers targeted strategies that reduce complexity and accelerate measurable outcomes across every tier of your organization.",
              icon: <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, stroke: "#000", fill: "none", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }}><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            },
            {
              heading: "Digital Transformation",
              text: "Our flagship consulting framework modernizes legacy operations through intelligent automation and data-driven insights. We guide enterprises toward scalable digital ecosystems that enable agility, innovation, and long-term competitive advantage.",
              icon: <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, stroke: "#000", fill: "none", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            },
            {
              heading: "Talent & Operations Excellence",
              text: "4AT connects organizations with the right expertise to strengthen their workforce and operational processes. Our solutions identify capability gaps, optimize team structures, and build sustainable performance cultures that scale with your growth.",
              icon: <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, stroke: "#000", fill: "none", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const }}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><line x1="18" y1="14" x2="22" y2="14"/><line x1="20" y1="12" x2="20" y2="16"/></svg>
            },
          ].map((item, i) => (
            <div key={i}>
              <div style={{ width: 72, height: 72, border: "1.5px solid #000", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
                {item.icon}
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 400, lineHeight: 1.3, marginBottom: 20, color: "#000", letterSpacing: "-0.3px" }}>{item.heading}</h2>
              <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: 15.5, lineHeight: 1.75, color: "#000", fontWeight: 300, letterSpacing: "0.1px" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      {/* For Individuals section */}
      <div style={{ background: "#F8F8F8", padding: "100px 60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", background: "#ffffff", borderRadius: "24px", padding: "60px", boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" }}>
          {/* Left — content */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <a href="#" style={{ display: "inline-block", marginBottom: "20px", padding: "13px 32px", borderRadius: "14px", background: "rgba(0,0,0,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(67,144,207,0.3)", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease" }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.1)"; el.style.transform = "scale(1.05)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(0,0,0,0.06)"; el.style.transform = "scale(1)"; }}
            ><span style={{ color: "#000000", fontWeight: 700 }}>For Individuals</span></a>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 800, color: "#000000", lineHeight: 1.25, marginBottom: "24px" }}>Your Partner in the Journey</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", margin: 0 }}>We understand that navigating complex challenges can be overwhelming. That's why the platform is designed to act as a personalized companion, supporting you at every stage with clarity and confidence.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", margin: 0 }}>It combines relevant data, global insights, and expert knowledge to deliver tailored plans and continuous support aligned to your specific situation—while also complementing the expertise of professionals guiding you.</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", margin: 0 }}>The result is a more informed, coordinated, and supportive experience throughout your journey.</p>
            </div>
          </div>
          {/* Right — image */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <img src="/25th image.png" alt="For Individuals" style={{ width: "100%", display: "block", borderRadius: "16px" }} />
          </div>
        </div>
      </div>
      {/* 26th image background section */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "700px" }}>
        <img src="/26th image.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "700px", padding: "80px 60px", textAlign: "center" }}>
          <a href="#" style={{ display: "inline-block", marginBottom: "24px", padding: "13px 32px", borderRadius: "14px", background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.4)", boxShadow: "0 4px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)", fontSize: "0.9rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.25)"; el.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.15)"; el.style.transform = "scale(1)"; }}
          ><span style={{ background: "linear-gradient(90deg, #4390CF, #AAD3F0, #C5E2F7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontWeight: 700 }}>Our Platform</span></a>
          <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.25, marginBottom: "24px", maxWidth: "800px" }}>A platform designed to drive deep precision through a comprehensive, integrated approach.</h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(255,255,255,0.85)", marginBottom: "32px", maxWidth: "700px" }}>It brings together domain-specific data, global expertise, real-time insights, and streamlined workflows into a unified system. By combining these core elements, the platform enables more accurate analysis, informed decision-making, and efficient execution at every stage of the process.</p>
          <a href="/platform/intelligence-platform" style={{ display: "inline-block", marginBottom: "48px", padding: "14px 40px", borderRadius: "100px", background: "#ffffff", color: "#000000", fontSize: "0.95rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", textDecoration: "none", transition: "all 0.3s ease", boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#f0f0f0"; el.style.transform = "scale(1.05)"; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#ffffff"; el.style.transform = "scale(1)"; }}
          >Learn More</a>
          <img src="/9th image.png" alt="" style={{ maxWidth: "700px", width: "100%", display: "block" }} />
        </div>
      </div>
      {/* 17th image background with content */}
      <div style={{ position: "relative", overflow: "hidden", minHeight: "600px" }}>
        <img src="/17th image.jpg" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", minHeight: "600px", padding: "80px 60px" }}>
          <div style={{ maxWidth: "520px" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 900, color: "#000000", lineHeight: 1.25, marginBottom: "20px" }}>Transformation Requires a Team</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.92rem, 1.2vw, 1.05rem)", lineHeight: 1.85, color: "rgba(0,0,0,0.75)", marginBottom: "32px" }}>Meaningful transformation is driven by collaboration, shared expertise, and the right technology working together. Connect with us to explore how the platform operates and how it can support your goals.</p>
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
