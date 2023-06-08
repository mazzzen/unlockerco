import React from "react";
import styled from "styled-components";
import { RightArrow } from "../../../../../assets/Icons";
import { PrimaryButton } from "../../../../../components/Button";
import { H1 } from "../../../../../shared/globals";
import { Photo } from "../../../../../shared/globals/UiElements/Photo";
import { themeColor, rtl } from "../../../../../shared/styles-utils";
import { FormattedDataType } from "../../../../types";
import { Link } from "../../../../../lib/i18n";

export interface AttributeValueCardProps {
  attributeValue: FormattedDataType["attributeValues"][0];
  hideTitle: boolean;
}

const AttributeValueCard: React.FC<AttributeValueCardProps> = ({
  attributeValue,
  hideTitle,
}) => {
  return (
    <Link
      fullHeight
      href={`/shop`}
      query={{
        page: 1,
        filters: `a:${attributeValue?.id}|${attributeValue?.attribute?.id}`,
      }}
    >
      <PhotoContainer>
        <Photo
          src={attributeValue?.image?.src || "/default-placeholder-image.png"}
          alt={attributeValue?.name!}
        />
      </PhotoContainer>
      {!hideTitle && (
        <TitleWrapper suffixIcon={<RightArrow />}>
          <H1>{attributeValue?.name}</H1>
        </TitleWrapper>
      )}
    </Link>
  );
};

export default AttributeValueCard;

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
