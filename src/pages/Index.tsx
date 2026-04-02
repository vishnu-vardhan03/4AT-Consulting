import HeroSection from "@/components/HeroSection";
import OrbitSection from "@/components/OrbitSection";
import FAQSection from "@/components/FAQSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import BeginAnimation from "@/components/BeginAnimation";
import WaveDivider from "@/components/WaveDivider";
import StrategicSection from "@/components/StrategicSection";
import MultiModalSection from "@/components/MultiModalSection";
import ThirdImageSection from "@/components/ThirdImageSection";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="bg-dark-surface min-h-screen" style={{ paddingTop: "68px" }}>
      <Navbar />
      <HeroSection />
      <OrbitSection />
      <FAQSection />
      <section style={{ background: "#1A1A1A", padding: "60px 28px 100px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <video
            src="/screen recording.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "100%", borderRadius: "16px", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", display: "block", marginBottom: "72px" }}
          />
          <div style={{ maxWidth: "780px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: "32px", lineHeight: 1.3 }}>
              Built to Learn, Simulate, and Stay Ahead of{" "}
              <span style={{ background: "linear-gradient(90deg, #f5c842, #ffa500)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Business Change</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "40px" }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.62)", margin: 0 }}>
                4AT Consulting continuously learns, updates, and evolves its strategies—just like the organizations it supports. By integrating AI-driven intelligence with deep consulting expertise, we enable smarter, faster, and more adaptive decision-making.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.62)", margin: 0 }}>
                We create a digital model of your business to simulate potential outcomes, evaluate risks, and optimize strategies before execution.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(0.9rem, 1.2vw, 1rem)", lineHeight: 1.8, color: "rgba(255,255,255,0.62)", margin: 0 }}>
                This empowers leadership teams to operate in a continuous learning and transformation mindset—helping them outthink disruption and outpace competition.
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,185,30,0.25)", paddingTop: "32px" }}>
              <p style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.15rem)", fontWeight: 600, color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: 0 }}>
                We invite you to partner with <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 800 }}>4AT Consulting</span><br />
                and work together to outthink challenges and outperform the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CapabilitiesSection />
      <BeginAnimation />
      <StrategicSection />
      <MultiModalSection />
      <ThirdImageSection />
    </main>
  );
};

export default Index;
