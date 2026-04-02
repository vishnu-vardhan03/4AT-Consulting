import { useEffect, useRef, useState } from "react";

export default function ThirdImageSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "linear-gradient(135deg, #eef4fb 0%, #e8eef8 50%, #dde8f5 100%)",
        padding: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        width: "100%",
        lineHeight: 0,
      }}
    >
      <img
        src="/3rd image.png"
        alt="3rd section visual"
        style={{ width: "100%", display: "block" }}
      />
    </section>
  );
}
