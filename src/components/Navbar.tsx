import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "PLATFORM",  path: "/platform/intelligence-platform" },
  { label: "SOLUTIONS", path: "/solutions/ai-accounting" },
  { label: "AI ENGINE", path: "/ai-engine/architecture" },
  { label: "ABOUT",     path: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px 14px",
    fontSize: "0.72rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
    color: "rgba(0,0,0,0.8)",
    fontFamily: "'Inter', sans-serif",
    textDecoration: "none",
    transition: "color 0.2s",
    display: "inline-block",
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <img src="/4th image.png" alt="4AT Consulting" style={{ height: "56px", width: "auto", display: "block" }} />
          </Link>

          {/* Desktop menu */}
          <ul role="menubar" style={{ display: "flex", alignItems: "center", gap: "4px", listStyle: "none", margin: 0, padding: 0 }} className="nav-desktop">
            {navItems.map((nav, i) => (
              <li key={i} role="none">
                <Link
                  to={nav.path}
                  role="menuitem"
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = "#3B82F6")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.8)")}
                >
                  {nav.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link
              to="/book-demo"
              style={{ padding: "9px 22px", borderRadius: "100px", border: "1.5px solid #3B82F6", color: "#111", fontSize: "0.82rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", textDecoration: "none", letterSpacing: "0.04em", transition: "all 0.25s ease", background: "transparent", whiteSpace: "nowrap" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#3B82F6"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(59,130,246,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#111"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              Book a Demo
            </Link>

            <button
              className="nav-hamburger"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", display: "none", flexDirection: "column", gap: "5px" }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "#111", borderRadius: "2px" }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="nav-mobile-menu"
          style={{ maxHeight: mobileOpen ? "400px" : "0", overflow: "hidden", transition: "max-height 0.4s ease", background: "rgba(255,255,255,0.98)", borderTop: mobileOpen ? "1px solid rgba(0,0,0,0.08)" : "none" }}
        >
          <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {navItems.map((nav, i) => (
              <Link
                key={i}
                to={nav.path}
                onClick={() => setMobileOpen(false)}
                style={{ padding: "12px 8px", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", color: "#111", fontFamily: "'Inter', sans-serif", textDecoration: "none", borderBottom: "1px solid rgba(0,0,0,0.06)" }}
              >
                {nav.label}
              </Link>
            ))}
            <Link
              to="/book-demo"
              style={{ marginTop: "12px", padding: "12px", textAlign: "center", borderRadius: "100px", border: "1.5px solid #3B82F6", color: "#111", fontSize: "0.85rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", textDecoration: "none" }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
