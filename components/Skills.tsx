"use client";

import { useState } from "react";
import { skills } from "@/data/skills";

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 md:py-28 bg-bg-primary scroll-mt-24">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Tools & Technologies.
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Comprehensive skill set across multiple domains. Hover to see proficiency level.
          </p>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-border-custom bg-bg-card p-6 hover:border-blue-primary hover:bg-bg-secondary transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2">
                {category.category}
              </h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Skills in Category */}
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <button
                    key={skill.name}
                    type="button"
                    className="w-full relative group cursor-pointer text-left"
                    onMouseEnter={() => setSelectedSkill(skill.name)}
                    onMouseLeave={() => setSelectedSkill(null)}
                  >
                    <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-bg-secondary hover:bg-bg-primary transition-colors duration-200">
                      <span className="text-sm font-medium text-blue-light group-hover:text-blue-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-semibold">
                        {skill.proficiency === "Expert" && (
                          <span className="text-cyan-accent">●●●</span>
                        )}
                        {skill.proficiency === "Advanced" && (
                          <span className="text-blue-light">●●○</span>
                        )}
                        {skill.proficiency === "Intermediate" && (
                          <span className="text-text-secondary">●○○</span>
                        )}
                      </span>
                    </div>

                    {/* Tooltip */}
                    {selectedSkill === skill.name && (
                      <div className="absolute bottom-full left-0 right-0 mb-2 px-3 py-2 bg-bg-secondary border border-blue-primary rounded-lg text-xs text-text-secondary whitespace-nowrap z-10 pointer-events-none">
                        {skill.proficiency}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
