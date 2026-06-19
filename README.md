# Bela Ink Pizzería — Sitio web

Landing premium (dirección **ink editorial / dark neon**) para Bela Ink Pizzería —
pizza napolitana, pasta fresca y arte en San Miguel Chapultepec, CDMX.

> Construido por una "agencia" multi-especialista. Toda la estrategia,
> investigación y diseño está documentada en [`/docs`](./docs).

## Stack
- **Next.js 15** (App Router, React Server Components)
- **TypeScript** (strict)
- **Tailwind CSS** + tokens de diseño en `src/styles/tokens.css`
- **Framer Motion** (microinteracciones, respeta `prefers-reduced-motion`)
- SEO: metadata API, JSON-LD `Restaurant` + `FAQPage`, sitemap, robots, `llms.txt`
- Seguridad: headers OWASP en `next.config.ts`

## Empezar
```bash
npm install
npm run dev      # http://localhost:3000
```
Otros scripts: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Estructura
```
docs/                  Entregables (research, estrategia, UX, design system, arquitectura)
public/img/            Imágenes (placeholder/ → reemplazar con fotos reales)
src/
  app/                 Rutas (landing, robots, sitemap), layout + JSON-LD
  components/
    ui/                Átomos: Button, Section, Reveal, ImageSlot
    layout/            Navbar, Footer, StickyOrderBar
    sections/          Organismos de la landing (Hero, Featured, Process…)
  content/             ← TU DATA vive acá (business, menu, faq, reviews)
  lib/                 utils, seo (schema.org)
  styles/              tokens.css (design system) + globals.css
```

## Cómo personalizar (sin tocar componentes)
- **Marca / colores / tipografía:** `src/styles/tokens.css`
- **Negocio (dirección, horario, contacto):** `src/content/business.ts`
- **Menú (items, precios MXN, fotos):** `src/content/menu.ts`
- **FAQ / reseñas:** `src/content/faq.ts`, `src/content/reviews.ts`
- **Fotos:** subir a `public/img/placeholder/` con los nombres del README de esa carpeta

## Pendiente de cliente (ver TODOs en el código)
- Fotos reales (export del Instagram)
- Menú + precios MXN definitivos
- WhatsApp Business, email, teléfono
- Coordenadas (lat/lng) para el mapa
- Definir flujo de pedidos/reservas real (hoy = CTA placeholder a Instagram)

## Estado
Landing-first. Módulo de pedidos = placeholder (CTA a Instagram). Roadmap de
pedidos/checkout/Supabase documentado en `docs/05-architecture.md`.
