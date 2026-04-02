import { useEffect, useRef } from "react";

export default function ScrollRevealSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Intersection Observer — add .sr-visible once
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { section.classList.add("sr-visible"); observer.disconnect(); } },
      { threshold: 0.18 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.12;
      el.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="sr-section">
      <div className="sr-container">

        {/* ── Left: text ── */}
        <div className="sr-left sr-animate" style={{ "--sr-delay": "0s" } as React.CSSProperties}>
          <span className="sr-eyebrow">Strategy · Intelligence · Execution</span>
          <h2 className="sr-heading">
            Decisions Powered by <span className="sr-gold">Real Intelligence</span>
          </h2>
          <p className="sr-body">
            We combine AI-driven analysis with deep domain expertise to surface the insights
            that matter — turning complex data into clear, confident business decisions.
            No guesswork. No lag. Just precision at every step.
          </p>
          <div className="sr-actions">
            <a href="#" className="sr-btn-primary">Explore Our Approach</a>
            <a href="#" className="sr-btn-ghost">See Case Studies →</a>
          </div>
          <div className="sr-stats">
            {[["98%", "Client Retention"], ["3×", "Faster Decisions"], ["$2B+", "Value Unlocked"]].map(([val, label]) => (
              <div key={label} className="sr-stat">
                <span className="sr-stat-val">{val}</span>
                <span className="sr-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: illustration ── */}
        <div className="sr-right sr-animate" style={{ "--sr-delay": "0.18s" } as React.CSSProperties}>
          <div className="sr-img-wrap">
            <div ref={parallaxRef} className="sr-illustration">
              {/* Floating card 1 */}
              <div className="sr-float-card sr-fc1">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f5c842" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                <div>
                  <div className="sr-fc-title">Live Analytics</div>
                  <div className="sr-fc-sub">Updated 2s ago</div>
                </div>
              </div>

              {/* Central visual */}
              <div className="sr-central">
                <svg viewBox="0 0 260 260" width="260" height="260" className="sr-ring-svg">
                  <defs>
                    <radialGradient id="sr-rg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#f5c842" stopOpacity="0.18"/>
                      <stop offset="100%" stopColor="#143C64" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="sr-arc1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f5c842"/>
                      <stop offset="100%" stopColor="#ffa500" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="sr-arc2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4466dd"/>
                      <stop offset="100%" stopColor="#4466dd" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  <circle cx="130" cy="130" r="120" fill="url(#sr-rg)"/>
                  <circle cx="130" cy="130" r="110" fill="none" stroke="rgba(245,200,66,0.12)" strokeWidth="1"/>
                  <circle cx="130" cy="130" r="80"  fill="none" stroke="rgba(245,200,66,0.18)" strokeWidth="1.5"/>
                  <circle cx="130" cy="130" r="50"  fill="none" stroke="rgba(245,200,66,0.25)" strokeWidth="2"/>
                  {/* Arcs */}
                  <path d="M 130,20 A 110,110 0 0,1 240,130" fill="none" stroke="url(#sr-arc1)" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M 240,130 A 110,110 0 0,1 130,240" fill="none" stroke="url(#sr-arc2)" strokeWidth="2" strokeLinecap="round"/>
                  {/* Dots on ring */}
                  {[0,72,144,216,288].map((deg, i) => {
                    const rad = (deg - 90) * Math.PI / 180;
                    return <circle key={i} cx={130 + 110 * Math.cos(rad)} cy={130 + 110 * Math.sin(rad)} r="5" fill={i === 0 ? "#f5c842" : "rgba(245,200,66,0.45)"}/>;
                  })}
                  {/* Center icon */}
                  <circle cx="130" cy="130" r="36" fill="rgba(20,60,100,0.7)" stroke="rgba(245,200,66,0.4)" strokeWidth="1.5"/>
                  <text x="130" y="136" textAnchor="middle" fontSize="22" fill="#f5c842">⚡</text>
                </svg>
              </div>

              {/* Floating card 2 */}
              <div className="sr-float-card sr-fc2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <div>
                  <div className="sr-fc-title">Risk Cleared</div>
                  <div className="sr-fc-sub">3 signals resolved</div>
                </div>
              </div>

              {/* Floating card 3 */}
              <div className="sr-float-card sr-fc3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <div>
                  <div className="sr-fc-title">Next Review</div>
                  <div className="sr-fc-sub">In 4 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sr-section {
          background: #0d1117;
          padding: 100px 0 110px;
          overflow: hidden;
        }
        .sr-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          gap: 64px;
        }
        .sr-left  { flex: 1; min-width: 0; }
        .sr-right { flex: 1; min-width: 0; display: flex; justify-content: center; }

        /* ── Scroll-reveal animation ── */
        .sr-animate {
          opacity: 0;
          transition:
            opacity 0.75s cubic-bezier(0.22,1,0.36,1) var(--sr-delay, 0s),
            transform 0.75s cubic-bezier(0.22,1,0.36,1) var(--sr-delay, 0s),
            scale 0.75s cubic-bezier(0.22,1,0.36,1) var(--sr-delay, 0s);
          scale: 0.95;
        }
        .sr-left.sr-animate  { transform: translateX(-48px); }
        .sr-right.sr-animate { transform: translateX(48px); }

        .sr-visible .sr-animate {
          opacity: 1;
          transform: translateX(0);
          scale: 1;
        }

        /* ── Left content ── */
        .sr-eyebrow {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #f5c842;
          margin-bottom: 18px;
          padding: 5px 14px;
          border: 1px solid rgba(245,200,66,0.3);
          border-radius: 100px;
          background: rgba(245,200,66,0.07);
        }
        .sr-heading {
          font-family: 'Exo 2', 'Inter', sans-serif;
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 800;
          line-height: 1.2;
          color: #fff;
          margin: 0 0 22px;
        }
        .sr-gold {
          background: linear-gradient(90deg, #f5c842, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .sr-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.88rem, 1.2vw, 1rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.62);
          margin: 0 0 32px;
          max-width: 480px;
        }
        .sr-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .sr-btn-primary {
          display: inline-block;
          padding: 13px 28px;
          background: linear-gradient(135deg, #f5c842, #ffa500);
          color: #0d1117;
          font-weight: 700;
          font-size: 0.9rem;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(245,165,0,0.28);
          transition: transform 0.22s ease, box-shadow 0.22s ease, filter 0.22s ease;
        }
        .sr-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 32px rgba(245,165,0,0.45);
          filter: brightness(1.08);
        }
        .sr-btn-ghost {
          color: rgba(255,255,255,0.65);
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sr-btn-ghost:hover { color: #f5c842; }

        .sr-stats {
          display: flex;
          gap: 32px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .sr-stat { display: flex; flex-direction: column; gap: 4px; }
        .sr-stat-val {
          font-family: 'Exo 2', 'Inter', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #f5c842;
          line-height: 1;
        }
        .sr-stat-label {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.45);
          letter-spacing: 0.04em;
        }

        /* ── Right illustration ── */
        .sr-img-wrap {
          position: relative;
          width: min(100%, 460px);
        }
        .sr-illustration {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          will-change: transform;
        }
        .sr-central {
          animation: sr-float 5s ease-in-out infinite;
          filter: drop-shadow(0 0 32px rgba(245,200,66,0.18));
        }
        @keyframes sr-float {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-14px); }
        }
        .sr-ring-svg { display: block; }

        /* Floating info cards */
        .sr-float-card {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(13,17,23,0.82);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 10px 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          white-space: nowrap;
        }
        .sr-fc-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
        }
        .sr-fc-sub {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.45);
          margin-top: 1px;
        }
        .sr-fc1 {
          top: 6%;
          left: -8%;
          animation: sr-fc-bob 4.2s ease-in-out infinite;
        }
        .sr-fc2 {
          bottom: 18%;
          right: -6%;
          animation: sr-fc-bob 5s ease-in-out infinite 0.8s;
        }
        .sr-fc3 {
          bottom: 4%;
          left: 4%;
          animation: sr-fc-bob 4.6s ease-in-out infinite 1.4s;
        }
        @keyframes sr-fc-bob {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .sr-section { padding: 72px 0 80px; }
          .sr-container { flex-direction: column; gap: 48px; }
          .sr-left, .sr-right { width: 100%; }
          .sr-body { max-width: 100%; }
          .sr-img-wrap { width: min(100%, 340px); margin: 0 auto; }
          .sr-fc1 { left: -2%; }
          .sr-fc2 { right: -2%; }
        }
      `}</style>
    </section>
  );
}
