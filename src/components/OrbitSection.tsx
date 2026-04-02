import { useEffect, useRef } from "react";

// Dramatic scroll-driven color stops
const BG_STOPS = [
  { r: 47,  g: 79,  b: 79  },
  { r: 20,  g: 60,  b: 100 },
  { r: 60,  g: 20,  b: 80  },
  { r: 10,  g: 40,  b: 30  },
];

function lerpColor(a: typeof BG_STOPS[0], b: typeof BG_STOPS[0], t: number) {
  const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
  return `rgb(${Math.round(a.r+(b.r-a.r)*ease)},${Math.round(a.g+(b.g-a.g)*ease)},${Math.round(a.b+(b.b-a.b)*ease)})`;
}

function scrollBg(progress: number) {
  const seg = progress * (BG_STOPS.length - 1);
  const i = Math.min(Math.floor(seg), BG_STOPS.length - 2);
  return lerpColor(BG_STOPS[i], BG_STOPS[i + 1], seg - i);
}

export default function OrbitSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const topWaveRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number, CX: number, CY: number, scale: number;

    const RING_N = 140, SPHERE_N = 68;
    const ringParts = Array.from({ length: RING_N }, () => ({
      baseAngle: Math.random() * Math.PI * 2,
      r: 248 + Math.random() * 76,
      size: 1.8 + Math.random() * 2.5,
      isSq: Math.random() > 0.48,
    }));
    const sphereParts = Array.from({ length: SPHERE_N }, (_, i) => ({
      phi: Math.acos(1 - 2 * (i + 0.5) / SPHERE_N),
      theta: Math.PI * (1 + Math.sqrt(5)) * i,
      size: 1.2 + Math.random() * 1.1,
    }));

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      W = canvas!.width = rect.width;
      H = canvas!.height = rect.height;
      CX = W / 2; CY = H / 2;
      scale = W / 520;
    }
    resize();
    window.addEventListener("resize", resize);

    const px = (v: number) => v * scale;

    let t = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      t += 0.004;
      const rotOff = t * 0.28;
      const maxDist = px(88);

      const rp = ringParts.map(p => {
        const a = p.baseAngle + rotOff;
        return { x: CX + px(p.r) * Math.cos(a), y: CY + px(p.r) * Math.sin(a) * 0.87, angle: a, size: px(p.size), isSq: p.isSq };
      });

      for (let i = 0; i < rp.length; i++) {
        for (let j = i + 1; j < rp.length; j++) {
          const d = Math.hypot(rp[i].x - rp[j].x, rp[i].y - rp[j].y);
          if (d < maxDist) {
            const a = (rp[i].angle + rp[j].angle) / 2;
            const n = (Math.cos(a) + 1) / 2;
            ctx.beginPath();
            ctx.moveTo(rp[i].x, rp[i].y);
            ctx.lineTo(rp[j].x, rp[j].y);
            ctx.strokeStyle = `rgba(${Math.round(220+n*35)},${Math.round(130+n*80)},0,${(1-d/maxDist)*0.38})`;
            ctx.lineWidth = 0.72;
            ctx.stroke();
          }
        }
      }
      for (const p of rp) {
        const n = (Math.cos(p.angle) + 1) / 2;
        ctx.fillStyle = n > 0.5 ? "rgba(255,210,60,0.95)" : "rgba(255,155,0,0.92)";
        if (p.isSq) { const h = p.size * 0.72; ctx.fillRect(p.x - h/2, p.y - h/2, h, h); }
        else { ctx.beginPath(); ctx.arc(p.x, p.y, p.size * 0.55, 0, Math.PI * 2); ctx.fill(); }
      }

      const SR = px(73), sOff = t * 0.62, sDist = px(50);
      const sp = sphereParts.map(p => {
        const sinPhi = Math.sin(p.phi);
        const theta = p.theta + sOff;
        const x3 = SR * sinPhi * Math.cos(theta);
        const y3 = SR * sinPhi * Math.sin(theta) * 0.64;
        const z3 = SR * Math.cos(p.phi);
        return { x: CX + x3, y: CY + y3, z: z3, size: p.size * (1 + z3 / (SR * 4.5)) * scale };
      }).sort((a, b) => a.z - b.z);

      for (let i = 0; i < sp.length; i++) {
        for (let j = i + 1; j < sp.length; j++) {
          const d = Math.hypot(sp[i].x - sp[j].x, sp[i].y - sp[j].y);
          if (d < sDist) {
            ctx.beginPath(); ctx.moveTo(sp[i].x, sp[i].y); ctx.lineTo(sp[j].x, sp[j].y);
            ctx.strokeStyle = `rgba(255,170,0,${(1-d/sDist)*0.38})`; ctx.lineWidth = 0.65; ctx.stroke();
          }
        }
      }
      for (const p of sp) {
        const b = (p.z + SR) / (2 * SR);
        ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.round(200+b*55)},${Math.round(110+b*100)},${Math.round(b*10)},${0.45+b*0.50})`; ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Intersection Observer — reveal left/right on enter
  useEffect(() => {
    const els = [leftRef.current, rightRef.current].filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("at-revealed"); observer.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll-driven background with smooth RAF interpolation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let current = { r: 47, g: 79, b: 79 };
    let target = { r: 47, g: 79, b: 79 };
    let rafId: number;

    const getTarget = () => {
      const scrollY = window.scrollY;
      const heroHeight = el.offsetTop; // hero ends where OrbitSection begins
      const progress = Math.min(1, Math.max(0, scrollY / heroHeight));
      const seg = progress * (BG_STOPS.length - 1);
      const i = Math.min(Math.floor(seg), BG_STOPS.length - 2);
      const t = seg - i;
      const ease = t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
      const a = BG_STOPS[i], b = BG_STOPS[i + 1];
      return {
        r: Math.round(a.r + (b.r - a.r) * ease),
        g: Math.round(a.g + (b.g - a.g) * ease),
        b: Math.round(a.b + (b.b - a.b) * ease),
      };
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const SPEED = 0.08;

    const tick = () => {
      current.r = lerp(current.r, target.r, SPEED);
      current.g = lerp(current.g, target.g, SPEED);
      current.b = lerp(current.b, target.b, SPEED);
      const col = `rgb(${Math.round(current.r)},${Math.round(current.g)},${Math.round(current.b)})`;
      el.style.backgroundColor = col;
      if (topWaveRef.current) topWaveRef.current.setAttribute("fill", col);
      rafId = requestAnimationFrame(tick);
    };

    const onScroll = () => { target = getTarget(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const cards = [
    { label: "Intelligence", top: "12.5%", left: "50%", icon: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></> },
    { label: "Innovation",   top: "36%",   left: "87%", icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/> },
    { label: "Trust",        top: "71%",   left: "83%", icon: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/> },
    { label: "Precision",    top: "71%",   left: "17%", icon: <path d="M5 12h14M12 5l7 7-7 7"/> },
    { label: "Transformation", top: "36%", left: "13%", icon: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></> },
  ];

  return (
    <section ref={sectionRef} className="at-orbit-section">
      {/* Wave top edge — fill synced with scroll background color */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", lineHeight: 0, zIndex: 2, transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
          <path ref={topWaveRef} d="M0,40 C360,80 720,0 1080,50 C1260,68 1380,28 1440,40 L1440,80 L0,80 Z" fill="#2F4F4F" />
        </svg>
      </div>
      <div className="at-orbit-container">
        <div ref={leftRef} className="at-orbit-left at-reveal at-reveal-left">
          <div className="at-scene">
            <canvas ref={canvasRef} className="at-canvas" />

            <div className="at-cards-ring">
              {cards.map((c, i) => (
                <div key={i} className="at-card" style={{ top: c.top, left: c.left, animationDelay: `${i * 0.8}s` }}>
                  <div className="at-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#ffa500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">{c.icon}</svg>
                  </div>
                  <div className="at-card-label">{c.label}</div>
                </div>
              ))}
            </div>

            <svg className="at-arrows" viewBox="0 0 700 700">
              <defs>
                <marker id="at-ah" markerWidth="8" markerHeight="7" refX="7" refY="3.5" orient="auto">
                  <path d="M0,0.5 L0,6.5 L7.5,3.5 z" fill="rgba(68,105,215,0.72)"/>
                </marker>
              </defs>
              {[
                "M 414,96 Q 530,125 581,238",
                "M 616,276 Q 653,370 607,480",
                "M 546,506 Q 350,563 155,507",
                "M 91,480 Q 48,368 87,270",
                "M 120,238 Q 207,138 291,97",
              ].map((d, i) => (
                <path key={i} className="at-arrow-path" markerEnd="url(#at-ah)" d={d} style={{ animationDelay: `${i * 0.44}s` }} />
              ))}
            </svg>
          </div>
        </div>
        <div ref={rightRef} className="at-orbit-right at-reveal at-reveal-right">
          <h3 className="at-content-heading">
            Continuous Business Intelligence &amp; <span className="at-content-gold">Advisory</span>
          </h3>
          <div className="at-content-body">
            <p>Our intelligent consulting agents continuously evaluate business scenarios, analyze financial and operational data, assess risks and opportunities, and align decisions with industry standards and regulatory frameworks.</p>
            <p>They deliver clear strategic rationale, automate re-evaluation as new data emerges, and ensure your business stays adaptive in a dynamic environment.</p>
            <p>This enables real-time insights on performance optimization, risk signals, compliance gaps, and growth forecasting—not as static reports, but as intelligent, actionable business tools.</p>
            <div className="at-content-quote">
              <p>"Because intelligence only creates value when it is applied at the point of decision to drive measurable outcomes."</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .at-orbit-section {
          background: #2F4F4F;
          padding: 160px 0 160px;
          overflow: clip;
          position: relative;
        }
        /* ── Scroll reveal ── */
        .at-reveal {
          opacity: 0;
          transition: opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1);
        }
        .at-reveal-left  { transform: translateX(-60px) scale(0.96); }
        .at-reveal-right { transform: translateX(60px) scale(0.96); transition-delay: 0.18s; }
        .at-revealed     { opacity: 1 !important; transform: translateX(0) scale(1) !important; }
        .at-orbit-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          gap: 0;
        }
        .at-orbit-left {
          width: 50%;
          display: flex;
          justify-content: center;
        }
        .at-orbit-right {
          width: 50%;
          padding-left: 40px;
        }
        .at-content-heading {
          font-family: 'Exo 2', 'Inter', sans-serif;
          font-size: clamp(1.4rem, 2.2vw, 2rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 24px;
          line-height: 1.3;
        }
        .at-content-gold {
          background: linear-gradient(90deg, #f5c842, #ffa500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .at-content-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .at-content-body p {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.82rem, 1.1vw, 0.95rem);
          line-height: 1.75;
          color: rgba(255,255,255,0.72);
          margin: 0;
        }
        .at-content-quote {
          margin-top: 8px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,185,30,0.30);
        }
        .at-content-quote p {
          font-style: italic;
          color: #f5c842 !important;
          font-size: 0.85rem !important;
        }
        .at-scene {
          position: relative;
          width: min(92vw, 48vw, 620px);
          aspect-ratio: 1 / 1;
          max-width: 620px;
        }
        .at-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .at-cards-ring {
          position: absolute;
          inset: 0;
          animation: at-orbitRing 18s linear infinite;
          transform-origin: 50% 50%;
        }
        @keyframes at-orbitRing {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .at-card {
          position: absolute;
          background: rgba(20,50,50,0.88);
          border: 1.5px solid rgba(255,185,30,0.55);
          border-radius: 14px;
          padding: 10px 16px 11px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 7px;
          min-width: 110px;
          transform: translate(-50%, -50%);
          animation: at-glow 4s ease-in-out infinite, at-counterRotate 18s linear infinite;
        }
        @keyframes at-counterRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes at-glow {
          0%,100% { box-shadow: 0 4px 22px rgba(255,160,0,.12); }
          50%      { box-shadow: 0 6px 30px rgba(255,160,0,.28), 0 0 18px rgba(255,180,0,.20); }
        }
        .at-card-icon {
          width: 42px; height: 42px;
          background: linear-gradient(135deg,#2a1a00,#3d2600);
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
        }
        .at-card-label {
          font-family: 'Exo 2', 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .14em;
          color: #f5c842;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .at-arrows {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          pointer-events: none; overflow: visible;
        }
        .at-arrow-path {
          fill: none;
          stroke: rgba(255,165,0,0.65);
          stroke-width: 1.6;
          stroke-dasharray: 5 4;
          animation: at-dashFlow 2.2s linear infinite;
        }
        @keyframes at-dashFlow {
          from { stroke-dashoffset: 18; }
          to   { stroke-dashoffset: 0; }
        }
        @media (max-width: 768px) {
          .at-orbit-container { flex-direction: column; }
          .at-orbit-left, .at-orbit-right { width: 100%; }
          .at-orbit-right { padding-left: 0; padding-top: 32px; }
          .at-scene { width: min(92vw, 480px); max-width: 480px; }
        }
      `}</style>
      {/* Wave bottom edge */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", lineHeight: 0, zIndex: 2 }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "80px" }}>
          <path d="M0,40 C360,80 720,0 1080,50 C1260,68 1380,28 1440,40 L1440,80 L0,80 Z" fill="#1A1A1A" />
        </svg>
      </div>
    </section>
  );
}
