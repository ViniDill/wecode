import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Styles/Components/blog.scss";

const Blog = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 480, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };

    return (
        <div className='blog-container'>
            <div className='blog-title'>
                <h2>Conheça mais</h2>
                <p>Fique por dentro de tudo que acontece na Bebecê.</p>
            </div>
            <Slider {...settings} className='blog-slider'>
                <div className='blog-description'>
                    <img src="../static/images/icons/blog2.svg" alt="Blog 1" />
                    <h2>É AMANHÃ</h2>
                    <p>SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️</p>
                    <a href="/home">Saiba mais!</a>
                </div>
                <div className='blog-description'>
                    <img src="../static/images/icons/blog1.svg" alt="Blog 2" />
                    <h2>NOVO LOGO, MESMA ESSÊNCIA.</h2>
                    <p>Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</p>
                    <a href="/home">Saiba mais!</a>
                </div>
                <div className='blog-description'>
                    <img src="../static/images/icons/blog3.svg" alt="Blog 3" />
                    <h2>Descubra o glamour em cada passo.</h2>
                    <p>Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</p>
                    <a href="/home">Saiba mais!</a>
                </div>
            </Slider>
        </div>
    );
};

export default Blog;
