import { format as formatUrl, parse as parseUrl, UrlObject } from "url";
import { ParsedUrlQuery } from "querystring";
import { LanguageType, supportedLanguages } from "./locales-data";

type Url = string | UrlObject;

const parseAs = (originalAs, href) => {
  const asType = typeof originalAs;
  let as;

  if (asType === "undefined") {
    as = formatUrl(href, { unicode: true });
  } else if (asType === "string") {
    as = originalAs;
  } else {
    throw new Error(`'as' type must be 'string', but it is ${asType}`);
  }

  return as;
};

function parseHref(originalHref: Url) {
  if (typeof originalHref !== "string" && typeof originalHref !== "object") {
    throw new Error(
      `'href' type must be either 'string' or 'object', but it is ${typeof originalHref}`
    );
  }

  const href =
    typeof originalHref === "string"
      ? parseUrl(originalHref, true)
      : {
          ...originalHref,
          query: originalHref.query
            ? { ...(originalHref.query as ParsedUrlQuery) }
            : {},
        };

  return href;
}

export const languagePathCorrector = (
  currentRoute: { as: Url; href: Url },
  currentLanguage: LanguageType
) => {
  const { as: originalAs, href: originalHref } = currentRoute;

  const href = parseHref(originalHref);
  let as = parseAs(originalAs, href);

  delete href.search;

  supportedLanguages.forEach((language) => {
    if (as.startsWith(`/${language}/`) || as.endsWith(`/${language}`)) {
      as = as.replace(`/${language}`, "");
    }
  });

  const basePath = `${href.protocol}//${href.host}`;
  const currentAs = as.replace(basePath, "");
  const subpath = currentLanguage;

  as = `/${currentLanguage}${currentAs}`.replace(/\/$/, "");
  href.query.lang = currentLanguage;
  href.query.subpath = subpath;
  return { as, href };
};
