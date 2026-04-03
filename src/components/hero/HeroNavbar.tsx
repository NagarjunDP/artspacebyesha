"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar"; // Reuse existing Navbar

const HeroNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-400 ease-in-out ${
        isScrolled 
          ? "bg-[#FDFAF5E8] backdrop-blur-[12px] shadow-[0_4px_30px_rgba(0,0,0,0.05)] text-indian-ink" 
          : "bg-transparent text-pure-white"
      }`}
    >
      {/* We reuse the existing navbar but wrap it in our scroll-aware container */}
      <Navbar />
    </div>
  );
};

export default HeroNavbar;
