"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-full border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-slate-200
        bg-white
        text-slate-700
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-500
        hover:text-blue-600
        dark:border-slate-700
        dark:bg-slate-800
        dark:text-slate-200
        dark:hover:border-blue-400
        dark:hover:text-blue-400
      "
    >
      {isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
}