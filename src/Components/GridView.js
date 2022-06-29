import React from "react";
import { useFilterContext } from "../Context/FilterContext";
import FeaturedProduct from "./FeaturedProduct";

const GridView = () => {
  const { filtered_products } = useFilterContext();
  return (
    <section className="grid-products">
      {filtered_products.map((product) => {
        return <FeaturedProduct product={product} key={product.id} />;
      })}
    </section>
  );
};

export default GridView;
