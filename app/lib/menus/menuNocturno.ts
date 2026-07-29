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
    id: "tacos-asada",
    nombre: "Tacos de Asada",
    descripcion: "Tacos preparados al momento con carne asada y aderezos.",
    precio: 22,
    categoria: "Tacos",
    badge: "Popular",
  },
  {
    id: "tacos-pastor",
    nombre: "Tacos al Pastor",
    descripcion: "Tacos con sabor auténtico y acompaña con piña y cebolla.",
    precio: 24,
    categoria: "Tacos",
  },
  {
    id: "hotdogs",
    nombre: "Hotdogs",
    descripcion: "Hotdogs con salsa, verdura y una presentación especial.",
    precio: 28,
    categoria: "Hotdogs",
    badge: "Nuevo",
  },
  {
    id: "quesadillas",
    nombre: "Quesadillas",
    descripcion: "Quesadillas rellenas con ingredientes de la casa.",
    precio: 30,
    categoria: "Antojitos",
  },
  {
    id: "tortas",
    nombre: "Tortas",
    descripcion: "Tortas con carne y aderezos para una opción rápida y satisfactoria.",
    precio: 26,
    categoria: "Antojitos",
  },
  {
    id: "gringas",
    nombre: "Gringas",
    descripcion: "Opción cremosa y muy apetecible para la hora nocturna.",
    precio: 32,
    categoria: "Antojitos",
  },
];

export const nocturnoInfo = {
  title: "Menú Nocturno",
  subtitle: "Disponible Lunes a Viernes de 6:00 PM a 11:00 PM",
  description: "Tacos, hotdogs y antojitos preparados al momento.",
  note: "Ideal para disfrutar en la noche con una experiencia más casual y dinámica.",
};
