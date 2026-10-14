import { Eyebrow } from "@/components/ui/Eyebrow";
import type { AboutPoint } from "@/lib/data";

type AboutProps = {
  content: { eyebrow: string; statement: string };
  points: readonly AboutPoint[];
};

export function About({ content, points }: AboutProps) {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden pb-28 lg:pb-[230px]"
    >
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-40 -z-10 size-[720px] rounded-full bg-radial from-mist via-mist/40 to-transparent to-70%"
      />

      <div className="container-page">
        <div className="reveal">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-[820px] bg-linear-to-r from-ink from-15% to-periwinkle bg-clip-text text-title leading-[1.16] text-transparent">
            {content.statement}
          </h2>
        </div>

        <div className="mt-12 lg:mt-2 lg:ml-auto lg:w-[41%] lg:min-w-[520px]">
          <ol>
            {points.map((point, index) => (
              <li
                key={point.title}
                className="reveal group grid gap-3 border-b border-ink/10 px-2.5 py-5 transition-colors duration-500 last:border-b-0 hover:bg-tint/70 sm:grid-cols-[1fr_1fr] sm:gap-8"
              >
                <div>
                  <p className="text-note text-brand-ink">
                    /{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-body transition-transform duration-500 ease-out-expo group-hover:translate-x-1.5 motion-reduce:transition-none">
                    {point.title}
                  </h3>
                </div>
                <p className="text-small text-ink/60">{point.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
