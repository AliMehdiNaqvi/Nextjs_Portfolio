'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ResumeButton from "./ResumeButton";

const Hero = () => {
  return (
    <div className="relative w-full h-screen" id="hero">
      {/* Background Image */}
      <Image
        src="/myImage.jpeg" // Put your image inside the /public folder
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="z-0"
      />

      {/* Frosted Glass Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-10" />

      {/* Animated Content */}
      <motion.div
        className="z-20 relative h-full flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-purple-400 animate-pulse">
          MERN Stack Dev
        </h1>
        <p className="mt-4 text-xl text-white font-medium">
          Problem Solver | Creative Thinker | Founder
        </p>
        <a href="#projects"><button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-800 transition-all duration-300 text-white font-bold rounded-2xl shadow-lg hover:scale-105">
          View Projects
        </button></a>
        <ResumeButton/>
      </motion.div>
      

    </div>
  );
};

export default Hero;

