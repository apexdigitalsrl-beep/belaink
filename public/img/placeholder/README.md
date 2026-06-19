# Slots de imágenes — reemplazar con fotos reales

Estos son los nombres de archivo que la landing busca. Subí las fotos del
Instagram (export) con EXACTAMENTE estos nombres y se cablean solas:

| Archivo | Dónde se usa | Sugerencia (de tu IG) |
|---|---|---|
| `hero.jpg` | Hero full-bleed | Pizza napolitana con letrero de neón BELA INK |
| `pizza-1.jpg` | Bento destacado (grande) | Margherita / masa carbonada |
| `pizza-2.jpg` | Bento | Pepperoni |
| `pizza-3.jpg` | Bento | Prosciutto & arúgula |
| `pasta-1.jpg` | Bento / pastas | Tagliatelle fresco |
| `process.jpg` | Sección Proceso (4:5 vertical) | Masa / horno |

Formato recomendado: JPG/WebP, lado largo ~1600–2000px, < 400 KB.
`next/image` se encarga de optimizar (AVIF/WebP) automáticamente.

> Mientras no existan estos archivos, `ImageSlot` muestra una caja decorativa
> de tinta con el nombre — el sitio NO se rompe.
