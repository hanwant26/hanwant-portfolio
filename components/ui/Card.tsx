import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white/90
        p-8
        shadow-[0_10px_40px_rgba(15,23,42,0.08)]
        backdrop-blur-xl
        transition-all
        duration-500

        dark:border-slate-700
        dark:bg-slate-900/90
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

        ${
          hover
            ? `
              hover:-translate-y-2
              hover:border-blue-300
              hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]

              dark:hover:border-blue-500
              dark:hover:shadow-[0_20px_60px_rgba(59,130,246,0.18)]
            `
            : ""
        }

        ${className}
      `}
    >
      {/* Top Gradient Line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
          bg-gradient-to-r
          from-blue-600
          via-cyan-400
          to-indigo-600
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {children}
    </div>
  );
}