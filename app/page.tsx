import React from "react";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Particles from "@/components/particles";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative mx-auto w-full overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={500}
      />
      <HeroSection className="hero-section mx-auto px-4 sm:max-w-4xl md:max-w-6xl lg:max-w-7xl" />
      <AboutSection className="about-section relative mx-auto px-3 sm:px-4 md:px-5 lg:px-56" />
      <ExperiencesSection className="experiences-section relative mx-auto px-3 sm:px-4 md:px-5 lg:px-56" />
      <ProjectsSection className="projects-section relative mx-auto px-3 sm:px-4 md:px-5 lg:px-56" />
      <ContactSection className="contact-section relative mx-auto px-4 sm:max-w-4xl md:max-w-6xl lg:max-w-7xl" />
    </main>
  );
}

//mx-auto ax-w-3xl px-4 sm:px-6 md:max-w-5xl

//mx-auto px-4 sm:max-w-4xl md:max-w-6xl lg:max-w-7xl
//about-section relative mx-auto px-2 sm:px-3 md:px-4 lg:px-5"