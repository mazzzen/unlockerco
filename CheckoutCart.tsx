import { useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Coupon from "../../UtilityComponents/Coupon";
import { Link, useRouter } from "../../../lib/i18n";
import { useStore } from "../../../lib/storeData";
import { DefaultTextPrice, DiscountPrice, Price } from "../../Price";
import {
  EmptyCartMob,
  ShoppingBag,
  ShoppingCartPromotionIcon,
} from "../../../assets/Icons";
import { FlexRow, FlexCol, H4, P } from "../../../shared/globals";
import {
  Container,
  BorderBottom,
  FullWidth,
  StyledH3WithMargin,
  StyledButton,
  MarginBottom,
  ImgDiv,
  ImgContainer,
  StyledImg,
  QuantitySpan,
  LightH4,
  HeavyH4,
  StyledH2,
  PriceWrapper,
  SelectedOptions,
  LightH4ForDiscount,
  HideOnMobile,
  StyledShippingCost,
  StyledShippingDiscount,
  StyledShippingDiscountBadge,
} from "./styled";
import type { CartItem } from "../../../contexts/CartContext/types";
import { Badge } from "../../Badge/Badge";
import { PrimaryButton } from "../../Button";
import SummaryPanel from "../../../templates/default/components/customComponents/SummaryPanel";
import type { CartBuildData } from "../../../templates/types";
import useCheckout from "../../../contexts/CartContext/useCheckout";
import { StyledNonDiscountedVariants, StyledNumber } from "../../Cart/styled";
import { subtractMoney } from "../../../shared/utils/money";

interface CheckoutCartProps {
  className?: string;
  isOpen?: boolean;
  isMobile?: boolean;
}

export const CheckoutCart = ({
  className,
  isOpen,
  isMobile,
}: CheckoutCartProps) => {
  const { currency: currencyCode } = useStore();
  const { checkout } = useCheckout();
  const router = useRouter();
  const isConfirmationPage =
    checkout?.meta?.activeStepInfo?.name === "Confirmation";
  const buyXGetYTitle = checkout?.items?.find(
    (i) => i?.automaticDiscount?.title
  )?.automaticDiscount?.title;

  const cartContent = (
    <>
      <BorderBottom>
        <FlexRow justifyContent="space-between" style={{ width: "auto" }}>
          <FlexRow>
            <ShoppingBag />
            <StyledH3WithMargin>
              <FormattedMessage defaultMessage="Your Order" />
            </StyledH3WithMargin>
          </FlexRow>
          <Link href="/cart">
            <StyledButton>
              <FormattedMessage defaultMessage="View Cart" />
            </StyledButton>
          </Link>
        </FlexRow>
      </BorderBottom>
      {!isConfirmationPage && !router.route.includes("/payment") && (
        <BorderBottom>
          <HideOnMobile>
            <Coupon />
          </HideOnMobile>
        </BorderBottom>
      )}
      <BorderBottom>
        {checkout?.items?.map((item, index) => {
          const isCustomProductDiscount = !!(
            item.buildData?.discount?.percent || item.buildData?.discount?.fixed
          );
          const isBuyXGetYDiscountApplied =
            !!item?.automaticDiscount?.itemDiscount?.amount;
          const discountedItemsCount = item?.automaticDiscount?.quantity || 0;
          const nonDiscountedItemsCount = item?.quantity - discountedItemsCount;
          const isAllItemsDiscounted = nonDiscountedItemsCount === 0;

          return (
            <MarginBottom key={index}>
              <FlexRow spacing="m">
                <ImgDiv>
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
                  <QuantitySpan>{item.quantity}</QuantitySpan>
                </ImgDiv>
                <FlexCol alignItems="flex-start">
                  {isCustomProductDiscount && (
                    <Badge discount={item.buildData?.discount} />
                  )}
                  {isBuyXGetYDiscountApplied && (
                    <Badge buyXGetYDiscountTitle={buyXGetYTitle} />
                  )}
                  <a title={item.title}>
                    <H4>{item.title}</H4>
                  </a>
                  <CustomItemDetails item={item} />
                  {!!item?.sku && (
                    <P size="12px" style={{ fontStyle: "italic" }}>
                      <FormattedMessage
                        defaultMessage="SKU: {sku}"
                        values={{ sku: item?.sku }}
                      />
                    </P>
                  )}
                  <SelectedOptions>
                    {isBuyXGetYDiscountApplied && !isAllItemsDiscounted && (
                      <span>{discountedItemsCount}x </span>
                    )}
                    {item.selectedOptions
                      ?.map((option: { value: string }) => option.value)
                      .join(" / ")}
                    {isBuyXGetYDiscountApplied && !isAllItemsDiscounted && (
                      <PriceWrapper
                        style={{ padding: "0 6px", display: "inline-block" }}
                      >
                        <DefaultTextPrice
                          money={subtractMoney(
                            item?.price,
                            item?.automaticDiscount?.itemDiscount
                          )}
                        />
                      </PriceWrapper>
                    )}
                  </SelectedOptions>
                  {isBuyXGetYDiscountApplied && !isAllItemsDiscounted && (
                    <StyledNonDiscountedVariants isMobile>
                      <FlexRow>
                        <StyledNumber>{nonDiscountedItemsCount}x</StyledNumber>
                        <SelectedOptions style={{ padding: "0" }}>
                          {item.selectedOptions
                            ?.map((option) => option.value)
                            .join(" / ")}
                        </SelectedOptions>
                      </FlexRow>
                      <PriceWrapper style={{ padding: "0 6px" }}>
                        <DefaultTextPrice money={item.price} />
                      </PriceWrapper>
                    </StyledNonDiscountedVariants>
                  )}
                </FlexCol>
              </FlexRow>
              <PriceWrapper>
                <DefaultTextPrice money={item?.totalPrice} />
                {(isCustomProductDiscount || isBuyXGetYDiscountApplied) && (
                  <DiscountPrice
                    style={{ fontWeight: 500 }}
                    money={item?.subtotal}
                  />
                )}
              </PriceWrapper>
            </MarginBottom>
          );
        })}
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
            <LightH4ForDiscount>
              -{" "}
              <DefaultTextPrice money={checkout?.receipt?.automaticDiscount} />
            </LightH4ForDiscount>
          </FullWidth>
        )}
        <FullWidth style={{ marginBottom: 10 }}>
          <HeavyH4>
            <FormattedMessage defaultMessage="Coupon" />
          </HeavyH4>
          {checkout?.coupon?.percentageOff > 0 ? (
            <LightH4ForDiscount>
              - <DefaultTextPrice money={checkout?.receipt?.couponDiscount} />{" "}
              (-
              {checkout?.coupon?.percentageOff}%)
            </LightH4ForDiscount>
          ) : (
            <LightH4>
              <DefaultTextPrice money={{ amount: 0, currencyCode }} />
            </LightH4>
          )}
        </FullWidth>
        {checkout?.tax?.percentageOff && (
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
        <FullWidth>
          <HeavyH4>
            <FormattedMessage defaultMessage="Shipping" />
          </HeavyH4>
          <StyledShippingCost
            isShippingDiscount={!!checkout?.meta?.isShippingDiscount}
          >
            {checkout?.shippingInfo ? (
              <div>
                {checkout?.shippingInfo?.name} -{" "}
                {checkout?.shippingInfo?.cost?.amount === 0 ? (
                  <FormattedMessage defaultMessage="Free Shipping" />
                ) : (
                  <DefaultTextPrice money={checkout?.shippingInfo?.cost} />
                )}
              </div>
            ) : (
              <FormattedMessage defaultMessage="To be calculated" />
            )}
          </StyledShippingCost>
        </FullWidth>
        {checkout?.meta?.isShippingDiscount && (
          <StyledShippingDiscount>
            {!!checkout?.shippingInfo?.cost?.amount && (
              <LightH4ForDiscount>
                {checkout?.receipt?.shipping?.amount === 0 ? (
                  <FormattedMessage defaultMessage="Free Shipping" />
                ) : (
                  <DefaultTextPrice money={checkout?.receipt?.shipping} />
                )}
              </LightH4ForDiscount>
            )}
            <StyledShippingDiscountBadge>
              <ShoppingCartPromotionIcon />
              {checkout?.shippingDiscount?.title}
            </StyledShippingDiscountBadge>
          </StyledShippingDiscount>
        )}
      </BorderBottom>
      <BorderBottom>
        <FullWidth style={{ alignItems: "flex-start" }}>
          <HeavyH4>
            <FormattedMessage defaultMessage="TOTAL" />
          </HeavyH4>
          <FlexCol alignItems="flex-end">
            <StyledH2>
              <Price money={checkout?.receipt?.total} />
            </StyledH2>
          </FlexCol>
        </FullWidth>
      </BorderBottom>
    </>
  );

  return (
    <Container className={className} alignItems="flex-start">
      {!isMobile ? cartContent : isOpen ? cartContent : null}
      {isMobile &&
        !isConfirmationPage &&
        !router.route.includes("/payment") && <Coupon />}
    </Container>
  );
};

export const LargeScreensCheckoutCart = styled(CheckoutCart)`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const CustomItemDetails = ({ item }: { item: CartItem }) => {
  const [show, setShow] = useState(false);

  if (!item?.buildData) {
    return null;
  }

  const buildState: CartBuildData = prepareSummaryPanelData(item);

  return (
    <div>
      <PrimaryButton reversed compact onClick={() => setShow((prev) => !prev)}>
        <FormattedMessage defaultMessage="See Details" />
      </PrimaryButton>
      <SummaryPanel
        isOpen={show}
        hideButtons
        onClose={() => setShow(false)}
        buildState={buildState}
        productDiscount={item.buildData?.discount}
        isDiscount
      />
    </div>
  );
};

function prepareSummaryPanelData(item: CartItem): CartBuildData {
  const buildCategories = item?.buildData!.categories?.map((category) => {
    const selectedVariantsForEachCategory = category.selectedVariants?.map(
      (selectedVariant) => ({
        imageSrc: selectedVariant?.imageSrc,
        maxQuantity: selectedVariant.maxQuantity,
        price: selectedVariant.price,
        productId: selectedVariant.productId,
        quantity: selectedVariant.quantity,
        selectedOptions: selectedVariant.selectedOptions,
        title: selectedVariant.title,
        sku: selectedVariant.sku,
        id: selectedVariant.id,
      })
    );
    return {
      selectedVariants: selectedVariantsForEachCategory,
      id: category.id,
      name: category.name,
      imageSrc: category?.imageSrc,
      type: category.type,
    };
  });

  return {
    id: item?.buildData?.id!,
    handle: null,
    buildId: null,
    title: item?.title,
    imageSrc: item?.img || "",
    subtotal: (item?.buildData?.subtotal || 0) * item.quantity,
    subtotalBeforeDiscount:
      (item?.buildData?.subtotalBeforeDiscount || 0) * item.quantity,
    categories: buildCategories,
  };
}
