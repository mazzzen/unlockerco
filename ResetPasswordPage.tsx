import React from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import { FormattedMessage } from "react-intl";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "../../i18n";
import { useStore } from "../../storeData";
import { H1, Label, Input, FlexRow } from "../../../shared/globals";
import { PrimaryButton } from "../../../components/Button";
import { RequiredSpan } from "../../../components/Contact/styled";
import Asterisk from "../../../shared/globals/UiElements/Asterisk";
import {
  MeDocument,
  MeQuery,
  MeQueryVariables,
  ResetPasswordDocument,
  ResetPasswordMutation,
  ResetPasswordMutationVariables,
} from "../../../generated/graphql";
import { registerUser } from "..";

const focusOnError = createDecorator();

type FormValues = {
  newPassword: string;
  confirmPassword: string;
};

interface ResetPasswordPageProps {
  token: string;
}

const ResetPasswordPage = ({ token }: ResetPasswordPageProps) => {
  const Router = useRouter();
  const { storeId } = useStore();
  const { mutate, query } = useApolloClient();

  const handleSubmitForm = async (values: FormValues) => {
    try {
      const { data: resetData } = await mutate<
        ResetPasswordMutation,
        ResetPasswordMutationVariables
      >({
        mutation: ResetPasswordDocument,
        variables: {
          storeId,
          token,
          newPassword: values.newPassword,
        },
      });

      const loginToken = resetData?.resetCustomerPassword;
      const { data: meData } = await query<MeQuery, MeQueryVariables>({
        query: MeDocument,
        context: { headers: { authorization: `Bearer ${loginToken}` } },
      });

      registerUser("login", meData?.me!, loginToken!);

      Router.replace("/");
    } catch (error) {}
  };

  return (
    <Form<FormValues>
      onSubmit={handleSubmitForm}
      validate={validate}
      decorators={[focusOnError as any]}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <StyledHeader>
              <H1 fontWeight={600}>
                <FormattedMessage defaultMessage="Enter your new password" />
              </H1>
              <br />
            </StyledHeader>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="New Password" />
                <Asterisk />
              </FlexRow>
              <Field name="newPassword">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                      type="password"
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>
            </Label>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="Confirm Password" />
                <Asterisk />
              </FlexRow>
              <Field name="confirmPassword">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                      type="password"
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>
            </Label>
            <PrimaryButton
              type="submit"
              style={{ marginTop: "2.5rem" }}
              fullWidth
              isLoading={submitting}
            >
              <FormattedMessage defaultMessage="RESET PASSWORD" />
            </PrimaryButton>
          </form>
        );
      }}
    />
  );
};

export { ResetPasswordPage };

/**
 *
 * Functions
 *
 */

const validate = (values: FormValues) => {
  const errors: Record<string, unknown> = {};

  if (!values?.newPassword?.trim() || values?.newPassword?.length < 6) {
    errors.newPassword = (
      <FormattedMessage defaultMessage="Password must contains at least 6 characters" />
    );
  }

  if (
    !values?.confirmPassword?.trim() ||
    values?.confirmPassword !== values?.newPassword
  ) {
    errors.confirmPassword = (
      <FormattedMessage defaultMessage="Passwords doesn't match!" />
    );
  }

  return errors;
};

/**
 *
 * Styles
 *
 */

const StyledHeader = styled.div`
  text-align: center;
`;
