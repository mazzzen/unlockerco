import { StorageData } from "../../templates/types";

export function parseSearchQuery(search: string): StorageData {
  if (!search) {
    return undefined as any;
  }
  const searchWithoutQueryMark = search.split("?")[1];

  const parsed = searchWithoutQueryMark.split("|").map((category) => {
    const [id, variantsString] = category.split("_");
    const selectedVariants = variantsString
      ? variantsString.split(":").map((variantString) => {
          const [id, quantity] = variantString.split("+");
          return { id: encodeProductVariantId(id), quantity: Number(quantity) };
        })
      : [];
    return { id: encodeCustomProductCategoryId(id), selectedVariants };
  });

  return parsed;
}

export function stringifySearchQuery(search: {
  selections: StorageData;
}): string {
  if (!search || !Object.keys(search)?.length) {
    return "";
  }

  const stringified = search.selections
    .map((currentCategory) => {
      const selectedVariantsString = currentCategory.selectedVariants
        .map((selectedVariant) =>
          [
            decodeProductVariantId(selectedVariant.id),
            selectedVariant.quantity,
          ].join("+")
        )
        .join(":");
      return `${decodeCustomProductCategoryId(
        currentCategory.id
      )}_${selectedVariantsString}`;
    })
    .join("|");

  return stringified;
}

/**
 *
 *
 * Functions
 *
 *
 */

function decodeCustomProductCategoryId(id: string) {
  return id.replace("CustomProductCategory_", "");
}

function decodeProductVariantId(id: string) {
  return id.replace("ProductVariant_", "");
}

function encodeCustomProductCategoryId(id: string) {
  return `CustomProductCategory_${id}`;
}

function encodeProductVariantId(id: string) {
  return `ProductVariant_${id}`;
}
