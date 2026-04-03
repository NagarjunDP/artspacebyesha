"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column - Typography & Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          {/* Label */}
          <div className="mb-6 border-l-4 border-primary pl-4">
            <span className="text-primary font-bold tracking-[0.5em] uppercase text-xs">
              The Philosophy
            </span>
          </div>

          <h2 className="font-black text-5xl md:text-7xl lg:text-[5.5rem] tracking-tighter text-dark-accent mb-8 leading-[0.9] uppercase">
            Art that <span className="text-transparent border-text" style={{ WebkitTextStroke: "2px #1A1A1A" }}>Speaks</span>
          </h2>

          <div className="space-y-6 text-dark-accent/80 font-medium text-sm md:text-base uppercase tracking-widest leading-loose max-w-xl">
            <p>
              Artspace by Eesha began as a quiet ambition — the pursuit of turning fleeting moments into permanent architectural treasures. We bridge the gap between luxury and artisanal heritage.
            </p>
            <p>
              Every piece in our collection is precision-crafted. We utilize advanced resin techniques and botanical preservation to create timeless investments for your space.
            </p>
          </div>

          {/* Stats / Pillars */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-dark-accent/10 pt-12">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-primary">
                <CheckCircle2 size={24} />
                <span className="font-bold tracking-widest uppercase text-sm">Bespoke</span>
              </div>
              <p className="text-xs text-dark-accent/60 tracking-wider uppercase pl-9">Tailored strictly to your vision.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-primary">
                <CheckCircle2 size={24} />
                <span className="font-bold tracking-widest uppercase text-sm">Premium</span>
              </div>
              <p className="text-xs text-dark-accent/60 tracking-wider uppercase pl-9">Gallery-grade materials only.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Image Composition */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full lg:w-1/2"
        >
          <div className="relative w-full aspect-[4/5] bg-dark-accent overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200"
              alt="Artisan workspace"
              fill
              className="object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90"
            />
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Overlay Text */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <p className="font-black text-2xl md:text-4xl uppercase tracking-tighter mb-4">Precision <br/>& Soul.</p>
              <div className="h-[2px] w-12 bg-primary" />
            </div>

            {/* Geometric Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary mix-blend-multiply transition-transform duration-1000 group-hover:scale-150 origin-top-right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
