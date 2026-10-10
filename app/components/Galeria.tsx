import Image from "next/image";

type Foto = {
  src: string;
  titulo: string;
};

// La destacada es horizontal (4:3); el resto se recortaron a 3:4 en public/galeria.
const destacada: Foto = { src: "/galeria/quesabirrias-orden.webp", titulo: "Orden de quesabirrias" };

const fotos: Foto[] = [
  { src: "/galeria/tabla-birria.webp", titulo: "Recién salidas de la plancha" },
  { src: "/galeria/quesabirrias.webp", titulo: "Quesabirrias" },
  { src: "/galeria/enchivada.webp", titulo: "Enchivada" },
  { src: "/galeria/orden-birria.webp", titulo: "Orden de birria" },
  { src: "/galeria/planchada-cortada.webp", titulo: "Planchada" },
  { src: "/galeria/planchada.webp", titulo: "Planchada de harina" },
];

const Pie = ({ titulo }: { titulo: string }) => (
  <>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
    <p className="absolute bottom-5 left-6 text-lg font-bold text-white drop-shadow">{titulo}</p>
  </>
);

const Galeria = () => {
  return (
    <section id="galeria" className="bg-crema px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-rojo">Galería</p>
          <h2 className="mt-3 text-3xl font-black text-tinta sm:text-4xl">Cada plato y cada evento cuentan una historia.</h2>
        </div>

        <div className="group relative mt-12 aspect-[4/3] overflow-hidden rounded-[30px] md:aspect-[21/9]">
          <Image
            src={destacada.src}
            alt={destacada.titulo}
            fill
            sizes="(min-width: 1280px) 1184px, 100vw"
            className="object-cover object-[50%_70%] transition duration-500 group-hover:scale-105"
          />
          <Pie titulo={destacada.titulo} />
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fotos.map((foto) => (
            <div key={foto.src} className="group relative aspect-[3/4] overflow-hidden rounded-[30px]">
              <Image
                src={foto.src}
                alt={foto.titulo}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <Pie titulo={foto.titulo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
