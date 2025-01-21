import React, { useState, useMemo } from "react";
import "../../Styles/Components/launchesCard.scss";

const LaunchesCard = ({ image, description, price, discount, onAddClick }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const favoriteIcon = useMemo(() => {
    return isFavorite
      ? "./static/images/icons/favbutton2.svg"
      : "./static/images/icons/favbutton1.svg";
  }, [isFavorite]);

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  const calculateDiscountPercentage = () => {
    if (!discount) return null;
    return Math.round(((price - discount) / price) * 100);
  };

  const discountPercentage = calculateDiscountPercentage();

  return (
    <div className="launches-card">
      <div className="icons-container-top">
        <img
          className="icons-container-fav"
          src={favoriteIcon}
          alt="Favorite"
          onClick={handleFavoriteToggle}
        />
      </div>
      <div className="icons-container-middle">
        <img
          className="icons-container-image"
          src={`/static/images/produtos/${image}`} // Exibindo a imagem formatada
          alt="Product"
        />
      </div>
      <div className="icons-container-bottom">
        {discountPercentage && (
          <div className="discount-tag">
            <span>{discountPercentage}% OFF</span>
          </div>
        )}
        <img
          className="icons-container-add"
          src="./static/images/icons/Adicionar-pela-vitrine.svg"
          alt="Add"
          onClick={onAddClick} // Chama a função ao clicar
        />
      </div>
      <div className="info-container">
        <p>{description}</p>
        {discount ? (
          <div className="price-container">
            <span className="price-original">R$ {price.toFixed(2)}</span>
            <span className="price-discount">R$ {discount.toFixed(2)}</span>
          </div>
        ) : (
          <span className="price-discount">R$ {price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default LaunchesCard;
