import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  from,
  ApolloLink,
  defaultDataIdFromObject,
  makeVar,
  ReactiveVar,
} from "@apollo/client";
import { createHttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { logout } from "../Authentication";
import { AuthState } from "./client-graphql";

type ApolloReactiveVariables = {
  user?: ReactiveVar<AuthState | undefined>;
};

const isServer = typeof window === "undefined";
// @ts-ignore
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

let apolloClient: ApolloClient<NormalizedCacheObject>;
let reactiveVariables: ApolloReactiveVariables = {};
let clientSideLocale: string | null = null;

const createLocaleLink = (locale: string) =>
  new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        locale: clientSideLocale || locale,
      },
    }));

    return forward(operation);
  });

const logoutLink = onError(({ graphQLErrors }) => {
  if (
    graphQLErrors?.some(
      (error) =>
        // error.message.toLowerCase().includes("not_user_exist") ||
        error.message.toLowerCase().includes("unverified_jwt_token") ||
        error.message.toLowerCase().includes("access-denied")
    )
  ) {
    logout();
    apolloClient?.resetStore();
  }
});

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_URI,
});

export function getApolloClient(
  user: AuthState | undefined,
  locale: string,
  isServer = false
): {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  reactiveVariables: ApolloReactiveVariables;
} {
  if (!isServer && apolloClient) {
    return { apolloClient, reactiveVariables };
  }

  const variables: ApolloReactiveVariables = {
    user: makeVar<AuthState | undefined>(user),
  };

  const authLink = new ApolloLink((operation, forward) => {
    const tokenVar = variables.user?.()?.token;
    const authHeaders = tokenVar ? { authorization: `Bearer ${tokenVar}` } : {};
    operation.setContext(({ headers = {} }) => ({
      headers: { ...headers, ...authHeaders },
    }));
    return forward(operation);
  });

  const link = from([logoutLink, authLink, createLocaleLink(locale), httpLink]);

  const client = new ApolloClient({
    link,
    ssrMode: isServer,
    cache: new InMemoryCache({
      dataIdFromObject(responseObject) {
        switch (responseObject.__typename) {
          case "StoreAppearance":
            return `StoreAppearance:${
              responseObject?.template ? "General" : "Homepage"
            }`;
          default:
            return defaultDataIdFromObject(responseObject);
        }
      },
      typePolicies: {
        ZoneCountry: {
          keyFields: ["id", "zoneId"],
        },
        Query: {
          fields: {
            user: {
              read() {
                return variables?.user?.();
              },
            },
          },
        },
      },
    }).restore(windowApolloState || {}),
  });

  if (isServer) {
    return { apolloClient: client, reactiveVariables: variables };
  }

  apolloClient = client;
  reactiveVariables = variables;
  global.apolloClient = client;
  return { apolloClient, reactiveVariables };
}

export function updateApolloHeaderLocale(locale: string) {
  clientSideLocale = locale;
}

export function setApolloAccessToken(user: AuthState | undefined) {
  const token = user?.token;
  if (token) {
    reactiveVariables?.user?.(user);
  } else {
    if (!isServer) {
      reactiveVariables?.user?.(undefined);
      apolloClient.cache.evict({ fieldName: "me" });
      apolloClient.cache.gc();
    }
  }
}
