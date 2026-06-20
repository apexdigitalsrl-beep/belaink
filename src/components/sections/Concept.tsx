import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const PANELS = [
  {
    img: "/img/menu/margherita.jpg",
    kicker: "El horno",
    title: "Pizza",
    body: "Napolitana. Masa de fermentación lenta, orilla aireada, base ligera.",
  },
  {
    img: "/img/menu/pasta.jpg",
    kicker: "La cocina",
    title: "Pasta",
    body: "Fresca, hecha en casa. Textura que no sale de una caja.",
  },
  {
    img: "/img/atmosphere.jpg",
    kicker: "La pared",
    title: "Tinta",
    body: "Ilustración, vino y arte. Una pizzería que también es lienzo.",
  },
];

/** Tríptico del concepto: pizza + pasta + tinta. Editorial, no card-grid. */
export function Concept() {
  return (
    <Section labelledBy="concept-title" className="bg-gallery-sink">
      <div className="max-w-2xl">
        <p className="reg-mark mb-5">El concepto</p>
        <h2 id="concept-title" className="text-2xl">
          Tres obsesiones en una mesa.
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PANELS.map((p, i) => (
          <Reveal
            as="article"
            key={p.title}
            delay={i * 0.07}
            className="group relative overflow-hidden rounded-xl border border-border-strong"
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={p.img}
                alt={`${p.title} — Bela Ink`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, oklch(17% 0.014 55 / 0.94) 100%)",
                }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 text-bone">
              <span className="font-mono text-xs uppercase tracking-wide text-bone/60">
                {p.kicker}
              </span>
              <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-bone/80">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
