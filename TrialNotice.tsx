import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Danger, WuiltLogo } from "../../assets/Icons";
import { useStore } from "../../lib/storeData";
import { P } from "../../shared/globals";
import { rtl } from "../../shared/styles-utils";
import { PrimaryButton } from "../Button";
import { checkSubscriptionActive } from "../../shared/utils/check-subscription-active";

const { WUILT_STORE_ADMIN_URL } = process.env;

const StyledTrial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #fdf0e3;
  text-align: center;
  @media (min-width: 768px) {
    flex-direction: row;
    height: 50px;
  }
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ActionBtn = styled(PrimaryButton)`
  height: 32px;
  font-size: 10px;
  padding: 8px 16px;
  background-color: #e98305;
  border: 1px solid #e98305;
  margin-bottom: 14px;
  ${rtl("padding:  8px 5px 8px 16px", "padding: 8px 16px 8px 5px")};
  @media (min-width: 768px) {
    ${rtl("margin:  0 12px 0 0;", "margin: 0 0 0 12px;")};
  }
  div {
    padding: 0;
  }
`;

const MessageText = styled(P)`
  font-size: 14px;
  line-height: 1.43;
  color: #e98305;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const TrialMessage = () => {
  const { subscription } = useStore();
  return (
    <>
      {!checkSubscriptionActive(subscription) && (
        <StyledTrial>
          <MessageWrapper>
            <Danger />
            <MessageText>
              <FormattedMessage defaultMessage="This is a demo store, and can’t accept real orders" />
            </MessageText>
          </MessageWrapper>
          <MessageWrapper>
            <MessageText>
              <FormattedMessage defaultMessage="Create your own online store with Wuilt E-commerce" />
            </MessageText>
            <ActionBtn href={WUILT_STORE_ADMIN_URL} prefixIcon={<WuiltLogo />}>
              <FormattedMessage defaultMessage="Create Store" />
            </ActionBtn>
          </MessageWrapper>
        </StyledTrial>
      )}
    </>
  );
};

export { TrialMessage };
