import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`
        mx-auto
        mb-20
        max-w-4xl
        text-center
        ${className}
      `}
    >
      {/* Eyebrow */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-200
          bg-blue-50
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.25em]
          text-blue-700

          dark:border-blue-800
          dark:bg-blue-950/40
          dark:text-blue-400
        "
      >
        {eyebrow}
      </span>

      {/* Title */}

      <h2
        className="
          mt-7
          text-4xl
          font-extrabold
          leading-tight
          tracking-tight
          text-slate-900

          sm:text-5xl
          lg:text-6xl

          dark:text-white
        "
      >
        {title}
      </h2>

      {/* Decorative Line */}

      <div className="mt-8 flex justify-center">

        <div className="flex items-center gap-4">

          <div
            className="
              h-[2px]
              w-16
              rounded-full
              bg-blue-200

              dark:bg-blue-800
            "
          />

          <div
            className="
              h-3
              w-3
              rounded-full
              bg-blue-600

              dark:bg-blue-400
            "
          />

          <div
            className="
              h-[2px]
              w-16
              rounded-full
              bg-blue-200

              dark:bg-blue-800
            "
          />

        </div>

      </div>

      {/* Description */}

      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-9
          text-slate-600

          sm:text-xl
          sm:leading-10

          dark:text-slate-300
        "
      >
        {description}
      </p>
    </div>
  );
}