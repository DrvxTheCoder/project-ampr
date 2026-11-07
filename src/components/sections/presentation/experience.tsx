import { Eyebrow, Section } from "@/components/shared/section";
import { presentation } from "@/content/presentation";

export function PresentationExperience() {
  const { experience } = presentation;

  return (
    <Section>
      <Eyebrow data-reveal="up">{experience.eyebrow}</Eyebrow>
      <h2 data-reveal="title" className="mt-6 text-display text-[clamp(1.75rem,3.7vw,3.25rem)] text-balance">
        {experience.title}
      </h2>
      <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {experience.steps.map((step, index) => (
          <li key={step.title} data-reveal="up" className="border-t border-foreground pt-4">
            <span className="text-sm text-muted-foreground tabular-nums">0{index + 1}</span>
            <h3 className="mt-6 text-display text-lg">{step.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-muted-foreground">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
