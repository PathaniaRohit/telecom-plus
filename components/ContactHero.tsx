import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { PageHeroContent } from "@/lib/data";

type ContactHeroProps = {
  content: PageHeroContent;
};

export function ContactHero({ content }: ContactHeroProps) {
  return (
    <section className="relative isolate flex min-h-[480px] flex-col justify-end overflow-hidden bg-ink text-white lg:h-[562px]">
      <Image
        src={content.image.src}
        alt={content.image.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="-z-20 object-cover motion-safe:animate-settle"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-r from-ink/70 via-ink/30 to-ink/10"
      />

      <div className="container-page pt-40 pb-16 lg:pb-[152px]">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <h1 className="mt-2.5 max-w-[600px] text-display whitespace-pre-line">
          {content.heading}
        </h1>
        <p className="mt-5 max-w-[600px] text-body text-white/80">
          {content.body}
        </p>
      </div>
    </section>
  );
}
