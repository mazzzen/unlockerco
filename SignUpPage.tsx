import React, { useState } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import { FormattedMessage } from "react-intl";
import { ExplanationIcon } from "../../../assets/Icons";
import { H1, Label, Input, FlexRow, P, FlexCol } from "../../../shared/globals";
import { PrimaryButton } from "../../../components/Button";
import {
  HorizontalLine,
  RequiredSpan,
} from "../../../components/Contact/styled";
import Asterisk from "../../../shared/globals/UiElements/Asterisk";
import { convertHexToRgba, themeColor } from "../../../shared/styles-utils";
import { useStore } from "../../storeData";
import {
  MeDocument,
  MeQuery,
  MeQueryVariables,
  SignUpDocument,
  SignUpMutation,
  SignUpMutationVariables,
  StoreLegalPage,
} from "../../../generated/graphql";
import { Link, useRouter } from "../../i18n";
import InputPhone, {
  PhoneInput,
} from "../../../shared/globals/UiElements/InputPhone";
import { useApolloClient } from "@apollo/client";
import { registerUser } from "..";

const focusOnError = createDecorator();

type FormValues = {
  name: string;
  email: string;
  password: string;
  phone: PhoneInput;
};

interface SignUpPageProps {}

const SignUpPage: React.FC<SignUpPageProps> = () => {
  const { id: storeId, name: storeName, legalPages } = useStore();
  const { mutate, query } = useApolloClient();
  const Router = useRouter();
  const [errorMessage, setErrorMessage] = useState<React.ReactNode>(null);

  const policies = getPolicies(legalPages);

  const handleSubmitForm = async (values: FormValues) => {
    setErrorMessage(null);
    try {
      const { data: signUpData } = await mutate<
        SignUpMutation,
        SignUpMutationVariables
      >({
        mutation: SignUpDocument,
        variables: {
          storeId,
          input: {
            name: values.name,
            email: values.email,
            phone: values.phone?.value!,
            password: values.password,
          },
        },
      });
      const loginToken = signUpData?.signup!;
      const { data: meData } = await query<MeQuery, MeQueryVariables>({
        query: MeDocument,
        context: { headers: { authorization: `Bearer ${loginToken}` } },
      });

      registerUser("signup", meData?.me!, loginToken);

      if (Router?.query?.prevUrl && typeof Router.query.prevUrl === "string") {
        Router.replace(Router.query.prevUrl);
      } else {
        Router.replace("/");
      }
      Router.reload();
    } catch (error) {
      if (error.message === "USER_EXIST") {
        setErrorMessage(
          <FormattedMessage defaultMessage="This user already exists" />
        );
        return;
      }
      setErrorMessage(
        <FormattedMessage defaultMessage="Something went wrong, please try again" />
      );
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
                <FormattedMessage defaultMessage="Create an account" />
              </H1>
              <br />
              <P>
                <FormattedMessage
                  defaultMessage="Welcome to The {storeName} Store!"
                  values={{ storeName }}
                />
                <br />
                <FormattedMessage defaultMessage="Please fill out the form to become a member." />
              </P>
            </StyledHeader>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="Name" />
                <Asterisk />
              </FlexRow>
              <Field name="name">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>
            </Label>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="Your e-mail" />
                <Asterisk />
              </FlexRow>
              <Field name="email">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                      type="email"
                      autoComplete="username"
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>
            </Label>
            <Label>
              <FlexRow>
                <FormattedMessage defaultMessage="Password" />
                <Asterisk />
              </FlexRow>
              <Field name="password">
                {({ input, meta: { error, touched } }) => (
                  <>
                    <Input
                      {...input}
                      className={error && touched ? "invalid" : ""}
                      type="password"
                      autoComplete="new-password"
                    />
                    {error && touched && <RequiredSpan>{error}</RequiredSpan>}
                  </>
                )}
              </Field>
            </Label>
            <div>
              <Label>
                <FlexRow>
                  <FormattedMessage defaultMessage="Phone no." />
                  <Asterisk />
                </FlexRow>
              </Label>
              <Field<PhoneInput> name="phone">
                {(fieldProps) => <InputPhone {...fieldProps} />}
              </Field>
            </div>
            {errorMessage && <RequiredSpan>{errorMessage}</RequiredSpan>}
            <PrimaryButton
              type="submit"
              style={{ marginTop: "2.5rem" }}
              fullWidth
              isLoading={submitting}
            >
              <FormattedMessage defaultMessage="CREATE ACCOUNT" />
            </PrimaryButton>
            <br />
            <br />
            <FlexRow>
              <IconWrapper>
                <ExplanationIcon />
              </IconWrapper>
              <StyledHintWrapper>
                <span>
                  <FormattedMessage defaultMessage="By creating an account you agree to our" />{" "}
                  {policies}
                </span>
              </StyledHintWrapper>
            </FlexRow>

            <HorizontalLine />

            <SwitchWrapper>
              <P>
                <FormattedMessage defaultMessage="Already have an Account?" />
              </P>
              <PrimaryButton type="button" compact reversed>
                <Link href="/login">
                  <StyledSpan>
                    <FormattedMessage defaultMessage="Login to your account" />
                  </StyledSpan>
                </Link>
              </PrimaryButton>
            </SwitchWrapper>
          </form>
        );
      }}
    />
  );
};

export { SignUpPage };

/**
 *
 * Functions
 *
 */

function getPolicies(legalPages: (StoreLegalPage | null)[] | undefined | null) {
  const messages = {
    "privacy-policy": true,
    "terms-and-conditions": true,
  };

  const relatedPolicies = legalPages?.filter((page) => !!messages[page?.name!]);
  return relatedPolicies ? (
    relatedPolicies?.map((page, index) => (
      <React.Fragment key={index}>
        <Link key={page?.id} href={`/page/${page?.handle}`}>
          <StyledSpan style={{ fontWeight: 700 }}>{page?.title}</StyledSpan>
        </Link>
        {index < relatedPolicies.length - 1 && (
          <span style={{ fontWeight: "bold" }}>{` & `}</span>
        )}
      </React.Fragment>
    ))
  ) : (
    <FormattedMessage defaultMessage="policies" />
  );
}

const validate = (values: FormValues) => {
  const errors: Record<string, unknown> = {};
  if (!values?.name?.trim()) {
    errors.name = <FormattedMessage defaultMessage="Your name is required" />;
  }
  if (values.name?.trim()?.split(" ")?.length < 2) {
    errors.name = <FormattedMessage defaultMessage="Enter your full name" />;
  }

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

  if (!values?.password?.trim() || values?.password?.length < 6) {
    errors.password = (
      <FormattedMessage defaultMessage="Password must contains at least 6 characters" />
    );
  }

  if (!values?.phone?.isValid) {
    errors.phone = (
      <FormattedMessage defaultMessage="Please enter a valid phone number" />
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

const StyledHintWrapper = styled.div`
  margin: 0 10px;
  width: 80%;
`;

const SwitchWrapper = styled(FlexCol)`
  margin-top: 30px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
