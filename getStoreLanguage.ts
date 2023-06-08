import { IncomingMessage } from "http";
import { StoreContextType } from "../storeData";
import { MainAppContext } from "../types";
import { getLanguageFromRequest } from "./language-detect";
import { languagePathCorrector } from "./languagePathCorrector";

export const getStoreLanguage = (
  request: IncomingMessage,
  storeData: StoreContextType,
  appContext: MainAppContext
) => {
  const { language, source } = getLanguageFromRequest(
    request,
    storeData.locales,
    storeData.defaultLocale
  );
  if (source !== "url") {
    appContext.ctx.res?.writeHead(302, {
      Location: languagePathCorrector(
        { as: request?.url!, href: request?.url! },
        language
      ).as,
    });
    appContext.ctx.res?.end();
  }
  return language;
};
