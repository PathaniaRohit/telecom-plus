import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Telecom Plus — Business phone systems, networks and support",
  description:
    "Telecom Plus, a division of BY Solution, plans, installs and supports business phone systems, communication infrastructure and the networks behind them.",
};

export const viewport: Viewport = {
  themeColor: "#000614",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-3 focus:text-ink"
        >
          Skip to main content
        </a>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
