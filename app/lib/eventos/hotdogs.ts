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
    nombre: "Paquete 100 Hotdogs Con Papas",
    cantidad: 100,
    precio: 5000,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
  {
    id: 2,
    nombre: "Paquete 120 Hotdogs Con Papas",
    cantidad: 120,
    precio: 6000,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
  {
    id: 3,
    nombre: "Paquete 150 Hotdogs Con Papas",
    cantidad: 150,
    precio: 7500,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
    {
    id: 4,
    nombre: "Paquete 170 Hotdogs Con Papas",
    cantidad: 170,
    precio: 8500,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
  {
    id: 5,
    nombre: "Paquete 200 Hotdogs Con Papas",
    cantidad: 200,
    precio: 10000,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
];

export const paquetesHotdogsSinPapas: PaqueteHotdog[] = [
  {
    id: 1,
    nombre: "Paquete 100 Hotdogs Sin Papas",
    cantidad: 100,
    precio: 3500,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
  {
    id: 2,
    nombre: "Paquete 120 Hotdogs Sin Papas",
    cantidad: 120,
    precio: 4200,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
  {
    id: 3,
    nombre: "Paquete 150 Hotdogs Sin Papas",
    cantidad: 150,
    precio: 5300,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
    {
    id: 4,
    nombre: "Paquete 170 Hotdogs Sin Papas",
    cantidad: 170,
    precio: 6000,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
  {
    id: 5,
    nombre: "Paquete 200 Hotdogs Sin Papas",
    cantidad: 200,
    precio: 7000,
    incluye: ["Salsas", "Verduras", "Chiles", "Aderezos", "Sabritas"],
  },
];

export const tiposHotdog = [
  { id: "conPapas", nombre: "Con Papas", icono: "🥔" },
  { id: "sinPapas", nombre: "Sin Papas", icono: "🚫" },
] as const; 
