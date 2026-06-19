import Image from "next/image";
import { cn } from "@/lib/utils/cn";

/**
 * Slot de imagen "listo para llenar".
 * - Si `src` apunta a /img/placeholder/* → renderiza una caja decorativa de
 *   tinta (no rompe sin archivos reales) con el alt como hint.
 * - Si `src` es una foto real (subida por el cliente a /public/img) →
 *   renderiza next/image optimizado (AVIF/WebP, dimensiones, lazy/eager).
 *
 * Reemplazar fotos = sólo cambiar el `src` en src/content/*.
 */
export function ImageSlot({
  src,
  alt,
  priority = false,
  className,
  sizes = "100vw",
  rounded = "lg",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  rounded?: "md" | "lg" | "xl" | "none";
}) {
  const radius =
    rounded === "none" ? "" : rounded === "md" ? "rounded-md" : rounded === "xl" ? "rounded-xl" : "rounded-lg";
  const isPlaceholder = src.includes("/placeholder/");

  if (isPlaceholder) {
    return (
      <div
        role="img"
        aria-label={`${alt} (imagen pendiente)`}
        className={cn(
          "relative grid place-items-center overflow-hidden",
          radius,
          className,
        )}
        style={{
          background:
            "radial-gradient(120% 100% at 30% 0%, oklch(28% 0.04 30) 0%, oklch(17% 0.01 40) 55%, oklch(13% 0.006 40) 100%)",
        }}
      >
        <div className="pointer-events-none select-none px-4 text-center">
          <span className="block font-display text-lg text-paper/70">Bela Ink</span>
          <span className="mt-1 block text-xs uppercase tracking-wide text-muted">
            foto · {alt}
          </span>
        </div>
        {/* grano sutil */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(oklch(100% 0 0) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", radius, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
