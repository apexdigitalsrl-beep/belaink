import { business } from "@/content/business";

export function Footer() {
  const year = new Date().getFullYear();
  const { address, contact } = business;

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="container-content grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">
            BELA <span className="neon-text">INK</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted">{business.tagline}</p>
          <p className="mt-4 text-sm text-muted">
            🍕 Pizza · 🍝 Pasta · 🖊️ Tinta
          </p>
        </div>

        <div>
          <h2 className="eyebrow mb-4">Visitanos</h2>
          <address className="not-italic text-sm leading-relaxed text-muted">
            {address.street}
            <br />
            {address.neighborhood}
            <br />
            {address.city}, {address.region} {address.postalCode}
          </address>
          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-accent hover:underline"
          >
            Cómo llegar →
          </a>
        </div>

        <div>
          <h2 className="eyebrow mb-4">Horario & contacto</h2>
          <p className="text-sm text-muted">{business.hoursHuman}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-accent"
              >
                {contact.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="hairline" />
      <div className="container-content flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
        <p>© {year} {business.legalName}. Todos los derechos reservados.</p>
        <p>{business.site.domain}</p>
      </div>
    </footer>
  );
}
