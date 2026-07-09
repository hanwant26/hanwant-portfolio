"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage =
        docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(percentage);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      className="
        fixed
        left-0
        top-0
        z-[100]
        h-1
        w-full
        bg-transparent
      "
    >
      <div
        className="
          h-full
          rounded-r-full
          bg-gradient-to-r
          from-blue-600
          via-cyan-500
          to-indigo-600
          shadow-lg
          transition-[width]
          duration-150
        "
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}