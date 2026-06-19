# 06 — Roadmap, Mantenimiento, Escalabilidad y Mejoras Futuras

**Proyecto:** Bela Ink Pizzería · **Fase:** documentación de cierre
**Estado actual:** landing premium funcionando y compilando (build verde, prerender estático). Módulo de pedidos = placeholder (CTA a Instagram). Data real pendiente del cliente.

---

## 1. Roadmap de implementación

### ✅ Hecho (este entregable)
- Investigación de mercado + estrategia + UX/IA + design system + arquitectura (docs 01–05).
- Scaffold Next.js 15 + TS + Tailwind + Framer Motion, **build verde**.
- Landing completa: hero, bento de menú, beneficios, proceso, reseñas, historia, ubicación, FAQ, CTA, footer.
- Capa de contenido tipada con **data real del negocio** (NAP, horario).
- SEO base: metadata, JSON-LD `Restaurant`+`FAQPage`, sitemap, robots, `llms.txt`.
- Seguridad base: headers OWASP en `next.config.ts`.
- A11y base: landmarks, skip link, foco visible, `prefers-reduced-motion`, accordion accesible.

### 🔜 Sprint 1 — "Real content" (desbloquea cliente)
| Tarea | Depende de |
|---|---|
| Subir fotos reales a `public/img/placeholder/` (nombres del README) | cliente |
| Cargar menú real + precios MXN en `src/content/menu.ts` | cliente |
| WhatsApp Business → `business.contact.whatsapp` + activar launcher | cliente |
| Lat/lng reales → incrustar mapa en sección Ubicación | cliente |
| Logo SVG real → nav/footer/favicon, generar `og.jpg` 1200×630 | cliente |
| Afinar copy de historia con la real | cliente |

### 🔜 Sprint 2 — "Deploy + SEO local"
- Deploy a Vercel apuntando a `belaink.agvsolutions.online` (DNS).
- Google Business Profile: alta/optimización, NAP idéntico al sitio.
- Verificar schema en Rich Results Test; enviar sitemap a Search Console.
- Analytics (Vercel Analytics + GA4) con eventos del embudo (doc 03 §7).
- Lighthouse CI: gate ≥95 mobile.

### 🔜 Sprint 3 — "Pedidos v1" (cuando el negocio lo decida)
- Definir modelo: WhatsApp estructurado vs checkout online.
- Si online: Supabase (schema del doc 05 §4) + checkout 1-página (doc 03) + pago (Mercado Pago/Clip/Stripe).
- Captura de cliente (O2) + base para lealtad.

### 🔜 Sprint 4 — "Lealtad + recompra"
- Programa de puntos / “pedir lo de siempre”.
- Incentivo directo (precio 10–15% < agregador) para migración (research §4).
- Email/WhatsApp marketing con consentimiento.

### 🎯 Hito de negocio
**Listo y rankeando antes del Mundial 2026** (research §1.3): pizza + futbol = pico de delivery. Sprints 1–2 son el mínimo para capturarlo.

---

## 2. Plan de mantenimiento

### Rutina
| Frecuencia | Tarea |
|---|---|
| Continuo | Editar `src/content/*` para menú/promos/horarios (sin tocar componentes) |
| Semanal | Revisar pedidos/mensajes, actualizar promos/destacados |
| Mensual | Revisar Core Web Vitals (Search Console), reseñas nuevas, fotos frescas |
| Trimestral | `npm update` (deps menores), auditar dependencias, revisar CSP/headers |
| Semestral | Actualizar Next.js mayor, revisar accesibilidad (axe), refrescar contenido |

### Operación técnica
- **Branching:** `main` (producción) + feature branches. No commitear secretos (`.env.local` ignorado).
- **CI sugerido:** lint + `typecheck` + build en cada PR; deploy preview automático (Vercel).
- **Backups:** cuando entre Supabase → backups automáticos diarios + point-in-time.
- **Monitoreo:** Vercel Analytics (Web Vitals reales) + alertas de error.
- **Calidad de código:** `npm run lint`, `npm run typecheck` antes de merge.

### Quién mantiene qué
- **Contenido (no técnico):** archivos en `src/content/` + fotos en `public/img/` — editables sin saber React.
- **Diseño:** tokens en `src/styles/tokens.css` — cambiar marca/colores sin tocar componentes.
- **Funcionalidad:** componentes en `src/components/` — requiere dev.

---

## 3. Plan de escalabilidad

### Contenido
- Menú: hoy estático tipado → migrar a **Supabase** (mismo tipo `MenuItem`) cuando crezca o cambie seguido. UI no cambia.
- Multi-sucursal: `business` → arreglo de sucursales; rutas `/[sucursal]`; zonas/horarios por sede.

### Tráfico
- Vercel Edge + ISR/`revalidate`: escala a picos (Mundial) sin tocar infra.
- Imágenes vía `next/image` + CDN: optimización automática AVIF/WebP.
- Static-first: la landing es prerender estático → costo casi nulo, latencia mínima.

### Funcional
- **Pedidos online:** route handlers + Supabase + RLS (doc 05). Rate limiting en edge.
- **i18n (ES/EN):** estructura lista para `next-intl` (útil para Mundial / turismo).
- **Componentes:** Atomic Design → agregar features reusando átomos/moléculas existentes.
- **Pagos:** capa de pago desacoplada → swap de proveedor sin reescribir checkout.

### Datos
- De cero dato propio (hoy IG) → Postgres con clientes/pedidos/lealtad → base para BI y remarketing (la tesis del proyecto, research §4).

---

## 4. Lista de mejoras futuras (priorizada)

### Alto impacto / conversión
1. **Pedidos online reales** + checkout 1-página (recupera margen del agregador).
2. **WhatsApp Business API** con catálogo y mensajes pre-armados.
3. **Programa de lealtad** + "pedir lo de siempre".
4. **Reseñas reales** (Google/IG) embebidas + `aggregateRating` activo.
5. **Mapa interactivo** real + cálculo de zona/ETA en hero (R1 completo).

### Performance / técnica
6. Bajar First Load JS de **~153 kB → <150 kB** (lazy-load de `Reveal`/Framer Motion vía `dynamic()`, o usar IntersectionObserver propio para reveals simples).
7. `opengraph-image.tsx` dinámico (OG generado por ruta).
8. Video hero (lazy + poster) cuando haya material.
9. Tests: Vitest (utils/precios), Playwright (flujo de reserva/pedido), visual regression 320/768/1024/1440.
10. CSP con nonce por request cuando entren scripts dinámicos.

### Marca / contenido
11. Sección de **arte/exposiciones** (ARTWEEK, eventos) — único de Bela Ink, refuerza el diferencial.
12. Galería editorial (el feed de IG es oro visual).
13. Carta de vinos como pieza de diseño propia.
14. Newsletter / lista de eventos.

### Marketing / SEO
15. Páginas locales ("pizza napolitana San Miguel Chapultepec") para SEO long-tail.
16. Blog/notas (masa, maridaje, arte) para autoridad + AI overviews.
17. Píxel/eventos para retargeting (con consentimiento).

---

## 5. Definición de "listo para producción" (checklist)
- [ ] Fotos reales cargadas (no placeholders)
- [ ] Menú + precios reales
- [ ] WhatsApp + contacto reales
- [ ] Logo + favicon + OG image
- [ ] Coordenadas + mapa
- [ ] Deploy en dominio + DNS
- [ ] Google Business Profile alineado (NAP)
- [ ] Lighthouse ≥95 mobile verificado
- [ ] Schema validado (Rich Results Test)
- [ ] Analytics activo
- [ ] Revisión de accesibilidad (axe) sin errores críticos
- [ ] Términos/privacidad/cookies publicados
