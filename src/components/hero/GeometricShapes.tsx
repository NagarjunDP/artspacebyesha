import React from 'react';

// Shape 4 — "The Torn Paper" (used as background in Text area)
export const TornPaperBlob = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
    preserveAspectRatio="none"
    viewBox="0 0 120 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 0,20 Q 20,0 40,15 T 80,10 T 120,20 L 120,80 Q 100,100 80,90 T 40,95 T 0,80 Z"
      fill="currentColor"
    />
  </svg>
);

// Shape 3 — "The Palette Circle"
export const PaletteCircle = ({ className }: { className?: string }) => (
  <div className={`relative rounded-full ${className}`}>
    <svg
      className="absolute inset-[-4px] w-[calc(100%+8px)] h-[calc(100%+8px)] animate-[spin_60s_linear_infinite]"
      viewBox="0 0 100 100"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="4 6"
        opacity="0.3"
      />
    </svg>
  </div>
);

// Shape 5 — "The Frame Fragment"
export const FrameCorners = () => (
  <>
    {/* Top Left */}
    <div className="absolute top-4 left-4 md:top-8 md:left-8 w-10 h-10 border-t-2 border-l-2 border-turmeric-gold z-20 pointer-events-none transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
    {/* Bottom Right */}
    <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 border-b-2 border-r-2 border-turmeric-gold z-20 pointer-events-none transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
  </>
);

// Common Clip Paths (applied via style tags to support -webkit prefix and border-radius fallback)
export const shapeStyles = {
  canvasCut: {
    clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
    WebkitClipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
    // Fallback for older browsers
    borderRadius: "12px",
  },
  canvasCutMobile: {
    clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
    borderRadius: "0 0 12px 12px",
  },
  brushstrokeBadge: {
    clipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
    WebkitClipPath: "polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)",
    borderRadius: "20px",
  },
  diagonalSweepStart: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    WebkitClipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  diagonalSweepEnd: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    WebkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  }
};

export const SanskritMotif = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="opacity-40 text-turmeric-gold my-4"
  >
    <g transform="translate(16, 16)">
      <path d="M0 -8 L4 0 L0 8 L-4 0 Z" />
      <path d="M0 -8 L4 0 L0 8 L-4 0 Z" transform="rotate(45)" />
      <path d="M0 -8 L4 0 L0 8 L-4 0 Z" transform="rotate(90)" />
      <path d="M0 -8 L4 0 L0 8 L-4 0 Z" transform="rotate(135)" />
    </g>
  </svg>
);
