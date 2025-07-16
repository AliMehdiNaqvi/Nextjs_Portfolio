'use client';

import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gradient-to-tr from-[#0b0b22] via-[#1a1a40] to-[#0b0b22] text-white px-6 py-14 overflow-hidden border-t border-purple-800 mt-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Galactic Glow Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-purple-700 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-fuchsia-600 to-blue-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-400 mb-3">
          Designed for the Future
        </h2>
        <p className="text-white/70 mb-8">
          Built with 💜 using Next.js, Tailwind CSS, and Framer Motion
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 text-xl">
          <a href="https://github.com/Alimehdinaqvi" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            <FiGithub />
          </a>
          <a href="https://www.linkedin.com/in/ali-mehdi-naqvi-b1297730a/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            <FiLinkedin />
          </a>
          
          <a href="mailto:syedalimehdi275@gmail.com" className="hover:text-purple-400 transition">
            <FiMail />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 mb-6 text-sm text-white/60">
          <Link href="#hero" className="hover:text-purple-300 transition">Home</Link>
          <Link href="#about" className="hover:text-purple-300 transition">About</Link>
          <Link href="#projects" className="hover:text-purple-300 transition">Projects</Link>
          <Link href="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </div>

        <p className="text-xs text-white/40">© {new Date().getFullYear()} NexFolio. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;