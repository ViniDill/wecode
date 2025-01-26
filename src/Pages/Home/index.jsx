import React from 'react';
import '../../Styles/Components/home.scss';
import Header from '../../Components/Header';
import PrincipalBanner from '../../Components/PrincipalBanner';
import Categories from '../../Components/Categories';
import NavBanner from '../../Components/NavBanner';
import Launches from '../../Components/Launches';
import Blogs from '../../Components/Blogs';
import Footer from '../../Components/Footer';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <PrincipalBanner />
            <Categories />
            <NavBanner />
            <Launches />
            <Blogs />
            <Footer />
        </div>
    );
};

export default Home;