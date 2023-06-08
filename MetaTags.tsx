import React from "react";

function getMetaTags(args: {
  title: string;
  description?: string | null;
  pageUrl: string;
  faviconSrc?: string | null;
  imageSrc?: string | null;
  noIndex?: boolean;
}) {
  const {
    title,
    description = "",
    pageUrl,
    faviconSrc = "/favicon.png",
    imageSrc = "",
    noIndex = false,
  } = args;
  return (
    <React.Fragment>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="application-name" content={title} />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description || ""} />
      <link rel="icon" type="image/x-icon" href={faviconSrc || ""} />
      <link
        rel="apple-touch-icon-precomposed"
        type="image/x-icon"
        href={faviconSrc || ""}
      />
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* <!-- Open Graph --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:image" itemProp="image" content={imageSrc || ""} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description || ""} />
      <meta property="twitter:image" content={imageSrc || ""} />
    </React.Fragment>
  );
}

export { getMetaTags };
