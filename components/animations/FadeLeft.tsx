"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeLeftProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeLeft({
  children,
  delay = 0,
  className = "",
}: FadeLeftProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: -60,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}