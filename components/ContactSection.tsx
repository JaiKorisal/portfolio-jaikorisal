'use client'
import React from "react";
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import SlideUp from "./SlideUp";

const contacts = [
  {
    id:1,
    icon: <AiOutlineMail size={40} />,
    link: "mailto:jaikorisal@gmail.com",
    label: "Email",
  },
  {
    id:2,
    icon: <AiOutlineLinkedin size={40} />,
    link: "https://www.linkedin.com/in/jainivash-korisal/",
    label: "LinkedIn",
  },
  {
    id:3,
    icon: <AiOutlineGithub size={40} />,
    link: "https://github.com/JaiKorisal",
    label: "GitHub",
  },
];
interface ContactSectionProps {
  className?: string;
}


const ContactSection: React.FC<ContactSectionProps> = ({ className }) => {
  return (
    <section id="contact" className={className}>
      <h1 className="my-10 text-center font-bold text-4xl">
        Contact Me!
        <hr className="w-10 h-1 mx-auto my-4 bg-yellow-600 border-0 rounded" />
      </h1>
      <div className="flex justify-center items-center overflow-x-auto my-12">
          {contacts.map((contact, idx) => (
                <div key={idx} className="m-4 mb-1">
                    <div className="m-4">
                        <Link href={contact.link} target="_blank">
                        <div className="flex flex-col items-center justify-center p-4 bg-white-200 hover:bg-gray-300 rounded-xl shadow-lg transition duration-300 ease-in-out opacity-100">
                          {contact.icon}
                          <span className="mt-2 text-lg font-semibold">{contact.label}</span>
                        </div>
                        </Link>
                    </div>
                </div>
          ))}
      </div>
    </section>
  );
};

export default ContactSection;
