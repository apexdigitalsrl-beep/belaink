import type { NextConfig } from "next";

/**
 * Hostinger deploy = static export.
 * `output: "export"` genera HTML/CSS/JS estático en /out → se sube a public_html
 * (no necesita Node en el server). Por eso:
 *  - images.unoptimized: el optimizador de imágenes de Next necesita servidor;
 *    en estático servimos las imágenes tal cual (ya vienen de buen tamaño).
 *  - Los headers de seguridad NO se aplican en export (no hay servidor Next);
 *    van en public/.htaccess (Apache de Hostinger). Ver ese archivo.
 */
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
