"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 mix-blend-difference text-white",
        isScrolled
          ? "py-4 md:py-6 bg-black/10 backdrop-blur-sm"
          : "py-6 md:py-8 bg-transparent"
      )}
    >
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="relative w-14 h-14 md:w-16 md:h-16 overflow-hidden rounded-full border-2 border-primary group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo.jpg"
              alt="Artspace by Eesha Logo"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <span
            className="font-black text-sm md:text-xl tracking-[0.2em] uppercase hidden sm:block"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ARTSPACE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12 relative z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold text-xs tracking-[0.3em] uppercase hover:text-primary transition-colors relative group"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://wa.me/"
            target="_blank"
            className="group flex items-center gap-2 font-bold text-xs tracking-[0.3em] uppercase hover:text-primary transition-all"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            BOOK NOW
            <span className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all">
              <ArrowUpRight size={14} />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 w-12 h-12 flex items-center justify-center border border-white/30 rounded-full hover:bg-white hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Extreme Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-dark-accent flex flex-col items-center justify-center gap-8 lg:hidden !text-white !mix-blend-normal"
          >
            {/* Geometric background element in mobile menu */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
               <div className="absolute top-[-10%] right-[-20%] w-[300px] h-[300px] border-[20px] border-primary rotate-45" />
            </div>

            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={link.href}
                  className="font-black text-4xl sm:text-5xl tracking-[0.2em] uppercase hover:text-primary transition-colors hover:pl-4 duration-300"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.1 + 0.3 }}
              className="mt-8"
            >
              <Link
                href="https://wa.me/"
                target="_blank"
                className="bg-primary text-black px-12 py-6 flex items-center gap-4 font-black tracking-[0.3em] uppercase hover:bg-white transition-colors"
                style={{ fontFamily: "var(--font-montserrat)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK NOW
                <ArrowUpRight size={24} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
