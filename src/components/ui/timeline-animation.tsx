"use client";

import { motion, useInView, type Variants } from "framer-motion";
import React, { useRef, type ElementType, type RefObject } from "react";
import { cn } from "@/lib/utils";

type TimelineContentProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  animationNum?: number;
  customVariants?: Variants;
  timelineRef?: RefObject<HTMLElement | null>;
};

export function TimelineContent({
  children,
  className,
  as: Component = "div",
  animationNum = 0,
  customVariants,
  timelineRef,
}: TimelineContentProps) {
  const fallbackRef = useRef<HTMLDivElement>(null);
  const targetRef = timelineRef || fallbackRef;
  const isInView = useInView(targetRef, { once: true, margin: "-100px" });

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  const variants = customVariants || defaultVariants;
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      ref={!timelineRef ? fallbackRef : undefined}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
    >
      {children}
    </MotionComponent>
  );
}
