import Link from "next/link";
import { config } from "@/data/config";
import { IconGithub, IconLinkedin } from "@/components/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 pb-6 text-center">
      <div className="flex justify-center gap-6 md:hidden mb-4">
        <a href={config.social.github} aria-label="GitHub"><IconGithub className="h-5 w-5" /></a>
        <a href={config.social.linkedin} aria-label="LinkedIn"><IconLinkedin className="h-5 w-5" /></a>
      </div>
      <p className="font-mono text-xs text-[var(--light-slate)]">Designed &amp; Built by Felix Ryan · © {currentYear}</p>
    </footer>
  );
}
