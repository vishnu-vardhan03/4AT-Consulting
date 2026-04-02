import consultingImage from "@/assets/consulting-hero.jpg";

export default function BelowHeroSection() {
  return (
    <section className="relative bg-dark-surface">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left side - Image with overlaid content */}
          <div className="flex-1 w-full animate-fade-left" style={{ animationFillMode: "both", animationDelay: "0.2s" }}>
            <div className="relative overflow-hidden rounded-2xl glow-gold">
              <img
                src={consultingImage}
                alt="AI-powered business intelligence consulting"
                className="w-full h-auto object-cover rounded-2xl"
              />
              {/* Dark gradient overlay — stronger at bottom for text legibility */}
              <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.15) 100%)" }} />
              {/* Text content overlaid on image */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-display text-xl md:text-2xl font-bold mb-4" style={{ color: "hsl(var(--hero-foreground))" }}>
                  Continuous Business Intelligence &{" "}
                  <span className="text-gradient-gold">Advisory</span>
                </h3>
                <div className="space-y-3">
                  <p className="font-body text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                    Our intelligent consulting agents continuously evaluate business scenarios,
                    analyze financial and operational data, assess risks and opportunities, and
                    align decisions with industry standards and regulatory frameworks.
                  </p>
                  <p className="font-body text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                    They deliver clear strategic rationale, automate re-evaluation as new data
                    emerges, and ensure your business stays adaptive in a dynamic environment.
                  </p>
                  <p className="font-body text-xs md:text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.80)" }}>
                    This enables real-time insights on performance optimization, risk signals,
                    compliance gaps, and growth forecasting—not as static reports, but as
                    intelligent, actionable business tools.
                  </p>
                  <div className="pt-3 border-t" style={{ borderColor: "rgba(255,185,30,0.35)" }}>
                    <p className="font-body text-xs italic" style={{ color: "hsl(var(--gold))" }}>
                      "Because intelligence only creates value when it is applied at the point
                      of decision to drive measurable outcomes."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - empty */}
          <div className="flex-1 w-full animate-fade-right" style={{ animationFillMode: "both", animationDelay: "0.4s" }} />
        </div>
      </div>
    </section>
  );
}
