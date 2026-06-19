import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { business } from "@/content/business";

/** Plancha oscura de cierre con la acción primaria antes del footer. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="plate relative overflow-hidden">
      <ImageSlot
        src="/img/atmosphere.jpg"
        alt=""
        rounded="none"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full opacity-30"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(130% 130% at 50% 0%, oklch(62% 0.232 27 / 0.28) 0%, oklch(17% 0.014 55 / 0.94) 62%)",
        }}
      />
      <div className="container-content relative py-[var(--space-section)] text-center">
        <h2 id="cta-title" className="mx-auto max-w-2xl font-display text-2xl text-bone">
          Mesa, vino y una pizza que se acuerda.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-mono text-sm text-bone/70">
          {business.hoursHuman} · {business.address.neighborhood}, CDMX
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as="a" href="#reservar" variant="accent" size="lg">
            {business.ordering.ctaLabel}
          </Button>
          <Button
            as="a"
            href="#galeria"
            size="lg"
            className="border border-bone/40 bg-transparent text-bone hover:border-bone"
          >
            Ver la galería
          </Button>
        </div>
      </div>
    </section>
  );
}
