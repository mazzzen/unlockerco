import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Information } from "../../../../assets/Icons";
import {
  AddressInfoFragment,
  CheckoutFieldOptions,
  CustomerIdentifier,
} from "../../../../generated/graphql";
import { useStore } from "../../../../lib/storeData";
import { Card, FlexRow } from "../../../../shared/globals";
import DeleteAddress from "./DeleteAddress";
import { EditAddress } from "./EditAddress";

interface AddressesPanelProps {
  address: AddressInfoFragment;
  userName: string;
  isDefault?: boolean;
  SetDefaultButton?: React.ReactNode;
  DefaultBadge?: React.ReactNode;
  CheckButton?: React.ReactNode;
  onSelectAddress?: React.MouseEventHandler<HTMLDivElement>;
  isValid: boolean;
}
const AddressesPanel: React.FC<AddressesPanelProps> = ({
  address,
  userName,
  isDefault,
  SetDefaultButton,
  DefaultBadge,
  CheckButton,
  onSelectAddress,
  isValid,
}) => {
  const { customCheckoutSetting } = useStore();
  return (
    <>
      {!isValid && <InvalidAddressFlag />}
      <AddressesPanelContainer isValid={isValid}>
        <FlexRow alignItems="flex-start">
          {CheckButton ? CheckButton : null}
          <div style={{ flex: "1" }}>
            <FlexRow justifyContent="space-between" alignItems="start" flex="1">
              <AddressDetails
                onClick={onSelectAddress}
                isClickable={!!onSelectAddress}
              >
                {isDefault && DefaultBadge ? DefaultBadge : null}
                <StyledH5>{userName}</StyledH5>
                <span>{address?.addressLine1}</span>
                <span>{address?.addressLine2}</span>
                {address?.region && <span>{address?.region?.name}</span>}
                {address?.city && <span>{address?.city?.name}</span>}
                <span>{address?.state?.name}</span>
                <span>{address?.country?.name}</span>
                {address?.postalCode &&
                customCheckoutSetting?.postalCode !==
                  CheckoutFieldOptions.Inactive ? (
                  <span>{address?.postalCode}</span>
                ) : null}
                <span>
                  {customCheckoutSetting?.identifier !==
                    CustomerIdentifier.Email && address?.phone}
                </span>
              </AddressDetails>
              <div>
                <EditAddress addressDetails={address} />
                <DeleteAddress addressId={address?.id} />
              </div>
            </FlexRow>
            {!isDefault && SetDefaultButton ? SetDefaultButton : null}
          </div>
        </FlexRow>
      </AddressesPanelContainer>
    </>
  );
};

const InvalidAddressFlag = () => {
  return (
    <InvalidAddressFlagContainer>
      <FlexRow justifyContent="start" alignItems="center" spacing="s">
        <Information />
        <FlexRow spacing="xs">
          <StyledErrorText isBolded>
            <FormattedMessage defaultMessage="Missing shipping address information," />
          </StyledErrorText>
          <StyledErrorText>
            <FormattedMessage defaultMessage="Please edit the address" />
          </StyledErrorText>
        </FlexRow>
      </FlexRow>
    </InvalidAddressFlagContainer>
  );
};

const AddressesPanelContainer = styled(Card)<{ isValid: boolean }>`
  padding: 20px;
  margin-bottom: 20px;
  border: ${({ isValid, theme }) =>
    !isValid ? `1px solid ${theme.danger.alt}` : "solid 1px #dfe4e8"};
  border-radius: ${({ isValid }) => (isValid ? "4px" : "0 0 4px 4px ")};
`;

const AddressDetails = styled.div<{ isClickable }>`
  display: flex;
  flex-direction: column;

  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "auto")};

  span {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 1;
  }
`;

const StyledH5 = styled.h5`
  margin: 0px 0px 10px 0px;
  font-size: 14px;
`;

const InvalidAddressFlagContainer = styled.div`
  background-color: ${({ theme }) => theme.warn.wash};
  color: ${({ theme }) => theme.danger.default};
  padding: 10px 20px;
  border-radius: 4px 4px 0 0;
  border: solid 1px ${({ theme }) => theme.danger.alt};
  border-bottom: none;
`;

const StyledErrorText = styled.span<{ isBolded?: boolean }>`
  font-weight: ${({ isBolded }) => (isBolded ? "600" : "normal")};
  font-size: 14px;
`;
export default AddressesPanel;
