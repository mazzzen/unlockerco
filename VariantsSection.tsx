import React from "react";
import styled from "styled-components";
import { FlexRow, H2 } from "../../../shared/globals";
import type { VariantsSectionProps } from "../../types";
import VariantItem from "../components/customComponents/VariantItem";
import CategoryToolTip from "../components/customComponents/CategoryToolTip";
import NavigationButtons from "../components/customComponents/NavigationButtons";

const VariantsSection = ({
  activeCategory,
  buildState,
  exceededVariantId,
  setExceededVariantId,
  handleClickVariant,
  handleQuantity,
  handleNavigationButtons,
}: VariantsSectionProps) => {
  if (!activeCategory) return null;

  return (
    <Container>
      <VariantsSectionHeading justifyContent="space-between">
        <H2 style={{ fontWeight: 500 }}>{activeCategory.name}</H2>
        <NavigationButtons
          buildState={buildState}
          activeCategory={activeCategory}
          handleNavigationButtons={handleNavigationButtons!}
        />
      </VariantsSectionHeading>
      <VariantsSectionContent>
        <CategoryToolTip activeCategory={activeCategory} />
        {activeCategory.variants.map((variant) => (
          <VariantItem
            key={variant.variant.id}
            variant={variant}
            activeCategory={activeCategory}
            exceededVariantId={exceededVariantId}
            setExceededVariantId={setExceededVariantId}
            handleClickVariant={handleClickVariant}
            handleQuantity={handleQuantity}
          />
        ))}
      </VariantsSectionContent>
    </Container>
  );
};

export default VariantsSection;

/**
 *
 *
 * Styles
 *
 *
 */

const Container = styled.div`
  width: 100%;
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid #e5e9eb;
  @media (min-width: 768px) {
    width: 70%;
    border-bottom: 0px;
  }
`;

const VariantsSectionHeading = styled(FlexRow)`
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #e5e9eb;
  background-color: white;
  position: sticky;
  top: 0px;
  z-index: 1;

  @media (min-width: 768px) {
    position: static;
  }
`;

const VariantsSectionContent = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding: 15px 30px;
  align-items: stretch;
  @media (min-width: 768px) {
    justify-content: unset;
  }
`;
