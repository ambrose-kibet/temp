import {
  UPDATE_FILTERS,
  GET_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from "../Actions";
const filter_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, price: maxPrice, max_price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    let criteria = action.payload;
    let tempProducts = state.filtered_products;
    if (criteria === "lowest") {
      tempProducts = state.filtered_products.sort((a, b) => a.price - b.price);
    }
    if (criteria === "highest") {
      tempProducts = state.filtered_products.sort((a, b) => b.price - a.price);
    }
    if (criteria === "a-z") {
      tempProducts = state.filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (criteria === "z-a") {
      tempProducts = state.filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }

    return { ...state, filtered_products: tempProducts, sort: criteria };
  }
  if (action.type === UPDATE_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.name]: action.payload.value,
      },
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        color: "all",
        text: "",
        company: "all",
        category: "all",

        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  if (action.type === FILTER_PRODUCTS) {
    let tempProducts = [...state.all_products];

    const {
      color,
      text,
      company,
      category,

      price,
      shipping,
    } = state.filters;

    if (text) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
    }
    if (category) {
      tempProducts = tempProducts.filter((product) => {
        if (category === "all") return product;
        return product.category === category;
      });
    }
    if (company) {
      tempProducts = tempProducts.filter((product) => {
        if (company === "all") return product;
        return product.company === company;
      });
    }
    if (color) {
      tempProducts = tempProducts.filter((product) => {
        if (color === "all") return product;
        return product.colors.includes(color);
      });
    }
    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === shipping
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  throw new Error(`no matching '${action.type}' action type`);
};

export default filter_reducer;
