import { FormattedMessage } from "react-intl";
import { Cancel, EmptyCartMob } from "../../assets/Icons";
import { ErrorCode } from "../../generated/graphql";
import { FlexRow } from "../../shared/globals";
import Alert from "../../shared/globals/UiElements/Alert";
import { subtractMoney } from "../../shared/utils/money";
import CartSummaryPanel from "../../templates/default/components/customComponents/CartSummaryPanel";
import { Badge } from "../Badge/Badge";
import { DefaultTextPrice, DiscountPrice, Price } from "../Price";
import { QuantityInput } from "../QuantityInput";
import {
  HR,
  IconToButton,
  ImgContainer,
  ItemInfo,
  PriceWrapper,
  SelectedOptions,
  StyledH3,
  StyledImg,
  StyledNonDiscountedVariants,
  StyledNumber,
  StyledTD,
} from "./styled";
import { CartItemChildrenProps } from "./types";

const CartItemDesktop = ({
  item,
  buyXGetYTitle,
  isCustomProductDiscount,
  isBuyXGetYDiscountApplied,
  discountedItemsCount,
  nonDiscountedItemsCount,
  isAllItemsDiscounted,
  itemDiscount,
  itemErrors,
  value,
  setValue,
  isAlertOpen,
  setIsAlertOpen,
  onQuantityChange,
  onRemoveCartItem,
}: CartItemChildrenProps) => {
  const isNotActive = !!itemErrors?.find(
    (error) =>
      error.code === ErrorCode.ProductNotActive ||
      error.code === ErrorCode.ProductNotAvailable ||
      error.code === ErrorCode.ProductNotFound
  );

  return (
    <>
      <tr>
        <StyledTD>
          <FlexRow>
            <ImgContainer>
              {!item.img ? (
                <EmptyCartMob />
              ) : (
                <StyledImg
                  src={item.img}
                  alt={item.title}
                  objectFit="contain"
                />
              )}
            </ImgContainer>
            <ItemInfo alignItems="flex-start">
              {isCustomProductDiscount && (
                <Badge discount={item.buildData?.discount} />
              )}
              {isBuyXGetYDiscountApplied && (
                <Badge buyXGetYDiscountTitle={buyXGetYTitle} />
              )}
              <a title={item.title}>
                <StyledH3>{item.title}</StyledH3>
              </a>
              {item?.variantId?.startsWith?.("build") && (
                <CartSummaryPanel
                  buildId={item.variantId}
                  isDiscount={isCustomProductDiscount}
                  productDiscount={item.buildData?.discount}
                />
              )}
              <SelectedOptions>
                {!!item?.sku && (
                  <FormattedMessage
                    defaultMessage="SKU: {sku}"
                    values={{ sku: item?.sku }}
                  />
                )}
                <div>
                  {isBuyXGetYDiscountApplied && !isAllItemsDiscounted && (
                    <span>{discountedItemsCount}x </span>
                  )}
                  {item.selectedOptions
                    ?.map((option) => option.value)
                    .join(" / ")}
                </div>
              </SelectedOptions>
            </ItemInfo>
          </FlexRow>
          {isBuyXGetYDiscountApplied && !isAllItemsDiscounted && (
            <StyledNonDiscountedVariants>
              <FlexRow>
                <StyledNumber>{nonDiscountedItemsCount}x</StyledNumber>
                <StyledH3>
                  {item.selectedOptions
                    ?.map((option) => option.value)
                    .join(" / ")}
                </StyledH3>
              </FlexRow>
              <PriceWrapper>
                <DefaultTextPrice money={item.price} />
              </PriceWrapper>
            </StyledNonDiscountedVariants>
          )}
        </StyledTD>
        <StyledTD>
          <PriceWrapper style={{ opacity: isNotActive ? 0.5 : 1 }}>
            {(isBuyXGetYDiscountApplied || isCustomProductDiscount) && (
              <DiscountPrice style={{ fontWeight: 500 }} money={item.price} />
            )}
            <DefaultTextPrice
              money={subtractMoney(item?.price, itemDiscount)}
            />
          </PriceWrapper>
        </StyledTD>
        <StyledTD style={{ position: "relative" }}>
          <QuantityInput
            max={item.availableQuantity?.max}
            value={item.quantity}
            onChange={(value) => {
              setValue(value);
              onQuantityChange(value);
            }}
            disabled={isNotActive}
          />
          {(item?.notAvailable || isAlertOpen) && (
            <Alert
              message={
                value > item.availableQuantity?.max! ? (
                  <FormattedMessage defaultMessage="Quantity exceeded" />
                ) : (
                  <FormattedMessage
                    defaultMessage="Minimum quantity per order {min}. You can add up to {max} per order"
                    values={{
                      min: item?.availableQuantity?.min,
                      max: item?.availableQuantity?.max,
                    }}
                  />
                )
              }
              style={{ position: "absolute" }}
              closeAction={() => setIsAlertOpen(false)}
            />
          )}
        </StyledTD>
        <StyledTD>
          <PriceWrapper style={{ opacity: isNotActive ? 0.5 : 1 }}>
            {(isBuyXGetYDiscountApplied || isCustomProductDiscount) && (
              <DiscountPrice
                style={{ fontWeight: 500 }}
                money={item.subtotal}
              />
            )}
            <Price money={item?.totalPrice} />
          </PriceWrapper>
        </StyledTD>
        <StyledTD>
          <IconToButton
            type="button"
            onClick={() => onRemoveCartItem(item.variantId)}
          >
            <Cancel />
          </IconToButton>
        </StyledTD>
      </tr>
      {itemErrors?.map((itemError, i) => (
        <tr key={i}>
          <td colSpan={5} style={{ paddingTop: 5 }}>
            <Alert
              type={
                itemError.code === ErrorCode.PriceChanged ? "warn" : undefined
              }
              message={itemError.message}
            />
          </td>
        </tr>
      ))}
      <tr>
        <td colSpan={5} style={{ paddingTop: 15 }}>
          <HR />
        </td>
      </tr>
    </>
  );
};

export default CartItemDesktop;
