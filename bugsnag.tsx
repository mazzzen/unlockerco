import BugsnagPluginReact from "@bugsnag/plugin-react";
import getConfig from "next/config";
import React from "react";
import packageJson from "../../package.json";
import Bugsnag from "@bugsnag/js";
import logger from "../logger";
import { StoreContextType } from "./storeData";
import { SubscriptionStatus } from "../generated/graphql";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const apiKey =
  serverRuntimeConfig.BUGSNAG_API_KEY || publicRuntimeConfig.BUGSNAG_API_KEY;
if (apiKey) {
  Bugsnag.start({
    apiKey,
    plugins: [new BugsnagPluginReact(React)],
    appVersion: packageJson.version,
    releaseStage: process.env.NODE_ENV,
  });
}

export function AddBugsnagStoreMetaData(store: StoreContextType) {
  if (!store || !apiKey) return;
  Bugsnag.addMetadata("store", {
    id: store.id,
    name: store.name,
    domain: store.storeUrl,
    template: store.template,
    currency: store.currency,
    defaultLocale: store.defaultLocale,
    supportedLocales: store.supportedLocales,
    isSubscribed: store.subscription?.status === SubscriptionStatus.Active,
    activeAnalytics: store.analyticalAccounts
      ?.filter((i) => i?.isActive)
      .map((i) => i?.name),
  });
  Bugsnag.setUser(
    store.userId,
    store.adminContactInfo?.email || undefined,
    store.adminContactInfo?.name || undefined
  );
  Bugsnag.addMetadata("back-office", {
    url: `https://backoffice.wuilt.com/clients/${store.userId}/show`,
  });
  Bugsnag.setContext(store.hostname);
}

class FallbackErrorBoundary extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logger.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export const ErrorBoundary =
  Bugsnag.getPlugin("react")?.createErrorBoundary(React) ||
  FallbackErrorBoundary;

export default Bugsnag;
