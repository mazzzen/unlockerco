import type {
  CartItem,
  CartItemInput,
  ItemCustomDiscountType,
} from "../../contexts/CartContext/types";
import {
  AutomaticDiscountFragment,
  DiscountAppliedOnType,
} from "../../generated/graphql";

export function getBuyXGetYDiscountByProduct(
  automaticDiscounts: (AutomaticDiscountFragment | null)[],
  selectedVariantId: string | null | undefined,
  productCollectionIds: string[] = [],
  isCustom = false
) {
  if (isCustom) return null;
  return automaticDiscounts?.find((discount) => {
    if (discount?.appliedOn !== DiscountAppliedOnType.BuyXGetY) {
      return false;
    }

    const discountVariantIds =
      discount?.BuyXGetYDiscount?.customerBuys?.items?.productVariantIds;

    const isProductFirstVariantIncluded = discountVariantIds?.includes(
      selectedVariantId || "not-a-simple-product"
    );
    const discountCollectionIds =
      discount?.BuyXGetYDiscount?.customerBuys?.items?.collectionIds;

    const isProductCollectionIncluded = discountCollectionIds?.some?.((i) =>
      productCollectionIds?.includes?.(i)
    );

    return isProductFirstVariantIncluded || isProductCollectionIncluded;
  });
}

function findBuyXGetYDiscount(
  automaticDiscounts: (AutomaticDiscountFragment | null)[] | undefined
) {
  return automaticDiscounts?.find(
    (discount) => discount?.appliedOn === DiscountAppliedOnType.BuyXGetY
  );
}

function extractBuyXGetYDiscountDetails(
  buyXGetYDiscount: AutomaticDiscountFragment
) {
  const x_variantIds =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerBuys?.items?.productVariantIds;

  const x_collectionIds =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerBuys?.items?.collectionIds;

  const y_variantIds =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerGets?.items?.productVariants?.map(
      (variant) => variant?.id!
    );

  const y_collectionIds =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerGets?.items?.collections?.map(
      (collection) => collection?.id!
    );

  const minimumPurchaseAmount =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerBuys?.value?.amount;

  const minimumPurchaseQuantity =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerBuys?.quantity;

  const maximumGetQuantity =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerGets?.quantity;

  const discountPercentage =
    buyXGetYDiscount?.BuyXGetYDiscount?.customerGets?.percentage;

  return {
    x_variantIds: x_variantIds || [],
    x_collectionIds: x_collectionIds || [],
    y_variantIds: y_variantIds || [],
    y_collectionIds: y_collectionIds || [],
    minimumPurchaseAmount,
    minimumPurchaseQuantity,
    maximumGetQuantity: maximumGetQuantity || 1,
    discountPercentage: discountPercentage || 1,
  };
}

function extractXYItems(
  items: CartItemInput[],
  x_variantIds: string[],
  x_collectionIds: string[],
  y_variantIds: string[],
  y_collectionIds: string[]
) {
  const x_cartItems: CartItemInput[] = [];
  const y_cartItems: CartItemInput[] = [];
  const xy_sharedCartItems: CartItemInput[] = [];
  let x_cartItemsCount = 0;
  let y_cartItemsCount = 0;
  let x_cartItemsSubtotalAmount = 0;
  let xy_sharedCartItemsCount = 0;
  let xy_totalCartItemsCount = 0;

  for (const item of items) {
    const isCustomItem = item?.variantId?.startsWith?.("build-");
    if (isCustomItem) continue;

    const xCondition =
      x_variantIds.includes(item.variantId) ||
      x_collectionIds.some((i) => item.collectionIds?.includes(i));
    const yCondition =
      y_variantIds.includes(item.variantId) ||
      y_collectionIds.some((i) => item.collectionIds?.includes(i));

    if (xCondition && yCondition) {
      xy_sharedCartItems.push(item);
      xy_sharedCartItemsCount += item?.quantity;
    }
    if (xCondition) {
      x_cartItems.push(item);
      x_cartItemsCount += item?.quantity;
      x_cartItemsSubtotalAmount += item?.quantity * item?.price?.amount;
    }
    if (yCondition) {
      y_cartItems.push(item);
      y_cartItemsCount += item?.quantity;
    }
    if (xCondition || yCondition) xy_totalCartItemsCount += item?.quantity;
  }

  y_cartItems.sort((a, b) => a.price.amount - b.price.amount);

  return {
    x_cartItems,
    x_cartItemsCount,
    x_cartItemsSubtotalAmount,
    y_cartItems,
    y_cartItemsCount,
    xy_sharedCartItems,
    xy_sharedCartItemsCount,
    xy_totalCartItemsCount,
  };
}

function injectMetaPrices(item: CartItemInput): CartItem {
  const currencyCode = item?.price?.currencyCode;
  const itemCustomDiscount = item?.customDiscount?.itemDiscount?.amount || 0;
  const totalPrice = {
    currencyCode,
    amount: item?.quantity * (item?.price?.amount - itemCustomDiscount),
  };
  let subtotal = totalPrice;
  if (itemCustomDiscount) {
    subtotal = {
      currencyCode,
      amount: item?.quantity * item?.price?.amount,
    };
  }
  const customDiscount: ItemCustomDiscountType | null = item?.customDiscount
    ? {
        ...item?.customDiscount,
        quantity: item?.quantity,
        totalDiscount: {
          currencyCode,
          amount: subtotal?.amount - totalPrice?.amount,
        },
      }
    : null;

  return {
    ...item,
    notAvailable: false,
    automaticDiscount: null,
    customDiscount,
    subtotal,
    totalPrice,
  };
}

function applyDiscountOnItems(
  items: CartItemInput[],
  itemsToApplyDiscountOn: CartItemInput[],
  percentage: number,
  count: number,
  title: string
): CartItem[] {
  const itemIdToDiscountedQuantity = itemsToApplyDiscountOn?.reduce<{
    [id: string]: number;
  }>((acc, item) => {
    if (count > 0) {
      const quantityWithDiscount =
        item?.quantity < count ? item?.quantity : count;
      count -= quantityWithDiscount;
      return { ...acc, [item?.variantId]: quantityWithDiscount };
    }
    return { ...acc, [item?.variantId]: 0 };
  }, {});

  const createMoney = (amount: number) => {
    return { currencyCode: items?.[0]?.price?.currencyCode, amount };
  };

  return items?.map((item) => {
    const quantityWithDiscount = itemIdToDiscountedQuantity[item?.variantId];
    if (quantityWithDiscount > 0) {
      const itemDiscount = createMoney(
        item?.price?.amount * (percentage / 100)
      );

      const totalDiscount = createMoney(
        itemDiscount?.amount * quantityWithDiscount
      );

      const subtotalBeforeDiscount = createMoney(
        item?.price?.amount * item?.quantity
      );

      const totalAfterDiscount = createMoney(
        subtotalBeforeDiscount.amount - totalDiscount.amount
      );

      return {
        ...item,
        notAvailable: false,
        automaticDiscount: {
          title,
          percentage,
          quantity: quantityWithDiscount,
          itemDiscount: itemDiscount,
          totalDiscount: totalDiscount,
        },
        subtotal: subtotalBeforeDiscount,
        totalPrice: totalAfterDiscount,
      };
    }
    return injectMetaPrices(item);
  });
}

function getOfferYCount(
  x_cartItemsCount: number,
  y_cartItemsCount: number,
  xy_sharedCartItemsCount: number,
  minimumPurchaseQuantity: number,
  maximumGetQuantity: number
) {
  let availableCountToBuyFromY = 0;
  let xOnly_cartItemsCount = x_cartItemsCount - xy_sharedCartItemsCount;
  let yOnly_cartItemsCount = y_cartItemsCount - xy_sharedCartItemsCount;
  let x_tempCartItemsCount = x_cartItemsCount;
  let y_tempCartItemsCount = y_cartItemsCount;

  // case we have items in X and not in Y
  if (xOnly_cartItemsCount >= minimumPurchaseQuantity) {
    const offersCount = Math.floor(
      xOnly_cartItemsCount / minimumPurchaseQuantity
    );
    availableCountToBuyFromY += Math.min(
      offersCount * maximumGetQuantity,
      y_tempCartItemsCount
    );
    xOnly_cartItemsCount -= offersCount * minimumPurchaseQuantity;
    x_tempCartItemsCount -= offersCount * minimumPurchaseQuantity;
    yOnly_cartItemsCount -= availableCountToBuyFromY;
    y_tempCartItemsCount -= availableCountToBuyFromY;
    if (yOnly_cartItemsCount < 0) {
      // this means we will take some items from the shared X
      const itemsToDeductFromX = yOnly_cartItemsCount * -1;
      x_tempCartItemsCount -= itemsToDeductFromX + xOnly_cartItemsCount;
    }
  }

  if (
    x_tempCartItemsCount < minimumPurchaseQuantity ||
    y_tempCartItemsCount <= 0
  ) {
    return availableCountToBuyFromY;
  }

  // case we still have remaining items in X only
  if (xOnly_cartItemsCount > 0 && xy_sharedCartItemsCount) {
    const countToCompleteOffer = minimumPurchaseQuantity - xOnly_cartItemsCount;
    // we are completing the X items from the shared items
    // make sure that we still have Y items to apply discount on
    if (y_tempCartItemsCount <= countToCompleteOffer) {
      return availableCountToBuyFromY;
    }
    // we only have one offer in this case
    const offersCount = 1;
    availableCountToBuyFromY += Math.min(
      offersCount * maximumGetQuantity,
      y_tempCartItemsCount
    );
    xOnly_cartItemsCount = 0;
    x_tempCartItemsCount -= offersCount * minimumPurchaseQuantity;
    yOnly_cartItemsCount -= availableCountToBuyFromY;
    y_tempCartItemsCount -= availableCountToBuyFromY;
    if (yOnly_cartItemsCount < 0) {
      // this means we will take some items from the shared X
      const itemsToDeductFromX = yOnly_cartItemsCount * -1;
      x_tempCartItemsCount -= itemsToDeductFromX;
    }
  }

  if (
    x_tempCartItemsCount < minimumPurchaseQuantity ||
    y_tempCartItemsCount <= 0
  ) {
    return availableCountToBuyFromY;
  }

  // case we have shared items in X and in Y
  for (let i = maximumGetQuantity; i > 0; i--) {
    const packageItemsCount = minimumPurchaseQuantity + i;
    if (x_tempCartItemsCount >= packageItemsCount && y_tempCartItemsCount > 0) {
      const offersCount = Math.floor(x_tempCartItemsCount / packageItemsCount);
      availableCountToBuyFromY += offersCount * i;
      x_tempCartItemsCount %= packageItemsCount;
      y_tempCartItemsCount -= availableCountToBuyFromY;
    }
  }

  return availableCountToBuyFromY;
}

export function getDiscountedCartItems(
  items: CartItemInput[],
  automaticDiscounts: (AutomaticDiscountFragment | null)[] | undefined
): CartItem[] {
  try {
    const buyXGetYDiscount = findBuyXGetYDiscount(automaticDiscounts);
    if (!buyXGetYDiscount) throw Error("no-buy-x-get-y-discount");
    const title = buyXGetYDiscount?.title!;

    const {
      x_variantIds,
      x_collectionIds,
      y_variantIds,
      y_collectionIds,
      minimumPurchaseAmount,
      minimumPurchaseQuantity,
      maximumGetQuantity,
      discountPercentage,
    } = extractBuyXGetYDiscountDetails(buyXGetYDiscount);

    const {
      x_cartItemsCount,
      x_cartItemsSubtotalAmount,
      y_cartItems,
      y_cartItemsCount,
      xy_sharedCartItemsCount,
      xy_totalCartItemsCount,
    } = extractXYItems(
      items,
      x_variantIds,
      x_collectionIds,
      y_variantIds,
      y_collectionIds
    );

    if (y_cartItemsCount === 0) {
      throw Error("zero-y-cart-items");
    }
    if (minimumPurchaseQuantity) {
      if (x_cartItemsCount < minimumPurchaseQuantity) {
        throw Error("quantity-condition-not-met");
      }

      const availableCountToBuyFromY = getOfferYCount(
        x_cartItemsCount,
        y_cartItemsCount,
        xy_sharedCartItemsCount,
        minimumPurchaseQuantity,
        maximumGetQuantity
      );

      if (availableCountToBuyFromY === 0) {
        throw Error("no-sufficient-y-cart-items");
      }

      return applyDiscountOnItems(
        items,
        y_cartItems,
        discountPercentage,
        availableCountToBuyFromY,
        title
      );
    }

    if (minimumPurchaseAmount === 0 || minimumPurchaseAmount) {
      if (
        x_cartItemsSubtotalAmount < minimumPurchaseAmount ||
        xy_totalCartItemsCount <= maximumGetQuantity
      ) {
        throw Error("purchase-condition-not-met");
      }

      return applyDiscountOnItems(
        items,
        y_cartItems,
        discountPercentage,
        maximumGetQuantity,
        title
      );
    }

    throw Error("nighter min-quantity nor min-purchase-amount are true");
  } catch (error) {
    return items?.map(injectMetaPrices);
  }
}
