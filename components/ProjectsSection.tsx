'use client'
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Project = {
  name: string;
  description: string;
  images: string | string[];
  github?: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: "Stock Predictor - May 2024",
    description:
      "Programming language with built-in HSM support, akin to C/C++, complies in C++ and designed for JPL software engineers.",
    images: ["/stock.png", "/stock2.png", "/stock3.png","/stock7.png", "/stock5.png", "/stock6.png"],
    github: "https://github.com/JaiKorisal/StockPredictor",
  },
  {
    name: "Email Customer Service - May 2024",
    description:
      "Programming language with built-in HSM support, akin to C/C++, complies in C++ and designed for JPL software engineers.",
    images:  ["/email.png", "/email2.png", "/email3.png", "/email4.png", "/email5.png"],
    github: "https://github.com/JaiKorisal/EmailCustomerService",
  },
  {
    name: "CSUN ARCS Proteus - December 2023",
    description:
      "Programming language with built-in HSM support, akin to C/C++, complies in C++ and designed for JPL software engineers.",
    images: "/arcs.png",
  },
  {
    name: "Transit Reservation System -June 2023",
    description: "Created a Java application integrating real-time Google Maps APIs to optimize transit reservations based on time and cost efficiency\n" +
        "while storing essential information in a MySQL database.",
    images: "/transmodus.png",
  },
  {
    name: "Tic Tac Toe - January 2023",
    description:
      "Built an interactive iOS Tic Tac Toe game using Swift.",
    images: "/swift.png",
  },
  {
    name: "Melody - November 2022",
    description:
      "Created a music simulator in Eclipse using Java, allowing users to input musical notes and generating audible beats.",
    images: "/melody.png",
  },
  {
    name: "Bank Account - April 2022",
    description:
      "Developed a Java-based bank account simulation in JGRASP, featuring a user interface that presents multiple options and features such\n" +
        "as deposit and withdrawal.",
    images: "/bank.png",
  },
]

type SlideshowProps = {
  images: string | string[];
};

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof images === 'string') return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images]);

  const currentImage = typeof images === 'string' ? images : images[currentIndex];

  return (
    <div className="w-64 h-96 md:w-72 md:h-120 overflow-hidden ">
      <Image
        src={currentImage}
        alt={`Project image`}
        width={400}
        height={10000}
        className="rounded-xl shadow-xl hover:opacity-70 object-cover"
      />
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 850; // Adjust scroll amount as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 850; // Adjust scroll amount as needed
    }
  };

  return (
    <section id="projects" className="relative">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-100 h-1 mx-auto my-4 bg-yellow-600 border-0 rounded" />
      </h1>

      <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto scrollbar-hide space-x-4 my-12 pb-16"
      >
        {projects.map((project, idx) => (
          <div key={idx} className="m-4">
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col">
                <Slideshow images={project.images} />
                <div className="mt-8">
                  <h1 className="text-2xl font-bold mb-4">{project.name}</h1>
                  <p className="text-base leading-6 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={24}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                    {project.link && (
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={24}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>

      <div className="flex justify-center absolute bottom-4 left-0 w-full">
        <button
          onClick={scrollLeft}
          className="text-4xl text-gray-600 dark:text-gray-400 focus:outline-none mr-10"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={scrollRight}
          className="text-4xl text-gray-600 dark:text-gray-400 focus:outline-none ml-10"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
