import React from "react";
import styled from "styled-components";
import HeadingSection from "../components/customComponents/HeadingSection";
import SummaryPanel from "../components/customComponents/SummaryPanel";
import SummarySection from "../components/customComponents/SummarySection";
import { Card, FlexRow } from "../../../shared/globals";
import { rtl } from "../../../shared/styles-utils";
import type { CustomProductInfoProps, TemplateElement } from "../../types";
import { StoreTemplate } from "../../TemplateLoader";

const DesktopCustomProduct: TemplateElement<CustomProductInfoProps> = ({
  product,
  buildState,
  isSummary,
  activeCategoryId,
  buildSubtotal,
  buildSubtotalBeforeDiscount,
  isDiscount,
  isAlertOpen,
  exceededVariantId,
  setExceededVariantId,
  setIsAlertOpen,
  handleAddToCart,
  prepareCartBuildState,
  setActiveCategoryId,
  setBuildState,
  setIsSummary,
}) => {
  const Template = StoreTemplate.get();
  const activeCategory = buildState?.find(
    (category) => category?.id === activeCategoryId
  );

  return (
    <>
      <HeadingSection product={product} />
      <FlexRow alignItems="flex-start">
        <MainCard paddingSize="none">
          <FlexRow
            flexGrow={1}
            alignItems="unset"
            style={{ position: "relative" }}
          >
            <Template.elements.CategoriesSection
              buildState={buildState!}
              activeCategory={activeCategory!}
              setActiveCategoryId={setActiveCategoryId!}
            />
            <Template.elements.VariantsSection
              buildState={buildState!}
              setBuildState={setBuildState!}
              activeCategoryId={activeCategoryId!}
              exceededVariantId={exceededVariantId}
              setExceededVariantId={setExceededVariantId}
              setActiveCategoryId={setActiveCategoryId!}
              activeCategory={activeCategory!}
              productId={product.id}
            />
          </FlexRow>
        </MainCard>
        <SummarySection
          product={product}
          isAlertOpen={isAlertOpen}
          setIsAlertOpen={setIsAlertOpen}
          setIsSummary={setIsSummary!}
          buildSubtotal={buildSubtotal!}
          buildSubtotalBeforeDiscount={buildSubtotalBeforeDiscount!}
          isDiscount={isDiscount}
          onAddToCart={handleAddToCart!}
        />
      </FlexRow>
      <SummaryPanel
        buildState={prepareCartBuildState?.(buildState!, product)!}
        isOpen={!!isSummary}
        onClose={() => setIsSummary?.(false)}
        onAddToCart={handleAddToCart}
        productDiscount={product.discount!}
        isDiscount={isDiscount}
      />
    </>
  );
};

export default DesktopCustomProduct;

/**
 *
 *
 * Styles
 *
 *
 */

const MainCard = styled(Card)`
  width: 75%;
  margin-bottom: 60px;
  ${rtl("margin-left", "margin-right")}: 20px;
`;
