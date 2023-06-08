import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { PrimaryButton } from "../../../Button";
import { ReviewsEmptyStateIcon, RightArrow } from "../../../../assets/Icons";
import { Card, FlexCol, H3, H4 } from "../../../../shared/globals";
import { rtl } from "../../../../shared/styles-utils";
import { Link } from "../../../../lib/i18n";

const ReviewsEmptyState = () => {
  return (
    <Container paddingSize="xlarge">
      <FlexCol>
        <ReviewsEmptyStateIcon />
        <TextWrapper>
          <H3 fontWeight="bold">
            <FormattedMessage defaultMessage="There are no reviews added yet!" />
          </H3>
          <StyledH4>
            <FormattedMessage defaultMessage="You can review products you purchased from your orders page" />
          </StyledH4>
        </TextWrapper>
        <Link href="/me/my-orders">
          <ShoppingButton suffixIcon={<RightArrow />}>
            <FormattedMessage defaultMessage="Go to my orders" />
          </ShoppingButton>
        </Link>
      </FlexCol>
    </Container>
  );
};

export default ReviewsEmptyState;

/**
 *
 * Styles
 *
 */

const Container = styled(Card)`
  margin-top: 11px;
  overflow: auto;
`;

const StyledH4 = styled(H4)`
  color: ${({ theme }) => theme.brand.default};
  opacity: 0.8;
`;

const TextWrapper = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const ShoppingButton = styled(PrimaryButton)`
  padding: 12px 50px;

  svg {
    transform: scaleX(${rtl("-1", "1")});
  }
`;
