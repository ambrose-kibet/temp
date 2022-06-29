import React from "react";
import { useProductsContext } from "../Context/ProductsContext";
import Errorcomponent from "./Errorcomponent";
import FeaturedProduct from "./FeaturedProduct";

const FeaturedProducts = () => {
  const { productsLoading, productsError, featured_products } =
    useProductsContext();
  if (productsLoading) {
    return <h3 className="loading">Loading...</h3>;
  }
  if (productsError) {
    return <Errorcomponent />;
  }
  return (
    <div className="featured-products">
      {featured_products.map((product) => (
        <FeaturedProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
