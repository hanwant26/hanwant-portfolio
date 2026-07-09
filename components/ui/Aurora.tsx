"use client";

export default function Aurora() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blue Glow */}

      <div
        className="
          absolute
          left-[-10%]
          top-[-10%]
          h-[500px]
          w-[500px]
          animate-[pulse_8s_ease-in-out_infinite]
          rounded-full
          bg-blue-500/20
          blur-[140px]
          dark:bg-blue-600/20
        "
      />

      {/* Cyan Glow */}

      <div
        className="
          absolute
          right-[-10%]
          top-[10%]
          h-[450px]
          w-[450px]
          animate-[pulse_10s_ease-in-out_infinite]
          rounded-full
          bg-cyan-400/20
          blur-[150px]
          dark:bg-cyan-500/20
        "
      />

      {/* Purple Glow */}

      <div
        className="
          absolute
          bottom-[-15%]
          left-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          animate-[pulse_12s_ease-in-out_infinite]
          rounded-full
          bg-indigo-500/15
          blur-[170px]
          dark:bg-indigo-600/20
        "
      />

      {/* Extra Glow */}

      <div
        className="
          absolute
          bottom-10
          right-20
          h-60
          w-60
          animate-[pulse_9s_ease-in-out_infinite]
          rounded-full
          bg-sky-400/20
          blur-[120px]
        "
      />

    </div>
  );
}