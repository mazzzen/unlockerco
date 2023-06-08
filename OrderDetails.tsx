import React, { useState } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import styled, { css } from "styled-components";
import {
  LeftSmallArrow,
  MyReviewsIcon,
  TruckIcon,
} from "../../../../assets/Icons";
import {
  CustomItem,
  DiscountAppliedOnType,
  useGetOrderByIdQuery,
  OrderInfoFragment,
  OrderPaymentStatusEnum,
  FulfillStatusEnum,
} from "../../../../generated/graphql";
import { Link } from "../../../../lib/i18n";
import { useStore } from "../../../../lib/storeData";
import { Card, FlexCol, FlexRow, H4, H5, H6 } from "../../../../shared/globals";
import Badge from "../../../../shared/globals/UiElements/Badge";
import LoadingSpinner from "../../../../shared/globals/UiElements/LoadingSpinner";
import { rtl, themeColor } from "../../../../shared/styles-utils";
import { subtractMoney } from "../../../../shared/utils/money";
import SummaryPanel from "../../../../templates/default/components/customComponents/SummaryPanel";
import type { CartBuildData } from "../../../../templates/types";
import { PrimaryButton } from "../../../Button";
import { DefaultTextPrice, Price, DiscountPrice } from "../../../Price";
import ItemImg from "./components/ItemImg";
import ReviewButton from "./components/ReviewButton";
import { StyledButton } from "./components/ReviewStyles";

interface OrderDetailsProps {
  orderId: string;
}

interface ItemPriceAndQtyProps {
  item?: OrderInfoFragment["items"][0] | null;
}

const ItemPriceAndQty: React.FC<ItemPriceAndQtyProps> = ({ item }) => {
  const isBuyXGetYDiscountApplied = !!item?.discount?.perItem?.amount!;
  const itemDiscount = item?.discount?.perItem;
  const priceBeforeDiscount = item?.price;
  const priceAfterDiscount = subtractMoney(item?.price!, itemDiscount);
  const discountedItemsCount = item?.discount?.quantity || 0;
  const nonDiscountedItemsCount = item?.quantity! - discountedItemsCount;
  const isAllItemsDiscounted = item?.quantity! === discountedItemsCount;

  return (
    <>
      <GridCell>
        <FlexCol alignItems="start">
          {isBuyXGetYDiscountApplied && (
            <div>
              <DiscountPrice money={priceBeforeDiscount} />
              <PriceCell money={priceAfterDiscount} />
            </div>
          )}

          {!isAllItemsDiscounted && <PriceCell money={priceBeforeDiscount} />}
        </FlexCol>
      </GridCell>
      <GridCell>
        <GridCell>
          <FlexCol alignItems="start">
            {isBuyXGetYDiscountApplied && (
              <span> x {discountedItemsCount}</span>
            )}
            {!isAllItemsDiscounted && <span> x {nonDiscountedItemsCount}</span>}
          </FlexCol>
        </GridCell>
      </GridCell>
    </>
  );
};
const OrderDetails = ({ orderId }: OrderDetailsProps) => {
  const { storeId, areReviewsActivated } = useStore();
  const { data, loading } = useGetOrderByIdQuery({
    variables: { storeId, orderId },
  });
  const formattedOrderStatus = {
    [OrderPaymentStatusEnum.Paid]: <FormattedMessage defaultMessage="Paid" />,
    [OrderPaymentStatusEnum.Pending]: (
      <FormattedMessage defaultMessage="Pending" />
    ),
    [OrderPaymentStatusEnum.Refunded]: (
      <FormattedMessage defaultMessage="Refunded" />
    ),
    unknown: <FormattedMessage defaultMessage="Unknown" />,
  };

  const formattedFulfillmentOrderStatus = {
    [FulfillStatusEnum.Fulfilled]: (
      <FormattedMessage defaultMessage="Fulfilled" />
    ),
    [FulfillStatusEnum.PartiallyFulfilled]: (
      <FormattedMessage defaultMessage="Partially Fulfilled" />
    ),
    [FulfillStatusEnum.Unfulfilled]: (
      <FormattedMessage defaultMessage="Unfulfilled" />
    ),
    unknown: <FormattedMessage defaultMessage="Unknown" />,
  };
  const order = data?.order;

  const isShippingDiscount = !!order?.discounts?.find(
    (discount) => discount?.appliedOn === DiscountAppliedOnType.Shipping
  );

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <HeaderContainer>
        <div>
          <StyledLink>
            <Link href={`/me/my-orders/`}>
              <NavigateBack>
                <FlipOnRtl>
                  <LeftSmallArrow />
                </FlipOnRtl>
                <H5>
                  <FormattedMessage defaultMessage="Order History" />
                </H5>
              </NavigateBack>
            </Link>
          </StyledLink>
          <OrderHeader>
            <FormattedMessage defaultMessage="Order" /> #
            <FormattedNumber
              value={+order?.orderSerial!}
              minimumIntegerDigits={4}
              notation={+order?.orderSerial! < 1000 ? "compact" : "standard"}
            />
          </OrderHeader>
        </div>
        {order?.shippingDetails?.trackingURL && (
          <PrimaryButton
            href={order?.shippingDetails?.trackingURL}
            target="_blank"
          >
            <TruckIcon />
            <FormattedMessage defaultMessage="Track Shipment" />
          </PrimaryButton>
        )}
      </HeaderContainer>
      <Card paddingSize="none">
        <div style={{ overflowX: "auto" }}>
          <GridContainerHeader>
            <GridCell>
              <FormattedMessage defaultMessage="Product" />
            </GridCell>
            <GridCell>
              <FormattedMessage defaultMessage="Price" />
            </GridCell>
            <GridCell>
              <FormattedMessage defaultMessage="Qty." />
            </GridCell>
            <GridCell>
              <FormattedMessage defaultMessage="Total" />
            </GridCell>
          </GridContainerHeader>
          {order?.items?.map((item) => {
            const reviewsArrayByProductIds = order?.reviews?.map(
              (review) => review?.productId
            );
            const isItemReviewed = reviewsArrayByProductIds.includes(
              item?.productSnapshot?.id!
            );

            return (
              <GridContainerBody key={item?.id}>
                <FlexRow spacing="s">
                  <ItemImg imgDetails={item?.productSnapshot?.images?.[0]!} />
                  <ItemCell alignItems="flex-start">
                    <ItemTitle fontWeight="bold">{item?.title}</ItemTitle>
                    {item?.__typename === "SimpleItem" ? (
                      <>
                        <ItemVariants>
                          {item?.selectedOptions
                            ?.map((option) => option?.value)
                            .join(" / ")}
                        </ItemVariants>
                        {item?.variantSnapshot?.sku ? (
                          <H6 color="secondary">
                            <FormattedMessage
                              defaultMessage="SKU: {sku}"
                              values={{ sku: item?.variantSnapshot?.sku }}
                            />
                          </H6>
                        ) : null}
                      </>
                    ) : (
                      <ItemVariants>
                        <CustomItemDetails item={item as CustomItem} />
                      </ItemVariants>
                    )}
                  </ItemCell>
                </FlexRow>
                <ItemPriceAndQty item={item} />
                <TotalPrice
                  money={{
                    currencyCode: item?.subtotal?.currencyCode!,
                    amount:
                      item?.subtotal?.amount! -
                      (item?.discount?.total?.amount || 0),
                  }}
                />
                {item?.__typename === "SimpleItem" && areReviewsActivated && (
                  <>
                    {isItemReviewed ? (
                      <Badge
                        label={<FormattedMessage defaultMessage="✔ Reviewed" />}
                      />
                    ) : (
                      <ReviewButton
                        orderId={order?.id}
                        product={{
                          id: item?.productSnapshot?.id!,
                          title: item?.title!,
                          images: item?.productSnapshot?.images!,
                        }}
                        buttonComponent={
                          <StyledButton prefixIcon={<MyReviewsIcon />} outlined>
                            <FormattedMessage defaultMessage="Review" />
                          </StyledButton>
                        }
                      />
                    )}
                  </>
                )}
              </GridContainerBody>
            );
          })}
        </div>
        <GridContainerRestInfo>
          <RestInfo>
            <RestInfoRow>
              <H4 fontWeight="bold">
                <FormattedMessage defaultMessage="Subtotal" />
              </H4>
              <PriceCell
                money={order?.receipt?.subtotal}
                style={{ fontSize: 14, opacity: 0.8 }}
              />
            </RestInfoRow>
            {!!order?.receipt?.automaticDiscount?.amount && (
              <RestInfoRow>
                <H4 fontWeight="bold">
                  <FormattedMessage defaultMessage="Discount" />
                </H4>
                <PriceCell
                  money={order?.receipt?.automaticDiscount}
                  style={{ fontSize: 14, opacity: 0.8 }}
                />
              </RestInfoRow>
            )}
            {order?.receipt?.discount?.amount ? (
              <RestInfoRow>
                <H4 fontWeight="bold">
                  <FormattedMessage defaultMessage="Coupon" />{" "}
                  <small style={{ fontWeight: "normal" }}>
                    ({order?.promoCodeSnapshot?.percentageOff}%)
                  </small>
                </H4>
                <DiscountDiv>
                  -{" "}
                  <PriceCell
                    money={order?.receipt?.discount}
                    style={{ fontSize: 14, opacity: 0.8, color: "#42ab43" }}
                  />
                </DiscountDiv>
              </RestInfoRow>
            ) : null}
            {order?.receipt?.tax?.amount ? (
              <RestInfoRow>
                <H4 fontWeight="bold">
                  <FormattedMessage defaultMessage="Tax" />{" "}
                  <small style={{ fontWeight: "normal" }}>
                    ({order?.taxSnapshot?.percentageOff}%)
                  </small>
                </H4>
                <PriceCell
                  money={order?.receipt?.tax}
                  style={{ fontSize: 14, opacity: 0.8 }}
                />
              </RestInfoRow>
            ) : null}
            <RestInfoRow style={{ marginBottom: 0 }}>
              <H4 fontWeight="bold">
                <FormattedMessage defaultMessage="Shipping" />{" "}
                <small style={{ fontWeight: "normal" }}>
                  ({order?.shippingRateName})
                </small>
              </H4>
              <ShippingNotes isShippingDiscount={isShippingDiscount}>
                {!order?.shippingRateCost?.amount ? (
                  <FormattedMessage defaultMessage="Free Shipping" />
                ) : (
                  <PriceCell
                    money={order?.shippingRateCost}
                    style={{ fontSize: 14 }}
                  />
                )}
              </ShippingNotes>
            </RestInfoRow>
            {isShippingDiscount && (
              <RestInfoRow id="appliedDiscount">
                <H4 />
                <DiscountDiv>
                  {!order?.receipt?.shipping?.amount ? (
                    <div
                      style={{ fontSize: 14, opacity: 0.8, color: "#42ab43" }}
                    >
                      <FormattedMessage defaultMessage="Free Shipping" />
                    </div>
                  ) : (
                    <PriceCell
                      money={order?.receipt?.shipping}
                      style={{ fontSize: 14, opacity: 0.8, color: "#42ab43" }}
                    />
                  )}
                </DiscountDiv>
              </RestInfoRow>
            )}
            <RestInfoRow>
              <H4 fontWeight="bold">
                <FormattedMessage defaultMessage="TOTAL" />
              </H4>
              <Price money={order?.receipt?.total} style={{ fontSize: 20 }} />
            </RestInfoRow>
          </RestInfo>
        </GridContainerRestInfo>
      </Card>

      <PaymentShippingInfo>
        <StyledFlexRow alignItems="flex-start">
          <FlexCol alignItems="flex-start" flexGrow={1} margin="0 0 10px 0">
            <H4Title>
              <FormattedMessage defaultMessage="Payment Status" />
            </H4Title>
            <H4>
              {formattedOrderStatus[order?.paymentStatus ?? "unknown"] ??
                order?.paymentStatus}
            </H4>
          </FlexCol>
          <FlexCol alignItems="flex-start" flexGrow={1} margin="0 0 10px 0">
            <H4Title>
              <FormattedMessage defaultMessage="Fulfillment Status" />
            </H4Title>
            <H4>
              {formattedFulfillmentOrderStatus[
                order?.fulfillmentStatus ?? "unknown"
              ] ?? order?.fulfillmentStatus}
            </H4>
          </FlexCol>
        </StyledFlexRow>

        <StyledFlexRow alignItems="flex-start">
          <FlexCol alignItems="flex-start" flexGrow={1} margin="0 0 10px 0">
            <H4Title>
              <FormattedMessage defaultMessage="Shipping address" />
            </H4Title>
            <H4>{order?.customer?.name}</H4>
            <H4>{order?.shippingAddress?.addressLine1}</H4>
            <H4>{order?.shippingAddress?.addressLine2}</H4>
            <H4>{order?.shippingAddress?.postalCode}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.regionName}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.cityName}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.stateName}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.countryName}</H4>
            <H4>{order?.customer?.phone}</H4>
          </FlexCol>

          <FlexCol alignItems="flex-start" flexGrow={1} margin="0 0 10px 0">
            <H4Title>
              <FormattedMessage defaultMessage="Billing address" />
            </H4Title>
            <H4>{order?.customer?.name}</H4>
            <H4>{order?.billingAddress?.addressLine1}</H4>
            <H4>{order?.billingAddress?.addressLine2}</H4>
            <H4>{order?.billingAddress.postalCode}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.regionName}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.cityName}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.stateName}</H4>
            <H4>{order?.shippingAddress?.areaSnapshot?.countryName}</H4>
            <H4>{order?.customer?.phone}</H4>
          </FlexCol>
        </StyledFlexRow>
      </PaymentShippingInfo>
    </>
  );
};

export { OrderDetails };

const CustomItemDetails = ({ item }: { item: CustomItem }) => {
  const [show, setShow] = useState(false);

  if (item?.__typename !== "CustomItem") {
    return null;
  }

  const buildState = prepareSummaryPanelData(item);

  return (
    <div>
      <PrimaryButton
        reversed
        transparent
        compact
        style={{ textDecoration: "underline" }}
        onClick={() => setShow(true)}
      >
        <FormattedMessage defaultMessage="See Details" />
      </PrimaryButton>
      <SummaryPanel
        isOpen={show}
        hideButtons
        onClose={() => setShow(false)}
        buildState={buildState}
        productDiscount={{
          percent: item.discount?.info?.percentage,
          fixed: item.discount?.info?.fixed,
        }}
        isDiscount
      />
    </div>
  );
};

function getImage(selectedVariant) {
  return (
    selectedVariant.variantSnapshot.image?.src ||
    selectedVariant.variantSnapshot.productImages?.[0]?.src
  );
}

function getSelectedOptions(selectedVariant) {
  return selectedVariant.selectedOptions.map((option) => ({
    option: { id: option?.name, name: option?.name },
    value: { id: option?.value, name: option?.value },
  }));
}

function prepareSummaryPanelData(item: CustomItem): CartBuildData | null {
  if (item?.__typename !== "CustomItem") {
    return null;
  }
  const buildCategories = item?.categories?.map((category) => {
    const selectedVariantsForEachCategory = category.selectedVariants.map(
      (selectedVariant) => ({
        imageSrc: getImage(selectedVariant) || "",
        maxQuantity:
          selectedVariant.variantSnapshot?.quantity || Number.POSITIVE_INFINITY,
        price: selectedVariant.price!,
        productId: selectedVariant.variantSnapshot?.productId!,
        quantity: selectedVariant.quantity!,
        selectedOptions: getSelectedOptions(selectedVariant),
        title: selectedVariant.variantSnapshot?.productTitle!,
        id: selectedVariant.variantSnapshot?.id!,
      })
    );
    return {
      selectedVariants: selectedVariantsForEachCategory,
      id: category.category.id,
      name: category.category.name,
      imageSrc: category.category.image?.src,
      type: category.category.categoryType,
    };
  });

  return {
    id: item?.productSnapshot?.id!,
    handle: item?.productSnapshot?.handle!,
    buildId: null,
    title: item?.productSnapshot?.title!,
    imageSrc: item?.productSnapshot?.images?.[0]?.src,
    subtotal: item?.price?.amount! - (item?.discount?.perItem?.amount || 0),
    subtotalBeforeDiscount: item?.price?.amount!,
    categories: buildCategories,
  };
}

const StyledLink = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const NavigateBack = styled(FlexRow)`
  color: ${themeColor("primary")};
  cursor: pointer;
  & > h5 {
    margin-inline-start: 5px;
    color: ${themeColor("primary")};
  }
`;
const FlipOnRtl = styled.div`
  transform: ${rtl(`rotate(180deg);`, "")};
`;

const OrderHeader = styled(FlexRow)`
  margin-top: 11px;
  font-weight: bold;
`;

const GridContainerBody = styled.div`
  display: grid;
  grid-template-columns: 35% 15% 15% 15% auto;
  padding: 20px;
  gap: 10px;
  border-bottom: solid 1px #dfe4e8;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 40% 20% 10% 20% auto;
  }
`;

const GridContainerHeader = styled(GridContainerBody)`
  & > h5 {
    color: ${({ theme }) => theme.text.default}80;
  }
`;

const GridCell = styled(H5)`
  margin: auto 0;
`;

const ItemCell = styled(FlexCol)`
  margin: auto 0;
`;

const ItemTitle = styled(H4)`
  color: ${themeColor("primary")};
`;

const ItemVariants = styled(H5)`
  opacity: 0.5;
`;

const PriceCell = styled(DefaultTextPrice)`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  margin: auto 0;
`;

const TotalPrice = styled(PriceCell)`
  font-weight: bold;
`;

const GridContainerRestInfo = styled.div`
  padding: 20px;
  background-color: ${themeColor("backgroundReverse")};
  border-radius: 3px;
`;

const RestInfo = styled(FlexCol)``;

const RestInfoRow = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }

  &:nth-last-child(2) {
    padding-bottom: 20px;
    border-bottom: 1px solid #dfe4e8;
  }
`;

const DiscountDiv = styled(H4)`
  color: #42ab43;
`;

const ShippingNotes = styled(H4)<{ isShippingDiscount: boolean }>`
  opacity: 0.8;
  ${({ isShippingDiscount }) =>
    isShippingDiscount &&
    css`
      text-decoration: line-through;
    `}
`;

const StyledFlexRow = styled(FlexRow)`
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PaymentShippingInfo = styled.div`
  padding: 20px 0;
`;

const H4Title = styled(H4)`
  opacity: 0.5;
  margin-bottom: 8px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
  svg {
    margin-inline-end: 0.5rem;
  }
`;
