import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../Context/CartCOntext';

const SucessPage = () => {
  const { clearCart } = useCartContext();
  const navigate = useNavigate();
  const isSuccess =
    new URLSearchParams(window.location.search).get('redirect_status') || null;

  useEffect(() => {
    if (isSuccess && isSuccess === 'succeeded') {
      clearCart();
    }
    const timeout = setTimeout(() => {
      navigate('/products');
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [isSuccess]);

  return (
    <main className="main">
      {isSuccess && (
        <div>
          <h3 className="text-center">PAYMENT WAS SUCCESSFUL</h3>
          <h5 className="text-center">
            Redirecting to the products page Shortly
          </h5>
        </div>
      )}
    </main>
  );
};
export default SucessPage;
