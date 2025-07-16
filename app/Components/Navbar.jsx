import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-50 backdrop-blur-xl bg-white/5 border-b border-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-400">NexFolio</h1>
          </div>
          <div className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#hero" className="hover:text-purple-400 transition">
              Home
            </a>
            <a href="#skills" className="hover:text-purple-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-purple-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-purple-400 transition">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-400"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0b0b22] px-4 pb-4 pt-2 space-y-2">
          <a href="#hero" className="block text-white hover:text-purple-400">
            Home
          </a>
          <a href="#skills" className="block text-white hover:text-purple-400">
            Skills
          </a>
          <a href="#projects" className="block text-white hover:text-purple-400">
            Projects
          </a>
          <a href="#contact" className="block text-white hover:text-purple-400">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
