import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useIntl } from "react-intl";
import { FieldRenderProps } from "react-final-form";
import type PhoneInputWithCountrySelectType from "react-phone-number-input";
import Input, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ar from "react-phone-number-input/locale/ar.json";
import tr from "react-phone-number-input/locale/tr.json";
import fr from "react-phone-number-input/locale/fr.json";
import { CountryCode, E164Number } from "libphonenumber-js/types";
import { themeColor } from "../../styles-utils";
import { RequiredSpan } from "../../../../src/components/Checkout/Information/styled";
import { isBrowser } from "../../../lib/isBrowser";

export type PhoneInput =
  | {
      value: E164Number;
      isValid: boolean;
    }
  | undefined;

type OtherProps = {
  dataTest?: string;
  className?: string;
};
interface InputPhoneProps
  extends FieldRenderProps<PhoneInput, HTMLElement, PhoneInput>,
    OtherProps {}

const languageMapper = {
  // default is "en" so no need to be handled
  "ar-EG": ar,
  "fr-FR": fr,
  "tr-TR": tr,
};

const InputPhone: React.FC<InputPhoneProps> = ({
  input,
  meta,
  dataTest,
  className,
}) => {
  const { locale } = useIntl();
  const languageTemplate = languageMapper[locale];

  const cachedCountry = isBrowser
    ? (localStorage.getItem("default-country") as CountryCode)
    : undefined;

  const [defaultCountry, setDefaultCountry] = useState<CountryCode | undefined>(
    cachedCountry
  );

  useEffect(() => {
    if (!defaultCountry) {
      fetch("https://ipinfo.io/json")
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem("default-country", res?.country);
          setDefaultCountry(res?.country);
        })
        .catch(() => {
          localStorage.setItem("default-country", "EG");
          setDefaultCountry("EG");
        });
    }
  }, [defaultCountry]);

  // for type sake
  const InferredStyledInput =
    StyledInput as unknown as typeof PhoneInputWithCountrySelectType;

  return (
    <>
      <InferredStyledInput
        {...input}
        className={`${className} ${
          meta?.error && meta?.touched ? "invalid" : ""
        }`}
        data-test={dataTest}
        labels={languageTemplate}
        countryOptionsOrder={["EG", "SA", "AE", "|", "..."]}
        international={true}
        defaultCountry={defaultCountry}
        value={input?.value?.value}
        onChange={(value: E164Number) => {
          input?.onChange({
            value,
            isValid: value ? isPossiblePhoneNumber(value) : false,
          });
        }}
      />
      {meta?.error && meta?.touched && (
        <RequiredSpan>{meta?.error}</RequiredSpan>
      )}
    </>
  );
};

export default InputPhone;

const StyledInput = styled(Input)`
  margin-top: 0.375rem;
  width: 100%;
  position: relative;
  direction: ltr;
  .PhoneInputCountry {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-inline-start: 10px;
  }

  .PhoneInputInput {
    padding-inline-start: 55px;
  }

  .PhoneInputCountrySelectArrow {
    margin-inline-start: 8px;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom-width: 2px;
    border-right-width: 2px;
    width: 0.4em;
    height: 0.4em;
    opacity: 1;
  }

  &.invalid > input {
    border: 1px solid #d21c1c;
  }

  input {
    flex: 1 0 auto;
    background: ${({ theme }) => theme.bg.default};
    width: 100%;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.bg.inactive};
    border-radius: 0.25rem;
    outline: none;
    padding: 0.5rem 0.75rem;
    font-weight: 600;
    &::placeholder {
      color: ${({ theme }) => theme.text.default};
      opacity: 0.5;
    }
    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.text.default};
      opacity: 0.5;
    }
    &:-moz-placeholder {
      color: ${({ theme }) => theme.text.default};
      opacity: 0.5;
    }
    &:-ms-input-placeholder {
      color: ${({ theme }) => theme.text.default};
      opacity: 0.5;
    }
    &:focus {
      border: 1px solid ${themeColor("primary")};
    }
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

/**
 *
 *
 */

export function createDefaultPhoneInput(
  number: string | undefined | null
): PhoneInput {
  if (!number) return undefined;
  return { value: number, isValid: true };
}
