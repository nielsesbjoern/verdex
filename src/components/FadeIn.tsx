"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  /** Stagger delay in seconds (typ. `i * 0.1` for 100ms cascade). */
  delay?: number;
  /** Distance to travel on the y-axis. Defaults to 24px (editorial). */
  y?: number;
  /** Total transition duration in seconds. */
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
} & Omit<HTMLMotionProps<"div">, "children">;

// Editorial easing — long, soft, premium (ease-out-expo).
const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  className,
  as = "div",
  ...rest
}: FadeInProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EDITORIAL_EASE }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
