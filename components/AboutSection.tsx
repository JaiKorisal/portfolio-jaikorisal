'use client'
import React from "react"
import Image from "next/image"
import Particles from "@/components/particles";


const skills = [
  { skill: "JAVA" },
  { skill: "Python" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Swift" },
  { skill: "C/C++" },
  { skill: "C#" },
  { skill: "React -Hooks/Router" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL"},
  { skill: "MongoDb"},
  { skill: "AWS"},
  { skill: "Zendesk"},
]

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section id="about"  className={className}>
      <div className="my-24 max-w-full pb-24 md:pt-3200 md:pb-64">
        <h1 className="text-center font-bold text-3xl md:text-100xl">
          About Me
          <hr className="w-100 h-1 mx-auto my-6 bg-yellow-600 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-12 items-stretch justify-center align-top md:space-x-12 md:space-y-0 md:p-8 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-3xl font-bold mb-8 md:text-left md:text-100xl">
              Get to know me!
            </h1>
            <p className="text-lg md:text-xl">
              Hi, my name is Jainivash Korisal and I am a{" "}
              <span className="font-bold">{"dedicated "}</span> and
              <span className="font-bold">{" goal-oriented student "}</span>
              residing in Los Angeles, CA.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              I am currently a student at California State University, Northridge, pursuing a B.S. in Computer Science,
              with a strong passion for coding and software development. I am actively seeking opportunities in related fields to further hone my technical skills.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              I thrive on solving complex problems and am deeply interested in programming and software engineering.
              I am also an enthusiastic learner, always eager to explore new technologies and methodologies.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              Through my experiences in college, life, and internships, I’ve been able to grow my skill set significantly.
              These opportunities have helped me develop expertise in languages like Python, Java, C/C++, and JavaScript/TypeScript, as well as in frameworks like React and AWS.
              I look forward to continuously learning, implementing, and polishing these skills in any opportunity I receive.🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-3xl font-bold mb-8 md:text-100xl">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={item.skill}
                    className="bg-gray-200 px-5 py-3 mr-3 mt-3 text-gray-700 rounded font-semibold text-lg md:text-xl"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
//<Image
//               src="/snow.png"
//               alt=""
//               width={350}
//               height={350}
//               className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
//             />



//              I believe that you should{" "}
//               <span className="font-bold text-teal-500">
//                 never stop growing

//               </span>{" "}
//               and that&#39;s what I strive to do. I have a passion for
//               technology and a desire to always push the limits of what is
//               possible. I am excited to see where my career takes me and am
//               always open to new opportunities. 🙂