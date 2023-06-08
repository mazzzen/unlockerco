import React from "react";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import { FormattedMessage } from "react-intl";
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

interface EditNameModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  onSubmit: (values: FormValues) => void;
  error?: React.ReactNode;
  children?: React.ReactNode;
}

const EditNameModal: React.FC<EditNameModalProps> = ({
  isOpen,
  onClose,
  name,
  onSubmit,
  error,
}) => {
  return (
    <Modal show={isOpen} onClose={onClose} modalWidth="small">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        decorators={[focusOnError]}
        initialValues={{ name }}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Modal.Body>
              <H2 margin="0px 0px 10px 0px">
                <FormattedMessage defaultMessage="Change your name" />
              </H2>
              <P color="secondary">
                <FormattedMessage defaultMessage="If you want to change the name associated with our store, you may do so below." />
              </P>
              <Label>
                <FormattedMessage defaultMessage="Name" />
              </Label>
              <Field name="name">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                      data-test="type-name"
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

export default EditNameModal;

const validate = (values: FormValues) => {
  const errors: Record<string, unknown> = {};
  if (!values?.name) {
    errors.name = <FormattedMessage defaultMessage="Enter a valid name" />;
  }
  if (values.name?.trim()?.split(" ")?.length < 2) {
    errors.name = <FormattedMessage defaultMessage="Enter your full name" />;
  }
  return errors;
};
