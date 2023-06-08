import React from "react";
import styled from "styled-components";
import { SignUpPage } from "../../../lib/Authentication";
import { Card } from "../../../shared/globals";
import { Section } from "../../../shared/layout";
import { themeColor } from "../../../shared/styles-utils";
import type { RegistrationPageProps } from "../../types";

const Registration: React.FC<RegistrationPageProps> = () => {
  return (
    <StyledContainer>
      <Section background="backgroundReverse">
        <StyledCard paddingSize="large">
          <SignUpPage />
        </StyledCard>
      </Section>
    </StyledContainer>
  );
};

export default Registration;

/**
 *
 * Styles
 *
 */

const StyledContainer = styled.div`
  background-color: ${themeColor("backgroundReverse")};
  padding: 50px 0;
`;

const StyledCard = styled(Card)`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;
