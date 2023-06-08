import React from "react";
import styled from "styled-components";
import { LoginPage } from "../../../lib/Authentication";
import { Card } from "../../../shared/globals";
import { Section } from "../../../shared/layout";
import { themeColor } from "../../../shared/styles-utils";
import type { LoginPageProps } from "../../types";

const Login: React.FC<LoginPageProps> = () => {
  return (
    <StyledContainer>
      <Section background="backgroundReverse">
        <StyledCard paddingSize="large">
          <LoginPage />
        </StyledCard>
      </Section>
    </StyledContainer>
  );
};

export default Login;

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
