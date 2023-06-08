import { PaymentMethodEnum, StoreHomepageQuery } from "../../generated/graphql";
import { StoreContextType } from "../../lib/storeData";

const PaymentMethodMap = {
  [PaymentMethodEnum.CashOnDelivary]: "Cash",
  [PaymentMethodEnum.OnlinePayment]: "Credit Card",
};

function getStoreSchema(
  store: StoreContextType,
  storePaymentMethods: StoreHomepageQuery["storePaymentMethods"]
) {
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": store?.storeUrl,
    url: store?.storeUrl,
    logo: store?.logo?.image?.src,
    name: store?.seo?.title || store?.name,
    image: store?.logo?.image?.src,
    description: store?.seo?.description || store?.description,
    address: store?.location?.address,
    telephone: store?.contactInfo?.phone,
    email: store?.contactInfo?.email,
    currenciesAccepted: store?.currency,
    paymentAccepted: storePaymentMethods
      ?.filter((method) => method?.enabled)
      ?.map((method) => PaymentMethodMap[method?.type!])
      .join(", "),
    // priceRange: "$$$",
  };

  return (
    <script
      key={`JSON-Store`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}

export { getStoreSchema };

// https://developers.google.com/search/docs/data-types/local-business
// https://schema.org/Store
