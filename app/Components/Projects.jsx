'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: " WiseBro- Clarity engine",
    description: "Clarity Engine is a web-based tool I built to help people clear their minds and focus better through guided questions and reflection.It provides personalized roadmaps directly in the user email inbox"

,
    functionalities: [
      "Take user email and answers via Form",
      "Send user data Dynamically to SheetDB and displays in GoogleSheets",
      "Use App Script to Dinamically send emails to users with embeded Roadmaps ",
      "Fully Responsive"
    ],
    tech: ["Next.js","React", "Tailwind CSS","Express","Nodejs", "SheetDB","AppScript"],
    video: "/videos/WiseBro.mp4",
    link: "https://github.com/AliMehdiNaqvi/Clarity_Engine_MVP"
  },
  {
    title: "PSOP-Password Manager",
    description: "PSOP is your own password manager that take care of your all passwords more than anything.",
    functionalities: [
      "Save passwords",
      "Delete passwords",
      "Update/edite passwords",
      "Copy passwords to clipboard",
      "Save them in MongoDB",
      "Fully Responsive"
    ],
    tech: ["Nodejs","React", "Express", "MongoDB","Tailwind CSS"],
    video: "/videos/PSOP.mp4",
    link: "https://github.com/AliMehdiNaqvi/PSOP-Password_Manager"
  },
  {
    title: "DoTask- Todo Manager",
    description: "DoTask manages your all todos and makes work easy.",
    functionalities: [
      "Save Todos",
      "Check Done Todos",
      "Toggle show checked Todos",
      "Edit Todos",
      "Delete Todos",
      "Save todos to LocalStorage",
      "Fully Responsive "
    ],
    tech: ["Express","React","Nodejs","Tailwind"],
    video: "/videos/Dotask.mp4",
    link: "https://github.com/AliMehdiNaqvi/DoTask-Todo_Manager"
  },
  {
    title: "Twitter/X Clone",
    description: "I built the frontened Clone of X to learn about how to fetch Data and Dynamic Display of Data. ",
    functionalities: [
      "Fetch data from server",
      "Dynamicaly Displays Data in the form of posts via folders containing Json files.",
      " Animate dynamically week news posts similar to actual twitter. ",
      "Fully Responsive"
    ],
    tech: ["TailwindCSS", "HTML", "Javascript"],
    video: "/videos/Twitter.mp4",
    link: "#"
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="relative py-24 px-6 bg-gradient-to-br from-[#0b0b22] via-[#1a1a40] to-[#0b0b22] text-white z-10 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Galaxy Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-purple-700 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-fuchsia-600 to-blue-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-20">
        My Projects
      </h2>

      <div className="flex flex-col gap-24 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col bg-white/5 border border-purple-800 rounded-3xl p-6 md:p-10 backdrop-blur-lg shadow-[0_0_60px_rgba(128,0,255,0.2)] hover:scale-[1.01] transition-all duration-500 group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-600 via-blue-500 to-transparent group-hover:opacity-20 transition-all duration-700 rounded-3xl z-0" />

            <div className="relative z-10 flex flex-col gap-6">
              <video
                className="rounded-xl w-full h-auto border border-purple-700 shadow-lg"
                controls
                loop
                muted
                autoPlay
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-purple-300">{project.title}</h3>
                <p className="text-white/80 text-base leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="font-semibold text-white/90 mb-1">Key Features:</h4>
                  <ul className="list-disc list-inside text-white/70">
                    {project.functionalities.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white/90 mb-1">Tech Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-purple-700/30 text-purple-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit bg-purple-600 hover:bg-purple-800 transition-all text-white font-semibold px-5 py-2 rounded-xl shadow-md hover:scale-105"
              >
               <FaGithub /> Github Code
              </a>
             </div> 
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
