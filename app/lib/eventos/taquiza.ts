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
    nombre: "Paquete Asada 200 Tacos",
    tacos: 200,
    precio: 4100,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole"],
  },
  {
    id: 2,
    nombre: "Paquete Asada 250 Tacos",
    tacos: 250,
    precio: 5100,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole"],
  },
  {
    id: 3,
    nombre: "Paquete Asada 300 Tacos",
    tacos: 300,
    precio: 6100,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 pellizcadas (sin carne)"],
  },
  {
    id: 4,
    nombre: "Paquete Asada 400 Tacos",
    tacos: 400,
    precio: 8100,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 pellizcadas (sin carne)"],
  },
  {
    id: 5,
    nombre: "Paquete Asada 200 Tacos + 30 Quesadillas",
    tacos: 200,
    precio: 6200,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 Quesadillas (con carne)"],
  },
  {
    id: 6,
    nombre: "Paquete Asada 300 Tacos + 30 Quesadillas",
    tacos: 300,
    precio: 8200,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 Quesadillas (con carne)"],
  },
];

export const paquetesPastor: PaqueteTaquiza[] = [
  {
    id: 1,
    nombre: "Paquete Pastor 200 Tacos",
    tacos: 200,
    precio: 3700,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole"],
  },
  {
    id: 2,
    nombre: "Paquete Pastor 250 Tacos",
    tacos: 250,
    precio: 4600,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole"],
  },
  {
    id: 3,
    nombre: "Paquete Pastor 300 Tacos",
    tacos: 300,
    precio: 5500,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 pellizcadas (sin carne)"],
  },
  {
    id: 4,
    nombre: "Paquete Pastor 400 Tacos",
    tacos: 400,
    precio: 7300,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 pellizcadas (sin carne)"],
  },
  {
    id: 5,
    nombre: "Paquete Pastor 200 Tacos + 30 Quesadillas",
    tacos: 200,
    precio: 5600,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 Quesadillas (con carne)"],
  },
  {
    id: 6,
    nombre: "Paquete Pastor 300 Tacos + 30 Quesadillas",
    tacos: 300,
    precio: 7300,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 Quesadillas (con carne)"],
  },
];

export const paquetesMixtos: PaqueteTaquiza[] = [
  {
    id: 1,
    nombre: "Paquete Mixto 200 Tacos",
    tacos: 200,
    precio: 3900,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Limones"],
  },
  {
    id: 2,
    nombre: "Paquete Mixto 250 Tacos",
    tacos: 250,
    precio: 4900,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Guacamole"],
  },
  {
    id: 3,
    nombre: "Paquete Mixto 300 Tacos",
    tacos: 300,
    precio: 5800,
    incluye: ["Salsa verde", "Salsa roja", "Verdura", "Limones", "Guacamole"],
  },
  {
    id: 4,
    nombre: "Paquete Mixto 400 Tacos",
    tacos: 400,
    precio: 7700,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 pellizcadas (sin carne)"],
  },
  {
    id: 5,
    nombre: "Paquete Mixto 200 Tacos + 30 Quesadillas",
    tacos: 200,
    precio: 5900,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 Quesadillas (con carne)"],
  },
  {
    id: 6,
    nombre: "Paquete Mixto 300 Tacos + 30 Quesadillas",
    tacos: 300,
    precio: 7800,
    incluye: ["Variedad de Salsas", "Cebolla asada", "Verdura", "Guacamole", "Agua 20L (sabor a elegir)", "30 Quesadillas (con carne)"],
  },
];

export const tiposTaquiza = [
  { id: "asada", nombre: "Asada", icono: "🥩" },
  { id: "pastor", nombre: "Pastor", icono: "🌮" },
  { id: "mixto", nombre: "Mixto", icono: "🔥" },
] as const;
