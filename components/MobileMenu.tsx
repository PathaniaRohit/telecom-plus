"use client";

import { useState } from "react";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import type { NavLink } from "@/lib/data";

type MobileMenuProps = {
  navLinks: readonly NavLink[];
  cta: NavLink;
};

export function MobileMenu({ navLinks, cta }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="grid size-11 place-items-center bg-white text-ink"
      >
        {open ? (
          <CloseIcon className="size-6" />
        ) : (
          <MenuIcon className="size-6" />
        )}
      </button>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="absolute inset-x-5 top-full mt-3 bg-white p-5 text-ink shadow-float md:inset-x-10"
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-ink/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center text-body uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ArrowButton
            href={cta.href}
            variant="dark"
            onClick={() => setOpen(false)}
            className="mt-5"
          >
            {cta.label}
          </ArrowButton>
        </nav>
      ) : null}
    </div>
  );
}
