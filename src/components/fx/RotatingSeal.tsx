"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils/cn";

const SEAL_TEXT = "BELA INK ✦ PIZZA ✦ ILUSTRACIÓN ✦ MUCHA TINTA ✦ ";

/**
 * Firma de la marca: sello de tinta circular girando alrededor de una pizza
 * real que rota acoplada al scroll ("pizzas que se mueven").
 * prefers-reduced-motion → todo estático.
 */
export function RotatingSeal({
  image,
  alt,
  className,
}: {
  image: string;
  alt: string;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rawRotate = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const pizzaRotate = useSpring(rawRotate, { stiffness: 40, damping: 18, mass: 0.6 });

  return (
    <div ref={ref} className={cn("relative aspect-square", className)}>
      {/* Sello de texto circular (giro continuo) */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 38, ease: "linear", repeat: Infinity }}
        aria-hidden
      >
        <defs>
          <path
            id="seal-arc"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
            fill="none"
          />
        </defs>
        <text
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em" }}
        >
          <textPath href="#seal-arc" startOffset="0">
            {SEAL_TEXT.repeat(2)}
          </textPath>
        </text>
      </motion.svg>

      {/* Pizza real, enmascarada en círculo, rotando con el scroll */}
      <motion.div
        className="absolute inset-[16%] overflow-hidden rounded-full border border-border-strong shadow-lg"
        style={reduce ? undefined : { rotate: pizzaRotate }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="(max-width: 768px) 70vw, 36vw"
          className="object-cover"
        />
      </motion.div>

      {/* Punto-pivote de tinta */}
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 z-10 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: "var(--vermilion)", boxShadow: "var(--shadow-ink)" }}
      />
    </div>
  );
}
