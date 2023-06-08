import React from "react";
import styled from "styled-components";
import {
  ResetPasswordPage,
  ForgotPasswordPage,
} from "../../../lib/Authentication";
import { Card } from "../../../shared/globals";
import { Section } from "../../../shared/layout";
import type { ResetPasswordPageProps } from "../../types";

const ResetPassword: React.FC<ResetPasswordPageProps> = ({ token }) => (
  <StyledContainer>
    <Section background="backgroundReverse">
      <StyledCard paddingSize="large">
        {token ? <ResetPasswordPage token={token} /> : <ForgotPasswordPage />}
      </StyledCard>
    </Section>
  </StyledContainer>
);

export default ResetPassword;

/**
 *
 * Styles
 *
 */

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.bg.reverse};
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
