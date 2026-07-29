import Image from "next/image";

const imagenes = [
  "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
];

const Galeria = () => {
  return (
    <section id="galeria" className="bg-[#fff8e7] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d00000]">Galería</p>
          <h2 className="mt-3 text-3xl font-black text-[#1b1b1b] sm:text-4xl">Cada plato y cada evento cuentan una historia.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {imagenes.map((src, index) => (
            <div key={src} className={`group relative overflow-hidden rounded-[30px] ${index === 0 ? "md:row-span-2 md:h-[520px]" : "h-[260px]"}`}>
              <Image src={src} alt={`Vista ${index + 1} de FABALLA`} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
