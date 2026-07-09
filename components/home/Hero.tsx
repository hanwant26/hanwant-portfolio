import Container from "@/components/ui/Container";
import Aurora from "@/components/ui/Aurora";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

import FadeLeft from "@/components/animations/FadeLeft";
import FadeRight from "@/components/animations/FadeRight";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-100

        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950

        pt-28
        pb-24
        lg:pt-36
        lg:pb-32
      "
    >
      {/* Aurora Background */}

      <Aurora />

      {/* Extra Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-10
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-blue-500/10
            blur-[140px]

            dark:bg-blue-600/15
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-cyan-400/10
            blur-[120px]

            dark:bg-cyan-500/10
          "
        />

        <div
          className="
            absolute
            -right-32
            top-20
            h-[350px]
            w-[350px]
            rounded-full
            bg-indigo-500/10
            blur-[120px]

            dark:bg-indigo-500/15
          "
        />

      </div>

      <Container>

        <div
          className="
            relative
            z-10
            grid
            items-center
            gap-20
            lg:grid-cols-12
          "
        >

          {/* Left Content */}

          <FadeLeft className="lg:col-span-7">

            <HeroContent />

          </FadeLeft>

          {/* Right Image */}

          <FadeRight className="flex justify-center lg:col-span-5 lg:justify-end">

            <HeroImage />

          </FadeRight>

        </div>

      </Container>
    </section>
  );
}