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
  FlexRowWithMarginBottom,
  FullWidth,
  FullWidthCol,
  IconToButton,
  ImgContainer,
  ItemHolder,
  ItemInfo,
  PriceWrapper,
  SelectedOptions,
  StyledH3,
  StyledH4,
  StyledImg,
  StyledNonDiscountedVariants,
  StyledNumber,
} from "./styled";
import { CartItemChildrenProps } from "./types";

const CartItemMobile = ({
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
  return (
    <ItemHolder>
      <FullWidth>
        <FlexRow>
          <ImgContainer>
            {!item.img ? (
              <EmptyCartMob />
            ) : (
              <StyledImg src={item.img} alt={item.title} objectFit="contain" />
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
            {!!item.buildData && (
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
        <IconToButton
          type="button"
          onClick={() => onRemoveCartItem(item.variantId)}
        >
          <Cancel />
        </IconToButton>
      </FullWidth>
      <FullWidthCol alignItems="flex-start">
        <FlexRowWithMarginBottom alignItems="center">
          <StyledH4>
            <FormattedMessage defaultMessage="Price" />
          </StyledH4>
          <PriceWrapper>
            {(isBuyXGetYDiscountApplied || isCustomProductDiscount) && (
              <DiscountPrice style={{ fontWeight: 500 }} money={item.price} />
            )}
            <DefaultTextPrice
              money={subtractMoney(item?.price, itemDiscount)}
            />
          </PriceWrapper>
        </FlexRowWithMarginBottom>
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
            <PriceWrapper style={{ padding: "0 6px" }}>
              <DefaultTextPrice money={item.price} />
            </PriceWrapper>
          </StyledNonDiscountedVariants>
        )}
        <FlexRowWithMarginBottom>
          <StyledH4>
            <FormattedMessage defaultMessage="Quantity" />
          </StyledH4>
          <QuantityInput
            max={item.availableQuantity?.max}
            value={item.quantity}
            onChange={(value) => {
              setValue(value);
              onQuantityChange(value);
            }}
          />
        </FlexRowWithMarginBottom>
        <FlexRowWithMarginBottom>
          <StyledH4>
            <FormattedMessage defaultMessage="Subtotal" />
          </StyledH4>
          <Price
            money={{
              amount: item.price.amount * item.quantity,
              currencyCode: item.price.currencyCode,
            }}
          />
        </FlexRowWithMarginBottom>
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
            closeAction={() => setIsAlertOpen(false)}
          />
        )}
      </FullWidthCol>
      {itemErrors?.map((itemError, i) => (
        <Alert
          key={i}
          type={itemError.code === ErrorCode.PriceChanged ? "warn" : undefined}
          message={itemError.message}
        />
      ))}
    </ItemHolder>
  );
};

export default CartItemMobile;
