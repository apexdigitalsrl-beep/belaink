# 02 — Estrategia de Negocio y Conversión

**Proyecto:** Bela Ink Pizzería — Plataforma digital premium
**Fase:** 2 de 8 · Depende de: [01-research.md](01-research.md)
**Estado de datos:** Estrategia = lista. Números reales (ticket, volumen, comisión actual) = **PENDIENTE de cliente** — el modelo financiero abajo usa rangos del research, se calibra con tu data.

---

## 1. Posicionamiento

### 1.1 Statement
> **Bela Ink es la pizza artesanal que pedís en 30 segundos y llega como en el local.**
> Premium en producto, rapidísima en experiencia, directa en la relación.

### 1.2 Territorio de marca (vs competencia)
```
                 PREMIUM / ARTESANAL
                        ▲
                        │
        (hueco)    ●  BELA INK ← territorio objetivo
                        │
   Papa John's ●        │
                        │        ● pizzerías locales (solo IG)
 ───────────────────────┼───────────────────────► CONVENIENCIA / ESCALA
                        │   ● Domino's
                        │   ● Pizza Hut
                        │
                  GENÉRICO / COMMODITY
```
Las cadenas dominan **conveniencia/escala**. Las pizzerías locales tienen **alma pero cero experiencia digital**. Bela Ink toma el cuadrante vacío: **artesanal + experiencia digital de cadena (o mejor)**.

### 1.3 Propuesta de valor (3 capas)
1. **Funcional:** pizza artesanal, pedido rápido, entrega confiable, precio directo más conveniente que el agregador.
2. **Emocional:** "tu pizzería de barrio se siente de otro nivel" — orgullo de pedir algo con carácter.
3. **Identitaria:** elegir Bela Ink = elegir producto real sobre cadena clonada.

### 1.4 Pilares de mensaje
- **Artesanía** (masa, proceso, ingredientes) — el *por qué* premium.
- **Velocidad** (pedido en segundos, ETA clara) — el *por qué* convierte.
- **Cercanía** (directo, WhatsApp, lealtad) — el *por qué* vuelve.

**Reto cruzado (Digital Marketing → Branding):** "¿'Artesanal' no está quemado?" → No lo nombramos, lo *mostramos* (proceso, fotos, textura). El copy evita el adjetivo y entrega la prueba. Diferenciador = evidencia, no claim.

---

## 2. Objetivos y KPIs

### 2.1 Objetivos de negocio
| # | Objetivo | Métrica primaria | Target inicial* |
|---|---|---|---|
| O1 | Vender directo (sin comisión agregador) | % pedidos por canal propio | de 0% → 30% en 90 días |
| O2 | Capturar dato de cliente | nº clientes con perfil/teléfono | base creciente |
| O3 | Maximizar conversión | CVR visita→pedido | 3–6% (benchmark e-comm food) |
| O4 | Maximizar recompra | repeat rate 30/60/90d | +38% vs baseline (research) |
| O5 | Adquisición orgánica | tráfico local SEO + AI overviews | rankear pre-Mundial 2026 |

\* *Targets se recalibran con tu volumen real.*

### 2.2 North Star Metric
**Pedidos directos completados / semana.** Conecta conversión (O3), recompra (O4) y margen (O1) en un solo número accionable.

### 2.3 KPIs secundarios (CRO)
- LCP / INP / CLS (performance = conversión sensorial)
- Add-to-cart rate, cart→checkout, checkout completion
- AOV (ticket promedio) y attach rate de upsell/cross-sell
- Abandono de carrito y punto exacto de fuga (instrumentado, Fase Analytics)

---

## 3. El caso financiero (modelo, calibrable)

> Plantilla de ROI. Sustituí variables con tu data real (§ preguntas abiertas en research).

```
Variables (ejemplo ilustrativo — NO son tus números):
  Pedidos/mes vía agregadores      = P      (ej. 1,000)
  Ticket promedio (AOV)            = T      (ej. $280 MXN)
  Comisión agregador               = c      (ej. 28%)
  Migración a directo en 90d       = m      (ej. 30%, research: 45–55% con incentivo)

Margen recuperado / mes ≈ P × m × T × c
  = 1,000 × 0.30 × $280 × 0.28
  = $23,520 MXN / mes recuperados

Inversión web premium se recupera en ~2–4 meses (research, §4).
```
**Lectura:** el sitio no compite con "tener Instagram". Compite con **el 28% que se va en comisión**. Ese es el presupuesto que lo paga.

**Reto cruzado (Restaurant Consultant → CRO):** "La migración no es gratis: el cliente tiene el hábito del agregador." → Por eso O1 se apoya en **incentivo directo** (precio 10–15% menor en directo + lealtad exclusiva) y en **fricción mínima** (checkout 1-página, WhatsApp). El research muestra 45–55% de migración en 30 días *cuando hay razón*. Nuestro trabajo es construir esa razón en UI.

---

## 4. Estrategia de conversión (CRO) — del research a las reglas

Principios traducidos a reglas de diseño no-negociables:

| # | Regla CRO | Origen (research §6) | Dónde se aplica |
|---|---|---|---|
| R1 | **Relevancia antes que marca:** en el primer viewport, el usuario ve zona de entrega + ETA + CTA pedir | "weak relevance framing" | Hero landing |
| R2 | **Checkout de 1 página**, mínimos campos | +35% CVR (Baymard) | Sistema de pedidos |
| R3 | **Trust explícito:** costo final, ETA, soporte, sin fees sorpresa | "trust ambiguity" | Carrito + checkout + footer |
| R4 | **Mobile tap-first:** targets ≥44px, layout estable, cero CLS | fricción móvil | Todo |
| R5 | **Upsell/cross-sell contextual** (no intrusivo) | AOV | Item detail + carrito |
| R6 | **Optimizar recompra:** lealtad + cuenta + re-pedido 1-tap | repeat signals | Post-pedido + lealtad |
| R7 | **Velocidad = feature:** <1s percibido, skeletons, prefetch | CWV | Arquitectura |
| R8 | **Prueba social temprana** (opiniones, ratings reales) | trust | Landing + menú |

### 4.1 Jerarquía de CTAs
- **Primario (1, repetido):** "Pedir ahora" → flujo de pedido. Color de marca, alto contraste, sticky en móvil.
- **Secundarios:** "Ver menú", "WhatsApp", "Promos".
- **Terciarios:** "Nuestra historia", "Ubicación", "FAQ".
- **Regla:** nunca dos CTAs primarios compitiendo en un mismo viewport.

### 4.2 Reductores de fricción
- Pedir **sin cuenta obligatoria** (guest checkout); cuenta = opt-in con beneficio.
- Autodetección/recuerdo de dirección y zona.
- Pago flexible (efectivo/tarjeta/transferencia/links) — se define con operación real.
- WhatsApp como **fallback de confianza** y canal de soporte visible.

### 4.3 Amplificadores de confianza
- ETA realista y honesta (no prometer de más).
- Costo total visible **antes** del último paso.
- Estado del pedido (tracking/confirmación) visible.
- Señales: ratings, reseñas, "X pedidos esta semana", garantías.

**Reto cruzado (Accessibility → CRO):** "Sticky CTA en móvil puede tapar contenido y romper foco." → Sticky con `safe-area-inset`, altura mínima, sin atrapar foco de teclado, y `aria-label` claro. Conversión y a11y alineadas (se especifica en Design System).

---

## 5. Estrategia de retención y lealtad

- **Captura:** cada pedido directo deja teléfono/email (con consentimiento) → dato propio (O2).
- **Programa de lealtad:** recompensas **exclusivas de pedido directo** (research: razón para migrar). Ej: puntos, pizza gratis al N pedido, perks de cumpleaños.
- **Re-pedido 1-tap:** "Pedir lo de siempre" desde historial.
- **Ciclo de recompra:** WhatsApp/email con ofertas segmentadas (no spam) — respeta opt-in y anti-abuso.
- **Reseñas:** post-pedido pide rating; alimenta prueba social + Local SEO.

---

## 6. Estrategia de canal y SEO (resumen, detalle en Fase SEO)

- **Sitio propio = activo central** (indexable, dato propio, sin comisión) vs Instagram (alquilado).
- **Local SEO + Google Business Profile** = adquisición orgánica antes del Mundial.
- **Schema `Restaurant` + `Menu`** + capa de legibilidad IA (`llms.txt`) = aparecer en búsqueda local y AI overviews mientras la competencia local sigue solo en IG.
- **WhatsApp** como puente de bajo costo entre descubrimiento y pedido directo.

---

## 7. Roadmap estratégico (fases de negocio)

| Horizonte | Foco | Resultado |
|---|---|---|
| **0–30 días** | Lanzar sitio + menú + pedido WhatsApp/checkout, GBP, schema | Canal directo vivo |
| **30–60 días** | Incentivo de migración (precio directo + lealtad), instrumentar analytics | Migración medible |
| **60–90 días** | Optimizar embudo con datos reales, A/B en CTAs/checkout, push pre-Mundial | CVR + repeat al alza |
| **Mundial 2026** | Campañas de pico, capacidad, promos de evento | Captura del pico con margen propio |
| **Post-Mundial** | Lealtad, expansión de menú, automatizaciones | Base recurrente |

---

## 8. Riesgos de negocio y mitigación

| Riesgo | Prob. | Impacto | Mitigación |
|---|---|---|---|
| Baja migración desde agregadores | Media | Alto | Incentivo directo + fricción mínima + lealtad exclusiva |
| Operación de delivery no soporta volumen | Media | Alto | Empezar con zonas/horarios acotados; flota híbrida |
| Datos reales tardan → bloqueo | Media | Medio | Capa de contenido tipada vacía; se construye listo para llenar |
| Performance no alcanza targets | Baja | Alto | Presupuesto de performance como restricción dura desde arquitectura |
| Dependencia de un solo dev | — | Medio | Clean code + Atomic Design + docs (plan de mantenimiento, Fase 8) |

---

## 9. Decisiones que necesitan tu input (para Fase 3+)

1. **Modelo de pedido real:** ¿checkout con pago online, o pedido vía WhatsApp con pago contra entrega, o ambos?
2. **Zonas de entrega y horarios** (define el framing de relevancia del hero).
3. **¿Habrá programa de lealtad desde el día 1** o se difiere?
4. **Métodos de pago** disponibles realmente.
5. **Números base** (volumen, ticket, comisión) para calibrar el modelo financiero.

> Mientras tanto, Fase 3 (UX/IA) avanza con supuestos marcados y reemplazables.
