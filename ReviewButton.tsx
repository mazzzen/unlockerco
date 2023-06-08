import { ReactElement, useEffect, useRef, useState } from "react";
import ReviewModal, { ReviewFormValues, ReviewerNameEnum } from "./ReviewModal";
import {
  GetOrderByIdDocument,
  ListCustomerReviewsQuery,
  useSubmitReviewMutation,
} from "../../../../../generated/graphql";
import { useStore } from "../../../../../lib/storeData";

interface ReviewButtonProps {
  product: ListCustomerReviewsQuery["listCustomerReviews"][0]["product"];
  orderId?: string;
  buttonComponent: ReactElement;
}

const ReviewButton = ({
  product,
  orderId,
  buttonComponent,
}: ReviewButtonProps) => {
  const { storeId } = useStore();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [submitReview, { loading }] = useSubmitReviewMutation();

  useEffect(() => {
    if (ref.current) {
      ref.current.onclick = () => setIsOpen(true);
    }
  }, []);

  const handleSubmit = (values: ReviewFormValues) => {
    submitReview({
      variables: {
        storeId,
        review: {
          orderId,
          productId: product?.id,
          rating: values.rating,
          headline: values.headline,
          showName: values.reviewerNameType === ReviewerNameEnum.Show_Name,
          content: values.reviewContent,
        },
      },
      awaitRefetchQueries: true,
      refetchQueries: orderId ? [GetOrderByIdDocument] : undefined,
      onCompleted() {
        setIsOpen(false);
      },
    });
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div ref={ref} style={{ width: "inherit" }}>
        {buttonComponent}
      </div>
      <ReviewModal
        product={product}
        isOpen={isOpen}
        loading={loading}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ReviewButton;
