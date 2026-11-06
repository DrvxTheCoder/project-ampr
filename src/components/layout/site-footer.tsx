import Link from "next/link";

import { documents } from "@/content/documentation";
import { reports } from "@/content/rapports";
import { navigation, site } from "@/content/site";

import { Container } from "../shared/section";
import { Logo } from "./logo";

const columns = [
  { title: "Rubriques", links: navigation },
  {
    title: "Le service",
    links: [
      { label: "Le fauteuil ALBA", href: "/presentation#service" },
      { label: "Le parcours passager", href: "/presentation#parcours" },
      { label: "Questions fréquentes", href: "/presentation#faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      ...reports.slice(0, 1).map((report) => ({
        label: "Dernier rapport",
        href: `/rapports/${report.slug}`,
      })),
      ...documents.slice(0, 2).map((document) => ({
        label: document.title,
        href: `/documentation/${document.slug}`,
      })),
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="pb-5 sm:pb-8">
      <Container>
        <div className="rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Logo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                {site.footerNote}
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
              {columns.map((column) => (
                <div key={column.title}>
                  <h2 className="text-xs font-medium tracking-[0.14em] uppercase">
                    {column.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="transition-colors hover:text-white">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-12 border-t border-white/15 pt-5 text-xs text-white/60">
            © {site.copyrightYear} {site.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
