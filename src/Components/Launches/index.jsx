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
import Cart from "../Cart";import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close'; 

register();

const Launches = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [unavailableSizes, setUnavailableSizes] = useState([]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
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

  const openCartDrawer = () => {
    setIsCartDrawerOpen(true);
  };

  return (
    <>
      <div className="launches">
        <h2>Lançamentos</h2>
        <div className="launches-container">
          <Swiper
            className="launches-swiper"
            slidesPerView={5}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <LaunchesCard
                  className='launches-card'
                  image={`${getFileName(product.image)}.png`}
                  description={product.name}
                  price={product.price.amount}
                  discount={product.price.isDiscount}
                  onAddClick={() => handleAddClick(product)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {selectedProduct && (
          <AddToCartDialog
            product={selectedProduct}
            unavailableSizes={unavailableSizes}
            onClose={() => setSelectedProduct(null)}
            image={`${getFileName(selectedProduct.image)}.png`}
            openCartDrawer={openCartDrawer}
          />
        )}
      </div>
      <Drawer
        anchor="right"
        open={isCartDrawerOpen}
        onClose={() => setIsCartDrawerOpen(false)}
      >
        <div>
          <button
            onClick={() => setIsCartDrawerOpen(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer'
            }}
          >
            <CloseIcon />
          </button>
          <Cart onContinueShopping={() => setIsCartDrawerOpen(false)} />
        </div>
      </Drawer>
    </>
  );
};

export default Launches;
