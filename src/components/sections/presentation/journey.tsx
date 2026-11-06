import { Eyebrow, Section } from "@/components/shared/section";
import { presentation } from "@/content/presentation";
import { cn } from "@/lib/utils";

export function PresentationJourney() {
  const { journey } = presentation;

  return (
    <Section id="parcours">
      <Eyebrow>{journey.eyebrow}</Eyebrow>
      <div className="mt-6 flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
        <h2 className="text-display text-[clamp(1.75rem,3.7vw,3.25rem)]">{journey.title}</h2>
        <p className="max-w-sm text-sm text-pretty text-muted-foreground">{journey.text}</p>
      </div>
      <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {journey.steps.map((step, index) => (
          <li
            key={step.title}
            className={cn(
              "flex min-h-52 flex-col justify-between rounded-3xl p-5",
              step.alba ? "bg-primary text-primary-foreground" : "bg-muted",
            )}
          >
            <span className="text-sm tabular-nums opacity-70">0{index + 1}</span>
            <span>
              <span className="block font-medium text-balance">{step.title}</span>
              <span className="mt-2 block text-sm opacity-70">{step.means}</span>
            </span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
