import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

/** Sección con ritmo vertical y ancho de contenido consistentes. */
export function Section({
  id,
  children,
  className,
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("py-[var(--space-section)]", className)}
    >
      <div className="container-content">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
