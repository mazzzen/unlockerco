import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { isAvailableToAdd } from "../../contexts/CartContext/reducer/utils";
import type { CartItem as CartItemType } from "../../contexts/CartContext/types";
import useCheckout from "../../contexts/CartContext/useCheckout";
import { CheckoutError, ErrorCode } from "../../generated/graphql";
import { useStore } from "../../lib/storeData";
import {
  validateErrors,
  FormattedError,
  generateItemErrors,
} from "./errorsUtils";
import CartItemDesktop from "./CartItemDesktop";
import CartItemMobile from "./CartItemMobile";
import { ScreenSize } from "./types";

interface CartItemProps {
  item: CartItemType;
  screenSize: ScreenSize;
  errors?: CheckoutError[];
  updateErrorCount?: (variantId: string, newErrorCount: number) => void;
  eraseErrorFromMap?: (variantId: string) => void;
}

const CartItem = ({
  item,
  screenSize,
  errors,
  updateErrorCount,
  eraseErrorFromMap,
}: CartItemProps) => {
  const { cart, updateQuantity, removeCartItem } = useCart();
  const { checkout, updateItems } = useCheckout();
  const { currency: currencyCode } = useStore();

  const [value, setValue] = useState(item.quantity);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const allItemErrors = generateItemErrors(errors, item, currencyCode);
  const [filteredItemErrors, setFilteredItemErrors] =
    useState<FormattedError[]>();

  // render errors automatically after resubmit
  useEffect(() => {
    setFilteredItemErrors(validateErrors(allItemErrors, value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  // update errors count at parent level
  useEffect(() => {
    if (updateErrorCount) {
      const errorsWithoutWarns =
        filteredItemErrors?.filter(
          (error) => error.code !== ErrorCode.PriceChanged
        ) || [];
      updateErrorCount(item.variantId, errorsWithoutWarns.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredItemErrors?.length]);

  // update prices when PRICE_CHANGED error
  useEffect(() => {
    if (cart.items.length) {
      const priceChangedError = filteredItemErrors?.find(
        (error) => error.code === ErrorCode.PriceChanged
      );

      if (priceChangedError) {
        if (item.price.amount === priceChangedError?.params?.availablePrice)
          return;

        const items = cart.items.map((item) => {
          if (
            item.variantId !== priceChangedError?.resourceId &&
            item.productId !== priceChangedError?.resourceId
          ) {
            return item;
          }

          return {
            ...item,
            price: {
              ...item.price,
              amount: priceChangedError?.params?.availablePrice!,
            },
          };
        });

        updateItems(items);
      }
    }
  }, [cart.items, item.price.amount, filteredItemErrors, updateItems]);

  const buyXGetYTitle = item?.automaticDiscount?.title;
  const isCustomProductDiscount = !!(
    item.buildData?.discount?.percent || item.buildData?.discount?.fixed
  );
  const isBuyXGetYDiscountApplied =
    !!item?.automaticDiscount?.itemDiscount?.amount;
  const discountedItemsCount = item?.automaticDiscount?.quantity || 0;
  const nonDiscountedItemsCount = item?.quantity - discountedItemsCount;
  const isAllItemsDiscounted = nonDiscountedItemsCount === 0;
  const itemDiscount =
    item?.automaticDiscount?.itemDiscount || item?.customDiscount?.itemDiscount;
  const isInvalidOrderPage =
    checkout?.meta?.activeStepInfo?.name === "Invalid Order";

  const handleQuantityChange = (value: number) => {
    if (isInvalidOrderPage) {
      setFilteredItemErrors(validateErrors(allItemErrors, value));
    }

    const newItem: CartItemType = { ...item, quantity: value - item.quantity };

    if (isAvailableToAdd(cart.items, newItem).isAvailable) {
      if (
        (item.availableQuantity?.type === "cart" &&
          value < item.availableQuantity?.min!) ||
        value > item.availableQuantity?.max!
      ) {
        setIsAlertOpen(true);
        return;
      }
      updateQuantity({ itemId: item.variantId, newQuantity: value });
      setIsAlertOpen(false);
      return;
    }

    setIsAlertOpen(true);
  };

  const handleRemoveCartItem = (variantId: string) => {
    if (eraseErrorFromMap) {
      eraseErrorFromMap(variantId);
    }
    removeCartItem(variantId);
  };

  return (
    <>
      {screenSize === "Mobile" ? (
        <CartItemMobile
          item={item}
          buyXGetYTitle={buyXGetYTitle}
          isCustomProductDiscount={isCustomProductDiscount}
          isBuyXGetYDiscountApplied={isBuyXGetYDiscountApplied}
          discountedItemsCount={discountedItemsCount}
          nonDiscountedItemsCount={nonDiscountedItemsCount}
          isAllItemsDiscounted={isAllItemsDiscounted}
          itemDiscount={itemDiscount}
          itemErrors={filteredItemErrors}
          value={value}
          setValue={setValue}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          onQuantityChange={handleQuantityChange}
          onRemoveCartItem={handleRemoveCartItem}
        />
      ) : (
        <CartItemDesktop
          item={item}
          buyXGetYTitle={buyXGetYTitle}
          isCustomProductDiscount={isCustomProductDiscount}
          isBuyXGetYDiscountApplied={isBuyXGetYDiscountApplied}
          discountedItemsCount={discountedItemsCount}
          nonDiscountedItemsCount={nonDiscountedItemsCount}
          isAllItemsDiscounted={isAllItemsDiscounted}
          itemDiscount={itemDiscount}
          itemErrors={filteredItemErrors}
          value={value}
          setValue={setValue}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          onQuantityChange={handleQuantityChange}
          onRemoveCartItem={handleRemoveCartItem}
        />
      )}
    </>
  );
};
export default CartItem;
