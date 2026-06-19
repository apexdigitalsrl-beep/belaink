import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/** Historia de marca. Copy PLACEHOLDER — afinar con la historia real. */
export function Story() {
  return (
    <Section id="historia" labelledBy="story-title">
      <div className="mx-auto max-w-3xl text-center">
        <p className="reg-mark mb-5 justify-center">Nuestra historia</p>
        <Reveal>
          <h2 id="story-title" className="font-display text-2xl">
            Pizzas, ilustración y mucha tinta.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-text">
            Bela Ink nació de cruzar dos obsesiones: la pizza napolitana hecha
            con paciencia y el arte que se cuela en cada rincón de San Miguel
            Chapultepec. Masa de fermentación lenta, horno al rojo, pasta fresca
            y una pared que es lienzo.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-sm italic text-muted">
            (Texto placeholder — contanos la historia real para afinarlo.)
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
