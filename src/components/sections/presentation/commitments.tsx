import { Section } from "@/components/shared/section";
import { presentation } from "@/content/presentation";

export function PresentationCommitments() {
  const { commitments } = presentation;

  return (
    <Section id="engagements">
      <div className="rounded-3xl bg-primary p-6 text-primary-foreground sm:p-12">
        <h2 className="text-display text-[clamp(1.75rem,3.7vw,3.25rem)]">{commitments.title}</h2>
        <ul className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {commitments.items.map((item) => (
            <li key={item.title} className="border-t border-white/20 pt-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-pretty text-white/75">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
