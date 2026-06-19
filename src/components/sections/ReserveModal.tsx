"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { business } from "@/content/business";

/**
 * Modal de reserva (función real mientras pedidos = placeholder).
 * Se abre con el hash #reservar (cualquier <a href="#reservar"> lo dispara,
 * sin handler en el botón → server-friendly). Arma un mensaje y lo manda a
 * WhatsApp si hay número, si no a Instagram.
 * A11y: dialog, escape, foco gestionado, scrim.
 */
export function ReserveModal() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const sync = () => setOpen(window.location.hash === "#reservar");
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const close = () => {
    history.replaceState(null, "", window.location.pathname + window.location.search);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    firstField.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const msg =
      `Hola Bela Ink, quiero reservar.%0A` +
      `Nombre: ${encodeURIComponent(String(data.get("nombre") || ""))}%0A` +
      `Personas: ${encodeURIComponent(String(data.get("personas") || ""))}%0A` +
      `Día/hora: ${encodeURIComponent(String(data.get("cuando") || ""))}%0A` +
      `Nota: ${encodeURIComponent(String(data.get("nota") || ""))}`;
    const url = business.contact.whatsapp
      ? `https://wa.me/${business.contact.whatsapp}?text=${msg}`
      : business.contact.instagram;
    window.open(url, "_blank", "noopener,noreferrer");
    close();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[var(--z-modal)] grid place-items-end sm:place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            aria-label="Cerrar"
            onClick={close}
            className="absolute inset-0 cursor-default bg-ink/55 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="reserve-title"
            className="relative m-3 w-full max-w-md rounded-xl border border-border-strong bg-surface p-7 shadow-lg sm:m-0"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="reg-mark mb-3">Reservar mesa</p>
            <h2 id="reserve-title" className="font-display text-xl">
              Te guardamos lugar.
            </h2>
            <p className="mt-2 text-sm text-muted">
              {business.hoursHuman}. Mandamos tu solicitud por{" "}
              {business.contact.whatsapp ? "WhatsApp" : "Instagram"}.
            </p>

            <form onSubmit={onSubmit} className="mt-6 grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Nombre</span>
                <input
                  ref={firstField}
                  name="nombre"
                  required
                  autoComplete="name"
                  className="h-11 rounded-md border border-border-strong bg-bg px-3 outline-none focus-visible:outline-2 focus-visible:outline-cobalt"
                />
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Personas</span>
                  <input
                    name="personas"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    defaultValue={2}
                    className="h-11 rounded-md border border-border-strong bg-bg px-3 outline-none focus-visible:outline-2 focus-visible:outline-cobalt"
                  />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Día y hora</span>
                  <input
                    name="cuando"
                    placeholder="Vie 20:00"
                    className="h-11 rounded-md border border-border-strong bg-bg px-3 outline-none focus-visible:outline-2 focus-visible:outline-cobalt"
                  />
                </label>
              </div>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Nota (opcional)</span>
                <textarea
                  name="nota"
                  rows={2}
                  className="resize-none rounded-md border border-border-strong bg-bg px-3 py-2 outline-none focus-visible:outline-2 focus-visible:outline-cobalt"
                />
              </label>
              <div className="mt-1 flex gap-3">
                <Button type="submit" variant="accent" size="md" className="flex-1">
                  Enviar solicitud
                </Button>
                <Button type="button" variant="secondary" size="md" onClick={close}>
                  Cancelar
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
