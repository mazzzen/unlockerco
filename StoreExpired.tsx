import React from "react";
import { Section } from "../../shared/layout";
import { StoreClosed } from "../../assets/Icons";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { H2, P } from "../../shared/globals";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const StyledHeading = styled(H2)`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.69px;
  color: #1a1a1a;
  margin-top: 20px;
`;

const TemporarilyMsg = styled(P)`
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  color: #5f738c;
  margin-top: 14px;
`;

function StoreExpiredError() {
  return (
    <Section>
      <ItemWrapper>
        <StoreClosed />
        <StyledHeading>
          <FormattedMessage defaultMessage="We will be back soon" />
        </StyledHeading>
        <TemporarilyMsg>
          <FormattedMessage defaultMessage="We’re temporarily closed!" />
        </TemporarilyMsg>
      </ItemWrapper>
    </Section>
  );
}

export default StoreExpiredError;
