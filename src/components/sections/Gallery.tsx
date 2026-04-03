"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Handpainted Resin Art",
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800",
    size: "tall",
  },
  {
    id: 2,
    name: "Floral Preserved Frames",
    image: "https://images.unsplash.com/photo-1522673607200-16489a279c18?q=80&w=800",
    size: "short",
  },
  {
    id: 3,
    name: "Custom Portrait Art",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800",
    size: "short",
  },
  {
    id: 4,
    name: "Gift Hampers & Packaging",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800",
    size: "tall",
  },
  {
    id: 5,
    name: "Decorative Wall Pieces",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=800",
    size: "tall",
  },
  {
    id: 6,
    name: "Commissioned Art",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800",
    size: "short",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-off-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-3xl text-primary mb-4"
          >
            Crafted with intention
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-dark-accent mb-6"
          >
            Our Collections
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="h-px w-24 bg-primary mx-auto"
          />
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl shadow-premium ${
                cat.size === "tall" ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8">
                <div className="w-12 h-12 rounded-full border border-linen/50 flex items-center justify-center text-linen mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <Plus size={24} />
                </div>
                <h3 className="font-serif text-2xl text-linen text-center mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                  {cat.name}
                </h3>
                <p className="text-linen/80 text-xs tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-300">
                  Explore Collection
                </p>
              </div>

              {/* Bottom Label (Visible always on mobile, or just hover desktop) */}
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-dark-accent/80 via-dark-accent/40 to-transparent md:hidden">
                <h3 className="font-serif text-xl text-linen">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            className="inline-flex items-center gap-2 border border-primary text-primary px-10 py-4 rounded-full font-medium tracking-widest uppercase hover:bg-primary hover:text-linen transition-all duration-300 group"
          >
            Custom Commission Request
            <ArrowRight size={18} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
