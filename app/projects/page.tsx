import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IconExternalLink, IconGithub } from "@/components/Icons";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main id="content" className="portfolio-main archive-main">
        <header className="archive-header">
          <h1 className="big-heading">Archive</h1>
          <p className="archive-subtitle">A big list of things I&apos;ve worked on</p>
        </header>
        <div className="archive-table-wrap">
          <table>
            <thead>
              <tr><th>Year</th><th>Title</th><th className="hide-mobile">Made at</th><th className="hide-mobile">Built with</th><th>Link</th></tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id} className="archive-row" style={{ animationDelay: `${index * 30}ms` }}>
                  <td className="archive-year">{project.year ?? ""}</td>
                  <td className="archive-title"><Link href={`/projects/${project.slug}`}>{project.title}</Link></td>
                  <td className="hide-mobile">{project.company ?? ""}</td>
                  <td className="archive-tech hide-mobile">{project.technologies.join(" · ")}</td>
                  <td>
                    <div className="archive-links">
                      {project.githubLink && <a href={project.githubLink} aria-label="GitHub"><IconGithub className="h-5 w-5" /></a>}
                      {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" aria-label="External link"><IconExternalLink className="h-5 w-5" /></a>}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </>
  );
}
