import * as React from "react";
import { FormattedMessage } from "react-intl";
import { isEqual as _isEqual } from "lodash";
import { useCart } from "../contexts/CartContext";
import {
  ProductDetailsQuery,
  ProductOptionValue,
  SourceType,
  VariantInfoFragment,
} from "../generated/graphql";
import { useRouter } from "../lib/i18n";
import type { SimpleProductProps } from "../templates/types";
import type { RendererComponent } from "./types";
import { stringifySearchQuery } from "../shared/utils/resolveSearchQuery";
import {
  formatAvailableQuantity,
  isAvailableToAdd,
} from "../contexts/CartContext/reducer/utils";
import type { CartItemInput } from "../contexts/CartContext/types";
import { useStore } from "../lib/storeData";
import { getBuyXGetYDiscountByProduct } from "../shared/utils/buyXGetY";
import { useAuth } from "../lib/Authentication";

interface SimpleProductRendererProps
  extends RendererComponent<SimpleProductProps> {}

export enum CurrentTab {
  Overview = "Overview",
  Additional_Info = "Additional Info.",
}

const ProductInfoRenderer: React.FC<SimpleProductRendererProps> = ({
  product,
  Component,
}) => {
  const router = useRouter();
  const { collection: collectionHandle } = router.query;
  const { automaticDiscounts } = useStore();
  const { cart, addToCart, toggleSideCart } = useCart();
  const { user } = useAuth();
  const [quantity, setQuantity] = React.useState(1);
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const tabs = [
    {
      label: <FormattedMessage key={1} defaultMessage="Overview" />,
      value: CurrentTab.Overview,
    },
    {
      label: <FormattedMessage key={2} defaultMessage="Additional Info." />,
      value: CurrentTab.Additional_Info,
    },
  ];

  const selectedVariant =
    product?.variants?.nodes?.find(
      (variant) => variant.id === router?.query?.selections
    ) || product?.variants?.nodes?.[0];

  const availableQuantity = formatAvailableQuantity(selectedVariant);

  const collectionIds = (product?.collections?.nodes || []).map((i) => i?.id!);
  const collectionNames = (product?.collections?.nodes || []).map(
    (i) => i?.title!
  );

  const buyXGetYDiscount = getBuyXGetYDiscountByProduct(
    automaticDiscounts,
    selectedVariant?.id,
    collectionIds
  );

  const handleAddToCart = () => {
    const newItem: CartItemInput = {
      productId: product?.id!,
      variantId: selectedVariant?.id!,
      handle: product?.handle!,
      title: product?.title!,
      sku: selectedVariant?.sku,
      price: selectedVariant?.price!,
      source: product?.integrationProvider?.provider || SourceType.Manual,
      quantity,
      collectionIds,
      collectionNames,
      img: selectedVariant?.image?.src || product?.images?.[0]?.src,
      buildData: null,
      customDiscount: null,
      selectedOptions: (selectedVariant?.selectedOptions || [])?.map(
        (option) => {
          return {
            name: option.option.name!,
            value: option?.value?.name!,
          };
        }
      ),
      customerId: user?.id!,
      availableQuantity,
    };

    if (isAvailableToAdd(cart.items, newItem).isAvailable) {
      toggleSideCart();
      addToCart(newItem);
      setIsAlertOpen(false);
      return;
    }

    setIsAlertOpen(true);
  };

  const handleSelectVariant =
    (value: ProductOptionValue, optionIndex: number) => () => {
      setIsAlertOpen(false);
      setQuantity(1);
      const variantId = getAvailableVariant(
        selectedVariant,
        optionIndex,
        product,
        value
      )?.id!;
      router.push(
        {
          pathname: router.asPath?.split("?")[0],
          query: stringifySearchQuery({ selections: variantId }),
        },
        undefined,
        { scroll: false }
      );
    };

  const alsoLikeCollectionHandle =
    collectionHandle === "all"
      ? product?.collections?.nodes?.[0]?.handle || "all"
      : (collectionHandle as string);

  return (
    <Component
      selectedVariant={selectedVariant}
      product={product}
      availableQuantity={availableQuantity}
      collectionHandle={alsoLikeCollectionHandle}
      isAlertOpen={isAlertOpen}
      quantity={quantity}
      buyXGetYDiscount={buyXGetYDiscount}
      handleSelect={handleSelectVariant}
      setQuantity={setQuantity}
      handleAddToCart={handleAddToCart}
      setIsAlertOpen={setIsAlertOpen}
      isValueAvailableForOtherSelectedValues={
        isValueAvailableForOtherSelectedValues
      }
      tabs={tabs.filter(
        (tab) =>
          tab.value !== CurrentTab.Additional_Info ||
          product?.attributes?.length! > 0
      )}
    />
  );
};

export default ProductInfoRenderer;

/**
 *
 *
 * Functions
 *
 *
 */

function getEachValueAndItsAvailableValues(
  product: ProductDetailsQuery["product"]
) {
  const variantsValues = product?.variants?.nodes?.map((variant) =>
    variant.selectedOptions.map((option) => option?.value?.id)
  );
  const optionsValues = product?.options?.map((option) =>
    option?.values?.map((value) => value.id)
  );

  let temp: { [key: string]: string[][] } = {};
  optionsValues?.forEach((optionValues) => {
    optionValues?.forEach((value) => {
      const availableValues = variantsValues?.filter((variantValues) =>
        variantValues.includes(value)
      );
      temp = {
        ...temp,
        [value]: availableValues!,
      };
    });
  });

  return temp;
}

function getAvailableValuesForSpecificValue(
  value: string,
  product: ProductDetailsQuery["product"]
) {
  const eachValueAndItsAvailableValues =
    getEachValueAndItsAvailableValues(product);
  return eachValueAndItsAvailableValues[value].map((values) => values);
}

function isValueAvailableForOtherSelectedValues(
  selectedVariant: VariantInfoFragment | null | undefined,
  optionIndex: number,
  product: ProductDetailsQuery["product"],
  value: ProductOptionValue
) {
  if (!selectedVariant?.selectedOptions) return true;
  const otherSelectedOptions = [...selectedVariant.selectedOptions];
  otherSelectedOptions.splice(optionIndex, 1);
  const otherSelectedValues = otherSelectedOptions.map(
    (option) => option?.value?.id
  );

  const testVariant = [...otherSelectedValues];
  testVariant.splice(optionIndex, 0, value.id);

  const availableValues = getAvailableValuesForSpecificValue(value.id, product);

  const temp = availableValues.find((values) => _isEqual(values, testVariant));
  return !!temp;
}

function getAvailableVariant(
  selectedVariant: VariantInfoFragment | null | undefined,
  optionIndex: number,
  product: ProductDetailsQuery["product"],
  value: ProductOptionValue
) {
  const allVariantsValuesIDs = product?.variants?.nodes?.map((variant) =>
    variant?.selectedOptions?.map((option) => option.value.id)
  );

  const preSelectedVariantValuesIDs = selectedVariant?.selectedOptions?.map(
    (option) => option.value.id
  );

  const newSelectedVariantValuesIDs = [...preSelectedVariantValuesIDs!];
  newSelectedVariantValuesIDs.splice(optionIndex, 1, value.id);

  const variantIndex = allVariantsValuesIDs?.findIndex((variantValuesIDs) =>
    _isEqual(variantValuesIDs, newSelectedVariantValuesIDs)
  );

  if (variantIndex !== -1) {
    return product?.variants?.nodes?.[variantIndex!];
  } else {
    const temp = getAvailableValuesForSpecificValue(value.id, product);
    const newVariantIndex = allVariantsValuesIDs?.findIndex((variantValues) =>
      _isEqual(variantValues, temp[0])
    );
    return product?.variants?.nodes?.[newVariantIndex!];
  }
}
