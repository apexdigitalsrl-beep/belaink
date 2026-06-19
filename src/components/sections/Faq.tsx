"use client";

import { useState } from "react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { FAQ } from "@/content/faq";
import { cn } from "@/lib/utils/cn";

/** FAQ accesible (accordion por teclado). Alimenta también schema FAQPage. */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Preguntas frecuentes</Eyebrow>
        <h2 id="faq-title" className="mt-3 text-2xl">
          Lo que querés saber.
        </h2>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={i}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-lg">{item.q}</span>
                    <span
                      aria-hidden
                      className={cn(
                        "shrink-0 text-primary transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!isOpen}
                  className="pb-5 text-muted"
                >
                  {item.a}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
