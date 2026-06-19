"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { business } from "@/content/business";
import { cn } from "@/lib/utils/cn";

const links = [
  { href: "#menu", label: "Menú" },
  { href: "#galeria", label: "Galería" },
  { href: "#proceso", label: "Proceso" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cerrar menú con Escape (a11y)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navegación principal"
        className="container-content flex h-16 items-center justify-between gap-4"
      >
        <a href="#main" className="font-display text-xl font-extrabold tracking-tight">
          BELA <span className="text-accent">INK</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button as="a" href="#reservar" variant="accent" size="sm">
            {business.ordering.ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 h-0.5 w-6 bg-text transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-6 bg-text transition-opacity duration-200",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-0.5 w-6 bg-text transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="container-content pb-6 md:hidden">
          <ul className="flex flex-col gap-1 border-t border-border pt-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-lg text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button as="a" href="#reservar" variant="accent" className="w-full" size="lg">
                {business.ordering.ctaLabel}
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
