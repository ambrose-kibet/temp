import { createContext } from 'react';
import reducer from '../Reducers/cart_reducer';
import { useContext, useEffect, useReducer } from 'react';
import {
  COUNT_CART_TOTALS,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  ADD_TO_CART,
} from '../Actions';
const getItems = () => {
  let items = localStorage.getItem('cart');
  if (items) {
    items = JSON.parse(localStorage.getItem('cart'));
  } else {
    items = [];
  }

  return items;
};
const Cart = createContext();
const initialState = {
  cart: getItems(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 775,
};
const CartCOntext = ({ children }) => {
  const addtoCart = (id, color, amount, product) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleAmount = (option, id, stock) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { option, id, stock } });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const storeCart = () => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  };

  useEffect(() => {
    storeCart();
    dispatch({ type: COUNT_CART_TOTALS });
    // eslint-disable-next-line
  }, [state.cart]);

  return (
    <Cart.Provider
      value={{ ...state, addtoCart, toggleAmount, removeItem, clearCart }}
    >
      {children}
    </Cart.Provider>
  );
};
export const useCartContext = () => useContext(Cart);

export default CartCOntext;
