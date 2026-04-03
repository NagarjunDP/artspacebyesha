"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Heart } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 md:py-32 bg-linen relative overflow-hidden px-6 md:px-20">
      {/* Decorative Watercolor/Ink Wash Style Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-soft to-linen opacity-40" />
      
      {/* Butterfly Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none scale-[3]">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="#C9A96E">
          <path d="M50 50 C20 20, 10 70, 50 60 C90 70, 80 20, 50 50 Z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full font-bold tracking-widest text-xs uppercase mb-8">
            <Heart size={14} className="fill-primary" />
            Let's Create Something Beautiful
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-5xl md:text-8xl text-dark-accent mb-6 leading-tight"
        >
          Ready to <span className="text-primary italic">bring art</span> into your space?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-script text-2xl md:text-4xl text-primary mb-12"
        >
          Custom orders are now open for limited slots.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            className="w-full md:w-auto bg-primary text-linen px-12 py-6 rounded-full flex items-center justify-center gap-3 font-bold tracking-widest uppercase hover:bg-dark-accent hover:scale-105 transition-all shadow-premium group"
          >
            <MessageCircle size={24} />
            Book on WhatsApp
            <ArrowRight size={20} className="translate-x-0 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="#gallery"
            className="w-full md:w-auto border border-primary text-primary px-12 py-6 rounded-full font-bold tracking-widest uppercase hover:bg-primary/5 hover:scale-105 transition-all text-center"
          >
            View Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
