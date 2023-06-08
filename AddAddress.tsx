import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { rtl } from "../../../../shared/styles-utils";
import { PrimaryButton } from "../../../Button";
import AddressModal from "./AddressModal";
import { UpdateIcon } from "../../../../assets/Icons";
import {
  useAddCustomerAddressMutation,
  ListCustomerAddressesDocument,
} from "../../../../generated/graphql";
import { useAuth } from "../../../../lib/Authentication";
import type { FormValues } from "./types";
import { useStore } from "../../../../lib/storeData";

interface AddAddressProps {
  fullWidth?: boolean;
}

export const AddAddress: React.FC<AddAddressProps> = ({ fullWidth }) => {
  const [active, setActive] = React.useState(false);
  const { user: loggedInUser } = useAuth();
  const { storeId } = useStore();

  const [addCustomerAddress] = useAddCustomerAddressMutation({
    refetchQueries: [
      {
        query: ListCustomerAddressesDocument,
        variables: { customerId: loggedInUser?.id, storeId },
      },
    ],
  });

  const handleSubmit = async (values: FormValues) => {
    try {
      await addCustomerAddress({
        variables: {
          customerId: loggedInUser?.id!,
          input: {
            addressLine1: values?.address,
            addressLine2: values?.apartment,
            phone: values?.phone?.value!,
            secondPhone: values?.secondPhone?.value,
            countryId: values?.shippingDestination?.country?.value,
            stateId: values?.shippingDestination?.state?.value,
            cityId: values?.shippingDestination?.city?.value,
            regionId: values?.shippingDestination?.region?.value,
            postalCode: values?.postalCode,
          },
        },
      });

      setActive(false);
    } catch (e) {}
  };

  return (
    <>
      <AddAddressButton
        prefixIcon={<UpdateIcon />}
        onClick={() => setActive(true)}
        fullWidth={fullWidth}
      >
        <FormattedMessage defaultMessage="Add new address" />
      </AddAddressButton>
      <AddressModal
        mode="ADD"
        isOpen={active}
        onClose={() => setActive(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

const AddAddressButton = styled(PrimaryButton)`
  padding: 12px 20px !important;
  svg {
    transform: scaleX(${rtl("-1", "1")});
  }
`;

export default AddAddress;
