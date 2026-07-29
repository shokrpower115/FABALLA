export interface PaqueteTaquiza {
  id: number;
  nombre: string;
  tacos: number;
  precio: number;
  incluye: string[];
}

export const paquetesAsada: PaqueteTaquiza[] = [
  {
    id: 1,
    nombre: "Paquete Asada 200",
    tacos: 200,
    precio: 4500,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Limones"],
  },
  {
    id: 2,
    nombre: "Paquete Asada 250",
    tacos: 250,
    precio: 5500,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Guacamole"],
  },
  {
    id: 3,
    nombre: "Paquete Asada 300",
    tacos: 300,
    precio: 6500,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Limones", "Guacamole"],
  },
];

export const paquetesPastor: PaqueteTaquiza[] = [
  {
    id: 1,
    nombre: "Paquete Pastor 200",
    tacos: 200,
    precio: 4200,
    incluye: ["Salsa verde", "Salsa tatemada", "Cebolla", "Cilantro"],
  },
  {
    id: 2,
    nombre: "Paquete Pastor 250",
    tacos: 250,
    precio: 5200,
    incluye: ["Salsa verde", "Salsa tatemada", "Cebolla", "Guacamole"],
  },
  {
    id: 3,
    nombre: "Paquete Pastor 300",
    tacos: 300,
    precio: 6200,
    incluye: ["Salsa verde", "Salsa tatemada", "Cebolla", "Limones", "Guacamole"],
  },
];

export const paquetesMixtos: PaqueteTaquiza[] = [
  {
    id: 1,
    nombre: "Paquete Mixto 200",
    tacos: 200,
    precio: 4700,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Limones"],
  },
  {
    id: 2,
    nombre: "Paquete Mixto 250",
    tacos: 250,
    precio: 5700,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Guacamole"],
  },
  {
    id: 3,
    nombre: "Paquete Mixto 300",
    tacos: 300,
    precio: 6700,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Limones", "Guacamole"],
  },
];

export const tiposTaquiza = [
  { id: "asada", nombre: "Asada", icono: "🥩" },
  { id: "pastor", nombre: "Pastor", icono: "🌮" },
  { id: "mixto", nombre: "Mixto", icono: "🔥" },
] as const;
