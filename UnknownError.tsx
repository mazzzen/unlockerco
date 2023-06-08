import React from "react";
import { FormattedMessage } from "react-intl";
import { C500, RightArrow } from "../../assets/Icons";
import { Section } from "../../shared/layout";
import { PrimaryButton } from "../Button";
import {
  StyledHead,
  StyledParagraph,
  StyledWrapper,
  SvgWrapper,
} from "./PageNotFound";

function UnknownError() {
  return (
    <Section>
      <StyledWrapper>
        <StyledHead>
          <FormattedMessage defaultMessage="Something went wrong!" />
        </StyledHead>
        <SvgWrapper>
          <C500 />
        </SvgWrapper>
        <StyledParagraph>
          <FormattedMessage defaultMessage="Sorry we’re unable to find the page you’re looking for." />
        </StyledParagraph>
        <PrimaryButton href="/shop" suffixIcon={<RightArrow />}>
          <FormattedMessage defaultMessage=" Go back to Shop" />
        </PrimaryButton>
      </StyledWrapper>
    </Section>
  );
}

export default UnknownError;
