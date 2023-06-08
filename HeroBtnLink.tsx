import * as React from "react";
import { CollectionLink } from "../../../components/StoreLink/CollectionLink";
import { ExternalLink } from "../../../components/StoreLink/ExternalLink";
import { ProductLink } from "../../../components/StoreLink/ProductLink";
import { ShopLink } from "../../../components/StoreLink/ShopLink";
import { LinkType } from "../../../generated/graphql";

type HeroBtnLinkProps = any & {
  children?: React.ReactNode;
};

export const HeroBtnLink: React.FC<HeroBtnLinkProps> = ({
  type,
  url,
  resource,
  children,
}) => {
  const handle = resource?.handle;

  if (!type) {
    return null;
  }

  return <>{LINK_COMPONENTS[type](handle, children, url)}</>;
};

const LINK_COMPONENTS = {
  [LinkType.Product]: (handle, children) => (
    <ProductLink handle={handle}>{children}</ProductLink>
  ),
  [LinkType.Collection]: (handle, children) => (
    <CollectionLink handle={handle}>{children}</CollectionLink>
  ),
  [LinkType.ExternalLink]: (handle, children, url) => (
    <ExternalLink url={url} openInNewTab={true}>
      {children}
    </ExternalLink>
  ),
  [LinkType.Shop]: (handle, children) => (
    <ShopLink url="/shop">{children}</ShopLink>
  ),
};
