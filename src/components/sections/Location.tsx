import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { business } from "@/content/business";

/** Ubicación, horario y zona. NAP consistente con schema y GBP (SEO local). */
export function Location() {
  const { address } = business;
  return (
    <Section id="ubicacion" labelledBy="loc-title">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="reg-mark mb-5">Visitanos</p>
          <h2 id="loc-title" className="text-2xl">
            En el corazón de San Miguel Chapultepec.
          </h2>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="eyebrow">Dirección</dt>
              <dd className="mt-1 text-lg">
                {address.street}, {address.neighborhood}
                <br />
                {address.city}, {address.region} {address.postalCode}
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Horario</dt>
              <dd className="mt-2">
                <ul className="max-w-xs font-mono text-sm">
                  {business.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between border-b border-border py-1.5"
                    >
                      <span>{h.day}</span>
                      <span className={h.open ? "font-semibold" : "text-muted"}>
                        {h.open ? `${h.open}–${h.close}` : "Cerrado"}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href={address.mapsUrl} target="_blank" rel="noopener noreferrer" size="lg">
              Cómo llegar
            </Button>
            <Button
              as="a"
              href={business.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              {business.ordering.secondaryLabel}
            </Button>
          </div>
        </div>

        {/* Mapa real embebido (sin API key). Afinar con lat/lng exactas si hace falta. */}
        <div className="overflow-hidden rounded-xl border border-border-strong shadow-md">
          <iframe
            title="Mapa — Bela Ink, San Miguel Chapultepec"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${address.full}`,
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-[4/3] w-full grayscale-[0.2] contrast-[1.05]"
          />
        </div>
      </div>
    </Section>
  );
}
