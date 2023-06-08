import React, { Dispatch, SetStateAction } from "react";
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";
import { Mail, Phone } from "../../../assets/Icons";
import { FlexRow } from "../../../shared/globals";
import { LoginMethod } from "./LogInPage";

interface LoginSwitcher {
  activeTab: LoginMethod;
  setActiveTab: Dispatch<SetStateAction<LoginMethod>>;
}

const LoginSwitcher = ({ activeTab, setActiveTab }: LoginSwitcher) => {
  return (
    <Container>
      <StyledFlexRow
        isActive={activeTab === "EMAIL"}
        onClick={() => setActiveTab("EMAIL")}
      >
        <Mail />
        <FormattedMessage defaultMessage="E-mail" />
      </StyledFlexRow>
      <StyledFlexRow
        isActive={activeTab === "PHONE"}
        onClick={() => setActiveTab("PHONE")}
      >
        <Phone />
        <FormattedMessage defaultMessage="Phone" />
      </StyledFlexRow>
    </Container>
  );
};

export default LoginSwitcher;

const Container = styled(FlexRow)`
  border: 1px solid ${({ theme }) => theme.bg.inactive};
  border-radius: 0.25rem;
  margin-top: 20px;
`;

const StyledFlexRow = styled(FlexRow)<{ isActive: boolean }>`
  width: 50%;
  justify-content: center;
  padding: 10px;
  cursor: pointer;

  &:not(:last-of-type) {
    border-inline-end: 1px solid ${({ theme }) => theme.bg.inactive};
  }

  & > *:first-child {
    margin-inline-end: 10px;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.colors.primary}33;
    `}
`;
