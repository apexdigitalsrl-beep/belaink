# 04 — Design System "Forno"

**Proyecto:** Bela Ink Pizzería · **Fase:** 4 de 8 · Depende de: [03-ux-ia.md](03-ux-ia.md)
**Nombre del sistema:** **Forno** (horno) — el calor como hilo conductor.
**Estado:** tokens y componentes definidos. **Paleta/tipografía son defaults profesionales calibrables** a la marca final (logo/colores reales pendientes). Todo vive en variables → cambiar la marca = cambiar tokens, no componentes.

> Dirección recomendada: **"Calidez artesanal premium"** — base oscura cálida (carbón/horno) + crema + un rojo ember de marca + acento dorado. Compite con Apple/Stripe/Linear en **claridad, motion y performance**, pero suma **apetito** (las pizzerías frías no venden). Si preferís *dark-luxury editorial* puro, se ajusta en una variable de tema.

---

## 1. Principios de diseño
1. **Apetito sobre frialdad.** Calor, textura, comida real como héroe.
2. **Claridad brutal.** Una acción primaria por pantalla. Jerarquía por escala, no por ruido.
3. **Motion con propósito.** Aclara el flujo; nunca pelea con CWV ni con lectores de pantalla.
4. **Confianza visible.** Precio, ETA, soporte siempre legibles.
5. **Mobile-first, pulgar primero.** Targets generosos, layout estable.
6. **Accesible por defecto.** WCAG 2.2 AA es piso, no extra.

---

## 2. Color System (OKLCH, calibrable)

> OKLCH = consistencia perceptual y contraste predecible. Valores default; el rojo/ember de marca se reemplaza con el del logo real.

```css
:root {
  /* ── Marca ── */
  --ember-500: oklch(58% 0.20 28);   /* rojo horno — color de marca / CTA primario */
  --ember-600: oklch(50% 0.19 28);   /* hover/pressed */
  --ember-400: oklch(67% 0.18 30);   /* highlights */
  --gold-500:  oklch(80% 0.13 85);   /* acento dorado — detalles premium */
  --basil-500: oklch(62% 0.13 150);  /* verde — éxito / etiquetas "veg" */

  /* ── Neutros cálidos (base oscura) ── */
  --char-900: oklch(20% 0.012 60);   /* fondo principal (carbón cálido) */
  --char-800: oklch(25% 0.014 60);   /* superficies */
  --char-700: oklch(32% 0.014 60);   /* superficies elevadas / bordes */
  --char-600: oklch(45% 0.012 60);   /* texto secundario sobre oscuro */
  --cream-100: oklch(96% 0.012 80);  /* texto principal sobre oscuro / fondo claro */
  --cream-200: oklch(90% 0.014 80);

  /* ── Semánticos (no usar primitivos en componentes) ── */
  --color-bg:            var(--char-900);
  --color-surface:       var(--char-800);
  --color-surface-raised:var(--char-700);
  --color-border:        oklch(40% 0.01 60 / 0.4);
  --color-text:          var(--cream-100);
  --color-text-muted:    oklch(72% 0.012 70);
  --color-primary:       var(--ember-500);
  --color-primary-hover: var(--ember-600);
  --color-on-primary:    var(--cream-100);
  --color-accent:        var(--gold-500);
  --color-success:       var(--basil-500);
  --color-danger:        oklch(58% 0.21 25);
  --color-focus:         var(--gold-500);
}

/* Tema claro opcional (menú/secciones de comida con luz cálida) */
[data-theme="warm-light"] {
  --color-bg:      var(--cream-100);
  --color-surface: oklch(99% 0.008 80);
  --color-text:    var(--char-900);
  --color-text-muted: oklch(45% 0.012 60);
  --color-border:  oklch(85% 0.01 70 / 0.6);
  --color-on-primary: var(--cream-100);
}
```

### 2.1 Contraste (WCAG 2.2)
- Texto principal sobre `--color-bg`: **≥ 7:1** (AAA donde se pueda).
- Texto sobre `--color-primary`: **≥ 4.5:1** (validar el rojo real; si falla, oscurecer ember o usar texto crema).
- Foco (`--color-focus` dorado): visible sobre fondo claro y oscuro.
- **Nunca** color como único portador de información (íconos + texto en estados).

**Reto cruzado (UI ↔ A11y):** "El ember sobre carbón puede no contrastar en textos chicos." → Regla: ember sólo en superficies grandes/CTAs, no en body text. Texto = crema/carbón. Se valida con el color real del logo.

---

## 3. Typography System

> Default: **Display serif con carácter** (titulares apetitosos, editorial) + **sans grotesque** legible (UI/body). Dos familias máx (regla de performance). Subset latino, `font-display: swap`, preload de 1 peso crítico.

```css
:root {
  --font-display: "Recoleta", "Fraunces", Georgia, serif;  /* titulares (placeholder, calibrable) */
  --font-sans: "Inter", system-ui, -apple-system, sans-serif; /* UI / body */

  /* Escala fluida (clamp) — type scale 1.25 (major third) */
  --text-xs:   clamp(0.75rem, 0.72rem + 0.15vw, 0.8rem);
  --text-sm:   clamp(0.875rem, 0.84rem + 0.2vw, 0.95rem);
  --text-base: clamp(1rem, 0.95rem + 0.3vw, 1.125rem);
  --text-lg:   clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem);
  --text-xl:   clamp(1.6rem, 1.4rem + 1vw, 2.2rem);
  --text-2xl:  clamp(2.2rem, 1.8rem + 2vw, 3.5rem);
  --text-hero: clamp(2.8rem, 1.8rem + 6vw, 6.5rem);  /* titular héroe expresivo */

  --leading-tight: 1.05;   /* titulares */
  --leading-snug: 1.25;
  --leading-normal: 1.55;  /* body */
  --tracking-tight: -0.02em;
  --tracking-wide: 0.04em; /* labels/eyebrows en mayúscula */
}
```
- **Titulares:** display serif, `--leading-tight`, `--tracking-tight`. Grandes, con carácter (tendencia 2026: tipografía como héroe).
- **Body/UI:** sans, `--leading-normal`, tamaño cómodo en móvil (≥16px efectivo para evitar zoom en iOS).
- **Eyebrows/labels:** sans, mayúscula, `--tracking-wide`, `--text-xs`.
- **NO kinetic typography** (research §5: rompe CWV/a11y). Motion en contenedores, no en texto que el usuario lee.

---

## 4. Spacing, Grid, Radius, Shadow, Z

```css
:root {
  /* Spacing — escala 4px base, ritmo intencional (no padding uniforme) */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;  --space-8: 2rem;
  --space-12: 3rem;    --space-16: 4rem;   --space-24: 6rem;
  --space-section: clamp(4rem, 3rem + 5vw, 9rem);

  /* Radius — no uniforme: chips suaves, cards medianas, modales amplios */
  --radius-sm: 0.5rem; --radius-md: 0.875rem; --radius-lg: 1.25rem;
  --radius-xl: 1.75rem; --radius-pill: 999px;

  /* Shadow — profundidad real, cálida (no negro plano) */
  --shadow-sm: 0 1px 2px oklch(0% 0 0 / 0.25);
  --shadow-md: 0 6px 20px oklch(0% 0 0 / 0.30);
  --shadow-lg: 0 18px 50px oklch(0% 0 0 / 0.40);
  --shadow-ember: 0 10px 40px oklch(58% 0.20 28 / 0.35); /* glow de CTA */

  /* Z-index */
  --z-base: 0; --z-sticky: 40; --z-drawer: 50; --z-modal: 60; --z-toast: 70;

  /* Motion */
  --dur-fast: 150ms; --dur-normal: 280ms; --dur-slow: 480ms;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
}
```

### 4.1 Grid
- **12 columnas** desktop, 4 móvil; gutters fluidos; `max-width` de contenido ~1200–1320px.
- **Bento grids** para destacados/beneficios (tendencia 2026, activos por tap+hover).
- Breakpoints: `sm 480 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.

---

## 5. Component Library (Atomic Design)

> Mapea 1:1 al código (Fase 6). `átomos → moléculas → organismos → templates → páginas`.

### Átomos
`Button` (primary/secondary/ghost/icon), `Input`, `Select`, `Radio`, `Checkbox`, `Badge`, `Chip/Tag`, `Price`, `Rating`, `Icon`, `Spinner/Skeleton`, `Avatar`, `Divider`.

### Moléculas
`FormField` (label+input+error), `QtyStepper`, `ProductCardMini`, `CategoryTab`, `SearchBar`, `ZoneSelector` (zona+ETA), `Toast`, `PromoBadge`, `ReviewCard`, `AccordionItem`.

### Organismos
`Navbar`, `MobileStickyOrderBar`, `Hero`, `BentoFeatured`, `ProductGrid`, `ProductDetail`, `MiniCartDrawer`, `CheckoutForm`, `OrderSummary`, `OrderTracker`, `Footer`, `FaqSection`, `ProcessSection`, `WhatsAppLauncher`.

### Templates / Páginas
`LandingTemplate`, `MenuTemplate`, `ProductTemplate`, `CheckoutTemplate`, `OrderTemplate`, `ContentTemplate`.

### 5.1 Especificación de `Button` (ejemplo de rigor)
```
Variants: primary | secondary | ghost | icon
Sizes:    sm (h36) | md (h44) | lg (h52)   ← md/lg cumplen ≥44px táctil (R4)
States:   default · hover · active · focus-visible · disabled · loading

primary:
  bg: --color-primary; text: --color-on-primary; radius: --radius-pill
  hover: bg --color-primary-hover; shadow: --shadow-ember
  active: translateY(1px) scale(0.99)
  focus-visible: outline 2px --color-focus, offset 2px
  loading: spinner + aria-busy, mantiene ancho (sin layout shift)
  disabled: opacity .5, cursor not-allowed, aria-disabled
Motion: transform/opacity only, --dur-fast --ease-out-expo
A11y: <button>, label claro, no depende de color para estado
```

---

## 6. Animation Guidelines & Microinteractions

**Propiedades permitidas:** `transform`, `opacity`, `clip-path`, `filter` (con mesura). **Prohibido animar:** `width/height/top/left/margin/padding/font-size` (layout-bound).

| Interacción | Motion | Duración |
|---|---|---|
| Entrada de sección (scroll) | fade+rise 12px, stagger | `--dur-normal`, expo |
| Hover card / bento | scale 1.02 + reveal capa | `--dur-fast` |
| Add to cart | item "vuela" al cart + badge bump | `--dur-normal` |
| Mini-cart drawer | slide-in lateral | `--dur-normal` |
| Sticky CTA aparición | fade/translate al pasar hero | `--dur-fast` |
| Skeleton → contenido | crossfade | `--dur-fast` |
| Order tracker step | check + línea de progreso | `--dur-normal` |

**Reglas duras:**
- Respetar **`prefers-reduced-motion`**: desactivar parallax/auto-motion, mantener feedback funcional sutil.
- Hero con video: lazy + poster, jamás bloquea LCP (research §5).
- Hover **nunca** único trigger (equivalente táctil/teclado).
- Sin animaciones infinitas que distraigan del CTA.

---

## 7. Accessibility Standards (WCAG 2.2 AA)
- Landmarks semánticos (`header/nav/main/section/footer`), un solo `h1` por página.
- Foco visible siempre (`--color-focus`), orden de tabulación lógico, foco gestionado en drawer/modal (trap + retorno).
- Targets táctiles ≥ 44×44px; espaciado anti-mis-tap.
- Formularios: `label` asociado, error inline con `aria-describedby`, `aria-live` para validación, no sólo color.
- Contraste ≥ 4.5:1 (texto), ≥ 3:1 (UI/íconos grandes).
- Imágenes con `alt` significativo; decorativas `alt=""`.
- `prefers-reduced-motion` respetado.
- Operable 100% por teclado (incl. flujo de pedido — US-10).
- Idioma `lang="es-MX"`; soporte futuro EN para Mundial.

---

## 8. Tokens → Tailwind (puente a código, Fase 6)
Los tokens CSS de §2–4 se exponen a Tailwind vía `theme.extend` (colores `bg/surface/primary…`, `fontFamily`, `fontSize` fluidos, `spacing`, `borderRadius`, `boxShadow`, `transitionTimingFunction`). Un solo origen de verdad: `src/styles/tokens.css` + `tailwind.config.ts` leyendo las variables. Cambiar marca = editar `tokens.css`.

---

## 9. Entregables de este Design System
- [x] Principios · [x] Color (OKLCH, light/dark) · [x] Tipografía fluida · [x] Spacing/grid/radius/shadow/z · [x] Motion tokens
- [x] Component library (Atomic) + spec de ejemplo · [x] Microinteracciones · [x] A11y WCAG 2.2
- [ ] Calibración con **logo + colores + tipografía reales** (tu input)
- [ ] Implementación en código → `tokens.css` + `tailwind.config.ts` (Fase 6)

## 10. Decisiones que necesitan tu input
1. **Dirección final:** ¿"calidez artesanal premium" (recomendada) o "dark-luxury editorial"?
2. **Color de marca real** (del logo) para reemplazar `--ember-500`.
3. **Tipografía:** ¿tenés fuentes de marca, o uso el pairing propuesto (display serif + Inter)?
4. **Logo** en SVG (para nav/footer/favicon/OG).
