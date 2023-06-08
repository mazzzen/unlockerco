import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { PrimaryButton } from "../../../Button";
import { EcommerceReceipt, RightArrow } from "../../../../assets/Icons";
import { FlexCol, H3, H4 } from "../../../../shared/globals";
import { rtl } from "../../../../shared/styles-utils";
import { Link } from "../../../../lib/i18n";

const EmptyState = () => {
  return (
    <FlexCol>
      <EcommerceReceipt />
      <TextWrapper>
        <H3 fontWeight="bold">
          <FormattedMessage defaultMessage="There are no orders yet!" />
        </H3>
        <StyledH4>
          <FormattedMessage defaultMessage="Looks like you haven’t placed any orders" />
        </StyledH4>
      </TextWrapper>
      <Link href="/shop">
        <ShoppingButton suffixIcon={<RightArrow />}>
          <FormattedMessage defaultMessage="Start Shopping" />
        </ShoppingButton>
      </Link>
    </FlexCol>
  );
};

export default EmptyState;

/**
 *
 * Styles
 *
 */

const StyledH4 = styled(H4)`
  color: ${({ theme }) => theme.brand.default};
  opacity: 0.8;
`;

const TextWrapper = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const ShoppingButton = styled(PrimaryButton)`
  padding: 12px 85px;

  svg {
    transform: scaleX(${rtl("-1", "1")});
  }
`;
