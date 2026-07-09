"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-110
        hover:shadow-blue-500/30
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }
      `}
    >
      <ChevronUp size={26} />
    </button>
  );
}