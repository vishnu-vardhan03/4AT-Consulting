import Navbar from "@/components/Navbar";

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageTemplate({ title, subtitle }: Props) {
  return (
    <main style={{ minHeight: "100vh", background: "#f5f7fa", paddingTop: "68px" }}>
      <Navbar />
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 32px" }}>
        <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#1a2a4a", marginBottom: "16px" }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(15,31,61,0.6)", lineHeight: 1.8 }}>
            {subtitle}
          </p>
        )}
      </div>
    </main>
  );
}
