import React from 'react';
import CategoryCard from '../CategoryCard';
import '../../Styles/Components/categories.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";
import 'swiper/scss';
import 'swiper/scss/pagination';

register();

const Categories = () => {
    return (
        <>
            <div className="categories">
                <h2>Categorias</h2>
                <div className="categories-container">
                    <CategoryCard image={'./static/images/icons/image-1.svg'} description={'Botas'} />
                    <CategoryCard image={'./static/images/icons/image-2.svg'} description={'Scarpins'} />
                    <CategoryCard image={'./static/images/icons/image-3.svg'} description={'Sapatilhas'} />
                    <CategoryCard image={'./static/images/icons/image-4.svg'} description={'Sandálias'} />
                </div>
            </div>

            <div className="categories-mobile">
                <h2>Categorias</h2>
                <Swiper
                    slidesPerView={2.5}
                    autoplay={{ delay: 3000 }}
                >
                    <SwiperSlide>
                        <CategoryCard image={'./static/images/icons-mobile/banner-botas.svg'} description={'Botas'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard image={'./static/images/icons-mobile/banner-scarpins.svg'} description={'Scarpins'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard image={'./static/images/icons-mobile/banner-sapatilhas.svg'} description={'Sapatilhas'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CategoryCard image={'./static/images/icons-mobile/banner-sandalias.svg'} description={'Sandálias'} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Categories;
