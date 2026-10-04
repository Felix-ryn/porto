import Link from "next/link";
import { config } from "@/data/config";
import { IconGithub, IconLinkedin } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "/", label: "Profile" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="mt-24 bg-slate-900 text-slate-300">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-3">Portfolio</h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Full Stack Developer & Data Engineer passionate about building scalable solutions.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href={config.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                title="GitHub"
              >
                <IconGithub className="w-4 h-4" />
              </a>
              <a
                href={config.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-colors"
                title="LinkedIn"
              >
                <IconLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${config.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {config.email}
                </a>
              </li>
              <li>{config.location}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm">
            <p>© {currentYear} {config.name}. All rights reserved.</p>
            <p>Built with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
