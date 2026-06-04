"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
  
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);
  
  useEffect(() => {
    console.log("Theme:", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-[#fafafa] dark:bg-[#0a0e1a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Left */}
        <a href="/" className="flex items-center">
          <img
            src="/qpt.png"
            alt="QPT Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Center Navigation */}
        <ul className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="flex h-10 w-10 items-center justify-center hover:text-[#2563eb] "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
            className="rounded-full p-2 cursor-pointer bg-[#ffffff] text-slate-700  dark:bg-slate-800 dark:text-slate-100
  "
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 md:hidden hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{isOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 z-40 bg-black/50 md:hidden"
      onClick={() => setIsOpen(false)}
    />

    {/* Drawer */}
    <div
      className="
        fixed
        top-0
        right-0
        z-50
        h-screen
        w-[60%]
        bg-[#fafafa]
        dark:bg-[#0a0e1a]
        border-l
        border-gray-200
        dark:border-gray-800
        p-6
        md:hidden
      "
    >
      <div className="flex justify-end mb-8">
        <button onClick={() => setIsOpen(false)}>
          <X size={24} />
        </button>
      </div>

      <ul className="flex flex-col gap-6">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                text-lg
                font-medium
                text-gray-700
                dark:text-gray-200
                hover:text-blue-600
              "
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </>
)}
    </nav>
  );
}
