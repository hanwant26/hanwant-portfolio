import {
  Briefcase,
  GraduationCap,
  Code2,
  Calendar,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const experiences = [
  {
    title: "MCA Student (Data Science)",
    company: "Lovely Professional University",
    duration: "2026 - Present",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    description:
      "Currently pursuing MCA in Data Science while strengthening my knowledge of Artificial Intelligence, Machine Learning, Python, SQL and modern Full Stack Development.",
    skills: [
      "Python",
      "Machine Learning",
      "AI",
      "SQL",
      "Next.js",
    ],
  },

  {
    title: "Full Stack Developer",
    company: "ResumeAI (Personal Project)",
    duration: "2025 - Present",
    icon: Code2,
    color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    description:
      "Developing ResumeAI, an ATS-friendly resume builder featuring real-time preview, PDF export, multiple templates, authentication and modern responsive UI.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Supabase",
      "Tailwind CSS",
    ],
  },

  {
    title: "Bachelor of Computer Applications",
    company: "Modern College of Arts, Science and Commerce",
    duration: "Completed",
    icon: Briefcase,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    description:
      "Completed BCA while building projects using PHP, MySQL, JavaScript, Python and XAMPP. Developed a strong foundation in software development and databases.",
    skills: [
      "PHP",
      "MySQL",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white py-28 dark:bg-slate-950"
    >
      <Container>

        <FadeUp>

          <SectionHeading
            eyebrow="Experience"
            title="My Journey"
            description="Although I'm currently a student, I've continuously built projects and expanded my technical skills through practical learning and real-world development."
          />

        </FadeUp>

        <Stagger className="relative mx-auto mt-20 max-w-5xl">

          {/* Timeline */}

          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-blue-200 dark:bg-slate-700"></div>

          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp
                key={item.title}
                delay={index * 0.2}
              >
                <div className="relative mb-12 pl-20">

                  {/* Timeline Icon */}

                  <div className="absolute left-0 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">

                    <Icon size={22} />

                  </div>

                  <Card>

                    <div className="flex flex-wrap items-center justify-between gap-4">

                      <div>

                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-blue-600 dark:text-blue-400">
                          {item.company}
                        </p>

                      </div>

                      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">

                        <Calendar size={18} />

                        {item.duration}

                      </div>

                    </div>

                    <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">

                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-blue-500 dark:hover:bg-slate-700"
                        >
                          {skill}
                        </span>
                      ))}

                    </div>

                  </Card>

                </div>
              </FadeUp>
            );
          })}

        </Stagger>

      </Container>
    </section>
  );
}