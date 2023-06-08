import React from "react";
import styled from "styled-components";
import { RightArrow } from "../../../assets/Icons";
import { PrimaryButton } from "../../../components/Button";
import { H1 } from "../../../shared/globals";
import { Photo } from "../../../shared/globals/UiElements/Photo";
import { themeColor, rtl } from "../../../shared/styles-utils";
import { Link } from "../../../lib/i18n";
import { FormattedDataType } from "../../types";

export interface CollectionCardProps {
  collection: FormattedDataType["collections"][0];
  hideTitle: boolean;
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  collection,
  hideTitle,
}) => {
  return (
    <Link fullWidth fullHeight href={`/product/${collection?.handle}`}>
      <PhotoContainer>
        <Photo
          src={collection?.image?.src || "/default-placeholder-image.png"}
          alt={collection?.title!}
        />
      </PhotoContainer>
      {!hideTitle && (
        <TitleWrapper suffixIcon={<RightArrow />}>
          <H1>{collection?.title}</H1>
        </TitleWrapper>
      )}
    </Link>
  );
};

export default CollectionCard;

/**
 *
 * Styles
 *
 */

const PhotoContainer = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
`;

const TitleWrapper = styled(PrimaryButton)`
  position: absolute;
  bottom: 10px;
  padding: 20px;
  border-radius: 0px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.bg.reverse};
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  justify-content: space-between;
  left: 10px;
  right: 10px;
  h1 {
    font-weight: 700;
  }
  /* icon */
  > div {
    color: ${themeColor("primary")};
    ${rtl("transform: rotate(180deg)", "transform: rotate(0deg)")};
  }
`;
