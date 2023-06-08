import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import {
  useListCustomerAddressesQuery,
  useMakeDefaultAddressMutation,
  ListCustomerAddressesDocument,
} from "../../../../generated/graphql";
import { useAuth } from "../../../../lib/Authentication";
import { H3, Card, FlexRow, Spinner } from "../../../../shared/globals";
import LoadingSpinner from "../../../../shared/globals/UiElements/LoadingSpinner";
import AddressesEmptyState from "./AddressesEmptyState";
import AddressesPanel from "./AddressesPanel";
import AddAddress from "./AddAddress";
import { useStore } from "../../../../lib/storeData";

interface UserAddressesProps {}

const UserAddresses: React.FC<UserAddressesProps> = () => {
  const { user: loggedInUser } = useAuth();
  const { storeId } = useStore();
  const { data, loading } = useListCustomerAddressesQuery({
    variables: { customerId: loggedInUser?.id!, storeId },
  });
  const [makeDefaultAddress, { loading: settingDefault }] =
    useMakeDefaultAddressMutation({
      refetchQueries: [
        {
          query: ListCustomerAddressesDocument,
          variables: { customerId: loggedInUser?.id, storeId },
        },
      ],
    });

  const setDefaultAddress = async (userId: string, addressId: string) => {
    await makeDefaultAddress({
      variables: { customerId: userId, addressId: addressId, storeId },
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <MarginTop>
      <AddressesHeader>
        <H3 fontWeight="bold">
          <FormattedMessage defaultMessage="My Addresses" />
        </H3>
        {data?.customerAddresses?.length && <AddAddress />}
      </AddressesHeader>
      {data?.customerAddresses?.length ? (
        <>
          {data?.customerAddresses?.map((address) => (
            <AddressesPanel
              key={address?.id}
              userName={loggedInUser?.name!}
              address={address}
              isDefault={address.isDefault}
              isValid={true}
              SetDefaultButton={
                <FlexRow
                  alignItems="center"
                  spacing="m"
                  margin="10px 0px 0px 0px"
                >
                  <DefaultAddressButton
                    onClick={() =>
                      setDefaultAddress(loggedInUser?.id!, address.id)
                    }
                  >
                    <FormattedMessage defaultMessage="Set as default address" />
                  </DefaultAddressButton>
                  {settingDefault && <Spinner inline size={16} />}
                </FlexRow>
              }
              DefaultBadge={
                <DefaultAddress>
                  <FormattedMessage defaultMessage="Default Address" />
                </DefaultAddress>
              }
            />
          ))}
        </>
      ) : (
        <AddressesList paddingSize="xlarge">
          <AddressesEmptyState />
        </AddressesList>
      )}
    </MarginTop>
  );
};

export { UserAddresses };

const MarginTop = styled.div`
  margin-top: 25px;
  width: 100%;
`;

const AddressesList = styled(Card)`
  margin-top: 11px;
  overflow: auto;
`;

const AddressesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const DefaultAddress = styled.span`
  display: flex;
  width: fit-content;
  font-weight: 600;
  font-size: 14px;
  padding: 7px 20px;
  background: rgba(254, 153, 49, 0.2);
  color: #fe9931;
  border-radius: 6px;
  margin-bottom: 10px !important;
`;

const DefaultAddressButton = styled.button`
  color: #fe9931;
  background-color: white;
  font-weight: 600;
  font-size: 14px;
  border: none;
  padding: 0px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
