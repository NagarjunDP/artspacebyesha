"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ProgressBarProps {
  currentSlide: number;
  duration: number; // in milliseconds
  isAutoplayDelay: boolean;
}

const ProgressBar = ({ currentSlide, duration, isAutoplayDelay }: ProgressBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current || !isAutoplayDelay) return;

    // Reset and animate progress bar for the current slide
    gsap.killTweensOf(progressRef.current);
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: duration / 1000,
        ease: "none",
        transformOrigin: "left center",
      }
    );

    return () => {
      if (progressRef.current) gsap.killTweensOf(progressRef.current);
    };
  }, [currentSlide, duration, isAutoplayDelay]);

  return (
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20 z-50 pointer-events-none">
      <div
        ref={progressRef}
        className="w-full h-full bg-turmeric-gold origin-left"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};

export default ProgressBar;
