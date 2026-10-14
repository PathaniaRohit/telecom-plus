import { Eyebrow } from "@/components/ui/Eyebrow";
import { MapPinIcon } from "@/components/ui/icons";
import type { SectionIntro } from "@/lib/data";

type ServiceAreasProps = {
  intro: SectionIntro;
  areas: readonly string[];
};

export function ServiceAreas({ intro, areas }: ServiceAreasProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -right-60 -bottom-80 -z-10 size-[740px] rounded-full bg-radial from-sky/70 via-lilac/20 to-transparent to-70%"
      />
      <div className="container-page pt-16 pb-20 lg:pt-[90px] lg:pb-[100px]">
        <div className="reveal">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h2 className="mt-[15px] max-w-[840px] text-title">
            {intro.heading}
          </h2>
          <p className="mt-5 max-w-[810px] text-body text-ink/60">
            {intro.body}
          </p>
        </div>

        <ul className="mt-10 grid gap-x-9 gap-y-[25px] sm:grid-cols-2 xl:grid-cols-4">
          {areas.map((area) => (
            <li
              key={area}
              className="reveal flex items-center gap-1 rounded-r-[5px] rounded-l-[1px] border-l-2 border-brand bg-brand/5 py-2.5 pr-3 pl-2 min-h-[55px] text-subhead"
            >
              <MapPinIcon className="size-7 shrink-0 text-brand" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
