import { ProductDetailsQuery } from "../../generated/graphql";

function getProductSchema(
  data: ProductDetailsQuery | undefined,
  productUrl: string
) {
  const product = data?.product;
  const collection = data?.collection;
  const productPrices = product?.variants?.nodes?.map(
    (variant) => variant.price.amount!
  ) || [product?.initialPrice?.amount!];
  const maxPrice = Math.max(...productPrices);
  const minPrice = Math.min(...productPrices);

  const schemaObj = {
    "@context": "https://schema.org/",
    "@type": "Product",
    productID: product?.id,
    name: product?.seo?.title || product?.title,
    image: [...(product?.images || []).map((image) => image?.src || "")],
    description: product?.seo?.description || product?.shortDescription,
    category: collection?.title,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: product?.variants?.nodes?.[0]?.price?.currencyCode,
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: product?.variants?.nodes?.length || 1,
      offers: product?.variants?.nodes?.map((variant) => {
        const availability =
          variant?.trackQuantity && variant?.quantity === 0
            ? "https://schema.org/OutOfStock"
            : "https://schema.org/InStock";
        return {
          "@type": "Offer",
          url: productUrl,
          priceCurrency: variant?.price?.currencyCode,
          price: variant?.price?.amount,
          sku: variant?.sku,
          availability,
        };
      }),
    },
  };

  return (
    <script
      key={`JSON-${product?.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}

export { getProductSchema };

// DOCMENTATION
// https://developers.google.com/search/docs/data-types/product
// https://schema.org/Product

// RECOMMENCDED
// mpn: "925872",
// brand: {
//   "@type": "Brand",
//   name: "ACME",
// },
// review: {
//   "@type": "Review",
//   reviewRating: {
//     "@type": "Rating",
//     ratingValue: "4",
//     bestRating: "5",
//   },
//   author: {
//     "@type": "Person",
//     name: "Fred Benson",
//   },
// },
// aggregateRating: {
//   "@type": "AggregateRating",
//   ratingValue: "4.4",
//   reviewCount: "89",
// },

// Offers
// itemCondition: "https://schema.org/UsedCondition",
// itemCondition: "http://schema.org/NewCondition",
