import { CartItemInput } from "../../contexts/CartContext/types";

export function createItemEvent(item: CartItemInput) {
  const selectedOptions = item.selectedOptions.map((i) => i?.value).join("/");
  return {
    variant: selectedOptions,
    content_type: "product",
    content_ids: [item.variantId],
    content_name: item.title + " - " + selectedOptions,
    num_items: item.quantity || 1,
    value: item.price.amount,
    currency: item.price.currencyCode,
    sku: item.sku || "",
    imgSrc: item.img || "",
    collectionNames: item.collectionNames,
    handle: item.handle,
    customerId: item?.customerId,
  };
}
