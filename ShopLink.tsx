import * as React from "react";
import { Link } from "../../lib/i18n";

interface ShopLinkProps {
  url: string;
  children?: React.ReactNode;
}
export const ShopLink: React.FC<ShopLinkProps> = ({ url, children }) => {
  return <Link href={url}>{children}</Link>;
};
