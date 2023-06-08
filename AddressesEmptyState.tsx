import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import { EcommerceReceipt } from "../../../../assets/Icons";
import { FlexCol, H3, H4 } from "../../../../shared/globals";
import AddAddress from "./AddAddress";

const AddressesEmptyState = () => {
  return (
    <FlexCol>
      <EcommerceReceipt />
      <TextWrapper>
        <H3 fontWeight="bold">
          <FormattedMessage defaultMessage="There are no addresses yet!" />
        </H3>
        <StyledH4>
          <FormattedMessage defaultMessage="Add your addresses and we will save it for you in next purchases" />
        </StyledH4>
        <AddAddress />
      </TextWrapper>
    </FlexCol>
  );
};

export default AddressesEmptyState;

const StyledH4 = styled(H4)`
  color: ${({ theme }) => theme.brand.default};
  opacity: 0.8;
  margin: 10px 0px 20px 0px;
`;

const TextWrapper = styled.div`
  margin: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
