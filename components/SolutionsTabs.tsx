"use client";

import { useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { FadeSwap } from "@/components/ui/FadeSwap";
import type { Solution } from "@/lib/data";

const TAB_ID = "solution-tab-";

export function SolutionsTabs({
  solutions,
}: {
  solutions: readonly Solution[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = solutions[activeIndex];

  if (!active) return null;

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const last = solutions.length - 1;
    let next: number;
    switch (event.key) {
      case "ArrowRight":
        next = activeIndex === last ? 0 : activeIndex + 1;
        break;
      case "ArrowLeft":
        next = activeIndex === 0 ? last : activeIndex - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActiveIndex(next);
    document.getElementById(`${TAB_ID}${solutions[next]?.id}`)?.focus();
  }

  return (
    <div className="mx-auto max-w-[1210px] bg-panel p-2.5 shadow-card">
      <div
        role="tablist"
        aria-label="Solutions"
        onKeyDown={onKeyDown}
        className="flex overflow-x-auto"
      >
        {solutions.map((solution, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={solution.id}
              type="button"
              role="tab"
              id={`${TAB_ID}${solution.id}`}
              aria-selected={selected}
              aria-controls="solution-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              className={`h-[50px] shrink-0 rounded-t-[20px] px-6 text-small whitespace-nowrap transition-colors duration-300 lg:flex-1 lg:px-2 ${
                selected ? "bg-surface text-ink" : "text-ink/60 hover:text-ink"
              }`}
            >
              <span
                className={`relative inline-flex h-full items-center px-1 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:bg-brand after:transition-transform after:duration-500 after:ease-out-expo motion-reduce:after:transition-none ${
                  selected ? "after:scale-x-100" : "after:scale-x-0"
                }`}
              >
                {solution.tab}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="solution-panel"
        aria-labelledby={`${TAB_ID}${active.id}`}
        tabIndex={0}
        className="bg-surface"
      >
        <FadeSwap swapKey={active.id} className="grid lg:grid-cols-[1fr_500px]">
          <div className="px-5 py-10 sm:px-[30px] lg:pt-[55px] lg:pb-[50px]">
            <p className="label-micro text-brand-ink">{active.eyebrow}</p>
            <h3 className="mt-1 text-title">{active.heading}</h3>
            <p className="mt-4 max-w-[490px] text-small text-ink/60">
              {active.body}
            </p>

            <ul className="mt-12 grid max-w-[620px] gap-5 sm:grid-cols-2 lg:mt-[64px]">
              {active.features.map((feature) => (
                <li
                  key={feature.title}
                  className="min-h-[90px] border-l-2 border-brand bg-tint px-[18px] py-5 transition-[translate,background-color] duration-500 ease-out-expo hover:-translate-y-1 hover:bg-sky/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <h4 className="text-small">{feature.title}</h4>
                  <p className="mt-1.5 text-note text-ink/60">
                    {feature.description}
                  </p>
                </li>
              ))}
            </ul>

            <ArrowButton
              href={active.cta.href}
              variant="dark"
              className="mt-10"
            >
              {active.cta.label}
            </ArrowButton>
          </div>

          <div className="group/image relative h-72 overflow-hidden sm:h-96 lg:h-auto lg:min-h-[560px]">
            <Image
              src={active.image.src}
              alt={active.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover/image:scale-105 motion-reduce:transition-none"
            />
          </div>
        </FadeSwap>
      </div>
    </div>
  );
}
