"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: -100,
    y: -100,
  });

  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setClicked(true);
    const mouseUp = () => setClicked(false);

    const handleHover = () => {
      const interactive = document.querySelectorAll(
        "a, button, input, textarea, select"
      );

      interactive.forEach((element) => {
        element.addEventListener("mouseenter", () =>
          setHovering(true)
        );

        element.addEventListener("mouseleave", () =>
          setHovering(false)
        );
      });
    };

    handleHover();

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer Cursor */}

      <div
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]

          rounded-full
          border-2
          border-blue-600

          transition-all
          duration-150

          hidden
          lg:block

          ${
            hovering
              ? "h-14 w-14"
              : "h-10 w-10"
          }

          ${
            clicked
              ? "scale-75"
              : "scale-100"
          }
        `}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />

      {/* Inner Cursor */}

      <div
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]

          hidden
          h-2.5
          w-2.5

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-blue-600

          lg:block
        "
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />
    </>
  );
}