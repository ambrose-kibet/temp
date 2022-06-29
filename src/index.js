import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductsContext from "./Context/ProductsContext";
import FilterContext from "./Context/FilterContext";
import CartContext from "./Context/CartCOntext";
import { Auth0Provider } from "@auth0/auth0-react";
import UserContext from "./Context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
