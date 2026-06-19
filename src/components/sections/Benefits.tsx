import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  { title: "Masa de verdad", body: "Fermentación lenta y horno a alta temperatura. Orilla aireada, base ligera." },
  { title: "Pasta fresca", body: "Hecha en casa. Textura y sabor que no salen de una caja." },
  { title: "Pizza + arte", body: "Ilustración, tinta y exposiciones. No es sólo cenar, es un planazo." },
  { title: "Carta de vino", body: "Para acompañar la noche. El maridaje correcto cambia todo." },
];

/** Editorial, no grid de cards. Enunciado a la izquierda, lista con hairlines. */
export function Benefits() {
  return (
    <Section labelledBy="benefits-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <h2 id="benefits-title" className="text-2xl">
            Una pizzería que se siente de otro nivel.
          </h2>
          <p className="mt-5 max-w-sm text-muted">
            Producto real sobre cadena clonada: lo que las grandes no pueden ofrecer.
          </p>
        </Reveal>

        <ul className="border-t border-border">
          {points.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 0.05}>
              <div className="flex gap-6 border-b border-border py-6">
                <span
                  aria-hidden
                  className="mt-2 h-2.5 w-2.5 flex-none rounded-full"
                  style={{ background: "var(--vermilion)" }}
                />
                <div>
                  <h3 className="font-display text-lg">{p.title}</h3>
                  <p className="mt-1.5 text-muted">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
