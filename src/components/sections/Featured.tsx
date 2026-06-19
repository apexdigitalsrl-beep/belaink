import { Section, Eyebrow } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { featuredItems, isMenuReady } from "@/content/menu";
import { business } from "@/content/business";

/** Bento de destacados (tendencia 2026). Maneja precios pendientes con gracia. */
export function Featured() {
  return (
    <Section id="menu" labelledBy="menu-title" className="bg-surface/30">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow>Del horno</Eyebrow>
          <h2 id="menu-title" className="mt-3 text-2xl">
            Lo que sale del horno al rojo
          </h2>
        </div>
        <Button as="a" href={business.contact.instagram} variant="ghost" size="sm">
          Ver más en Instagram →
        </Button>
      </div>

      {!isMenuReady && (
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Menú en construcción — estamos cargando platillos y precios. Mientras
          tanto, mirá una muestra de lo que hacemos.
        </p>
      )}

      <div className="mt-10 grid auto-rows-[minmax(180px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredItems.map((item, i) => (
          <Reveal
            as="article"
            key={item.slug}
            delay={i * 0.06}
            className={
              i === 0
                ? "group relative overflow-hidden rounded-xl border border-border sm:col-span-2 sm:row-span-2"
                : "group relative overflow-hidden rounded-xl border border-border"
            }
          >
            <ImageSlot
              src={item.image}
              alt={item.imageAlt}
              rounded="none"
              sizes="(max-width: 640px) 100vw, 33vw"
              className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out-expo group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, oklch(15% 0.006 60 / 0.9) 100%)",
              }}
            />
            <div className="relative flex h-full min-h-[180px] flex-col justify-end p-5">
              {item.tags && item.tags.length > 0 && (
                <ul className="mb-2 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-pill border border-border bg-bg/50 px-2.5 py-0.5 text-xs capitalize text-paper/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              <h3 className="font-display text-xl">{item.name}</h3>
              <p className="mt-1 text-sm text-paper/70">{item.description}</p>
              <p className="mt-3 text-sm font-semibold text-accent">
                {item.priceMXN === null
                  ? "Precio próximamente"
                  : `$${item.priceMXN} MXN`}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
