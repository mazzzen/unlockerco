import { CollectionProductsQuery } from "../../generated/graphql";

function getCollectionSchema(
  data: CollectionProductsQuery | undefined,
  storeUrl: string
) {
  const collection = data?.collection;

  const productPrices = (collection?.products?.nodes || [])?.map(
    (product) => product?.variants?.nodes?.[0]?.price?.amount!
  );
  const maxPrice = Math.max(...productPrices);
  const minPrice = Math.min(...productPrices);

  const schemaObj = {
    "@context": "https://schema.org/",
    "@type": "CollectionPage",
    name: collection?.seo?.title || collection?.title,
    image: [collection?.image?.src],
    description: collection?.seo?.description || collection?.shortDescription,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency:
        collection?.products?.nodes?.[0]?.variants?.nodes?.[0]?.price
          ?.currencyCode,
      lowPrice: minPrice,
      highPrice: maxPrice,
      offerCount: collection?.productsCount || 1,
      offers: collection?.products?.nodes?.map((product) => ({
        "@type": "Offer",
        url: `${storeUrl}/product/${collection?.handle}/${product?.handle}`,
        priceCurrency: product?.variants?.nodes?.[0]?.price?.currencyCode,
        price: product?.variants?.nodes?.[0]?.price?.amount,
        availability: "https://schema.org/InStock",
      })),
    },
  };

  return (
    <script
      key={`JSON-${collection?.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}

export { getCollectionSchema };

// https://www.schemaapp.com/tutorial/creating-collectionpage-schema-markup-using-the-schema-app-editor/
