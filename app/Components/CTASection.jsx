'use client';

import React from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
const CTASection = () => {
    return (
        <motion.section
            id="contact"
            className="relative py-32 px-6 bg-gradient-to-tr from-[#0b0b22] via-[#1a1a40] to-[#0b0b22] text-white z-10 overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            {/* Zero Gravity Nebula Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-purple-700 to-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-gradient-to-br from-fuchsia-600 to-blue-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Ready to build the future together?
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-white/80 mb-10"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Whether it's collaboration, hiring, or discussing new ideas — I'm always open to visionary conversations.
                </motion.p>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-800 transition-all px-8 py-4 rounded-full shadow-xl hover:scale-105 text-lg font-semibold"
                    >
                        <FiSend className="text-white text-xl" />
                        Let's Talk
                    </Link>
                </motion.div>



            </div>

            {/* Floating Stars Effect */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="w-full h-full animate-[float_8s_infinite_ease-in-out] bg-[url('/stars.svg')] bg-cover opacity-10" />
            </div>
        </motion.section>
    );
};

export default CTASection;
