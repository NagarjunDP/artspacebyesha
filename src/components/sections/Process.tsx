"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, MessageSquare, Palette, Truck, MessageCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse & Pick",
    description: "Explore our curated collections or share your unique vision with us for a custom piece.",
    icon: Search,
  },
  {
    id: 2,
    title: "WhatsApp Us",
    description: "Connect with Eesha directly to discuss details, pricing, and specific requirements.",
    icon: MessageSquare,
  },
  {
    id: 3,
    title: "We Create",
    description: "Each piece is meticulously handcrafted with love and high-quality materials.",
    icon: Palette,
  },
  {
    id: 4,
    title: "Delivered to You",
    description: "Carefully packaged with a personal touch and delivered to your doorstep.",
    icon: Truck,
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-dark-accent px-6 md:px-20 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-linen mb-4"
          >
            How It Works
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-1 w-24 bg-primary"
          />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-px border-t border-dashed border-primary/30" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Icon / Number Container */}
              <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full bg-dark-accent border border-primary/40 flex items-center justify-center text-primary relative z-10 group-hover:bg-primary group-hover:text-dark-accent transition-colors duration-500 shadow-xl overflow-hidden">
                  <step.icon size={36} />
                  
                  {/* Step Number Overlay */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-linen text-dark-accent font-bold text-sm flex items-center justify-center shadow-lg">
                    {step.id}
                  </div>
                </div>
                
                {/* Decorative Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/10 group-hover:scale-125 group-hover:opacity-0 transition-transform duration-700 pointer-events-none" />
              </div>

              {/* Text Content */}
              <h3 className="font-serif text-2xl text-linen mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="font-jost text-linen/70 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Floating-style CTA in Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex justify-center"
        >
          <a
            href="https://wa.me/"
            target="_blank"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-full font-bold tracking-widest uppercase transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 group"
          >
            <MessageCircle size={24} />
            Book Now on WhatsApp
            <div className="absolute -inset-1 rounded-full border-2 border-primary animate-ping opacity-0 group-hover:opacity-100" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
