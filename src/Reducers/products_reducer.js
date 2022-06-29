import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCTS_SUCCESS,
} from "../Actions";
const products_reducer = (state, action) => {
  if (action.type === OPEN_SIDEBAR) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === CLOSE_SIDEBAR) {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, productsLoading: true, productsError: false };
  }
  if (action.type === GET_PRODUCTS_SUCCESS) {
    let all_products = action.payload;
    let featured_products = all_products
      .filter((product) => product.featured)
      .slice(0, 3);
    return {
      ...state,
      productsLoading: false,
      products: all_products,
      featured_products,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, productsLoading: false, productsError: true };
  }
  if (action.type === GET_SINGLE_PRODUCTS_BEGIN) {
    return {
      ...state,
      singleproducts_loading: true,
      singleproducts_error: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCTS_SUCCESS) {
    return {
      ...state,
      single_product: action.payload,
      singleproducts_loading: false,
    };
  }
  if (action.type === GET_SINGLE_PRODUCTS_ERROR) {
    return {
      ...state,
      singleproducts_loading: false,
      singleproducts_error: true,
    };
  }
  throw new Error(`No matching  action '${action.type} action type`);
};

export default products_reducer;
