import { useReducer, useContext, useEffect, createContext } from 'react';
import {
  UPDATE_FILTERS,
  GET_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
} from '../Actions';
import reducer from '../Reducers/filter_reducer';

import { useProductsContext } from './ProductsContext';

const Filter = createContext();
const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'lowest',
  filters: {
    color: 'all',
    text: '',
    company: 'all',
    category: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();
  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const handleSort = (e) => {
    dispatch({ type: UPDATE_SORT, payload: e.target.value });
  };
  const updateFilter = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent.toLowerCase();
    }
    if (name === 'color') {
      value = e.target.dataset.id;
    }
    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  useEffect(() => {
    dispatch({
      type: GET_PRODUCTS,
      payload: products,
    });
  }, [products]);
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
  }, [state.filters]);

  const cLearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <Filter.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        handleSort,
        updateFilter,
        cLearFilters,
      }}
    >
      {children}
    </Filter.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(Filter);
};
export default FilterContext;
