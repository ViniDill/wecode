import React from 'react';
import '../../Styles/Components/home.scss';
import Header from '../../Components/Header';
import PrincipalBanner from '../../Components/PrincipalBanner';
import Categories from '../../Components/Categories';
import NavBanner from '../../Components/NavBanner';
import Launches from '../../Components/Launches';
import Blog from '../../Components/Blog';
import Footer from '../../Components/Footer'
import Menu from '../../Components/Menu';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <PrincipalBanner />
            <Categories />
            <NavBanner />
            <Launches />
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;