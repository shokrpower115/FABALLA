"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { serviciosDestacados } from "../lib/servicios";
import ImageLightbox from "./ImageLightbox";

const Servicios = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="servicios" className="bg-crema px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rojo">Servicios</p>
          <h2 className="mt-3 text-3xl font-black text-tinta sm:text-4xl">
            Todo lo que necesitas para disfrutar o celebrar.
          </h2>
          <p className="mt-4 text-lg leading-8 text-tinta/70">
            Una propuesta pensada para que cada visita o evento se sienta auténtico, elegante y memorable.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {serviciosDestacados.map((servicio, index) => (
            <article key={servicio.id} className="group overflow-hidden rounded-[28px] border border-tinta/10 bg-white shadow-[0_20px_70px_rgba(27,27,27,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(27,27,27,0.12)]">
              <button type="button" onClick={() => setSelectedImage({ src: servicio.imagen, alt: servicio.titulo })} className="block w-full text-left">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                    priority={index === 0}
                    className="cursor-zoom-in object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                </div>
              </button>
              <div className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-naranja">0{index + 1}</p>
                <h3 className="mt-3 text-2xl font-bold text-tinta">{servicio.titulo}</h3>
                <p className="mt-3 text-base leading-7 text-tinta/70">{servicio.descripcion}</p>
                <Link href={servicio.href} className="mt-6 inline-flex items-center text-sm font-semibold text-vino transition hover:text-rojo">
                  {servicio.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageLightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          open={Boolean(selectedImage)}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

export default Servicios;
