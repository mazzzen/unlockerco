import * as React from "react";
import { ThemeProvider } from "styled-components";
import { CartProvider } from "../contexts/CartContext";
import { IntlProvider } from "react-intl";
import type { MainAppContext, MainAppProps } from "../lib/types";
import { getFonts } from "../lib/StoreFonts";
import { createTheme } from "../shared/theme";
import { GlobalStyle } from "../shared/theme/globalStyle";
import { LanguageType, SUPPORTED_LOCALES } from "../lib/i18n/locales-data";
import { getMainLayout } from "../shared/utils/layout";
import {
  getHostnameFromRequest,
  getStoreData,
  StoreContextType,
  StoreProvider,
} from "../lib/storeData";
import { getApolloClient } from "../lib/apollo/apollo-client";
import { ApolloProvider } from "@apollo/client";
import AnalyticsAccounts from "../lib/analytics-accounts/AnalyticsAccounts";
import { StoreTemplate } from "../templates/TemplateLoader";
import { messages } from "../lib/i18n";
import { getLanguageFromUrl } from "../lib/i18n/language-detect";
import { getCookie } from "../shared/utils/cookie";
import { ErrorBoundary } from "../lib/bugsnag";
import { Error } from "../components/Error";
import { getStoreLanguage } from "../lib/i18n/getStoreLanguage";
import LoadingBar from "../components/LoadingBar/LoadingBar";
import { tryLogin } from "../lib/Authentication";
import { AuthState } from "../lib/apollo/client-graphql";
import { checkAndDoRedirect } from "../lib/i18n/storeRedirectsFunctions";
import logger from "../logger";
import { redirectToMainDomain } from "../lib/redirectsToMainDomain";

const DefaultError = () => {
  logger.error("DefaultError");
  return <Error statusCode={500} />;
};

const Layout: any = ({ Component, pageProps }: MainAppProps) => {
  const getLayout = Component?.useLayout ?? getMainLayout;
  return getLayout(<Component {...pageProps} />);
};

type AppContextProps = MainAppProps & {
  children: React.ReactNode;
};

const AppContext: React.FC<AppContextProps> = ({ children, ...props }) => {
  const { storeData } = props;
  StoreTemplate.load(storeData?.template);
  return (
    <React.Fragment>
      <CartProvider>{children}</CartProvider>
      <AnalyticsAccounts
        paragonIntegrations={storeData?.paragonIntegrations?.integrations}
        analyticalAccounts={storeData?.analyticalAccounts}
      />
    </React.Fragment>
  );
};

const AppProviders: React.FC<AppContextProps> = ({ children, ...props }) => {
  const { language, storeData, user, serverApolloClient } = props;
  const apolloClient =
    serverApolloClient || getApolloClient(user, language).apolloClient;
  const locale = SUPPORTED_LOCALES[language] || SUPPORTED_LOCALES.en;
  const isRTL = locale.dir === "rtl";
  const storeFonts = getFonts(storeData);
  const isArabHW = storeData?.template === "arab-hardware";
  const colors = {
    ...storeData?.appearance?.colors,
    backgroundReverse: isArabHW ? "#ffffff" : "#f5f7f9",
  };

  return (
    <ApolloProvider client={apolloClient}>
      <StoreProvider value={storeData}>
        <IntlProvider locale={locale.locale} messages={messages[locale.code]}>
          <ThemeProvider theme={createTheme(colors, isRTL, storeFonts)}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </IntlProvider>
      </StoreProvider>
    </ApolloProvider>
  );
};

function App(props: MainAppProps) {
  const { error } = props;

  if (error) {
    return (
      <AppProviders {...props}>
        <Error statusCode={error.code} />
      </AppProviders>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={DefaultError}>
      <AppProviders {...props}>
        <AppContext {...props}>
          <div id="modal" />
          <LoadingBar />
          <Layout {...props} />
        </AppContext>
      </AppProviders>
    </ErrorBoundary>
  );
}

App.getInitialProps = async (appContext: MainAppContext) => {
  const isServer = typeof window === "undefined";
  const { ctx } = appContext;
  const { res } = ctx;
  const request = ctx.req;
  const reqHostname = getHostnameFromRequest(request);
  const token = getCookie("auth-token", request!);
  let error = null;
  let user: AuthState | undefined = undefined;

  let language =
    getLanguageFromUrl(request?.url! || ctx.asPath!) ||
    (getCookie("lang") as LanguageType) ||
    ("en" as LanguageType);

  let storeData: StoreContextType | null = null;

  try {
    if (isServer) {
      user = await tryLogin(token);
      const { apolloClient } = getApolloClient(user, language, true);
      ctx.apolloClient = apolloClient;
      ctx.token = token;
      storeData = await getStoreData(apolloClient, reqHostname);
      const redirected = redirectToMainDomain(storeData.domain, request, res);
      if (redirected) {
        return;
      }
      ctx.storeData = storeData;
      language = getStoreLanguage(request!, storeData, appContext);
      ctx.language = language;
      checkAndDoRedirect(storeData.redirects, request?.url!, res!);
    } else {
      storeData = await getStoreData();
    }
  } catch (err) {
    logger.error(err);
    error = err;
    ctx.error = err;
  }
  return {
    error,
    user,
    storeData,
    language,
  };
};

export default App;
