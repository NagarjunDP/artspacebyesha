import React from "react";
import HeroNavbar from "@/components/hero/HeroNavbar";
import HeroSlider from "@/components/hero/HeroSlider";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Global Components */}
      <CustomCursor />
      <WhatsAppButton />
      <HeroNavbar />

      {/* Main Sections */}
      <HeroSlider />
      <About />
      <Gallery />
      <Process />
      <Testimonials />
      <InstagramFeed />
      <CTASection />
      <Footer />
    </main>
  );
}
