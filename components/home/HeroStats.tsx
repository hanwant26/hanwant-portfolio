import {
  Briefcase,
  Code2,
  GraduationCap,
} from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "5+",
    title: "Projects",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
  },
  {
    icon: Code2,
    value: "15+",
    title: "Technologies",
    color: "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-400",
  },
  {
    icon: GraduationCap,
    value: "MCA",
    title: "Data Science",
    color: "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl

              border
              border-slate-200

              bg-white/90
              p-6

              shadow-lg
              backdrop-blur-xl

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-blue-300
              hover:shadow-2xl
              hover:shadow-blue-500/10

              dark:border-slate-700
              dark:bg-slate-900/90
              dark:hover:border-blue-500
            "
          >
            {/* Background Glow */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-blue-500/0
                via-blue-500/0
                to-blue-500/5
                opacity-0
                transition-opacity
                duration-500

                group-hover:opacity-100
              "
            />

            {/* Icon */}

            <div
              className={`
                inline-flex
                rounded-2xl
                p-4
                transition-transform
                duration-300

                group-hover:scale-110

                ${item.color}
              `}
            >
              <Icon size={28} />
            </div>

            {/* Value */}

            <h3
              className="
                mt-5
                text-3xl
                font-extrabold

                text-slate-900
                dark:text-white
              "
            >
              {item.value}
            </h3>

            {/* Title */}

            <p
              className="
                mt-2
                text-slate-600
                dark:text-slate-400
              "
            >
              {item.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}