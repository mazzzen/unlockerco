import React, { Dispatch, SetStateAction, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";
import { Ok, EmptyCartMob } from "../../../../assets/Icons";
import { Badge } from "../../../../components/Badge/Badge";
import { DefaultTextPrice, DiscountPrice } from "../../../../components/Price";
import { PriceBase } from "../../../../components/Price/Price";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CategoryType } from "../../../../generated/graphql";
import { FlexCol, H5, FlexRow, H6, H4 } from "../../../../shared/globals";
import { Photo } from "../../../../shared/globals/UiElements/Photo";
import { rtl, themeColor } from "../../../../shared/styles-utils";
import type {
  BuildStateCategory,
  BuildStateVariant,
  Variant,
} from "../../../types";

const ColorType = {
  selected: "#166534",
  extra: "#d97706",
  cheaper: "#16A34A",
} as const;

interface VariantItemProps {
  activeCategory: BuildStateCategory;
  variant: BuildStateVariant;
  exceededVariantId?: string;
  setExceededVariantId?: Dispatch<SetStateAction<string>>;
  handleClickVariant?: (variant: Variant) => any;
  handleQuantity?: (variantId: string, newQuantity: number) => void;
}

const VariantItem: React.FC<VariantItemProps> = ({
  variant,
  activeCategory,
  exceededVariantId,
  setExceededVariantId,
  handleClickVariant,
  handleQuantity,
}) => {
  const activeVariants = activeCategory.variants.filter(
    (variant) => variant.variant.isSelected
  );

  const isActiveVariant = (variantId: string) =>
    activeVariants.findIndex(
      (activeVariant) => activeVariant.variant.id === variantId
    ) !== -1;

  const isExceeded = exceededVariantId === variant.variant.id;

  const itemImage =
    variant.variant.image?.src || variant.variant.product?.images?.[0]?.src;

  const isOutOfStock =
    variant?.variant?.trackQuantity && variant?.variant?.quantity === 0;

  useEffect(() => {
    if (isExceeded) {
      window.setTimeout(() => {
        setExceededVariantId?.("");
      }, 4000);
    }
  }, [isExceeded, setExceededVariantId]);
  return (
    <VariantCard
      isActive={variant.variant.isSelected}
      onClick={() => handleClickVariant?.(variant.variant)}
      isExceeded={isExceeded}
      isOutOfStock={isOutOfStock && !variant.variant.isSelected}
    >
      {variant.variant.isSelected && (
        <ActiveIndicator activeCard>
          <CircleContainer
            justifyContent="center"
            active={variant.variant.isSelected}
          >
            <Ok width="10" />
          </CircleContainer>
        </ActiveIndicator>
      )}
      {isOutOfStock && (
        <StockContainer>
          <Badge outOfStock={isOutOfStock} />
        </StockContainer>
      )}
      <ImageContainer>
        {itemImage ? (
          <Photo src={itemImage} alt={itemImage} objectFit="contain" />
        ) : (
          <EmptyCartMob />
        )}
      </ImageContainer>
      <FlexCol
        flexGrow={1}
        alignItems="flex-start"
        justifyContent="space-between"
        style={{ width: "100%" }}
      >
        <VariantTitle fontWeight={500}>
          {variant.variant.product.title}
        </VariantTitle>
        <H5 color="secondary">
          {variant.variant.selectedOptions
            .map((option) => option.value.name)
            .join(" / ")}
        </H5>
        <FlexCol style={{ width: "100%" }}>
          {activeCategory?.settings?.maxQuantity &&
            variant.variant.isSelected && (
              <QuantityInput
                fullWidth
                style={{ margin: "4px 0px" }}
                value={variant.variant.selectedQuantity || 1}
                max={
                  variant.variant.trackQuantity
                    ? variant.variant.quantity!
                    : Number.POSITIVE_INFINITY
                }
                onChange={(value) => {
                  handleQuantity?.(variant.variant.id, value);
                }}
              />
            )}
          <FlexCol alignItems="flex-start" style={{ width: "100%" }}>
            <VariantTag colorType="selected">
              {variant.variant.isSelected && (
                <FormattedMessage defaultMessage="Selected" />
              )}
            </VariantTag>
            {activeCategory.categoryType === CategoryType.Single &&
            !variant.variant.isSelected &&
            activeVariants.length ? (
              <div>
                {activeVariants?.[0]?.variant?.price?.amount <
                variant?.variant?.price?.amount ? (
                  <VariantTag colorType="extra">
                    <FormattedMessage
                      defaultMessage="+ {amount} on total"
                      values={{
                        amount: (
                          <PriceBase
                            money={{
                              amount:
                                variant?.variant?.price?.amount -
                                activeVariants?.[0]?.variant?.price?.amount,
                              currencyCode:
                                variant?.variant?.price?.currencyCode,
                            }}
                          />
                        ),
                      }}
                    />
                  </VariantTag>
                ) : (
                  <VariantTag colorType="cheaper">
                    <FormattedMessage
                      defaultMessage="- {amount} on total"
                      values={{
                        amount: (
                          <PriceBase
                            money={{
                              amount:
                                activeVariants?.[0]?.variant?.price?.amount -
                                variant?.variant?.price?.amount,
                              currencyCode:
                                variant?.variant?.price?.currencyCode,
                            }}
                          />
                        ),
                      }}
                    />
                  </VariantTag>
                )}
              </div>
            ) : null}
            {variant.variant?.compareAtPrice && (
              <StyledDiscountPrice money={variant.variant?.compareAtPrice} />
            )}
            {variant.variant.price.amount === 0 ? (
              <StyledH4
                className={isActiveVariant(variant.variant.id) ? "active" : ""}
              >
                <FormattedMessage defaultMessage="Free" />
              </StyledH4>
            ) : (
              <StyledPrice
                money={variant.variant.price}
                className={isActiveVariant(variant.variant.id) ? "active" : ""}
              />
            )}
          </FlexCol>
        </FlexCol>
      </FlexCol>
    </VariantCard>
  );
};

export default VariantItem;

/**
 *
 * Styles
 *
 */

const VariantCard = styled(FlexCol)<{ isActive; isExceeded; isOutOfStock }>`
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 0 0 47.5%;
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #e5e9eb;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 2px solid #166534;
    `}

  ${({ isExceeded }) =>
    isExceeded &&
    css`
      border: 2px solid #d21c1c;
    `}

  ${({ isOutOfStock }) =>
    isOutOfStock &&
    css`
      cursor: auto;
      pointer-events: none;
      opacity: 0.8;
    `}

  @media (min-width: 768px) {
    width: 160px;
    flex: unset;
    min-width: 160px;
    ${rtl("margin-left", "margin-right")}: 5px;
  }
`;

const ActiveIndicator = styled(FlexRow)<{ activeCard?: boolean }>`
  position: absolute;
  ${rtl("left", "right")}: 15px;

  ${({ activeCard }) =>
    activeCard &&
    css`
      ${rtl("left", "right")}: -6px;
      top: 4px;
    `};

  & > svg {
    color: #d4d4d4;
    transform: ${rtl("rotateY(180deg)", "rotateY(0deg)")};
  }
`;

const StockContainer = styled.div`
  position: absolute;
  top: 5px;
  z-index: 2;
  ${rtl("right", "left")}: 5px;
`;

const CircleContainer = styled(FlexRow)<{ active?: boolean }>`
  width: 18px;
  height: 18px;
  border: 1.5px solid #d4d4d4;
  border-radius: 30px;
  ${rtl("margin-left", "margin-right")}: 10px;
  color: ${themeColor("white")};
  z-index: 2;
  ${({ active }) =>
    active &&
    css`
      background-color: #15803d;
    `};
`;

const ImageContainer = styled.div`
  width: 100px;
  min-width: 100px;
  height: 120px;
  min-height: 120px;
  position: relative;
  & > svg {
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    width: 132px;
    min-width: 132px;
  }
`;

const StyledH4 = styled(H4)`
  font-weight: 600;
  line-height: normal;

  &.active {
    color: #166534;
  }
`;

const StyledPrice = styled(DefaultTextPrice)`
  font-size: 14px;
  font-weight: 600;

  &.active {
    color: #166534;
  }
`;

const StyledDiscountPrice = styled(DiscountPrice)`
  padding: 0;
  align-self: flex-start;
`;

const VariantTitle = styled(H5)`
  margin: 12px 0 10px;
`;

const VariantTag = styled(H6)<{ colorType: keyof typeof ColorType }>`
  color: ${({ colorType }) => colorType && ColorType[colorType]};
`;
