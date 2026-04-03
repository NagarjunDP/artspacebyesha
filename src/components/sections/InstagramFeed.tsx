"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const instagramPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600" },
  { id: 2, image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600" },
  { id: 3, image: "https://images.unsplash.com/photo-1522673607200-16489a279c18?q=80&w=600" },
  { id: 4, image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600" },
  { id: 5, image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=600" },
  { id: 6, image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=600" },
];

const InstagramFeed = () => {
  return (
    <section id="instagram" className="py-24 md:py-32 bg-off-white px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl text-dark-accent mb-4"
            >
              Follow Our <span className="text-primary italic">Journey</span>
            </motion.h2>
            <motion.a
              href="https://www.instagram.com/artspace_by_eesha/"
              target="_blank"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-primary font-bold tracking-[0.2em] flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Instagram size={20} />
              @artspace_by_eesha
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="https://www.instagram.com/artspace_by_eesha/"
              target="_blank"
              className="border-b border-primary text-primary px-4 py-2 font-medium tracking-widest uppercase hover:text-white hover:bg-primary transition-all duration-300"
            >
              Join Our Community
            </a>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square group overflow-hidden bg-linen rounded-xl"
            >
              <Image
                src={post.image}
                alt="Instagram Post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-dark-accent/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-linen">
                <div className="flex items-center gap-1">
                  <Heart size={18} fill="currentColor" />
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={18} fill="currentColor" />
                </div>
              </div>

              {/* Instagram Icon Center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100 transform active:scale-90">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                  <Instagram size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
