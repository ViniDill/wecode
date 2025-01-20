import React, { useEffect, useState } from "react";
import LaunchesCard from "../LaunchesCard";
import "../../Styles/Components/launches.scss"
import { getProducts } from "../../utils";

const Launches = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const getFileName = (filePath) => {
    return filePath.split("/").pop().split(".")[0];
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
            />
        ))}
        </div>
    </div>
  );
};

export default Launches;
