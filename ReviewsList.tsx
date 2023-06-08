import { useState } from "react";
import { FormattedDate, FormattedMessage } from "react-intl";
import styled from "styled-components";
import { DownArrow } from "../../../../../assets/Icons";
import {
  ListCustomerReviewsQuery,
  ReviewStatus,
} from "../../../../../generated/graphql";
import { useStore } from "../../../../../lib/storeData";
import { Card, FlexCol, FlexRow, H4, H5 } from "../../../../../shared/globals";
import Badge from "../../../../../shared/globals/UiElements/Badge";
import StyledStarsRating from "../../../../../templates/default/components/ReviewsAndRatings/StyledStarsRating";
import ItemImg from "../../my-orders/components/ItemImg";
import ReviewsMoreActions from "./ReviewsMoreActions";

const MAX_REVIEWS_PER_PAGE = 4;
const SHOW_MORE_REVIEW_LENGTH = 370;

interface ReviewsListProps {
  reviews: ListCustomerReviewsQuery["listCustomerReviews"];
}

const ReviewsList = ({ reviews }: ReviewsListProps) => {
  const { storeReviewSettings } = useStore();
  const starsColor = storeReviewSettings?.starsColor!;
  const [extendedReviews, setExtendedReviews] = useState<boolean[]>(
    new Array(MAX_REVIEWS_PER_PAGE).fill(false)
  );

  return (
    <FlexCol spacing="m" style={{ marginTop: 11 }}>
      {reviews?.map((review, index) => (
        <Card key={review.id} style={{ width: "100%" }}>
          <FlexCol alignItems="flex-start" spacing="xs">
            <FlexRow justifyContent="space-between" style={{ width: "100%" }}>
              <FlexRow alignItems="center" spacing="m">
                <StyledStarsRating
                  fillColor={starsColor}
                  initialRatingValue={review.rating}
                  isReadonly
                  size={15}
                />
                {review.status === ReviewStatus.Published ? (
                  <Badge
                    type="success"
                    label={<FormattedMessage defaultMessage="• Published" />}
                  />
                ) : (
                  <Badge
                    type="warn"
                    label={
                      <FormattedMessage defaultMessage="• Pending Approval" />
                    }
                  />
                )}
              </FlexRow>
              <FlexRow spacing="s">
                <H5 color="secondary">
                  <FormattedMessage defaultMessage="Reviewed on" />{" "}
                  <FormattedDate
                    value={review.createdAt}
                    day="numeric"
                    month="short"
                    year="numeric"
                  />
                </H5>
                <ReviewsMoreActions review={review} />
              </FlexRow>
            </FlexRow>
            <H4 fontWeight="bold">{review.headline}</H4>
            <ExtendableText isExtended={extendedReviews[index]}>
              {review.content}
            </ExtendableText>
            {review.content?.length! > SHOW_MORE_REVIEW_LENGTH && (
              <ShowMoreSection
                spacing="none"
                isExtended={extendedReviews[index]}
              >
                <ShowMoreButton
                  onClick={() =>
                    setExtendedReviews(
                      extendedReviews.map((item, i) =>
                        i === index ? !item : item
                      )
                    )
                  }
                >
                  {extendedReviews[index] ? (
                    <FormattedMessage defaultMessage="Show less" />
                  ) : (
                    <FormattedMessage defaultMessage="Show more" />
                  )}
                </ShowMoreButton>
                <DownArrow />
              </ShowMoreSection>
            )}
            <FlexRow spacing="s">
              <ItemImg imgDetails={review?.product?.images[0]!} size={25} />
              <H4 fontWeight={600}>{review?.product?.title}</H4>
            </FlexRow>
          </FlexCol>
        </Card>
      ))}
    </FlexCol>
  );
};

export default ReviewsList;

const ExtendableText = styled.p<{ isExtended: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${({ isExtended }) => (isExtended ? "block" : "-webkit-box")};
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  font-size: 14px;
`;

const ShowMoreSection = styled(FlexRow)<{ isExtended: boolean }>`
  width: 100%;
  svg {
    transform: ${({ isExtended }) => (isExtended ? "rotate(180deg)" : "")};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ShowMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  padding: 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
