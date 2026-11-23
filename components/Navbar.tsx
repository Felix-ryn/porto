"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About", id: "about" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#projects", label: "Work", id: "projects" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("felix-portfolio-loaded");
    sessionStorage.setItem("felix-portfolio-loaded", "true");
    const timeout = window.setTimeout(() => setIsLoading(false), hasLoaded ? 0 : 1800);
    return () => window.clearTimeout(timeout);
  }, []);

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => ({
        id: link.id,
        element: document.getElementById(link.id),
      }));

      const scrollY = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollY) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    {isLoading && (
      <div className="page-loader" role="presentation" aria-hidden="true">
        <div className="loader-logo">
          <svg viewBox="0 0 64 64" aria-hidden="true">
            <path d="M14 8h38v7H23v13h24v7H23v21h-9V8Z" />
          </svg>
        </div>
      </div>
    )}
    <nav className="fixed top-0 w-full z-50">
      <div className="absolute inset-0 bg-[rgba(10,25,47,0.85)] backdrop-blur-[10px]" />

      <div className="relative h-[100px] px-[50px] max-[1080px]:px-[40px] max-[768px]:px-[25px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="navbar-logo text-2xl font-bold tracking-tight"
          onClick={() => handleNavClick("home")}
        >
          <svg viewBox="0 0 48 48" aria-label="F">
            <path d="M10 7h29v6H17v10h18v6H17v12h-7V7Z" />
          </svg>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 ml-auto mr-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
               className={clsx(
                 "nav-link relative px-2.5 py-2.5 font-mono text-xs cursor-pointer",
                 activeSection === link.id
                   ? "text-[var(--green)]"
                   : "text-[var(--lightest-slate)] hover:text-[var(--green)]"
               )}
            >
              <span className="text-[var(--green)] mr-1.5">0{navLinks.indexOf(link) + 1}.</span>
              {link.label}
            </button>
          ))}
        </div>

          {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNavClick("contact")}
            className="outline-button hidden md:block !min-h-[42px] px-4"
          >
            Resume
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#14243D] transition-colors relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={clsx(
                "w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300",
                isOpen ? "rotate-45 translate-y-2" : ""
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300",
                isOpen ? "opacity-0" : ""
              )}
            />
            <span
              className={clsx(
                "w-6 h-0.5 bg-[#F8FAFC] transition-all duration-300",
                isOpen ? "-rotate-45 -translate-y-2" : ""
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full w-full bg-[rgba(10,25,47,0.95)] backdrop-blur-md border-b border-[var(--lightest-navy)]">
          <div className="px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? "text-[#3B82F6] bg-[#14243D]"
                    : "text-[#94A3B8] hover:text-[#F8FAFC]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full px-4 py-3 bg-[#3B82F6] text-[#F8FAFC] rounded-lg font-semibold text-center hover:bg-[#60A5FA] transition-all duration-300 mt-4 cursor-pointer"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}
