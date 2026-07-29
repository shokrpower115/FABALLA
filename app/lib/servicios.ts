export interface ServicioDestacado {
  id: string;
  titulo: string;
  descripcion: string;
  cta: string;
  href: string;
  imagen: string;
}

export const serviciosDestacados: ServicioDestacado[] = [
  {
    id: "birria",
    titulo: "Birria",
    descripcion: "Menú exclusivo de viernes a domingo, preparado con tradición y servido con una experiencia memorable.",
    cta: "Ver birria",
    href: "#birria",
    imagen: "/Menu-Birria.jpeg",
  },
  {
    id: "nocturno",
    titulo: "Menú nocturno",
    descripcion: "Una propuesta fresca para cenas y reuniones nocturnas con sabores que sorprenden.",
    cta: "Ver nocturno",
    href: "#nocturno",
    imagen: "/Menu-VentaNocturna.jpeg",
  },
  {
    id: "eventos",
    titulo: "Eventos",
    descripcion: "Taquiza, birria, hotdogs y combos para celebrar con un servicio elegante y profesional.",
    cta: "Cotizar evento",
    href: "#eventos",
    imagen: "/Menu-Eventos.png",
  },
];
