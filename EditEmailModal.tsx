import React from "react";
import Modal from "../../../../shared/globals/UiElements/Modal";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import { H2, P, Label, Input } from "../../../../shared/globals";
import { FormattedMessage } from "react-intl";
import {
  ButtonsContainer,
  SaveButton,
  RequiredSpan,
  CancelButton,
} from "./styled";
import type { FormValues } from "./types";

const focusOnError = createDecorator();

interface EditNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
  onSubmit: (values: FormValues) => void;
  error?: React.ReactNode;
  children?: React.ReactNode;
}
const EditEmailModal: React.FC<EditNameModalProps> = ({
  isOpen,
  onClose,
  email,
  onSubmit,
  error,
}) => {
  return (
    <Modal show={isOpen} onClose={onClose} modalWidth="small">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        decorators={[focusOnError]}
        initialValues={{ email }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <H2 margin="0px 0px 10px 0px">
                <FormattedMessage defaultMessage="Change your e-mail address" />
              </H2>
              <P color="secondary">
                <FormattedMessage defaultMessage="Enter the new email address you would like to associate with your account below." />
              </P>
              <Label>
                <FormattedMessage defaultMessage="New e-mail address" />
              </Label>
              <Field name="email" type="email">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                      data-test="type-email"
                      placeholder="Enter new e-mail address"
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
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

export default EditEmailModal;

const validate = (values: FormValues) => {
  const errors: Record<string, unknown> = {};
  if (!values?.email) {
    errors.email = <FormattedMessage defaultMessage="Enter a valid email" />;
  }
  return errors;
};
