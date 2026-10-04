"use client";

import Link from "next/link";
import { useState } from "react";
import { config } from "@/data/config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Profile" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50">
      <div className="section-container h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold gradient-text"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CV Download Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a
            href={config.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary text-sm"
          >
            Download CV
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <svg
              className="w-6 h-6 text-slate-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="section-container py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-600 hover:text-blue-600 font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={config.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-primary text-center mt-4"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
