import { createReducer } from "@reduxjs/toolkit";
import type { CartStorageState } from "../types";
import {
  updateQuantity,
  removeItem,
  toggleSideCart,
  addToCart,
  resetCart,
  closeSideCart,
  updateCartItemsStatus,
  updateCouponAction,
  updateInformationAction,
  updateShippingAction,
  updateItemsAction,
  endCheckoutAction,
  updateReceiptAction,
} from "./actionTypes";
import {
  addNewItem,
  checkAvailableQuantities,
  fireAddToCartEvent,
  isAvailableToAdd,
} from "./utils";

export const reducer = (initialState: CartStorageState) =>
  createReducer(initialState, (builder) =>
    builder
      /**
       * CART REDUCERS
       */
      .addCase(
        updateQuantity,
        (state, { payload: { itemId, newQuantity } }) => {
          const items = state.items.map((item) => {
            if (item.variantId !== itemId || newQuantity === 0) return item;
            return {
              ...item,
              quantity: newQuantity,
            };
          });

          const isAvailable = checkAvailableQuantities(items);
          if (!isAvailable) return state;
          return {
            ...state,
            items,
          };
        }
      )
      .addCase(removeItem, (state, { payload: variantId }) => {
        const items = state.items.filter(
          (item) => item.variantId !== variantId
        );
        return {
          ...state,
          items,
        };
      })
      .addCase(toggleSideCart, (state) => {
        return {
          ...state,
          isSideCart: !state.isSideCart,
        };
      })
      .addCase(closeSideCart, (state) => {
        return {
          ...state,
          isSideCart: false,
        };
      })
      .addCase(addToCart, (state, { payload: newItem }) => {
        const { isAvailable } = isAvailableToAdd(
          state.items,
          newItem,
          newItem.buildData
        );
        if (!isAvailable) return state;

        const items = addNewItem(state.items, newItem);
        fireAddToCartEvent(newItem, items);
        return {
          ...state,
          items,
        };
      })
      .addCase(updateCartItemsStatus, (state, { payload: newState }) => {
        return newState;
      })
      .addCase(resetCart, () => {
        return initialState;
      })
      /**
       * CHECKOUT REDUCERS
       */
      .addCase(updateInformationAction, (state, { payload }) => {
        const { information } = payload;
        return {
          ...state,
          checkout: {
            ...state?.checkout,
            information: {
              ...state?.checkout?.information,
              ...information,
            },
          },
        };
      })
      .addCase(updateShippingAction, (state, { payload }) => {
        const { shippingInfo } = payload;
        return {
          ...state,
          checkout: {
            ...state?.checkout,
            shippingInfo,
          },
        };
      })
      .addCase(updateCouponAction, (state, { payload }) => {
        const { coupon } = payload;
        return {
          ...state,
          checkout: {
            ...state?.checkout,
            coupon,
          },
        };
      })
      .addCase(updateItemsAction, (state, { payload }) => {
        const { items } = payload;
        return {
          ...state,
          items,
        };
      })
      .addCase(updateReceiptAction, (state, { payload }) => {
        const { receipt } = payload;
        return {
          ...state,
          checkout: {
            ...state?.checkout,
            receipt: {
              ...state?.checkout?.receipt,
              ...receipt,
            },
          },
        };
      })
      .addCase(endCheckoutAction, (state) => {
        return {
          ...state,
          checkout: { ...state.checkout, status: "Done" },
        };
      })
      .addDefaultCase((state) => state)
  );
