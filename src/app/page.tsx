import React from "react";
import HeroSection from "../components/home/HeroSection";
import TechStackSection from "../components/home/TechStackSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import MethodologySection from "../components/home/MethodologySection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CtaSection from "../components/home/CtaSection";
import BrandAnchorSection from "../components/home/BrandAnchorSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <TestimonialsSection />
      <CtaSection />
      <BrandAnchorSection />
    </>
  );
}