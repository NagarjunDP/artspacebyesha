"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, ArrowUpRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Handpainted Resin Art",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200",
    size: "tall",
    description: "Multi-layered pours with absolute depth.",
  },
  {
    id: 2,
    name: "Floral Preserved Frames",
    image: "https://images.unsplash.com/photo-1522673607200-16489a279c18?q=80&w=1200",
    size: "short",
    description: "Botanical memories crystallized.",
  },
  {
    id: 3,
    name: "Custom Portrait Art",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200",
    size: "short",
    description: "Your essence in abstract textures.",
  },
  {
    id: 4,
    name: "Gift Hampers",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=1200",
    size: "tall",
    description: "Curated luxury packaging.",
  },
  {
    id: 5,
    name: "Wall Installations",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1200",
    size: "tall",
    description: "Large scale statement pieces.",
  },
  {
    id: 6,
    name: "Commissioned Art",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=1200",
    size: "short",
    description: "Bespoke creations for your space.",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-white px-0 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="px-6 md:px-0 mb-16 md:mb-32 flex flex-col items-start border-l-4 border-primary pl-6">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-4"
          >
            Curated Collections
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-black text-5xl md:text-7xl lg:text-8xl text-dark-accent tracking-tighter uppercase leading-[0.9]"
          >
            OUR <span className="text-transparent border-text" style={{ WebkitTextStroke: "2px #1A1A1A" }}>GALLERY</span>
          </motion.h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-8 lg:gap-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`group flex flex-col mb-16 md:mb-0 ${
                cat.size === "tall" ? "md:row-span-2" : ""
              }`}
            >
              {/* Image Container (Edge to edge on mobile, sharp on desktop) */}
              <div
                className={`relative overflow-hidden bg-black ${
                  cat.size === "tall" ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Overlay hover effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 scale-90 group-hover:scale-100">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center text-white">
                    <Plus size={32} strokeWidth={1} />
                  </div>
                </div>
              </div>

              {/* Text underneath image */}
              <div className="mt-6 px-6 md:px-0 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-black text-2xl md:text-3xl text-dark-accent uppercase tracking-tight">
                    {cat.name}
                  </h3>
                  <span className="text-primary font-bold">0{index + 1}</span>
                </div>
                <p className="text-dark-accent/60 font-medium text-sm tracking-widest uppercase">
                  {cat.description}
                </p>
                <div className="h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-700 ease-in-out mt-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 md:mt-40 text-center px-6 md:px-0"
         >
           <a
             href="https://wa.me/"
             target="_blank"
             className="inline-flex items-center justify-center gap-4 bg-dark-accent text-white px-8 py-6 w-full md:w-auto font-black tracking-[0.3em] uppercase hover:bg-primary transition-all duration-500 group"
           >
             BROWSE FULL CATALOGUE
             <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>
         </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
