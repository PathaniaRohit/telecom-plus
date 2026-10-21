import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ComparisonTable } from "@/components/ComparisonTable";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Process } from "@/components/Process";
import { ArrowLink } from "@/components/ui/ArrowButton";
import { Card } from "@/components/ui/Card";
import { DetailList } from "@/components/ui/DetailList";
import { Intro } from "@/components/ui/Intro";
import {
  ADDITIONAL_SERVICES,
  ADDITIONAL_SERVICES_INTRO,
  BUSINESS_COMMUNICATIONS_HERO,
  BUSINESS_COMMUNICATIONS_META,
  FAQ,
  FAQ_INTRO,
  PHONE_SYSTEMS,
  PHONE_SYSTEMS_INTRO,
  PLANNING_FACTORS,
  PLANNING_IMAGE,
  PLANNING_INTRO,
  PLATFORM_COMPARISON,
  RELATED_LINKS,
} from "@/data/business-communications";
import {
  CONTACT,
  CTA_BAND,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  NAV_LINKS,
  PROCESS_INTRO,
  PROCESS_STEPS,
  SOCIAL_LINKS,
} from "@/lib/data";

export const metadata: Metadata = BUSINESS_COMMUNICATIONS_META;

export default function Page() {
  return (
    <>
      <Header
        navLinks={NAV_LINKS}
        cta={HEADER_CTA}
        contact={CONTACT}
        current="/solutions"
      />
      <main id="main">
        <PageHero content={BUSINESS_COMMUNICATIONS_HERO} />

        <section className="relative isolate overflow-clip bg-tint py-24 lg:py-[100px]">
          <div
            aria-hidden="true"
            className="absolute -top-60 -left-60 -z-10 size-[720px] rounded-full bg-radial from-sky via-mist/50 to-transparent to-70%"
          />
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_800px]">
            <Intro intro={PHONE_SYSTEMS_INTRO} className="reveal" />
            <DetailList items={PHONE_SYSTEMS} className="reveal lg:mt-12" />
          </div>
        </section>

        <section className="container-page pt-24 pb-24 lg:pt-[100px] lg:pb-[150px]">
          <Intro intro={ADDITIONAL_SERVICES_INTRO} split className="reveal" />
          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {ADDITIONAL_SERVICES.map((service, index) => (
              <li
                key={service.title}
                style={{ "--i": index % 2 } as CSSProperties}
                className="reveal"
              >
                <Card title={service.title} body={service.body} />
              </li>
            ))}
          </ul>
          <ul className="mt-6 grid gap-5 md:grid-cols-2">
            {RELATED_LINKS.map((link) => (
              <li key={link.label}>
                <ArrowLink href={link.href}>{link.label}</ArrowLink>
              </li>
            ))}
          </ul>
        </section>

        <section className="container-page pb-24 lg:pb-[150px]">
          <Intro intro={PLANNING_INTRO} className="reveal" />
          <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
            <div className="reveal relative aspect-[660/400] overflow-clip rounded-[4px]">
              <Image
                src={PLANNING_IMAGE.src}
                alt={PLANNING_IMAGE.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 660px"
                className="reveal-media object-cover"
              />
            </div>
            <DetailList items={PLANNING_FACTORS} className="reveal" />
          </div>
          <ComparisonTable
            comparison={PLATFORM_COMPARISON}
            className="reveal mt-12"
          />
        </section>

        <Process intro={PROCESS_INTRO} steps={PROCESS_STEPS} />

        <section className="bg-tint py-24 lg:py-[90px]">
          <div className="container-page grid gap-12 lg:grid-cols-[1fr_768px]">
            <Intro intro={FAQ_INTRO} className="reveal" />
            <Faq questions={FAQ} />
          </div>
        </section>

        <CtaBand content={CTA_BAND} contact={CONTACT} />
      </main>
      <Footer
        content={FOOTER}
        contact={CONTACT}
        columns={FOOTER_COLUMNS}
        socialLinks={SOCIAL_LINKS}
      />
    </>
  );
}
