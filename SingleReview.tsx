import React from "react";
import { FormattedDate, FormattedMessage, useIntl } from "react-intl";
import styled from "styled-components";
import { FlexCol, FlexRow, H4, H5 } from "../../../../shared/globals";
import { StyledFlexRow } from "../../../../components/Filter/styled";
import { useStore } from "../../../../lib/storeData";
import { useGravatar } from "../../../../shared/utils/useGravatar";
import { Avatar } from "../../../../shared/globals/UiElements/Avatar";
import StyledStarsRating from "./StyledStarsRating";
import { DownArrow, ReplyIcon } from "../../../../assets/Icons";
import { Photo } from "../../../../shared/globals/UiElements/Photo";
import Badge from "../../../../shared/globals/UiElements/Badge";
import { theme } from "../../../../shared/theme";

const SHOW_MORE_REVIEW_LENGTH = 370;
const MAX_REVIEWS_PER_PAGE = 4;

interface SingleReviewProps {
  name: string | null | undefined;
  rating: number;
  heading: string;
  content: string | null | undefined;
  date: string;
  orderId: string | null | undefined;
  index: number;
  reply: string | null | undefined;
  showName: boolean | null | undefined;
}

const SingleReview = ({
  name,
  rating,
  heading,
  content,
  date,
  orderId,
  index,
  reply,
  showName,
}: SingleReviewProps) => {
  const [userImageSrc] = useGravatar(name);
  const intl = useIntl();
  const {
    storeReviewSettings: reviewsSettings,
    name: storeName,
    logo,
  } = useStore();

  const hiddenReviewerName = intl.formatMessage(
    {
      defaultMessage: "{storeName} Shopper",
    },
    {
      storeName,
    }
  );

  const [extendedReviews, setExtendedReviews] = React.useState<boolean[]>(
    new Array(MAX_REVIEWS_PER_PAGE).fill(false)
  );

  return (
    <StyledFlexRow>
      <StyledFlexRow alignItems="flex-Start" spacing="m" margin="20px 10px">
        {reviewsSettings?.showCustomerAvatar && (
          <FlexCol>
            <Avatar
              src={userImageSrc}
              fullName={name || hiddenReviewerName}
              size="small"
            />
          </FlexCol>
        )}
        <FlexCol alignItems="flex-start" spacing="s">
          <FlexCol alignItems="flex-start">
            <FlexRow spacing="m">
              <FlexRow spacing="xs">
                <H4 fontWeight="600">
                  {name ? name : hiddenReviewerName}
                  {!showName && name && (
                    <StyledSpan color={theme.colors.secondary}>
                      {" "}
                      <FormattedMessage defaultMessage="(your name is only visible to you)" />
                    </StyledSpan>
                  )}
                </H4>
              </FlexRow>
              {orderId && (
                <Badge
                  label={
                    <FormattedMessage defaultMessage="✔ Verified Purchase" />
                  }
                />
              )}
            </FlexRow>
            {reviewsSettings?.showReviewDate && (
              <H5 color="secondary">
                <FormattedMessage defaultMessage="Reviewed on" />{" "}
                <FormattedDate
                  value={date}
                  day="numeric"
                  month="short"
                  year="numeric"
                />
              </H5>
            )}
          </FlexCol>
          <StyledStarsRating
            fillColor={reviewsSettings?.starsColor}
            initialRatingValue={rating}
            isReadonly
            size={15}
          />
          <FlexCol alignItems="flex-start" spacing="s">
            <H4 fontWeight="bold">{heading}</H4>
            <ExtendableText isExtended={extendedReviews[index]}>
              {content}
            </ExtendableText>
            {content?.length! > SHOW_MORE_REVIEW_LENGTH && (
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
            {reply && (
              <Reply borderColor={reviewsSettings?.starsColor!}>
                <StyledFlexRow spacing="l" alignItems="flex-start">
                  <FlexCol margin="5px 0 0 0 ">
                    <ReplyIcon />
                  </FlexCol>

                  <FlexCol justifyContent="start" alignItems="start">
                    <StyledFlexRow margin="0 0 15px 0" spacing="s">
                      {logo?.image?.src ? (
                        <ImageWrapper>
                          <Photo src={logo.image?.src} alt={storeName} />
                        </ImageWrapper>
                      ) : (
                        <H4 fontWeight="bold">{storeName}</H4>
                      )}
                      <p
                        style={{
                          margin: 0,
                          color: "black",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                      >
                        <FormattedMessage defaultMessage="Reply from" />
                        {` ${storeName}`}
                      </p>
                    </StyledFlexRow>
                    <StyledFlexRow>{reply}</StyledFlexRow>
                  </FlexCol>
                </StyledFlexRow>
              </Reply>
            )}
          </FlexCol>
        </FlexCol>
      </StyledFlexRow>
    </StyledFlexRow>
  );
};

export default SingleReview;

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

const ShowMoreSection = styled(StyledFlexRow)<{ isExtended: boolean }>`
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

const Reply = styled.div<{
  borderColor: string;
}>`
  background-color: ${({ theme }) => theme.bg.divider};
  padding: 20px;
  margin-top: 10px;
  width: 100%;
  color: ${({ theme }) => theme.text.inkLight};
  border-left: ${({ borderColor, theme: { isRTL } }) =>
    isRTL ? "" : `3px solid ${borderColor}`};
  border-right: ${({ borderColor, theme: { isRTL } }) =>
    isRTL ? `3px solid ${borderColor}` : ""};
  svg {
    transform: ${({ theme: { isRTL } }) => (isRTL ? "rotateY(180deg)" : "")};
  }
`;

const ImageWrapper = styled.div`
  width: 50px;
  height: 30px;
`;

const StyledSpan = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: normal;
`;
