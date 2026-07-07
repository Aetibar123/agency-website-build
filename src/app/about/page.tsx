import React from "react";
import AboutHeroSection from "../../components/about/AboutHeroSection";
import MissionSection from "../../components/about/MissionSection";
import TeamSection from "../../components/about/TeamSection";
import CtaSection from "../../components/home/CtaSection";

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <MissionSection />
      <TeamSection />
      <CtaSection />
    </>
  );
}
