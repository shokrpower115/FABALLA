export interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  badge?: string;
  // Ruta dentro de /public, p. ej. "/menu/birria/tacos.webp"
  imagen?: string;
}
