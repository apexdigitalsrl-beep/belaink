"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor de tinta. Punto que sigue al mouse con lag + anillo que crece sobre
 * elementos interactivos + rastro que se desvanece.
 * Solo en punteros finos (desktop). Oculto en touch y con prefers-reduced-motion.
 * No bloquea interacción (pointer-events: none).
 */
export function InkCursor() {
  const [enabled, setEnabled] = useState(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    setEnabled(true);
    document.documentElement.classList.add("ink-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let raf = 0;
    let hovering = false;
    let pressing = false;

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };
    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement)?.closest?.(
        "a, button, [data-cursor], input, summary, label",
      );
      hovering = Boolean(el);
    };
    const onDown = () => (pressing = true);
    const onUp = () => (pressing = false);

    const tick = () => {
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      const scale = (hovering ? 1.9 : 1) * (pressing ? 0.7 : 1);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${scale})`;
        ringRef.current.style.borderColor = hovering
          ? "var(--vermilion)"
          : "var(--color-border-strong)";
        ringRef.current.style.backgroundColor = hovering
          ? "oklch(62% 0.232 27 / 0.10)"
          : "transparent";
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("ink-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[var(--z-cursor)]">
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-9 w-9 rounded-full border transition-[background-color,border-color] duration-200 will-change-transform"
      />
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2 w-2 rounded-full will-change-transform"
        style={{ background: "var(--ink)" }}
      />
    </div>
  );
}
