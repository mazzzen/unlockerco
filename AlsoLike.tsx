import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { P } from "../../../shared/globals";
import { themeColor } from "../../../shared/styles-utils";
import { Link } from "../../../lib/i18n";
import type { AlsoLikeProps, TemplateElement } from "../../types";
import { StoreTemplate } from "../../TemplateLoader";

const AlsoLike: TemplateElement<AlsoLikeProps> = ({ products }) => {
  const Template = StoreTemplate.get();
  return (
    <>
      <StyledHeading>
        <MayLike>
          <FormattedMessage defaultMessage="You May Also Like" />
        </MayLike>
        <SeeProducts>
          <Link href="/shop">
            <FormattedMessage defaultMessage="See all products  " />
          </Link>
        </SeeProducts>
      </StyledHeading>
      <Template.elements.ProductsList products={products?.slice(0, 4)} />
    </>
  );
};

AlsoLike.displayName = "AlsoLike";
export default AlsoLike;

/**
 *
 * Styles
 *
 */

const StyledHeading = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  place-content: center;
  justify-content: space-between;
  margin: auto;
`;

const MayLike = styled(P)`
  font-size: 16px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const SeeProducts = styled(P)`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.38;

  a {
    text-decoration: none;
    color: ${themeColor("primary")};

    &:hover {
      color: ${({ theme }) => theme.brand.default};
    }
  }
`;
