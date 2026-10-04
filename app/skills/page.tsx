import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { skills } from "@/data/skills";
import {
  IconCode,
  IconServer,
  IconWorkflow,
  IconBrain,
  IconDatabase,
  IconSearch,
} from "@/components/Icons";

export default function SkillsPage() {
  const proficiencyColors = {
    Expert: "bg-green-50 text-green-700 border-green-200",
    Advanced: "bg-blue-50 text-blue-700 border-blue-200",
    Intermediate: "bg-amber-50 text-amber-700 border-amber-200",
  };

  const techSummary = [
    { title: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS"], Icon: IconCode },
    { title: "Backend", techs: ["Node.js", "Express", "Python", "FastAPI"], Icon: IconServer },
    { title: "Databases", techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL"], Icon: IconDatabase },
    { title: "Data & ML", techs: ["Pandas", "Scikit-learn", "TensorFlow", "XGBoost"], Icon: IconBrain },
    { title: "DevOps", techs: ["Docker", "Kubernetes", "AWS", "Git"], Icon: IconWorkflow },
    { title: "Other", techs: ["REST API", "GraphQL", "WebSocket", "SEO"], Icon: IconSearch },
  ];

  const proficiencyLevels = [
    { level: "Expert", dots: 3, color: "text-green-600", desc: "Extensive experience and deep knowledge. Can build from scratch and optimize." },
    { level: "Advanced", dots: 2, color: "text-blue-600", desc: "Strong proficiency. Can build solutions with minimal guidance." },
    { level: "Intermediate", dots: 1, color: "text-amber-600", desc: "Solid understanding. Can build solutions with some research." },
  ];

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Skills & Expertise
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different domains
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillCategory) => (
              <div key={skillCategory.id} className="card p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {skillCategory.category}
                </h3>
                <p className="text-slate-500 text-sm mb-6">{skillCategory.description}</p>

                <div className="space-y-3">
                  {skillCategory.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between"
                    >
                      <p className="font-medium text-slate-700 text-sm">
                        {skill.name}
                      </p>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${
                          proficiencyColors[skill.proficiency]
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proficiency Legend */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Proficiency Levels
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proficiencyLevels.map((item) => (
              <div key={item.level} className="card p-6 text-center">
                <div className="flex justify-center gap-1.5 mb-4">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className={`w-2.5 h-2.5 rounded-full ${
                        i < item.dots ? item.color.replace("text-", "bg-") : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <h4 className={`text-lg font-bold mb-2 ${item.color}`}>{item.level}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Summary */}
      <section className="py-16">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Technology Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSummary.map((group) => (
              <div key={group.title} className="card p-6">
                <group.Icon className="w-7 h-7 text-blue-600 mb-3" />
                <h4 className="text-lg font-bold mb-3">
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="section-container text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">
            Looking for Someone with These Skills?
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Let&apos;s discuss how my expertise can help bring your project to life
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
