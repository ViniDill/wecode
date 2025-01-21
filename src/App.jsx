import React, { useState } from 'react';
import './App.scss'; 
import Routes from './Routes';
import { CartProvider } from './context/CartContext';
import Cart from './Components/Cart';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // Função para abrir ou fechar o carrinho
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <CartProvider>
      {/* Exibe o carrinho somente se isCartVisible for true */}
      {isCartVisible && <Cart onClose={toggleCart} />}
      
      {/* Exemplo de botão para abrir/fechar o carrinho */}
      <button onClick={toggleCart}>
        {isCartVisible ? "Fechar Carrinho" : "Abrir Carrinho"}
      </button>

      <Routes />
    </CartProvider>
  );
}

export default App;
