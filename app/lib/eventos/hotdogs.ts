export interface PaqueteHotdog {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
  incluye: string[];
}

export const paquetesHotdogs: PaqueteHotdog[] = [
  {
    id: 1,
    nombre: "Paquete Hotdogs 50",
    cantidad: 50,
    precio: 3800,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole"],
  },
  {
    id: 2,
    nombre: "Paquete Hotdogs 80",
    cantidad: 80,
    precio: 5200,
    incluye: ["Salsa", "Verdura", "Desechables", "Pico de gallo"],
  },
  {
    id: 3,
    nombre: "Paquete Hotdogs 100",
    cantidad: 100,
    precio: 6500,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole", "Pico de gallo"],
  },
];
