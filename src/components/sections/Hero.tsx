import { Button } from "@/components/ui/Button";
import { RotatingSeal } from "@/components/fx/RotatingSeal";
import { business } from "@/content/business";

/**
 * Hero — lienzo de galería. Tesis de la marca: tipografía enorme (Syne) con
 * offset de registro riso + el sello giratorio (firma). R1: qué/dónde/cuándo
 * de un vistazo. Una sola acción primaria (Reservar).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32">
      <div className="container-content grid items-center gap-12 pb-[var(--space-section)] lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="reg-mark mb-6">San Miguel Chapultepec · CDMX</p>

          <h1 className="font-display text-hero font-extrabold">
            Pizza, ilustración
            <br />
            y{" "}
            <span className="riso-offset italic text-accent" data-text="mucha tinta">
              mucha tinta
            </span>
            .
          </h1>

          <p className="mt-7 max-w-[46ch] text-lg text-muted">{business.shortPitch}</p>

          <dl className="mt-9 flex flex-wrap gap-x-10 gap-y-4 font-mono text-sm">
            <div className="flex flex-col">
              <dt className="text-muted">Horario</dt>
              <dd className="mt-1 font-semibold">Mar–Sáb · 15–21h</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-muted">Cocina</dt>
              <dd className="mt-1 font-semibold">Napolitana · Pasta</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-muted">+ </dt>
              <dd className="mt-1 font-semibold">Vino · Arte</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#reservar" variant="accent" size="lg">
              {business.ordering.ctaLabel}
            </Button>
            <Button as="a" href="#galeria" variant="secondary" size="lg">
              Ver la galería
            </Button>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[clamp(18rem,42vw,30rem)]">
          <RotatingSeal
            image="/img/menu/pepperoni.jpg"
            alt="Pizza pepperoni de Bela Ink"
          />
        </div>
      </div>
    </section>
  );
}
