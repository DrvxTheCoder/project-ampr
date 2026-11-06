import Link from "next/link";
import { ArrowRight, ArrowUpRight, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  icon?: LucideIcon;
  download?: boolean;
  className?: string;
};

/** Bouton pilule avec pastille fléchée, utilisé pour tous les appels à l'action. */
export function PillLink({
  href,
  children,
  variant = "solid",
  icon: Icon = ArrowRight,
  download,
  className,
}: PillLinkProps) {
  const solid = variant === "solid";

  return (
    <Button
      asChild
      variant={solid ? "default" : "outline"}
      className={cn(
        "group/pill h-11 justify-between gap-4 rounded-full py-1 pr-1 pl-5 text-sm hover:bg-primary",
        !solid && "bg-transparent hover:bg-muted",
        className,
      )}
    >
      <Link href={href} download={download}>
        {children}
        <span
          className={cn(
            "grid size-9 place-items-center rounded-full transition-transform duration-200 group-hover/pill:translate-x-0.5",
            solid ? "bg-background text-foreground" : "border border-border",
          )}
        >
          <Icon aria-hidden />
        </span>
      </Link>
    </Button>
  );
}

/** Pastille ronde décorative : le lien qui l'entoure porte le texte accessible. */
export function ArrowBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-9 shrink-0 place-items-center rounded-full border border-current/25 transition-colors duration-200 group-hover:bg-foreground group-hover:text-background",
        className,
      )}
    >
      <ArrowUpRight className="size-4" aria-hidden />
    </span>
  );
}
