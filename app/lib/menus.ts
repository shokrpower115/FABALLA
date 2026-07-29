import type { MenuItem } from "../types/menu";

export const birriaMenu: MenuItem[] = [
  {
    id: "birria-1",
    nombre: "Birria estilo tradicional",
    descripcion: "Consomé, carne tierna y todos los acompañamientos clásicos.",
    precio: "Desde $180",
    etiqueta: "Especial del fin de semana",
    destacado: true,
  },
  {
    id: "birria-2",
    nombre: "Tacos de birria",
    descripcion: "Servidos con cebolla, cilantro, limones y salsa perfecta para acompañar.",
    precio: "Por orden",
  },
  {
    id: "birria-3",
    nombre: "Orden extra de consomé",
    descripcion: "Ideal para compartir o completar la experiencia de birria.",
    precio: "Disponible",
  },
];

export const menuNocturno: MenuItem[] = [
  {
    id: "nocturno-1",
    nombre: "Tacos de asada",
    descripcion: "Carne asada preparada al momento con ingredientes frescos.",
    precio: "Por orden",
    destacado: true,
  },
  {
    id: "nocturno-2",
    nombre: "Tacos al pastor",
    descripcion: "Acompañados de piña, cebolla y salsa de la casa.",
    precio: "Por orden",
  },
  {
    id: "nocturno-3",
    nombre: "Hot dogs estilo Sinaloa",
    descripcion: "Una opción rápida, cremosa y muy atractiva para el menú nocturno.",
    precio: "Por orden",
  },
  {
    id: "nocturno-4",
    nombre: "Quesadillas de la casa",
    descripcion: "Perfectas para cerrar una noche con algo reconfortante.",
    precio: "Por orden",
  },
];
