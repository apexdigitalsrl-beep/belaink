"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Intro "estampa de tinta": al cargar, el sello se imprime sobre el lienzo y
 * se levanta. Overlay por encima (NO bloquea el contenido, que ya está debajo).
 * Una vez por sesión. prefers-reduced-motion → no se muestra.
 */
export function IntroStamp() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduce) return;
    if (sessionStorage.getItem("belaink_intro") === "1") return;
    setShow(true);
    sessionStorage.setItem("belaink_intro", "1");
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="plate fixed inset-0 z-[var(--z-intro)] grid place-items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }}
          onClick={() => setShow(false)}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 1.35, opacity: 0, filter: "blur(8px)" }}
            animate={{
              scale: [1.35, 0.98, 1],
              opacity: [0, 1, 1],
              filter: ["blur(8px)", "blur(0px)", "blur(0px)"],
            }}
            transition={{ duration: 0.9, times: [0, 0.7, 1], ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="block font-display text-[clamp(3rem,12vw,7rem)] font-extrabold tracking-tight text-bone">
              BELA INK
            </span>
            <span className="reg-mark mt-3 justify-center !text-bone/70">
              pizza · ilustración · mucha tinta
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
