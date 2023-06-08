import React from "react";
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";
import { SalePriceTagIcon } from "../../assets/Icons";
import { CustomProductDiscount } from "../../generated/graphql";
import { FlexCol, FlexRow } from "../../shared/globals";
import { rtl, themeColor } from "../../shared/styles-utils";
import { DefaultTextPrice } from "../Price/Price";

interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  outOfStock?: boolean;
  onSale?: boolean;
  simpleInStock?: boolean;
  customInStock?: boolean;
  discount?: CustomProductDiscount | null;
  buyXGetYDiscountTitle?: string | null;
}

export const Badge = ({
  className,
  style,
  outOfStock,
  onSale,
  simpleInStock,
  customInStock,
  discount,
  buyXGetYDiscountTitle,
}: BadgeProps) => {
  const dataTest = outOfStock
    ? "badge-out-of-stock"
    : onSale
    ? "badge-on-sale"
    : discount
    ? "badge-discount"
    : buyXGetYDiscountTitle
    ? "buy-x-get-y-discount"
    : "badge-in-stock";

  if (
    !outOfStock &&
    !onSale &&
    !simpleInStock &&
    !customInStock &&
    !discount &&
    !buyXGetYDiscountTitle
  ) {
    return null;
  }

  return (
    <StyledBadge
      data-test={dataTest}
      style={style}
      className={className}
      isSale={!!onSale}
      outOfStock={!!outOfStock}
      simpleInStock={!!simpleInStock}
      customInStock={!!customInStock}
      discount={!!discount}
      buyXGetYDiscountTitle={!!buyXGetYDiscountTitle}
    >
      {outOfStock ? (
        <FlexRow>
          <Dot outOfStock />
          <FormattedMessage defaultMessage="Out of stock" />
        </FlexRow>
      ) : onSale ? (
        <FormattedMessage defaultMessage="SALE" />
      ) : simpleInStock || customInStock ? (
        <FlexRow>
          <Dot />
          <FormattedMessage defaultMessage="IN STOCK" />
        </FlexRow>
      ) : discount?.percent ? (
        <FormattedMessage
          defaultMessage="SAVE {percent}%"
          values={{ percent: discount.percent }}
        />
      ) : discount?.fixed ? (
        <FormattedMessage
          defaultMessage="SAVE {fixed}"
          values={{ fixed: <DefaultTextPrice money={discount.fixed} /> }}
        />
      ) : buyXGetYDiscountTitle ? (
        <FlexRow spacing="s">
          <SalePriceTagIcon />
          <div>{buyXGetYDiscountTitle || ""}</div>
        </FlexRow>
      ) : null}
    </StyledBadge>
  );
};

/**
 * Styles
 */

const StyledBadge = styled.div<{
  outOfStock: boolean;
  isSale: boolean;
  simpleInStock: boolean;
  customInStock: boolean;
  discount: boolean;
  buyXGetYDiscountTitle: boolean;
}>`
  width: fit-content;
  font-weight: 700;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 2px;
  ${rtl("margin-left", "margin-right")}: 6px;

  ${({ discount }) =>
    discount &&
    css`
      background-color: #bbf7d0;
      color: #166534;
      > span {
        color: #166534;
      }
    `};

  ${({ outOfStock }) =>
    outOfStock &&
    css`
      background-color: #fef2f2;
      color: #991b1b;
    `};

  ${({ isSale, outOfStock }) =>
    isSale &&
    !outOfStock &&
    css`
      background-color: ${themeColor("primary")};
      color: white;
    `};

  ${({ simpleInStock, customInStock, outOfStock, isSale }) =>
    (simpleInStock || customInStock) &&
    !outOfStock &&
    !isSale &&
    css`
      background-color: #f0fdf4;
      color: #166534;
    `};

  ${({ buyXGetYDiscountTitle }) =>
    buyXGetYDiscountTitle &&
    css`
      background-color: #f0fdf4;
      color: #166534;
    `};
`;

export const BadgeContainer = styled.div`
  position: relative;
  > ${FlexCol} {
    position: absolute;
    z-index: 1;
    top: 12px;
    left: 12px;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
`;

const Dot = styled.div<{ outOfStock?: boolean }>`
  width: 7px;
  height: 7px;
  background: #166534;
  border: 1.5px solid #4ade80;
  border-radius: 30px;
  ${rtl("margin-left", "margin-right")}: 4px;

  ${({ outOfStock }) =>
    outOfStock &&
    css`
      background: #991b1b;
      border: 1.5px solid #f87171;
    `}
`;
