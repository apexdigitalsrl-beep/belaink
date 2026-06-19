import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { business } from "@/content/business";

/**
 * Hero cinematográfico, editorial-oscuro (matchea la marca: tinta + neón).
 * R1 (relevancia primero): en el primer viewport el usuario ve qué es, dónde
 * y cuándo, + CTA. Fondo = foto real cuando la subas (hero.jpg), por ahora
 * caja decorativa de tinta.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      {/* Fondo */}
      <ImageSlot
        src="/img/hero.jpg"
        alt="Pizza napolitana Bela Ink frente al letrero de neón BELA INK"
        priority
        rounded="none"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full"
      />
      {/* Degradado de legibilidad (tinta) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, oklch(15% 0.006 60 / 0.55) 0%, oklch(15% 0.006 60 / 0.2) 40%, oklch(15% 0.006 60 / 0.95) 100%)",
        }}
      />

      <div className="container-content pb-24 pt-28 md:pb-32">
        <p className="eyebrow mb-5">San Miguel Chapultepec · CDMX</p>

        <h1 className="max-w-[14ch] font-display text-hero font-bold">
          Pizza, pasta y <span className="neon-text italic">mucha tinta</span>.
        </h1>

        <p className="mt-6 max-w-xl text-lg text-paper/80">
          {business.shortPitch}
        </p>

        {/* Fila de relevancia (R1): qué/dónde/cuándo de un vistazo */}
        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <div className="flex items-center gap-2">
            <dt className="text-muted">Horario</dt>
            <dd className="font-semibold">{business.hoursHuman}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="text-muted">Zona</dt>
            <dd className="font-semibold">{business.address.neighborhood}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="text-muted">Cocina</dt>
            <dd className="font-semibold">Napolitana · Pasta fresca</dd>
          </div>
        </dl>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href={business.contact.instagram} size="lg">
            {business.ordering.ctaLabel}
          </Button>
          <Button as="a" href="#menu" variant="secondary" size="lg">
            Ver el menú
          </Button>
        </div>
      </div>
    </section>
  );
}
