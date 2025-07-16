"use client"
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0b22] via-[#1e1e40] to-[#0b0b22] px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl w-full mx-auto glass-effect p-10 rounded-2xl text-white shadow-xl backdrop-blur-md bg-white/5 border border-purple-600"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">
          About Me
        </h2>

        <p className="text-lg md:text-xl text-white leading-relaxed tracking-wide">
          Hey there! 👋 I’m a <span className="text-purple-400 font-semibold">MERN Stack Developer</span>,
          passionate about solving real-world problems through creative and clean code.
          <br /><br />
          The purpose of life for me is to translate meaning and impact in people's life.I love building Impactful Products!
          <br /><br />
          Outside of coding, I’m a <span className="text-purple-400 font-semibold">critical thinker</span> and use first  principal thinking to breakdown complex problems into their fundamental truths and build up the solution from them. I have developed and founded "WiseBro-ClarityEngine" currently in its MVP stage.
          — I always like to  explore new technologies and creative possibilities 🚀✨.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
