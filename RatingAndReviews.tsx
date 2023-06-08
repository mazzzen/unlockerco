import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { ReviewsQuery, useReviewsQuery } from "../../../generated/graphql";
import { useStore } from "../../../lib/storeData";
import { FlexCol, FlexRow, H2 } from "../../../shared/globals";
import { RatingAndReviewsProps } from "../../types";
import OverAllRating from "../components/ReviewsAndRatings/OverAllRating";
import Reviews from "../components/ReviewsAndRatings/Reviews";

const ITEM_PER_PAGE = 4;

const RatingAndReviews = ({ product }: RatingAndReviewsProps) => {
  const { storeId } = useStore();
  const [page, setPage] = React.useState(1);
  const offset = (page - 1) * ITEM_PER_PAGE;
  const [renderedData, setRenderedData] = React.useState<
    ReviewsQuery | undefined
  >();

  const { data, loading } = useReviewsQuery({
    variables: {
      productId: product?.id,
      storeId,
      connection: {
        first: ITEM_PER_PAGE,
        offset,
      },
    },
  });

  useEffect(() => {
    if (data) setRenderedData(data);
  }, [data]);

  if (!renderedData) return null;

  return (
    <FlexCol
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing="l"
      style={{ padding: "0 0 30px 0" }}
    >
      <H2>
        <FormattedMessage defaultMessage="Customer ratings & reviews" />
      </H2>
      <StyledFlexRow
        justifyContent="space-between"
        spacing="l"
        alignItems="flex-start"
      >
        <OverAllRating
          numberOfReviews={renderedData?.product?.reviewsStatistics.total || 0}
          overAllRating={renderedData?.product?.reviewsStatistics.average || 0}
          numberOfReviewsByStars={{
            5: renderedData?.product?.reviewsStatistics.starsCount.five || 0,
            4: renderedData?.product?.reviewsStatistics.starsCount.four || 0,
            3: renderedData?.product?.reviewsStatistics.starsCount.three || 0,
            2: renderedData?.product?.reviewsStatistics.starsCount.two || 0,
            1: renderedData?.product?.reviewsStatistics.starsCount.one || 0,
          }}
          product={product}
        />
        <Reviews
          reviews={renderedData?.product}
          numberOfReviews={renderedData?.product?.reviewsStatistics.total || 0}
          page={page}
          setPage={setPage}
          loading={loading}
        />
      </StyledFlexRow>
    </FlexCol>
  );
};

const StyledFlexRow = styled(FlexRow)`
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export default RatingAndReviews;
