export type Extras = "ninguno" | "quesadillas" | "pellizcadas";
export type HotDogs = "ninguno" | "50hotdogs" | "100hotdogs";

export interface PrecioTacos {
  tacos: number;
  precio: number;
}

export interface PrecioCombo {
  tacos: number;
  hotdogs: number;
  precio: number;
}

export interface Paquete {
  id: string;
  nombre: string;
  emoji: string;
  descripcion: string;
  incluye: string[];
  notaExtra: string;
  precios: PrecioTacos[];
  extras: {
    quesadillas: { cantidad: number; precioAdicional: number }[];
    pellizcadas: { cantidad: number; precioAdicional: number }[];
  };
  combosHotDogs: PrecioCombo[];
}

export const paquetes: Paquete[] = [
  {
    id: "asada",
    nombre: "Tacos de Asada",
    emoji: "🥩",
    descripcion: "Carne asada al carbón con todos los complementos",
    incluye: [
      "Salsa verde", "Salsa tatemada", "Cebolla asada",
      "Rábano y pepino", "Jugo de tomate", "Cebolla y cilantro",
      "Desechable", "Guacamole", "Limones"
    ],
    notaExtra: "De 300 tacos en adelante incluye 1 termo de 20L (sabor a elegir) y 30 pellizcadas sin carne.",
    precios: [
      { tacos: 200, precio: 4100 },
      { tacos: 250, precio: 5100 },
      { tacos: 300, precio: 6100 },
      { tacos: 350, precio: 7100 },
      { tacos: 400, precio: 8100 },
      { tacos: 450, precio: 9100 },
      { tacos: 500, precio: 10100 },
    ],
    extras: {
      quesadillas: [
        { cantidad: 30, precioAdicional: 2100 },
        { cantidad: 50, precioAdicional: 3000 },
      ],
      pellizcadas: [
        { cantidad: 30, precioAdicional: 1200 },
        { cantidad: 50, precioAdicional: 1800 },
      ],
    },
    combosHotDogs: [
      { tacos: 200, hotdogs: 50,  precio: 5900 },
      { tacos: 250, hotdogs: 50,  precio: 6900 },
      { tacos: 300, hotdogs: 50,  precio: 7900 },
      { tacos: 200, hotdogs: 100, precio: 7600 },
      { tacos: 250, hotdogs: 100, precio: 8600 },
      { tacos: 300, hotdogs: 100, precio: 9600 },
    ],
  },
  {
    id: "pastor",
    nombre: "Tacos de Pastor",
    emoji: "🌮",
    descripcion: "Pastor estilo Sinaloa con piña y adobo",
    incluye: [
      "Salsa verde", "Salsa tatemada", "Cebolla asada",
      "Rábano y pepino", "Jugo de tomate", "Cebolla y cilantro",
      "Desechable", "Guacamole", "Limones"
    ],
    notaExtra: "De 300 tacos en adelante incluye 1 termo de 20L (sabor a elegir) y 30 pellizcadas sin carne.",
    precios: [
      { tacos: 200, precio: 3700 },
      { tacos: 250, precio: 4600 },
      { tacos: 300, precio: 5500 },
      { tacos: 350, precio: 6400 },
      { tacos: 400, precio: 7300 },
      { tacos: 450, precio: 8200 },
      { tacos: 500, precio: 9100 },
    ],
    extras: {
      quesadillas: [
        { cantidad: 30, precioAdicional: 1900 },
        { cantidad: 50, precioAdicional: 2700 },
      ],
      pellizcadas: [
        { cantidad: 30, precioAdicional: 1100 },
        { cantidad: 50, precioAdicional: 1700 },
      ],
    },
    combosHotDogs: [
      { tacos: 200, hotdogs: 50,  precio: 5500 },
      { tacos: 250, hotdogs: 50,  precio: 6400 },
      { tacos: 300, hotdogs: 50,  precio: 7300 },
      { tacos: 200, hotdogs: 100, precio: 7200 },
      { tacos: 250, hotdogs: 100, precio: 8100 },
      { tacos: 300, hotdogs: 100, precio: 9000 },
    ],
  },
  {
    id: "mixtos",
    nombre: "Tacos Mixtos",
    emoji: "🍖",
    descripcion: "Combinación de asada y pastor para todos los gustos",
    incluye: [
      "Salsa verde", "Salsa tatemada", "Cebolla asada",
      "Rábano y pepino", "Jugo de tomate", "Cebolla y cilantro",
      "Desechable", "Guacamole", "Limones"
    ],
    notaExtra: "De 300 tacos en adelante incluye 1 termo de 20L (sabor a elegir) y 30 pellizcadas sin carne.",
    precios: [
      { tacos: 200, precio: 3900 },
      { tacos: 250, precio: 4900 },
      { tacos: 300, precio: 5800 },
      { tacos: 350, precio: 6400 },
      { tacos: 400, precio: 7700 },
      { tacos: 450, precio: 8700 },
      { tacos: 500, precio: 9700 },
    ],
    extras: {
      quesadillas: [
        { cantidad: 30, precioAdicional: 2000 },
        { cantidad: 50, precioAdicional: 2900 },
      ],
      pellizcadas: [
        { cantidad: 30, precioAdicional: 1150 },
        { cantidad: 50, precioAdicional: 1750 },
      ],
    },
    combosHotDogs: [
      { tacos: 200, hotdogs: 50,  precio: 5700 },
      { tacos: 250, hotdogs: 50,  precio: 6700 },
      { tacos: 300, hotdogs: 50,  precio: 7600 },
      { tacos: 200, hotdogs: 100, precio: 7400 },
      { tacos: 250, hotdogs: 100, precio: 8400 },
      { tacos: 300, hotdogs: 100, precio: 9300 },
    ],
  },
];