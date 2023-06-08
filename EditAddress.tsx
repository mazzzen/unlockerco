import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { rtl } from "../../../../shared/styles-utils";
import { PrimaryButton } from "../../../Button";
import AddressModal from "./AddressModal";
import { UpdateIcon } from "../../../../assets/Icons";
import { useAuth } from "../../../../lib/Authentication";
import {
  useUpdateCustomerAddressMutation,
  AddressInfoFragment,
  ListCustomerAddressesDocument,
} from "../../../../generated/graphql";
import type { FormValues } from "./types";
import { createDefaultPhoneInput } from "../../../../shared/globals/UiElements/InputPhone";
import { useStore } from "../../../../lib/storeData";

interface EditAddressProps {
  addressDetails: AddressInfoFragment;
}
export const EditAddress: React.FC<EditAddressProps> = ({ addressDetails }) => {
  const { user: loggedInUser } = useAuth();
  const { storeId } = useStore();
  const [active, setActive] = React.useState(false);
  const [updateCustomerAddress] = useUpdateCustomerAddressMutation({
    refetchQueries: [
      {
        query: ListCustomerAddressesDocument,
        variables: { customerId: loggedInUser?.id, storeId },
      },
    ],
  });

  const phone = createDefaultPhoneInput(addressDetails.phone);
  const secondPhone = createDefaultPhoneInput(addressDetails.secondPhone);
  const defaultValues: FormValues = {
    phone: phone!,
    secondPhone: secondPhone!,
    postalCode: addressDetails?.postalCode!,
    address: addressDetails?.addressLine1!,
    apartment: addressDetails?.addressLine2!,
    shippingDestination: {
      isValid: !!addressDetails?.country?.id && !!addressDetails?.state?.id,
      country: {
        label: addressDetails?.country?.name!,
        value: addressDetails?.country?.id!,
      },
      state: {
        label: addressDetails?.state?.name!,
        value: addressDetails?.state?.id!,
      },
      city: {
        label: addressDetails?.city?.name!,
        value: addressDetails?.city?.id!,
      },
      region: {
        label: addressDetails?.region?.name!,
        value: addressDetails?.region?.id!,
      },
    },
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      await updateCustomerAddress({
        variables: {
          customerId: loggedInUser?.id!,
          addressId: addressDetails?.id,
          input: {
            addressLine1: values?.address,
            addressLine2: values?.apartment,
            phone: values?.phone?.value,
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
      <EditAddressButton
        prefixIcon={<UpdateIcon />}
        onClick={() => setActive(true)}
      >
        <FormattedMessage defaultMessage="Edit" />
      </EditAddressButton>

      <AddressModal
        mode="EDIT"
        isOpen={active}
        onClose={() => setActive(false)}
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
      />
    </>
  );
};

const EditAddressButton = styled(PrimaryButton)`
  padding: 12px 35px 12px 22px !important;
  margin: 0px 0px 10px 0px !important;
  svg {
    transform: scaleX(${rtl("-1", "1")});
  }
`;
