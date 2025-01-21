import React, { useEffect, useState } from "react";
import LaunchesCard from "../LaunchesCard";
import AddToCartDialog from "../AddToCartDialog";
import "../../Styles/Components/launches.scss";
import { getProducts } from "../../utils";

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

    // Configurar os tamanhos indisponíveis específicos para o produto
    const sizesUnavailableForProduct = product.unavailableSizes || [];
    setUnavailableSizes(sizesUnavailableForProduct);
  };

  return (
    <div className="launches">
      <h2>Lançamentos</h2>
      <div className="launches-container">
        {products.map((product) => (
          <LaunchesCard
            key={product.id}
            image={`${getFileName(product.image)}.png`}
            description={product.name}
            price={product.price.amount}
            discount={product.price.isDiscount}
            onAddClick={() => handleAddClick(product)} // Passa o produto selecionado
          />
        ))}
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
