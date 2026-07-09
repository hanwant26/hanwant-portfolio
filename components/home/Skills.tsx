import {
  Code2,
  Monitor,
  Server,
  Database,
  Brain,
  Wrench,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const skills = [
  {
    title: "Programming",
    icon: Code2,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
    items: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    color:
      "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-400",
    items: [
      "HTML",
      "CSS",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color:
      "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
    items: [
      "Node.js",
      "PHP",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    icon: Database,
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400",
    items: [
      "MySQL",
      "Supabase",
    ],
  },
  {
    title: "Data Science",
    icon: Brain,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-Learn",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color:
      "bg-cyan-100 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "XAMPP",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-white
        py-32

        dark:bg-slate-950
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-0
            top-20
            h-[450px]
            w-[450px]
            rounded-full
            bg-cyan-500/5
            blur-[120px]

            dark:bg-cyan-500/10
          "
        />

      </div>

      <Container>

        <FadeUp>

          <SectionHeading
            eyebrow="Skills"
            title="Technical Skills"
            description="These are the technologies, frameworks and tools I use to build modern applications while continuously expanding my expertise in Data Science and Artificial Intelligence."
          />

        </FadeUp>

        <Stagger className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <FadeUp
                key={skill.title}
                delay={index * 0.08}
              >
                <Card>

                  {/* Icon */}

                  <div
                    className={`
                      inline-flex
                      rounded-2xl
                      p-4
                      transition-transform
                      duration-300

                      group-hover:scale-110

                      ${skill.color}
                    `}
                  >
                    <Icon size={30} />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                    {skill.title}
                  </h3>

                  {/* Skills */}

                  <div className="mt-8 flex flex-wrap gap-3">

                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full

                          border
                          border-slate-200

                          bg-slate-50

                          px-4
                          py-2

                          text-sm
                          font-medium

                          text-slate-700

                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-blue-300
                          hover:bg-blue-50
                          hover:text-blue-700

                          dark:border-slate-700
                          dark:bg-slate-900
                          dark:text-slate-300

                          dark:hover:border-blue-500
                          dark:hover:bg-blue-950
                          dark:hover:text-blue-300
                        "
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </Card>

              </FadeUp>
            );
          })}

        </Stagger>

      </Container>
    </section>
  );
}