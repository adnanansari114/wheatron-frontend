import React from "react";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";
import FeaturesSection from "../components/FeaturesSection";
import CTASection from "../components/CTASection";
import './Home.css';

export default function Home() {
  return (
    <>

      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
    </>
  );
}