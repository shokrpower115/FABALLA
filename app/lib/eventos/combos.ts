export interface PaqueteCombo {
  id: number;
  nombre: string;
  tacos: number;
  hotdogs: number;
  precio: number;
  incluye: string[];
}

export const combosAsada: PaqueteCombo[] = [
  {
    id: 1,
    nombre: "Combo Hotdog + Asada 200/50",
    tacos: 200,
    hotdogs: 50,
    precio: 5700,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole"],
  },
  {
    id: 2,
    nombre: "Combo Hotdog + Asada 250/50",
    tacos: 250,
    hotdogs: 50,
    precio: 6700,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole", "Limones"],
  },
];

export const combosPastor: PaqueteCombo[] = [
  {
    id: 1,
    nombre: "Combo Hotdog + Pastor 200/50",
    tacos: 200,
    hotdogs: 50,
    precio: 5400,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole"],
  },
  {
    id: 2,
    nombre: "Combo Hotdog + Pastor 250/50",
    tacos: 250,
    hotdogs: 50,
    precio: 6400,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole", "Limones"],
  },
];

export const combosMixtos: PaqueteCombo[] = [
  {
    id: 1,
    nombre: "Combo Hotdog + Mixto 200/50",
    tacos: 200,
    hotdogs: 50,
    precio: 5600,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole"],
  },
  {
    id: 2,
    nombre: "Combo Hotdog + Mixto 250/50",
    tacos: 250,
    hotdogs: 50,
    precio: 6600,
    incluye: ["Salsa", "Verdura", "Desechables", "Guacamole", "Limones"],
  },
];

export const tiposCombo = [
  { id: "asada", nombre: "Hotdog + Asada", icono: "🥩" },
  { id: "pastor", nombre: "Hotdog + Pastor", icono: "🌮" },
  { id: "mixto", nombre: "Hotdog + Mixto", icono: "🔥" },
] as const;
