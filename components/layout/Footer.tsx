import Container from "@/components/ui/Container";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-slate-800
        bg-slate-950
        text-white
      "
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-blue-600/15
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-80
            w-80
            rounded-full
            bg-cyan-500/10
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-32
            top-10
            h-80
            w-80
            rounded-full
            bg-indigo-500/10
            blur-[150px]
          "
        />

      </div>

      <Container>

        <div className="relative py-24">

          {/* Main Content */}

          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

            {/* Logo */}

            <h2
              className="
                text-5xl
                font-extrabold
                tracking-tight
                md:text-6xl
              "
            >
              Hanwant{" "}

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  to-cyan-300
                  bg-clip-text
                  text-transparent
                "
              >
                Singh
              </span>

            </h2>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-9
                text-slate-300
              "
            >
              MCA Data Science Student & Full Stack Developer passionate
              about building modern web applications, AI-powered
              solutions, and solving real-world problems through
              technology.
            </p>

            {/* Social Section */}

            <div className="mt-16 flex flex-col items-center">

              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.45em]
                  text-slate-400
                "
              >
                LET&apos;S CONNECT
              </p>

              {/* Icons */}

              <div className="mt-8 flex items-center justify-center gap-8">

                <SocialButton
                  href="https://github.com/hanwant26"
                  icon={<FaGithub size={24} />}
                />

                <SocialButton
                  href="https://linkedin.com/in/hanwantsingh"
                  icon={<FaLinkedin size={24} />}
                />

                <SocialButton
                  href="mailto:hanwantsingh1808@gmail.com"
                  icon={<FaEnvelope size={24} />}
                />

              </div>

            </div>

          </div>

          {/* Divider */}

          <div
            className="
              mx-auto
              mt-20
              mb-10
              h-px
              max-w-5xl
              bg-gradient-to-r
              from-transparent
              via-slate-700
              to-transparent
            "
          />

          {/* Bottom */}

          <div
            className="
              mx-auto
              flex
              max-w-5xl
              flex-col
              items-center
              justify-between
              gap-5
              text-center
              text-sm
              text-slate-400
              md:flex-row
            "
          >

            <p>
              © {year} Hanwant Singh. All rights reserved.
            </p>

            <p>
              Built with{" "}
              <span className="text-red-500">❤️</span>{" "}
              using Next.js, React & Tailwind CSS.
            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
}

function SocialButton({
  href,
  icon,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label="Social Link"
      className="
        group
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-700
        bg-slate-800
        text-slate-300
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:bg-blue-600
        hover:text-white
        hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)]
      "
    >
      <span
        className="
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </span>
    </a>
  );
}