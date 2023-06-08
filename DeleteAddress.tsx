import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { rtl } from "../../../../shared/styles-utils";
import { GarbageIcon } from "../../../../assets/Icons";
import { PrimaryButton } from "../../../Button";
import { useAuth } from "../../../../lib/Authentication";
import {
  ListCustomerAddressesDocument,
  useDeleteCustomerAddressMutation,
} from "../../../../generated/graphql";
import { ModalConfirm } from "../../../../shared/globals/UiElements/ModalConfirm";
import { useStore } from "../../../../lib/storeData";

interface DeleteAddressProps {
  addressId: string;
  children?: React.ReactNode;
}

const DeleteAddress: React.FC<DeleteAddressProps> = ({ addressId }) => {
  const { storeId } = useStore();
  const { user } = useAuth();
  const [deleteCustomerAddress, { loading }] = useDeleteCustomerAddressMutation(
    {
      refetchQueries: [
        {
          query: ListCustomerAddressesDocument,
          variables: { customerId: user?.id, storeId },
        },
      ],
    }
  );

  const onDelete = async (userId: string, addressId: string) => {
    await deleteCustomerAddress({
      variables: { customerId: userId, addressId: addressId, storeId },
    });
  };
  return (
    <ModalConfirm
      modalBody={
        <FormattedMessage defaultMessage="Are you sure you want to delete this address" />
      }
      modalHeader={<FormattedMessage defaultMessage="Delete Address" />}
      loading={loading}
      onConfirm={() => onDelete(user?.id!, addressId)}
    >
      <DeleteButton prefixIcon={<GarbageIcon />}>
        <FormattedMessage defaultMessage="Delete" />
      </DeleteButton>
    </ModalConfirm>
  );
};

const DeleteButton = styled(PrimaryButton)`
  padding: 12px 26px 12px 10px;
  color: ${({ theme }) => theme.text.inkLight};
  background: #eff2f5;
  border-radius: 4px;
  border: none;
  svg {
    transform: scaleX(${rtl("-1", "1")});
  }
`;
export default DeleteAddress;
