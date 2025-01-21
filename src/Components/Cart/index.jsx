import React from 'react';
import { useCart } from '../../context/CartContext';
import CardCart from '../CardCart';
import '../../Styles/Components/cart.scss';

const Cart = ({ onContinueShopping }) => {  // Recebe a função como prop
  const { cartItems, removeFromCart } = useCart();

  const { subtotal, totalDiscount } = cartItems.reduce(
    (acc, item) => {
      const price = parseFloat(item.price.amount);
      const discountPrice = parseFloat(item.price.isDiscount);
      const quantity = item.quantity;

      const totalPrice = discountPrice
        ? discountPrice * quantity
        : price
        ? price * quantity
        : 0;

      acc.subtotal += totalPrice;

      if (!isNaN(price) && !isNaN(discountPrice)) {
        const discountPerItem = price - discountPrice;
        acc.totalDiscount += discountPerItem * quantity;
      }

      return acc;
    },
    { subtotal: 0, totalDiscount: 0 }
  );

  const total = subtotal - totalDiscount;

  return (
    <div className="cart">
        <div className='cart-division'>
          <div className="cart-title">
            <h2>Carrinho</h2>
          </div>
          <div className="cart-division">
            {cartItems.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              cartItems.map((product) => (
                <CardCart
                  key={product.id}
                  product={product}
                  onRemove={() => removeFromCart(product.id)}
                />
              ))
            )}
        </div>
        <div className="cart-finalization">
          <div className="cart-subtotal">
            <p>Subtotal</p>
            <span>R$ {subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-discount">
            <p>Descontos</p>
            <span>- R$ {totalDiscount.toFixed(2)}</span>
          </div>
          <div className="cart-total">
            <p>Total</p>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button className="place-order">Finalizar pedido</button>
          <a 
            className="continue-shopping" 
            href="#"
            onClick={onContinueShopping}  // Chama a função para fechar o cart
          >
            Continuar comprando
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
