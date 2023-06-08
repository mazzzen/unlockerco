import React from "react";
import { useIntl } from "react-intl";
import Select, { Props as SelectProps, StylesConfig } from "react-select";
import { languagePathCorrector } from "../../lib/i18n/languagePathCorrector";
import { useStore } from "../../lib/storeData";
import {
  SUPPORTED_LOCALES,
  LanguageType,
  getLocaleInfo,
} from "../../lib/i18n/locales-data";
import { createCookie } from "../../shared/utils/cookie";
import { useRouter } from "../../lib/i18n";

export const LanguageSwitcher = ({ styles, ...restProps }: SelectProps) => {
  const { locales } = useStore();
  const { locale } = useIntl();
  const { asPath, pathname, query } = useRouter();
  const activeLocale = getLocaleInfo(locale).code;

  if (locales.length === 1) return null;

  const options = locales.map((locale) => ({
    value: locale,
    label: SUPPORTED_LOCALES[locale].display,
  }));

  const handleChange = (locale: LanguageType) => {
    const { as } = languagePathCorrector(
      { as: asPath, href: { pathname, query } },
      locale
    );

    createCookie("lang", locale);
    document.location.href = as;
  };

  return (
    <Select
      options={options}
      onChange={(e: { value: LanguageType; label: string }) =>
        handleChange(e.value)
      }
      styles={{ ...customStyles, ...styles }}
      defaultValue={options.find((option) => option.value === activeLocale)}
      isSearchable={false}
      isClearable={false}
      hideSelectedOptions
      instanceId="Select-Locale"
      {...restProps}
    />
  );
};

const customStyles: StylesConfig = {
  container: (provided: any) => ({
    ...provided,
    direction: "ltr",
    display: "none",
    "@media (min-width: 768px)": {
      ...provided["@media (min-width: 768px)"],
      display: "block",
    },
  }),
  control: (provided: any) => ({
    ...provided,
    border: "solid 1px #dfe3e8",
    fontWeight: "500",
    cursor: "pointer",
    width: 120,
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#252a31",
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: "4px",
    boxShadow: "0 2px 4px 0 rgba(82, 82, 82, 0.2)",
    border: "solid 1px  #dfe3e8",
    backgroundColor: "#fafbfc",
    zIndex: 101,
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.43",
    color: "#252a31",
    backgroundColor: "#fafbfc",
    cursor: "pointer",

    ":hover": {
      backgroundColor: "#dfe3e8",
    },
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    color: "#252a31",
  }),
};
