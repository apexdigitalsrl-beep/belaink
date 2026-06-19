# 03 — UX: Customer Journey, User Flows, Arquitectura de Información, Wireframes

**Proyecto:** Bela Ink Pizzería · **Fase:** 3 de 8 · Depende de: [02-strategy.md](02-strategy.md)
**Principio rector:** mobile-first, conversión sin fricción, confianza explícita (ver reglas R1–R8 en estrategia §4).

---

## 1. Personas (basadas en research de comportamiento)

### P1 — "El antojo rápido" (primario, ~60%)
- Móvil, hambre ahora, decide en segundos. Quiere: *¿llegan a mi zona? ¿cuánto tarda? ¿cuánto sale?*
- Pain: webs lentas, menús confusos, costo sorpresa en el último paso.
- Gana si: pide en <2 min sin pensar.

### P2 — "El planificador de reunión" (~25%)
- Pide para varios (familia, partido, Mundial). Ticket alto, compara, quiere combos/promos.
- Pain: armar pedido grande es tedioso; no ve combos claros.
- Gana si: combos visibles, upsell útil, carrito editable fácil.

### P3 — "El fiel recurrente" (~15%, el más rentable)
- Ya conoce Bela Ink. Quiere re-pedir lo de siempre, rápido, y siente que "le conviene" pedir directo.
- Pain: tener que rearmar el pedido cada vez; no percibe beneficio de directo vs app.
- Gana si: "pedir lo de siempre" 1-tap + lealtad exclusiva.

**Reto cruzado (UX Researcher → CRO):** "Diseñar para los 3 puede diluir el hero." → Resolución: el hero sirve a **P1** (relevancia+velocidad). P2 se captura en menú/combos. P3 en cuenta/lealtad/historial. Un camino primario, dos desvíos opcionales. Nada compite con "Pedir ahora".

---

## 2. Customer Journey Map

```
ETAPA      DESCUBRIR        CONSIDERAR        PEDIR             RECIBIR          VOLVER
─────────────────────────────────────────────────────────────────────────────────────
Trigger    Antojo / IG /    "¿me conviene     Arma pedido       Espera + come    Antojo otra vez
           Google / Mundial  pedir acá?"
─────────────────────────────────────────────────────────────────────────────────────
Touch      GBP, búsqueda,   Landing hero,     Menú, item,       Confirmación,    Email/WA,
point      IG link, AI       menú, promos,     carrito,          tracking,        historial,
           overview          reseñas           checkout 1-pág    WhatsApp         lealtad
─────────────────────────────────────────────────────────────────────────────────────
Pensa-     "¿existe web?     "¿llega a mi      "¿rápido y        "¿llega cuando   "¿me dieron
miento     ¿es confiable?"   zona? ¿ETA?       sin fricción?"    dijeron?"        razón para
                             ¿precio?"                                            volver?"
─────────────────────────────────────────────────────────────────────────────────────
Emoción    🤔 curiosidad    😐→🙂 evalúa      😬→😌 alivio      😋 satisfacción  🤝 lealtad
─────────────────────────────────────────────────────────────────────────────────────
Pain       solo IG, sin     marca antes que   checkout largo,   "¿y mi pedido?"  rearmar todo,
           web indexable    relevancia        campos de más,    sin estado       sin beneficio
                                              costo sorpresa
─────────────────────────────────────────────────────────────────────────────────────
Reglas     SEO local +      R1 relevancia,    R2 1-página,      R3 trust,        R6 recompra,
CRO        schema + IA      R8 prueba social  R4 móvil, R5 up   tracking/WA      lealtad 1-tap
─────────────────────────────────────────────────────────────────────────────────────
Oportu-    aparecer donde   ganar en los      eliminar toda     cumplir y        cerrar el loop
nidad      la competencia   primeros 5 seg    fricción          comunicar        de margen+dato
           local no está
```

---

## 3. Arquitectura de Información (sitemap)

```
Bela Ink (/)
│
├── / ............................ Landing (hero, destacados, promos, beneficios,
│                                  proceso, opiniones, historia, ubicación, FAQ, footer)
├── /menu ........................ Menú digital (categorías, filtros, búsqueda)
│   └── /menu/[categoria] ........ Vista de categoría
│       └── /producto/[slug] ..... Detalle de item (variantes, extras, upsell)
├── /carrito ..................... Carrito (editable, cross-sell, resumen costo)
├── /checkout .................... Checkout 1-página (datos, entrega, pago, cupón)
├── /pedido/[id] ................. Confirmación + tracking
├── /promociones ................. Promos y combos
├── /nosotros .................... Historia + proceso de elaboración
├── /ubicacion ................... Sucursal(es), zonas, horarios, mapa
├── /preguntas-frecuentes ........ FAQ
├── /cuenta ...................... (opt-in) perfil, historial, lealtad, "lo de siempre"
└── legal/ ....................... términos, privacidad, cookies

Capas no-página:
├── Sticky order bar (móvil) ..... CTA "Pedir" persistente
├── Mini-cart drawer ............. acceso a carrito sin perder contexto
└── WhatsApp launcher ............ soporte/pedido fallback
```

### 3.1 Navegación
- **Top nav (desktop):** Logo · Menú · Promos · Nosotros · Ubicación · [Pedir ahora] · cart
- **Móvil:** logo + cart + hamburguesa; **barra inferior sticky** con "Pedir ahora".
- **Footer (avanzado):** mapa del sitio, horarios, zonas, contacto, WhatsApp, redes, legal, newsletter/lealtad, schema NAP.

---

## 4. User Flows (críticos)

### 4.1 Flujo primario — Pedido (P1, happy path)
```
[Landing] ─ ve zona+ETA+CTA (R1)
   │ "Pedir ahora"
   ▼
[Menú] ─ categorías/filtros/búsqueda
   │ elige item
   ▼
[Item] ─ tamaño/variante/extras + upsell (R5)
   │ "Agregar"
   ▼
[Mini-cart] ─ sigue comprando / cross-sell (R5)
   │ "Ir a pagar"
   ▼
[Checkout 1-página] ─ contacto, dirección/zona, pago, cupón (R2,R3,R4)
   │  validación inline · costo total visible
   │ "Confirmar pedido"
   ▼
[Confirmación + tracking] ─ ETA, estado, WhatsApp (R3)
   │ (opt-in cuenta/lealtad → R6)
   ▼
[Recompra] ─ "pedir lo de siempre" 1-tap
```

### 4.2 Flujo de fricción mínima — Pedido por WhatsApp (fallback/confianza)
```
[Cualquier página] ─ launcher WhatsApp
   ▼
[WhatsApp Business] ─ mensaje pre-armado (item/carrito si aplica)
   ▼
[Cierre humano] ─ confirma, paga contra entrega
```
> Sirve a quien no confía en pagar online todavía. **Captura el pedido sin perderlo** y migra al usuario fuera del agregador.

### 4.3 Flujo de recompra (P3)
```
[Cuenta/historial] → "Pedir lo de siempre" → [Checkout pre-llenado] → Confirmar
```

### 4.4 Flujo de error/recuperación (anti-abandono)
```
Zona fuera de cobertura  → ofrecer pickup / avisar cuándo llega / dejar contacto
Pago falla               → reintento + WhatsApp como salida, no callejón sin salida
Carrito abandonado       → (con consentimiento) recordatorio WA/email + cupón
```

---

## 5. User Stories (formato Connextra + criterios de aceptación)

> Backlog inicial priorizado. `MoSCoW`: M=Must, S=Should, C=Could.

| ID | Historia | Prioridad | Aceptación (resumen) |
|---|---|---|---|
| US-01 | Como P1, quiero ver si llegan a mi zona y el ETA al instante, para decidir rápido. | **M** | Hero muestra input de zona + ETA estimada en 1er viewport; sin scroll. |
| US-02 | Como P1, quiero pedir sin crear cuenta, para no perder tiempo. | **M** | Guest checkout funcional; cuenta = opt-in. |
| US-03 | Como P1, quiero ver el costo total antes del último paso, para no llevarme sorpresas. | **M** | Subtotal+envío+total visibles en carrito y checkout. |
| US-04 | Como P2, quiero combos claros para varias personas, para pedir fácil. | **S** | Sección combos; item combo con desglose. |
| US-05 | Como P2, quiero editar cantidades en el carrito sin recargar, para ajustar. | **M** | Mini-cart con +/- optimista, sin reload. |
| US-06 | Como P3, quiero "pedir lo de siempre" en 1 tap, para repetir rápido. | **S** | Historial → reorder pre-llena carrito. |
| US-07 | Como P3, quiero beneficios por pedir directo, para que me convenga vs la app. | **S** | Lealtad/cupón exclusivo directo visible. |
| US-08 | Como cualquiera, quiero ver el estado de mi pedido, para estar tranquilo. | **M** | Página de pedido con estados; link por WhatsApp. |
| US-09 | Como usuario móvil, quiero un CTA de pedir siempre a mano, para no buscarlo. | **M** | Sticky order bar con a11y correcta. |
| US-10 | Como usuario con lector de pantalla, quiero navegar y pedir sin barreras. | **M** | WCAG 2.2 AA; flujo de pedido operable por teclado. |
| US-11 | Como dueño, quiero que el sitio aparezca en Google local y AI overviews. | **M** | Schema Restaurant+Menu, GBP, llms.txt, NAP consistente. |
| US-12 | Como usuario, quiero contactar por WhatsApp si dudo, para confiar. | **S** | Launcher WA presente y con mensaje pre-armado. |

---

## 6. Mapa de Pain Points → Solución de diseño

| Pain (research/journey) | Solución UX | Regla |
|---|---|---|
| "No sé si llegan a mi zona" | Input de zona + ETA en hero | R1 |
| "La web es lenta" | Performance budget, skeletons, prefetch | R7 |
| "Menú confuso" | Categorías + filtros + búsqueda + fotos | — |
| "Checkout eterno" | 1 página, mínimos campos, guest | R2 |
| "Costo sorpresa" | Total siempre visible | R3 |
| "¿Y mi pedido?" | Confirmación + tracking + WA | R3 |
| "Rearmar todo cada vez" | Reorder 1-tap | R6 |
| "Pedir directo no me conviene" | Incentivo + lealtad exclusiva | R6 |
| "No confío en pagar online" | WhatsApp + señales de trust | R3 |

---

## 7. Conversion Funnel (instrumentación)

```
ETAPA              EVENTO (analytics)        FUGA TÍPICA        PALANCA
──────────────────────────────────────────────────────────────────────────
Visita             page_view                 —                  SEO/velocidad
Relevancia         zone_check / ETA_seen     no cubre zona      cobertura/pickup
Ver menú           menu_view                 menú confuso       IA/filtros
Add to cart        add_to_cart               precio/duda        fotos/precio claro
Checkout inicio    begin_checkout            fricción           1-página
Pago               add_payment_info          desconfianza       trust/WA
Compra             purchase                  costo final        total visible
Recompra           reorder / loyalty         sin razón          lealtad
```
> Cada evento se mide (Fase Analytics) para localizar la fuga exacta y A/B testear la palanca.

---

## 8. Wireframes (lo-fi, mobile-first)

### 8.1 Landing — móvil (above the fold)
```
┌─────────────────────────┐
│ ☰   BELA INK      🛒(0) │  ← top bar
├─────────────────────────┤
│                         │
│   [imagen/hero slot]    │  ← FOTO REAL (la subís)
│                         │
│  Pizza artesanal,       │  ← H1 expresivo
│  lista en ~35 min.      │
│                         │
│  📍 [Tu zona ▾] · ETA   │  ← R1 relevancia
│                         │
│  ┌───────────────────┐  │
│  │   PEDIR AHORA  →  │  │  ← CTA primario
│  └───────────────────┘  │
│   Ver menú · WhatsApp   │  ← CTAs secundarios
│  ★4.8 · +X pedidos/sem  │  ← R8 prueba social
├─────────────────────────┤
│ ▼ scroll: destacados…   │
└─────────────────────────┘
│ [ PEDIR AHORA ]  sticky │  ← barra inferior persistente (R9/US-09)
└─────────────────────────┘
```

### 8.2 Landing — secciones (scroll)
```
[Hero] → [Destacados (bento activo)] → [Promos/combos] →
[Beneficios: rápido·directo·artesanal] → [Proceso de elaboración] →
[Opiniones reales] → [Historia de marca] → [Ubicación + zonas + mapa] →
[FAQ] → [Footer avanzado + newsletter/lealtad]
```

### 8.3 Menú — móvil
```
┌─────────────────────────┐
│ ←  MENÚ          🔍  🛒 │
│ [Pizzas][Entradas][Beb…]│  ← categorías scroll horizontal
│ Filtros: veg · picante…│
├─────────────────────────┤
│ ┌────┐ Margherita       │
│ │foto│ $___  ★          │  ← precio (TU DATA)
│ └────┘ [ + ]            │
│ ┌────┐ Pepperoni        │
│ │foto│ $___             │
│ └────┘ [ + ]            │
└─────────────────────────┘
```

### 8.4 Item detail
```
┌─────────────────────────┐
│ [foto grande]           │
│ Pepperoni               │
│ desc breve · $___       │
│ Tamaño: ( )Ind ( )Mediana ( )Familiar
│ Extras: ☐ orilla rellena ☐ extra queso
│ ── Combina con (upsell R5) ──
│ [ Refresco ] [ Pan ajo ]
│ [  Agregar — $___  ]    │
└─────────────────────────┘
```

### 8.5 Checkout — 1 página (R2)
```
┌─────────────────────────┐
│ CHECKOUT                │
│ 1 Contacto: nombre, tel │
│ 2 Entrega: [dirección/zona] o ◯ pickup
│ 3 Pago: ◯ efectivo ◯ tarjeta ◯ transf
│ 4 Cupón: [_______] aplicar
│ ── Resumen ──           │
│ Subtotal      $___      │
│ Envío         $___      │
│ Total         $___  ←R3 │
│ [ Confirmar pedido → ]  │
│  🔒 datos protegidos · WhatsApp
└─────────────────────────┘
```
> Todo en una vista; secciones colapsables con headings reales (a11y). Validación inline.

---

## 9. Reto cruzado de cierre (Art Director ↔ Performance ↔ A11y)
- **Art Director:** "El bento activo con video en hover es el wow." 
- **Performance:** "Video sólo lazy + poster; nada que tope LCP." 
- **A11y:** "Hover no puede ser el único trigger (táctil/teclado); equivalente accesible y respeto a `prefers-reduced-motion`." 
- **Resolución:** bento con apertura por tap/click además de hover, media diferida, motion reducible. Se especifica en el **Design System (Fase 4)** y se aplica en código (Fase 6–7).

---

## 10. Decisiones que necesitan tu input
1. ¿Pickup además de delivery? (cambia hero + checkout)
2. ¿Cuenta/lealtad desde día 1 o fase 2?
3. ¿Categorías reales del menú? (define IA de /menu)
4. Idioma: ¿solo ES-MX, o ES + EN para Mundial?
