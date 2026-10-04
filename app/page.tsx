import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { config } from "@/data/config";
import Link from "next/link";
import { projects } from "@/data/projects";
import { IconGithub, IconLinkedin, IconMail, IconUser, IconChevronDown, getProjectIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-7">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="gradient-text">{config.name}</span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-600 font-semibold">
                  {config.title}
                </p>
                <p className="text-base text-slate-500">
                  {config.subtitle}
                </p>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                {config.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="btn-primary">
                  View My Work
                </Link>
                <a
                  href={config.cvLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Download CV
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <a
                  href={config.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  title="GitHub"
                >
                  <IconGithub className="w-5 h-5" />
                </a>
                <a
                  href={config.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  title="LinkedIn"
                >
                  <IconLinkedin className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${config.email}`}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600 transition-colors"
                  title="Email"
                >
                  <IconMail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Hero Photo Placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-slate-400">
                <IconUser className="w-20 h-20 mb-3" />
                <p className="text-sm font-medium">Your photo here</p>
              </div>
            </div>
          </div>

          {/* Scroll down hint - smooth scroll anchor */}
          <div className="hidden md:flex justify-center mt-16">
            <a
              href="#featured-projects"
              aria-label="Scroll to featured projects"
              className="text-slate-400 hover:text-blue-600 transition-colors animate-bounce"
            >
              <IconChevronDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 bg-white border-y border-slate-200 scroll-mt-20">
        <div className="section-container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured Projects
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Showcase of my recent work in full-stack development, data engineering, and machine learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {projects.slice(0, 3).map((project) => {
              const ProjectIcon = getProjectIcon(project.id);
              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="card group overflow-hidden flex flex-col"
                >
                  <div className="h-36 bg-slate-50 border-b border-slate-200 flex items-center justify-center">
                    <ProjectIcon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm mb-4 line-clamp-2 flex-1">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center">
            <Link href="/projects" className="btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { number: "6+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "10+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                  {stat.number}
                </p>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
