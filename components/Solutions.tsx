import { SolutionsTabs } from "@/components/SolutionsTabs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SectionIntro, Solution } from "@/lib/data";

type SolutionsProps = {
  intro: SectionIntro;
  solutions: readonly Solution[];
};

export function Solutions({ intro, solutions }: SolutionsProps) {
  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden pt-24 pb-24 lg:pt-[150px] lg:pb-[140px]"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 size-[640px] rounded-full bg-radial from-lilac/35 via-sky/25 to-transparent to-70%"
      />

      <div className="reveal container-page grid gap-6 lg:grid-cols-[700px_1fr]">
        <Eyebrow className="lg:pt-2">{intro.eyebrow}</Eyebrow>
        <div>
          <h2 className="text-title">{intro.heading}</h2>
          <p className="mt-6 max-w-[640px] text-body text-ink/60">
            {intro.body}
          </p>
        </div>
      </div>

      <div className="reveal container-page mt-14 lg:mt-[100px]">
        <SolutionsTabs solutions={solutions} />
      </div>
    </section>
  );
}
