type BreadCrumpItem = {
  title: string;
  link: string;
};

function getBreadcrumpSchema(items: BreadCrumpItem[]) {
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      item: item.link,
    })),
  };

  return (
    <script
      key={`JSON-BreadCrump`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}

export { getBreadcrumpSchema };

// https://developers.google.com/search/docs/data-types/breadcrumb
