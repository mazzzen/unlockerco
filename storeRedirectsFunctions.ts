import { IncomingMessage, ServerResponse } from "http";
import { StoreDetailsByDomainQuery } from "../../generated/graphql";
import { StoreContextType } from "../storeData";

export const reduceStoreRedirectsArray = (
  storeRedirects: NonNullable<StoreDetailsByDomainQuery["store"]>["redirects"]
) => {
  const obj = {};
  const redirects = storeRedirects?.reduce((acc, redirect) => {
    acc[redirect.oldUrl] = redirect.newUrl;
    return acc;
  }, obj);
  return redirects;
};

export const checkAndDoRedirect = (
  storeRedirects: StoreContextType["redirects"],
  asPath: string,
  res: ServerResponse<IncomingMessage>
) => {
  const redirect = storeRedirects?.[asPath];
  if (!redirect) {
    return;
  }
  res?.writeHead(301, { Location: redirect });
  res?.end();
};
