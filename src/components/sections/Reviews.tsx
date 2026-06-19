import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { REVIEWS } from "@/content/reviews";

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} de 5 estrellas`} className="text-accent">
      {"★".repeat(n)}
      <span className="text-muted">{"★".repeat(5 - n)}</span>
    </span>
  );
}

/** Prueba social (R8). Reseñas marcadas placeholder hasta tener reales. */
export function Reviews() {
  return (
    <Section labelledBy="reviews-title" className="bg-surface/30">
      <Eyebrow>Lo que dicen</Eyebrow>
      <h2 id="reviews-title" className="mt-3 text-2xl">
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
            <p className="mt-4 text-base leading-relaxed text-paper/85">“{r.body}”</p>
            <p className="mt-4 text-sm text-muted">
              {r.author}
              {r.isPlaceholder && " · (ejemplo)"}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
