import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "La masa", body: "Fermentación lenta. Tiempo, no atajos." },
  { n: "02", title: "La tinta", body: "Ilustración y carácter. Cada detalle, intencional." },
  { n: "03", title: "El horno", body: "Al rojo. Orilla carbonada, centro perfecto." },
  { n: "04", title: "La mesa", body: "Vino, arte y buena compañía." },
];

/** Plancha oscura: proceso de elaboración (secuencia real → numeración válida). */
export function Process() {
  return (
    <section id="proceso" aria-labelledby="process-title" className="plate">
      <div className="container-content grid gap-12 py-[var(--space-section)] lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
          <ImageSlot
            src="/img/process.jpg"
            alt="Pizza al horno con cebolla morada cayendo encima"
            sizes="(max-width: 1024px) 100vw, 50vw"
            rounded="none"
            className="h-full w-full"
          />
        </div>

        <div>
          <p className="reg-mark mb-5 !text-bone/70">Cómo lo hacemos</p>
          <h2 id="process-title" className="text-2xl text-bone">
            Del fermento al horno al rojo.
          </h2>
          <ol className="mt-10">
            {steps.map((s, i) => (
              <Reveal
                as="li"
                key={s.n}
                delay={i * 0.05}
                className="flex gap-6 border-t border-bone/15 py-5 last:border-b"
              >
                <span className="font-display text-2xl text-accent">{s.n}</span>
                <div>
                  <h3 className="text-lg text-bone">{s.title}</h3>
                  <p className="mt-1 text-bone/65">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
