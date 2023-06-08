import React from "react";
import styled from "styled-components";
import { FlexCol, H1 } from "../../../../shared/globals";
import { Photo } from "../../../../shared/globals/UiElements/Photo";
import type { CustomProductInfoProps } from "../../../types";

interface HeadingSectionProps {
  product: CustomProductInfoProps["product"];
}

const HeadingSection = ({ product }: HeadingSectionProps) => {
  return (
    <Container>
      {product?.images[0]?.src ? (
        <ProductImageContainer>
          <Photo
            image={product.images[0]}
            objectFit="contain"
            alt={product.title}
          />
        </ProductImageContainer>
      ) : null}
      <FlexCol alignItems="flex-start">
        <ProductTitle>{product.title}</ProductTitle>
        <span
          dangerouslySetInnerHTML={{
            __html: product?.descriptionHtml,
          }}
        />
      </FlexCol>
    </Container>
  );
};

export default HeadingSection;

/**
 *
 *
 * Styles
 *
 *
 */

const Container = styled(FlexCol)`
  margin-bottom: 20px;
  padding: 20px 0;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 200px;
  min-width: 120px;
  height: 200px;
  min-height: 120px;
  margin-bottom: 20px;
  width: 100%;
  @media (min-width: 768px) {
    align-self: flex-start;
    width: 120px;
    height: 120px;
    margin-bottom: 0px;
    margin-inline-end: 12px;
  }
`;

const ProductTitle = styled(H1)`
  margin-bottom: 6px;
  font-weight: 500;
`;
