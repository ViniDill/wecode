import React from 'react';
import NavBanner from '../../Components/NavBanner';
import Launches from '../../Components/Launches';
import Blog from '../../Components/Blog';
import Header from '../../Components/Header';

const Teste = () => {
    return (
        <div className="test-container">
            <Header />
            <NavBanner />
            <Launches />
            <Blog />
        </div>
    );
};

export default Teste;