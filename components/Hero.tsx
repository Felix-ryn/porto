import { config } from "@/data/config";

export default function Hero() {
  return (
    <section
      id="home"
      className="!max-w-[1000px] min-h-screen !py-0 flex flex-col justify-center items-start"
    >
      <h1 className="text-[clamp(14px,5vw,16px)] font-mono font-normal text-[var(--green)] mb-[30px] ml-1">
        Hi, my name is
      </h1>
      <h2 className="text-[clamp(40px,8vw,80px)] leading-[1.05] font-semibold text-[var(--lightest-slate)] m-0">
        Felix Ryan.
      </h2>
      <h3 className="text-[clamp(40px,8vw,80px)] leading-[1.05] font-semibold text-[var(--slate)] mt-2 mb-0">
        I build systems with data.
      </h3>
      <p className="mt-5 max-w-[540px] text-[20px] leading-[1.5] text-[var(--slate)]">
        I&apos;m a backend developer and data engineer focused on building reliable systems,
        data pipelines, and practical machine learning solutions.
      </p>
      <a href="#projects" className="outline-button mt-[50px]">Check out my work</a>
    </section>
  );
}
