function getLogoSchema(src?: string) {
  const schemaObj = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: src,
    logo: src,
  };

  if (!src) {
    return null;
  }

  return (
    <script
      key={`JSON-Logo`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObj) }}
    />
  );
}

export { getLogoSchema };

// https://developers.google.com/search/docs/data-types/logo
