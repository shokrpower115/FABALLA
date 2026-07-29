export interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  badge?: string;
}

export const birriaMenu: MenuItem[] = [
  {
    id: "quesabirria",
    nombre: "Quesabirria",
    descripcion: "Tortilla dorada con costra de quesorellena de birria.",
    precio: 40,
    categoria: "Birria",
    badge: "Consomé incluido",
  },
  {
    id: "tacos",
    nombre: "Tacos",
    descripcion: "Tacos de birria servidos con cebolla, cilantro y limón.",
    precio: 30,
    categoria: "Birria",
    badge: "Consomé incluido",
  },
  {
    id: "media-orden",
    nombre: "Media Orden",
    descripcion: "Porción de 1/2 orden de birria en caldo, Buena decision para probar la especialidad.",
    precio: 90,
    categoria: "Birria",
    badge: "Tortillas incluidas",
  },
  {
    id: "orden",
    nombre: "Orden",
    descripcion: "Porción de 1 orden de birria en caldo, Buena decision para probar la especialidad.",
    precio: 50,
    categoria: "Birria",
    badge: "Tortillas incluidas",
  },
  {
    id: "enchilada",
    nombre: "Enchivada",
    descripcion: "Tortilla dorada con costra de queso y asiento, rellena de birria.",
    precio: 80,
    categoria: "Birria",
  },
  {
    id: "quesadilla",
    nombre: "Quesadilla Harina",
    descripcion: "Quesadilla de harina preparada con birria y queso derretido.",
    precio: 75,
    categoria: "Birria",
  },
  {
    id: "birriamen",
    nombre: "Birriamen",
    descripcion: "Maruchan preparada con consome de birria y porcion de carne en caldo.",
    precio: 120,
    categoria: "Birria",
    badge: "Tortillas incluidas",
  },
];

export const birriaInfo = {
  title: "Menú de Birria",
  subtitle: "Disponible Viernes a Domingo",
  description: "El auténtico sabor de la birria.",
  note: "Todos nuestros platillos incluyen los complementos correspondientes.",
};
