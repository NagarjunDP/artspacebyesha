"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    title: "ARTSPACE BY EESHA",
    subtitle: "Handcrafted Resin Art",
    description: "Where luxury meets artisanal craftsmanship",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000",
    title: "FLORAL PRESERVATION",
    subtitle: "Timeless Memories",
    description: "Preserve your precious moments forever",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2000",
    title: "CUSTOM COMMISSIONS",
    subtitle: "Your Vision, Our Craft",
    description: "Bespoke artworks tailored for you",
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
    }, 5000);

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-dark-accent"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-dark-accent/40" />
          </div>

          {/* Geometric Shapes Overlay */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="absolute top-[-10%] right-[-15%] md:right-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full border-[20px] md:border-[40px] border-primary"
            />

            {/* Triangle */}
            <motion.div
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.1 }}
              transition={{ duration: 1.5, delay: 0.4 }}
              className="absolute bottom-[10%] left-[-15%] md:left-[-5%] w-0 h-0 border-l-[150px] md:border-l-[300px] border-l-transparent border-r-[150px] md:border-r-[300px] border-r-transparent border-b-[260px] md:border-b-[520px] border-b-primary"
            />

            {/* Rectangle */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 0.12 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute top-[20%] left-[5%] w-[100px] md:w-[200px] h-[200px] md:h-[400px] bg-linen rotate-12"
            />

            {/* Hexagon using clip-path */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 0.08 }}
              transition={{ duration: 1.3, delay: 0.8 }}
              className="absolute bottom-[20%] right-[15%] w-[125px] md:w-[250px] h-[140px] md:h-[280px] bg-primary"
              style={{
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />

            {/* Small Circles */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute top-[40%] right-[10%] w-[50px] md:w-[100px] h-[50px] md:h-[100px] rounded-full bg-linen/20"
            />

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-[30%] left-[20%] w-[40px] md:w-[80px] h-[40px] md:h-[80px] rounded-full border-[8px] md:border-[15px] border-linen/30"
            />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="text-center px-6 md:px-12 max-w-5xl">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-4 md:mb-6"
              >
                <span className="text-primary uppercase tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm font-bold">
                  {slides[currentSlide].subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-4 md:mb-6 tracking-tight leading-none px-4"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="font-script text-lg sm:text-xl md:text-3xl lg:text-4xl text-linen/90 mb-8 md:mb-12 px-4"
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center px-4"
              >
                <a
                  href="#gallery"
                  className="bg-primary text-white px-8 md:px-10 py-4 md:py-5 rounded-none font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-linen hover:text-dark-accent transition-all duration-300 text-xs md:text-sm text-center active:scale-95"
                >
                  EXPLORE GALLERY
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  className="border-2 border-white text-white px-8 md:px-10 py-4 md:py-5 rounded-none font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase hover:bg-white hover:text-dark-accent transition-all duration-300 text-xs md:text-sm text-center active:scale-95"
                >
                  BOOK NOW
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-primary transition-all duration-300 group active:scale-90"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-primary transition-all duration-300 group active:scale-90"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={28} />
      </button>

      {/* Progress Bullets */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative group"
          >
            <div
              className={`w-12 md:w-16 h-1 transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primary scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
            />
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 text-white font-bold tracking-[0.2em] text-sm hidden md:block">
        <span className="text-2xl">{String(currentSlide + 1).padStart(2, "0")}</span>
        <span className="text-white/50 mx-2">/</span>
        <span className="text-white/50">{String(slides.length).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default PremiumSlider;
