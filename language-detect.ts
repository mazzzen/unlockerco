import accepts from "accepts";
import { IncomingMessage } from "http";
import { LanguageType, supportedLanguages } from "./locales-data";
import { getCookie } from "../../shared/utils/cookie";

export function getLanguageFromUrl(url: string | undefined = undefined) {
  if (!url) return undefined;
  const langsInRegexFormat = supportedLanguages.join("|");
  const regex = new RegExp("^/(" + langsInRegexFormat + ")", "m");
  const languageMatch = url.match(regex);

  return languageMatch?.[1] as LanguageType;
}

export function isSupported(
  language: LanguageType,
  supportedLanguages: LanguageType[]
) {
  return supportedLanguages.findIndex((locale) => locale === language) !== -1;
}

export function getLanguageFromRequest(
  request: IncomingMessage,
  supportedLanguages: LanguageType[],
  fallback: LanguageType
) {
  const isValid = (language: LanguageType) => {
    return isSupported(language, supportedLanguages);
  };

  let language = getLanguageFromUrl(request.url!);
  if (language && isValid(language)) {
    return { source: "url", language };
  }

  language = getCookie("lang", request) as LanguageType;
  if (language && isValid(language)) {
    return { source: "cookie", language };
  }

  language = accepts(request).language(supportedLanguages) as LanguageType;
  if (language && isValid(language)) {
    return { source: "agent", language };
  }

  return { language: fallback, source: "fallback" };
}
