import React from 'react';
import '../../Styles/Components/cart.scss'

const Cart = ({ onClose }) => {
    return (
        <div className='cart'>
            <div className='cart-title'>
                <h2>Carrinho</h2>
                <button className="dialog-close" onClick={onClose}>
                x
                </button>
            </div>
            <div className='cart-division'>
                <div>
                    <div className='cart-container'>
                        <div className='cart-image'>
                            <img src="./static/images/icons/image-1.svg" alt="" />
                        </div>
                        <div className='cart-content'>
                            <div className='cart-descrition'>
                                <p>Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado</p>
                                <span>Tamanho: 42</span>
                            </div>
                            <div className='cart-price'>
                                <span>R$ 179,90</span>
                            </div>
                        </div>
                    </div>
                    <div className='add-remove'>
                        <div className='counter'>
                            <button>-</button>
                            <span>5</span> 
                            <button>+</button>
                        </div>
                        <button className='remove-button'>Remover</button>
                    </div>
                </div>
                <div className='cart-finalization'>
                    <div className='cart-subtotal'>
                        <p>Subtotal</p>
                        <span>R$ 100,00</span>
                    </div>
                    <div className='cart-discount'>
                        <p>Descontos</p>
                        <span className='cart-discount'>- R$ 10,00</span>
                    </div>
                    <div className='cart-total'>
                        <p>Total</p>
                        <span>R$ 90,00</span>
                    </div>
                    <button className='place-order' >Finalizar pedido</button>
                    <a className='continue-shopping' href="#">Continuar comprando</a>
                </div>
            </div>
        </div>
    );
};

export default Cart;