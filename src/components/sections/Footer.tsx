"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle, Heart, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark-accent pt-24 pb-12 px-6 md:px-20 relative overflow-hidden">
      {/* Subtle Butterfly Watermark */}
      <div className="absolute top-20 right-[-5%] opacity-5 pointer-events-none rotate-45 scale-150">
        <svg width="300" height="300" viewBox="0 0 100 100" fill="#C9A96E">
          <path d="M50 50 C20 20, 10 70, 50 60 C90 70, 80 20, 50 50 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-12 text-center">
          <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border border-primary/20 bg-white/10 backdrop-blur-sm p-3 group hover:scale-105 transition-transform duration-500">
            <Image
              src="/logo.jpg"
              alt="Artspace by Eesha"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <h2 className="font-serif text-3xl text-linen mb-2">Artspace by Eesha</h2>
          <p className="font-script text-xl text-primary">Where Art Finds Its Home</p>
        </div>

        {/* Navigation Links */}
        <nav className="mb-16">
          <ul className="flex flex-wrap justify-center gap-8 md:gap-16 text-linen/70 font-bold tracking-[0.2em] text-xs uppercase">
            <li><Link href="#home" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link href="#gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
            <li><Link href="#process" className="hover:text-primary transition-colors">Process</Link></li>
            <li><Link href="https://wa.me/" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-8 mb-20 text-primary">
          <a
            href="https://www.instagram.com/artspace_by_eesha/"
            target="_blank"
            className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-linen transition-all duration-300"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            className="w-14 h-14 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-linen transition-all duration-300 shadow-lg"
          >
            <MessageCircle size={24} />
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-primary/20 mb-12" />

        {/* Bottom Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-warm-taupe text-[10px] uppercase font-bold tracking-[0.3em]">
          <p>© 2025 Artspace by Eesha. All rights reserved.</p>
          
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 group">
              Handcrafted with <Heart size={10} className="fill-primary text-primary group-hover:scale-125 transition-transform" /> in Delhi
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-2 hover:text-primary transition-colors"
          >
            <span className="font-bold">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-primary">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
