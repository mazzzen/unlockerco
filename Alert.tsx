import React from "react";
import styled, { CSSProperties } from "styled-components";
import { Information, Delete, AlertTriangle } from "../../../assets/Icons";
import { PrimaryButton } from "../../../components/Button";
import { FlexCol, FlexRow, H4, P } from "..";
import { theme } from "../../theme";

type AlertType = keyof Pick<typeof theme, "danger" | "warn">;

interface ExceedQuantityProps {
  message: React.ReactElement;
  type?: AlertType;
  helperMessage?: React.ReactElement;
  icon?: React.ReactElement;
  style?: CSSProperties;
  className?: string;
  closeAction?: () => void;
}

const Alert = ({
  message,
  type = "danger",
  helperMessage,
  icon,
  style,
  className,
  closeAction,
}: ExceedQuantityProps) => {
  return (
    <Container type={type} className={className} style={style}>
      <FlexRow spacing="m">
        {icon ? icon : type === "warn" ? <AlertTriangle /> : <Information />}
        <FlexCol spacing="xs" alignItems="flex-start">
          <Message type={type} isHelperMessage={!!helperMessage}>
            {message}
          </Message>
          {helperMessage && (
            <HelperMessage type={type}>{helperMessage}</HelperMessage>
          )}
        </FlexCol>
      </FlexRow>
      {closeAction && (
        <PrimaryButton
          style={{
            padding: 0,
            color: theme[type].default,
          }}
          reversed
          transparent
          onClick={closeAction}
        >
          <Delete small />
        </PrimaryButton>
      )}
    </Container>
  );
};

export default Alert;

const Container = styled(FlexRow)<{ type: AlertType }>`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 6px;
  padding: 12px 16px;
  background-color: ${({ theme, type }) => theme[type].wash};
  border: 1px solid ${({ theme, type }) => theme[type].border};
  border-radius: 6px;
  z-index: 99;

  div > svg {
    min-width: 20px;
    min-height: 20px;
  }
`;

const Message = styled(H4)<{ type: AlertType; isHelperMessage: boolean }>`
  color: ${({ theme, type }) => theme[type].default};
  font-size: ${({ isHelperMessage }) => (isHelperMessage ? "16px" : "")};
  font-weight: ${({ isHelperMessage }) => (isHelperMessage ? 600 : "")};

  @media (max-width: 768px) {
    font-size: 12px;
  }

  span {
    color: ${({ theme, type }) => theme[type].default};
  }
`;

const HelperMessage = styled(P)<{ type: AlertType }>`
  color: ${({ theme, type }) => theme[type].alt};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
