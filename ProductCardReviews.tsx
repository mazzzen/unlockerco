import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import styled from "styled-components";
import { useStore } from "../../../../lib/storeData";
import { FlexRow } from "../../../../shared/globals";
import { theme } from "../../../../shared/theme";
import StyledStarsRating from "./StyledStarsRating";

interface ProductCardReviewsProps {
  totalReviews: number;
  averageRating: number;
}

const ProductCardReviews = ({
  totalReviews,
  averageRating,
}: ProductCardReviewsProps) => {
  const { storeReviewSettings: reviewsSettings } = useStore();
  return (
    <StyledFlexRow spacing="s" data-test="product-card-reviews-wrapper">
      {reviewsSettings?.showStars && (
        <StyledStarsRating
          isReadonly
          isFractional
          initialRatingValue={averageRating || 0}
          size={15}
          data-test="product-card-reviews-stars-rating"
          fillColor={reviewsSettings?.starsColor || theme.colors.primary}
        />
      )}
      {reviewsSettings?.showOverAllRating && (
        <StyledText bold data-test="product-card-reviews-average">
          <FormattedNumber value={parseFloat(averageRating.toFixed(1)) || 0} />
          {"/"}
          <FormattedNumber value={5} />
        </StyledText>
      )}
      {reviewsSettings?.showReviewsCount && (
        <StyledText data-test="product-card-reviews-count">
          <FormattedMessage
            defaultMessage="{reviewsCount, plural, =0 {0 review} one {1 review} two {# reviews} few {# reviews} many {# reviews} other {# reviews}}"
            values={{
              reviewsCount: totalReviews || 0,
            }}
          />
        </StyledText>
      )}
    </StyledFlexRow>
  );
};

const StyledFlexRow = styled(FlexRow)`
  margin-top: 15px;
  flex-wrap: wrap;
`;

const StyledText = styled.p<{ bold?: boolean }>`
  margin: 0;
  font-size: 14px;
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;

export default ProductCardReviews;
