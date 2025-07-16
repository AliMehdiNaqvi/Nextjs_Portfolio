'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiMessageCircle } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <motion.section
      id="contact-form"
      className="relative py-28 px-6 bg-gradient-to-br from-[#0b0b22] via-[#161633] to-[#0b0b22] text-white z-10 overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Galaxy Sparks Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-purple-700 to-indigo-500 rounded-full blur-3xl opacity-30 animate-ping"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-fuchsia-600 to-blue-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover opacity-5 animate-[float_10s_infinite_ease-in-out] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto bg-white/5 p-10 rounded-3xl border border-purple-800 backdrop-blur-2xl shadow-2xl z-10 relative">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">
          Get in Touch
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl shadow-md">
            <FiUser className="text-purple-400" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full placeholder:text-white/60"
            />
          </div>

          <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-xl shadow-md">
            <FiMail className="text-purple-400" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full placeholder:text-white/60"
            />
          </div>

          <div className="flex items-start gap-3 bg-white/10 px-4 py-3 rounded-xl shadow-md">
            <FiMessageCircle className="text-purple-400 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent outline-none text-white w-full h-36 resize-none placeholder:text-white/60"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-800 px-8 py-3 rounded-full font-semibold text-white shadow-lg transition-all hover:scale-105"
            >
              Send Message
            </button>
          </div>

          {status && <p className="text-center text-sm text-purple-300 mt-4">{status}</p>}
        </form>
      </div>
    </motion.section>
  );
};

export default ContactForm;
