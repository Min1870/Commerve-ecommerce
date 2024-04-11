import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url } from "../utils/constants.tsx";
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { ProductsState } from "../interface/index.ts";

const initialState: ProductsState = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: true,
  singleProductError: false,
  singleProduct: {
    id: "",
    name: "",
    price: 0,
    images: [],
    colors: [],
    company: "",
    description: "",
    shipping: false,
    featured: false,
    stock: 0,
    stars: 0,
    reviews: 0,
    sku: "",
  },
};

type ProductsContextState = ProductsState & {
  fetchSingleProduct: (url: string) => void;
};
const ProductsContext = createContext<ProductsContextState>(
  {} as ProductsContextState,
);

interface ProductsProviderProps {
  children: React.ReactNode;
}

export const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url: string) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url: string) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
