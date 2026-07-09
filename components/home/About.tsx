import {
  User,
  GraduationCap,
  Target,
  MapPin,
  Brain,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

export default function About() {
  return (
    <section
      id="about"
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
            left-1/2
            top-0
            h-[500px]
            w-[500px]
            -translate-x-1/2
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
            eyebrow="About Me"
            title={
              <>
                Passionate About{" "}
                <span className="gradient-text">
                  Data Science
                </span>
              </>
            }
            description="I enjoy solving real-world problems using technology, continuously learning new skills, and building modern web applications while exploring Artificial Intelligence and Machine Learning."
          />

        </FadeUp>

        <Stagger className="grid gap-8 lg:grid-cols-2">

          {/* Left Card */}

          <FadeUp>

            <Card>

              <div className="mb-8 flex items-center gap-4">

                <div
                  className="
                    rounded-2xl
                    bg-blue-100
                    p-4
                    text-blue-600

                    dark:bg-blue-950
                    dark:text-blue-400
                  "
                >
                  <User size={26} />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Hello!
                </h3>

              </div>

              <div className="space-y-6 text-lg leading-9 text-slate-600 dark:text-slate-300">

                <p>
                  My name is <strong className="text-slate-900 dark:text-white">Hanwant Singh</strong>.
                </p>

                <p>
                  I completed my{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Bachelor of Computer Applications (BCA)
                  </strong>{" "}
                  and I'm currently pursuing a{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Master of Computer Applications (MCA)
                  </strong>{" "}
                  in Data Science at{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Lovely Professional University.
                  </strong>
                </p>

                <p>
                  I enjoy building modern web applications using{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Next.js, React, TypeScript, Node.js, Tailwind CSS,
                    JavaScript and Python.
                  </strong>
                </p>

                <p>
                  My long-term goal is to become a{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Data Scientist
                  </strong>{" "}
                  while creating intelligent software powered by AI,
                  Machine Learning and Data Science.
                </p>

              </div>

            </Card>

          </FadeUp>

          {/* Right Card */}

          <FadeUp delay={0.2}>

            <Card>

              <h3 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
                Quick Information
              </h3>

              <div className="space-y-5">

                <Info
                  icon={<GraduationCap />}
                  title="Education"
                  value="MCA (Data Science)"
                />

                <Info
                  icon={<Target />}
                  title="Career Goal"
                  value="Aspiring Data Scientist"
                />

                <Info
                  icon={<Brain />}
                  title="Current Focus"
                  value="AI • Machine Learning • Python • SQL"
                />

                <Info
                  icon={<MapPin />}
                  title="Location"
                  value="India"
                />

              </div>

            </Card>

          </FadeUp>

        </Stagger>

      </Container>
    </section>
  );
}

interface InfoProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function Info({
  icon,
  title,
  value,
}: InfoProps) {
  return (
    <div
      className="
        group
        flex
        items-center
        gap-5

        rounded-2xl

        border
        border-slate-200

        bg-slate-50/80
        p-5

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-blue-300
        hover:bg-blue-50

        dark:border-slate-700
        dark:bg-slate-900
        dark:hover:border-blue-500
        dark:hover:bg-slate-800
      "
    >

      <div
        className="
          rounded-2xl

          bg-blue-100
          p-3

          text-blue-600

          transition-transform
          duration-300

          group-hover:scale-110

          dark:bg-blue-950
          dark:text-blue-400
        "
      >
        {icon}
      </div>

      <div>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          {title}
        </p>

        <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">
          {value}
        </h4>

      </div>

    </div>
  );
}