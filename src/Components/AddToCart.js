import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartCOntext";
const AddToCart = ({ product }) => {
  const { colors, stock, id } = product;
  const { addtoCart } = useCartContext();
  const [color, setcolor] = useState(colors[0]);
  const [amount, setamount] = useState(1);
  const toggleAmount = (info) => {
    if (info === "inc") {
      setamount((oldAmount) => {
        oldAmount += 1;
        if (oldAmount > stock) {
          oldAmount = stock;
        }
        return oldAmount;
      });
    } else {
      setamount((oldAmount) => {
        oldAmount -= 1;
        if (oldAmount < 1) {
          oldAmount = 1;
        }
        return oldAmount;
      });
    }
  };
  return (
    <div className="add-container">
      <div className="colors-container">
        <span>Colors: </span>
        {colors.map((item, index) => (
          <button
            key={index}
            className={color === item ? "color-btn active-color" : "color-btn"}
            style={{ background: `${item}` }}
            onClick={() => setcolor(colors[index])}
          >
            {color === item ? <FaCheck /> : null}
          </button>
        ))}
      </div>
      <div className="amount-container">
        <button onClick={() => toggleAmount("dec")}>
          <FaMinus />
        </button>
        <span>{amount}</span>
        <button onClick={() => toggleAmount("inc")}>
          <FaPlus />
        </button>
      </div>
      <Link
        to="/cart"
        className="btn-primary"
        onClick={() => {
          addtoCart(id, color, amount, product);
        }}
      >
        Add to Cart
      </Link>
    </div>
  );
};

export default AddToCart;
