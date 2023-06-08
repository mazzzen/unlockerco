import * as React from "react";
import { FormattedMessage } from "react-intl";
import { DiscountPrice, Price } from "../../Price";
import { FlexRow, P } from "../../../shared/globals";
import { Cancel, EmptyCartMob } from "../../../assets/Icons";
import {
  FullWidth,
  ProductTitle,
  ProductPrice,
  SelectedOptions,
  ItemHolder,
  ImgContainer,
  ItemInfo,
  TransparentButton,
} from "./styled";
import SideCartItemQty from "./SideCartItemQty";
import { Badge } from "../../Badge/Badge";
import { CartItem } from "../../../contexts/CartContext/types";
import { useCart } from "../../../contexts/CartContext";
import { StyledImg } from "../styled";

interface SideCartSingleItemProps {
  item: CartItem;
}

const SideCartSingleItem: React.FC<SideCartSingleItemProps> = ({ item }) => {
  const { removeCartItem } = useCart();
  const buyXGetYTitle = item?.automaticDiscount?.title;
  const isCustomProductDiscount = !!(
    item.buildData?.discount?.percent || item.buildData?.discount?.fixed
  );
  const isBuyXGetYDiscountApplied =
    !!item?.automaticDiscount?.itemDiscount?.amount;

  return (
    <ItemHolder data-test="cart-item" key={item.variantId}>
      <FullWidth>
        <FlexRow>
          <ImgContainer>
            {!item.img ? (
              <EmptyCartMob />
            ) : (
              <StyledImg
                data-test="item-image"
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="contain"
              />
            )}
          </ImgContainer>
          <ItemInfo alignItems="baseline">
            {isCustomProductDiscount && (
              <Badge discount={item.buildData?.discount} />
            )}
            {isBuyXGetYDiscountApplied && (
              <Badge buyXGetYDiscountTitle={buyXGetYTitle} />
            )}
            <a title={item.title}>
              <ProductTitle data-test="text-item-title">
                {item.title}
              </ProductTitle>
            </a>
            <SelectedOptions>
              {item.selectedOptions?.map((option) => option.value).join(" / ")}
            </SelectedOptions>
            {!!item?.sku && (
              <P size="12px" style={{ fontStyle: "italic" }}>
                <FormattedMessage
                  defaultMessage="SKU: {sku}"
                  values={{ sku: item?.sku }}
                />
              </P>
            )}
            <ProductPrice data-test="item-price">
              {(isBuyXGetYDiscountApplied || isCustomProductDiscount) && (
                <DiscountPrice money={item.subtotal} />
              )}
              <Price money={item.totalPrice} />
            </ProductPrice>
          </ItemInfo>
        </FlexRow>
        <TransparentButton
          data-test="button-remove-item"
          type="button"
          onClick={() => removeCartItem(item.variantId)}
        >
          <Cancel />
        </TransparentButton>
      </FullWidth>
      <SideCartItemQty key={item.variantId} item={item} />
    </ItemHolder>
  );
};

export default SideCartSingleItem;
