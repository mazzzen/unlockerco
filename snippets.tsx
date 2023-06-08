import React, { Fragment } from "react";
import Script from "next/script";
import { AnalyticalAccount } from "../../generated/graphql";
import {
  AnalyticsEnum,
  AnalyticsIntegartion,
  ParagonIntegartion,
} from "./types";
import { User } from "../Authentication";

type MailchimpExtractedDataType = {
  apiKey: string;
  server: string;
  listId: string;
  adminEmail: string;
};
export type GameballExtractedDataType = {
  apiKey: string;
  customer: string;
  signupChallenge: string;
  createOrderChallenge: string;
};

export let mailchimpExtractedData: MailchimpExtractedDataType;
export let gameballExtractedData: GameballExtractedDataType;

const HEAD_SNIPPETS = {
  [AnalyticsEnum.Google_Tag_Manager]: (id: string) => (
    // eslint-disable-next-line @next/next/next-script-for-ga
    <script
      key="Google_Tag_Manager"
      id="Google_Tag_Manager"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${id}');`,
      }}
    />
  ),
  [AnalyticsEnum.Google_Analytics]: (id: string) => (
    <Fragment key="Google_Analytics">
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`} />
      <script
        id="Google_Analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());gtag('config', '${id}');`,
        }}
      />
    </Fragment>
  ),
  [AnalyticsEnum.Facebook_Pixel]: (id: string) => (
    <script
      id="Facebook_Pixel"
      key="Facebook_Pixel"
      dangerouslySetInnerHTML={{
        __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${id}');fbq('track', 'PageView');`,
      }}
    />
  ),
  [AnalyticsEnum.Klaviyo]: ({ publicKey }) => (
    <Script
      id="klaviyo"
      key="klaviyo"
      src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${publicKey}`}
    />
  ),

  [AnalyticsEnum.Optimonk]: ({ accountId }) => (
    <Script
      id="optimonk"
      key="optimonk"
      src={`https://onsite.optimonk.com/script.js?account=${accountId}`}
    />
  ),
  [AnalyticsEnum.Mailchimp]: ({ apiKey, server, listId, adminEmail }) => {
    mailchimpExtractedData = {
      apiKey: apiKey || "",
      server: server || "",
      listId: listId || "",
      adminEmail: adminEmail || "",
    };
  },
  [AnalyticsEnum.Gameball]: ({
    apiKey,
    signupChallenge,
    createOrderChallenge,
    locale,
    customer,
  }) => {
    gameballExtractedData = {
      apiKey,
      signupChallenge,
      createOrderChallenge,
      customer,
    };
    const playerUniqueId = customer?.id ? customer?.id?.split("_")[1] : null;

    return (
      <Fragment key="Gameball">
        <Script
          id="Gameball"
          dangerouslySetInnerHTML={{
            __html: `
          window.GbLoadInit = function(){
          GbSdk.init({
            APIKey: "${apiKey}",
            lang: "${locale}",
            playerUniqueId: "${playerUniqueId}",
            playerAttributes: {},
          });
        };`,
          }}
        />
        <Script
          id="gameball"
          key="gameball"
          src={"https://assets.gameball.co/widget/js/gameball-init.min.js"}
        />
      </Fragment>
    );
  },
};

const BODY_SNIPPETS = {
  [AnalyticsEnum.Google_Tag_Manager]: (id: string) =>
    `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
};

export function createScript(
  account: AnalyticsIntegartion | ParagonIntegartion,
  adminEmail?: string | null,
  customer?: User | undefined,
  locale?: string
) {
  if (account.type === "paragon") {
    if (!HEAD_SNIPPETS[account.name]) {
      return null;
    }
    return HEAD_SNIPPETS[account.name]({
      apiKey: (account as ParagonIntegartion)?.sharedSettings?.apiKey,
      server: (account as ParagonIntegartion)?.sharedSettings?.server,
      listId: (account as ParagonIntegartion)?.sharedSettings?.listId,
      publicKey: (account as ParagonIntegartion)?.sharedSettings?.publicKey,
      accountId: (account as ParagonIntegartion)?.sharedSettings?.accountId,
      signupChallenge: (account as ParagonIntegartion)?.sharedSettings
        ?.signupChallenge,
      createOrderChallenge: (account as ParagonIntegartion)?.sharedSettings
        ?.createOrderChallenge,
      adminEmail,
      customer,
      locale,
    });
  }

  return HEAD_SNIPPETS[account.name](
    (account as AnalyticsIntegartion).id.trim()
  );
}

export function createNoScript(account: AnalyticalAccount) {
  if (!BODY_SNIPPETS[account.name]) return null;
  return (
    <noscript
      key={account.name}
      dangerouslySetInnerHTML={{
        __html: BODY_SNIPPETS[account.name](account.id.trim()),
      }}
    />
  );
}
