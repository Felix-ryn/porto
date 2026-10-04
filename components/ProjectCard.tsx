import Link from "next/link";
import { Project } from "@/data/projects";
import { getProjectIcon, IconArrowRight, IconCheckCircle } from "@/components/Icons";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isImageLeft = index % 2 === 0;
  const ProjectIcon = getProjectIcon(project.id);

  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section - always first on mobile, alternates on desktop */}
        <div className={isImageLeft ? "md:order-1" : "md:order-2"}>
          <div className="h-64 md:h-80 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center group">
            <div className="text-center">
              <ProjectIcon className="w-14 h-14 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-slate-500 font-medium text-sm">{project.title}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className={isImageLeft ? "md:order-2" : "md:order-1"}>
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold mb-1">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm font-medium">
                {project.role} • {project.duration}
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-2">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features Preview */}
            <div>
              <p className="text-sm font-semibold text-slate-800 mb-2">Key Features</p>
              <ul className="space-y-1.5">
                {project.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                    <IconCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
                {project.features.length > 3 && (
                  <li className="text-sm text-slate-400 italic">
                    +{project.features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group"
              >
                View Full Project
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-slate-200"></div>
    </div>
  );
}
