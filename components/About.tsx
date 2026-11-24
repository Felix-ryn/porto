"use client";

import { useState } from "react";
import { aboutIntro, highlights } from "@/data/about";
import {
  IconServer,
  IconDatabase,
  IconBrain,
} from "@/components/Icons";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  server: IconServer,
  database: IconDatabase,
  brain: IconBrain,
};

export default function About() {
  const [isColorShown, setIsColorShown] = useState(false);

  return (
    <section id="about" className="scroll-mt-24 !max-w-[900px]">
      <h2 className="numbered-heading">About Me</h2>
      <div className="grid grid-cols-[3fr_2fr] max-[768px]:grid-cols-1 gap-[50px]">
        <div className="text-[20px] leading-[1.5]">
          <p>{aboutIntro.description}</p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-x-2.5 p-0 mt-5 list-none">
            {["Python", "PostgreSQL", "FastAPI", "Node.js", "Docker", "dbt"].map(skill => (
              <li key={skill} className="relative mb-2.5 pl-5 font-mono text-xs before:absolute before:left-0 before:content-['▹'] before:text-[var(--green)]">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative max-w-[300px] max-[768px]:mt-12 max-[768px]:mx-auto max-[768px]:w-[70%]">
          <button
            type="button"
            aria-label={isColorShown ? "Apply green photo filter" : "Remove green photo filter"}
            aria-pressed={isColorShown}
            onClick={() => setIsColorShown((shown) => !shown)}
            className={`profile-photo-frame relative block w-full aspect-[8/9] rounded-sm bg-[var(--green)] after:absolute after:-z-10 after:top-[14px] after:left-[14px] after:w-full after:h-full after:border-2 after:border-[var(--green)] after:rounded-sm ${
              isColorShown ? "profile-photo-color" : ""
            }`}
          >
            {!isColorShown && (
              <span className="absolute inset-0 z-10 rounded-sm bg-[var(--navy)] mix-blend-screen transition-opacity duration-300" />
            )}
            <img
              src="/images/profile.jpeg"
              alt="Felix Ryan"
              className="relative z-[1] h-full w-full rounded-sm object-cover object-top grayscale contrast-100 mix-blend-multiply transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
