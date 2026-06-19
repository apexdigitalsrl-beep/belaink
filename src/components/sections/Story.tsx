import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Historia de marca. Copy PLACEHOLDER — afinar con la historia real del cliente.
 */
export function Story() {
  return (
    <Section id="historia" labelledBy="story-title">
      <div className="mx-auto max-w-3xl text-center">
        <Eyebrow>Nuestra historia</Eyebrow>
        <Reveal>
          <h2 id="story-title" className="mt-4 font-display text-2xl">
            Pizzas, ilustración y mucha tinta.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-lg leading-relaxed text-paper/80">
            Bela Ink nació de cruzar dos obsesiones: la pizza napolitana hecha
            con paciencia y el arte que se cuela en cada rincón de San Miguel
            Chapultepec. Masa de fermentación lenta, horno al rojo, pasta fresca
            y una pared que es lienzo.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-base text-muted">
            <span className="italic">(Texto placeholder — contanos la historia real para afinarlo.)</span>
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
