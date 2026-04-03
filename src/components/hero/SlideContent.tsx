"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Slide } from "@/data/slides";
import { shapeStyles, TornPaperBlob, SanskritMotif } from "./GeometricShapes";
import { ArrowRight } from "lucide-react";

interface SlideContentProps {
  slide: Slide;
  isActive: boolean;
  totalSlides: number;
}

const SlideContent = ({ slide, isActive, totalSlides }: SlideContentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  
  // Format counter (e.g. "01 — 05")
  const counterText = `${String(slide.id).padStart(2, "0")} — ${String(totalSlides).padStart(2, "0")}`;

  // Helper to split headline text manually inside a render
  // Renders the words and characters as spans so GSAP can target them
  const renderSplitHeadline = (text: string) => {
    // We split by newline to handle the "second line is italic" requirement
    const lines = text.split('\n');
    return lines.map((line, lineIndex) => {
      const words = line.split(' ');
      return (
        <span 
          key={lineIndex} 
          className={`block overflow-hidden ${lineIndex === 1 ? 'italic font-light' : 'font-semibold'}`}
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-[0.2em]">
              {word.split('').map((char, charIndex) => (
                <span key={charIndex} className="char hidden-char inline-block translate-y-[120%]">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>
      );
    });
  };

  useEffect(() => {
    if (!containerRef.current || !isActive) return;

    // Reset styles
    gsap.set([badgeRef.current, subtextRef.current, ctaRef.current, counterRef.current], { 
      clearProps: "all" 
    });
    
    const chars = containerRef.current.querySelectorAll('.char');
    gsap.set(chars, { y: "120%", opacity: 0 });

    const timeline = gsap.timeline();

    // Text block entrance
    timeline
      .fromTo(
        badgeRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" },
        0.8 // starts at 0.8s
      )
      .to(
        chars,
        {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          stagger: 0.03,
          ease: "power3.out",
        },
        0.9 // starts at 0.9s
      )
      .fromTo(
        subtextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        1.2 // starts at 1.2s
      )
      .fromTo(
        ctaRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.5)" },
        1.4 // starts at 1.4s
      )
      .fromTo(
        counterRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" },
        1.5
      );

    return () => {
      timeline.kill();
    };
  }, [isActive]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 flex flex-col justify-end md:justify-center px-6 pb-24 md:pb-0 md:pl-[6%] md:w-[45%] lg:w-[35%] z-20 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Background shape for the text block - Torn paper blob using pseudo or inline svg */}
      <TornPaperBlob />

      <div className="relative z-10 flex flex-col items-start will-change-transform pt-12 md:pt-0">
        
        {/* Category Label (Brushstroke badge) */}
        <div ref={badgeRef} className="relative z-20 mb-6 md:mb-10 text-white flex items-center justify-center p-4 min-w-[120px] max-w-fit md:-ml-4 shadow-xl translate-y-12 md:translate-y-0"
             style={{
               backgroundColor: slide.dominantColor,
               ...shapeStyles.brushstrokeBadge
             }}>
          <span className="font-jost font-medium text-[11px] uppercase tracking-[0.2em] relative z-10">
            {slide.category}
          </span>
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="font-serif text-[clamp(42px,6vw,72px)] leading-[1.1] md:leading-[1.05] tracking-[-0.02em] mb-4 md:mb-6 uppercase"
          style={{ color: slide.textColor }}
        >
          {renderSplitHeadline(slide.headline)}
        </h1>

        {/* Sanskrit motif separator (desktop only) */}
        <div className="hidden md:block">
          <SanskritMotif />
        </div>

        {/* Subtext */}
        <p 
          ref={subtextRef}
          className="font-jost font-light text-[clamp(14px,2vw,16px)] leading-[1.7] mb-8 md:max-w-xs"
          style={{ color: slide.textColor }}
        >
          {slide.subtext}
        </p>

        {/* Call To Actions */}
        <div ref={ctaRef} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* Primary Button */}
          <button 
            className="group relative flex items-center justify-center overflow-hidden rounded-full px-8 py-[14px] w-full md:w-auto transition-colors duration-350 ease-out"
            style={{ backgroundColor: '#1A1208', color: '#F5EFE0' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = slide.dominantColor;
              e.currentTarget.style.color = '#1A1208';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1A1208';
              e.currentTarget.style.color = '#F5EFE0';
            }}
          >
            <span className="font-jost font-normal text-[13px] uppercase tracking-[0.15em] relative z-10">
              Explore Gallery
            </span>
            <ArrowRight size={16} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Ghost Button */}
          <button 
            className="group flex items-center justify-center rounded-[100px] px-8 py-[14px] border border-opacity-40 transition-all duration-350 w-full md:w-auto"
            style={{ 
              borderColor: `${slide.textColor}66`, // 40% opacity 
              color: slide.textColor 
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = slide.textColor;
              e.currentTarget.style.backgroundColor = `${slide.textColor}0D`; // 5% opacity background
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${slide.textColor}66`;
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <span className="font-jost font-normal text-[13px] uppercase tracking-[0.15em]">
              Book a Visit
            </span>
          </button>
        </div>

        {/* Slide Counter (Hidden on Mobile) */}
        <div 
          ref={counterRef}
          className="hidden md:block absolute -left-12 bottom-0 rotate-[-90deg] origin-bottom-left text-[13px] font-serif italic text-opacity-60"
          style={{ color: slide.textColor }}
        >
          {counterText}
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
