import { FormattedMessage } from "react-intl";
import {
  CheckoutFields,
  CheckoutInformation,
} from "../../../contexts/CartContext/types";
import {
  CheckoutFieldOptions,
  CustomCheckoutSetting,
  CustomerIdentifier,
  NameInputOptions,
} from "../../../generated/graphql";

export const validate = (
  values: Partial<CheckoutInformation>,
  customCheckoutSetting: CustomCheckoutSetting | null | undefined,
  passFields?: CheckoutFields[]
) => {
  const errors: Record<string, unknown> = {};
  if (
    !values.phone?.isValid &&
    customCheckoutSetting?.identifier !== CustomerIdentifier.Email &&
    !passFields?.includes(CheckoutFields.Phone)
  ) {
    errors.phone = (
      <FormattedMessage defaultMessage="Enter a valid phone number" />
    );
  }
  if (
    !values.secondPhone?.value &&
    customCheckoutSetting?.secondaryPhone === CheckoutFieldOptions.Mandatory &&
    !passFields?.includes(CheckoutFields.SecondPhone) &&
    customCheckoutSetting?.identifier !== CustomerIdentifier.Email
  ) {
    errors.secondPhone = <FormattedMessage defaultMessage="Required field" />;
  }
  if (
    values.secondPhone?.value &&
    !values.secondPhone?.isValid &&
    !passFields?.includes(CheckoutFields.SecondPhone)
  ) {
    errors.secondPhone = (
      <FormattedMessage defaultMessage="Enter a valid phone number" />
    );
  }
  if (
    (!values?.email ||
      !values?.email?.match(
        /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      )) &&
    customCheckoutSetting?.identifier !== CustomerIdentifier.Phone &&
    !passFields?.includes(CheckoutFields.Email)
  ) {
    errors.email = (
      <FormattedMessage defaultMessage="Please enter a valid email address" />
    );
  }

  if (
    values.secondPhone?.value === values.phone?.value &&
    !passFields?.includes(CheckoutFields.SecondPhone) &&
    customCheckoutSetting?.identifier !== CustomerIdentifier.Email
  ) {
    errors.secondPhone = (
      <FormattedMessage defaultMessage="Different phone number required" />
    );
  }

  if (!values.name && !passFields?.includes(CheckoutFields.Name)) {
    errors.name = <FormattedMessage defaultMessage="Your name is required" />;
  }
  if (
    values?.name?.trim()?.split(" ")?.length! < 2 &&
    customCheckoutSetting?.name === NameInputOptions.FirstAndLast &&
    !passFields?.includes(CheckoutFields.Name)
  ) {
    errors.name = <FormattedMessage defaultMessage="Enter your full name" />;
  }
  if (!values.address && !passFields?.includes(CheckoutFields.Address)) {
    errors.address = <FormattedMessage defaultMessage="Enter your address" />;
  }
  if (!values.apartment && !passFields?.includes(CheckoutFields.Apartment)) {
    errors.apartment = <FormattedMessage defaultMessage="Required field" />;
  }
  if (
    !values.shippingDestination?.isValid &&
    !passFields?.includes(CheckoutFields.ShippingDestination)
  ) {
    errors.shippingDestination = "error";
  }
  if (
    !values.postalCode?.trim() &&
    customCheckoutSetting?.postalCode === CheckoutFieldOptions.Mandatory &&
    !passFields?.includes(CheckoutFields.PostalCode)
  ) {
    errors.postalCode = <FormattedMessage defaultMessage="Required field" />;
  }
  if (
    !values.notes?.trim() &&
    customCheckoutSetting?.notesToSeller === CheckoutFieldOptions.Mandatory &&
    !passFields?.includes(CheckoutFields.Notes)
  ) {
    errors.notes = <FormattedMessage defaultMessage="Required field" />;
  }

  return errors;
};
