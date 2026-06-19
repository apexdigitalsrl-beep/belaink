/**
 * Opiniones / prueba social. PLACEHOLDER hasta tener reseñas reales
 * (Google Business Profile / Instagram). No publicar como reales sin permiso.
 */
export type Review = {
  author: string;
  rating: number; // 1–5
  body: string;
  source?: string;
  isPlaceholder?: boolean;
};

export const REVIEWS: Review[] = [
  {
    author: "Reseña de ejemplo",
    rating: 5,
    body: "La masa es otra cosa. Ambiente, vino y arte — un planazo en la Chapultepec.",
    source: "Placeholder",
    isPlaceholder: true,
  },
  {
    author: "Reseña de ejemplo",
    rating: 5,
    body: "Pizza napolitana de verdad en CDMX. Volvemos seguro.",
    source: "Placeholder",
    isPlaceholder: true,
  },
  {
    author: "Reseña de ejemplo",
    rating: 5,
    body: "El concepto de pizza + arte + tinta es único. Muy recomendable.",
    source: "Placeholder",
    isPlaceholder: true,
  },
];

export const aggregateRating = { value: 4.8, count: 0 }; // count 0 = aún sin reseñas reales
