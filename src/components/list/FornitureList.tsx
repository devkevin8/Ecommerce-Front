import React, { useState } from "react";
import "./FornitureStyles.css";
import type { FurnitureItem } from "../../interfaces/FornitureItem";
import Modal from "../modal/modal";
import FornitureCard from "../card/fornitureCard";

const FurnitureList: React.FC<{
  title?: string;
  items: FurnitureItem[];
}> = ({ title, items }) => {
  // Estado para controlar la apertura y cierre del modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Estado para guardar los datos del item seleccionado que se mostrará en el modal
  const [selectedItem, setSelectedItem] = useState<FurnitureItem | null>(null);

  const handleItemClick = (item: FurnitureItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null); // Opcional: Limpiar el item seleccionado al cerrar
  };

  if (!items || items.length === 0) {
    return (
      <div className="furniture-list-container">
        {title && <h2 className="furniture-list-title">{title}</h2>}
        <p>No hay muebles para mostrar en esta categoría.</p>
      </div>
    );
  }

  return (
    <div className="furniture-list-container">
      {title && <h2 className="furniture-list-title">{title}</h2>}
      <div className="furniture-grid">
        {items.map((item) => (
          <FornitureCard
            key={item.imageUrl}
            item={item}
            onClick={handleItemClick} // Pasamos la función al hacer clic
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        itemData={selectedItem}
      />
    </div>
  );
};

export default FurnitureList;