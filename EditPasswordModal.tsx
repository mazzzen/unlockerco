import React from "react";
import { FormattedMessage } from "react-intl";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import Modal from "../../../../shared/globals/UiElements/Modal";
import { H2, P, Label, Input } from "../../../../shared/globals";
import {
  ButtonsContainer,
  SaveButton,
  RequiredSpan,
  CancelButton,
} from "./styled";
import type { FormValues } from "./types";

const focusOnError = createDecorator();

interface EditPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (values: FormValues) => void;
  error?: React.ReactNode;
  children?: React.ReactNode;
}

const EditPasswordModal: React.FC<EditPasswordModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  error,
}) => {
  return (
    <Modal show={isOpen} onClose={onClose} modalWidth="small">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        decorators={[focusOnError]}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <H2 margin="0px 0px 10px 0px">
                <FormattedMessage defaultMessage="Change your password" />
              </H2>
              <P color="secondary">
                <FormattedMessage defaultMessage="Use the form below to change the password for your account." />
              </P>

              {/* The input is only used for accessibility and password managers */}
              <input autoComplete="username" style={{ display: "none" }} />

              <Label>
                <FormattedMessage defaultMessage="Current Password" />
              </Label>
              <Field name="oldPassword" type="password">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      autoComplete="current-password"
                      className={error && touched ? "invalid" : ""}
                      data-test="type-name"
                      placeholder="Enter your current password"
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>

              <Label>
                <FormattedMessage defaultMessage="New password" />
              </Label>
              <Field name="newPassword" type="password">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      autoComplete="new-password"
                      className={error && touched ? "invalid" : ""}
                      data-test="type-name"
                      placeholder="Enter your new password"
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>

              <Label>
                <FormattedMessage defaultMessage="Re-enter new password" />
              </Label>
              <Field name="confirmedPassword" type="password">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      autoComplete="new-password"
                      className={error && touched ? "invalid" : ""}
                      data-test="type-name"
                      placeholder="Re-enter your new password"
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

export default EditPasswordModal;

const validate = (values: FormValues) => {
  const errors: Record<string, unknown> = {};
  if (!values?.oldPassword) {
    errors.oldPassword = (
      <FormattedMessage defaultMessage="Enter your current password" />
    );
  }
  if (!values?.newPassword) {
    errors.newPassword = (
      <FormattedMessage defaultMessage="Enter your new password" />
    );
  }
  if (values?.newPassword !== values?.confirmedPassword) {
    errors.confirmedPassword = (
      <FormattedMessage defaultMessage="These passwords not matched" />
    );
  }
  return errors;
};
