import type { FurnitureItem } from "./FornitureItem";

export interface ModalProps {
  isOpen: boolean; // Estado para saber si se muestra o no
  onClose: () => void; // Función para cerrar el modal desde el padre
  itemData: FurnitureItem | null; // Datos del item seleccionado (puede ser null si no hay selección)
}