"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";

const Butterfly = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 20, rotate: 10 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2], 
      x: [0, 15, 0], 
      y: [0, -25, 0], 
      rotate: [-5, 5, -5] 
    }}
    transition={{ 
      duration: 8, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
  >
    <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" className="text-primary/40">
      <path d="M50 50 C20 20, 10 70, 50 60 C90 70, 80 20, 50 50 Z" />
      <path d="M50 50 C30 10, 0 40, 50 45 C100 40, 70 10, 50 50 Z" />
    </svg>
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-linen flex flex-col md:flex-row">
      {/* Background Butterflies */}
      <Butterfly className="absolute top-[20%] right-[10%] z-10" delay={0} />
      <Butterfly className="absolute bottom-[20%] left-[5%] z-10 scale-75" delay={2} />
      <Butterfly className="absolute top-[40%] right-[40%] z-10 scale-50" delay={4} />

      {/* Left Content Panel */}
      <div className="relative w-full md:w-1/2 h-full flex items-center px-8 md:px-20 z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Decorative Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary uppercase tracking-[0.3em] text-xs font-semibold">
              Handcrafted with Love
            </span>
          </motion.div>

          {/* Logo in Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 relative"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/20 bg-white/50 backdrop-blur-sm p-2 shadow-premium hover:scale-105 transition-transform cursor-pointer">
              <Image
                src="/logo.jpg"
                alt="Artspace by Eesha"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-dark-accent mb-4 leading-tight">
            Artspace by <br />
            <span className="text-primary relative italic">
              Eesha
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-primary/20"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-script text-2xl md:text-3xl text-primary mb-8 ml-1">
            Where Art Finds Its Home
          </p>

          <p className="text-warm-taupe text-lg max-w-sm mb-10 leading-relaxed font-jost">
            Unique, handcrafted resin art and floral preservations that capture your most precious moments forever.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://wa.me/"
              target="_blank"
              className="bg-primary text-linen px-8 py-4 rounded-full flex items-center gap-3 font-medium tracking-widest uppercase hover:bg-dark-accent hover:scale-105 transition-all shadow-premium group"
            >
              <MessageCircle size={20} />
              Book on WhatsApp
              <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="#gallery"
              className="border border-primary text-primary px-8 py-4 rounded-full font-medium tracking-widest uppercase hover:bg-primary/5 hover:scale-105 transition-all"
            >
              Explore Gallery
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right Image Panel */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-full overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-10 bg-dark-accent/10 md:bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Dynamic Image Grid/Ken Burns */}
        <div className="absolute inset-0 flex">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2000"
              alt="Handcrafted Resin Art"
              fill
              className="object-cover ken-burns"
              priority
            />
          </motion.div>
        </div>

        {/* Decorative Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-linen md:from-transparent to-transparent z-20" />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 md:left-[25%] -translate-x-1/2 flex flex-col items-center gap-2 text-primary/60 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="uppercase tracking-[0.3em] text-[10px] font-semibold">Scroll to Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

// Internal Link component for clean usage
const Link = ({ href, target, className, children }: any) => (
  <a href={href} target={target} className={className}>
    {children}
  </a>
);

export default Hero;
