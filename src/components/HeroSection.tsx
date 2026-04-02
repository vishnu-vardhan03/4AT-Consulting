import { useEffect, useRef } from "react";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Circle } from "lucide-react";

export default function HeroSection() {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = arrowRef.current;
    if (!el) return;
    const onScroll = () => {
      const fade = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.4));
      el.style.opacity = String(fade);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-surface">
      <WebGLShader />
      
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-[1]" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up"
          style={{ color: "hsl(var(--hero-foreground))" }}
        >
          Outthinking and Outperforming{" "}
          <span className="text-gradient-gold">Business Challenges</span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl font-body font-light mb-4 animate-fade-up opacity-90"
          style={{ color: "hsl(var(--hero-foreground))", animationDelay: "0.15s" }}
        >
          A Breakthrough Intelligence-Driven Consulting Model
        </p>

        <p
          className="text-sm sm:text-base md:text-lg font-body max-w-3xl mx-auto mb-10 animate-fade-up opacity-70"
          style={{ color: "hsl(var(--hero-foreground))", animationDelay: "0.3s" }}
        >
          Transforming enterprises through AI-powered insight, precision strategy, and execution excellence.
        </p>

        <div className="flex items-center justify-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <Circle className="w-2 h-2 fill-green-400 text-green-400" />
            <Circle className="w-1.5 h-1.5 fill-green-400/60 text-green-400/60" />
          </div>
          <span className="text-sm font-body" style={{ color: "hsl(var(--hero-foreground) / 0.7)" }}>
            Available for New Projects
          </span>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <LiquidButton size="xxl">
            <span className="text-base font-semibold" style={{ color: "hsl(var(--hero-foreground))" }}>
              Let's Go
            </span>
          </LiquidButton>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div ref={arrowRef} style={{ position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", transition: "opacity 0.1s linear", pointerEvents: "none" }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>Scroll</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(245,200,66,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "hero-bounce 1.6s ease-in-out infinite" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <style>{`@keyframes hero-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(6px)} }`}</style>
      </div>
    </section>
  );
}
