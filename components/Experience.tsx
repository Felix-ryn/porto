"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [active, setActive] = useState(0);
  const item = experiences[active];

  return (
    <section id="experience" className="scroll-mt-24 !max-w-[980px]">
      <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      <div className="flex items-start gap-8 max-[760px]:block">
        <div className="relative z-[3] flex shrink-0 flex-col max-[760px]:mb-8 max-[760px]:w-full max-[760px]:flex-row max-[760px]:overflow-x-auto">
          {experiences.map((experience, index) => (
            <button
              key={experience.id}
              type="button"
              onClick={() => setActive(index)}
              className={`min-h-[48px] w-[260px] border-l-2 px-5 pr-6 py-3 text-left font-mono text-xs leading-[1.5] whitespace-normal max-[760px]:h-[56px] max-[760px]:w-[190px] max-[760px]:shrink-0 max-[760px]:border-l-0 max-[760px]:border-b-2 max-[760px]:text-center max-[760px]:px-3 ${
                active === index
                  ? "border-[var(--green)] bg-[var(--light-navy)] text-[var(--green)]"
                  : "border-[var(--lightest-navy)] bg-transparent text-[var(--slate)] hover:bg-[var(--light-navy)]"
              }`}
            >
              {experience.institution}
            </button>
          ))}
        </div>
        <div className="min-h-[250px] min-w-0 flex-1 max-[760px]:ml-0">
          <h3 className="mb-2 text-[22px] leading-[1.35] font-medium text-[var(--lightest-slate)]">
            {item.position} <span className="text-[var(--green)]">@ {item.institution}</span>
          </h3>
          <p className="mb-7 font-mono text-xs leading-[1.6] text-[var(--light-slate)]">{item.period}</p>
          <p className="text-[17px] leading-[1.7]">{item.description}</p>
          <ul className="mt-6 space-y-3 list-none p-0">
            {item.highlights?.map(highlight => (
              <li key={highlight} className="relative pl-5 text-[17px] leading-[1.55] before:absolute before:left-0 before:content-['▹'] before:text-[var(--green)]">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
