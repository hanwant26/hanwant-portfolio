import {
  Brain,
  Database,
  Code2,
  Cpu,
  Globe,
  BarChart3,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";

import FadeUp from "@/components/animations/FadeUp";
import Stagger from "@/components/animations/Stagger";

const learning = [
  {
    title: "Next.js",
    icon: Globe,
    progress: 90,
    color: "bg-blue-600",
  },
  {
    title: "TypeScript",
    icon: Code2,
    progress: 80,
    color: "bg-cyan-600",
  },
  {
    title: "Python",
    icon: Brain,
    progress: 85,
    color: "bg-green-600",
  },
  {
    title: "SQL",
    icon: Database,
    progress: 80,
    color: "bg-orange-600",
  },
  {
    title: "Machine Learning",
    icon: Cpu,
    progress: 60,
    color: "bg-purple-600",
  },
  {
    title: "Artificial Intelligence",
    icon: BarChart3,
    progress: 55,
    color: "bg-pink-600",
  },
];

export default function CurrentlyLearning() {
  return (
    <section
      id="learning"
      className="bg-slate-50 py-28 dark:bg-slate-900"
    >
      <Container>

        <FadeUp>

          <SectionHeading
            eyebrow="Currently Learning"
            title="Growing Every Day"
            description="I believe learning never stops. I'm continuously improving my skills in modern web development, Data Science and Artificial Intelligence."
          />

        </FadeUp>

        <Stagger className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {learning.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeUp
                key={item.title}
                delay={index * 0.1}
              >
                <Card>

                  <div className="flex items-center justify-between">

                    <div
                      className="
                        rounded-2xl
                        bg-blue-100
                        p-4
                        text-blue-600

                        dark:bg-blue-900/30
                        dark:text-blue-400
                      "
                    >
                      <Icon size={28} />
                    </div>

                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {item.progress}%
                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

                    <div
                      className={`${item.color} h-full rounded-full transition-all duration-700`}
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />

                  </div>

                  <p className="mt-4 text-slate-600 dark:text-slate-300">
                    Continuously learning and improving through projects,
                    practice and real-world development.
                  </p>

                </Card>
              </FadeUp>
            );
          })}

        </Stagger>

      </Container>
    </section>
  );
}