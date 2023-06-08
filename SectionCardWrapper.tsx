import React, { FC } from "react";
import styled from "styled-components";
import { FlexCol } from "../../../shared/globals";
import { SectionCardWrapperProps } from "../../types";
import { SectionBackgroundTypeEnum } from "../../../generated/graphql";

const DEFAULT_PRODUCT_COLUMN_COUNT = 3;

const SectionCardWrapper: FC<SectionCardWrapperProps> = ({
  children,
  columnCount,
  isCollection,
  isProduct,
  isSlider,
  background,
}) => {
  return (
    <CardWrapper
      columnCount={columnCount}
      isCollection={isCollection}
      isProduct={isProduct}
      isSlider={isSlider}
      background={background}
    >
      {children}
    </CardWrapper>
  );
};

export default SectionCardWrapper;

const CardWrapper = styled(FlexCol)<{
  columnCount: number;
  isCollection?: boolean;
  isProduct?: boolean;
  isSlider?: boolean;
  background?: {
    color?: string;
    type: SectionBackgroundTypeEnum;
  };
}>`
  width: ${({ isSlider }) => (isSlider ? "auto" : "100%")};
  height: ${({ isProduct, isSlider }) =>
    isSlider ? "calc(100% - 40px)" : isProduct ? "auto" : "350px"};
  position: relative;
  background-color: ${({ background }) =>
    background?.type === SectionBackgroundTypeEnum.Color
      ? background?.color
      : "transparent"};
  padding: ${({ isCollection }) => (isCollection ? "0" : "10px")};
  margin-bottom: ${({ isCollection }) => (isCollection ? "0" : "5%")};
  border-radius: ${({ isCollection }) => (isCollection ? "0" : "4px")};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
  cursor: pointer;
  flex: ${({ isProduct }) =>
    isProduct ? "0 0 calc(50% - 15px)" : "0 0 calc(100% - 15px)"};

  @media (min-width: 768px) {
    margin-bottom: ${({ isCollection }) => (isCollection ? "0" : "20px")};
    flex: ${({ isProduct, isCollection, columnCount }) => {
      if (isCollection) {
        return `0 0 calc(100% / ${columnCount})`;
      }
      if (isProduct && columnCount <= DEFAULT_PRODUCT_COLUMN_COUNT) {
        return `0 0 calc(100% / ${DEFAULT_PRODUCT_COLUMN_COUNT} - 15px)`;
      }
      return `0 0 calc(100% / ${columnCount} - 15px)`;
    }};
  }
`;
