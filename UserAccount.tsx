import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import EditUserInfo from "./EditUserInfo";
import { useAuth } from "../../../../lib/Authentication";
import { H3, Card, P, FlexRow, H4 } from "../../../../shared/globals";
import { Modes } from "./types";
import type { SuccessStateType } from "./types";
import { CheckCircle } from "../../../../assets/Icons";
import { rtl } from "../../../../shared/styles-utils";

const UserAccount = () => {
  const { user } = useAuth();
  const [isSuccess, setIsSuccess] = React.useState<SuccessStateType>({
    mode: null,
    isSuccess: false,
  });

  const handleSuccess = ({ mode, isSuccess }: SuccessStateType) => {
    setIsSuccess({ mode, isSuccess });
    setTimeout(() => setIsSuccess({ mode: null, isSuccess: false }), 5000);
  };

  return (
    <MarginTop>
      <H3 fontWeight="bold">
        <FormattedMessage defaultMessage="My Account" />
      </H3>
      <AccountCard paddingSize="none">
        <FieldWrapper>
          <div>
            <P color="secondary">
              <FormattedMessage defaultMessage="Name" />
            </P>
            <H3 fontWeight="bold">{user?.name}</H3>
          </div>
          <ActionWrapper>
            {isSuccess.mode === Modes["NAME"] && !!isSuccess.isSuccess && (
              <SuccessMessage />
            )}
            <EditUserInfo mode={Modes["NAME"]} onSuccess={handleSuccess} />
          </ActionWrapper>
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <P color="secondary">
              <FormattedMessage defaultMessage="E-mail address" />
            </P>
            <H3 fontWeight="bold">{user?.email}</H3>
          </div>
          <ActionWrapper>
            {isSuccess.mode === Modes["EMAIL"] && !!isSuccess.isSuccess && (
              <SuccessMessage />
            )}
            <EditUserInfo mode={Modes["EMAIL"]} onSuccess={handleSuccess} />
          </ActionWrapper>
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <P color="secondary">
              <FormattedMessage defaultMessage="Password" />
            </P>
            <H3 fontWeight="bold">*********</H3>
          </div>
          <ActionWrapper>
            {isSuccess.mode === Modes["PASSWORD"] && !!isSuccess.isSuccess && (
              <SuccessMessage />
            )}
            <EditUserInfo mode={Modes["PASSWORD"]} onSuccess={handleSuccess} />
          </ActionWrapper>
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <P color="secondary">
              <FormattedMessage defaultMessage="Phone" />
            </P>
            <H3 fontWeight="bold">{user?.phone}</H3>
          </div>
          <ActionWrapper>
            {isSuccess.mode === Modes["PHONE"] && !!isSuccess.isSuccess && (
              <SuccessMessage />
            )}
            <EditUserInfo mode={Modes["PHONE"]} onSuccess={handleSuccess} />
          </ActionWrapper>
        </FieldWrapper>
      </AccountCard>
    </MarginTop>
  );
};

export { UserAccount };

const SuccessMessage = () => (
  <SuccessMessageContainer>
    <CheckCircle />
    <H4 fontWeight={600}>
      <FormattedMessage defaultMessage="Saved" />
    </H4>
  </SuccessMessageContainer>
);

const MarginTop = styled.div`
  margin-top: 25px;
  width: 100%;
`;

const AccountCard = styled(Card)`
  margin-top: 11px;
  overflow: auto;
`;

const FieldWrapper = styled(FlexRow)`
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;

  :not(:last-child) {
    border-bottom: 1px solid rgba(79, 67, 53, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActionWrapper = styled(FlexRow)`
  @media (max-width: 768px) {
    margin-top: 10px;
    flex-direction: row-reverse;
  }
`;

const SuccessMessageContainer = styled(FlexRow)`
  background: #f0fdfa;
  padding: 10px 20px;
  border: 1px solid #ccfbf1;
  border-radius: 6px;
  margin: 0 20px;

  > h4 {
    color: #115e59;
  }

  > svg {
    ${rtl("margin-left", "margin-right")}: 10px;
  }
`;
