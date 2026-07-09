import {
  Mail,
  Download,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-32

        dark:bg-slate-900
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[420px]
            w-[420px]
            -translate-x-1/2
            rounded-full

            bg-blue-500/15
            blur-[130px]

            dark:bg-blue-700/20
          "
        />

        <div
          className="
            absolute
            -left-24
            bottom-10

            h-80
            w-80

            rounded-full

            bg-cyan-400/10
            blur-[120px]

            dark:bg-cyan-500/20
          "
        />

        <div
          className="
            absolute
            -right-24
            top-20

            h-80
            w-80

            rounded-full

            bg-indigo-400/10
            blur-[120px]

            dark:bg-indigo-600/20
          "
        />

      </div>

      <Container>

        <div
          className="
            relative
            mx-auto
            max-w-5xl

            overflow-hidden

            rounded-[36px]

            border
            border-slate-200

            bg-white/90

            px-8
            py-14

            shadow-[0_25px_80px_rgba(15,23,42,0.08)]

            backdrop-blur-xl

            dark:border-slate-700
            dark:bg-slate-950/80

            sm:px-12
            lg:px-20
            lg:py-20
          "
        >

          {/* Decorative Icons */}

          <Sparkles
            size={28}
            className="absolute left-10 top-10 text-blue-200 dark:text-blue-600"
          />

          <Sparkles
            size={28}
            className="absolute bottom-10 right-10 text-blue-200 dark:text-blue-600"
          />

          {/* Badge */}

          <div className="flex justify-center">

            <span
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-blue-100

                px-6
                py-3

                text-sm
                font-semibold

                tracking-wide

                text-blue-700

                dark:bg-blue-950
                dark:text-blue-300
              "
            >
              🚀 Let's Build Something Amazing
            </span>

          </div>

          {/* Heading */}

          <h2
            className="
              mx-auto
              mt-10
              max-w-4xl

              text-center

              text-4xl
              font-extrabold

              leading-tight
              tracking-tight

              text-slate-900

              dark:text-white

              sm:text-5xl
              lg:text-6xl
            "
          >
            Let's{" "}
            <span className="gradient-text">
              Work Together
            </span>
          </h2>

          {/* Divider */}

          <div className="mt-8 flex justify-center">

            <div className="flex items-center gap-4">

              <div className="h-[2px] w-20 rounded-full bg-blue-200 dark:bg-blue-800"></div>

              <div className="h-3 w-3 rounded-full bg-blue-600"></div>

              <div className="h-[2px] w-20 rounded-full bg-blue-200 dark:bg-blue-800"></div>

            </div>

          </div>

          {/* Description */}

          <div className="mx-auto mt-10 max-w-4xl text-center">

            <p
              className="
                text-lg
                leading-9

                text-slate-600

                dark:text-slate-300

                sm:text-xl
              "
            >
              I'm currently looking for
              <strong className="text-slate-900 dark:text-white">
                {" "}Internships
              </strong>,
              freelance opportunities and exciting collaborations in
              <strong className="text-slate-900 dark:text-white">
                {" "}Full Stack Development,
                Data Science and AI.
              </strong>
            </p>

            <p
              className="
                mt-6

                text-lg
                leading-9

                text-slate-600

                dark:text-slate-300

                sm:text-xl
              "
            >
              If you have an opportunity or just want to connect,
              I'd be happy to hear from you.
            </p>

          </div>

          {/* Buttons */}

          <div
            className="
              mt-14

              flex
              flex-col

              items-center
              justify-center

              gap-5

              sm:flex-row
            "
          >

            <Button
              href="mailto:hanwantsingh1808@gmail.com"
              className="gap-3 px-8 py-4"
            >
              <Mail size={20} />
              Get in Touch
              <ArrowRight size={18} />
            </Button>

            <Button
              href="/resume.pdf"
              variant="secondary"
              className="gap-3 px-8 py-4"
            >
              <Download size={20} />
              Download Resume
            </Button>

          </div>

          {/* Bottom */}

          <div className="mt-14">

            <p className="text-center text-base font-medium text-slate-500 dark:text-slate-400">

              Available for Internships • Freelance • Collaborations

            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}