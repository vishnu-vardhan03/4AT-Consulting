import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 18px", borderRadius: "10px",
    border: "1.5px solid rgba(0,0,0,0.15)", fontSize: "0.97rem",
    fontFamily: "'Inter', sans-serif", color: "#000", background: "#fff",
    outline: "none", transition: "border-color 0.2s", boxSizing: "border-box",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#F8F8F8", paddingTop: "68px" }}>
      <Navbar />
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "80px 32px" }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <h2 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#000", marginBottom: "16px" }}>Thank You!</h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", color: "rgba(0,0,0,0.65)", lineHeight: 1.8 }}>We've received your request. Our team will be in touch shortly to schedule your demo.</p>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: "40px" }}>
              <h1 style={{ fontFamily: "'Exo 2', 'Inter', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, color: "#000", lineHeight: 1.2, marginBottom: "12px" }}>Book a Demo</h1>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>Fill in your details and we'll get back to you to schedule a personalized demo.</p>
            </div>
            <form onSubmit={submit} style={{ background: "#fff", borderRadius: "20px", padding: "48px", boxShadow: "0 4px 32px rgba(0,0,0,0.07)", display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "John Smith" },
                { label: "Work Email", name: "email", type: "email", placeholder: "john@company.com" },
                { label: "Company", name: "company", type: "text", placeholder: "Company name" },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
              ].map((f) => (
                <div key={f.name}>
                  <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#000", marginBottom: "8px", letterSpacing: "0.02em" }}>{f.label}</label>
                  <input
                    required
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={handle}
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "#3B82F6")}
                    onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#000", marginBottom: "8px", letterSpacing: "0.02em" }}>Message (Optional)</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your needs..."
                  value={form.message}
                  onChange={handle}
                  rows={4}
                  style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={e => (e.target.style.borderColor = "#3B82F6")}
                  onBlur={e => (e.target.style.borderColor = "rgba(0,0,0,0.15)")}
                />
              </div>
              <button
                type="submit"
                style={{ padding: "15px", borderRadius: "100px", background: "#000", color: "#fff", fontSize: "0.97rem", fontWeight: 700, fontFamily: "'Inter', sans-serif", letterSpacing: "0.06em", border: "none", cursor: "pointer", transition: "all 0.3s ease", marginTop: "8px" }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.background = "#222"; el.style.transform = "scale(1.02)"; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.background = "#000"; el.style.transform = "scale(1)"; }}
              >
                Request Demo
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
