import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Group, ShoppingCart } from "../../../../assets/Icons";
import { useStore } from "../../../../lib/storeData";
import { Card, FlexCol, FlexRow, H3, H4, H5 } from "../../../../shared/globals";
import { rtl } from "../../../../shared/styles-utils";
import { PrimaryButton } from "../../../../components/Button";
import { Price } from "../../../../components/Price/Price";
import type { CustomProductInfoProps } from "../../../types";
import Alert from "../../../../shared/globals/UiElements/Alert";
import { Badge } from "../../../../components/Badge/Badge";
import { DiscountPrice } from "../../../../components/Price";
import { Photo } from "../../../../shared/globals/UiElements/Photo";

interface SummarySectionProps {
  product: CustomProductInfoProps["product"];
  buildSubtotal: number;
  buildSubtotalBeforeDiscount: number;
  isDiscount?: boolean;
  isAlertOpen?: boolean;
  setIsAlertOpen?: (value: React.SetStateAction<boolean>) => void;
  setIsSummary: React.Dispatch<React.SetStateAction<boolean>>;
  onAddToCart: () => void;
}

const SummarySection = ({
  product,
  buildSubtotal,
  buildSubtotalBeforeDiscount,
  isDiscount,
  isAlertOpen,
  setIsAlertOpen,
  setIsSummary,
  onAddToCart,
}: SummarySectionProps) => {
  const { currency: currencyCode } = useStore();

  return (
    <SummaryCard paddingSize="none">
      <StyledH4>
        <FormattedMessage defaultMessage="My Selections" />
      </StyledH4>
      <FlexRow alignItems="flex-start">
        {product.images?.[0]?.src ? (
          <ProductImageContainer>
            <Photo src={product.images[0].src} alt={product.title} />
          </ProductImageContainer>
        ) : null}
        <FlexCol alignItems="flex-start">
          <Badge
            customInStock={product.isInStock}
            outOfStock={!product.isInStock}
          />
          {isDiscount && <Badge discount={product?.discount} />}
          <H3 style={{ marginTop: 6 }} fontWeight={600}>
            {product.title}
          </H3>
        </FlexCol>
      </FlexRow>
      <div>
        <SummaryButton
          reversed
          fullWidth
          prefixIcon={<Group />}
          onClick={() => setIsSummary(true)}
        >
          <FormattedMessage defaultMessage="Configuration Summary" />
        </SummaryButton>
      </div>
      <SummaryPrice alignItems="flex-start">
        <SummaryPriceText>
          <FormattedMessage defaultMessage="Price including Taxes" />
        </SummaryPriceText>
        <FlexCol>
          {isDiscount && (
            <StyledDiscountPrice
              fontSize="14px"
              money={{
                amount: buildSubtotalBeforeDiscount,
                currencyCode,
              }}
            />
          )}
          <SummaryPriceTotal money={{ amount: buildSubtotal, currencyCode }} />
        </FlexCol>
        <PrimaryButton
          fullWidth
          prefixIcon={<ShoppingCart />}
          disabled={!product.isInStock}
          onClick={onAddToCart}
        >
          <FormattedMessage defaultMessage="Add to Cart" />
        </PrimaryButton>
        {isAlertOpen && (
          <Alert
            message={<FormattedMessage defaultMessage="Quantity exceeded" />}
            closeAction={() => setIsAlertOpen!(false)}
          />
        )}
      </SummaryPrice>
    </SummaryCard>
  );
};

export default SummarySection;

/**
 *
 *
 * Styles
 *
 *
 */

const SummaryCard = styled(Card)`
  padding: 0 10px;
  width: calc(100% - (75% + 20px));
  position: sticky;
  top: 20px;

  > * {
    padding: 10px 0;
    &:not(:last-child) {
      border-bottom: 1px solid #e5e9eb;
    }
  }
`;

const StyledH4 = styled(H4)`
  padding: 10px;
  margin: 0px -10px;
`;
const ProductImageContainer = styled.div`
  position: relative;
  width: 80px;
  min-width: 80px;
  height: 90px;
  min-height: 90px;
  ${rtl("margin-left", "margin-right")}: 10px;
`;

const SummaryButton = styled(PrimaryButton)`
  color: ${({ theme }) => theme.text.default};
  padding: 6px 20px;
  border: 1px solid #e5e9eb;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
`;

const SummaryPrice = styled(FlexCol)`
  & > * {
    margin-top: 10px;
  }
`;

const SummaryPriceText = styled(H5)`
  color: #a3a3a3;
  font-weight: 400;
`;

const SummaryPriceTotal = styled(Price)`
  align-self: flex-start;
  font-size: 24px;
  font-weight: 500;
`;

const StyledDiscountPrice = styled(DiscountPrice)`
  align-self: flex-start;
  padding: 0;
`;
