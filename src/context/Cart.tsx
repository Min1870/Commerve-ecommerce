import React, { useEffect, useContext, useReducer, createContext } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";
import { CartState } from "../interface";

const initialState: CartState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 534,
};

type CartContentState = CartState & {
  addToCart: (id: string, color: string, amount: number, product: any) => void;
};

const CartContext = createContext<CartContentState>({} as CartContentState);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (
    id: string,
    color: string,
    amount: number,
    product: any
  ) => {
    dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
