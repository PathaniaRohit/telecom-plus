import Image from "next/image";
import { ArrowUpRightIcon, MapPinIcon } from "@/components/ui/icons";
import type { Office } from "@/lib/data";

type OfficeMapProps = {
  office: Office;
};

export function OfficeMap({ office }: OfficeMapProps) {
  return (
    <section aria-label="Our office" className="relative lg:h-[613px]">
      <div className="relative h-[360px] overflow-hidden md:h-[480px] lg:h-full">
        <Image
          src={office.map.src}
          alt={office.map.alt}
          fill
          sizes="100vw"
          className="object-cover object-[45.5%_44%]"
        />
        <span className="absolute top-[44%] left-[45.5%] -translate-x-1/2 -translate-y-full">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 -ml-3 size-6 translate-y-1/2 rounded-full bg-brand/40 motion-safe:animate-ping-soft"
          />
          <MapPinIcon className="relative size-[42px] text-brand drop-shadow-md" />
        </span>
      </div>

      <div className="container-page relative -mt-16 lg:absolute lg:inset-0 lg:mt-0 lg:flex lg:items-center lg:justify-end lg:pr-[115px]">
        <div className="w-full rounded-[5px] border border-brand bg-surface p-5 shadow-float sm:max-w-[370px]">
          <h2 className="text-body">Address</h2>
          <address className="mt-[15px] text-small text-ink/60 not-italic">
            {office.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={office.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="link-wipe mt-5 inline-flex min-h-6 items-center gap-1.5 text-note text-brand-ink"
          >
            Get Direction
            <ArrowUpRightIcon className="size-2.5" />
          </a>

          <h2 className="mt-6 text-body">Business Hours</h2>
          <p className="mt-[15px] text-small text-ink/60">
            {office.hours.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
