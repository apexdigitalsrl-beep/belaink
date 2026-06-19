/**
 * FAQ — alimenta la sección de preguntas y el schema FAQPage (SEO).
 * Respuestas marcadas TODO se ajustan con info real del cliente.
 */
export type Faq = { q: string; a: string };

export const FAQ: Faq[] = [
  {
    q: "¿Dónde están?",
    a: "En José Vasconcelos 113, San Miguel Chapultepec, CDMX (11850).",
  },
  {
    q: "¿Cuál es el horario?",
    a: "Martes a sábado, de 15:00 a 21:00. Domingo y lunes cerrado.",
  },
  {
    q: "¿Qué tipo de pizza hacen?",
    a: "Pizza estilo napolitano: masa de fermentación lenta y horno a alta temperatura. También pasta fresca.",
  },
  {
    q: "¿Tienen vino?",
    a: "Sí, contamos con carta de vinos para acompañar. TODO: detallar selección.",
  },
  {
    q: "¿Hacen entregas a domicilio?",
    a: "TODO: confirmar con el cliente (delivery propio / agregador / sólo en sitio).",
  },
  {
    q: "¿Puedo reservar mesa?",
    a: "TODO: confirmar canal de reservas (WhatsApp / Instagram / formulario).",
  },
];
