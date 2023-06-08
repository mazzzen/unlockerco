import { FormattedDataType } from "../../templates/types";

function getHomeCollectionListSchema(
  homeCollections: {
    collections: FormattedDataType["collections"];
  }[],
  storeUrl: string
) {
  let flatHomeCollections: FormattedDataType["collections"];
  (homeCollections || [])?.forEach((row) => {
    flatHomeCollections = [
      ...(flatHomeCollections || []),
      ...(row?.collections || []),
    ];
  });

  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: (flatHomeCollections! || [])?.map((collection, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CollectionPage",
        url: `${storeUrl}/product/${collection?.handle}`,
        name: collection?.title,
        description:
          collection?.seo?.description || collection?.shortDescription,
        image: collection?.image?.src,
        numberOfItems: collection?.productsCount,
        itemListOrder: index + 1,
      },
    })),
  };

  return (
    <script
      key={`JSON-Store`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}

export { getHomeCollectionListSchema };

// https://developers.google.com/search/docs/data-types/carousel#guidelines
// https://schema.org/ItemList
