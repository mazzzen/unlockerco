import { IntlShape } from "react-intl";
import {
  Money,
  DiscountAppliedOnType,
  DiscountStatus,
  TaxFragment,
  CurrencyCode,
  AutomaticDiscountFragment,
} from "../../generated/graphql";
import {
  CartItem,
  CartState,
  Checkout,
  CheckoutReceipt,
  CheckoutStepInfo,
} from "./types";

export function getInitialState(currency: CurrencyCode): CartState {
  const ZeroMoney: Money = { amount: 0, currencyCode: currency };
  return {
    isSideCart: false,
    items: [],
    subtotal: ZeroMoney,
    checkout: {
      status: "Active",
      coupon: { code: "", percentageOff: 0 },
      receipt: {
        automaticDiscount: ZeroMoney,
        couponDiscount: ZeroMoney,
        shipping: ZeroMoney,
        shippingDiscount: ZeroMoney,
        subtotal: ZeroMoney,
        tax: ZeroMoney,
        total: ZeroMoney,
      },
    },
  };
}

export function findShippingDiscount(
  discountsArray: (AutomaticDiscountFragment | null)[],
  subtotal: Money | null
) {
  return discountsArray?.find(
    (discount) =>
      discount?.appliedOn === DiscountAppliedOnType.Shipping &&
      discount?.status === DiscountStatus.Active &&
      subtotal?.amount &&
      discount?.customerBuys?.value?.amount &&
      subtotal?.amount >= discount?.customerBuys?.value?.amount
  );
}

export function calculateReceipt(
  subtotalWithBuyXGetYDiscount: Money,
  checkout: Checkout | undefined,
  buyXGetYDiscountAmount: number,
  shippingDiscount: AutomaticDiscountFragment | null,
  tax: TaxFragment | null | undefined
): CheckoutReceipt {
  const currencyCode = subtotalWithBuyXGetYDiscount?.currencyCode;
  const subtotalAmount =
    subtotalWithBuyXGetYDiscount?.amount || 0 + buyXGetYDiscountAmount;
  const subtotalAmountWithBuyXGetYDiscount =
    subtotalWithBuyXGetYDiscount?.amount;

  const subtotal: Money = {
    amount: subtotalAmount,
    currencyCode,
  };

  const automaticDiscount: Money = {
    amount: buyXGetYDiscountAmount,
    currencyCode,
  };

  const couponPercentage = checkout?.coupon?.percentageOff || 0;
  const couponDiscount: Money = {
    amount: (subtotalAmountWithBuyXGetYDiscount * couponPercentage) / 100,
    currencyCode,
  };
  const subtotalWithCouponDiscount: Money = {
    amount: subtotalAmountWithBuyXGetYDiscount - couponDiscount.amount,
    currencyCode,
  };

  const taxPercentage = tax?.percentageOff || 0;
  const taxCost: Money = {
    amount: (subtotalWithCouponDiscount.amount * taxPercentage) / 100,
    currencyCode,
  };
  const subtotalWithTax: Money = {
    amount: subtotalWithCouponDiscount?.amount + taxCost?.amount,
    currencyCode,
  };

  const shippingPercentageAmount =
    ((shippingDiscount?.percentage || 0) / 100) *
    (checkout?.shippingInfo?.cost?.amount || 0);

  const shippingDiscountAmount = shippingDiscount?.percentage
    ? shippingPercentageAmount
    : shippingDiscount?.amount?.amount || 0;

  const shippingCost: Money = {
    amount:
      (checkout?.shippingInfo?.cost?.amount || 0) - shippingDiscountAmount,
    currencyCode,
  };

  const total: Money = {
    amount: (subtotalWithTax?.amount || 0) + shippingCost.amount,
    currencyCode,
  };

  return {
    subtotal,
    automaticDiscount,
    couponDiscount,
    tax: taxCost,
    shipping: shippingCost,
    shippingDiscount: { amount: shippingDiscountAmount, currencyCode },
    total,
  };
}

export const getStepsMessages = (intl: IntlShape, route: string) => {
  const stepsMessages = [
    intl.formatMessage({ defaultMessage: "Cart" }),
    intl.formatMessage({ defaultMessage: "Information" }),
    intl.formatMessage({ defaultMessage: "Delivery" }),
    intl.formatMessage({ defaultMessage: "Payment" }),
  ];

  if (route.includes("invalid-order")) {
    const deliveryIndex = stepsMessages.findIndex(
      (step) => step === "Delivery"
    );

    stepsMessages.splice(
      deliveryIndex + 1,
      0,
      intl.formatMessage({ defaultMessage: "Invalid Order" })
    );
  }

  return stepsMessages as CheckoutStepInfo["name"][];
};

export function getActiveStepInfo(pathname: string): CheckoutStepInfo {
  if (pathname?.includes("confirmation")) {
    return {
      name: "Confirmation",
      number: 6,
    };
  }

  if (pathname?.includes("payment")) {
    return {
      name: "Payment",
      number: 5,
    };
  }

  if (pathname?.includes("invalid-order")) {
    return {
      name: "Invalid Order",
      number: 4,
    };
  }

  if (pathname?.includes("delivery")) {
    return {
      name: "Delivery",
      number: 3,
    };
  }

  if (pathname?.includes("cart")) {
    return {
      name: "Cart",
      number: 1,
    };
  }

  // should be last one as all paths includes checkout
  if (pathname?.includes("checkout")) {
    return {
      name: "Information",
      number: 2,
    };
  }

  return {
    name: "Other",
    number: -1,
  };
}

export function getDiscountsData(items: CartItem[]) {
  let isBuyXGetYDiscount = false;
  let isCustomDiscount = false;
  const discountAmount = items?.reduce((acc, curr) => {
    const automaticDiscount = curr?.automaticDiscount?.totalDiscount?.amount;
    const customDiscount =
      curr?.quantity * (curr?.customDiscount?.itemDiscount?.amount || 0);

    if (automaticDiscount) isBuyXGetYDiscount = true;
    if (customDiscount) isCustomDiscount = true;

    return acc + (automaticDiscount || customDiscount || 0);
  }, 0);

  return { discountAmount, isCustomDiscount, isBuyXGetYDiscount };
}
