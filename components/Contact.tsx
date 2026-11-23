import Link from "next/link";
import { config } from "@/data/config";
import { IconMail, IconGithub, IconLinkedin } from "@/components/Icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 max-w-[600px]! text-center">
      <p className="mb-5 font-mono text-sm text-[var(--green)]">04. What&apos;s Next?</p>
      <h2 className="mb-4 text-[clamp(40px,5vw,60px)] text-[var(--lightest-slate)]">Get In Touch</h2>
      <p className="mx-auto mb-12 max-w-[540px] text-[17px] leading-[1.5]">
        I&apos;m interested in backend, data engineering, and machine learning opportunities.
        Whether you have a question or just want to say hi, my inbox is always open.
      </p>
      <a href={`mailto:${config.email}`} className="outline-button">Say Hello</a>
    </section>
  );
}
