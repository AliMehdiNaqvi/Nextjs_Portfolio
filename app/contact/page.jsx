'use client';

import React from 'react';
import ContactForm from '../Components/ContactForm';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const ContactPage = () => {
  return (
    <motion.div
      className="min-h-screen relative bg-gradient-to-br from-[#0b0b22] via-[#161633] to-[#0b0b22] text-white px-6 py-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Galaxy Background Glow */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-gradient-to-br from-purple-700 to-indigo-500 rounded-full blur-3xl opacity-30 animate-ping"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-fuchsia-600 to-blue-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-5 animate-[float_10s_infinite_ease-in-out] pointer-events-none z-0" />

      {/* Back to Home Button */}
      <div className="mb-8 z-10 relative">
        <Link href="/" className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-500 transition text-sm">
          <FiArrowLeft className="text-lg" /> Back to Home
        </Link>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </motion.div>
  );
};

export default ContactPage;

