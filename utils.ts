import { isBrowser } from "../isBrowser";
import { fireGameballEvent } from "./gameballMapper";
import { fireKlavioEvent } from "./klavioMapper";
import { fireMailchimpEvent } from "./mailchimpMapper";
import {
  AccountsMapType,
  AnalyticsEnum,
  AnalyticsIntegartion,
  CustomEventName,
  EventObject,
  GameballEventName,
  GoogleAnalyticsEventName,
  KlaviyoEventName,
  MailchimpEventName,
  ParagonIntegartion,
  PixelEventName,
} from "./types";

declare const _learnq;

function createAccountsMap(
  analyticalAccounts: (AnalyticsIntegartion | ParagonIntegartion | null)[]
) {
  return analyticalAccounts.reduce(
    (acc: AccountsMapType, curr) => ({
      ...acc,
      [curr?.name!]: {
        ...curr!,
      },
    }),
    {}
  );
}

const userDataParameters = {
  email: "em",
  firstName: "fn",
  lastName: "ln",
  phone: "ph",
  id: "external_id",
  gender: "gn",
  birthdate: "bd",
  city: "ct",
  state: "st",
  governorate: "st",
  postalCode: "zp",
  zipCode: "zp",
  country: "country",
  secondPhone: "ph",
  name: "fn",
};

function hashKey(key: string) {
  return userDataParameters[key] ? userDataParameters[key] : key;
}

function hashFBUserData(parameters: any) {
  const temp = Object.keys(parameters).reduce((acc, key) => {
    return {
      ...acc,
      [hashKey(key)]: parameters[key],
    };
  }, {});

  return temp;
}

function GTMPageView(url: string) {
  if (!isBrowser) return;
  const pageEvent = {
    event: "pageview",
    page: url,
  };
  //@ts-ignore
  window && window.dataLayer && window.dataLayer.push(pageEvent);
}

function GAPageView(url: string) {
  if (!isBrowser) return;
  //@ts-ignore
  window?.gtag?.("event", "page_view", {
    page_path: url,
  });
}

function FBPageView() {
  if (!isBrowser) return;
  //@ts-ignore
  window?.fbq?.("track", "PageView");
}

function GAConfig(accountId: string, userId: string) {
  if (!isBrowser) return;
  //@ts-ignore
  window?.gtag?.("config", `"${accountId}"`, {
    user_id: `"${userId}"`,
  });
}

function FBConfig(accountId: string, userId: string) {
  if (!isBrowser) return;
  //@ts-ignore
  window?.fbq?.("init", `"${accountId}"`, { subscription_id: `"${userId}"` });
}

function GAEvent({ name, parameters }) {
  if (!isBrowser) return;
  const eventName = GoogleAnalyticsEventName[name] || CustomEventName[name];
  //@ts-ignore
  window?.gtag?.("event", eventName, parameters);
}

function FBEvent({ name, parameters }) {
  if (!isBrowser) return;
  const eventName = PixelEventName[name] || CustomEventName[name];
  //@ts-ignore
  window?.fbq?.(
    PixelEventName[name] ? "track" : "trackCustom",
    eventName,
    hashFBUserData(parameters)
  );
}

function KlaviyoEvent({ name, parameters }) {
  if (!isBrowser) return;
  if (typeof _learnq === "undefined") return;

  const eventName = KlaviyoEventName[name] || CustomEventName[name];
  fireKlavioEvent(parameters, eventName);
}

function MailchimpEvent({ name, parameters }) {
  if (!isBrowser) return;

  const eventName = MailchimpEventName[name] || CustomEventName[name];
  fireMailchimpEvent(parameters, eventName);
}

function GameballEvent({ name, parameters }) {
  if (!isBrowser) return;

  const eventName = GameballEventName[name] || CustomEventName[name];
  fireGameballEvent(parameters, eventName);
}

function trackRouteChange(url: string, AccountsMap: AccountsMapType) {
  if (AccountsMap[AnalyticsEnum.Google_Analytics]?.isActive) {
    GAPageView(url);
  }
  if (AccountsMap[AnalyticsEnum.Google_Tag_Manager]?.isActive) {
    GTMPageView(url);
  }
  if (AccountsMap[AnalyticsEnum.Facebook_Pixel]?.isActive) {
    FBPageView();
  }
}

function fireEvent(event: EventObject, AccountsMap: AccountsMapType) {
  if (AccountsMap[AnalyticsEnum.Google_Analytics]?.isActive) {
    GAEvent(event);
  }
  if (AccountsMap[AnalyticsEnum.Facebook_Pixel]?.isActive) {
    FBEvent(event);
  }
  if (AccountsMap[AnalyticsEnum.Klaviyo]?.isActive) {
    KlaviyoEvent(event);
  }
  if (AccountsMap[AnalyticsEnum.Mailchimp]?.isActive) {
    MailchimpEvent(event);
  }
  if (AccountsMap[AnalyticsEnum.Gameball]?.isActive) {
    GameballEvent(event);
  }
}

function setUserId(userId: string | undefined, AccountsMap: AccountsMapType) {
  if (AccountsMap[AnalyticsEnum.Google_Analytics]?.isActive && userId) {
    GAConfig(
      (AccountsMap[AnalyticsEnum.Google_Analytics] as AnalyticsIntegartion).id,
      userId
    );
  }
  if (AccountsMap[AnalyticsEnum.Facebook_Pixel]?.isActive && userId) {
    FBConfig(
      (AccountsMap[AnalyticsEnum.Facebook_Pixel] as AnalyticsIntegartion).id,
      userId
    );
  }
}

export const AnalyticsActions = (function () {
  let AccountsMap: AccountsMapType = {};

  const Actions = {
    setAccountsMap: (
      newAccounts: (AnalyticsIntegartion | ParagonIntegartion | null)[]
    ) => {
      AccountsMap = createAccountsMap(newAccounts);
    },

    setUserId: (id: string | undefined) => {
      setUserId(id, AccountsMap);
    },

    trackRouteChange: (url: string) => {
      trackRouteChange(url, AccountsMap);
    },

    fireEvent: (event: EventObject) => {
      fireEvent(event, AccountsMap);
    },
  };

  return Actions;
})();
