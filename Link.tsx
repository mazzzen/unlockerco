import * as React from "react";
import NextLink, { LinkProps } from "next/link";
import { useIntl } from "react-intl";
import { getLocaleInfo } from "./locales-data";
import { useStore } from "../storeData";

interface Props extends LinkProps {
  query?: any;
  children?: any;
  fullHeight?: boolean;
  fullWidth?: boolean;
  absoluteHref?: string;
}

const Link: React.FC<Props> = (props) => {
  const { redirects } = useStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, href, query, absoluteHref, ...restProps } = props;
  const { locale } = useIntl();

  const language = getLocaleInfo(locale).code;
  const redirect = redirects?.[`/${language}${href.toString()}`];
  const correctHref =
    absoluteHref || `/${language}${redirect?.slice(3) || href}`;

  return (
    <NextLink
      href={{
        href: correctHref,
        pathname: correctHref,
        query,
      }}
      style={{
        width: props.fullWidth ? "100%" : "auto",
        height: props.fullHeight ? "100%" : "auto",
      }}
      {...restProps}
    />
  );
};

export { Link };
