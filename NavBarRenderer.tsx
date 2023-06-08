import React from "react";
import { IntlShape, useIntl } from "react-intl";
import { useCart } from "../contexts/CartContext";
import {
  MenuItemType,
  StaticPageEnum,
  StoreMenuItemFragment,
} from "../generated/graphql";
import { useStore } from "../lib/storeData";
import type { MenuWithChildrenType } from "../templates/default/components/NavBar/menu/types";
import type { NavBarProps } from "../templates/types/NavBarProps";
import type { RendererComponent } from "./types";

interface NavBarRendererProps extends RendererComponent<NavBarProps> {}

const NavBarRenderer: React.FC<NavBarRendererProps> = ({ Component }) => {
  const { appearance, socialMedia } = useStore();
  const intl = useIntl();
  const {
    cart: { subtotal, items },
    toggleSideCart,
  } = useCart();

  const menus = appearance?.menus?.[0]?.items || fallbackMenu(intl);
  const menu = createHierarchicalTree(menus);
  const itemsCount = items?.reduce((acc, curr) => acc + curr?.quantity, 0);

  return (
    <Component
      menu={menu}
      socialMedia={socialMedia}
      subtotal={subtotal}
      itemsCount={itemsCount + ""}
      toggleSideCart={toggleSideCart}
    />
  );
};

export default NavBarRenderer;

/**
 *
 * Helpers
 *
 */
const createHierarchicalTree = (
  items: (StoreMenuItemFragment | null)[],
  id: string | null = null
) => {
  return items
    .filter((item) => item?.parentId === id)
    .map((item) => ({
      ...item,
      children: createHierarchicalTree(items, item?.id),
    }));
};

const fallbackMenu = (intl: IntlShape): MenuWithChildrenType => [
  {
    id: "U3RvcmVNZW51SXRlbTpja25oZHY5OG0wMDAxZjh1bmc3N3Rjc2Yy",
    parentId: null,
    title: intl.formatMessage({ defaultMessage: "Home" }),
    type: MenuItemType["StaticPage"],
    locale: "ar",
    locales: ["ar"],
    handle: null,
    link: {
      __typename: "MenuLink",
      type: MenuItemType["StaticPage"],
      url: "",
      resourceId: null,
      openInNewTab: false,
      staticPageType: StaticPageEnum["Home"],
    },
    children: [],
  },
  {
    id: "U3RvcmVNZW51SXRlbTpja25oZHY5OG4wMDAyZjh1bmR6NWVhenVz",
    parentId: null,
    title: intl.formatMessage({ defaultMessage: "Shop" }),
    type: MenuItemType["StaticPage"],
    locale: "ar",
    locales: ["ar"],
    handle: null,
    link: {
      __typename: "MenuLink",
      type: MenuItemType["StaticPage"],
      url: "",
      resourceId: null,
      openInNewTab: false,
      staticPageType: StaticPageEnum["Shop"],
    },
    children: [],
  },
  {
    __typename: "StoreMenuItem",
    id: "U3RvcmVNZW51SXRlbTpja25oZHY5OG4wMDAzZjh1bmhoeTZmdmlo",
    parentId: null,
    title: intl.formatMessage({ defaultMessage: "Contact" }),
    type: MenuItemType["StaticPage"],
    locale: "ar",
    locales: ["ar"],
    handle: null,
    link: {
      __typename: "MenuLink",
      type: MenuItemType["StaticPage"],
      url: "",
      resourceId: null,
      openInNewTab: false,
      staticPageType: StaticPageEnum["Contact"],
    },
    children: [],
  },
];
