"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-3xl
        bg-white
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Project Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-slate-600 leading-7">
          {project.description}
        </p>

        {/* Technology Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-sm
                font-medium
                text-blue-700
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">

          {/* GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-slate-900
              px-5
              py-3
              text-white
              font-medium
              transition-all
              duration-300
              hover:bg-slate-700
            "
          >
            <FaGithub size={18} />
            GitHub
          </a>

          {/* Live Demo */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-5
              py-3
              text-white
              font-medium
              transition-all
              duration-300
              hover:bg-blue-700
            "
          >
            <ExternalLink size={18} />
            Live Demo
          </a>

        </div>

      </div>
    </div>
  );
}