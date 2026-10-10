import type { MenuItem } from "./tipos";
import { horarioBirria } from "../negocio";

export const birriaMenu: MenuItem[] = [
  {
    id: "quesabirria",
    nombre: "Quesabirria",
    descripcion: "Tortilla dorada con costra de queso, rellena de birria.",
    precio: 40,
    categoria: "Birria",
    badge: "Consomé incluido",
  },
  {
    id: "tacos",
    nombre: "Tacos",
    descripcion: "Tacos de birria servidos con cebolla, cilantro y limón.",
    precio: 35,
    categoria: "Birria",
    badge: "Consomé incluido",
  },
  {
    id: "gordita",
    nombre: "Gordita Dorada",
    descripcion: "Gordita de maíz con asiento, queso y carne.",
    precio: 60,
    categoria: "Birria",
    badge: "Consomé incluido",
  },
  {
    id: "planchada",
    nombre: "Planchada de Harina",
    descripcion: "2 tortillas de harina con queso gratinado, carne y su respectivo consomé.",
    precio: 100,
    categoria: "Birria",
  },
  {
    id: "media-orden",
    nombre: "Media Orden",
    descripcion: "Porción de 1/2 orden de birria en caldo. Buena opción para probar la especialidad.",
    precio: 90,
    categoria: "Birria",
    badge: "Tortillas incluidas",
  },
  {
    id: "orden",
    nombre: "Orden",
    descripcion: "Porción de 1 orden de birria en caldo, ideal para disfrutar la especialidad completa.",
    precio: 150,
    categoria: "Birria",
    badge: "Tortillas incluidas",
  },
  {
    id: "enchivada",
    nombre: "Enchivada",
    descripcion: "Tortilla dorada con costra de queso y asiento, rellena de birria.",
    precio: 80,
    categoria: "Birria",
  },
    {
    id: "enchivada-TM",
    nombre: "Enchivada con Tortilla Hecha a Mano",
    descripcion: "Tortilla hecha a mano dorada con costra de queso y asiento, rellena de birria.",
    precio: 100,
    categoria: "Birria",
  },
  {
    id: "quesadilla",
    nombre: "Quesadilla Harina",
    descripcion: "Tortilla de harina preparada con birria y queso derretido.",
    precio: 75,
    categoria: "Birria",
  },
    {
    id: "quesadilla-Maiz",
    nombre: "Quesadilla de Maíz",
    descripcion: "Tortilla hecha a mano preparada con birria y queso derretido.",
    precio: 75,
    categoria: "Birria",
  },
    {
    id: "torta",
    nombre: "Torta de Birria",
    descripcion: "Pan dorado con base de aderezo chipotle con queso gratinado y carne.",
    precio: 90,
    categoria: "Birria",
    badge: "Consomé incluido",
  },
  {
    id: "birriamen",
    nombre: "Birriamen",
    descripcion: "Maruchan preparada con consomé de birria y porción de carne en caldo.",
    precio: 120,
    categoria: "Birria",
    badge: "Tortillas incluidas",
  },
];

export const birriaInfo = {
  title: "Menú de Birria",
  subtitle: `${horarioBirria.dias} · ${horarioBirria.horas}`,
  description: "El auténtico sabor de la birria.",
  note: "Todos nuestros platillos incluyen los complementos correspondientes.",
};
