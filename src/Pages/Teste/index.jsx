import React from 'react';
import NavBanner from '../../Components/NavBanner';
import Launches from '../../Components/Launches';
import Header from '../../Components/Header';
import Cart from '../../Components/Cart';
import MenuMobile from '../../Components/MenuMobile';

const Teste = () => {
    return (
        <div className="test-container">
            <Header />
            <NavBanner />
            <Launches />
            <MenuMobile />
            <Cart />
        </div>
    );
};

export default Teste;