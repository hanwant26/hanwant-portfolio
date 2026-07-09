import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-2xl
    px-8
    py-4
    text-sm
    font-semibold
    transition-all
    duration-300
    ease-out
    focus:outline-none
    focus:ring-4
    focus:ring-blue-300/40
    active:scale-95
  `;

  const variants = {
    primary: `
      bg-blue-600
      text-white
      shadow-lg
      shadow-blue-600/20
      hover:-translate-y-1
      hover:bg-blue-700
      hover:shadow-2xl

      dark:bg-blue-500
      dark:hover:bg-blue-400
    `,
    secondary: `
      border
      border-slate-300
      bg-white
      text-slate-800

      hover:-translate-y-1
      hover:border-blue-600
      hover:bg-blue-50

      dark:border-slate-700
      dark:bg-slate-900
      dark:text-slate-200
    `,
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}