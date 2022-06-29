import React from "react";
import { useCartContext } from "../Context/CartCOntext";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { formatPrice } from "../utils";
import { useUserContext } from "../Context/UserContext";
const CartPage = () => {
  const { cart, clearCart, shipping_fee, total_amount } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  if (cart.length < 1) {
    return (
      <main className="main">
        <div className="cart-empty">
          <h2>Your Cart Is Empty</h2>
          <Link to="/products" className="btn-primary error-btn">
            Fill It
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="main">
      <section className="cart-container">
        <article className="cart-titles">
          <h4>item</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>subtotal</h4>
        </article>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
        <div className="nav-buttons">
          <Link to="/products" className="btn-primary">
            Continue shopping
          </Link>
          <button className="btn btn-danger" onClick={clearCart}>
            Clear shopping cart
          </button>
        </div>
        <article className="grand">
          <div className="grand-container">
            <h3>Subtotal: </h3>
            <h3 className="price">{formatPrice(total_amount)}</h3>
            <p>shiping fee :</p>
            <p className="price">{formatPrice(shipping_fee)}</p>
            <h2>order total</h2>{" "}
            <h2>{formatPrice(total_amount + shipping_fee)}</h2>
          </div>
          {!myUser.isAuthenticated ? (
            <button
              className="btn last-btn"
              onClick={() => loginWithRedirect()}
            >
              Log in and checkout
            </button>
          ) : (
            <Link to={"/checkout"} className="btn last-btn">
              checkout
            </Link>
          )}

          <hr />
        </article>
      </section>
    </main>
  );
};

export default CartPage;
