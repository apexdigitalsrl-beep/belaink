import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { business } from "@/content/business";
import { restaurantSchema } from "@/lib/seo/schema";
import "@/styles/globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.site.url),
  title: {
    default: `${business.legalName} — ${business.tagline}`,
    template: `%s · ${business.name}`,
  },
  description: business.shortPitch,
  applicationName: business.name,
  keywords: [
    "pizza napolitana CDMX",
    "pizzería San Miguel Chapultepec",
    "pizza y arte",
    "pasta fresca Ciudad de México",
    "Bela Ink",
  ],
  authors: [{ name: business.legalName }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: business.site.url,
    siteName: business.name,
    title: `${business.legalName} — ${business.tagline}`,
    description: business.shortPitch,
    images: [{ url: "/img/hero.jpg", width: 1200, height: 630, alt: business.legalName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.legalName} — ${business.tagline}`,
    description: business.shortPitch,
    images: ["/img/hero.jpg"],
  },
  alternates: { canonical: business.site.url },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1a1410",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
        >
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          // JSON-LD del negocio (SEO local / AI overviews)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema()) }}
        />
      </body>
    </html>
  );
}
