import React from 'react';
import { useCart } from '../../context/CartContext';
import '../../Styles/Components/cardCart.scss';

const CardCart = ({ product, onRemove }) => {
  const { updateQuantity } = useCart();

  const price = product?.price?.amount ?? 0;
  const discountPrice = product?.price?.isDiscount ?? 0;

  const increment = () => {
    updateQuantity(product.id, product.quantity + 1);
  };

  const decrement = () => {
    if (product.quantity > 1) {
      updateQuantity(product.id, product.quantity - 1);
    }
  };

  const totalPrice = (discountPrice || price) * product.quantity;

  return (
    <div className="card-cart">
      <div className='image-description'>
        <div className="cart-image">
          <img src={product.image} alt="Product" />
        </div>
        <div className="cart-content">
          <div className="cart-description">
            <p>{product.name}</p>
            <span>Tamanho: {product.selectedSize}</span>
          </div>
          <div className="cart-price">
            <span>
              R$ {totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="add-remove">
        <div className='counter'>
          <button onClick={decrement} disabled={product.quantity <= 1}>-</button>
          <span>{product.quantity}</span>
          <button onClick={increment}>+</button>
        </div>
        <button className='remove-button' onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
};

export default CardCart;
