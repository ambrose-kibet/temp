import React from "react";
import { single_product_url as url } from "../utils";
import { useEffect } from "react";
import { useProductsContext } from "../Context/ProductsContext";
import HeroComponent from "../Components/HeroComponent";
import { NavLink, useParams } from "react-router-dom";
import Errorcomponent from "../Components/Errorcomponent";
import ProductImages from "../Components/ProductImages";
import ProductInfo from "../Components/ProductInfo";

const SinglePage = () => {
  const { id } = useParams();
  const {
    getSingleProduct,
    singleproducts_loading,
    singleproducts_error,
    single_product,
  } = useProductsContext();
  useEffect(() => {
    getSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, []);
  if (singleproducts_loading) {
    return (
      <main className="main">
        <h3 className="loading">loading..</h3>
      </main>
    );
  }
  if (singleproducts_error) {
    return (
      <main className="main">
        <Errorcomponent />
      </main>
    );
  }
  const { name, images } = single_product;

  return (
    <main className="main">
      <HeroComponent title={`products/${name}`} />
      <NavLink to={"/products"} className="btn-primary">
        Back to products
      </NavLink>
      <div className="single-product-container">
        <ProductImages images={images} />
        <ProductInfo product={single_product} />
      </div>
    </main>
  );
};

export default SinglePage;
