'use client'
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";


interface HeroSectionProps {
  className?: string;
}


const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [activeSection, setActiveSection] = useState("home");
  const sections = ["home", "about", "experiences", "projects","contact"];
  const scrollIndexRef = useRef(0);

  //const handleSetActive = (section: string) => {
  //  setActiveSection(section);
  //};

  const handleResumeView = () => {
    const link = document.createElement('a');
    link.href = '/jai_korisal_resume.pdf';
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToNextSection = () => {
    const nextIndex = scrollIndexRef.current === sections.length - 1 ? 0 : scrollIndexRef.current + 1;
    setActiveSection(sections[nextIndex]);
    const nextSectionElement = document.getElementById(sections[nextIndex]);
    nextSectionElement?.scrollIntoView({ behavior: 'smooth' });
    scrollIndexRef.current = nextIndex;
  };

  return (
    <section id="home" className={className}>
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image src="/headshot.png" priority  alt="" width={325} height={325} className="rounded-full shadow-2xl" style={{ width: 'auto', height: 'auto' }} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Jay Korisal!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-yellow-600">Senior{" "}</span>
            at California State University of Northridge, based in Los Angeles, CA.
          </p>
          <div className="flex flex-row space-x-4 mt-4">
            <button className="hover:-translate-y-1 transition-transformtext-neutral-100 font-semibold px-6 py-3 bg-yellow-600 rounded shadow hover:bg-teal-700" onClick={handleResumeView}>
              Download Resume
            </button>
            <a href="https://www.linkedin.com/in/jainivash-korisal/" rel="noreferrer" target="_blank" className="hover:-translate-y-1 transition-transformtext-black hover:text-gray-600 flex items-center">
              <AiOutlineLinkedin size={50}/>
            </a>
            <a href="https://github.com/JaiKorisal" rel="noreferrer" target="_blank" className="hover:-translate-y-1 transition-transformtext-black hover:text-gray-600 flex items-center">
              <AiOutlineGithub size={50}/>
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-50 flex flex-row items-center text-center justify-center cursor-pointer">
        { (activeSection !== "contact") && (
            <HiArrowDown size={35} className="animate-bounce" onClick={scrollToNextSection} />
        )}
        {activeSection === "contact" && (
          <ScrollLink to="home" spy={true} smooth={true} offset={-100} duration={500}>
            <HiArrowUp size={35} className="animate-bounce" onClick={scrollToNextSection} />
          </ScrollLink>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

