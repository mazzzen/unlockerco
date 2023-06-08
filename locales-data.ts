type Locale = {
  dir: "rtl" | "ltr";
  code: string;
  name: string;
  locale: string;
  display: string;
};

type Locales = { [key: string]: Locale };

export const SUPPORTED_LOCALES: Locales = {
  ar: {
    dir: "rtl",
    code: "ar",
    locale: "ar-EG",
    name: "arabic",
    display: "العربية",
  },
  en: {
    dir: "ltr",
    code: "en",
    locale: "en-US",
    name: "english",
    display: "English",
  },
  fr: {
    dir: "ltr",
    code: "fr",
    locale: "fr-FR",
    name: "french",
    display: "Francais",
  },
  tr: {
    dir: "ltr",
    code: "tr",
    locale: "tr-TR",
    name: "turkish",
    display: "Türkçe",
  },
} as const;

export type LanguageType = "en" | "ar" | "fr" | "tr";

export const supportedLanguages = Object.keys(
  SUPPORTED_LOCALES
) as LanguageType[];

export function getLocaleInfo(locale: string): Locale {
  return Object.values(SUPPORTED_LOCALES).find(
    (item) => item.locale === locale
  )!;
}
