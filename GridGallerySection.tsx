import { FC } from "react";
import styled from "styled-components";
import { GridGallerySectionProps } from "../../types";

const GridGallerySection: FC<GridGallerySectionProps> = ({
  children,
  isProduct,
}) => {
  return <GridContainer isProduct={isProduct}>{children}</GridContainer>;
};

export default GridGallerySection;

const GridContainer = styled.div<{ isProduct?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ isProduct }) => isProduct && "0px 15px"};
`;
