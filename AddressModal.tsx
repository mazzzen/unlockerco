import * as React from "react";
import Modal from "../../../../shared/globals/UiElements/Modal";
import { Form, Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import createDecorator from "final-form-focus";
import Asterisk from "../../../../shared/globals/UiElements/Asterisk";
import { H2, Label, Input, FlexRow } from "../../../../shared/globals";
import {
  StyledForm,
  ContactSection,
  AddAddressesSection,
  ButtonsContainer,
  SaveButton,
  FlexColRes,
  CancelButton,
  RelativeDiv,
} from "./styled";
import InputPhone, {
  PhoneInput,
} from "../../../../shared/globals/UiElements/InputPhone";
import type { FormValues } from "./types";
import ShippingDestinationSelect, {
  ShippingDestination,
} from "../../../UtilityComponents/ShippingDestinationSelect";
import { useStore } from "../../../../lib/storeData";
import {
  CheckoutFieldOptions,
  CustomerIdentifier,
} from "../../../../generated/graphql";
import { PhoneField, RequiredSpan } from "../../../Checkout/Information/styled";
import { validate } from "../../../Checkout/Information/validate";
import { CheckoutFields } from "../../../../contexts/CartContext/types";

const focusOnError = createDecorator();

interface AddressModalProps {
  isOpen: boolean;
  defaultValues?: FormValues;
  mode: "ADD" | "EDIT";
  onClose: () => void;
  onSubmit: (values: FormValues) => void;
}

const AddressModal: React.FC<AddressModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  mode,
  defaultValues,
}) => {
  const { customCheckoutSetting } = useStore();

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Form
        onSubmit={onSubmit}
        validate={(values) =>
          validate(values, customCheckoutSetting, [
            CheckoutFields.Name,
            CheckoutFields.Email,
            CheckoutFields.Notes,
          ])
        }
        decorators={[focusOnError]}
        render={({ handleSubmit, submitting }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Modal.Header>
              <H2>
                {mode === "ADD" ? (
                  <FormattedMessage defaultMessage="Add New Address" />
                ) : (
                  <FormattedMessage defaultMessage="Edit this address" />
                )}
              </H2>
            </Modal.Header>
            <Modal.Body>
              {customCheckoutSetting?.identifier !==
                CustomerIdentifier.Email && (
                <ContactSection>
                  <FlexColRes>
                    <PhoneField
                      fullWidth={
                        customCheckoutSetting?.secondaryPhone ===
                        CheckoutFieldOptions.Inactive
                      }
                      style={{ position: "relative" }}
                    >
                      <Label>
                        <FlexRow>
                          <FormattedMessage defaultMessage="Phone no." />
                          <Asterisk />
                        </FlexRow>
                      </Label>
                      <Field<PhoneInput>
                        name="phone"
                        defaultValue={defaultValues?.phone}
                      >
                        {(fieldProps) => (
                          <InputPhone
                            {...fieldProps}
                            dataTest="type-primary-phone"
                          />
                        )}
                      </Field>
                    </PhoneField>
                    {customCheckoutSetting?.secondaryPhone !==
                      CheckoutFieldOptions.Inactive && (
                      <PhoneField>
                        <Label>
                          <FlexRow>
                            <FormattedMessage defaultMessage="Secondary Phone no." />
                            {customCheckoutSetting?.secondaryPhone ===
                              CheckoutFieldOptions.Mandatory && <Asterisk />}
                          </FlexRow>
                        </Label>
                        <Field<PhoneInput>
                          name="secondPhone"
                          defaultValue={defaultValues?.secondPhone}
                        >
                          {(fieldProps) => <InputPhone {...fieldProps} />}
                        </Field>
                      </PhoneField>
                    )}
                  </FlexColRes>
                </ContactSection>
              )}
              <AddAddressesSection>
                <RelativeDiv>
                  <Label>
                    <FlexRow>
                      <FormattedMessage defaultMessage="Address" />
                      <Asterisk />
                    </FlexRow>
                  </Label>
                  <Field name="address" defaultValue={defaultValues?.address}>
                    {({ input, meta: { error, touched } }) => (
                      <>
                        <Input
                          {...input}
                          className={error && touched ? "invalid" : ""}
                          data-test="type-address"
                        />
                        {error && touched && (
                          <RequiredSpan>{error}</RequiredSpan>
                        )}
                      </>
                    )}
                  </Field>
                </RelativeDiv>
                <RelativeDiv>
                  <Label>
                    <FlexRow>
                      <FormattedMessage defaultMessage="Apartment, suite, Unit etc." />
                      <Asterisk />
                    </FlexRow>
                  </Label>
                  <Field
                    style={{ position: "relative" }}
                    name="apartment"
                    defaultValue={defaultValues?.apartment}
                  >
                    {({ input, meta: { error, touched } }) => (
                      <>
                        <Input
                          {...input}
                          className={error && touched ? "invalid" : ""}
                          data-test="type-apartment"
                        />
                        {error && touched && (
                          <RequiredSpan>{error}</RequiredSpan>
                        )}
                      </>
                    )}
                  </Field>
                </RelativeDiv>
                <Field<ShippingDestination>
                  name="shippingDestination"
                  defaultValue={defaultValues?.shippingDestination}
                >
                  {({ input, meta: { error, touched } }) => (
                    <ShippingDestinationSelect
                      {...input}
                      startQuery
                      error={error && touched}
                    />
                  )}
                </Field>
                {customCheckoutSetting?.postalCode !==
                  CheckoutFieldOptions.Inactive && (
                  <>
                    <Label>
                      <FlexRow>
                        <FormattedMessage defaultMessage="Postal Code" />
                        {customCheckoutSetting?.postalCode ===
                          CheckoutFieldOptions.Mandatory && <Asterisk />}
                      </FlexRow>
                    </Label>
                    <Field
                      name="postalCode"
                      defaultValue={defaultValues?.postalCode}
                    >
                      {({ input, meta: { error, touched } }) => (
                        <>
                          <Input
                            {...input}
                            data-test="type-postalcode"
                            type="text"
                            min="0"
                          />
                          {error && touched && (
                            <RequiredSpan>{error}</RequiredSpan>
                          )}
                        </>
                      )}
                    </Field>
                  </>
                )}
              </AddAddressesSection>
            </Modal.Body>
            <Modal.Footer>
              <ButtonsContainer>
                <CancelButton type="button" onClick={onClose}>
                  <FormattedMessage defaultMessage="Cancel" />
                </CancelButton>
                <SaveButton
                  data-test="button-save-changes"
                  type="submit"
                  isLoading={submitting}
                >
                  <FormattedMessage defaultMessage="Save Changes" />
                </SaveButton>
              </ButtonsContainer>
            </Modal.Footer>
          </StyledForm>
        )}
      />
    </Modal>
  );
};

export default AddressModal;
