import React, { useState } from "react";
import { FormattedMessage, FormattedNumber } from "react-intl";
import styled from "styled-components";
import { CommentIcon, ContainedStar } from "../../../../../src/assets/Icons";
import { StyledFlexRow } from "../../../../components/Filter/styled";
import { Card, FlexCol, H1, H3, H4 } from "../../../../shared/globals";
import ProgressBar from "../ProgressBar";
import StyledStarsRating from "./StyledStarsRating";
import { useAuth } from "../../../../lib/Authentication";
import ReviewButton from "../../../../components/CustomerProfile/components/my-orders/components/ReviewButton";
import { ListCustomerReviewsQuery } from "../../../../generated/graphql";
import { PrimaryButton } from "../../../../components/Button";
import LoginPopup from "../../../../lib/Authentication/components/LoginPopup";
import { useStore } from "../../../../lib/storeData";
import { theme } from "../../../../shared/theme";

interface OverAllRatingProps {
  overAllRating: number;
  numberOfReviews: number;
  numberOfReviewsByStars: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
  product: ListCustomerReviewsQuery["listCustomerReviews"][0]["product"];
}

const OverAllRating = ({
  overAllRating,
  numberOfReviews,
  numberOfReviewsByStars,
  product,
}: OverAllRatingProps) => {
  const { isLoggedIn } = useAuth();
  const { storeReviewSettings } = useStore();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <StyledCard>
      <H3>
        <FormattedMessage defaultMessage="Overall rating" />
      </H3>
      <hr color="#E5E9EB" />
      <StyledFlexRow spacing="xxl">
        <FlexCol alignItems="flex-start">
          <H1>
            <FormattedNumber value={parseFloat(overAllRating.toFixed(1))} />
          </H1>
          <StyledStarsRating
            isFractional
            isReadonly
            initialRatingValue={overAllRating}
            fillColor={storeReviewSettings?.starsColor || theme.colors.primary}
          />
          <H4 color="secondary">
            <FormattedMessage
              defaultMessage="{reviewsCount, plural, =0 {0 reviews} one {1 review} two {# reviews} few {# reviews} many {# reviews} other {# reviews}}"
              values={{
                reviewsCount: numberOfReviews,
              }}
            />
          </H4>
        </FlexCol>
        <FlexCol style={{ width: "100%" }}>
          {["5", "4", "3", "2", "1"].map((star) => (
            <StarsProgressBar
              key={star}
              numberOfStars={star}
              numberOfReviews={numberOfReviews}
              numberOfStarReviews={numberOfReviewsByStars[star]}
              fillColor={
                storeReviewSettings?.starsColor || theme.colors.primary
              }
            />
          ))}
        </FlexCol>
      </StyledFlexRow>
      <hr color="#E5E9EB" />
      <StyledFlexRow alignItems="start" spacing="s">
        {storeReviewSettings?.enableGuestReviews ? (
          isLoggedIn ? (
            <ReviewButton
              product={product}
              buttonComponent={
                <PrimaryButton
                  prefixIcon={<CommentIcon />}
                  fullWidth
                  style={{
                    borderRadius: "20px",
                  }}
                >
                  <FormattedMessage defaultMessage="Write a review" />
                </PrimaryButton>
              }
            />
          ) : (
            <>
              <PrimaryButton
                prefixIcon={<CommentIcon />}
                fullWidth
                style={{
                  borderRadius: "20px",
                }}
                onClick={() => setIsPopupOpen(true)}
              >
                <FormattedMessage defaultMessage="Write a review" />
              </PrimaryButton>
              <LoginPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
              />
            </>
          )
        ) : (
          <>
            <FlexCol alignItems="flex-start">
              <ContainedStar />
            </FlexCol>
            <FlexCol alignItems="flex-start">
              <H3 fontWeight="600">
                <FormattedMessage defaultMessage="How do i review this product?" />
              </H3>
              <H4 color="secondary">
                <FormattedMessage defaultMessage="If you recently purchased this product, you can go to your Orders page and click on the Submit Review button" />
              </H4>
            </FlexCol>
          </>
        )}
      </StyledFlexRow>
    </StyledCard>
  );
};

const StarsProgressBar = ({
  numberOfStars,
  numberOfReviews,
  numberOfStarReviews,
  fillColor,
}) => {
  return (
    <StyledFlexRow spacing="m">
      <FlexCol style={{ minWidth: "5px" }}>
        <H4>
          <FormattedNumber value={numberOfStars} />
        </H4>
      </FlexCol>
      <ProgressBar
        progress={(numberOfStarReviews / numberOfReviews) * 100}
        bgcolor={fillColor}
      />
      <FlexCol style={{ minWidth: "15px" }} alignItems="flex-end">
        <H4 color="secondary">
          <FormattedNumber value={numberOfStarReviews} />
        </H4>
      </FlexCol>
    </StyledFlexRow>
  );
};

const StyledCard = styled(Card)`
  min-width: 345px;
  max-width: 345px;
  box-shadow: ${({ theme }) => theme.shadow.medium};
  @media (max-width: 768px) {
    min-width: 100%;
  }
`;

export default OverAllRating;
