import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconExternalLink, IconGithub, IconFolder } from "@/components/Icons";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="portfolio-main project-detail-main">
        <Link href="/projects" className="project-back-link">
          <IconArrowLeft className="h-4 w-4" />
          Archive
        </Link>

        <header className="project-detail-header">
          <p>Featured Project</p>
          <h1>{project.title}</h1>
        </header>

        {project.thumbnail && (
          <div className="project-detail-image">
            <img src={project.thumbnail} alt={`${project.title} preview`} />
          </div>
        )}

        <div className="project-detail-grid">
          <article>
            <h2>Overview</h2>
            <p>{project.fullDescription}</p>
            <h2>Key Features</h2>
            <ul className="project-detail-list">
              {project.features.map(feature => <li key={feature}>{feature}</li>)}
            </ul>
          </article>
          <aside>
            <h2>Technologies</h2>
            <ul className="project-detail-tech">
              {project.technologies.map(tech => <li key={tech}>{tech}</li>)}
            </ul>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noreferrer" className="outline-button project-github-link">
                <IconGithub className="h-5 w-5" />
                GitHub
              </a>
            )}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
