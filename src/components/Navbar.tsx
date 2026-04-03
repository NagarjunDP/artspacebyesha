"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
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
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-md py-3 md:py-4 shadow-md"
          : "bg-dark-accent/60 backdrop-blur-sm py-4 md:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-primary/20 bg-white p-1">
            <Image
              src="/logo.jpg"
              alt="Artspace by Eesha Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <span
            className={cn(
              "font-bold text-base md:text-lg tracking-wide group-hover:text-primary transition-colors",
              isScrolled ? "text-dark-accent" : "text-white"
            )}
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ARTSPACE BY EESHA
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors relative group",
                isScrolled ? "text-dark-accent" : "text-white"
              )}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://wa.me/"
            target="_blank"
            className="bg-primary text-white text-xs tracking-[0.2em] uppercase px-6 py-3 hover:bg-white hover:text-dark-accent border border-primary transition-all shadow-lg active:scale-95 flex items-center gap-2 font-bold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <MessageCircle size={16} />
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden transition-colors",
            isScrolled ? "text-dark-accent" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="font-bold text-2xl tracking-[0.1em] uppercase hover:text-primary transition-colors text-dark-accent"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link
                href="https://wa.me/"
                target="_blank"
                className="mt-4 bg-primary text-white px-10 py-5 flex items-center gap-3 font-bold tracking-[0.2em] uppercase active:scale-95 transition-transform"
                style={{ fontFamily: "var(--font-montserrat)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={20} />
                BOOK NOW
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
