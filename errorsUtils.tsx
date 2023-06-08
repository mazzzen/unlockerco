import { ReactElement } from "react";
import { FormattedMessage } from "react-intl";
import { CartItem } from "../../contexts/CartContext/types";
import {
  CheckoutError,
  CurrencyCode,
  ErrorCode,
} from "../../generated/graphql";
import { DefaultTextPrice } from "../Price";

export type FormattedError = CheckoutError & {
  message: ReactElement;
};

export function validateErrors(
  allItemErrors: FormattedError[],
  value: number
): FormattedError[] {
  const isProductNotAvailable = allItemErrors.find(
    (error) =>
      error.code === ErrorCode.ProductNotActive ||
      error.code === ErrorCode.ProductNotAvailable ||
      error.code === ErrorCode.ProductNotFound
  );

  if (isProductNotAvailable) {
    return [isProductNotAvailable];
  }

  return allItemErrors?.filter((error) => {
    if (
      error.code === ErrorCode.MinQuantityNotMet &&
      error.params?.availableQuantity! <= value
    ) {
      return;
    }
    if (
      error.code === ErrorCode.MaxQuantityExceeded &&
      error.params?.availableQuantity! >= value
    ) {
      return;
    }
    if (
      error.code === ErrorCode.InsufficientQuantity &&
      error.params?.availableQuantity! >= value
    ) {
      return;
    }
    return true;
  });
}

export function generateItemErrors(
  errors: CheckoutError[] | undefined,
  item: CartItem,
  currencyCode: CurrencyCode
): FormattedError[] {
  if (!errors) return [];

  const itemRelatedErrors = findItemRelatedErrors(errors, item);

  const formattedErrors = itemRelatedErrors.map((error) => ({
    resourceId:
      error.code.split("_")[0] === "PRODUCT" ? item.productId : item.variantId,
    code: error.code,
    params: error.params,
    message: generateErrorMessage(error, currencyCode),
  }));

  return formattedErrors;
}

function findItemRelatedErrors(errors: CheckoutError[], item: CartItem) {
  return errors.filter((error) => {
    const isProductError = error.code.split("_")[0] === "PRODUCT";
    const itemId = isProductError
      ? item.productId?.split("_")[1]
      : item.variantId?.split("_")[1];

    return itemId === error.resourceId;
  });
}

function generateErrorMessage(
  error: CheckoutError,
  currencyCode: CurrencyCode
): ReactElement {
  if (error.code === ErrorCode.ProductNotActive) {
    return (
      <FormattedMessage
        defaultMessage="This product is no longer available, <b>please remove it from your cart</b>"
        values={{ b: (...chunks) => <b>{chunks}</b> }}
      />
    );
  }
  if (error.code === ErrorCode.MaxQuantityExceeded) {
    return (
      <FormattedMessage
        defaultMessage="Please edit the quantity of this product, you can only add up to <b>{availableQuantity} per order</b>"
        values={{
          availableQuantity: error.params?.availableQuantity,
          b: (...chunks) => <b>{chunks}</b>,
        }}
      />
    );
  }
  if (error.code === ErrorCode.MinQuantityNotMet) {
    return (
      <FormattedMessage
        defaultMessage="Please edit the quantity of this product, the minimum quantity <b>{availableQuantity} per order</b>"
        values={{
          availableQuantity: error.params?.availableQuantity,
          b: (...chunks) => <b>{chunks}</b>,
        }}
      />
    );
  }
  if (error.code === ErrorCode.InsufficientQuantity) {
    return (
      <FormattedMessage
        defaultMessage="Please edit the quantity of this product, <b>available stock: {availableQuantity}</b>"
        values={{
          availableQuantity: error.params?.availableQuantity,
          b: (...chunks) => <b>{chunks}</b>,
        }}
      />
    );
  }
  if (error.code === ErrorCode.PriceChanged) {
    return (
      <FormattedMessage
        defaultMessage="Please note that the price of this product has changed from <b>{requestedPrice} to {availablePrice}</b> since you placed it in your cart"
        values={{
          requestedPrice: (
            <DefaultTextPrice
              money={{ amount: error.params?.requestedPrice!, currencyCode }}
            />
          ),
          availablePrice: (
            <DefaultTextPrice
              money={{ amount: error.params?.availablePrice!, currencyCode }}
            />
          ),
          b: (...chunks) => <b>{chunks}</b>,
        }}
      />
    );
  }
  return (
    <FormattedMessage defaultMessage="Oops, An Error occurred. please try again" />
  );
}
