import { GraduationCap, Calendar } from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    specialization: "Data Science",
    college: "Lovely Professional University",
    duration: "2026 - Present",
    status: "Currently Pursuing",
    color:
      "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "",
    college:
      "Modern College of Arts, Science and Commerce (Savitribai Phule Pune University)",
    duration: "Completed",
    status: "Graduated",
    color:
      "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-32

        dark:bg-slate-900
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            right-0
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-blue-500/5
            blur-[120px]

            dark:bg-blue-600/10
          "
        />

      </div>

      <Container>

        <FadeUp>

          <SectionHeading
            eyebrow="Education"
            title="My Academic Journey"
            description="My educational journey has provided a strong foundation in Computer Applications while allowing me to specialize in Data Science, Artificial Intelligence and modern software development."
          />

        </FadeUp>

        <Stagger className="relative mx-auto mt-20 max-w-5xl">

          {/* Timeline */}

          <div
            className="
              absolute
              left-6
              top-0
              h-full
              w-1

              rounded-full

              bg-gradient-to-b
              from-blue-600
              via-cyan-500
              to-indigo-600
            "
          />

          {education.map((item, index) => (
            <FadeUp
              key={item.degree}
              delay={index * 0.2}
            >
              <div className="relative mb-14 pl-20">

                {/* Timeline Circle */}

                <div
                  className="
                    absolute
                    left-0
                    top-8

                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-full

                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500

                    text-white

                    shadow-xl
                    ring-4
                    ring-white

                    dark:ring-slate-900
                  "
                >
                  <GraduationCap size={24} />
                </div>

                {/* Card */}

                <Card>

                  <span
                    className={`inline-block rounded-full px-4 py-2 text-sm font-semibold ${item.color}`}
                  >
                    {item.status}
                  </span>

                  <h3 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
                    {item.degree}
                  </h3>

                  {item.specialization && (
                    <p className="mt-3 text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {item.specialization}
                    </p>
                  )}

                  <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                    {item.college}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-slate-500 dark:text-slate-400">

                    <Calendar size={20} />

                    <span className="font-medium">
                      {item.duration}
                    </span>

                  </div>

                </Card>

              </div>
            </FadeUp>
          ))}

        </Stagger>

      </Container>
    </section>
  );
}