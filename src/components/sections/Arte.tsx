import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/content/business";

/**
 * Arte & eventos — el diferencial real de la marca ("ilustración y mucha tinta",
 * exposiciones, ARTWEEK). Plancha oscura, composición editorial con solape (profundidad).
 */
export function Arte() {
  return (
    <section id="arte" aria-labelledby="arte-title" className="plate overflow-hidden">
      <div className="container-content grid items-center gap-14 py-[var(--space-section)] lg:grid-cols-2">
        <div>
          <p className="reg-mark mb-5 !text-bone/70">Arte &amp; eventos</p>
          <h2 id="arte-title" className="text-2xl text-bone">
            No es sólo una pizzería. Es una pared que expone.
          </h2>
          <p className="mt-6 max-w-[52ch] text-bone/75">
            Ilustración, tinta y vino. Entre pizza y pizza, Bela Ink abre sus
            muros a muestras y noches de arte en San Miguel Chapultepec. La
            comida es la excusa; el plan es completo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              as="a"
              href={business.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              size="lg"
            >
              Próximas fechas en Instagram
            </Button>
            <Button
              as="a"
              href="#reservar"
              size="lg"
              className="border border-bone/40 bg-transparent text-bone hover:border-bone"
            >
              Reservar mesa
            </Button>
          </div>
        </div>

        {/* Collage con solape */}
        <Reveal className="relative mx-auto h-[clamp(20rem,40vw,28rem)] w-full max-w-md">
          <div className="absolute left-0 top-0 h-[72%] w-[64%] overflow-hidden rounded-xl border border-bone/15 shadow-lg">
            <Image
              src="/img/gallery/g3.jpg"
              alt="Copas frente al letrero de neón Vino"
              fill
              sizes="(max-width: 1024px) 60vw, 24vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[64%] w-[58%] overflow-hidden rounded-xl border border-bone/15 shadow-lg">
            <Image
              src="/img/gallery/g8.jpg"
              alt="Pizza pepperoni sobre mural de colores"
              fill
              sizes="(max-width: 1024px) 55vw, 22vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
