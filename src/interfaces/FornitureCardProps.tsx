import type { FurnitureItem } from "./FornitureItem";

export interface FurnitureCardProps {
  item: FurnitureItem;
  onClick: (item: FurnitureItem) => void; // Función a llamar cuando se hace clic en la card
}