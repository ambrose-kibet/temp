import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import './App.css';
import { formatPrice } from '../utils';
import { useCartContext } from '../Context/CartCOntext';
import { useUserContext } from '../Context/UserContext';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(import.meta.env.VITE_APP_PUBLIC_KEY);
const StripeCheckout = () => {
  const [clientSecret, setClientSecret] = useState('');
  const { cart, total_amount, shipping_fee } = useCartContext();
  const { myUser } = useUserContext();
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cart, total_amount, shipping_fee }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="pay-container">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <h5>
            Hello {myUser?.user?.name} your total is
            {formatPrice(total_amount + shipping_fee)}
          </h5>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};
export default StripeCheckout;
