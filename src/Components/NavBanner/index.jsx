import React from 'react';
import '../../Styles/Components/navBanner.scss';

const NavBanner
 = () => {
    return (
        <>
            <div className='navBannerContainer'>
                <img className='bigBanner' src="./static/images/icons/banner-grande.svg" alt="" />
                <img className='smallBanner' src="./static/images/icons/banner-pequeno.svg" alt="" />
            </div>
            <div className='navBannerContainer-mobile'>
                <img className='smallBanner-mobile' src="./static/images/icons-mobile/banner-pequeno.svg" alt="" />
                <img className='bigBanner-mobile' src="./static/images/icons-mobile/banner-grande.svg" alt="" />
            </div>
        </>
    );
};

export default NavBanner;