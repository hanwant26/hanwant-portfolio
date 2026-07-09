"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setHide(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2400);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center

        bg-white
        dark:bg-slate-950

        transition-all
        duration-700

        ${
          hide
            ? "opacity-0 scale-110 pointer-events-none"
            : "opacity-100 scale-100"
        }
      `}
    >
      {/* Background Glow */}

      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[150px] dark:bg-blue-600/20" />

      {/* Content */}

      <div className="relative flex flex-col items-center">

        {/* Animated Rings */}

        <div className="relative flex items-center justify-center">

          <div className="absolute h-32 w-32 animate-ping rounded-full border border-blue-400/40" />

          <div className="absolute h-24 w-24 animate-pulse rounded-full border border-blue-500/50" />

          <div className="h-20 w-20 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600 dark:border-slate-700 dark:border-t-blue-500" />

        </div>

        {/* Name */}

        <h1 className="mt-10 text-4xl font-extrabold text-slate-900 dark:text-white">

          Hanwant

          <span className="text-blue-600">
            {" "}Singh
          </span>

        </h1>

        {/* Subtitle */}

        <p className="mt-3 text-sm uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">

          Building the Future

        </p>

        {/* Progress Bar */}

        <div className="mt-10 h-1 w-64 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

          <div
            className="
              h-full
              animate-[loading_2s_linear_forwards]
              rounded-full
              bg-blue-600
            "
          />

        </div>

      </div>
    </div>
  );
}