import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { ContactHero } from "@/components/ContactHero";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OfficeMap } from "@/components/OfficeMap";
import { ServiceAreas } from "@/components/ServiceAreas";
import {
  CONTACT,
  CONTACT_HERO,
  CONTACT_INTRO,
  FOOTER,
  FOOTER_COLUMNS,
  HEADER_CTA,
  NAV_LINKS,
  OFFICE,
  SERVICE_AREAS,
  SERVICE_AREAS_INTRO,
  SOCIAL_LINKS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Telecom Plus — Business phone systems in Greater Vancouver",
  description:
    "Call 604-696-3828, email sales@telecomplus.ca or send us a few details. Telecom Plus supports businesses across Greater Vancouver from our office in Delta, BC.",
  alternates: { canonical: "/contact" },
};

export default function Page() {
  return (
    <>
      <Header navLinks={NAV_LINKS} cta={HEADER_CTA} contact={CONTACT} />
      <main id="main">
        <ContactHero content={CONTACT_HERO} />
        <Contact intro={CONTACT_INTRO} contact={CONTACT} />
        <OfficeMap office={OFFICE} />
        <ServiceAreas intro={SERVICE_AREAS_INTRO} areas={SERVICE_AREAS} />
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
