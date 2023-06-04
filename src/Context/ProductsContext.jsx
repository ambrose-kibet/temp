import { useReducer, useEffect, useContext, createContext } from 'react';
import { products_url } from '../utils';
import reducer from '../Reducers/products_reducer';
import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_SUCCESS,
} from '../Actions';
import axios from 'axios';
const Products = createContext();
const intialState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featured_products: [],
  singleproducts_loading: false,
  singleproducts_error: false,
  single_product: {},
};
const ProductsContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
  const openSidebar = () => {
    dispatch({ type: OPEN_SIDEBAR });
  };
  const getProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const resp = await axios(url);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: resp.data });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };
  const getSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCTS_BEGIN });
    try {
      const resp = await axios(url);
      dispatch({ type: GET_SINGLE_PRODUCTS_SUCCESS, payload: resp.data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCTS_ERROR });
    }
  };
  useEffect(() => {
    getProducts(products_url);
  }, []);

  return (
    <Products.Provider
      value={{ openSidebar, closeSidebar, ...state, getSingleProduct }}
    >
      {children}
    </Products.Provider>
  );
};
const useProductsContext = () => {
  return useContext(Products);
};
export { useProductsContext };
export default ProductsContext;
