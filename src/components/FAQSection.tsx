import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is 4AT.AI?",
    answer: "4AT.AI is our integrated intelligence and advisory platform—built to deliver precision-driven consulting workflows across Accounting, Auditing, Advisory, and Transformation. It is designed to enable real-time decision intelligence at the point of business operations, ensuring faster, smarter, and evidence-backed outcomes.",
  },
  {
    question: "Lightning Mode: Instant Business Insights",
    answer: "Access real-time, reliable answers with supporting data and benchmarks—within seconds for rapid decision-making.",
  },
  {
    question: "Pro Mode: Deep Analysis with Intelligent Reasoning",
    answer: "Perform advanced financial, operational, and strategic analysis with AI-powered reasoning and scenario evaluation.",
  },
  {
    question: "Casebook Intelligence",
    answer: "Leverage past case studies, industry patterns, and best practices to guide high-impact decisions.",
  },
  {
    question: "Digital Twin of Your Business",
    answer: "Create a dynamic virtual model of your organization to simulate strategies, risks, and performance outcomes.",
  },
  {
    question: "One-Click Executive Report Builder",
    answer: "Generate boardroom-ready presentations and reports instantly with structured insights and narratives.",
  },
  {
    question: "One-Click Strategic Recommendations with Rationale",
    answer: "Get actionable strategies with clear reasoning, risk assessment, and expected outcomes—because consulting is no longer about static advice, it's about intelligent systems that think, adapt, and deliver results in real time.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#1A1A1A] py-20 md:py-28">
      <div className="container mx-auto px-12" style={{ maxWidth: "1100px" }}>
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: "#fff" }}>
            Introducing{" "}
            <span className="text-gradient-gold">4AT.AI</span>
          </h2>
          <p className="font-body text-base md:text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            The Next-Generation Business Intelligence &amp; Consulting Platform
          </p>
        </div>

<p className="font-body font-bold text-center mb-6" style={{ color: "hsl(var(--gold))", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)" }}>4AT.AI Features</p>

        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "rounded-xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-amber-400/60 bg-amber-900/20"
                    : "border-white/10 hover:border-amber-300/40 bg-white/5"
                )}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer transition-colors"
                >
                  <span
                    className="font-body font-bold pr-4"
                    style={{ color: isOpen ? "hsl(var(--gold))" : "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 1.5vw, 1.2rem)" }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{
                      backgroundColor: isOpen ? "hsl(var(--gold) / 0.15)" : "rgba(255,255,255,0.08)",
                      color: isOpen ? "hsl(var(--gold))" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div
                  className="transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-5">
                    <p
                      className="font-body leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-body font-bold italic" style={{ color: "hsl(var(--gold) / 0.8)", fontSize: "clamp(1.4rem, 2.2vw, 1.8rem)" }}>
          This is 4AT.AI — The Future of Intelligent Consulting.
          </p>
        </div>
      </div>
    </section>
  );
}
