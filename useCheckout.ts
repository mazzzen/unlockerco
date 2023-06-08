import { useStore } from "../../lib/storeData";
import { useCallback, useContext } from "react";
import { Context } from "./context";
import {
  CheckoutContext,
  CheckoutCoupon,
  CheckoutInformation,
  CheckoutMeta,
  CheckoutShipping,
  CartItemInput,
  CheckoutReceipt,
} from "./types";
import {
  endCheckoutAction,
  updateCouponAction,
  updateInformationAction,
  updateItemsAction,
  updateReceiptAction,
  updateShippingAction,
} from "./reducer/actionTypes";
import {
  getDiscountsData,
  calculateReceipt,
  findShippingDiscount,
  getActiveStepInfo,
} from "./checkoutUtils";
import { useRouter } from "../../lib/i18n/useRouter";
import { useCart } from "./use-cart";

export type UseCheckoutReturnType = {
  checkout: CheckoutContext;
  updateInformation: (information: CheckoutInformation) => void;
  updateShipping: (shippingInfo: CheckoutShipping) => void;
  updateCoupon: (coupon: CheckoutCoupon) => void;
  endCheckout: () => void;
  updateItems: (items: CartItemInput[]) => void;
  updateReceipt: (receipt: Partial<CheckoutReceipt>) => void;
};

export default function useCheckout(): UseCheckoutReturnType {
  const context = useContext(Context);
  const { cart } = useCart();
  if (!context) {
    throw new Error("useCheckout should be in CartProvider");
  }
  const router = useRouter();
  const dispatch = context[1];
  const { checkout, items, subtotal } = cart;
  const { automaticDiscounts, tax } = useStore();

  const updateInformation = useCallback(
    (information: CheckoutInformation) => {
      dispatch(updateInformationAction({ information }));
    },
    [dispatch]
  );
  const updateShipping = useCallback(
    (shippingInfo: CheckoutShipping) => {
      dispatch(updateShippingAction({ shippingInfo }));
    },
    [dispatch]
  );
  const updateCoupon = useCallback(
    (coupon: CheckoutCoupon) => {
      dispatch(updateCouponAction({ coupon }));
    },
    [dispatch]
  );
  const updateItems = useCallback(
    (items: CartItemInput[]) => {
      dispatch(updateItemsAction({ items }));
    },
    [dispatch]
  );
  const updateReceipt = useCallback(
    (receipt: Partial<CheckoutReceipt>) => {
      dispatch(updateReceiptAction({ receipt }));
    },
    [dispatch]
  );

  const endCheckout = useCallback(() => {
    dispatch(endCheckoutAction());
  }, [dispatch]);

  const { discountAmount, isCustomDiscount, isBuyXGetYDiscount } =
    getDiscountsData(cart?.items);

  const shippingDiscount =
    findShippingDiscount(automaticDiscounts, subtotal) || null;

  const receipt = calculateReceipt(
    subtotal,
    checkout,
    discountAmount,
    shippingDiscount,
    tax
  );

  const orderId = router?.query?.orderId as string;

  const meta: CheckoutMeta = {
    isFreeShippingDiscount:
      receipt?.shippingDiscount?.amount === receipt?.shipping?.amount &&
      receipt?.shipping?.amount !== 0,
    isAllItemsAvailable: !items?.some((item) => item?.notAvailable),
    isShippingDiscount: receipt?.shippingDiscount?.amount! > 0,
    isBuyXGetYDiscount,
    isCustomDiscount,
    isUsingCoupon: receipt?.couponDiscount?.amount > 0,
    isInformationDone: !!checkout?.information?.phone,
    isShippingDone: !!checkout?.shippingInfo?.name,
    activeStepInfo: getActiveStepInfo(router?.pathname),
  };

  const checkoutContext: CheckoutContext = {
    ...checkout,
    meta,
    shippingDiscount,
    receipt,
    items,
    tax,
    orderId,
  };

  return {
    checkout: checkoutContext,
    updateInformation,
    updateShipping,
    updateCoupon,
    endCheckout,
    updateItems,
    updateReceipt,
  };
}

// use this if the information is being updated from the backend
/**
updateInformation({
  address: createdOrder?.shippingAddress?.addressLine1!,
  apartment: createdOrder?.shippingAddress?.addressLine2!,
  email: createdOrder?.customer?.email!,
  phone: { number: { typedNumber: createdOrder?.customer?.phone! } },
  secondPhone: {
    number: { typedNumber: createdOrder?.shippingAddress?.phone! },
  },
  name: createdOrder?.customer?.name!,
  isSubscribed: createdOrder?.customer?.isSubscribedToNewsLetter,
  notes: createdOrder?.notes,
  postalCode: createdOrder?.shippingAddress?.postalCode,
});
 */
