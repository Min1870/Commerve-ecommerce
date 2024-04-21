import { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./Products";
import { FilterState } from "../interface";

const initialState: FilterState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

type FilterContextState = FilterState & {
  setGridView: () => void;
  setListView: () => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilters: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | any
  ) => void;
  clearFilters: () => void;
};

const FilterContext = createContext<FilterContextState>(
  {} as FilterContextState
);

interface FilterProviderProps {
  children: React.ReactNode;
}

export const FilterProvider = ({ children }: FilterProviderProps) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    text,
    price,
    minPrice,
    maxPrice,
    color,
    company,
    shipping,
    category,
  } = state.filters;

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [
    products,
    state.sort,
    text,
    price,
    minPrice,
    maxPrice,
    color,
    company,
    shipping,
    category,
  ]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };

  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilters = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> | any
  ) => {
    const name = e.target.name;
    let value: string | number | boolean = e.target.value;
    if (name === "category") {
      value = e.target.textContent!;
    }
    if (name === "color") {
      value = e.target.dataset.color!;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
