'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const ResumeButton = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <a
        href="/Resume.pdf"
        download
        className="flex mx-auto gap-3 px-6 py-3 my-5 bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-600 text-white font-semibold rounded-full shadow-xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-md border border-purple-500"
      >
        <FiDownload className="text-xl" />
        Download Resume

      </a>
    </motion.div>
  );
};

export default ResumeButton;
