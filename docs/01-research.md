# 01 — Investigación de Mercado y Competencia

**Proyecto:** Bela Ink Pizzería — Plataforma digital premium (México)
**Fase:** 1 de 8 (lockstep)
**Fecha:** Junio 2026
**Estado de datos:** Mercado/competencia = datos reales (web, junio 2026). Marca/menú/precios/ubicación = **PENDIENTE de cliente** (se completa al recibir tu data).

> Cómo leer este doc: cada sección cierra con **Reto cruzado** — la objeción que un especialista del equipo le hace a otro para no comprar conclusiones fáciles. Es el control de calidad de una agencia, no relleno.

---

## 0. Snapshot de marca (lo confirmado)

| Campo | Valor | Fuente |
|---|---|---|
| Nombre | **Bela Ink Pizzería** | Instagram `@belainkpizza` |
| Canal actual | Instagram | confirmado |
| Web propia | No detectada | — |
| Menú / precios / sucursales | **Desconocido** | bloqueado por login wall de IG |
| Fotos de producto | En IG, **no extraíbles** sin sesión | login wall |

**Implicación inmediata:** la marca hoy vive 100% en un canal alquilado (Instagram) que no convierte directo, no es indexable por Google y no genera datos propios de cliente. Eso es exactamente el problema que este proyecto resuelve.

---

## 1. Tamaño y crecimiento del mercado

### 1.1 Pizza en México
- Mercado de pizza en México: **USD 2,328 M (2024) → USD 3,394.63 M (2033)**, CAGR **4.28%** (2025–2033). [IMARC]
- Mercado global de pizza como contexto: ~USD 151.5 mil M (2024), CAGR ~4.5% (2025–2034). [Informes de Expertos]

### 1.2 Delivery de comida en México
- México = **2.º mercado de delivery más grande de LATAM** (solo detrás de Brasil), ~**USD 2,530 M (2024)**. [Expansión]
- Plataformas líderes por usuarios activos mensuales (2024): **DiDi Food 38%**, **Rappi 36%**. Uber Eats el tercero relevante. [Expansión]
- **57%** de los encuestados en México considera confiable pedir por apps tipo Rappi/Uber Eats/DiDi. [Expansión]
- Drivers: penetración de smartphones, mejora de apps, logística más eficiente, y un cambio de hábito post-pandemia que "llegó para quedarse". [Expansión / Merca2.0]

### 1.3 La ventana de timing: Mundial 2026
- **El Mundial de Futbol 2026 se juega en México** (sede compartida). Pizza Hut abrió su sucursal #300 en enero 2025 y **abre 15 nuevas en Q1 2026 de cara al Mundial**. [El Financiero]
- Pizza + futbol + reunión en casa = pico de demanda de delivery. **Esto fija un deadline de negocio real:** el sitio debe estar maduro y rankeando *antes* del Mundial, no durante.

**Reto cruzado (Product Manager → Food Research):** "4.28% CAGR es plano. ¿Por qué invertir nivel premium?" → Respuesta: el crecimiento no está en el *tamaño* del pastel sino en el *margen capturado*. Hoy la pizzería regala 20–40% a agregadores (§4). El upside no es vender más pizza, es **quedarse con la pizza que ya vende**. El Mundial sólo concentra ese upside en una ventana corta.

---

## 2. Competencia directa (cadenas en México)

| Cadena | Fortaleza digital | Debilidad explotable |
|---|---|---|
| **Domino's** | App madura, tracker de pedido, cobertura | UX genérica global, branding poco "artesanal", experiencia idéntica en todo el mundo (cero local) |
| **Pizza Hut** | Expansión agresiva (300+ tiendas, +15 Q1 2026), presupuesto Mundial | Marca percibida como "familiar/barata", web pesada, poca narrativa de producto |
| **Papa John's** | Posicionamiento "mejores ingredientes" | Menor escala en MX, presencia digital menos diferenciada |

### 2.1 Dónde son fuertes (no pelear de frente)
- Logística, cobertura nacional, presupuesto de medios, reconocimiento de marca. **Una pizzería no gana ahí.**

### 2.2 Dónde son débiles (el hueco competitivo)
1. **Cero alma de producto.** Las cadenas venden conveniencia, no artesanía. Una pizzería independiente puede vender **proceso, masa, origen, carácter** — exactamente el territorio "premium" (Apple/Stripe venden producto + historia, no specs).
2. **UX clonada.** La web de una cadena global no puede ser local ni editorial; está atada a un design system corporativo. Aquí se puede hacer algo *específico de Bela Ink*.
3. **Sin relación directa.** Las cadenas también empujan a sus apps, pero su experiencia de marca es transaccional. Hay espacio para **fidelización con personalidad**.

**Reto cruzado (Branding → CRO Expert):** "Si vendemos 'artesanía' y 'historia', ¿no matamos la conversión con tiempo de lectura?" → Resolución: la narrativa es **capa secundaria** (scroll abajo / página historia), nunca bloquea el camino al pedido. El hero vende *relevancia + velocidad* (cocina, zona de entrega, ETA) primero — la artesanía es el *por qué te quedas*, no el *por qué no podés pedir*. Ver §6.

---

## 3. Comportamiento del consumidor de delivery (México)

- Delivery pasó de "alternativa ocasional" a **hábito cotidiano** para millones. [Merca2.0]
- Pedidos de delivery/para-llevar **suben pese a inflación** y aumento de costo de vida (la gente recorta otras cosas antes que el delivery). [Deliverect vía PR Newswire]
- **Confianza** (57%) es alta pero condicionada: el usuario confía en la *plataforma*, no necesariamente en el restaurante directo. **Romper esa dependencia exige que el sitio propio se sienta igual de confiable o más** (señales de trust, ETA clara, costo final sin sorpresas, soporte visible).

**Implicaciones de diseño (UX Researcher):**
- **Mobile-first no es opcional**, es el 100% del caso de uso real de delivery.
- El usuario decide en segundos: *¿llegan a mi zona? ¿cuánto tarda? ¿cuánto sale total?* Si no lo ve rápido, vuelve al agregador.
- La fricción de checkout en móvil tiene impacto desproporcionado en ingresos.

**Reto cruzado (UX Researcher → Mobile Specialist):** "Decimos mobile-first pero el cliente quiere competir con Apple/Linear, que brillan en desktop." → Resolución: el *wow* visual (motion, bento, tipografía) se diseña para que **degrade con gracia y rendimiento en móvil**; nada de kinetic typography que rompa Core Web Vitals (§5). Desktop puede ser más cinematográfico; móvil prioriza velocidad y pulgar.

---

## 4. Economía de agregadores — la tesis estratégica central

Este es el corazón del caso de negocio.

- Agregadores cobran **20–30% de comisión por pedido**, llegando a **>40%** con fees ocultos. [CloudKitchens / NIX United]
- Con agregadores, **los datos del cliente son de la plataforma**, no del restaurante. [varios]
- Restaurantes con **pedido directo + lealtad** ven **38% más tasa de recompra**. [estudios 2025]
- **72% de los pedidos en marketplaces vienen de clientes que YA conocen el restaurante** — no fueron "descubiertos" por el agregador; y **migran a directo si les das una razón**. [estudios 2025]
- Precios directos **10–15% más bajos** que en marketplace → **45–55% de migración en 30 días**. [estudios 2025]
- La mayoría **recupera la inversión en 2–4 meses** al eliminar comisiones. [estudios 2025]

### Traducción a Bela Ink
> Cada pedido que hoy entra por Rappi/DiDi/Uber Eats deja **20–40% en la mesa**. Un sitio propio premium que convierta tan bien como un agregador (o mejor, por confianza + diseño) **recupera ese margen** y, sobre todo, **captura el dato del cliente** para remarketing, lealtad y recompra. El sitio no es un gasto de branding: es un **canal de adquisición con ROI medible en meses**.

**Reto cruzado (Restaurant Consultant → Frontend Architect):** "Lindo, pero si el sitio propio no tiene la logística de Rappi, ¿cómo entregamos?" → Resolución honesta: **no reinventamos logística**. Fase pragmática: pedido directo vía **WhatsApp Business + checkout propio**, con repartidor propio o agregador *sólo como flota* (sin canibalizar la relación de marca). Esto se documenta en el sistema de pedidos (Fase 8) y depende de la operación real del cliente — **pregunta abierta para vos**.

---

## 5. Tendencias de diseño web 2026 (qué adoptar y qué evitar)

| Tendencia | Veredicto | Aplicación a Bela Ink |
|---|---|---|
| **Bento grids "activos"** (Apple) — hover abre tile, reproduce video, revela capa | ✅ Adoptar | Menú destacado / beneficios / promos como bento interactivo |
| **Dark / luxury sobre OLED** — colores saturados resaltan, se siente premium | ✅ Adoptar con criterio | Posible dirección "dark luxury" para hero/historia; **no forzar dark global** (la comida vende mejor con luz cálida) |
| **Tipografía expresiva como héroe** (casi todo Awwwards) | ✅ Adoptar | Headlines grandes con carácter + pairing real; eje del branding |
| **Kinetic typography** | ⚠️ Evitar en producción | "Casi nunca llega a producción: pelea con screen readers, con crawlers, y mete layout shift que destroza Core Web Vitals" [studiomeyer]. Usar microinteracciones compositor-friendly, no texto animado pesado |
| **Capas de legibilidad para IA** (`llms.txt`, `agents.json`, schema markup) | ✅ Adoptar | Diferenciador 2026: el sitio debe ser legible por IA y aparecer en AI overviews. Schema `Restaurant` + `Menu` (§ SEO) |
| **Anti-grid / brutalism** | ❌ No | Riesgo de "template raro" y daño a conversión; contradice premium-confiable |

**Benchmarks de referencia (el cliente los pidió): Apple, Stripe, Linear, Tesla, Raycast.**
Patrón común que SÍ copiamos: **claridad jerárquica brutal, motion con propósito, producto como héroe, performance impecable, copy preciso.** Lo que NO copiamos: su frialdad tech — Bela Ink necesita **calidez de comida + apetito** (color, textura, fotografía).

**Reto cruzado (Art Director → Performance Engineer):** "Quiero hero cinematográfico con video." → Resolución: video hero sólo con poster optimizado, `preload` selectivo, formatos modernos, y fallback a imagen; presupuesto de performance manda (Lighthouse 95+, §Performance). El *wow* no puede costar el LCP.

---

## 6. CRO — qué mueve la aguja en delivery (2025/2026)

Hallazgos accionables (priorizados):

1. **Checkout de una sola página > multi-paso.** Menos pasos = más conversión; sitios grandes ganan **hasta +35% de conversión** sólo arreglando el checkout. [Baymard]
2. **Quitar campos y pasos innecesarios.** Cada campo extra es abandono. [CartBoss/Baymard]
3. **Framing de relevancia primero.** Falla común: abrir con lenguaje de marca y retrasar lo que el comprador necesita: *encaje de cocina, zona de entrega, expectativa de velocidad.* [Unicorn Platform]
4. **Trust sin ambigüedad.** El usuario debe confirmar **rápido**: costo final, ETA, política de sustitución, acceso a soporte. [Unicorn Platform]
5. **Fricción móvil = pérdida de ingresos.** Controles tap-friendly, layout estable, jerarquía legible; cart y checkout predecibles en pantalla chica. [CloudKitchens]
6. **Optimizar para recompra, no sólo conversión.** El mejor modelo combina métricas de conversión con señales de re-pedido. [Unicorn Platform] — conecta directo con la tesis de lealtad (§4).

**Embudo objetivo (borrador, se refina en Fase 2):**
`Llegada → Relevancia (zona+ETA+precio) → Menú → Item/upsell → Carrito → Checkout 1-página → Confirmación+tracking → Recompra (lealtad)`

**Reto cruzado (CRO Expert → Accessibility Expert):** "Checkout de 1 página denso puede romper accesibilidad." → Resolución: 1 página ≠ amontonado; secciones con headings reales, foco gestionado, validación inline accesible, targets ≥44px. Conversión y a11y empujan en la misma dirección si se diseña bien (§Design System / a11y WCAG 2.2).

---

## 7. Oportunidades competitivas (síntesis)

1. **Margen recuperable** — matar el impuesto del 20–40% del agregador (mayor ROI del proyecto).
2. **Dato propio del cliente** — base para lealtad, remarketing y recompra (+38% repeat).
3. **Hueco de marca premium-artesanal** — territorio que las cadenas no pueden ocupar.
4. **Ventana Mundial 2026** — pico de demanda con deadline real; rankear *antes*.
5. **Legibilidad para IA + Local SEO** — aparecer en AI overviews y búsqueda local mientras la competencia local sigue sólo en Instagram.
6. **Velocidad como feature** — Lighthouse 95+ y carga <1s como ventaja sensorial (estilo Linear/Stripe), no sólo métrica.

## 8. Amenazas / riesgos

| Riesgo | Mitigación |
|---|---|
| Logística propia inmadura vs Rappi | WhatsApp + flota híbrida; no prometer lo que no se cumple (§4) |
| Comodidad/hábito del usuario con apps | Incentivo directo: precio 10–15% menor + lealtad exclusiva (§4) |
| Premium percibido como "caro" | Calidez + precio claro + sin fees sorpresa; trust > lujo frío |
| Performance vs ambición visual | Presupuesto de performance como restricción dura (§5) |
| Datos reales aún no provistos | Capa de contenido tipada y vacía; el sitio se construye listo para llenar |

---

## 9. Tesis estratégica (una frase)

> **Bela Ink no necesita "una web de restaurante". Necesita un canal propio de venta directa, premium y rapidísimo, que convierta como un agregador pero deje el margen y el dato en casa — listo para capitalizar el Mundial 2026.**

---

## 10. Preguntas abiertas para el cliente (desbloquean fases siguientes)

1. **Menú + precios reales** (MXN) — categorías, items, variantes, extras.
2. **Sucursal(es) + zonas de entrega** + horarios — crítico para Local SEO y framing de relevancia.
3. **Operación de delivery** — ¿flota propia, agregador-como-flota, o sólo pickup? Define el sistema de pedidos.
4. **WhatsApp Business** — ¿número/cuenta para canal de pedidos?
5. **Fotos** — export del IG o sesión nueva (vos las subís).
6. **Tono de marca** — ¿más "dark luxury editorial" o "calidez artesanal cálida"? (afecta dirección de arte, Fase 4).

---

## Fuentes

- [IMARC — Mexico Pizza Market](https://www.imarcgroup.com/mexico-pizza-market)
- [Informes de Expertos — Mercado de Pizza](https://www.informesdeexpertos.com/informes/mercado-de-pizza)
- [El Financiero — Pizza Hut nuevas sucursales Mundial 2026](https://www.elfinanciero.com.mx/empresas/2025/12/05/llegaron-las-pipsas-pizza-hut-abrira-nuevas-sucursales-para-el-mundial-de-futbol-2026/)
- [Expansión — México 2.º mercado delivery LATAM](https://expansion.mx/tecnologia/2025/05/30/mexico-segundo-mercado-delivery-latinoamerica)
- [Merca2.0 — Delivery, el servicio más demandado](https://www.merca20.com/delivery-el-servicio-mas-demandado-por-los-mexicanos-revela-estudio/)
- [PR Newswire — Estudio Deliverect (pedidos suben pese a inflación)](https://www.prnewswire.com/news-releases/nuevo-estudio-de-deliverect-indica-que-los-consumidores-estan-haciendo-mas-pedidos-de-delivery-y-para-llevar-a-pesar-de-la-inflacion-y-el-aumento-del-costo-de-vida-864335686.html)
- [CloudKitchens — Delivery app fees](https://cloudkitchens.com/blog/delivery-app-fees)
- [NIX United — Hidden cost of third-party delivery](https://nix-united.com/blog/the-hidden-cost-of-food-delivery-services-why-you-need-your-own-app/)
- [Baymard — Checkout UX](https://baymard.com/blog/current-state-of-checkout-ux)
- [Unicorn Platform — Food Delivery Conversion Pages 2026](https://unicornplatform.com/blog/food-delivery-conversion-pages-in-2026/)
- [studiomeyer.io — Web Design Trends 2026 reality check](https://studiomeyer.io/en/blog/webdesign-trends-2026-reality-check)
- [Search Engine Journal — Schema for Local SEO](https://www.searchenginejournal.com/how-to-use-schema-for-local-seo-a-complete-guide/294973/)
- [BeFoundOnline — Schema Markup for Restaurant SEO 2025](https://befoundonline.com/blog/why-schema-markup-is-crucial-for-restaurant-seo-in-2025)
