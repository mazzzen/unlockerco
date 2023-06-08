import React from "react";
import { Link } from "../../../../../lib/i18n";
import { CollectionLink } from "../../../../../components/StoreLink/CollectionLink";
import { ExternalLink } from "../../../../../components/StoreLink/ExternalLink";
import { ProductLink } from "../../../../../components/StoreLink/ProductLink";
import {
  MenuItemType,
  StaticPageEnum,
  StoreMenuItemFragment,
  StorePage,
} from "../../../../../generated/graphql";
import styled from "styled-components";
import { rtl } from "../../../../../shared/styles-utils";

type NavigationLinksProps = StoreMenuItemFragment["link"] & {
  children?: React.ReactNode;
};
export const NavigationLink: React.FC<NavigationLinksProps> = ({
  type,
  staticPageType,
  resource,
  url,
  children,
  openInNewTab,
}) => {
  const handle = (resource as StorePage)?.handle;

  if (type === MenuItemType.Folder) {
    return (
      <span style={{ cursor: "default" }}>
        <ItemWrapper>{children}</ItemWrapper>
      </span>
    );
  }
  if (type === MenuItemType.Page) {
    return (
      <Link href={`/page/${handle}`}>
        <ItemWrapper>{children}</ItemWrapper>
      </Link>
    );
  }
  if (type === MenuItemType.LegalPage) {
    return (
      <Link href={`/page/${handle}`}>
        <ItemWrapper>{children}</ItemWrapper>
      </Link>
    );
  }
  if (type === MenuItemType.Product) {
    return (
      <ProductLink handle={handle!}>
        <ItemWrapper>{children}</ItemWrapper>
      </ProductLink>
    );
  }
  if (type === MenuItemType.Collection) {
    return (
      <CollectionLink handle={handle!}>
        <ItemWrapper>{children}</ItemWrapper>
      </CollectionLink>
    );
  }
  if (type === MenuItemType.ExternalLink) {
    return (
      <ExternalLink openInNewTab={!!openInNewTab} url={url || ""}>
        <ItemWrapper>{children}</ItemWrapper>
      </ExternalLink>
    );
  }
  if (type === MenuItemType.PhoneNumber) {
    return (
      <a href={`tel:${url}`}>
        <ItemWrapper>{children}</ItemWrapper>
      </a>
    );
  }
  if (type === MenuItemType.EmailAddress) {
    return (
      <a href={`mailto:${url}`}>
        <ItemWrapper>{children}</ItemWrapper>
      </a>
    );
  }
  if (
    type === MenuItemType.StaticPage &&
    staticPageType === StaticPageEnum.Home
  ) {
    return (
      <Link href={"/"} passHref>
        <ItemWrapper>{children}</ItemWrapper>
      </Link>
    );
  }
  if (
    type === MenuItemType.StaticPage &&
    staticPageType === StaticPageEnum.Shop
  ) {
    return (
      <Link href={"/shop"} passHref>
        <ItemWrapper>{children}</ItemWrapper>
      </Link>
    );
  }
  if (
    type === MenuItemType.StaticPage &&
    staticPageType === StaticPageEnum.Contact
  ) {
    return (
      <Link href={"/contact-us"} passHref>
        <ItemWrapper>{children}</ItemWrapper>
      </Link>
    );
  }
  return null;
};

const ItemWrapper = styled.span`
  display: flex;

  svg {
    max-height: 18px;
    max-width: 18px;
    ${rtl("margin-left", "margin-right")}: 10px;
  }
`;
