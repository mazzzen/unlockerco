import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Card, H3, Overlay, Spinner } from "../../../../shared/globals";
import { theme } from "../../../../shared/theme";

import { ReviewsQuery } from "../../../../generated/graphql";
import SingleReview from "./SingleReview";

const MAX_REVIEWS_PER_PAGE = 4;

interface ReviewsProps {
  reviews: ReviewsQuery["product"];
  numberOfReviews: number;
  page: number;
  setPage: (page: number) => void;
  loading: boolean;
}

const Reviews = ({
  reviews,
  numberOfReviews,
  page,
  setPage,
  loading,
}: ReviewsProps) => {
  const { reviews: reviewsData } = reviews || {};

  if (!reviewsData?.length) {
    return (
      <div
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: 500,
        }}
      >
        <FormattedMessage defaultMessage="No reviews added yet" />
      </div>
    );
  }

  return (
    <Card
      style={{
        width: "100%",
        boxShadow: theme.shadow.medium,
        position: "relative",
      }}
    >
      {loading && (
        <Overlay isAbsolute>
          <Spinner size={50} />
        </Overlay>
      )}
      <H3>
        <FormattedMessage
          defaultMessage="{reviewsCount, plural, =0 {} one {1 customer review} two {# customer reviews} few {# customer reviews} many {# customer reviews} other {# customer reviews}}"
          values={{
            reviewsCount: numberOfReviews,
          }}
        />
      </H3>
      <hr color="#E5E9EB" />
      {reviewsData?.map((review, index) => (
        <>
          <SingleReview
            key={review?.id}
            name={review?.customer?.name}
            rating={review?.rating}
            heading={review?.headline}
            content={review?.content}
            date={review?.createdAt}
            orderId={review?.orderId}
            index={index}
            reply={review?.reply?.content}
            showName={review.showName}
          />
          {index !== reviewsData?.length - 1 && <hr color="#E5E9EB" />}
        </>
      ))}
      {numberOfReviews > MAX_REVIEWS_PER_PAGE && (
        <>
          <hr
            color="#E5E9EB"
            style={{
              margin: "0 -10px",
            }}
          />
          <StyledPagination>
            <PaginationButton
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              <FormattedMessage defaultMessage="Previous" />
            </PaginationButton>
            <H3>
              <FormattedMessage
                defaultMessage="Page {page} of {totalPages}"
                values={{
                  page,
                  totalPages: Math.ceil(
                    numberOfReviews! / MAX_REVIEWS_PER_PAGE
                  ),
                }}
              />
            </H3>
            <PaginationButton
              onClick={() => setPage(page + 1)}
              disabled={
                page === Math.ceil(numberOfReviews! / MAX_REVIEWS_PER_PAGE)
              }
            >
              <FormattedMessage defaultMessage="Next" />
            </PaginationButton>
          </StyledPagination>
        </>
      )}
    </Card>
  );
};

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const PaginationButton = styled.button`
  padding: 8px 14px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  font-weight: 500;
  background-color: transparent;
  :hover {
    background-color: #f5f7f9;
  }
`;

export default Reviews;
