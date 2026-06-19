# 05 — Arquitectura Técnica

**Proyecto:** Bela Ink Pizzería · **Fase:** 5 de 8 · Depende de: [04-design-system.md](04-design-system.md)
**Objetivo:** base escalable, clean code, Atomic Design, SEO avanzado, performance <1s, lista para llenar con tu data real sin tocar componentes.

---

## 1. Stack (y por qué)

| Capa | Elección | Razón |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | RSC, streaming, edge, SEO de primera, imágenes optimizadas |
| Lenguaje | **TypeScript** (strict) | seguridad de tipos en el boundary de datos |
| UI | **React 19** | Server Components por defecto, Client sólo donde hay interacción |
| Estilos | **Tailwind CSS** + tokens CSS (`tokens.css`) | velocidad + design system como única fuente de verdad |
| Motion | **Framer Motion** (Motion) | microinteracciones compositor-friendly, `prefers-reduced-motion` |
| Backend/Data | **Supabase** (Postgres + Auth + Storage + RLS) | menú, pedidos, clientes, lealtad; RLS para seguridad |
| Estado cliente | **Zustand** (carrito) + URL state (filtros) | no duplicar server state; carrito persistente liviano |
| Server state | **React Query** (donde haga falta en cliente) | SWR, optimistic updates en carrito/checkout |
| Validación | **Zod** | esquemas en boundaries (forms, API, env) |
| Imágenes | `next/image` + Supabase Storage | AVIF/WebP, dimensiones explícitas, lazy |
| Deploy | **Vercel** (Edge + ISR) | CWV, edge functions, previews |
| Analytics | Vercel Analytics + GA4/eventos | embudo CRO (Fase Analytics) |

**Reto cruzado (Backend ↔ Frontend):** "¿Supabase no es over-engineering para un menú?" → No: el valor del proyecto es **dato propio de cliente + pedidos + lealtad** (estrategia O2/O4). Eso necesita Postgres+Auth+RLS desde el día 1. El menú podría ser estático, pero pedidos/clientes no.

---

## 2. Estructura de carpetas (Atomic + feature-first)

```
belaink-pizza/
├── docs/                         # ← entregables (research, estrategia, este doc…)
├── public/
│   └── img/
│       ├── placeholder/          # slots hasta que subas fotos reales
│       └── brand/                # logo, favicon, OG (tu SVG)
├── src/
│   ├── app/                      # App Router (rutas = IA del doc 03)
│   │   ├── layout.tsx            # root: fonts, tokens, providers, schema base
│   │   ├── page.tsx              # landing
│   │   ├── menu/
│   │   │   ├── page.tsx
│   │   │   └── [categoria]/page.tsx
│   │   ├── producto/[slug]/page.tsx
│   │   ├── carrito/page.tsx
│   │   ├── checkout/page.tsx
│   │   ├── pedido/[id]/page.tsx
│   │   ├── promociones/page.tsx
│   │   ├── nosotros/page.tsx
│   │   ├── ubicacion/page.tsx
│   │   ├── preguntas-frecuentes/page.tsx
│   │   ├── api/                  # route handlers (pedidos, cupones, webhooks)
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── opengraph-image.tsx
│   ├── components/
│   │   ├── atoms/                # Button, Input, Price, Badge…
│   │   ├── molecules/            # FormField, QtyStepper, ZoneSelector…
│   │   ├── organisms/            # Navbar, Hero, MiniCartDrawer, CheckoutForm…
│   │   └── templates/            # LandingTemplate, MenuTemplate…
│   ├── content/                  # ← CAPA DE CONTENIDO (tu data entra acá)
│   │   ├── menu.ts               # tipos + items (VACÍO/placeholder → llenás vos)
│   │   ├── promos.ts
│   │   ├── business.ts           # NAP, horarios, zonas, WhatsApp
│   │   ├── reviews.ts
│   │   └── faq.ts
│   ├── lib/
│   │   ├── supabase/             # client/server, queries
│   │   ├── cart/                 # store Zustand + lógica
│   │   ├── validation/           # esquemas Zod
│   │   ├── seo/                  # schema.org builders (Restaurant, Menu)
│   │   ├── analytics/            # eventos del embudo
│   │   └── utils/
│   ├── hooks/                    # useReducedMotion, useScrollProgress…
│   ├── styles/
│   │   ├── tokens.css            # ← design system (doc 04) como variables
│   │   └── globals.css
│   └── types/
├── supabase/
│   ├── migrations/               # schema SQL (menú, pedidos, clientes, lealtad)
│   └── seed.sql                  # datos de ejemplo (reemplazables)
├── tailwind.config.ts            # lee tokens.css
├── next.config.ts                # imágenes, headers de seguridad, i18n futuro
├── llms.txt                      # capa de legibilidad IA (tendencia 2026)
├── .env.example                  # variables (sin secretos)
└── README.md
```

**Regla de oro:** **componentes no contienen contenido**. Todo texto/menú/precio/horario vive en `src/content/*` o Supabase. Cambiar el negocio = editar `content/`, no JSX. (DRY + tu data sin tocar código.)

---

## 3. Capa de contenido — "lista para llenar"

`src/content/menu.ts` define el **tipo** y exporta un arreglo **vacío o placeholder** marcado:
```ts
export type MenuItem = {
  slug: string;
  name: string;
  description: string;
  priceMXN: number;            // ← TU PRECIO REAL
  category: CategorySlug;
  image: string;               // ← /img/placeholder/* hasta tu foto
  tags?: ('veg' | 'picante' | 'nuevo' | 'popular')[];
  variants?: Variant[];        // tamaños
  extras?: Extra[];            // orilla rellena, etc.
  available: boolean;
};
// export const MENU: MenuItem[] = []  // ← se llena con tu data
```
- Mientras no haya data, las páginas renderizan **estados vacíos elegantes** ("menú en camino") en vez de romper.
- Migración futura a Supabase: misma forma de tipo → swap de fuente sin tocar UI.

---

## 4. Modelo de datos (Supabase / Postgres)

```
categories(id, slug, name, sort_order)
menu_items(id, slug, name, description, price_mxn, category_id,
           image_url, tags[], available, created_at)
item_variants(id, item_id, name, price_delta_mxn)
item_extras(id, item_id, name, price_mxn)

customers(id, phone, name, email, created_at)          -- dato propio (O2)
addresses(id, customer_id, label, line, zone_id, geo)
delivery_zones(id, name, polygon|postal_codes, eta_min, fee_mxn, active)

orders(id, customer_id, status, channel, subtotal, fee, total,
       payment_method, coupon_id, created_at)
order_items(id, order_id, item_id, qty, unit_price, variant, extras, line_total)

coupons(id, code, type, value, direct_only, expires_at, usage_limit)
loyalty(id, customer_id, points, tier)                  -- recompra (O4)
reviews(id, customer_id, order_id, rating, body, approved)
```
- **RLS (Row Level Security) ON** en todas las tablas con datos de cliente/pedido.
- `status` de pedido = máquina de estados (`pending → confirmed → preparing → out_for_delivery → delivered | canceled`) → alimenta el OrderTracker.
- `channel` = `web | whatsapp` (mide migración desde agregadores).

---

## 5. Estrategia de renderizado
- **RSC por defecto** (landing, menú, contenido, SEO) → HTML rápido, JS mínimo.
- **Client Components** sólo en islas interactivas: carrito, checkout, filtros, drawer, motion.
- **ISR / revalidate** para menú y promos (rápido + actualizable sin redeploy).
- **Streaming + Suspense** con skeletons (percepción <1s, R7).
- **Edge** para route handlers livianos (cupones, zona/ETA).

---

## 6. Performance (presupuesto duro — research §5)
| Métrica | Target |
|---|---|
| Lighthouse (mobile) | **≥ 95** |
| LCP | < 2.5s (objetivo <1.5s) |
| INP | < 200ms |
| CLS | < 0.1 |
| JS landing (gzip) | < 150kb |
- Imágenes: `next/image`, AVIF/WebP, `width/height` explícitos, hero `priority`+`fetchpriority=high`, resto `lazy`.
- Fonts: 2 familias máx, `font-display: swap`, preload 1 peso, subset latino.
- Code-splitting: Framer Motion y libs pesadas vía `dynamic()`.
- Sin CLS: reservar espacio de media; skeletons del mismo tamaño.

---

## 7. SEO (arquitectura — detalle en Fase 8)
- Metadata API de Next por ruta; `generateMetadata` dinámico (producto/categoría).
- **JSON-LD:** `Restaurant` (NAP, horarios, `acceptsReservations`, `servesCuisine`, `priceRange`, `aggregateRating`), `Menu`+`MenuItem`, `BreadcrumbList`, `FAQPage`.
- `sitemap.ts`, `robots.ts`, canónicas, Open Graph + Twitter, `opengraph-image`.
- **`llms.txt`** + `lang="es-MX"` → AI overviews + búsqueda local (research §5).
- NAP consistente con Google Business Profile.

---

## 8. Seguridad (OWASP — detalle en Fase 8)
- **Headers** (en `next.config.ts` / middleware): CSP con nonce, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options: DENY`.
- **Rate limiting** en route handlers (pedidos, cupones, contacto) — edge + token bucket.
- **Anti-spam**: honeypot + validación server (Zod) en formularios; sin CAPTCHA pesado salvo necesidad.
- **Supabase RLS** + service role sólo en server; **nunca** claves en cliente.
- **Validación en boundary**: todo input pasa por Zod antes de tocar DB.
- **Secretos** sólo en env server; `.env.example` sin valores.

---

## 9. Variables de entorno (`.env.example`)
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=        # server only
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=      # tu número de WhatsApp Business
NEXT_PUBLIC_GBP_PLACE_ID=         # Google Business Profile
```

## 10. Calidad / CI (Fase 8)
- ESLint + Prettier + `tsc --noEmit` (hooks PostToolUse).
- Tests: Vitest (unit/utils/hooks), Playwright (E2E flujo de pedido), visual regression en breakpoints 320/768/1024/1440.
- Cobertura objetivo 80% en lógica (carrito, validación, precios).

## 11. Decisiones que necesitan tu input
1. **¿Pago online real** (Stripe/Mercado Pago/Clip) o sólo contra entrega/WhatsApp? → define `payment_method` + integraciones.
2. **¿Supabase ya tenés proyecto** o lo creo nuevo? (puedo dejar migraciones listas).
3. **Dominio** para `NEXT_PUBLIC_SITE_URL`, OG, sitemap, schema.
