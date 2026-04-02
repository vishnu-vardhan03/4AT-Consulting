export default function WaveDivider({ from = "#000", to = "#2F4F4F" }: { from?: string; to?: string }) {
  return (
    <div style={{ position: "relative", width: "100%", lineHeight: 0, marginTop: "-2px", background: from }}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", width: "100%", height: "90px" }}
      >
        <path
          d="M0,55 C320,15 620,85 960,45 C1140,28 1320,70 1440,50 C1320,72 1140,30 960,48 C620,88 320,18 0,58 Z"
          fill={to}
          opacity="0.5"
        />
        <path
          d="M0,45 C280,90 560,10 840,55 C1040,82 1260,20 1440,48 C1260,22 1040,84 840,58 C560,12 280,92 0,48 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
