import type { Metadata } from "next";
import { Archivo, Geist } from "next/font/google";

import { MicroInteractions } from "@/components/motion/micro-interactions";
import { PageTransition } from "@/components/motion/page-transition";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { site } from "@/content/site";
import { searchIndex } from "@/lib/search";

import "./globals.css";

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const display = Archivo({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: { default: site.name, template: `%s · ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${display.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
        >
          Aller au contenu
        </a>
        <SiteHeader searchIndex={searchIndex} />
        <PageTransition>
          <main id="contenu" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </PageTransition>
        <MicroInteractions />
      </body>
    </html>
  );
}
