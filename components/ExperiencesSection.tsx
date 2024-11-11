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
      " Implemented automated tools, improved triage processes, leveraging AWS for image processing to enhance content delivery efficiency and reduce average ticket resolution time by 24%.\n" +
      "Leveraged expertise in HTML, Java, and Python to swiftly address and fix bugs within zyBooks content, " +
        "using SQL Mode Database queries to analyze user-submitted reports, identify recurring issues, and enhance bug resolution effectiveness, improving content accuracy.\n" +
      "Collaborated with team members to solve complex bugs and user tickets, created macros in Zendesk " +
        "responses to user needs, resulting in a 15% increase in first-time ticket resolutions. \n" +
      "Technical Skills: HTML, JAVA, Python, C/C++, AWS, Zendesk",
    image: "/zybooks.png",
  },
  {
    role: "QA Intern",
    name: "5Head Games - Enders Gate",
    date: "Jan 2024 - May 2024",
    place: "Los Angeles, CA",
    description:
      "Conducted black box stress testing on the Enders Gate code base, identifying over 150 reproducible cases and" +
        "submitting detailed reports to the dev team, resolving 36% of critical bugs. \n" +
      "Automated data processing and analysis by developing a Python script to streamline Baselight data tasks," +
        "achieving a 20% reduction in processing time while facilitating data logging and enabling the export of CSV files to" +
        "XLS format with picture previews through REST API integration of Frame.Io \n" +
      "Designed and implemented a Python script for automating QA database population and reporting, effectively" +
        "mirroring global testing workflows and decreasing report generation time by 30%. Generated comprehensive" +
        "operational reports that included lists of blockers, repeatable issues, dates, and specific user information.\n" +
      "Technical Skills: Python, MongoDB, ffmpeg, Frame.Io",
    image: "/QA.png",
  },
  {
    role: "Full Stack Developer - Intern",
    name: "MSquareTechnologies.Inc",
    date: "July 2023 - September 2023",
    place: "Philadelphia, PA",
    description:
      "Designed and developed a dynamic application for college students using Python, ReactJS, and NodeJS, integrating" +
        "the OpenAI API for response generation based on a database. \n" +
      "Engineered a robust query database and data processing pipeline with MongoDB, ensuring seamless and efficient" +
        "data handling, which improved response accuracy and system performance. \n" +
      "Led the end-to-end development process, focusing on UI/UX design and database management, creating a secure" +
        "and user-friendly interface that served over 1000 students, enhancing accessibility and overall satisfaction.\n" +
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

