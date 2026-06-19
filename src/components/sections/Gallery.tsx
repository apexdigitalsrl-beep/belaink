"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { GALLERY } from "@/content/gallery";

// Ritmo editorial: alterna alturas para que no parezca un grid uniforme.
const SPANS = ["aspect-[4/5]", "aspect-square", "aspect-[4/5]", "aspect-[5/6]"];

export function Gallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const go = useCallback(
    (dir: number) =>
      setActive((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length)),
    [],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, go]);

  return (
    <section id="galeria" aria-labelledby="gallery-title" className="py-[var(--space-section)]">
      <div className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="reg-mark mb-5">Galería</p>
            <h2 id="gallery-title" className="text-2xl">
              Tinta, masa y luz de neón.
            </h2>
          </div>
          <p className="font-mono text-sm text-muted">{GALLERY.length} piezas</p>
        </div>

        <ul className="mt-10 columns-2 gap-3 md:columns-3 [&>li]:mb-3">
          {GALLERY.map((img, i) => (
            <li key={img.src} className="break-inside-avoid">
              <button
                data-cursor
                onClick={() => setActive(i)}
                aria-label={`Abrir: ${img.alt}`}
                className="group relative block w-full overflow-hidden rounded-lg border border-border-strong"
              >
                <div className={`relative w-full ${SPANS[i % SPANS.length]}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[var(--z-modal)] grid place-items-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Galería de imágenes"
          >
            <button
              aria-label="Cerrar galería"
              onClick={close}
              className="absolute inset-0 cursor-default bg-ink/80 backdrop-blur-sm"
            />
            <button
              aria-label="Anterior"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-bone/30 text-bone hover:border-accent sm:left-6"
            >
              ←
            </button>
            <button
              aria-label="Siguiente"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-bone/30 text-bone hover:border-accent sm:right-6"
            >
              →
            </button>
            <motion.figure
              key={active}
              className="relative z-[1] max-h-[86vh] w-full max-w-3xl"
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={GALLERY[active].src}
                alt={GALLERY[active].alt}
                width={1200}
                height={1500}
                className="mx-auto h-auto max-h-[78vh] w-auto rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-center font-mono text-xs text-bone/70">
                {GALLERY[active].alt} · {active + 1}/{GALLERY.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
