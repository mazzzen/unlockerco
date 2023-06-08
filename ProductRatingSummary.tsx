import React from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { Text } from "../../../../components/UtilityComponents/styled";
import { ProductReviewsStatistics } from "../../../../generated/graphql";
import { FlexRow } from "../../../../shared/globals";
import StyledStarsRating from "./StyledStarsRating";
import { useStore } from "../../../../lib/storeData";

interface ProductRatingSummaryProps {
  reviewsStatistics:
    | Omit<ProductReviewsStatistics, "starsCount">
    | null
    | undefined;
}

const ProductRatingSummary = ({
  reviewsStatistics,
}: ProductRatingSummaryProps) => {
  const { storeReviewSettings } = useStore();
  return (
    <FlexRow spacing="s">
      <StyledStarsRating
        initialRatingValue={reviewsStatistics?.average || 0}
        isReadonly
        size={20}
        fillColor={storeReviewSettings?.starsColor}
      />
      <FlexRow spacing="xs">
        <Text
          style={{ fontSize: "14px", fontWeight: "600" }}
          data-test="product-card-reviews-average"
        >
          <FormattedNumber
            value={
              parseFloat((reviewsStatistics?.average || 0)?.toFixed(1)) || 0
            }
          />
          {"/"}
          <FormattedNumber value={5} />
        </Text>
        <Text style={{ fontSize: "14px", fontWeight: "600" }}>-</Text>
        <Text
          style={{ fontSize: "14px", fontWeight: "normal" }}
          data-test="product-card-reviews-count"
        >
          <FormattedMessage
            defaultMessage="{reviewsCount, plural, =0 {0 review} one {1 review} two {# reviews} few {# reviews} many {# reviews} other {# reviews}}"
            values={{
              reviewsCount: reviewsStatistics?.total || 0,
            }}
          />
        </Text>
      </FlexRow>
    </FlexRow>
  );
};

export default ProductRatingSummary;
