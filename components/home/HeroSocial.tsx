import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/hanwant26",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/hanwantsingh",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:hanwantsingh1808@gmail.com",
    label: "Email",
  },
];

export default function HeroSocial() {
  return (
    <div className="flex flex-wrap items-center gap-5">

      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("http") ? "_blank" : undefined}
            rel={
              social.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            aria-label={social.label}
            className="
              group
              flex
              h-14
              w-14
              items-center
              justify-center

              rounded-2xl

              border
              border-slate-200

              bg-white/90
              text-slate-700

              shadow-lg
              backdrop-blur-xl

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-blue-500
              hover:bg-blue-600
              hover:text-white
              hover:shadow-2xl
              hover:shadow-blue-500/20

              dark:border-slate-700
              dark:bg-slate-900/90
              dark:text-slate-300

              dark:hover:border-blue-500
              dark:hover:bg-blue-500
              dark:hover:text-white
            "
          >
            <Icon
              size={22}
              className="
                transition-transform
                duration-300
                group-hover:scale-125
                group-hover:rotate-6
              "
            />
          </a>
        );
      })}

    </div>
  );
}