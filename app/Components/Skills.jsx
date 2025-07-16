"use client"
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript,SiNextdotjs } from "react-icons/si";
const skills = [
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
  { name: "React", icon: <FaReact />, color: "text-blue-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
  { name: "Express.js", icon: <SiExpress />, color: "text-white" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-200" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-t from-[#0b0b22] to-[#1e1e40] text-white">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-12">
        My Skill Set
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white/5 border border-purple-700 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
            <p className="text-lg font-semibold text-white">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;