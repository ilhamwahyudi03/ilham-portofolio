"use client";
import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";

const navLinks = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (link: string) => {
    const id = link.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/95 backdrop-blur-md border-b border-cyan-400/10 shadow-lg shadow-cyan-400/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left links */}
        <div className="hidden md:flex gap-8">
          {navLinks.slice(0, 2).map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="nav-link text-gray-300 text-sm font-medium tracking-wider uppercase"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Logo center */}
        <button
          onClick={() => handleNav("Home")}
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-widest"
        >
          <span className="cyan-text">&lt;/&gt;</span>
          <span className="text-white">WEB DEVELOPER</span>
        </button>

        {/* Right links */}
        <div className="hidden md:flex gap-8">
          {navLinks.slice(2).map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="nav-link text-gray-300 text-sm font-medium tracking-wider uppercase"
            >
              {link}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-cyan-400 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d1529]/98 backdrop-blur-md border-t border-cyan-400/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-gray-300 text-sm font-medium tracking-widest uppercase text-left hover:text-cyan-400 transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
