"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000",
    title: "RESIN FINE ART",
    subtitle: "Artspace by Eesha",
    description: "Where luxury meets artisanal craftsmanship in every pour.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000",
    title: "ETERNAL BLOOMS",
    subtitle: "Floral Preservation",
    description: "Preserving your most precious moments forever in crystal clear art.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000",
    title: "BESPOKE CRAFT",
    subtitle: "Custom Commissions",
    description: "Tailor-made abstract luxury mapped perfectly to your vision.",
  },
];

const PremiumSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className="relative w-full h-[100dvh] overflow-hidden bg-dark-accent"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* Main Background Image */}
          <div className="absolute inset-0 ken-burns origin-center">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            {/* Elegant Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          </div>

          {/* Smooth Art-Inspired Geometric Overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 hidden md:block">
            {/* Massive Smooth Floating Circle */}
            <motion.div
              initial={{ x: "-20%", y: "10%", scale: 0.8, opacity: 0 }}
              animate={{ x: "0%", y: "0%", scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-primary/20 mix-blend-color-dodge blur-2xl"
            />
            <motion.div
              initial={{ x: "20%", y: "-10%", scale: 0.8, opacity: 0 }}
              animate={{ x: "0%", y: "0%", scale: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
              className="absolute -top-[10%] -right-[5%] w-[40vw] h-[40vw] rounded-full bg-accent-gold/40 mix-blend-overlay"
            />
            
            {/* Elegant Flowing Pill Shape */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "-10%", opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute bottom-[-10%] right-[15%] w-[15vw] h-[70vh] rounded-[100px] bg-white/10 backdrop-blur-md"
            />
            
            {/* Very large solid circle accent */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              className="absolute bottom-[20%] left-[8%] w-[20vw] h-[20vw] rounded-full bg-primary mix-blend-multiply"
            />
          </div>

          {/* Typography & Content */}
          <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-6 pb-24 md:pb-0 md:px-[12%] z-20">
            <div className="max-w-4xl relative">
              {/* Elegant Subtitle */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex items-center gap-4 mb-4 md:mb-6"
              >
                <div className="w-8 md:w-16 h-[2px] rounded-full bg-primary" />
                <span className="text-primary font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              {/* Bold Editorial Title */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-black text-5xl sm:text-6xl md:text-[6rem] lg:text-[8rem] text-white leading-[0.9] tracking-tighter mb-6 md:mb-10 drop-shadow-2xl"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Content Row */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 pl-1 md:pl-2">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="text-white/80 font-medium text-xs md:text-lg max-w-sm uppercase tracking-widest leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.a
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  href="https://wa.me/"
                  target="_blank"
                  className="hidden md:flex group relative items-center justify-center w-24 h-24 bg-primary rounded-full overflow-hidden shrink-0 hover:scale-105 transition-transform duration-500"
                >
                  <ArrowUpRight strokeWidth={2} className="text-dark-accent relative z-10 w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                </motion.a>
              </div>

               {/* Mobile CTA */}
               <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  href="https://wa.me/"
                  target="_blank"
                  className="md:hidden mt-8 flex items-center justify-between w-full border border-white/20 px-6 py-4 rounded-full text-white font-bold tracking-[0.2em] text-xs uppercase"
                >
                  BOOK NOW
                  <ArrowUpRight size={16} className="text-primary" />
                </motion.a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Elegant Slider Controls (Bottom Right) */}
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex items-end gap-6 md:gap-10 z-30 mix-blend-difference text-white">
        
        {/* Navigation Arrows */}
        <div className="flex gap-1 md:gap-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Minimalist Slide Counter */}
        <div className="font-bold tracking-[0.25em] flex items-baseline pb-1 md:pb-2">
          <span className="text-2xl md:text-4xl text-white">{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-white/30 text-sm md:text-lg mx-2">/</span>
          <span className="text-white/50 text-sm md:text-lg">{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumSlider;
