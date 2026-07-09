import {
  Code2,
  ExternalLink,
  Star,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "ResumeAI",
    featured: true,
    description:
      "An ATS-friendly Resume Builder featuring live preview, multiple resume templates, PDF export, dark mode, and a modern responsive interface built using the latest web technologies.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    github: "https://github.com/hanwant26/resume-ai",
    live: "#",
  },
  {
    title: "Personal Portfolio",
    featured: false,
    description:
      "A modern developer portfolio showcasing my skills, projects, GitHub activity, experience, and education with beautiful animations and dark mode support.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/hanwant26/hanwant-portfolio",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-28 dark:bg-slate-900"
    >
      <Container>

        <SectionHeading
          eyebrow="Projects"
          title="Featured Projects"
          description="Here are some projects that demonstrate my Full Stack Development and Data Science journey."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {projects.map((project) => (
            <Card key={project.title}>

              {project.featured && (
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
                  <Star size={16} />
                  Featured Project
                </div>
              )}

              {/* Fake Screenshot */}

              <div className="mb-8 flex h-56 items-center justify-center rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 dark:border-slate-700">

                <span className="text-3xl font-bold text-white">
                  {project.title}
                </span>

              </div>

              {/* Title */}

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                {project.title}
              </h3>

              {/* Description */}

              <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="mt-8 flex flex-wrap gap-3">

                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Button href={project.github}>
                  <Code2 size={18} />
                  GitHub
                </Button>

                <Button
                  href={project.live}
                  variant="secondary"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </Button>

              </div>

            </Card>
          ))}

        </div>

      </Container>
    </section>
  );
}