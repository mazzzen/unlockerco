import React, { useState } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import { FormattedMessage } from "react-intl";
import { AddUser, UserFilledIcon } from "../../../assets/Icons";
import { H1, Label, Input, FlexRow, P, FlexCol } from "../../../shared/globals";
import { PrimaryButton } from "../../../components/Button";
import {
  HorizontalLine,
  RequiredSpan,
} from "../../../components/Contact/styled";
import Asterisk from "../../../shared/globals/UiElements/Asterisk";
import { convertHexToRgba, themeColor } from "../../../shared/styles-utils";
import { Link } from "../../i18n";
import { useApolloClient } from "@apollo/client";
import {
  ForgotPasswordDocument,
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
} from "../../../generated/graphql";
import { useStore } from "../../storeData";
import { getLocaleInfo } from "../../i18n/locales-data";

const focusOnError = createDecorator();

type FormValues = {
  email: string;
};

const ForgotPasswordPage = () => {
  const { storeId } = useStore();
  const { mutate } = useApolloClient();
  const { locale } = useIntl();
  const activeLocale = getLocaleInfo(locale).code;

  const [isInvalid, setIsInvalid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitForm = async (values: FormValues) => {
    setIsInvalid(false);
    try {
      await mutate<ForgotPasswordMutation, ForgotPasswordMutationVariables>({
        mutation: ForgotPasswordDocument,
        variables: {
          storeId,
          storeUrl: document.location.origin,
          email: values.email,
          locale: activeLocale,
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      setIsInvalid(true);
    }
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
                <FormattedMessage defaultMessage="Forgot password?" />
              </H1>
              <br />
              <P style={{ maxWidth: 330 }} margin="0 auto">
                <FormattedMessage
                  defaultMessage="Don’t worry! Enter your email address.
                  We’ll send you password reset link."
                />
                <br />
              </P>
            </StyledHeader>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="Your E-mail" />
                <Asterisk />
              </FlexRow>
              <Field name="email">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                      type="email"
                      readOnly={isSubmitted}
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>
            </Label>
            {isInvalid && (
              <RequiredSpan>
                <FormattedMessage defaultMessage="This E-mail doesn't exist!" />
              </RequiredSpan>
            )}
            {isSubmitted && (
              <SuccessSpan>
                <FormattedMessage defaultMessage="Reset password link was sent successfully, Check your email inbox" />
              </SuccessSpan>
            )}
            <PrimaryButton
              type="submit"
              style={{ marginTop: isSubmitted ? "1rem" : "2.5rem" }}
              fullWidth
              disabled={isSubmitted}
              isLoading={submitting}
            >
              <FormattedMessage defaultMessage="RESET PASSWORD" />
            </PrimaryButton>
            <HorizontalLine />
            <FlexRow justifyContent="space-around" alignItems="stretch">
              <SwitchWrapper>
                <IconWrapper>
                  <AddUser />
                </IconWrapper>
                <P>
                  <FormattedMessage defaultMessage="Don't Have an Account?" />
                </P>
                <PrimaryButton type="button" compact reversed>
                  <Link href="/registration">
                    <StyledSpan>
                      <FormattedMessage defaultMessage="Sign Up with E-mail" />
                    </StyledSpan>
                  </Link>
                </PrimaryButton>
              </SwitchWrapper>
              <VerticalLine />
              <SwitchWrapper>
                <IconWrapper>
                  <UserFilledIcon />
                </IconWrapper>
                <P>
                  <FormattedMessage defaultMessage="Remember your password?" />
                </P>
                <PrimaryButton type="button" compact reversed>
                  <Link href="/login">
                    <StyledSpan>
                      <FormattedMessage defaultMessage="Login to your account" />
                    </StyledSpan>
                  </Link>
                </PrimaryButton>
              </SwitchWrapper>
            </FlexRow>
          </form>
        );
      }}
    />
  );
};

export { ForgotPasswordPage };

/**
 *
 * Functions
 *
 */

const validate = (values: FormValues) => {
  const errors: Record<string, unknown> = {};

  if (
    !values?.email?.trim() ||
    !values?.email?.match(
      /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    )
  ) {
    errors.email = (
      <FormattedMessage defaultMessage="Please enter a valid email address" />
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

const SwitchWrapper = styled(FlexCol)`
  padding: 0 10px;
  margin-top: 20px;
  text-align: center;
`;

const SuccessSpan = styled(P)`
  background-color: #42ab441a;
  color: #42ab44;
  padding: 10px;
  margin-top: 10px;
  text-align: center;
  border-radius: 6px;
`;

const StyledSpan = styled.span`
  color: ${themeColor("primary")};
  margin-top: 4px;
  font-weight: 600;
  cursor: pointer;
`;

const IconWrapper = styled(FlexCol)`
  justify-content: center;
  width: 30px;
  height: 30px;
  margin-bottom: 8px;
  border-radius: 100%;
  background-color: ${({ theme }) =>
    convertHexToRgba(themeColor("primary")({ theme }), 20)};

  svg {
    width: 15px;

    path {
      fill: ${themeColor("primary")};
    }
  }
`;

const VerticalLine = styled.div`
  width: 1px;
  margin-top: 20px;
  background-color: ${({ theme }) => convertHexToRgba(theme.bg.wash, 10)};
`;
