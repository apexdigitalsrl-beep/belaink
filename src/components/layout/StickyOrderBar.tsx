"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { business } from "@/content/business";
import { cn } from "@/lib/utils/cn";

/**
 * Barra inferior persistente en móvil con el CTA primario (US-09).
 * Aparece tras pasar el hero. A11y: no atrapa foco, respeta safe-area.
 */
export function StickyOrderBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/90 backdrop-blur-md transition-transform duration-300 md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="container-content flex items-center gap-3 py-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold">{business.name}</p>
          <p className="truncate text-xs text-muted">{business.hoursHuman}</p>
        </div>
        <Button as="a" href={business.contact.instagram} size="md">
          {business.ordering.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
