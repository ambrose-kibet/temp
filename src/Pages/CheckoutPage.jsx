import { Link } from 'react-router-dom';
import HeroComponent from '../Components/HeroComponent';
import StripeCheckout from '../Components/StripeCheckout';
import { useCartContext } from '../Context/CartCOntext';

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <main className="main">
      <HeroComponent title={`Checkout`} />
      {cart.length < 1 ? (
        <div className="cart-empty">
          <h2>Your Cart Is Empty</h2>
          <Link to="/products" className="btn-primary error-btn">
            Fill It
          </Link>
        </div>
      ) : (
        <StripeCheckout />
      )}
    </main>
  );
};

export default CheckoutPage;
