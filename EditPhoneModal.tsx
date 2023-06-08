import React from "react";
import { Form, Field } from "react-final-form";
import { FormattedMessage } from "react-intl";
import createDecorator from "final-form-focus";
import Modal from "../../../../shared/globals/UiElements/Modal";
import { H2, P, Label, FlexRow } from "../../../../shared/globals";
import {
  ButtonsContainer,
  SaveButton,
  RequiredSpan,
  CancelButton,
} from "./styled";
import type { FormValues } from "./types";
import InputPhone, {
  PhoneInput,
} from "../../../../shared/globals/UiElements/InputPhone";

const focusOnError = createDecorator();

interface EditPhoneModalProps {
  isOpen: boolean;
  onClose: () => void;
  phone: PhoneInput;
  onSubmit: (values: FormValues) => void;
  error?: React.ReactNode;
  children?: React.ReactNode;
}

const EditPhoneModal: React.FC<EditPhoneModalProps> = ({
  isOpen,
  onClose,
  phone,
  onSubmit,
  error,
}) => {
  return (
    <Modal show={isOpen} onClose={onClose} modalWidth="small">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        decorators={[focusOnError]}
        initialValues={{ phone }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <H2 margin="0px 0px 10px 0px">
                <FormattedMessage defaultMessage="Change your phone" />
              </H2>
              <P color="secondary">
                <FormattedMessage defaultMessage="If you want to change the phone associated with our store, you may do so below." />
              </P>
              <Label>
                <FlexRow>
                  <FormattedMessage defaultMessage="Phone no." />
                </FlexRow>
              </Label>
              <Field<PhoneInput> name="phone">
                {(fieldProps) => (
                  <InputPhone {...fieldProps} dataTest="type-primary-phone" />
                )}
              </Field>
              {error && <RequiredSpan>{error}</RequiredSpan>}
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
            </Modal.Body>
          </form>
        )}
      />
    </Modal>
  );
};

export default EditPhoneModal;

const validate = (values: FormValues) => {
  const errors: Record<string, unknown> = {};
  if (!values?.phone?.isValid) {
    errors.phone = (
      <FormattedMessage defaultMessage="Enter a valid phone number" />
    );
  }
  return errors;
};
