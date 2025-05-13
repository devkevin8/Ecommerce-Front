export interface FurnitureItem {
  id: number | string; // Un ID único
  imageUrl: string;
  name: string;
  description: string;
  price: number; // O string si viene formateado
}