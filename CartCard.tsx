import { FormattedMessage } from "react-intl";
import {
  RightArrow,
  ShoppingBag,
  ShoppingCartPromotionIcon,
} from "../../assets/Icons";
import useCheckout from "../../contexts/CartContext/useCheckout";
import { Link } from "../../lib/i18n";
import { FlexCol, FlexRow } from "../../shared/globals";
import { subtractMoney } from "../../shared/utils/money";
import { StyledShippingDiscountBadge } from "../Checkout/CheckoutCart/styled";
import { DefaultTextPrice, Price } from "../Price";
import Coupon from "../UtilityComponents/Coupon";
import {
  BorderBottom,
  CartHolder,
  CartPanel,
  CheckoutButton,
  FullWidth,
  HeavyH4,
  LightH4,
  LightH4ForDiscount,
  StyledH2,
  StyledH3WithMargin,
  StyledH4,
  StyledH5,
} from "./styled";

const CartCard = () => {
  const { checkout } = useCheckout();
  const isShippingDiscount = !!checkout?.shippingDiscount;
  const isFreeShippingDiscount = checkout?.shippingDiscount?.percentage === 100;

  return (
    <CartHolder>
      <CartPanel>
        <BorderBottom>
          <FlexRow>
            <ShoppingBag />
            <StyledH3WithMargin>
              <FormattedMessage defaultMessage="Cart Totals" />
            </StyledH3WithMargin>
          </FlexRow>
        </BorderBottom>
        <BorderBottom>
          <Coupon />
        </BorderBottom>
        <BorderBottom>
          <FullWidth style={{ marginBottom: 10 }}>
            <HeavyH4>
              <FormattedMessage defaultMessage="Subtotal" />
            </HeavyH4>
            <LightH4>
              <DefaultTextPrice money={checkout?.receipt?.subtotal} />
            </LightH4>
          </FullWidth>
          {(checkout?.meta?.isBuyXGetYDiscount ||
            checkout?.meta?.isCustomDiscount) && (
            <FullWidth style={{ marginBottom: 10 }}>
              <HeavyH4>
                <FormattedMessage defaultMessage="Discount" />
              </HeavyH4>
              <LightH4>
                -{" "}
                <DefaultTextPrice
                  money={checkout?.receipt?.automaticDiscount}
                />
              </LightH4>
            </FullWidth>
          )}
          <FullWidth style={{ marginBottom: 10 }}>
            <HeavyH4>
              <FormattedMessage defaultMessage="Coupon" />
            </HeavyH4>
            {checkout?.receipt?.couponDiscount?.amount! > 0 ? (
              <LightH4ForDiscount>
                -
                <DefaultTextPrice
                  money={checkout?.receipt?.couponDiscount}
                />{" "}
                (-{checkout?.coupon?.percentageOff}%)
              </LightH4ForDiscount>
            ) : (
              <LightH4>
                <DefaultTextPrice money={checkout?.receipt?.couponDiscount} />
              </LightH4>
            )}
          </FullWidth>
          {!!checkout?.tax?.percentageOff && (
            <FullWidth style={{ marginBottom: 10 }}>
              <HeavyH4>
                <FormattedMessage
                  defaultMessage="Tax {percentageOff}"
                  values={{
                    percentageOff: (
                      <small>({checkout?.tax?.percentageOff}%)</small>
                    ),
                  }}
                />
              </HeavyH4>
              <LightH4>
                + <DefaultTextPrice money={checkout?.receipt?.tax} />
              </LightH4>
            </FullWidth>
          )}
          {isShippingDiscount && (
            <StyledShippingDiscountBadge>
              <ShoppingCartPromotionIcon />
              {checkout?.shippingDiscount?.title}
            </StyledShippingDiscountBadge>
          )}
        </BorderBottom>
        <BorderBottom>
          <FullWidth style={{ alignItems: "flex-start" }}>
            <StyledH5 style={{ lineHeight: 2 }}>
              <FormattedMessage defaultMessage="Total" />
            </StyledH5>
            <FlexCol alignItems="flex-end">
              <StyledH2>
                <Price
                  money={subtractMoney(
                    checkout?.receipt?.total!,
                    checkout?.receipt?.shipping
                  )}
                />
              </StyledH2>
              {isFreeShippingDiscount && (
                <FormattedMessage defaultMessage="+ Shipping" />
              )}
            </FlexCol>
          </FullWidth>
        </BorderBottom>
        <Link
          href={!checkout?.meta?.isAllItemsAvailable ? "" : "/checkout"}
          fullWidth
        >
          <CheckoutButton
            suffixIcon={<RightArrow />}
            disabled={!checkout?.meta?.isAllItemsAvailable}
            loadOnRouteChange
            to="checkout"
          >
            <FormattedMessage defaultMessage="Checkout" />
          </CheckoutButton>
        </Link>
      </CartPanel>
      <Link href="/shop">
        <StyledH4 style={{ cursor: "pointer" }}>
          <FormattedMessage defaultMessage="Continue Shopping" />
        </StyledH4>
      </Link>
    </CartHolder>
  );
};

export default CartCard;
