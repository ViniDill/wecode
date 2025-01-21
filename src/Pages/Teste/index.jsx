import React from 'react';
import NavBanner from '../../Components/NavBanner';
import Launches from '../../Components/Launches';
import Blog from '../../Components/Blog';
import Header from '../../Components/Header';
import Cart from '../../Components/Cart';

const Teste = () => {
    return (
        <div className="test-container">
            <Header />
            <NavBanner />
            <Launches />
            <Blog />
            <Cart />
        </div>
    );
};

export default Teste;