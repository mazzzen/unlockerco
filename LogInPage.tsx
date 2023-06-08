import React, { ReactElement, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import { FormattedMessage } from "react-intl";
import { Field, Form } from "react-final-form";
import createDecorator from "final-form-focus";
import { FlexCol, FlexRow, H1, Input, Label, P } from "../../../shared/globals";
import { RequiredSpan } from "../../../components/Contact/styled";
import { PrimaryButton } from "../../../components/Button";
import { AddUser } from "../../../assets/Icons";
import { convertHexToRgba, themeColor } from "../../../shared/styles-utils";
import { Link } from "../../i18n";
import {
  LoginDocument,
  LoginQuery,
  LoginQueryVariables,
  MeDocument,
  MeQuery,
  MeQueryVariables,
} from "../../../generated/graphql";
import { useStore } from "../../storeData";
import InputPhone, {
  PhoneInput,
} from "../../../shared/globals/UiElements/InputPhone";
import { registerUser } from "..";
import LoginSwitcher from "./LoginSwitcher";

const focusOnError = createDecorator();

export type LoginMethod = "EMAIL" | "PHONE";

type FormValues = {
  email: string;
  phone: PhoneInput;
  password: string;
};

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
  const { id: storeId } = useStore();
  const { query } = useApolloClient();
  const Router = useRouter();
  const [activeTab, setActiveTab] = useState<LoginMethod>("EMAIL");
  const [isError, setIsError] = useState(false);

  const handleSubmitForm = async (values: FormValues) => {
    const email = values?.email;
    const phone = values?.phone?.value;
    const phoneOrEmail = activeTab === "EMAIL" ? email : phone!;
    try {
      const {
        data: { customerLoginV2: loginToken },
      } = await query<LoginQuery, LoginQueryVariables>({
        query: LoginDocument,
        variables: {
          storeId,
          password: values.password,
          phoneOrEmail,
        },
      });
      const { data: meData } = await query<MeQuery, MeQueryVariables>({
        query: MeDocument,
        context: { headers: { authorization: `Bearer ${loginToken}` } },
      });
      registerUser("login", meData?.me!, loginToken!);

      if (Router?.query?.prevUrl && typeof Router.query.prevUrl === "string") {
        Router.replace(Router.query.prevUrl);
      } else {
        Router.replace("/");
      }
      Router.reload();
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <Form
      onSubmit={handleSubmitForm}
      validate={(values: FormValues) => validate(values, activeTab)}
      decorators={[focusOnError]}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <StyledHeader>
              <H1 fontWeight={600}>
                <FormattedMessage defaultMessage="Sign-in to your account" />
              </H1>
            </StyledHeader>
            <LoginSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
            {activeTab === "EMAIL" && (
              <Label>
                <FormattedMessage defaultMessage="Your e-mail" />
                <Field name="email">
                  {({ input, meta: { error, touched } }) => (
                    <>
                      <Input
                        {...input}
                        autoComplete="email"
                        className={
                          (error && touched) || isError ? "invalid" : ""
                        }
                        onChange={(event) => {
                          setIsError(false);
                          input.onChange(event);
                        }}
                      />
                      {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                    </>
                  )}
                </Field>
              </Label>
            )}
            {activeTab === "PHONE" && (
              <Label>
                <FormattedMessage defaultMessage="Phone no." />
                <Field name="phone">
                  {(fieldProps) => (
                    <InputPhone
                      {...fieldProps}
                      className={isError ? "invalid" : ""}
                      onChange={(event: PhoneInput) => {
                        setIsError(false);
                        fieldProps.input.onChange(event);
                      }}
                    />
                  )}
                </Field>
              </Label>
            )}
            <Label>
              <FormattedMessage defaultMessage="Password" />
              <Field name="password">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      type="password"
                      autoComplete="current-password"
                      className={(error && touched) || isError ? "invalid" : ""}
                      onChange={(event) => {
                        setIsError(false);
                        input.onChange(event);
                      }}
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                    {isError && (
                      <RequiredSpan>
                        <FormattedMessage defaultMessage="Invalid credentials" />
                      </RequiredSpan>
                    )}
                  </>
                )}
              </Field>
            </Label>
            <Link href="/reset-password">
              <div style={{ marginTop: 14, width: "fit-content" }}>
                <StyledSpan className="forgot_password">
                  <FormattedMessage defaultMessage="Forgot password?" />
                </StyledSpan>
              </div>
            </Link>

            <PrimaryButton
              type="submit"
              style={{ marginTop: "2.5rem" }}
              fullWidth
              isLoading={submitting}
            >
              <FormattedMessage defaultMessage="LOGIN" />
            </PrimaryButton>
            <br />
            <FlexRow>
              <IconWrapper>
                <AddUser />
              </IconWrapper>
              <SwitchWrapper>
                <P>
                  <FormattedMessage defaultMessage="Don't Have an Account?" />
                </P>
                <PrimaryButton
                  type="button"
                  style={{ justifyContent: "start" }}
                  compact
                  reversed
                >
                  <Link
                    href="/registration"
                    query={{ prevUrl: Router?.query?.prevUrl }}
                  >
                    <StyledSpan>
                      <FormattedMessage defaultMessage="Sign Up with E-mail" />
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

export { LoginPage };

/**
 *
 * Functions
 *
 */

const validate = (values: FormValues, activeTab: LoginMethod) => {
  const errors: Partial<{ [key in keyof FormValues]: ReactElement }> = {};

  if (
    activeTab === "EMAIL" &&
    (!values?.email?.trim() ||
      !values?.email?.match(
        /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      ))
  ) {
    errors.email = (
      <FormattedMessage defaultMessage="Please enter a valid email address" />
    );
  }

  if (activeTab === "PHONE" && !values?.phone?.isValid) {
    errors.phone = (
      <FormattedMessage defaultMessage="Please enter a valid phone number" />
    );
  }

  if (!values?.password) {
    errors.password = (
      <FormattedMessage defaultMessage="Please enter your password" />
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

const SwitchWrapper = styled.div`
  margin: 0 10px;
  width: 80%;
`;

const IconWrapper = styled(FlexCol)`
  justify-content: center;
  width: 30px;
  height: 30px;
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

const StyledSpan = styled.span`
  color: ${themeColor("primary")};
  font-weight: 600;
  cursor: pointer;

  &.forgot_password {
    font-weight: 400;
    font-size: 14px;
  }
`;
