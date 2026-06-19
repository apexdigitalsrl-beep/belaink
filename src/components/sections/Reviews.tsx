import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { REVIEWS } from "@/content/reviews";

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} de 5 estrellas`} className="text-accent">
      {"★".repeat(n)}
      <span className="text-border-strong">{"★".repeat(5 - n)}</span>
    </span>
  );
}

/** Prueba social. Reseñas marcadas placeholder hasta tener reales. */
export function Reviews() {
  return (
    <Section labelledBy="reviews-title" className="bg-gallery-sink">
      <h2 id="reviews-title" className="text-2xl">
        La gente vuelve.
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <Reveal
            as="article"
            key={i}
            delay={i * 0.06}
            className="rounded-xl border border-border bg-surface p-6"
          >
            <Stars n={r.rating} />
            <p className="mt-4 text-base leading-relaxed">“{r.body}”</p>
            <p className="mt-4 font-mono text-xs text-muted">
              {r.author}
              {r.isPlaceholder && " · (ejemplo)"}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
