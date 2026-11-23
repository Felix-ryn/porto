"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { IconArrowUp } from "@/components/Icons";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={clsx(
        "fade-scale fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#3B82F6] text-[#F8FAFC] shadow-lg shadow-[#3B82F6]/50 flex items-center justify-center hover:bg-[#60A5FA] transition-all duration-300 border border-[#263B59] hover:border-[#3B82F6]",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      <IconArrowUp className="w-5 h-5" />
    </button>
  );
}
