import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ProductsContext from './Context/ProductsContext';
import FilterContext from './Context/FilterContext';
import CartContext from './Context/CartCOntext';
import { Auth0Provider } from '@auth0/auth0-react';
import UserContext from './Context/UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_APP_DOMAIN}
      clientId={import.meta.env.VITE_APP_CLIENT_ID}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserContext>
        <CartContext>
          <ProductsContext>
            <FilterContext>
              <App />
            </FilterContext>
          </ProductsContext>
        </CartContext>
      </UserContext>
    </Auth0Provider>
  </React.StrictMode>
);
