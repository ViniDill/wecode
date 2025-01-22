import React from "react";
import "../../Styles/Components/principalBanner.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";
import "swiper/scss/pagination"
import 'swiper/scss';

register();

function PrincipalBanner() {

  return (
    <div className="banner">
      <div className="container">
        <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation
          autoplay
        >
          <SwiperSlide>
            <img className='banner-container-image' src="../static/images/icons/banner-principal-2.svg" alt="Erro" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='banner-container-image' src="../static/images/icons/banner-principal-1.svg" alt="Erro" />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      <div className="container-mobile">
        <Swiper
          slidesPerView={1}
          pagination={{clickable: true}}
          navigation
          autoplay
        >
          <SwiperSlide>
            <img className='banner-container-image-mobile' src="../static/images/icons-mobile/banner-principal-1.svg" alt="Erro" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='banner-container-image-mobile' src="../static/images/icons-mobile/banner-principal-2.svg" alt="Erro" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='banner-container-image-mobile' src="../static/images/icons-mobile/banner-principal-3.svg" alt="Erro" />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}

export default PrincipalBanner;