import React, { useState } from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import {
  DotsVertical,
  GarbageIcon,
  UpdateIcon,
} from "../../../../../assets/Icons";
import { useClickOutside } from "../../../../../hooks/useClickOutside";
import { rtl } from "../../../../../shared/styles-utils";
import { ModalConfirm } from "../../../../../shared/globals/UiElements/ModalConfirm";
import { PrimaryButton } from "../../../../Button";
import {
  ListCustomerReviewsDocument,
  ListCustomerReviewsQuery,
  useDeleteReviewMutation,
  useEditReviewMutation,
} from "../../../../../generated/graphql";
import { useStore } from "../../../../../lib/storeData";
import ReviewModal, {
  ReviewerNameEnum,
  ReviewFormValues,
} from "../../my-orders/components/ReviewModal";

interface ReviewsMoreActionsProps {
  review: ListCustomerReviewsQuery["listCustomerReviews"][0];
}

const ReviewsMoreActions = ({ review }: ReviewsMoreActionsProps) => {
  const { storeId } = useStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [deleteReview, { loading: deleteLoading }] = useDeleteReviewMutation();

  const [editReview, { loading: editLoading }] = useEditReviewMutation();

  const handleDelete = () => {
    deleteReview({
      variables: { storeId, reviewId: review?.id },
      awaitRefetchQueries: true,
      refetchQueries: [ListCustomerReviewsDocument],
    });
  };

  const handleEdit = (values: ReviewFormValues) => {
    editReview({
      variables: {
        storeId,
        reviewId: review?.id,
        review: {
          rating: values.rating,
          headline: values.headline,
          showName: values.reviewerNameType === ReviewerNameEnum.Show_Name,
          content: values.reviewContent,
        },
      },
      awaitRefetchQueries: true,
      refetchQueries: [ListCustomerReviewsDocument],
      onCompleted() {
        setIsEditModalOpen(false);
      },
    });
  };

  const handleClickOutside = React.useCallback(() => {
    setIsDropdownOpen(false);
  }, [setIsDropdownOpen]);

  const { ref } = useClickOutside(handleClickOutside);

  return (
    <Container ref={ref}>
      <PrimaryButton
        transparent
        reversed
        compact
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <DotsVertical />
      </PrimaryButton>

      <Dropdown
        isOpen={isDropdownOpen}
        onClick={() => setIsDropdownOpen(false)}
      >
        {/* Edit */}
        <ActionButton
          prefixIcon={<UpdateIcon ink />}
          reversed
          transparent
          onClick={() => setIsEditModalOpen(!isEditModalOpen)}
        >
          <FormattedMessage defaultMessage="Edit" />
        </ActionButton>
        <ReviewModal
          review={review}
          isOpen={isEditModalOpen}
          loading={editLoading}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleEdit}
        />

        {/* Delete */}
        <ModalConfirm
          modalBody={
            <FormattedMessage defaultMessage="Are you sure you want to delete this review?" />
          }
          modalHeader={<FormattedMessage defaultMessage="Delete Review" />}
          loading={deleteLoading}
          onConfirm={handleDelete}
        >
          <ActionButton reversed transparent prefixIcon={<GarbageIcon />}>
            <FormattedMessage defaultMessage="Delete" />
          </ActionButton>
        </ModalConfirm>
      </Dropdown>
    </Container>
  );
};

export default ReviewsMoreActions;

const Container = styled.div`
  position: relative;
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  background-color: #fff;
  margin-top: 4px;
  border-radius: 4px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.15), 0 0 3px 0 rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 4px 0;
  ${rtl("left", "right")}: 8px;
`;

const ActionButton = styled(PrimaryButton)`
  padding: 12px 26px 12px 10px;
  color: ${({ theme }) => theme.text.inkLight};
  width: 100%;
  justify-content: flex-start;
  svg {
    width: 24px;
    transform: scaleX(${rtl("-1", "1")});
  }
  &:hover {
    background: #e8edf1;
  }
`;
