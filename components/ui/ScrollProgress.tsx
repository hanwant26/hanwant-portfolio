"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        scrollHeight > 0
          ? (scrollTop / scrollHeight) * 100
          : 0;

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        z-[9998]

        h-1
        w-full

        bg-transparent
      "
    >
      <div
        className="
          h-full

          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-indigo-600

          shadow-[0_0_12px_rgba(37,99,235,0.7)]

          transition-[width]
          duration-75
        "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}