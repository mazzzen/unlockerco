import styled from "styled-components";
import { EmptyCartMob } from "../../../../../assets/Icons";
import {
  Image,
  ListCustomerReviewsQuery,
} from "../../../../../generated/graphql";
import { Photo } from "../../../../../shared/globals/UiElements/Photo";

type ImgDetails =
  | Image
  | ListCustomerReviewsQuery["listCustomerReviews"][0]["product"]["images"][0]
  | undefined;

const ItemImg = ({
  imgDetails,
  size,
}: {
  imgDetails: ImgDetails;
  size?: number;
}) => {
  return (
    <ImgContainer size={size}>
      {!imgDetails?.src ? (
        <EmptyCartMob />
      ) : (
        <Photo
          src={imgDetails?.src}
          alt={imgDetails?.altText!}
          objectFit="contain"
        />
      )}
    </ImgContainer>
  );
};

export default ItemImg;

const ImgContainer = styled.div<{ size?: number }>`
  display: flex;
  width: ${({ size }) => (size ? `${size}px` : "50px")};
  height: ${({ size }) => (size ? `${size}px` : "50px")};
  border: 1px solid ${({ theme }) => theme.bg.inactive};
  border-radius: 4px;
  > svg {
    max-height: 98%;
    border-radius: 4px;
  }
`;
