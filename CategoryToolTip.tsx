import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Information } from "../../../../assets/Icons";
import { CategoryType } from "../../../../generated/graphql";
import { FlexRow, H4 } from "../../../../shared/globals";
import { rtl } from "../../../../shared/styles-utils";
import type { BuildStateCategory } from "../../../types";

interface CategoryToolTipProps {
  activeCategory?: BuildStateCategory;
}

const CategoryToolTip: React.FC<CategoryToolTipProps> = ({
  activeCategory,
}) => {
  return (
    <Container>
      <Information />
      <StyledH4>
        {activeCategory?.categoryType === CategoryType.Single &&
        activeCategory?.settings?.maxQuantity ? (
          <FormattedMessage
            values={{ maxQuantity: activeCategory?.settings.maxQuantity }}
            defaultMessage="You can pick single product with different quantity up to {maxQuantity}"
          />
        ) : activeCategory?.categoryType === CategoryType.Single ? (
          <FormattedMessage
            values={{ maxQuantity: activeCategory?.settings?.maxQuantity }}
            defaultMessage="You can pick single product"
          />
        ) : null}
        {activeCategory?.categoryType === CategoryType.Multiple &&
        activeCategory?.settings?.maxQuantity ? (
          <FormattedMessage
            values={{
              maxQuantity: activeCategory?.settings?.maxQuantity,
              maxSelect: activeCategory?.settings?.maxSelect,
            }}
            defaultMessage="You can pick multiple products with different quantity up to {maxSelect} and {maxQuantity} maximum of each product"
          />
        ) : activeCategory?.categoryType === CategoryType.Multiple ? (
          <FormattedMessage
            values={{ maxSelect: activeCategory?.settings?.maxSelect }}
            defaultMessage="You can pick multiple products up to {maxSelect}"
          />
        ) : null}
      </StyledH4>
    </Container>
  );
};

export default CategoryToolTip;

/**
 *
 * Styles
 *
 */

const Container = styled(FlexRow)`
  width: 100%;
  background-color: #fef3c7;
  padding: 10px 15px;
  margin-bottom: 15px;
  border: 1px solid #fde68a;
  border-radius: 6px;

  > svg {
    width: 44px;
    height: 24px;
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 768px) {
    > svg {
      width: 24px;
    }
  }
`;

const StyledH4 = styled(H4)`
  ${rtl("margin-right", "margin-left")}: 10px;
`;
