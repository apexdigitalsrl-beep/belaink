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
              <dd className="mt-1 text-lg">{business.hoursHuman}</dd>
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

        {/* Mapa: slot. Embeber Google Maps real cuando haya lat/lng (business.address.geo). */}
        <div
          className="grid aspect-[4/3] place-items-center rounded-xl border border-border bg-surface text-center"
          role="img"
          aria-label="Mapa de ubicación (pendiente de coordenadas)"
        >
          <div className="px-6">
            <p className="font-display text-xl">Mapa</p>
            <p className="mt-2 text-sm text-muted">
              Se incrusta el mapa real al confirmar coordenadas. Mientras, usá
              “Cómo llegar”.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
