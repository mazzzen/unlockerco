import React from "react";
import styled from "styled-components";
import { C404, RightArrow } from "../../assets/Icons";
import { PrimaryButton } from "../Button";
import { H1, P } from "../../shared/globals";
import { Section } from "../../shared/layout";
import { FormattedMessage } from "react-intl";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 0;
  > * {
    margin-bottom: 40px;
  }
`;

export const SvgWrapper = styled.div`
  svg {
    width: 280px;
  }
  @media (min-width: 768px) {
    svg {
      width: auto;
    }
  }
`;

export const StyledHead = styled(H1)`
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const StyledParagraph = styled(P)`
  font-size: 12px;
  line-height: 1.43;
  font-weight: normal;
  color: #5f738c;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export default function PageNotFoundError() {
  return (
    <Section>
      <StyledWrapper>
        <StyledHead>
          <FormattedMessage defaultMessage="Page not found!" />
        </StyledHead>
        <SvgWrapper>
          <C404 />
        </SvgWrapper>
        <StyledParagraph>
          <FormattedMessage defaultMessage="Sorry we’re unable to find the page you’re looking for." />
        </StyledParagraph>
        <PrimaryButton href="/shop" suffixIcon={<RightArrow />}>
          <FormattedMessage defaultMessage="Go back to Shop" />
        </PrimaryButton>
      </StyledWrapper>
    </Section>
  );
}
