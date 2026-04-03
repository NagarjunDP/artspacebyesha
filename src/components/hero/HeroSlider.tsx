"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import gsap from "gsap";
import { heroSlides } from "@/data/slides";
import ProgressBar from "./ProgressBar";
import SlideContent from "./SlideContent";
import { shapeStyles, PaletteCircle, FrameCorners } from "./GeometricShapes";
import HeroNavbar from "./HeroNavbar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipeOverlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Swiper instance ref to use custom buttons
  const swiperRef = useRef<any>(null);

  // AutoPlay duration
  const AUTOPLAY_DELAY = 5000;

  useEffect(() => {
    // Initial setup for the swipe overlay
    if (swipeOverlayRef.current) {
      gsap.set(swipeOverlayRef.current, { ...shapeStyles.diagonalSweepStart });
    }
  }, []);

  const handleSlideChangeTransitionStart = () => {
    const nextSlide = heroSlides[(swiperRef.current?.activeIndex || 0) % heroSlides.length];
    
    // Diagonal GSAP sweep effect
    if (swipeOverlayRef.current) {
      gsap.killTweensOf(swipeOverlayRef.current);
      const tl = gsap.timeline();
      
      // Sweep in
      tl.set(swipeOverlayRef.current, { 
          backgroundColor: nextSlide.dominantColor,
          opacity: 0.9,
          ...shapeStyles.diagonalSweepStart
        })
        .to(swipeOverlayRef.current, {
          duration: 0.7,
          ease: "power2.inOut",
          clipPath: shapeStyles.diagonalSweepEnd.clipPath,
          webkitClipPath: shapeStyles.diagonalSweepEnd.WebkitClipPath,
        })
        // Sweep out immediately after
        .set(swipeOverlayRef.current, { opacity: 0, ...shapeStyles.diagonalSweepStart });
    }
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] md:h-screen overflow-hidden bg-canvas-cream bg-sanskrit-dot">
      
      {/* Floating Background Element - The Palette Circle */}
      <div className="absolute top-[10%] right-[20%] w-[300px] h-[300px] opacity-40 text-turmeric-gold pointer-events-none z-0">
        <PaletteCircle className="w-full h-full" />
      </div>

      <Swiper
        modules={[EffectFade, Navigation, Autoplay, Pagination]}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        speed={700}
        touchRatio={1.2}
        resistance={true}
        resistanceRatio={0.6}
        loop={true}
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {heroSlides.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              {/* Desktop specific layout */}
              <div 
                className="absolute inset-0 transition-colors duration-1000 ease-in-out"
                style={{ backgroundColor: slide.bgTint }}
              >
                
                {/* Image Container (The Canvas Cut) */}
                <div 
                  className="absolute top-0 right-0 w-full h-[55vh] md:w-[65%] md:h-full z-10 overflow-hidden"
                  style={{
                    // Use standard inline style for clipPath but ensure cross-browser with CSS variables or direct injection 
                    clipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
                    WebkitClipPath: "polygon(0 0, 100% 0, 100% 92%, 0 100%)",
                    borderRadius: "0 0 12px 12px",
                  }}
                  // Using a ref or string class might be cleaner for media queries, so let's apply a generic responsive class
                >
                  {/* Tailwind arbitrary styling for responsive clip-path */}
                  <style jsx>{`
                    .canvas-cut-responsive {
                      clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
                      -webkit-clip-path: polygon(0 0, 100% 0, 100% 92%, 0 100%);
                      border-radius: 0 0 12px 12px;
                    }
                    @media (min-width: 768px) {
                      .canvas-cut-responsive {
                        clip-path: ${shapeStyles.canvasCut.clipPath};
                        -webkit-clip-path: ${shapeStyles.canvasCut.WebkitClipPath};
                        border-radius: ${shapeStyles.canvasCut.borderRadius};
                      }
                    }
                  `}</style>
                  
                  <div className="canvas-cut-responsive w-full h-full relative group">
                    <Image
                      src={slide.image}
                      alt={slide.headline.replace('\n', ' ')}
                      fill
                      className="object-cover transition-transform duration-[10s] ease-out will-change-transform md:group-hover:scale-105"
                      style={{ 
                        transform: isActive ? 'scale(1)' : 'scale(1.08)' 
                      }}
                      priority={index === 0}
                    />
                    {/* Deep gradient overlay on image for edge contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indian-ink/30 to-transparent" />
                    
                    {/* The Frame Fragment (Corner Accents) */}
                    <div className="hidden md:block">
                       <FrameCorners />
                    </div>
                  </div>
                </div>

                {/* Content Block (The Torn Paper / Text Area) */}
                <SlideContent 
                  slide={slide} 
                  isActive={isActive} 
                  totalSlides={heroSlides.length} 
                />

              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Diagonal Sweep Transition Overlay (Shape 6) */}
      <div 
        ref={swipeOverlayRef}
        className="absolute inset-0 z-[60] pointer-events-none opacity-0"
        style={{ ...shapeStyles.diagonalSweepStart }}
      />

      {/* Custom Desktop Navigation Arrows */}
      <div className="hidden md:flex absolute right-[4%] top-1/2 -translate-y-1/2 flex-col gap-4 z-[50]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A1208]/50 hover:bg-turmeric-gold border border-transparent backdrop-blur-md text-pure-white transition-all duration-300 hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A1208]/50 hover:bg-turmeric-gold border border-transparent backdrop-blur-md text-pure-white transition-all duration-300 hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Custom Dots Pagination */}
      <div className="absolute bottom-[8vh] md:bottom-[10vh] left-0 w-full flex justify-center md:justify-start md:pl-[6%] md:w-[35%] z-[50] gap-3">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideToLoop(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-400 ease-out ${
              activeIndex === i 
                ? "w-6 h-1.5 bg-turmeric-gold rounded-[3px] opacity-100" 
                : "w-1.5 h-1.5 bg-turmeric-gold rounded-full opacity-30 hover:opacity-70"
            }`}
          />
        ))}
      </div>

      {/* Progress Bar Component */}
      <ProgressBar 
        currentSlide={activeIndex} 
        duration={AUTOPLAY_DELAY} 
        isAutoplayDelay={true} 
      />
    </section>
  );
};

export default HeroSlider;
