import React from "react";
import type { RendererComponent } from "./types";
import type {
  Variant,
  Variants,
  StorageData,
  VariantsSectionProps,
  BuildState,
  BuildStateVariant,
} from "../templates/types";
import { CategoryType } from "../generated/graphql";
import { stringifySearchQuery } from "../shared/utils/resolveCustomProductSelections";
import { isBrowser } from "../lib/isBrowser";
import { useLocalStorage } from "../hooks/useStorage";

interface VariantsSectionRendererProps
  extends RendererComponent<VariantsSectionProps> {}

const VariantsSectionRenderer: React.FC<VariantsSectionRendererProps> = ({
  Component,
  activeCategoryId,
  activeCategory,
  buildState,
  productId,
  exceededVariantId,
  setExceededVariantId,
  setActiveCategoryId,
  setBuildState,
}) => {
  const setBuildStorage = useLocalStorage<StorageData>(
    "build-{productId}",
    undefined,
    productId
  )[1];

  const handleClickVariant = (variant: Variant) => {
    let newVariants: Variants = [];

    if (activeCategory.categoryType === CategoryType.Single) {
      newVariants = activeCategory.variants.map((item) =>
        item.variant.id === variant.id
          ? activeCategory.isRequired
            ? selectItem(item)
            : toggleItemSelection(item)
          : deselectItem(item)
      );
    } else {
      newVariants = activeCategory.variants.map((item) =>
        item.variant.id === variant.id ? toggleItemSelection(item) : item
      );
    }

    const selectedItemsCount = computeSelectedVariantsCount(newVariants);

    if (
      (activeCategory.categoryType == CategoryType.Multiple &&
        selectedItemsCount > activeCategory?.settings?.maxSelect!) ||
      (activeCategory.isRequired && selectedItemsCount === 0)
    ) {
      return;
    }

    const updatedState = updateStateCategorySelections(
      buildState,
      activeCategory.id,
      newVariants
    );

    updateState(updatedState);
  };

  const handleQuantity = (variantId: string, newQuantity: number) => {
    const updatedState = updateStateCategoryQuantity(
      buildState,
      activeCategory.id,
      variantId,
      newQuantity
    );

    const newVariants = updatedState?.find(
      (cat) => cat?.id === activeCategory?.id
    )?.variants;
    const selectedItemsCount = computeSelectedVariantsCount(newVariants);

    if (
      (activeCategory.categoryType == CategoryType.Multiple &&
        selectedItemsCount > activeCategory?.settings?.maxSelect!) ||
      newQuantity > activeCategory?.settings?.maxQuantity!
    ) {
      return;
    }

    updateState(updatedState);
  };

  const updateState = (newState: BuildState) => {
    setBuildState(newState);
    const storageData = prepareStorageData(newState);
    setBuildStorage(storageData);
    pushToUrlSearch(storageData);
  };

  const handleNavigationButtons = (type: "next" | "previous") => {
    const activeCategoryIndex = buildState.findIndex(
      (category) => category.id === activeCategoryId
    );

    const laterCategoryId = buildState[activeCategoryIndex + 1]?.id;

    const previousCategoryId = buildState[activeCategoryIndex - 1]?.id;

    if (type === "next" && activeCategoryIndex !== buildState.length - 1) {
      setActiveCategoryId(laterCategoryId);
    }

    if (type === "previous" && activeCategoryIndex !== 0) {
      setActiveCategoryId(previousCategoryId);
    }
  };

  return (
    <Component
      activeCategoryId={activeCategoryId}
      activeCategory={activeCategory}
      buildState={buildState}
      productId={productId}
      exceededVariantId={exceededVariantId}
      setExceededVariantId={setExceededVariantId}
      setActiveCategoryId={setActiveCategoryId}
      setBuildState={setBuildState}
      handleClickVariant={handleClickVariant}
      handleQuantity={handleQuantity}
      handleNavigationButtons={handleNavigationButtons}
    />
  );
};

export default VariantsSectionRenderer;

/**
 *
 * Functions
 *
 */

function toggleItemSelection(item: BuildStateVariant): BuildStateVariant {
  return {
    ...item,
    variant: {
      ...item.variant,
      isSelected: !item.variant.isSelected,
      selectedQuantity: item.variant.isSelected ? 0 : 1,
    },
  };
}

function selectItem(item: BuildStateVariant): BuildStateVariant {
  return {
    ...item,
    variant: {
      ...item.variant,
      isSelected: true,
      selectedQuantity: 1,
    },
  };
}

function deselectItem(item: BuildStateVariant): BuildStateVariant {
  return {
    ...item,
    variant: {
      ...item.variant,
      isSelected: false,
      selectedQuantity: 0,
    },
  };
}

function updateStateCategorySelections(
  state: BuildState,
  categoryId: string,
  variants: BuildStateVariant[]
): BuildState {
  return state.map((category) =>
    category.id === categoryId
      ? {
          ...category,
          variants,
          isCompleted: !!variants.filter(
            (variant) => variant.variant.isSelected
          ).length,
        }
      : category
  );
}

function updateStateCategoryQuantity(
  state: BuildState,
  categoryId: string,
  variantId: string,
  newQuantity: number
): BuildState {
  return state.map((category) =>
    category.id === categoryId
      ? {
          ...category,
          variants: category.variants.map((variant) =>
            variantId === variant?.variant?.id
              ? {
                  ...variant,
                  variant: {
                    ...variant.variant,
                    selectedQuantity: newQuantity,
                  },
                }
              : variant
          ),
        }
      : category
  );
}

function computeSelectedVariantsCount(variants: BuildStateVariant[] = []) {
  return variants.reduce((acc, curr) => acc + curr.variant.selectedQuantity, 0);
  // return variants?.filter((item) => item.variant.isSelected)?.length;
}

function prepareStorageData(state: BuildState): StorageData {
  return state.map((category) => ({
    id: category.id,
    selectedVariants: category.variants
      .filter((variant) => variant.variant.isSelected)
      .map((variant) => ({
        id: variant.variant.id,
        quantity: variant.variant.selectedQuantity,
      })),
  }));
}

function pushToUrlSearch(storageData: StorageData) {
  const search = stringifySearchQuery({ selections: storageData });

  if (isBrowser && window?.history?.pushState) {
    const newurl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname +
      "?" +
      search;

    window.history.pushState({ path: newurl }, "", newurl);
  }
}
