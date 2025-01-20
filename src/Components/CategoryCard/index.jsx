import React from "react";
import '../../Styles/Components/categoryCard.scss';

const CategoryCard = ({ image, description }) => {
  return (
    <div className="category-card">
        <div className="category-card-image-container">
            <img src={image} alt={description} className="category-card-image" />
        </div>
        <div className="category-card-text">
            <p>{description}</p>
        </div>
    </div>
  );
};

export default CategoryCard;
