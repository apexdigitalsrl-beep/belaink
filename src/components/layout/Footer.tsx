import { business } from "@/content/business";

export function Footer() {
  const year = new Date().getFullYear();
  const { address, contact } = business;

  return (
    <footer className="plate">
      <div className="container-content grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight text-bone">
            BELA <span className="text-accent">INK</span>
          </p>
          <p className="mt-3 max-w-xs text-bone/70">{business.tagline}</p>
          <p className="mt-4 font-mono text-sm text-bone/60">🍕 Pizza · 🍝 Pasta · 🖊️ Tinta</p>
        </div>

        <div>
          <h2 className="eyebrow mb-4 !text-bone/55">Visitanos</h2>
          <address className="not-italic leading-relaxed text-bone/80">
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
            className="mt-3 inline-block text-accent hover:underline"
          >
            Cómo llegar →
          </a>
        </div>

        <div>
          <h2 className="eyebrow mb-4 !text-bone/55">Horario & contacto</h2>
          <p className="text-bone/80">{business.hoursHuman}</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bone hover:text-accent"
              >
                {contact.instagramHandle}
              </a>
            </li>
            <li>
              <a href="#reservar" className="text-bone hover:text-accent">
                Reservar mesa
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-px bg-bone/15" />
      <div className="container-content flex flex-col items-center justify-between gap-2 py-6 font-mono text-xs text-bone/55 sm:flex-row">
        <p>© {year} {business.legalName}. Todos los derechos reservados.</p>
        <p>{business.site.domain}</p>
      </div>
    </footer>
  );
}
