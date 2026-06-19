import { Section } from "@/components/ui/Section";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { featuredItems, isMenuReady } from "@/content/menu";
import { business } from "@/content/business";

/** Bento editorial de destacados. Precios pendientes manejados con gracia. */
export function Featured() {
  return (
    <Section id="menu" labelledBy="menu-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="reg-mark mb-5">Del horno al rojo</p>
          <h2 id="menu-title" className="text-2xl">
            Masa de fermentación lenta, salida en minutos.
          </h2>
          {!isMenuReady && (
            <p className="mt-4 text-sm text-muted">
              Menú en construcción — cargando platillos y precios. Una muestra de
              lo que hacemos:
            </p>
          )}
        </div>
        <Button as="a" href={business.contact.instagram} variant="ghost" size="sm">
          Más en Instagram →
        </Button>
      </div>

      <div className="mt-12 grid auto-rows-[minmax(190px,auto)] gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {featuredItems.map((item, i) => (
          <Reveal
            as="article"
            key={item.slug}
            delay={i * 0.06}
            className={
              i === 0
                ? "group relative overflow-hidden rounded-xl border border-border-strong sm:col-span-2 sm:row-span-2"
                : "group relative overflow-hidden rounded-xl border border-border-strong"
            }
          >
            <ImageSlot
              src={item.image}
              alt={item.imageAlt}
              rounded="none"
              sizes="(max-width: 640px) 100vw, 33vw"
              className="absolute inset-0 h-full w-full transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 35%, oklch(17% 0.014 55 / 0.92) 100%)",
              }}
            />
            <div className="relative flex h-full min-h-[190px] flex-col justify-end p-5 text-bone">
              {item.tags && item.tags.length > 0 && (
                <ul className="mb-2 flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-pill border border-bone/30 bg-ink/30 px-2.5 py-0.5 font-mono text-xs capitalize backdrop-blur-sm"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
              <h3 className="font-display text-xl">{item.name}</h3>
              <p className="mt-1 text-sm text-bone/75">{item.description}</p>
              <p className="mt-3 font-mono text-sm text-accent">
                {item.priceMXN === null ? "Precio próximamente" : `$${item.priceMXN} MXN`}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
