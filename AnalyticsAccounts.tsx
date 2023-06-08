import React, { useEffect } from "react";
import { AnalyticalAccount, ParagonIntegration } from "../../generated/graphql";
import { createScript } from "./snippets";
import { AnalyticsActions } from "./utils";
import { useRouter } from "../i18n";
import { useStore } from "../storeData";
import { useAuth } from "../Authentication";

function mapAnalyticsAccount(item) {
  return {
    type: "analytics",
    name: item?.name,
    isActive: item?.isActive,
    id: item?.id,
  };
}

function mapParagonIntegrations(item: ParagonIntegration) {
  return {
    type: "paragon",
    name: item?.name,
    isActive: item?.enabled,
    sharedSettings: {
      apiKey:
        item?.sharedSettings?.find?.((e) => e?.name === "api_key")?.value ||
        null,
      server:
        item?.sharedSettings?.find?.((e) => e?.name === "server_prefix")
          ?.value || null,
      listId:
        item?.sharedSettings?.find?.((e) => e?.name === "List")?.value || null,
      publicKey:
        item?.sharedSettings?.find?.((e) => e?.name === "Public_key")?.value ||
        null,
      accountId:
        item?.sharedSettings?.find?.((e) => e?.name === "Account_ID")?.value ||
        null,
      signupChallenge:
        item?.sharedSettings?.find?.((e) => e?.name === "signupChallenge")
          ?.value || null,
      createOrderChallenge:
        item?.sharedSettings?.find?.((e) => e?.name === "createOrderChallenge")
          ?.value || null,
    },
  };
}

interface AnalyticsAccountsProps {
  analyticalAccounts: (AnalyticalAccount | null)[] | null | undefined;
  paragonIntegrations: (ParagonIntegration | null)[] | null | undefined;
}

const AnalyticsAccounts: React.FC<AnalyticsAccountsProps> = ({
  analyticalAccounts,
  paragonIntegrations,
}) => {
  const router = useRouter();
  const { user: customer } = useAuth();
  const { contactInfo, locale } = useStore();

  const analytics = (analyticalAccounts || [])?.map(mapAnalyticsAccount);
  const paragon = (paragonIntegrations || [])?.map(mapParagonIntegrations);
  const accounts = [...analytics, ...paragon];

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      AnalyticsActions.trackRouteChange(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  if (!accounts || accounts?.findIndex((account) => account?.isActive) === -1) {
    return null;
  }

  AnalyticsActions.setAccountsMap(accounts);
  const scripts: JSX.Element[] = accounts
    .filter((account) => account?.isActive)
    .map((account) =>
      createScript(account, contactInfo?.email, customer, locale)
    );

  return <>{[...scripts]}</>;
};

export default AnalyticsAccounts;
