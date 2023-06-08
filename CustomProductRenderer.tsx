import cuid from "cuid";
import React from "react";
import { isEqual } from "lodash";
import { useCart } from "../contexts/CartContext";
import {
  CustomProductDiscount,
  Money,
  ProductBasicInfoFragment,
  ProductInfoFragment,
  ProductStatus,
  SourceType,
} from "../generated/graphql";
import { useRouter } from "../lib/i18n";
import { useStore } from "../lib/storeData";
import { parseSearchQuery } from "../shared/utils/resolveCustomProductSelections";
import type {
  BuildState,
  BuildStateVariant,
  CartBuildData,
  CategoriesMap,
  CustomProductInfoProps,
  StorageData,
} from "../templates/types";
import type { RendererComponent } from "./types";
import type { CartItemInput } from "../contexts/CartContext/types";
import { isAvailableToAdd } from "../contexts/CartContext/reducer/utils";
import { isBrowser } from "../lib/isBrowser";
import { useAuth } from "../lib/Authentication";

interface CustomProductRendererProps
  extends RendererComponent<CustomProductInfoProps> {}

const CustomProductRenderer: React.FC<CustomProductRendererProps> = ({
  Component,
  product,
}) => {
  const Router = useRouter();
  const { addToCart, toggleSideCart, isReady, cart } = useCart();
  const { user } = useAuth();
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const { currency: currencyCode } = useStore();
  const firstCategoryId = product.categories[0]?.id;
  const [activeCategoryId, setActiveCategoryId] = React.useState<string | null>(
    firstCategoryId
  );
  const [isSummary, setIsSummary] = React.useState(false);
  const [exceededVariantId, setExceededVariantId] = React.useState("");
  const [buildState, setBuildState] = React.useState<BuildState>();

  const cartItems = cart?.items;

  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setActiveCategoryId(null);
      return;
    }
    setActiveCategoryId(firstCategoryId);
  }, [firstCategoryId]);

  React.useEffect(() => {
    const buildDataFromCart = cartItems?.find((item) =>
      item?.variantId?.startsWith(Router?.query?.buildId as string)
    )?.buildData?.categories;

    const buildDataFromStorage = getBuildDataFromStorage(product?.id!);

    const buildDataFromUrl = parseSearchQuery(window.location.search);

    const presavedData =
      buildDataFromCart || buildDataFromUrl || buildDataFromStorage;

    const buildTree = getSavedBuildState(product, presavedData);

    setBuildState(buildTree || prepareDefaultBuildState(product));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Router?.query?.buildId, isReady, product]);

  const buildSubtotalBeforeDiscount =
    computeBuildSubtotalWithoutDiscount(buildState);
  const isDiscount = !!(product?.discount?.percent || product?.discount?.fixed);
  const buildSubtotal = computeBuildSubtotal(product, buildState);

  const handleAddToCart = () => {
    if (!buildState) return;
    const buildUniqueId = `build-${product.id}-${cuid()}`;

    const dataToSave = prepareCartBuildState(
      buildState,
      product,
      buildUniqueId
    );

    const existedItemId = getExistedItemId(dataToSave, cartItems, product.id);

    const collectionIds = (product?.collections?.nodes || []).map(
      (i) => i?.id!
    );
    const collectionNames = (product?.collections?.nodes || []).map(
      (i) => i?.title!
    );

    const discountAmount =
      dataToSave.subtotalBeforeDiscount! - dataToSave.subtotal;
    const customDiscount = dataToSave?.discount
      ? {
          title: "custom-product-discount",
          fixed: dataToSave.discount?.fixed,
          percentage: dataToSave.discount?.percent,
          quantity: 1,
          itemDiscount: { amount: discountAmount, currencyCode },
          totalDiscount: { amount: discountAmount, currencyCode },
        }
      : null;

    const newItem: CartItemInput = {
      img: product.images?.[0]?.src,
      availableQuantity: { type: "infinity", max: Number.POSITIVE_INFINITY },
      price: { amount: dataToSave?.subtotalBeforeDiscount!, currencyCode },
      customDiscount,
      source: SourceType.Manual,
      productId: product.id,
      handle: product?.handle,
      quantity: 1,
      selectedOptions: [],
      title: product.title,
      variantId: existedItemId || buildUniqueId,
      buildData: dataToSave,
      collectionIds,
      collectionNames,
      sku: null,
      customerId: user?.id!,
    };

    const { isAvailable, exceededItem } = isAvailableToAdd(
      cart.items,
      newItem,
      dataToSave
    );
    if (isAvailable) {
      toggleSideCart();
      addToCart(newItem);
      setIsAlertOpen(false);
      setIsSummary(false);
      return;
    }

    if (!isAvailable) {
      const categoryId = findExceededCategoryId(
        buildState,
        exceededItem?.variantId!
      );
      setActiveCategoryId(categoryId);
      setIsAlertOpen(true);
      setExceededVariantId(exceededItem?.variantId!);
    }
  };

  if (!buildState) {
    return null;
  }

  return (
    <Component
      product={product}
      buildState={buildState}
      isSummary={isSummary}
      activeCategoryId={activeCategoryId!}
      buildSubtotal={buildSubtotal}
      buildSubtotalBeforeDiscount={buildSubtotalBeforeDiscount}
      isDiscount={isDiscount}
      isAlertOpen={isAlertOpen}
      exceededVariantId={exceededVariantId}
      setExceededVariantId={setExceededVariantId}
      setIsAlertOpen={setIsAlertOpen}
      handleAddToCart={handleAddToCart}
      prepareCartBuildState={prepareCartBuildState}
      setBuildState={setBuildState}
      setIsSummary={setIsSummary}
      setActiveCategoryId={setActiveCategoryId}
    />
  );
};

export default CustomProductRenderer;

/**
 *
 * Functions
 *
 */

function getBuildDataFromStorage(id: string) {
  let result: BuildState | undefined = undefined;
  if (!isBrowser) return undefined;
  try {
    result = JSON.parse(localStorage.getItem(`build-${id}`)!);
  } catch (e) {}
  return result;
}

function getFixedDiscount(fixedDiscount: Money | undefined | null) {
  if (fixedDiscount?.amount && fixedDiscount?.amount > 0) {
    return {
      currencyCode: fixedDiscount?.currencyCode!,
      amount: fixedDiscount?.amount,
    };
  }

  return null;
}

function getDiscount(discount: CustomProductDiscount | undefined | null) {
  if (discount?.fixed?.amount || discount?.percent) {
    return {
      fixed: getFixedDiscount(discount.fixed),
      percent: discount?.percent,
    };
  }
  return undefined;
}

function getImage(variant: BuildStateVariant) {
  if (
    variant?.variant?.image?.id &&
    variant?.variant?.product?.images?.[0]?.id
  ) {
    return {
      id:
        variant?.variant?.image?.id ||
        variant?.variant?.product?.images?.[0]?.id,
      src:
        variant?.variant?.image?.src ||
        variant?.variant?.product?.images?.[0]?.src,
      altText:
        variant?.variant?.image?.altText ||
        variant?.variant?.product?.images?.[0]?.altText,
    };
  }
  return null;
}

function filterDraftVariants(variants: BuildStateVariant[]) {
  return variants?.filter(
    (variant) =>
      variant?.variant &&
      variant?.variant?.product?.status !== ProductStatus.Draft
  );
}

function prepareDefaultBuildState(
  product: CustomProductInfoProps["product"]
): BuildState {
  return product.categories.map((category) => ({
    ...category,
    isCompleted: category.variants.some((variant) => variant?.preselected),
    variants: filterDraftVariants(category.variants).map((variant) => ({
      ...variant,
      variant: {
        ...variant.variant,
        isSelected: !!variant.preselected,
        selectedQuantity: variant.preselected ? 1 : 0,
        image: getImage(variant),
      },
    })),
  }));
}

function getSavedBuildState(
  product: CustomProductInfoProps["product"],
  savedData: StorageData | CartBuildData["categories"]
): BuildState | undefined {
  try {
    const categoriesMap: CategoriesMap = (savedData as StorageData).reduce(
      (acc, curr) => ({
        ...acc,
        [curr.id]: curr.selectedVariants,
      }),
      {}
    );

    return product.categories.map((category) => ({
      ...category,
      isCompleted: !!categoriesMap[category.id]?.length,
      variants: filterDraftVariants(category.variants).map((variant) => {
        const savedVariant = categoriesMap[category.id]?.find(
          (item) => item?.id === variant?.variant?.id
        );
        return {
          ...variant,
          variant: {
            ...variant.variant,
            isSelected: !!savedVariant,
            selectedQuantity: +(savedVariant?.quantity || 0),
            image: getImage(variant),
          },
        };
      }),
    }));
  } catch (err) {
    return undefined;
  }
}

function prepareCartBuildState(
  buildState: BuildState,
  product: CustomProductInfoProps["product"],
  buildUniqueId?: string
): CartBuildData {
  const buildCategories = buildState
    ?.filter((category) => category?.isCompleted)
    ?.map((category) => {
      const selectedVariantsForEachCategory = category?.variants
        ?.filter((variant) => variant?.variant?.isSelected)
        ?.map((selectedVariant) => ({
          imageSrc:
            selectedVariant?.variant?.image?.src ||
            selectedVariant.variant?.product?.images?.[0]?.src ||
            "",
          maxQuantity:
            selectedVariant?.variant?.quantity ?? Number.POSITIVE_INFINITY,
          price: selectedVariant?.variant?.price,
          sku: selectedVariant?.variant?.sku,
          productId: selectedVariant?.variant?.product?.id,
          quantity: selectedVariant?.variant?.selectedQuantity,
          selectedOptions: selectedVariant?.variant?.selectedOptions,
          title: selectedVariant?.variant?.product?.title,
          id: selectedVariant?.variant?.id,
        }));
      return {
        selectedVariants: selectedVariantsForEachCategory,
        id: category?.id,
        name: category?.name,
        imageSrc: category?.image?.src || "",
        type: category?.categoryType,
      };
    });

  const buildSubtotalBeforeDiscount =
    computeBuildSubtotalWithoutDiscount(buildState);
  const buildSubtotal = computeBuildSubtotal(product, buildState);

  return {
    id: product.id,
    handle: product.handle,
    buildId: buildUniqueId,
    title: product.title,
    imageSrc: product.images?.[0]?.src || "",
    discount: getDiscount(product?.discount!),
    subtotalBeforeDiscount: buildSubtotalBeforeDiscount,
    subtotal: buildSubtotal,
    categories: buildCategories,
  };
}

export function computeBuildSubtotal(
  product:
    | CustomProductInfoProps["product"]
    | ProductBasicInfoFragment
    | ProductInfoFragment,
  buildState?: BuildState
): number {
  const discountByPercentage = product?.discount?.percent;
  const discountByFixedAmount = product?.discount?.fixed;
  const isDiscount = !!(discountByPercentage || discountByFixedAmount);
  const buildSubtotalBeforeDiscount = buildState
    ? computeBuildSubtotalWithoutDiscount(buildState)
    : product?.initialPrice?.amount!; // for ProductCard before having any buildState

  const buildSubtotal = !isDiscount
    ? buildSubtotalBeforeDiscount
    : discountByPercentage
    ? buildSubtotalBeforeDiscount -
      buildSubtotalBeforeDiscount * (discountByPercentage / 100)
    : buildSubtotalBeforeDiscount - (discountByFixedAmount?.amount || 0);
  return buildSubtotal;
}

function computeBuildSubtotalWithoutDiscount(
  buildState: BuildState | undefined
) {
  if (!buildState) return 0;
  return buildState?.reduce(
    (acc, category) =>
      acc +
      category.variants
        ?.filter((variant) => variant.variant.isSelected)
        .reduce(
          (sum, variant) =>
            sum +
            variant.variant.price.amount * variant.variant.selectedQuantity,
          0
        ),
    0
  );
}

function getBuildMainData(buildData: CartBuildData) {
  return {
    id: buildData?.id,
    categories: buildData?.categories?.map?.((category) => ({
      id: category?.id,
      selectedVariants: category?.selectedVariants?.map((variant) => ({
        id: variant?.id,
        quantity: variant?.quantity,
      })),
    })),
  };
}

function getExistedItemId(
  newItemBuildData: CartBuildData,
  cartItems: CartItemInput[],
  productId: string
) {
  const existedItemId = cartItems
    ?.filter((item) => item?.variantId?.startsWith?.(`build-${productId}`))
    ?.find((item) => {
      const newItemData = getBuildMainData(newItemBuildData);
      const oldItemData = getBuildMainData(item?.buildData!);
      return isEqual(oldItemData, newItemData);
    })?.variantId;

  return existedItemId;
}

function findExceededCategoryId(buildState: BuildState, variantId: string) {
  let categoryId = "";
  buildState?.forEach((category) => {
    const isExist =
      category.variants.findIndex(
        (variant) => variant.variant.id === variantId
      ) !== -1;
    if (isExist) {
      categoryId = category.id;
    }
  });

  return categoryId;
}
