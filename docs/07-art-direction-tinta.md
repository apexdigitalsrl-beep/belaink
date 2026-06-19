# 07 — Dirección de Arte "TINTA"

**Reemplaza la dirección "ink editorial dark-neon"** (que caía en el default AI #2: negro + un acento neón). Justificación: la marca es *"pizzas, ilustración y mucha tinta"* — el sistema visual debe SER tinta impresa / risograph / art-press, no un restaurante oscuro genérico.

## Tokens

### Color (riso ink-press)
| Token | Hex | Uso |
|---|---|---|
| paper | `#EFE6D3` | fondo base (papel periódico cálido) |
| paper-2 | `#F7F1E3` | tarjetas / superficies |
| ink | `#141009` | tinta negra (texto, planchas oscuras) |
| ink-2 | `#2A2118` | tinta suave |
| vermilion | `#FF3A1D` | tinta spot primaria (CTA, sello, acentos) |
| cobalt | `#2438E0` | tinta spot secundaria (links, registro) |
| wine | `#7A1F2B` | acento raro (profundidad) |

Uso disciplinado: el papel y la tinta negra dominan; bermellón/cobalto aparecen como marcas de registro, el sello y el cursor. Minimalismo = aire + tipo grande, audacia concentrada en la firma.

### Tipografía
- **Display:** Syne (700/800) — carácter de galería de arte, set grande y apretado, con offset de registro (fantasma bermellón + cobalto detrás de la tinta).
- **Body:** Inter.
- **Utilidad/registro:** mono de sistema (`ui-monospace`) para etiquetas técnicas tipo impresión (sin descarga extra).

### Layout
Fanzine editorial: páginas de papel minimal **alternadas con planchas full-bleed oscuras** que muestran las fotos moody a sangre. Las fotos NO se duotonan (matarían el apetito); el tratamiento riso vive en marcos, tipo, ilustración y transiciones.

## Firma (un solo elemento memorable, todo lo demás callado)
1. **Sello giratorio** — SVG de texto circular alrededor de una pizza real enmascarada en círculo; el sello y la pizza rotan (acoplado a velocidad de scroll). `prefers-reduced-motion` → estático.
2. **Cursor de tinta** — punto con lag + blot en hover + rastro que se desvanece. Solo `pointer: fine`; oculto en touch y con motion reducido.
3. **Intro estampa** — al cargar, el sello se imprime sobre el papel (<700ms, salteable, reduced-motion safe).

## Funciones nuevas
- **Galería** + lightbox (usa `assets/instagram` → copiadas a `public/img/gallery`).
- **Modal de reserva** (función real mientras pedidos = placeholder).

## Piso de calidad (sin anunciarlo)
Responsive a móvil · foco de teclado visible · `prefers-reduced-motion` respetado · contraste AA.
