import { ReactElement } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Field, Form } from "react-final-form";
import createDecorator from "final-form-focus";
import { Decorator } from "final-form";
import Modal from "../../../../../shared/globals/UiElements/Modal";
import {
  ButtonsContainer,
  CancelButton,
  CheckboxInput,
  Checkmark,
  RadioButtonLabel,
  RequiredSpan,
  SaveButton,
  StyledDivForLabel,
  StyledInput,
  StyledTextArea,
} from "./ReviewStyles";
import ItemImg from "./ItemImg";
import {
  FlexCol,
  FlexRow,
  H2,
  H4,
  Label,
  P,
} from "../../../../../shared/globals";
import { useAuth } from "../../../../../lib/Authentication";
import { useStore } from "../../../../../lib/storeData";
import StyledStarsRating from "../../../../../templates/default/components/ReviewsAndRatings/StyledStarsRating";
import { ListCustomerReviewsQuery } from "../../../../../generated/graphql";
import isEqual from "lodash/isEqual";
import { theme } from "../../../../../shared/theme";

export enum ReviewerNameEnum {
  Show_Name = "showName",
  Hide_Name = "hideName",
}

export type ReviewFormValues = {
  reviewerNameType: ReviewerNameEnum;
  rating: number;
  headline: string;
  reviewContent?: string | null;
};

interface ReviewModalProps {
  product?: ListCustomerReviewsQuery["listCustomerReviews"][0]["product"];
  review?: ListCustomerReviewsQuery["listCustomerReviews"][0];
  loading: boolean;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: ReviewFormValues) => void;
}

const DEFAULT_RATING = 3;

const ReviewModal = ({
  product,
  review,
  isOpen,
  loading,
  onClose,
  onSubmit,
}: ReviewModalProps) => {
  const { user } = useAuth();
  const { name: storeName, storeReviewSettings } = useStore();
  const intl = useIntl();
  const focusOnError: Decorator<
    ReviewFormValues,
    Partial<ReviewFormValues>
  > = createDecorator();

  const mode = review?.id ? "edit" : "add";
  const defaultValues: ReviewFormValues = {
    reviewerNameType:
      mode === "edit"
        ? review?.showName
          ? ReviewerNameEnum.Show_Name
          : ReviewerNameEnum.Hide_Name
        : ReviewerNameEnum.Show_Name,
    rating: review?.rating || DEFAULT_RATING,
    headline: review?.headline || "",
    reviewContent: review?.content,
  };

  return (
    <Modal show={isOpen} onClose={onClose} modalWidth="small">
      <Modal.Header>
        {mode === "add" ? (
          <FlexCol alignItems="flex-start" spacing="xs">
            <H2 fontWeight={600} style={{ fontSize: 18 }}>
              <FormattedMessage defaultMessage="Review your order" />
            </H2>
            <P>
              <FormattedMessage defaultMessage="We’d love to hear your feedback on your purchase!" />
            </P>
          </FlexCol>
        ) : (
          <H2 fontWeight={600} style={{ fontSize: 18 }}>
            <FormattedMessage defaultMessage="Edit review" />
          </H2>
        )}
      </Modal.Header>
      <Form<ReviewFormValues>
        onSubmit={(values) => onSubmit({ ...values })}
        validate={validate}
        decorators={[focusOnError]}
        initialValues={defaultValues}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <FlexCol alignItems="flex-start" spacing="l">
                {/* Product details */}
                <FlexRow spacing="s">
                  <ItemImg
                    imgDetails={
                      product?.images?.[0] || review?.product?.images?.[0]
                    }
                  />
                  <H4 fontWeight={600}>
                    {product?.title || review?.product?.title}
                  </H4>
                </FlexRow>

                {/* Review by */}
                <FlexCol alignItems="flex-start" spacing="l">
                  <P fontWeight={500}>
                    <FormattedMessage defaultMessage="Review by" />
                  </P>
                  <FlexCol alignItems="flex-start" spacing="m">
                    <RadioButtonLabel>
                      <Field<ReviewFormValues["reviewerNameType"]>
                        name="reviewerNameType"
                        type="radio"
                        value={ReviewerNameEnum.Show_Name}
                      >
                        {({ input }) => (
                          <StyledDivForLabel
                            alignItems="flex-start"
                            className={
                              values.reviewerNameType === input.value
                                ? "active"
                                : ""
                            }
                          >
                            <CheckboxInput {...input} />
                            <Checkmark />
                            <FlexCol alignItems="flex-start">
                              <P fontWeight={500}>{user?.name}</P>
                              <P style={{ opacity: 0.7 }}>
                                <FormattedMessage defaultMessage="Show my name on the review" />
                              </P>
                            </FlexCol>
                          </StyledDivForLabel>
                        )}
                      </Field>
                    </RadioButtonLabel>
                    <RadioButtonLabel>
                      <Field<ReviewFormValues["reviewerNameType"]>
                        name="reviewerNameType"
                        type="radio"
                        value={ReviewerNameEnum.Hide_Name}
                      >
                        {({ input }) => (
                          <StyledDivForLabel
                            alignItems="flex-start"
                            className={
                              values.reviewerNameType === input.value
                                ? "active"
                                : ""
                            }
                          >
                            <CheckboxInput {...input} />
                            <Checkmark />
                            <FlexCol alignItems="flex-start">
                              <P fontWeight={500}>{`${storeName} Shopper`}</P>
                              <P style={{ opacity: 0.7 }}>
                                <FormattedMessage defaultMessage="Don’t show my name on the review" />
                              </P>
                            </FlexCol>
                          </StyledDivForLabel>
                        )}
                      </Field>
                    </RadioButtonLabel>
                  </FlexCol>
                </FlexCol>

                {/* Overall rating */}
                <Field name="rating">
                  {({ input }) => (
                    <FlexCol alignItems="flex-start" spacing="xs">
                      <P fontWeight={500}>
                        <FormattedMessage defaultMessage="Overall rating" />
                      </P>
                      <StyledStarsRating
                        fillColor={
                          storeReviewSettings?.starsColor ||
                          theme.colors.primary
                        }
                        onClick={(rate) => input.onChange(rate)}
                        initialRatingValue={defaultValues.rating}
                        size={35}
                      />
                    </FlexCol>
                  )}
                </Field>

                {/* Headline */}
                <Field name="headline">
                  {({ input, meta: { error, touched } }) => (
                    <FlexCol
                      alignItems="flex-start"
                      spacing="xs"
                      style={{ width: "100%" }}
                    >
                      <Label style={{ margin: 0 }}>
                        <FormattedMessage defaultMessage="Headline" />
                      </Label>
                      <StyledInput
                        {...input}
                        type="text"
                        data-test="type-headline"
                        className={error && touched ? "invalid" : ""}
                        placeholder={intl.formatMessage({
                          defaultMessage: "What’s most important to know?",
                        })}
                      />
                      {error && touched && (
                        <RequiredSpan style={{ height: "auto" }}>
                          {error}
                        </RequiredSpan>
                      )}
                    </FlexCol>
                  )}
                </Field>

                {/* Review */}
                <Field name="reviewContent">
                  {({ input, meta: { error, touched } }) => (
                    <FlexCol
                      alignItems="flex-start"
                      spacing="xs"
                      style={{ width: "100%" }}
                    >
                      <Label style={{ margin: 0 }}>
                        <FormattedMessage defaultMessage="Review" />
                      </Label>
                      <StyledTextArea
                        type="text"
                        data-test="type-headline"
                        {...input}
                        className={error && touched ? "invalid" : ""}
                        placeholder={intl.formatMessage({
                          defaultMessage:
                            "What did you like or dislike about the product?",
                        })}
                      />
                      {error && touched && (
                        <RequiredSpan style={{ height: "auto" }}>
                          {error}
                        </RequiredSpan>
                      )}
                      <P style={{ opacity: 0.8 }}>
                        <FormattedMessage defaultMessage="20,000 character limit" />
                      </P>
                    </FlexCol>
                  )}
                </Field>
              </FlexCol>
            </Modal.Body>
            <Modal.Footer>
              <ButtonsContainer>
                <CancelButton outlined onClick={onClose}>
                  <FormattedMessage defaultMessage="Cancel" />
                </CancelButton>
                <SaveButton
                  data-test="button-submit-review"
                  type="submit"
                  isLoading={loading}
                  disabled={isEqual(values, defaultValues)}
                >
                  <FormattedMessage defaultMessage="Submit Review" />
                </SaveButton>
              </ButtonsContainer>
            </Modal.Footer>
          </form>
        )}
      />
    </Modal>
  );
};

export default ReviewModal;

const validate = (values: ReviewFormValues) => {
  const CHARACTER_LIMIT = 20000;
  const errors: Partial<{ [key in keyof ReviewFormValues]: ReactElement }> = {};
  if (!values.headline?.trim()) {
    errors.headline = <FormattedMessage defaultMessage="Required field" />;
  }
  if (
    values?.reviewContent &&
    values?.reviewContent?.length > CHARACTER_LIMIT
  ) {
    errors.reviewContent = (
      <FormattedMessage defaultMessage="Text should be less than the specified limit" />
    );
  }
  return errors;
};
