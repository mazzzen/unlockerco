import { NextRouter, useRouter as useRouterNext } from "next/router";
import { useIntl } from "react-intl";
import { Url } from "url";
import { getLocaleInfo } from "./locales-data";

const isHasLanguage = (url: string, language: string) => {
  return url?.startsWith(`/${language}/`) || url?.endsWith(`/${language}`);
};

function getCorrectURL(url: Url, language: string) {
  if (typeof url !== "string" && typeof url !== "object") {
    throw new Error(
      `'href' type must be either 'string' or 'object', but it is ${typeof url}`
    );
  }

  if (typeof url === "string") {
    if (isHasLanguage(url, language)) {
      return url;
    }
    return `/${language}${url}`;
  } else {
    if (isHasLanguage(url?.pathname!, language)) {
      return url;
    }
    return {
      ...url,
      pathname: `/${language}${url.pathname}`,
    };
  }
}

export function useRouter(): NextRouter {
  const {
    push: NextPush,
    replace: NextReplace,
    ...restProps
  } = useRouterNext();

  const { locale } = useIntl();
  const language = getLocaleInfo(locale).code;

  const modifiedPush = (
    url: Url,
    as?: Url,
    options?: any
  ): Promise<boolean> => {
    return NextPush(getCorrectURL(url, language), as, options);
  };

  const modifiedReplace = (
    url: Url,
    as?: Url,
    options?: any
  ): Promise<boolean> => {
    return NextReplace(getCorrectURL(url, language), as, options);
  };

  return {
    ...restProps,
    push: modifiedPush,
    replace: modifiedReplace,
  };
}
