"use client";

import { ArrowRight, Download } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Button from "@/components/ui/Button";
import HeroSocial from "./HeroSocial";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">

      {/* Badge */}

      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-green-200 bg-green-50 px-5 py-3 shadow-sm dark:border-green-900 dark:bg-green-950/40">

        <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

        <span className="text-sm font-semibold text-green-700 dark:text-green-400">
          Available for Internships
        </span>

      </div>

      {/* Greeting */}

      <p className="text-lg font-semibold tracking-wide text-blue-600 dark:text-blue-400">
        👋 Hello, I'm
      </p>

      {/* Name */}

      <h1
        className="
          mt-5
          text-5xl
          font-extrabold
          leading-tight
          tracking-tight

          text-slate-900
          dark:text-white

          sm:text-6xl
          lg:text-7xl
        "
      >
        Hanwant{" "}

        <span className="gradient-text">
          Singh
        </span>

      </h1>

      {/* Role */}

      <h2
        className="
          mt-7
          text-2xl
          font-bold
          leading-relaxed

          text-slate-700
          dark:text-slate-300

          sm:text-3xl
        "
      >
        MCA Data Science Student
        <br />
        Full Stack Developer
      </h2>

      {/* Description */}

      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-9

          text-slate-600
          dark:text-slate-400
        "
      >
        I build modern, scalable and responsive web applications using{" "}

        <strong className="text-slate-900 dark:text-white">
          Next.js,
          React,
          TypeScript,
          Node.js
        </strong>

        {" "}while continuously expanding my knowledge in{" "}

        <strong className="text-slate-900 dark:text-white">
          Data Science,
          Artificial Intelligence,
          Machine Learning,
          Python
          and SQL.
        </strong>

        <br />
        <br />

        My mission is to create software that combines beautiful user
        experiences with intelligent data-driven solutions capable of
        solving real-world problems.

      </p>

      {/* Buttons */}

      <div className="mt-12 flex flex-wrap gap-5">

        <Button
          className="gap-3 px-8 py-4"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
          }}
        >
          Hire Me
          <ArrowRight size={20} />
        </Button>

        <Button
          href="/resume.pdf"
          variant="secondary"
          className="gap-3 px-8 py-4"
        >
          <Download size={20} />

          Download Resume

        </Button>

      </div>

      {/* Social */}

      <div className="mt-10">

        <HeroSocial />

      </div>

      {/* Stats */}

      <div className="mt-14">

        <HeroStats />

      </div>

    </div>
  );
}