import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const benefits = [
  {
    k: "01",
    title: "Masa de verdad",
    body: "Fermentación lenta y horno a alta temperatura. Orilla aireada, base ligera.",
  },
  {
    k: "02",
    title: "Pasta fresca",
    body: "Hecha en casa. Textura y sabor que no salen de una caja.",
  },
  {
    k: "03",
    title: "Pizza + arte",
    body: "Ilustración, tinta y exposiciones. No es sólo cenar, es un planazo.",
  },
  {
    k: "04",
    title: "Carta de vino",
    body: "Para acompañar la noche. El maridaje correcto cambia todo.",
  },
];

export function Benefits() {
  return (
    <Section labelledBy="benefits-title">
      <Eyebrow>Por qué Bela Ink</Eyebrow>
      <h2 id="benefits-title" className="mt-3 max-w-2xl text-2xl">
        Una pizzería que se siente de otro nivel.
      </h2>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal as="li" key={b.k} delay={i * 0.05} className="bg-surface p-6">
            <span className="font-display text-lg text-primary">{b.k}</span>
            <h3 className="mt-4 text-lg">{b.title}</h3>
            <p className="mt-2 text-sm text-muted">{b.body}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
