'use client'
import React from "react"
import Image from "next/image"
import Particles from "@/components/particles";


const skills = [
  { skill: "JAVA" },
  { skill: "Python" },
  { skill: "Swift" },
  { skill: "C/C++" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React -Hooks/Router" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MySQL"},
  { skill: "MongoDb"},
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen w-full">
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
              <span className="font-bold">{" goal-oriented student"}</span>
              residing in Los Angeles, CA.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              Currently pursuing a Bachelor of Science degree in Computer Science at California State University, Northridge,
              I anticipate graduating in 2025.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              Beyond my academic pursuits, I maintain a fervent commitment to personal growth and exploration.
              Engaged in various endeavors such as reading, playing volleyball, snowboarding, and traveling,
              I continually seek to broaden my horizons and cultivate new experiences.
            </p>
            <br />
            <p className="text-lg md:text-xl">
              Moreover, I am deeply {" "}
              <span className="font-bold text-green-500">
                 passionate about technology,
               </span>{" "}
              ,particularly in exploring artificial intelligence, data analytics, and cybersecurity fields.
              Actively seeking opportunities to develop skills and expertise in these areas, I am driven by a relentless pursuit of innovation and excellence.🙂
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