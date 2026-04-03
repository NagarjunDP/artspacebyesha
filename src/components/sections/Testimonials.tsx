"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sneha Nair",
    quote: "Eesha created the most beautiful resin piece I've ever owned. The way she preserved my wedding bouquet is magical. Truly a masterpiece!",
    stars: 5,
  },
  {
    id: 2,
    name: "Aditya Sharma",
    quote: "The packaging itself felt like unwrapping a gift. You can feel the love and attention to detail in every layer. Perfect for gifting!",
    stars: 5,
  },
  {
    id: 3,
    name: "Priya Varma",
    quote: "Truly one of a kind service. I requested a custom portrait for my anniversary, and it exceeded all my expectations. Highly recommended!",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-linen px-6 md:px-20 overflow-hidden relative">
      {/* Decorative Floral Icons */}
      <div className="absolute top-10 left-[5%] opacity-10 rotate-12 -z-0">
         <Quote size={120} className="text-primary" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-script text-3xl text-primary mb-4"
          >
            What Our Clients Say
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-dark-accent mb-6"
          >
            Heartfelt Words
          </motion.h2>
          <div className="h-px w-24 bg-primary mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/50 backdrop-blur-sm border border-primary/10 p-10 rounded-3xl shadow-premium relative group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(test.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="font-serif italic text-xl text-dark-accent leading-relaxed mb-8">
                "{test.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-soft flex items-center justify-center text-primary">
                  <Heart size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-dark-accent uppercase tracking-widest text-sm">
                    {test.name}
                  </h4>
                  <span className="text-xs text-warm-taupe tracking-wider">Happy Client</span>
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-6 right-8 text-primary/10">
                <Quote size={40} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
