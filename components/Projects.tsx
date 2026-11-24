"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { IconExternalLink, IconFolder, IconGithub } from "@/components/Icons";

export default function Projects() {
  const noteworthyProjects = [
    { title: "Data Platform", description: "A placeholder for a future data platform project.", tech: ["Python", "SQL", "Data"], github: "#" },
    { title: "Web Application", description: "A placeholder for a future web application project.", tech: ["React", "TypeScript", "API"], github: "#" },
    { title: "Machine Learning Study", description: "A placeholder for a future machine learning project.", tech: ["Python", "ML", "Jupyter"], github: "#" },
    { title: "Automation Toolkit", description: "A placeholder for a future automation and tooling project.", tech: ["Node.js", "Docker", "CLI"], github: "#" },
    { title: "Analytics Dashboard", description: "A placeholder for a future analytics dashboard project.", tech: ["Next.js", "Charts", "PostgreSQL"], github: "#" },
    { title: "Open Source Experiment", description: "A placeholder for a future open-source experiment.", tech: ["Open Source", "JavaScript"], github: "#" },
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
      {projects.length > 0 && (
        <ul className="project-featured-list">
          {projects.slice(0, 4).map((project, index) => (
            <li key={project.id} className="featured-project project-reveal">
              <div className="featured-project-image">
                <a
                  href={project.demoLink ?? `/projects/${project.slug}`}
                  target={project.demoLink ? "_blank" : undefined}
                  rel={project.demoLink ? "noopener noreferrer" : undefined}
                  aria-label={project.demoLink ? `Visit ${project.title} live demo` : `View ${project.title} details`}
                >
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt="" className="featured-project-preview" />
                  ) : (
                    <IconFolder className="h-16 w-16" />
                  )}
                </a>
              </div>
              <div className="featured-project-content">
                <p className="project-overline">Featured Project</p>
                <h3><Link href={`/projects/${project.slug}`}>{project.title}</Link></h3>
                <div className="project-description">{project.shortDescription}</div>
                <ul className="project-tech-list">
                  {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
                <div className="project-links">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label="GitHub"><IconGithub className="h-5 w-5" /></a>}
                  {project.demoLink && <a href={project.demoLink} target="_blank" rel="noreferrer" aria-label="External link"><IconExternalLink className="h-5 w-5" /></a>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-20 text-center">
        <Link href="/projects" className="outline-button">View the archive</Link>
      </div>

      <div className="noteworthy-projects">
        <h3 className="noteworthy-heading">Other Noteworthy Projects</h3>
        <p className="noteworthy-subtitle">A selection of smaller projects and experiments.</p>
        <ul className="noteworthy-grid">
          {noteworthyProjects.map(project => (
            <li key={project.title} className="noteworthy-card">
              <div className="noteworthy-card-top">
                <IconFolder className="h-9 w-9 text-[var(--green)]" />
                <a href={project.github} aria-label={`${project.title} GitHub`} className="hover:text-[var(--green)]">
                  <IconGithub className="h-5 w-5" />
                </a>
              </div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul>
                {project.tech.map(item => <li key={item}>{item}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
