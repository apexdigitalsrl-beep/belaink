/**
 * Datos reales del negocio (de Instagram @belainkpizza, jun 2026).
 * Fuente de verdad para NAP, schema.org, footer, contacto y SEO local.
 * Campos marcados TODO: completar con el cliente.
 */

export const business = {
  name: "Bela Ink",
  legalName: "Bela Ink Pizzería",
  tagline: "Pizzas, ilustración y mucha tinta.",
  shortPitch:
    "Pizza napolitana, pasta y arte en San Miguel Chapultepec. Masa de fermentación lenta, horno al rojo, y mucha tinta.",
  concept: ["Pizza", "Pasta", "Tinta / Arte"],
  cuisine: ["Pizza", "Pizza napolitana", "Pasta", "Italiana"],
  priceRange: "$$", // TODO: confirmar rango real

  address: {
    street: "José Vasconcelos 113",
    neighborhood: "San Miguel Chapultepec",
    city: "Ciudad de México",
    region: "CDMX",
    postalCode: "11850",
    country: "MX",
    full: "José Vasconcelos 113, San Miguel Chapultepec, 11850 Ciudad de México, CDMX",
    // TODO: lat/lng reales para el mapa y schema geo
    geo: { lat: null as number | null, lng: null as number | null },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Bela+Ink+Jos%C3%A9+Vasconcelos+113+San+Miguel+Chapultepec",
  },

  /** Martes a Sábado, 15:00–21:00 (cerrado Dom y Lun). */
  hours: [
    { day: "Lunes", open: null, close: null },
    { day: "Martes", open: "15:00", close: "21:00" },
    { day: "Miércoles", open: "15:00", close: "21:00" },
    { day: "Jueves", open: "15:00", close: "21:00" },
    { day: "Viernes", open: "15:00", close: "21:00" },
    { day: "Sábado", open: "15:00", close: "21:00" },
    { day: "Domingo", open: null, close: null },
  ],
  // Formato schema.org (openingHours)
  hoursSchema: ["Tu-Sa 15:00-21:00"],
  hoursHuman: "Martes a Sábado · 15:00–21:00",

  contact: {
    instagram: "https://www.instagram.com/belainkpizza/",
    instagramHandle: "@belainkpizza",
    // TODO: número real de WhatsApp Business (formato internacional, sin +)
    whatsapp: "" as string,
    email: "" as string, // TODO
    phone: "" as string, // TODO
  },

  site: {
    domain: "belainkpizza.agvsolutions.online",
    url: "https://belainkpizza.agvsolutions.online",
  },

  /**
   * Estado del módulo de pedidos. Hoy = placeholder (landing-first).
   * Cuando exista flujo real, cambiar a "online" y conectar.
   */
  ordering: {
    mode: "placeholder" as "placeholder" | "whatsapp" | "online",
    // Texto del CTA principal mientras es placeholder
    ctaLabel: "Reservar mesa",
    secondaryLabel: "Escribir por Instagram",
  },
} as const;

export type Business = typeof business;
