import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="border-t border-gray-300 dark:border-gray-800 dark:bg-[#222d40] bg-[#f5f6f8] ">
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-600 dark:text-slate-400">
        <div className="flex items-center justify-between">
         
        <p className="">© {new Date().getFullYear()} QuantumPulse Technologies. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400">About</a>
            <a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400">Services</a>
            <a href="#products" className="hover:text-indigo-600 dark:hover:text-indigo-400">Products</a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-gray-400 ">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-gray-400  ">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-gray-400 ">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
