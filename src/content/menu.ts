/**
 * Capa de menú — TIPADA y lista para llenar.
 *
 * Regla acordada con el cliente: "espero data real". Por eso NO hay precios
 * inventados. Los items abajo son PLACEHOLDERS (isPlaceholder: true, price: null)
 * con nombres de pizzas universalmente reales, sólo para que la landing tenga
 * vida mientras llega tu menú definitivo. La UI muestra "Precio próximamente"
 * mientras price sea null.
 *
 * Para ir a producción: reemplazá MENU con tus items reales (precios MXN,
 * descripciones, fotos) y poné isPlaceholder: false.
 */

export type CategorySlug = "pizzas" | "pastas" | "entradas" | "postres" | "bebidas";

export type MenuTag = "popular" | "nuevo" | "veg" | "picante" | "favorito";

export type MenuItem = {
  slug: string;
  name: string;
  description: string;
  /** Precio en MXN. null = aún sin definir (cliente). */
  priceMXN: number | null;
  category: CategorySlug;
  /** Ruta a imagen en /public/img. Placeholder hasta tu foto real. */
  image: string;
  imageAlt: string;
  tags?: MenuTag[];
  available: boolean;
  isPlaceholder?: boolean;
};

export const CATEGORIES: { slug: CategorySlug; name: string; blurb: string }[] = [
  { slug: "pizzas", name: "Pizzas", blurb: "Masa de fermentación lenta, horno al rojo." },
  { slug: "pastas", name: "Pastas", blurb: "Pasta fresca, hecha en casa." },
  { slug: "entradas", name: "Entradas", blurb: "Para empezar y compartir." },
  { slug: "postres", name: "Postres", blurb: "El cierre dulce." },
  { slug: "bebidas", name: "Vinos & bebidas", blurb: "Carta de vino y más." },
];

/**
 * PLACEHOLDERS — reemplazar con data real del cliente.
 * Imágenes: subí las fotos del IG a /public/img/menu/ y actualizá `image`.
 */
export const MENU: MenuItem[] = [
  {
    slug: "margherita",
    name: "Margherita",
    description: "Salsa de tomate, mozzarella fresca, albahaca, aceite de oliva.",
    priceMXN: null,
    category: "pizzas",
    image: "/img/menu/margherita.jpg",
    imageAlt: "Pizza margherita con aceite de oliva y albahaca, recién horneada",
    tags: ["favorito", "veg"],
    available: true,
    isPlaceholder: true,
  },
  {
    slug: "pepperoni",
    name: "Pepperoni",
    description: "Salsa de tomate, mozzarella, pepperoni.",
    priceMXN: null,
    category: "pizzas",
    image: "/img/menu/pepperoni.jpg",
    imageAlt: "Pizza pepperoni humeante sobre tabla de madera",
    tags: ["popular"],
    available: true,
    isPlaceholder: true,
  },
  {
    slug: "mortadela",
    name: "Mortadela",
    description: "Base blanca, mortadela en rosas, toque cítrico.",
    priceMXN: null,
    category: "pizzas",
    image: "/img/menu/mortadela.jpg",
    imageAlt: "Pizza con mortadela enrollada en rosas",
    tags: ["nuevo"],
    available: true,
    isPlaceholder: true,
  },
  {
    slug: "spaghetti",
    name: "Spaghetti",
    description: "Pasta fresca con parmesano recién rallado.",
    priceMXN: null,
    category: "pastas",
    image: "/img/menu/pasta.jpg",
    imageAlt: "Spaghetti con parmesano rallado y copa de vino tinto",
    tags: ["favorito"],
    available: true,
    isPlaceholder: true,
  },
  {
    slug: "bruschetta",
    name: "Bruschetta",
    description: "Pan tostado, jamón, reducción balsámica, microgreens.",
    priceMXN: null,
    category: "entradas",
    image: "/img/gallery/g5.jpg",
    imageAlt: "Bruschetta con neón de fondo",
    tags: ["nuevo"],
    available: true,
    isPlaceholder: true,
  },
  {
    slug: "postre-del-dia",
    name: "Postre del día",
    description: "El cierre dulce, con frutos rojos.",
    priceMXN: null,
    category: "postres",
    image: "/img/gallery/g7.jpg",
    imageAlt: "Postre en copa con frutos rojos",
    tags: ["favorito"],
    available: true,
    isPlaceholder: true,
  },
];

/** Helpers de presentación */
export const isMenuReady = MENU.some((i) => !i.isPlaceholder && i.priceMXN !== null);
export const featuredItems = MENU;
