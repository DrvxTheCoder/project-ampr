import Link from "next/link";

import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Logo texte provisoire : à remplacer par le fichier officiel. */
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}, accueil`}
      className={cn("inline-flex items-baseline gap-1.5 rounded-sm", className)}
    >
      <span className="font-heading text-lg font-semibold tracking-tight [font-stretch:118%]">
        {site.wordmark}
      </span>
      <span className="text-[0.65rem] font-medium tracking-[0.2em] opacity-70">
        {site.wordmarkSuffix}
      </span>
    </Link>
  );
}
