import React, { useState } from "react";
import "../../Styles/Components/addToCartDialog.scss";

const AddToCartDialog = ({ product, unavailableSizes, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  // Tamanhos disponíveis (podem ser configurados globalmente ou dinamicamente se necessário)
  const sizes = [34, 35, 36, 37, 38, 39, 40, 41, 42];

  const handleSizeSelect = (size) => {
    if (!unavailableSizes.includes(size)) {
      setSelectedSize(size);
    }
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <button className="dialog-close" onClick={onClose}>
          x
        </button>
        <div className="dialog-image">
          <img src={product.image} alt="Product" />
        </div>
        <div className="dialog-body">
          <h2>{product.name}</h2>
          <p>Tamanho: <span>{selectedSize || "Selecione um tamanho"}</span></p>
          <div className="sizes-container">
            {sizes.map((size) => (
              <div
                key={size}
                className={`size-box ${
                  unavailableSizes.includes(size)
                    ? "unavailable"
                    : selectedSize === size
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
          <button
            className="add-to-cart-button"
            disabled={!selectedSize}
            onClick={() => {
              console.log("Adicionado ao carrinho:", selectedSize);
              onClose();
            }}
          >
            Adicionar ao Carrinho <img src="../static/images/icons/add-to-cart.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartDialog;
