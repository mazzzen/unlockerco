import React from "react";
import { useCart } from "../contexts/CartContext";
import {
  formatAvailableQuantity,
  isAvailableToAdd,
} from "../contexts/CartContext/reducer/utils";
import type { CartItemInput } from "../contexts/CartContext/types";
import { ProductType, SourceType } from "../generated/graphql";
import { useAuth } from "../lib/Authentication";
import { useRouter } from "../lib/i18n";
import { useStore } from "../lib/storeData";
import { getBuyXGetYDiscountByProduct } from "../shared/utils/buyXGetY";
import type { ProductCardProps } from "../templates/types";
import { computeBuildSubtotal } from "./CustomProductRenderer";
import type { RendererComponent } from "./types";

interface ProductCardRendererProps
  extends RendererComponent<ProductCardProps> {}

const ProductCardRenderer: React.FC<ProductCardRendererProps> = ({
  Component,
  product,
  onlyCardBody,
  isSlider,
}) => {
  const { query } = useRouter();
  const collection = query.collection as string;
  const { cart, toggleSideCart, addToCart } = useCart();
  const { user } = useAuth();
  const { automaticDiscounts } = useStore();

  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const firstVariant = product?.variants?.nodes?.[0];
  const availableQuantity = formatAvailableQuantity(firstVariant);

  const isDiscount = !!(product?.discount?.percent || product?.discount?.fixed);
  const isCustom = product.type === ProductType.Custom;
  const discountedCustomProductPrice = computeBuildSubtotal(product);
  const collectionIds = (product?.collections?.nodes || []).map((i) => i?.id!);
  const collectionNames = (product?.collections?.nodes || []).map(
    (i) => i?.title!
  );
  const buyXGetYDiscount = getBuyXGetYDiscountByProduct(
    automaticDiscounts,
    firstVariant?.id,
    collectionIds,
    isCustom
  );

  const handleAddToCart = () => {
    const newItem: CartItemInput = {
      productId: product.id,
      variantId: firstVariant?.id!,
      title: product.title,
      handle: product?.handle,
      sku: firstVariant?.sku,
      source: product?.integrationProvider?.provider || SourceType.Manual,
      price: firstVariant?.price || product?.initialPrice!,
      quantity: 1,
      availableQuantity,
      img: firstVariant?.image?.src || product?.images?.[0]?.src,
      collectionIds,
      collectionNames,
      buildData: null,
      customDiscount: null,
      selectedOptions: (firstVariant?.selectedOptions || [])?.map((option) => {
        return {
          name: option.option.name!,
          value: option.value.name!,
        };
      }),
      customerId: user?.id!,
    };

    if (isAvailableToAdd(cart?.items, newItem).isAvailable) {
      toggleSideCart();
      addToCart(newItem);
      setIsAlertOpen(false);
      return;
    }

    setIsAlertOpen(true);
  };

  return (
    <Component
      product={product}
      handleAddToCart={handleAddToCart}
      collection={collection}
      isAlertOpen={isAlertOpen}
      setIsAlertOpen={setIsAlertOpen}
      isDiscount={isDiscount}
      discountedCustomProductPrice={discountedCustomProductPrice}
      buyXGetYDiscount={buyXGetYDiscount}
      availableQuantity={availableQuantity}
      onlyCardBody={onlyCardBody}
      isSlider={isSlider}
    />
  );
};

export default ProductCardRenderer;
