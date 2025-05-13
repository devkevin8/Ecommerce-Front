// src/components/FurnitureCard.tsx
import React from 'react';
import './cardStyle.css'; // Crearemos este archivo para los estilos de la card
import type { FurnitureCardProps } from '../../interfaces/FornitureCardProps';

const FurnitureCard: React.FC<FurnitureCardProps> = ({ item, onClick }) => {
  return (
    <div className="furniture-card" onClick={() => onClick(item)}>
      <div className="furniture-card-image-container">
        <img src={item.imageUrl} alt={item.name} className="furniture-card-image" />
      </div>
      <div className="furniture-card-content">
        <h3 className="furniture-card-name">{item.name}</h3>
        <p className="furniture-card-price">
          ${item.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default FurnitureCard;