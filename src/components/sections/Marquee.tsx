const ITEMS = [
  "Pizza napolitana",
  "Pasta fresca",
  "Vino",
  "Arte & ilustración",
  "Mucha tinta",
  "Mar–Sáb · 15–21h",
  "San Miguel Chapultepec",
];

/** Banda corrediza estilo imprenta. Decorativa (aria-hidden). CSS puro. */
export function Marquee() {
  const row = ITEMS.join("  ✦  ");
  return (
    <div
      aria-hidden
      className="marquee border-y border-ink/15 bg-accent text-ink"
    >
      <div className="marquee-track">
        <span>{row}&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
        <span>{row}&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
