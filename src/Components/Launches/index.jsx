import React, { useEffect, useState } from "react";
import LaunchesCard from "../LaunchesCard";
import AddToCartDialog from "../AddToCartDialog";
import "../../Styles/Components/launches.scss";
import { getProducts } from "../../utils";
import "../../Styles/Components/principalBanner.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";
import "swiper/scss/pagination"
import "swiper/scss/navigation"
import 'swiper/scss';

register();

const Launches = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [unavailableSizes, setUnavailableSizes] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const getFileName = (filePath) => {
    return filePath.split("/").pop().split(".")[0];
  };

  const handleAddClick = (product) => {
    setSelectedProduct(product);
    const sizesUnavailableForProduct = product.unavailableSizes || [];
    setUnavailableSizes(sizesUnavailableForProduct);
  };

  return (
    <div className="launches">
      <h2>Lançamentos</h2>
      <div className="launches-container">
        <Swiper
          slidesPerView={5}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <LaunchesCard
                image={`${getFileName(product.image)}.png`}
                description={product.name}
                price={product.price.amount}
                discount={product.price.isDiscount}
                onAddClick={() => handleAddClick(product)} // Passa o produto selecionado
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProduct && (
        <AddToCartDialog
          product={selectedProduct}
          unavailableSizes={unavailableSizes} // Passa os tamanhos indisponíveis
          onClose={() => setSelectedProduct(null)}
          image={`${getFileName(selectedProduct.image)}.png`}
        />
      )}
    </div>
  );
};

export default Launches;
