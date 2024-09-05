'use client'
import React, { useRef } from "react";
import Image from "next/image";
import SlideUp from "./SlideUp";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const experiences = [
  {
    role: "Support Engineer",
    name: "ZyBooks",
    date: "July 2022 - Present",
    place: "Los Angeles, CA",
    description:
      "Implemented automated tools and streamlined triage processes, reducing average ticket resolution time by 12% \n" +
      "• Leveraged expertise in HTML, Java, and Python to swiftly address and fix bugs within zyBooks content, " +
        "improving content accuracy\n" +
      "Collaborated with team members to solve complex bugs and user tickets, created macros in Zendesk " +
        "responses to user needs, resulting in a 10% increase in first-time ticket resolutions. \n" +
      "Technical Skills: HTML, JAVA, Python, C/C++, AWS, Zendesk",
    image: "/zybooks.png",
  },
  {
    role: "QA Intern",
    name: "5Head Games - Enders Gate",
    date: "Jan 2024 - May 2024",
    place: "Los Angeles, CA",
    description:
      "QA Testing - Conducted black box stress testing on the Enders Gate code base, identifying over 150 reproducible cases " +
      "and submitting detailed reports to the dev team, resulting in the resolution of 18% of critical bugs within two weeks. \n " +
      "Marks Automation Script - Developed a Python script that automated tasks from Baselight data, replacing four manual positions, " +
        "reducing processing time by 20%, logging data for analysis, and exporting CSV" +
      "to XLS with previews to Frame. IO.\n" +
      "QA Script - Created a Python script that automated the population and" +
      "reporting of a QA database, mirroring global testing workflows, reducing" +
      "report generation time by 13%, and generating detailed operational" +
      "reports, including listing all blockers, repeatable, date, and specific user\n" +
      "Technical Skills: Python, MongoDB, ffmpeg, Frame.Io",
    image: "/QA.png",
  },
  {
    role: "Full Stack Developer - Intern",
    name: "MSquareTechnologies.Inc",
    date: "July 2023 - September 2023",
    place: "Philadelphia, PA",
    description:
      "Integrated the OpenAI API into custom software, serving over 1000 " +
      "college students, by utilizing Python, React-JavaScript/ TypeScript," +
      "and NodeJS.\n" +
      "Developed and implemented a robust query database and data processing" +
      "pipeline using MongoDB for seamless response generation by the AI" +
      "language model.\n" +
      "Led end-to-end development, UI/UX design, and database management," +
      "ensuring a user-friendly and secure interface.\n" +
      "Technical Skills: Python, React-JavaScript/TypeScript, NodeJS, MongoDB",
    image: "/M.png",
  },
];

interface ExperiencesSectionProps {
  className?: string;
}

const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ className }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust scroll amount as needed
    }
  };

  return (
    <section id="experiences" className={className}>
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-100 h-1 mx-auto my-4 bg-yellow-600 border-0 rounded" />
      </h1>
      <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto scrollbar-hide my-12 pb-48"
      >
        {experiences.map((experience, idx) => (
          <div key={idx} className="m-4 mb-1">
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col">
                <div className="w-64 h-64 md:w-72 md:h-72 mb-1">
                  <Image
                    src={experience.image}
                    alt=""
                    width={400}
                    height={400}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </div>
                <div className="mt-0.5"> {/* Adjusted margin-top */}
                  <h1 className="text-2xl font-bold mb-2">{experience.role}</h1> {/* Adjusted margin-bottom */}
                  <h2 className="text-2xl font-bold mb-2">{experience.name}</h2>
                  <h3 className="text-2xl mb-2">{experience.date}</h3>
                  <h4 className="text-2xl mb-2">{experience.place}</h4>
                    <ul className="text-base leading-6 mb-4 list-disc pl-6">
                      {experience.description.split('\n').map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperiencesSection;

