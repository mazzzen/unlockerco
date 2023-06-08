import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import * as React from "react";
import {
  CheckVariantsStatusDocument,
  CheckVariantsStatusQuery,
  CheckVariantsStatusQueryVariables,
  ProductStatus,
  ProductVariantStatus,
} from "../../generated/graphql";
import { useStore } from "../../lib/storeData";
import { getDiscountedCartItems } from "../../shared/utils/buyXGetY";
import type { CartBuildData } from "../../templates/types";
import { getActiveStepInfo, getInitialState } from "./checkoutUtils";
import { Context } from "./context";
import {
  addToCart as addToCartAction,
  removeItem as removeItemAction,
  toggleSideCart as toggleSideCartAction,
  updateQuantity as updateQuantityAction,
  closeSideCart as closeSideCartAction,
  updateCartItemsStatus as updateCartItemsStatusAction,
  resetCart,
} from "./reducer/actionTypes";
import { applyDiscountsOnCart } from "./reducer/utils";
import type {
  CartItem,
  CartItemInput,
  UpdateCartItemQuantityInput,
} from "./types";

export function useCart() {
  const context = React.useContext(Context);
  if (!context) {
    throw new Error("useCart should be in CartProvider");
  }
  const { storeId, currency, automaticDiscounts } = useStore();
  const initialState = getInitialState(currency);
  const { query } = useApolloClient();
  const [cart, dispatch] = context;
  const addToCart = (payload: CartItemInput) => {
    dispatch(addToCartAction(payload));
  };
  const removeCartItem = (variantId: string) => {
    dispatch(removeItemAction(variantId));
  };
  const toggleSideCart = () => {
    dispatch(toggleSideCartAction());
  };
  const closeSideCart = () => {
    dispatch(closeSideCartAction());
  };
  const updateQuantity = (payload: UpdateCartItemQuantityInput) => {
    dispatch(updateQuantityAction(payload));
  };
  const updateCartItemsStatus = async () => {
    try {
      const variantIds = cart?.items?.reduce(
        (acc, curr) => [...acc, ...getItemsIds(curr)],
        []
      );

      if (!variantIds?.length) return;

      const { data } = await query<
        CheckVariantsStatusQuery,
        CheckVariantsStatusQueryVariables
      >({
        query: CheckVariantsStatusDocument,
        variables: { storeId, variantIds },
      });

      const updatedItems = cart?.items?.map((item) => ({
        ...item,
        notAvailable: !isItemAvailable(item, data.checkVariantsStatus),
      }));

      const discountedItems = getDiscountedCartItems(
        updatedItems,
        automaticDiscounts
      );

      dispatch(
        updateCartItemsStatusAction({ ...cart, items: discountedItems })
      );
    } catch (error) {}
  };

  const router = useRouter();
  React.useEffect(() => {
    if (
      cart?.checkout?.status === "Done" &&
      getActiveStepInfo(router?.pathname).name === "Other"
    ) {
      dispatch(resetCart());
    }
  }, [cart?.checkout?.status, dispatch, router?.pathname]);

  const [isCSR, setIsCSR] = React.useState(false);
  React.useEffect(() => {
    setIsCSR(true);
  }, []);

  const discountedCart = applyDiscountsOnCart(cart, automaticDiscounts);

  return {
    cart: isCSR ? discountedCart : initialState,
    isReady: isCSR,
    addToCart,
    removeCartItem,
    updateQuantity,
    toggleSideCart,
    closeSideCart,
    updateCartItemsStatus,
  };
}

/**
 *
 * Helpers
 *
 */

function getBuildSelectedItemsIds(build: CartBuildData) {
  if (!build) return [];
  const selectedItemsIds: string[] = [];
  build.categories.forEach((category) => {
    category.selectedVariants.forEach((variant) => {
      selectedItemsIds.push(variant.id);
    });
  });

  return selectedItemsIds;
}

function getItemsIds(item: CartItemInput) {
  if (!item?.buildData) {
    return [item?.variantId];
  }

  return getBuildSelectedItemsIds(item?.buildData);
}

function isSimpleItemAvailable(
  cartItem: Partial<CartItem>,
  updatedItems: (ProductVariantStatus | null)[]
) {
  const updatedItem = updatedItems?.find(
    (item) => item?.id === cartItem?.variantId
  );
  if (!updatedItem) {
    return false;
  }

  const status =
    !!updatedItem?.id && updatedItem?.status !== ProductStatus.Draft;
  const isQuantityAvailable = updatedItem?.trackQuantity
    ? cartItem?.quantity! < updatedItem?.quantity!
    : true;

  return status && isQuantityAvailable;
}

function isCustomItemAvailable(
  cartItem: CartItemInput,
  updatedItems: (ProductVariantStatus | null)[]
) {
  let isAvailable = true;

  for (let i = 0; i < cartItem?.buildData?.categories?.length!; i = i + 1) {
    const selectedVariants =
      cartItem?.buildData?.categories[i]?.selectedVariants;
    for (let j = 0; j < selectedVariants?.length!; j = j + 1) {
      const variant = selectedVariants?.[j];
      isAvailable = isSimpleItemAvailable(
        { variantId: variant?.id, quantity: variant?.quantity },
        updatedItems
      );
      if (!isAvailable) break;
    }
    if (!isAvailable) break;
  }

  return isAvailable;
}

function isItemAvailable(
  cartItem: CartItemInput,
  updatedItems: (ProductVariantStatus | null)[]
) {
  if (cartItem?.buildData) {
    return isCustomItemAvailable(cartItem, updatedItems);
  }
  return isSimpleItemAvailable(cartItem, updatedItems);
}
