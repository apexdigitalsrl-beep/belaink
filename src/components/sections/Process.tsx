import { Section, Eyebrow } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "La masa", body: "Fermentación lenta. Tiempo, no atajos." },
  { n: "02", title: "La tinta", body: "Ilustración y carácter. Cada detalle, intencional." },
  { n: "03", title: "El horno", body: "Al rojo. Orilla carbonada, centro perfecto." },
  { n: "04", title: "La mesa", body: "Vino, arte y buena compañía. El planazo completo." },
];

/** Proceso de elaboración — narrativa premium (capa secundaria, no bloquea CTA). */
export function Process() {
  return (
    <Section id="proceso" labelledBy="process-title" className="bg-surface/30">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] w-full">
          <ImageSlot
            src="/img/process.jpg"
            alt="Pizza al horno con cebolla morada cayendo encima"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="h-full w-full"
          />
        </div>

        <div>
          <Eyebrow>Cómo lo hacemos</Eyebrow>
          <h2 id="process-title" className="mt-3 text-2xl">
            Del fermento al horno al rojo.
          </h2>
          <ol className="mt-10 space-y-px overflow-hidden rounded-xl border border-border bg-border">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 0.05} className="flex gap-5 bg-surface p-6">
                <span className="font-display text-2xl text-primary">{s.n}</span>
                <div>
                  <h3 className="text-lg">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
