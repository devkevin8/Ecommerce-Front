// src/components/Modal.tsx
import React from 'react';
import './modal.css'; // Crearemos este archivo para los estilos
import type { ModalProps } from '../../interfaces/ModalProps';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, itemData }) => {
  // Si no está abierto o no hay datos, no renderiza nada
  if (!isOpen || !itemData) {
    return null;
  }

  // Función para manejar el click en el fondo (overlay) y cerrar el modal
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Cierra solo si el click es directamente sobre el overlay, no sobre el contenido
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    // El overlay oscuro que cubre la pantalla
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
        </button>
        <h2>{itemData.name}</h2>
        <img src={itemData.imageUrl} alt={itemData.name} className="modal-image" />
        <p className="modal-description">{itemData.description}</p>
        <p className="modal-price">
          Precio: ${itemData.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Modal;