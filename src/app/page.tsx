import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyOrderBar } from "@/components/layout/StickyOrderBar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Featured } from "@/components/sections/Featured";
import { Concept } from "@/components/sections/Concept";
import { Gallery } from "@/components/sections/Gallery";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { Story } from "@/components/sections/Story";
import { Location } from "@/components/sections/Location";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/sections/CtaBand";
import { ReserveModal } from "@/components/sections/ReserveModal";
import { FAQ } from "@/content/faq";

/** FAQPage JSON-LD para rich results / AI overviews. */
function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Featured />
        <Concept />
        <Gallery />
        <Benefits />
        <Process />
        <Reviews />
        <Story />
        <Location />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
      <StickyOrderBar />
      <ReserveModal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
    </>
  );
}
