import { cn } from "@/lib/utils";

export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-12", className)}
      {...props}
    />
  );
}

/** Bloc vertical de page, avec un espacement commun et une ancre optionnelle. */
export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section className={cn("scroll-mt-24 py-14 sm:py-20", className)} {...props}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-eyebrow", className)} {...props} />;
}
