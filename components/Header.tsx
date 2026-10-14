import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { ArrowButton } from "@/components/ui/ArrowButton";
import type { ContactDetails, NavLink } from "@/lib/data";

type HeaderProps = {
  navLinks: readonly NavLink[];
  cta: NavLink;
  contact: ContactDetails;
};

export function Header({ navLinks, cta, contact }: HeaderProps) {
  return (
    <>
      <div className="bg-ink text-white">
        <p className="container-page flex h-[50px] items-center text-small">
          Customer support ·&nbsp;
          <a href={contact.phoneHref} className="link-wipe">
            {contact.phone}
          </a>
        </p>
      </div>

      <header className="sticky -top-2 z-20 h-0 text-white lg:-top-4">
        <div className="relative">
          <div
            aria-hidden="true"
            className="header-backdrop absolute inset-0 -z-10 bg-ink/90 backdrop-blur-md"
          />
          <div className="container-page flex items-center justify-between gap-6 pt-6 pb-4 lg:pt-10 lg:pb-6">
            <Link
              href="/"
              aria-label="Telecom Plus — home"
              className="shrink-0"
            >
              <Image
                src="/images/logo.svg"
                alt=""
                width={156}
                height={41}
                priority
              />
            </Link>

            <nav
              aria-label="Primary"
              className="hidden lg:block lg:flex-1 lg:pl-[calc(36.4%-196px)]"
            >
              <ul className="flex gap-10">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="link-wipe flex min-h-11 items-center text-small uppercase"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="hidden lg:block">
              <ArrowButton href={cta.href}>{cta.label}</ArrowButton>
            </div>

            <MobileMenu navLinks={navLinks} cta={cta} />
          </div>
        </div>
      </header>
    </>
  );
}
