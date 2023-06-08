import React from "react";
import { useLocalStorage } from "../../hooks/useStorage";
import { useStore } from "../../lib/storeData";
import { getInitialState } from "./checkoutUtils";
import { Context } from "./context";
import { reducer } from "./reducer/reducer";
import type { CartStorageState } from "./types";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { currency } = useStore();
  const initialState = getInitialState(currency);
  const [defaultState, updateStorage] = useLocalStorage<CartStorageState>(
    "cart-state",
    initialState
  );

  const value = React.useReducer(reducer(initialState), defaultState!);

  const items = value?.[0]?.items;
  const checkout = value?.[0]?.checkout;

  React.useEffect(() => {
    updateStorage({ items, checkout });
  }, [items, checkout, updateStorage]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
