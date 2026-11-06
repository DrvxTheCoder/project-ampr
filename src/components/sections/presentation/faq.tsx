import { Section } from "@/components/shared/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { presentation } from "@/content/presentation";

export function PresentationFaq() {
  const { faq } = presentation;

  return (
    <Section id="faq">
      <div className="grid gap-8 lg:grid-cols-12">
        <h2 className="text-display text-[clamp(1.75rem,3.7vw,3.25rem)] lg:col-span-5">
          {faq.title}
        </h2>
        <Accordion type="single" collapsible className="lg:col-span-7">
          {faq.items.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="py-4 text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
