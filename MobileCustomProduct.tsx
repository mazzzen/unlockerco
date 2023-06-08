import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import HeadingSection from "../components/customComponents/HeadingSection";
import { ShoppingCart } from "../../../assets/Icons";
import { PrimaryButton } from "../../../components/Button";
import { PriceBase } from "../../../components/Price/Price";
import { useStore } from "../../../lib/storeData";
import { Card, FlexCol, FlexRow, H2, H4, H5 } from "../../../shared/globals";
import { rtl } from "../../../shared/styles-utils";
import type { CustomProductInfoProps, TemplateElement } from "../../types";
import Alert from "../../../shared/globals/UiElements/Alert";
import { Badge } from "../../../components/Badge/Badge";
import { DiscountPrice } from "../../../components/Price";
import { StoreTemplate } from "../../TemplateLoader";

const MobileCustomProduct: TemplateElement<CustomProductInfoProps> = ({
  product,
  buildState,
  activeCategoryId,
  buildSubtotal,
  buildSubtotalBeforeDiscount,
  isDiscount,
  isAlertOpen,
  exceededVariantId,
  setExceededVariantId,
  setIsAlertOpen,
  handleAddToCart,
  setActiveCategoryId,
  setBuildState,
}) => {
  const { currency: currencyCode } = useStore();
  const Template = StoreTemplate.get();

  const activeCategory = buildState?.find(
    (category) => category?.id === activeCategoryId
  );

  return (
    <>
      <HeadingSection product={product} />
      <Card paddingSize="none">
        <Template.elements.CategoriesSection
          buildState={buildState!}
          activeCategory={activeCategory!}
          exceededVariantId={exceededVariantId}
          setExceededVariantId={setExceededVariantId}
          setActiveCategoryId={setActiveCategoryId!}
          setBuildState={setBuildState}
          activeCategoryId={activeCategoryId}
          productId={product.id}
        />
      </Card>
      <SummaryCard paddingSize="medium">
        <FlexRow alignItems="flex-start" justifyContent="space-between">
          <FlexColMargin alignItems="flex-start">
            <FlexRow>
              <Badge
                customInStock={product.isInStock}
                outOfStock={!product.isInStock}
              />
              {isDiscount && <Badge discount={product?.discount} />}
            </FlexRow>
            <H4 style={{ margin: "4px 0" }}>{product.title}</H4>
            <SummaryPriceText>
              <FormattedMessage defaultMessage="Price including Taxes" />
            </SummaryPriceText>
            <H2 fontWeight={500}>
              <PriceBase
                money={{
                  amount: buildSubtotal!,
                  currencyCode,
                }}
              />
              {isDiscount && (
                <StyledDiscountPrice
                  fontSize="16px"
                  money={{
                    amount: buildSubtotalBeforeDiscount!,
                    currencyCode,
                  }}
                />
              )}
            </H2>
          </FlexColMargin>
          <FlexCol alignItems="flex-start">
            <PrimaryButton
              fullWidth
              prefixIcon={<ShoppingCart />}
              disabled={!product.isInStock}
              onClick={handleAddToCart}
            >
              <FormattedMessage defaultMessage="Add to Cart" />
            </PrimaryButton>
            {isAlertOpen && (
              <Alert
                message={
                  <FormattedMessage defaultMessage="Quantity exceeded" />
                }
                closeAction={() => setIsAlertOpen!(false)}
              />
            )}
          </FlexCol>
        </FlexRow>
      </SummaryCard>
    </>
  );
};

export default MobileCustomProduct;

/**
 *
 *
 * Styles
 *
 *
 */

const SummaryCard = styled(Card)`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  border: 0;
  border-top: 1px solid #e5e9eb;
  z-index: 100;
`;

const FlexColMargin = styled(FlexCol)`
  max-width: 200px;
  ${rtl("margin-left", "margin-right")}: 6px;
`;

const SummaryPriceText = styled(H5)`
  margin: 4px 0;
  color: #a3a3a3;
`;

const StyledDiscountPrice = styled(DiscountPrice)`
  padding: ${rtl("0 6px 0 0", "0 0 0 6px")};
`;
