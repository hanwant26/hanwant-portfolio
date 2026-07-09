"use client";

import Image from "next/image";
import {
  GraduationCap,
  Brain,
  MapPin,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}

      <div
        className="
          absolute
          h-[560px]
          w-[560px]
          rounded-full
          bg-blue-500/10
          blur-[140px]

          dark:bg-blue-600/15
        "
      />

      <div
        className="
          absolute
          h-[430px]
          w-[430px]
          rounded-full
          border
          border-blue-200/60
          animate-pulse

          dark:border-blue-900
        "
      />

      <div className="group relative">

        {/* Animated Border */}

        <div
          className="
            absolute
            -inset-1
            rounded-[36px]
            bg-gradient-to-r
            from-blue-600
            via-cyan-400
            to-indigo-600
            opacity-80
            blur-md
            transition-all
            duration-700
            group-hover:blur-xl
          "
        />

        {/* Main Card */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[34px]

            border
            border-white/30

            bg-white/90
            p-3

            shadow-[0_35px_90px_rgba(15,23,42,0.18)]
            backdrop-blur-xl

            transition-all
            duration-500

            group-hover:-translate-y-3

            dark:border-slate-700
            dark:bg-slate-900/90
            dark:shadow-[0_35px_90px_rgba(0,0,0,0.45)]
          "
        >

          <Image
            src="/profile/profile.png"
            alt="Hanwant Singh"
            width={430}
            height={540}
            priority
            className="
              rounded-[28px]
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

        </div>

        {/* Available */}

        <div
          className="
            absolute
            -top-8
            left-1/2
            -translate-x-1/2

            rounded-full

            border
            border-green-200

            bg-white
            px-5
            py-3

            shadow-xl

            dark:border-green-800
            dark:bg-slate-900
          "
        >

          <div className="flex items-center gap-2">

            <BadgeCheck
              size={18}
              className="text-green-600"
            />

            <span className="font-semibold text-green-700 dark:text-green-400">
              Open to Opportunities
            </span>

          </div>

        </div>

        {/* Education */}

        <div
          className="
            absolute
            -left-16
            top-14

            rounded-3xl

            border
            border-slate-200

            bg-white/95
            px-5
            py-4

            shadow-2xl
            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-105

            dark:border-slate-700
            dark:bg-slate-900/95
          "
        >

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-950">

              <GraduationCap
                size={22}
                className="text-blue-600 dark:text-blue-400"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Education
              </p>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                MCA Data Science
              </h3>

            </div>

          </div>

        </div>

        {/* Career */}

        <div
          className="
            absolute
            -right-20
            top-1/2
            -translate-y-1/2

            rounded-3xl

            border
            border-slate-200

            bg-white/95
            px-5
            py-4

            shadow-2xl
            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-105

            dark:border-slate-700
            dark:bg-slate-900/95
          "
        >

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-purple-100 p-3 dark:bg-purple-950">

              <Brain
                size={22}
                className="text-purple-600 dark:text-purple-400"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Career Goal
              </p>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                Data Scientist
              </h3>

            </div>

          </div>

        </div>

        {/* Location */}

        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2

            rounded-3xl

            border
            border-slate-200

            bg-white/95
            px-5
            py-4

            shadow-2xl
            backdrop-blur-xl

            transition-all
            duration-300

            hover:scale-105

            dark:border-slate-700
            dark:bg-slate-900/95
          "
        >

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-green-100 p-3 dark:bg-green-950">

              <MapPin
                size={22}
                className="text-green-600 dark:text-green-400"
              />

            </div>

            <div>

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Location
              </p>

              <h3 className="font-semibold text-slate-900 dark:text-white">
                India
              </h3>

            </div>

          </div>

        </div>

        {/* Sparkles */}

        <Sparkles
          size={30}
          className="
            absolute
            -right-6
            top-4
            text-yellow-400
            animate-pulse
          "
        />

        <Sparkles
          size={24}
          className="
            absolute
            -left-6
            bottom-6
            text-blue-400
            animate-pulse
          "
        />

      </div>

    </div>
  );
}