import React from 'react';
import "../../Styles/Components/blog.scss"

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-title'>                
                <h2>Conheça mais</h2>
                <p>Fique por dentro de tudo que acontece na Bebecê.</p>
            </div>
            <div className='blog-images'>
            <div className='blog-description'>
                <img src="../static/images/icons/blog2.svg" alt="" />
                <h2>É AMANHÃ</h2>
                <p>SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️</p>
                <a href="/home">Saiba mais!</a>
            </div>
            <div className='blog-description'>
            <img src="../static/images/icons/blog1.svg" alt="" />
                <h2>NOVO LOGO, MESMA ESSÊNCIA.</h2>
                <p>Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!</p>
                <a href="/home">Saiba mais!</a>
            </div>
            <div className='blog-description'>
            <img src="../static/images/icons/blog3.svg" alt="" />
                <h2>Descubra o glamour em cada passo.</h2>
                <p>Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨</p>
                <a href="/home">Saiba mais!</a>
            </div>
            </div>
        </div>
    );
};

export default Blog;