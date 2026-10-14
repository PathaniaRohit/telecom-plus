"use client";

import type { ReactNode } from "react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  useReducedMotion,
} from "motion/react";
import * as m from "motion/react-m";

type FadeSwapProps = {
  swapKey: string;
  className?: string;
  children: ReactNode;
};

export function FadeSwap({ swapKey, className, children }: FadeSwapProps) {
  const reduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <AnimatePresence mode="wait" initial={false}>
        <m.div
          key={swapKey}
          initial={{ opacity: 0, y: reduce ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
          className={className}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
