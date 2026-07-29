export interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  badge?: string;
}

export const menuNocturno: MenuItem[] = [
  {
    id: "tacos-pastor",
    nombre: "Tacos al Pastor",
    descripcion: "Tacos al pastor acompañados de complementos.",
    precio: 30,
    categoria: "Tacos",
  },
  {
    id: "quesadilla-maiz",
    nombre: "Quesadilla de Maiz",
    descripcion: "Quesadilla de maiz con queso y carne al pastor, acompañado de complementos.",
    precio: 45,
    categoria: "Quesadillas",
  },
  {
    id: "quesadilla-harina",
    nombre: "Quesadilla de Harina",
    descripcion: "Quesadilla de harina con queso y carne al pastor, acompañado de complementos.",
    precio: 70,
    categoria: "Quesadillas",
  },
  {
    id: "hotdog",
    nombre: "Hotdog",
    descripcion: "Hotdog sencillo acompañado con complementos y papas.",
    precio: 50,
    categoria: "Hotdogs",
    badge: "Nuevo",
  },
  {
    id: "hotdog-especial",
    nombre: "Hotdog especial",
    descripcion: "Hotdog con salchicha y carne al pastor, con complementos y papas.",
    precio: 90,
    categoria: "Hotdogs",
    badge: "Nuevo",
  },
  {
    id: "Hamburguesa",
    nombre: "Hamburguesa sencilla",
    descripcion: "Hamburguesa sencilla con carne, lechuga, tomate y cebolla, Acompañada con complementos y papas.",
    precio: 90,
    categoria: "Hamburguesas",
    badge: "Nuevo",
  },
  {
    id: "Hamburguesa-especial",
    nombre: "Hamburguesa Especial",
    descripcion: "Hamburguesa Especial con carne, salchica-asada, jamon, queso, lechuga, tomate y cebolla, Acompañada con complementos y papas.",
    precio: 140,
    categoria: "Hamburguesas",
    badge: "Nuevo",
  },
  {
    id: "torta-cochinita",
    nombre: "Torta de Cochinita",
    descripcion: "Torta de Cochinita sencilla.",
    precio: 50,
    categoria: "Tortas",
  },
  {
    id: "torta-cochinitaEspecial",
    nombre: "Torta de Cochinita Especial",
    descripcion: "Torta de cochinita con jamon y queso, acompañado de complementos.",
    precio: 70,
    categoria: "Tortas",
  },
  {
    id: "torta-cochinitaEspecial-papas",
    nombre: "Torta de Cochinita Especial con papas",
    descripcion: "Torta de cochinita con jamon y queso, acompañado de complementos y papas.",
    precio: 90,
    categoria: "Tortas",
  },
  {
    id: "torta-Pastor",
    nombre: "Torta de al pastor",
    descripcion: "Torta de pastor con jamon y queso, acompañado de complementos.",
    precio: 90,
    categoria: "Tortas",
  },
  {
    id: "torta-PastorPapas",
    nombre: "Torta de al pastor con papas",
    descripcion: "Torta de pastor con jamon y queso, acompañado de complementos y papas.",
    precio: 120,
    categoria: "Tortas",
  },
  {
    id: "Nachos-CH",
    nombre: "Nachos de cochinita chicos",
    descripcion: "Nachos Chicos con frijol, queso y cochinita.",
    precio: 70,
    categoria: "Nachos",
  },
  {
    id: "Nachos-GR",
    nombre: "Nachos de cochinita grandes",
    descripcion: "Nachos grandes con frijol, queso y cochinita.",
    precio: 110,
    categoria: "Nachos",
  },
  {
    id: "Nachos-pastor-CH",
    nombre: "Nachos de Pastor chicos",
    descripcion: "Nachos chicos con frijol, queso y Pastor.",
    precio: 90,
    categoria: "Nachos",
  },
  {
    id: "Nachos-Pastor-GR",
    nombre: "Nachos de Pastor grandes",
    descripcion: "Nachos Grandes con frijol, queso y Pastor.",
    precio: 140,
    categoria: "Nachos",
  },
  {
    id: "Nachos-Mixtos",
    nombre: "Nachos Mixtos grandes",
    descripcion: "Nachos Grandes con frijol, Queso, Cochinita y Pastor.",
    precio: 130,
    categoria: "Nachos",
  },
  {
    id: "Salchi-papas",
    nombre: "Orden de Salchi-Papas",
    descripcion: "Orden de papas con salchi-pulpos fritos.",
    precio: 80,
    categoria: "Extras",
  },
  {
    id: "Orden-papas",
    nombre: "Orden de Papas",
    descripcion: "Orden de papas fritas.",
    precio: 50,
    categoria: "Extras",
  },
  {
    id: "Orden-papasEspeciales",
    nombre: "Orden de Papas especiales",
    descripcion: "Orden de papas fritas grande acompañado de salchichas y queso.",
    precio: 110,
    categoria: "Extras",
  },
  {
    id: "salchicas-asadas-ch",
    nombre: "Orden chica de Salchichas para Asar",
    descripcion: "Orden de salchichas para asar (2PZ).",
    precio: 40,
    categoria: "Extras",
  },
  {
    id: "salchicas-asadas-md",
    nombre: "Orden mediana de Salchichas para Asar",
    descripcion: "Orden de salchichas para asar (3PZ).",
    precio: 60,
    categoria: "Extras",
  },
  {
    id: "salchicas-asadas-gr",
    nombre: "Orden grande de Salchichas para Asar",
    descripcion: "Orden de salchichas para asar (4PZ).",
    precio: 80,
    categoria: "Extras",
  },
];

export const nocturnoInfo = {
  title: "Menú Nocturno",
  subtitle: "Disponible Lunes a Viernes de 7:00 PM a 11:00 PM",
  description: "Tacos, hotdogs y antojitos preparados al momento.",
  note: "Ideal para disfrutar en la noche con una experiencia más casual y dinámica.",
};
