import { ChamferImage } from "@/components/shared/chamfer-image";
import { Section } from "@/components/shared/section";
import { presentation } from "@/content/presentation";

export function PresentationService() {
  const { service } = presentation;

  return (
    <Section id="service">
      <div className="grid gap-4 lg:grid-cols-12">
        <ChamferImage
          image={service.image}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="min-h-72 lg:col-span-5"
        />
        <div className="rounded-3xl bg-panel p-6 text-panel-foreground sm:p-10 lg:col-span-7">
          <h2 className="text-display text-2xl sm:text-3xl">{service.title}</h2>
          <dl className="mt-6">
            {service.facts.map((fact) => (
              <div
                key={fact.label}
                className="grid gap-1 border-t border-panel-foreground/15 py-4 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="text-sm font-medium">{fact.label}</dt>
                <dd className="text-sm sm:col-span-2">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
