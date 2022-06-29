import React from "react";
import Stars from "./Stars";
import { formatPrice } from "../utils";
import AddToCart from "./AddToCart";
const ProductInfo = ({ product }) => {
  const { name, price, reviews, stars, id, stock, description, company } =
    product;

  return (
    <article className="product-info">
      <h4>{name}</h4>
      <Stars stars={stars} reviews={reviews} />
      <p className="price">{formatPrice(price)}</p>
      <p>{description}</p>
      <p>
        <span>Available:</span> {stock > 0 ? "In Stock " : "Out of Stock"}
      </p>
      <p>
        <span>SKU:</span> {id}
      </p>
      <p>
        <span>Brand:</span> {company}
      </p>
      <hr />
      {stock > 0 && <AddToCart product={product} />}
    </article>
  );
};

export default ProductInfo;
