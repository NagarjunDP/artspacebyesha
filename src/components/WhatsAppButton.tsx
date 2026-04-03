"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.div
      className="fixed bottom-8 right-8 z-[100] group"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ bounce: 0.5, type: "spring", delay: 1 }}
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        <span className="font-serif text-sm tracking-wide text-dark-accent">
          Chat with us!
        </span>
      </div>

      {/* Pulse Rings */}
      <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
      <div className="absolute inset-0 rounded-full bg-primary/20 animate-[ping_2s_infinite]" />

      {/* Main Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 group"
      >
        <MessageCircle size={32} />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
