import { createContext, useContext } from "react";
import {
  AutomaticDiscountFragment,
  CurrencyCode,
  StoreDetailsFragment,
} from "../../generated/graphql";
import { LanguageType } from "../i18n/locales-data";

export type StoreContextType = Omit<
  StoreDetailsFragment,
  "currency" | "locales" | "defaultLocale" | "redirects"
> & {
  storeId: string;
  hostname: string;
  storeUrl: string;
  currency: CurrencyCode;
  locales: LanguageType[];
  defaultLocale: LanguageType;
  template: string;
  automaticDiscounts: (AutomaticDiscountFragment | null)[];
  redirects: {
    [key: string]: string;
  };
};

const defaultValue: StoreContextType = {
  userId: "",
  id: "",
  storeId: "",
  name: "",
  storeUrl: "",
  hostname: "",
  domain: null,
  logo: null,
  currency: CurrencyCode.Egp,
  locale: "",
  defaultLocale: "en",
  fallbackLocale: "en",
  locales: [],
  appearance: { colors: {}, fonts: [] },
  supportedLocales: [],
  contactInfo: { email: null, phone: null },
  socialMedia: [],
  subscription: null,
  template: "default",
  automaticDiscounts: [],
  areReviewsActivated: false,
  storeReviewSettings: null,
  redirects: {},
  customCheckoutSetting: {},
};

export const StoreContext = createContext<StoreContextType>(defaultValue);

const { Provider } = StoreContext;

const StoreProvider: React.FC<{
  value: StoreContextType;
  children?: React.ReactNode;
}> = ({ value = defaultValue, children }) => {
  return <Provider value={value}>{children}</Provider>;
};

export const useStore = () => useContext(StoreContext);

export { StoreProvider };
