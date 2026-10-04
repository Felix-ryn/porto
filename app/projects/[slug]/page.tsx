import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import {
  IconArrowLeft,
  IconCheckCircle,
  IconAlertTriangle,
  IconExternalLink,
  IconLink,
  IconImage,
  getProjectIcon,
} from "@/components/Icons";

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

  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  const ProjectIcon = getProjectIcon(project.id);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20">
        <div className="w-full h-72 md:h-96 bg-slate-50 border-b border-slate-200 flex items-center justify-center">
          <div className="text-center text-slate-800">
            <ProjectIcon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{project.title}</h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Overview */}
              <div className="card p-8 mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {project.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Role</p>
                    <p className="text-slate-900 font-bold">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Duration</p>
                    <p className="text-slate-900 font-bold">{project.duration}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="card p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <IconCheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="card p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Challenges */}
                <div className="card p-6">
                  <h4 className="text-lg font-bold mb-4">Challenges</h4>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <IconAlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="card p-6 border-l-4 border-l-blue-600">
                  <h4 className="text-lg font-bold text-blue-600 mb-4">Solution</h4>
                  <p className="text-slate-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Gallery/Screenshots */}
              <div className="card p-8 mb-8">
                <h3 className="text-xl font-bold mb-6">Documentation & Screenshots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, idx) => (
                    <div
                      key={idx}
                      className="h-56 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center"
                    >
                      <div className="text-center text-slate-400">
                        <IconImage className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-medium text-sm">Screenshot {idx + 1}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Project Links */}
                <div className="card p-6">
                  <h3 className="text-lg font-bold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        <IconExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 w-full px-4 py-3 border border-slate-200 text-slate-700 rounded-lg font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <IconLink className="w-4 h-4" />
                        GitHub Repo
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="card p-6">
                  <h3 className="text-base font-bold mb-4">Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-500">Features</p>
                      <p className="text-2xl font-bold text-blue-600">{project.features.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Technologies</p>
                      <p className="text-2xl font-bold text-blue-600">{project.technologies.length}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Screenshots</p>
                      <p className="text-2xl font-bold text-blue-600">{project.images.length}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-50 text-slate-700 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  <IconArrowLeft className="w-4 h-4" />
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="section-container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((related) => {
                const RelatedIcon = getProjectIcon(related.id);
                return (
                  <Link
                    key={related.id}
                    href={`/projects/${related.slug}`}
                    className="card group overflow-hidden"
                  >
                    <div className="h-40 bg-slate-50 border-b border-slate-200 flex items-center justify-center">
                      <RelatedIcon className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-slate-500 text-sm">
                        {related.shortDescription}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
