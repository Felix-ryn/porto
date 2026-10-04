import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="pt-36 pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A showcase of my recent work in full-stack development, data engineering, machine learning, and more.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-12">
        <div className="section-container">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="section-container text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">Interested in Working Together?</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Let&apos;s connect!
          </p>
          <a href="/contact" className="btn-primary inline-block">
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
