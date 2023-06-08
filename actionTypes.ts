import { createAction } from "@reduxjs/toolkit";
import type {
  CheckoutCoupon,
  CheckoutInformation,
  CheckoutShipping,
  CartItemInput,
  UpdateCartItemQuantityInput,
  CartStorageState,
  CheckoutReceipt,
} from "../types";

/**
 * CART ACTIONS
 */
export const updateQuantity = createAction<
  UpdateCartItemQuantityInput,
  "UPDATE_ITEM_QUANTITY"
>("UPDATE_ITEM_QUANTITY");

export const removeItem = createAction<string, "REMOVE_ITEM">("REMOVE_ITEM");

export const toggleSideCart = createAction<void, "TOGGLE_SIDE_CART">(
  "TOGGLE_SIDE_CART"
);

export const closeSideCart = createAction<void, "CLOSE_SIDE_CART">(
  "CLOSE_SIDE_CART"
);

export const addToCart = createAction<CartItemInput, "ADD_TO_CART">(
  "ADD_TO_CART"
);

export const resetCart = createAction<void, "RESET_STORE_STATES">(
  "RESET_STORE_STATES"
);

export const updateCartItemsStatus = createAction<
  CartStorageState,
  "UPDATE_CART"
>("UPDATE_CART");

/**
 * CHECKOUT ACTIONS
 */

export const updateInformationAction = createAction<
  { information: CheckoutInformation },
  "UPDATE_INFORMATION"
>("UPDATE_INFORMATION");

export const updateShippingAction = createAction<
  { shippingInfo: CheckoutShipping },
  "UPDATE_SHIPPING"
>("UPDATE_SHIPPING");

export const updateCouponAction = createAction<
  { coupon: CheckoutCoupon },
  "UPDATE_COUPON"
>("UPDATE_COUPON");

export const updateItemsAction = createAction<
  { items: CartItemInput[] },
  "UPDATE_ITEMS"
>("UPDATE_ITEMS");

export const updateReceiptAction = createAction<
  { receipt: Partial<CheckoutReceipt> },
  "UPDATE_RECEIPT"
>("UPDATE_RECEIPT");

export const endCheckoutAction = createAction<void, "END_CHECKOUT">(
  "END_CHECKOUT"
);
