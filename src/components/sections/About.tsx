"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Flower, Sparkles, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-linen px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Column - Image Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full md:w-1/2"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-primary/20 shadow-premium group">
            <Image
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200"
              alt="Artisan at work"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-accent/40 to-transparent" />
            
            {/* Quote Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="font-script text-2xl mb-2">"Handcrafted with soul"</p>
              <div className="h-0.5 w-12 bg-primary" />
            </div>
          </div>
          
          {/* Floating Badge */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 hidden lg:flex items-center justify-center p-2 rounded-full border-2 border-dashed border-primary/30 z-10"
          >
            <div className="w-full h-full rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Flower className="text-linen" size={40} />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Brand Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full md:w-1/2"
        >
          {/* Label */}
          <div className="mb-6">
            <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold">— OUR STORY —</span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-dark-accent mb-8 leading-tight">
            Art that speaks <br />
            <span className="text-primary italic">before words do</span>
          </h2>

          <div className="space-y-6 text-warm-taupe text-lg leading-relaxed font-jost">
            <p>
              Artspace by Eesha began as a whisper — a quiet desire to turn fleeting moments into permanent treasures. What started as a personal passion for resin art and floral preservation has bloomed into a sanctuary where memories find their home.
            </p>
            <p>
              Every piece crafted in our boutique is treated as a one-of-a-kind masterpiece. We don’t just use resin and petals; we use intention, patience, and a deep respect for the stories our clients bring to us. Whether it's preserving a wedding bouquet or creating a bespoke resin frame, each item is handled with the utmost love.
            </p>
            <p>
              Our philosophy is simple: Luxury shouldn't be cold. It should be warm, artisanal, and deeply personal. Welcome to our world, where every stroke and ogni flower tells a story.
            </p>
          </div>

          {/* Icon Stats */}
          <div className="mt-12 grid grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-primary mb-2 shadow-sm">
                <Heart size={20} />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Handmade</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-primary mb-2 shadow-sm">
                <Flower size={20} />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Premium</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-primary mb-2 shadow-sm">
                <Sparkles size={20} />
              </div>
              <span className="text-xs uppercase tracking-widest font-bold">Unique</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Butterfly */}
      <motion.div
        className="absolute top-20 right-[-10%] opacity-20 pointer-events-none"
        animate={{ y: [0, 40, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <svg width="200" height="200" viewBox="0 0 100 100" fill="#C9A96E">
          <path d="M50 50 C20 20, 10 70, 50 60 C90 70, 80 20, 50 50 Z" />
        </svg>
      </motion.div>
    </section>
  );
};

export default About;
