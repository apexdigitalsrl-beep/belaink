import { Button } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { business } from "@/content/business";

/** Banda de cierre con CTA primario antes del footer. */
export function CtaBand() {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden">
      {/* Foto de ambiente de fondo (atenuada para legibilidad) */}
      <ImageSlot
        src="/img/atmosphere.jpg"
        alt=""
        rounded="none"
        sizes="100vw"
        className="absolute inset-0 -z-10 h-full w-full opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 140% at 50% 0%, oklch(56% 0.22 25 / 0.30) 0%, oklch(15% 0.006 60 / 0.92) 60%)",
        }}
      />
      <div className="container-content relative py-[var(--space-section)] text-center">
        <h2 id="cta-title" className="mx-auto max-w-2xl font-display text-2xl">
          Mesa, vino y una pizza que se acuerda.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          {business.hoursHuman} · {business.address.neighborhood}, CDMX
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button as="a" href={business.contact.instagram} size="lg">
            {business.ordering.ctaLabel}
          </Button>
          <Button as="a" href="#menu" variant="ghost" size="lg">
            Ver el menú
          </Button>
        </div>
      </div>
    </section>
  );
}
