import React from "react";
import styled from "styled-components";
import { StoreTemplate } from "../../TemplateLoader";
import type { TemplateElement, ProductsListProps } from "../../types";

const ProductsList: TemplateElement<ProductsListProps> = ({ products }) => {
  const Template = StoreTemplate.get();

  return (
    <StyledContainer>
      {products?.map((product) => (
        <Template.elements.ProductCard key={product?.id} product={product!} />
      ))}
    </StyledContainer>
  );
};

export default ProductsList;

/**
 *
 * Styles
 *
 */

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  padding: 40px 0;
  margin: 0;
  @media (min-width: 768px) {
    padding-bottom: 50px;
  }
`;
